

// Генерация карточек с случайными рейтингами
// Мультфильмы
document.addEventListener('DOMContentLoaded', async () => {
    await generateCards();
    setTimeout(positionCardRatingTrand, 200);
});

// --- Вспомогательные функции ---
const shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

const getBaseTitle = (t) => {
    if (!t) return '';
    let cleaned = t.toLowerCase();
    cleaned = cleaned.replace(/\s*(?:и|или|of|the|a|an|часть|part|эпизод|[:–—\-]|,\s*\d+\s*|\s+\d+\s*|\s+[ivx]+\s*|film|movie|сезон|season|фильм|фильмов|фильма|сага|история|серия|том|глава|мир|возвращение|восстание|начало|конец|последний|новый|старый|приключение|приключения|хроники|самоубийц|отряд|планета|гнев|месть|эпоха|последний рыцарь|исход|генезис|судный день|смертельная расплата).*$/, '').trim();
    cleaned = cleaned.replace(/\s*[\(\[].*[\)\]]\s*$/, '').trim();
    cleaned = cleaned.replace(/\s*\d{4}\s*$/, '').trim();
    cleaned = cleaned.replace(/смотреть онлайн бесплатно/i, '').trim();
    cleaned = cleaned.replace(/[^a-z0-9а-яё]+$/, '').trim();

    if (cleaned.length < 3 && t.length > 3) {
        let lessAggressiveClean = t.toLowerCase();
        lessAggressiveClean = lessAggressiveClean.replace(/\s*[\(\[].*[\)\]]\s*$/, '').trim();
        lessAggressiveClean = lessAggressiveClean.replace(/\s*\d{4}\s*$/, '').trim();
        return lessAggressiveClean.replace(/[^a-z0-9а-яё]+$/, '').trim();
    }
    return cleaned.replace(/[\–\—\-]/g, '-').replace(/\s+/g, ' ').trim();
};

const getRating = (c) => parseFloat(c.rating) || -1;

// --- Константы TMDB API ---
const TMDB_API_KEY = '3da216c9cc3fe78b5488855d25d26e13';
const BASE_TMDB_URL = 'https://api.themoviedb.org/3';

// --- Кэширование и получение данных TMDB ---
let processedLocalCards = [];
let processingPromise = null;

async function fetchTmdbMovieData(id) {
    if (!id) return null;
    try {
        const r = await fetch(`${BASE_TMDB_URL}/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=keywords,release_dates&language=ru-RU`);
        if (!r.ok) return null;
        const data = await r.json();
        let certification = null;
        if (data.release_dates && data.release_dates.results) {
            const ruRelease = data.release_dates.results.find(res => res.iso_3166_1 === 'RU');
            if (ruRelease && ruRelease.release_dates.length > 0) {
                certification = ruRelease.release_dates.find(r => r.certification)?.certification;
            } else {
                const usRelease = data.release_dates.results.find(res => res.iso_3166_1 === 'US');
                if (usRelease && usRelease.release_dates.length > 0) {
                    certification = usRelease.release_dates.find(r => r.certification)?.certification;
                } else if (data.release_dates.results.length > 0) {
                    certification = data.release_dates.results[0].release_dates.find(r => r.certification)?.certification;
                }
            }
        }
        data.certification = certification;
        return data;
    } catch (e) {
        return null;
    }
}

async function processLocalCardData(data) {
    if (processedLocalCards.length && !processingPromise) return processedLocalCards;
    if (processingPromise) return await processingPromise;

    processingPromise = Promise.all(data.map(async (c) => {
        const u = { ...c };
        if (c.tmdb_id) {
            const m = await fetchTmdbMovieData(c.tmdb_id);
            if (m) {
                u.genres = m.genres?.map(g => g.name) || [];
                u.keywords = m.keywords?.keywords?.map(k => k.name) || [];
                u.collection_id = m.belongs_to_collection?.id || null;
                u.certification = m.certification || c.certification || null;
            } else {
                u.genres = u.genres || [];
                u.keywords = u.keywords || [];
                u.collection_id = null;
                u.certification = c.certification || null;
            }
        } else {
            u.genres = u.genres || [];
            u.keywords = u.keywords || [];
            u.collection_id = null;
            u.certification = c.certification || null;
        }
        return u;
    })).finally(() => {
        processingPromise = null;
    });
    
    processedLocalCards = await processingPromise;
    return processedLocalCards;
}

async function getTmdbRecommendations(id) {
    let m = [];
    for (const e of [`recommendations`, `similar`]) {
        try {
            const r = await fetch(`${BASE_TMDB_URL}/movie/${id}/${e}?api_key=${TMDB_API_KEY}&language=ru-RU&page=1`);
            if (r.ok) {
                const d = await r.json();
                if (d.results?.length) {
                    m = d.results;
                    break;
                }
            }
        } catch (e) { /* Ignore API errors for recommendations/similar */ }
    }
    return m;
}

// Removed getTmdbCollectionMovies as it's not directly used in the current logic flow for selecting cards.

// --- Функции отображения UI (без изменений) ---
function displayCards(cards, container) {
    container.empty();
    cards.slice(0, 12).forEach((card) => {
        container.append(`
            <li class="splide__slide">
                <div class="card card-media" style="width: 12rem" data-rating="${card.rating}">
                    <a href="${card.link}">
                        <img src="${card.image}" class="card-img-top img-9x16 mt-2" alt="${card.name}" loading="lazy" onerror="this.onerror=null;this.src='/path/to/default-image.jpg';">
                        <div class="card-rating-trand"><span class="span-rating">${card.rating}</span></div>
                        ${card.isTV ? '<div class="card-TV card-TV-trends">TV</div>' : ''}
                        <div class="card-body"><span class="card-tex">${card.name}<br><span class="year">${card.year}</span></span></div>
                    </a>
                </div>
            </li>
        `);
    });

    const images = container.find('img.card-img-top');
    let loadedImages = 0;
    if (images.length === 0) {
        positionCardRatingTrand();
    } else {
        images.each(function() {
            if (this.complete) {
                loadedImages++;
            } else {
                this.onload = this.onerror = () => {
                    loadedImages++;
                    if (loadedImages === images.length) positionCardRatingTrand();
                };
            }
        });
        if (loadedImages === images.length) positionCardRatingTrand();
    }
}

function positionCardRatingTrand() {
    $('.card-item, .card-media').each(function() {
        const $item = $(this);
        const $img = $item.find('img');
        const $rating = $item.find('.card-rating-trand');
        if ($img.length && $rating.length && $img[0].complete) {
            const iRect = $img[0].getBoundingClientRect();
            const cRect = $item[0].getBoundingClientRect();
            $rating.css({
                'position': 'absolute',
                'bottom': `${cRect.bottom - iRect.bottom + 8}px`,
                'right': `${cRect.right - iRect.right + 8}px`,
                'left': 'auto'
            });
        }
    });
}

// --- Упрощенные и усиленные константы для жанров ---
// --- Веса совпадений ---
const GENRE_MATCH_BONUS = 150;
const KEYWORD_MATCH_BONUS = 1000;
const IRRELEVANT_SCORE = -10000;
const YEAR_PROXIMITY_BONUS = 50;
const YEAR_DIFFERENCE_PENALTY_FACTOR = 3;

// --- Абсолютно несовместимые жанры (мгновенный отсев) ---
const ABSOLUTE_GENRE_CONFLICTS = {
    "ужасы": ["семейный", "мультфильм", "мюзикл", "спорт", "детский"], // Ужасы НИКОГДА не должны быть с детскими
    "семейный": ["ужасы", "криминал", "нуар", "боевик", "триллер", "детектив", "военный", "эротика"],
    "мультфильм": ["ужасы", "криминал", "нуар", "боевик", "триллер", "детектив", "военный", "эротика"],
    "документальный": ["фэнтези", "фантастика", "мультфильм", "мюзикл", "спорт", "детский"], // Документальный редко бывает для детей
    "нуар": ["семейный", "мультфильм", "музыка", "спорт", "мюзикл", "комедия", "детский"],
    "мюзикл": ["ужасы", "криминал", "военный", "триллер", "нуар", "документальный", "спорт", "детский"],
    "спорт": ["ужасы", "фэнтези", "фантастика", "нуар", "мюзикл", "детский"],
    "эротика": ["семейный", "мультфильм", "детский"], // Добавляем сюда "детский"
    "детский": ["ужасы", "криминал", "нуар", "боевик", "триллер", "детектив", "военный", "эротика", "документальный", "история", "биография"], // Все, что не для детей
};

// --- Веса для штрафов за ОТСУТСТВИЕ жанра у кандидата, если он ЕСТЬ у текущего фильма ---
const MISSING_REQUIRED_GENRE_PENALTIES = {
    "ужасы": -1000,
    "фантастика": -800,
    "фэнтези": -800,
    "детектив": -600,
    "триллер": -600,
    "боевик": -500,
    "криминал": -500,
    "нуар": -900,
    "вестерн": -700,
    "документальный": -1200,
    "мультфильм": -1000,
    "семейный": -1000,
    "мюзикл": -800,
    "история": -400,
    "военный": -900,
    "спорт": -400,
    "музыка": -400,
    "драма": -150,
    "комедия": -150,
    "приключения": -150,
    "романтика": -100,
    "биография": -300,
    "детский": -1200, // Очень высокий штраф, если ищут детское, а его нет
};

// --- Веса для штрафов за ПРИСУТСТВИЕ "нежелательного" жанра у кандидата, если его НЕТ у текущего фильма ---
const UNWANTED_GENRE_PENALTIES = {
    "ужасы": -1500,
    "мультфильм": -1000,
    "семейный": -1000,
    "документальный": -1200,
    "мюзикл": -800,
    "вестерн": -800,
    "нуар": -800,
    "военный": -600,
    "криминал": -500,
    "спорт": -500,
    "музыка": -500,
    "комедия": -1000,
    "боевик": -300,
    "триллер": -300,
    "фантастика": -900,
    "фэнтези": -900,
    "биография": -400,
    "детский": -1500, // Очень высокий штраф, если в рекомендациях появляется детский фильм, когда его не ищут
};

const CERTIFICATION_PENALTIES = {
    'G': ['R', 'NC-17'],
    'PG': ['R', 'NC-17'],
    'PG-13': ['NC-17'],
    'R': ['G', 'PG'],
    'NC-17': ['G', 'PG', 'PG-13']
};

// --- Улучшенная функция скоринга релевантности ---
const scoreCard = (card, currentMovieRef) => {
    if (!currentMovieRef) return 0;
    let score = 0;
    const cGenres = new Set(card.genres?.map(g => g.toLowerCase()) || []);
    const currentGenres = new Set(currentMovieRef.genres?.map(g => g.toLowerCase()) || []);
    const cKeywords = new Set(card.keywords?.map(k => k.toLowerCase()) || []);
    const currentKeywords = new Set(currentMovieRef.keywords?.map(k => k.toLowerCase()) || []);

    const isSameFranchise = (card.collection_id && currentMovieRef.collection_id && card.collection_id === currentMovieRef.collection_id) ||
                           (getBaseTitle(card.name) === getBaseTitle(currentMovieRef.name) && getBaseTitle(card.name) !== '' && getBaseTitle(card.name).length > 2);

    if (isSameFranchise) {
        score += 5000;
    } else {
        for (const cG of currentGenres) {
            const conflicts = ABSOLUTE_GENRE_CONFLICTS[cG];
            if (conflicts) {
                for (const conflictGenre of conflicts) {
                    if (cGenres.has(conflictGenre)) {
                        return IRRELEVANT_SCORE;
                    }
                }
            }
        }

        currentGenres.forEach(cG => {
            if (!cGenres.has(cG) && MISSING_REQUIRED_GENRE_PENALTIES[cG]) {
                score += MISSING_REQUIRED_GENRE_PENALTIES[cG];
            }
        });

        cGenres.forEach(cG => {
            if (!currentGenres.has(cG) && UNWANTED_GENRE_PENALTIES[cG]) {
                score += UNWANTED_GENRE_PENALTIES[cG];
            }
        });

        if (currentGenres.has('комедия') && !currentGenres.has('семейный') && cGenres.has('семейный') && cGenres.has('комедия')) {
            score -= 1000;
        }
    }

    let matchedGenreCount = 0;
    currentGenres.forEach(cG => {
        if (cGenres.has(cG)) {
            score += GENRE_MATCH_BONUS;
            matchedGenreCount++;
        }
    });

    if (!isSameFranchise && matchedGenreCount === 0 && currentGenres.size > 0) {
        score += -1500;
    }

    let matchedKeywordCount = 0;
    currentKeywords.forEach(k => {
        if (cKeywords.has(k)) {
            score += KEYWORD_MATCH_BONUS;
            matchedKeywordCount++;
        }
    });

    if (!isSameFranchise && matchedGenreCount === 0 && matchedKeywordCount === 0 && (currentGenres.size > 0 || currentKeywords.size > 0)) {
        score += -1000;
    }

    if (!isSameFranchise && currentMovieRef.certification && card.certification) {
        const currentCert = currentMovieRef.certification.toUpperCase();
        const candidateCert = card.certification.toUpperCase();

        if (CERTIFICATION_PENALTIES[currentCert] && CERTIFICATION_PENALTIES[currentCert].includes(candidateCert)) {
            score -= 600;
        }
    }

    score += getRating(card) * 10;

    if (score < IRRELEVANT_SCORE) {
        return IRRELEVANT_SCORE;
    }
    return score;
};


// --- Основная логика генерации рекомендаций ---
async function generateCards() {
    const cardContainer = $('#card-container');
    if (!cardContainer.length) return;

    // YOUR localCardData MUST BE COMPLETE AND UP-TO-DATE!
    const localCardData = [
        {
            "name": "Башня Бога",
            "image": "https://image.tmdb.org/t/p/w500//m4FQUNPbxonuv4kcFm1YgyRgl2C.jpg",
            "link": "/card/anime/100-01/Bashnya-Boga.html",
            "year": "2020",
            "rating": "8.3",
            "tmdb_id": 97860,
            "isTV": true
        },
        {
            "name": "Поднятие уровня в одиночку",
            "image": "https://image.tmdb.org/t/p/w500//orLdJQCcC1Lq13xt62P2xJycyAL.jpg",
            "link": "/card/anime/100-02/Podnyatie-urovnya-v-odinochku.html",
            "year": "2024",
            "rating": "8.5",
            "tmdb_id": 127532,
            "isTV": true
        },
        {
            "name": "Наруто: Ураганные хроники",
            "image": "https://image.tmdb.org/t/p/w500//dIRmrc4XwLJWc3eTCe7KaOYJdKX.jpg",
            "link": "/card/anime/100-03/Naruto-Uragannye-hroniki.html",
            "year": "2007",
            "rating": "8.5",
            "tmdb_id": 31910,
            "isTV": true
        },
        {
            "name": "Блич",
            "image": "https://image.tmdb.org/t/p/w500//nqOO3OmDpTsSgVLUZn2T1Dr2mcV.jpg",
            "link": "/card/anime/100-04/Blich.html",
            "year": "2004",
            "rating": "8.4",
            "tmdb_id": 30984,
            "isTV": true
        },
        {
            "name": "Ванпанчмен",
            "image": "https://image.tmdb.org/t/p/w500//nhq66gOdiAp5mnNbVsxAonliffa.jpg",
            "link": "/card/anime/100-05/Vanpanchmen.html",
            "year": "2015",
            "rating": "8.5",
            "tmdb_id": 63926,
            "isTV": true
        },
        {
            "name": "Восхождение в тени!",
            "image": "https://image.tmdb.org/t/p/w500//eRwEUoIPJ6hNUalD848Ud4F77gZ.jpg",
            "link": "/card/anime/100-06/Voshozhdenie-v-teni.html",
            "year": "2022",
            "rating": "8.1",
            "tmdb_id": 119495,
            "isTV": true
        },
        {
            "name": "Магическая битва",
            "image": "https://image.tmdb.org/t/p/w500//rcHnYQHyFRpl9uOltPQILx8Cnla.jpg",
            "link": "/card/anime/100-07/Magicheskaya-bitva.html",
            "year": "2020",
            "rating": "8.6",
            "tmdb_id": 95479,
            "isTV": true
        },
        {
            "name": "Баскетбол Куроко",
            "image": "https://image.tmdb.org/t/p/w500//ftT1qtT6yWO5rfs237a466N8QRr.jpg",
            "link": "/card/anime/100-08/Basketbol-Kuroko.html",
            "year": "2012",
            "rating": "8.5",
            "tmdb_id": 45783,
            "isTV": true
        },
        {
            "name": "Дорохедоро",
            "image": "https://image.tmdb.org/t/p/w500//lzngNiuEmUYj7oKB5ZWrJggUXFL.jpg",
            "link": "/card/anime/100-09/Dorohedoro.html",
            "year": "2020",
            "rating": "8.3",
            "tmdb_id": 94404,
            "isTV": true
        },
        {
            "name": "Человек-бензопила",
            "image": "https://image.tmdb.org/t/p/w500//92Ds0hOHObvZBekqneimrGpxyXh.jpg",
            "link": "/card/anime/100-10/Chelovek-benzopila.html",
            "year": "2022",
            "rating": "8.6",
            "tmdb_id": 114410,
            "isTV": true
        },
        {
            "name": "Дороро",
            "image": "https://image.tmdb.org/t/p/w500//oudk6QIrLLtMlmVBBQoheNzcqeI.jpg",
            "link": "/card/anime/100-11/Dororo.html",
            "year": "2019",
            "rating": "8.6",
            "tmdb_id": 83100,
            "isTV": true
        },
        {
            "name": "Чёрный клевер",
            "image": "https://image.tmdb.org/t/p/w500//vcsAzsoSJEHgJZ29EkxXWSEVbDN.jpg",
            "link": "/card/anime/100-12/Chyornyj-klever.html",
            "year": "2017",
            "rating": "8.5",
            "tmdb_id": 73223,
            "isTV": true
        },
        {
            "name": "Магия и мускулы",
            "image": "https://image.tmdb.org/t/p/w500//vp3oSq3XUSDeSjv4fvSVlT4mleC.jpg",
            "link": "/card/anime/100-13/Magiya-i-muskuly.html",
            "year": "2023",
            "rating": "8.3",
            "tmdb_id": 204832,
            "isTV": true
        },
        {
            "name": "Школа-тюрьма",
            "image": "https://image.tmdb.org/t/p/w500//50eY9B9JtWcG0KuY5SS1X7E9wQb.jpg",
            "link": "/card/anime/100-14/Shkola-tyurma.html",
            "year": "2015",
            "rating": "8.1",
            "tmdb_id": 64706,
            "isTV": true
        },
        {
            "name": "Шарлотта",
            "image": "https://image.tmdb.org/t/p/w500//rMOGHPGfuywDViL9Oc0tA29oxtA.jpg",
            "link": "/card/anime/100-15/Sharlotta.html",
            "year": "2015",
            "rating": "8.3",
            "tmdb_id": 63145,
            "isTV": true
        },
        {
            "name": "Семья шпиона",
            "image": "https://image.tmdb.org/t/p/w500//xMqGSPjjnc4awD4R8JrRTW0IGOt.jpg",
            "link": "/card/anime/100-16/Semya-shpiona.html",
            "year": "2022",
            "rating": "8.6",
            "tmdb_id": 120089,
            "isTV": true
        },
        {
            "name": "Борьба в прямом эфире",
            "image": "https://image.tmdb.org/t/p/w500//fJw0XoP3t1VNhKLqanyxVOMxjwX.jpg",
            "link": "/card/anime/100-17/Borba-v-pryamom-efire.html",
            "year": "2024",
            "rating": "8.3",
            "tmdb_id": 246029,
            "isTV": true
        },
        {
            "name": "Врата Штейна 0",
            "image": "https://image.tmdb.org/t/p/w500//qpd4qivQAVnJ7Zz6QFCE9km5Jiu.jpg",
            "link": "/card/anime/100-18/Vrata-Shtejna-0.html",
            "year": "2018",
            "rating": "8.0",
            "tmdb_id": 78102,
            "isTV": true
        },
        {
            "name": "Ох, уж этот экстрасенс Сайки Кусуо!",
            "image": "https://image.tmdb.org/t/p/w500//hqOIldYJTq8eI1APi4tx4rZuiHe.jpg",
            "link": "/card/anime/100-19/Oh,-uzh-etot-ekstrasens-Sajki-Kusuo.html",
            "year": "2016",
            "rating": "8.3",
            "tmdb_id": 67676,
            "isTV": true
        },
        {
            "name": "Ван-Пис",
            "image": "https://image.tmdb.org/t/p/w500//osRT8GsND3PfhvevsS5DK9px0LI.jpg",
            "link": "/card/anime/100-20/Van-Pis.html",
            "year": "1999",
            "rating": "8.7",
            "tmdb_id": 37854,
            "isTV": true
        },
        {
            "name": "Добро пожаловать в N.H.K.",
            "image": "https://image.tmdb.org/t/p/w500//5iXnyp9zQb3tNTSOXn0rAJOlxu0.jpg",
            "link": "/card/anime/100-21/Dobro-pozhalovat-v-N.H.K..html",
            "year": "2006",
            "rating": "8.5",
            "tmdb_id": 42821,
            "isTV": true
        },
        {
            "name": "Атака титанов",
            "image": "https://image.tmdb.org/t/p/w500//p5nYJj1N5pVMUixtyIJtfkw1FEr.jpg",
            "link": "/card/anime/100-22/Ataka-titanov.html",
            "year": "2013",
            "rating": "8.7",
            "tmdb_id": 1429,
            "isTV": true
        },
        {
            "name": "Драконий жемчуг супер",
            "image": "https://image.tmdb.org/t/p/w500//9gzkpjs6N7Xxo1CnnJqhFtmYCez.jpg",
            "link": "/card/anime/100-23/Drakonij-zhemchug-super.html",
            "year": "2015",
            "rating": "8.2",
            "tmdb_id": 62715,
            "isTV": true
        },
        {
            "name": "Волейбол!!",
            "image": "https://image.tmdb.org/t/p/w500//5lrJDEQjwCJPLdlfhBmJ8mfpnpX.jpg",
            "link": "/card/anime/100-24/Volejbol.html",
            "year": "2014",
            "rating": "8.6",
            "tmdb_id": 60863,
            "isTV": true
        },
        {
            "name": "Мартовский лев",
            "image": "https://image.tmdb.org/t/p/w500//ufgAYwzv6N2JrOWwyAkoGKMlMbo.jpg",
            "link": "/card/anime/100-25/Martovskij-lev.html",
            "year": "2016",
            "rating": "7.9",
            "tmdb_id": 65336,
            "isTV": true
        },
        {
            "name": "Истребитель демонов",
            "image": "https://image.tmdb.org/t/p/w500//zg3GrU3jAoTGxmlGGhkfNYMOHlb.jpg",
            "link": "/card/anime/100-26/Istrebitel-demonov.html",
            "year": "2019",
            "rating": "8.7",
            "tmdb_id": 85937,
            "isTV": true
        },
        {
            "name": "Баки",
            "image": "https://image.tmdb.org/t/p/w500//6n3DLulcCLbHbkQiC9KBHUbZfGr.jpg",
            "link": "/card/anime/100-27/Baki.html",
            "year": "2001",
            "rating": "8.1",
            "tmdb_id": 56425,
            "isTV": true
        },
        {
            "name": "Нана",
            "image": "https://image.tmdb.org/t/p/w500//5XyTQaZcWgn1iqSuxsh5FRzuJjB.jpg",
            "link": "/card/anime/100-28/Nana.html",
            "year": "2006",
            "rating": "8.4",
            "tmdb_id": 56568,
            "isTV": true
        },
        {
            "name": "Моя геройская академия",
            "image": "https://image.tmdb.org/t/p/w500//aqOnGXW5eCQpfyx74Lu3GTt0AXU.jpg",
            "link": "/card/anime/100-29/Moya-gerojskaya-akademiya.html",
            "year": "2016",
            "rating": "8.6",
            "tmdb_id": 65930,
            "isTV": true
        },
        {
            "name": "Страстное Сердце: Дикий Бомбардир",
            "image": "https://image.tmdb.org/t/p/w500//b0yW5cQX97QfhXeJU9kbQ4UYj9V.jpg",
            "link": "/card/anime/100-30/Strastnoe-Serdce-Dikij-Bombardir.html",
            "year": "2002",
            "rating": "7.9",
            "tmdb_id": 90451,
            "isTV": true
        },
        {
            "name": "Дарованный",
            "image": "https://image.tmdb.org/t/p/w500//gIZtv9fPZMsITHu2PSGiFnEQqHq.jpg",
            "link": "/card/anime/100-31/Darovannyj.html",
            "year": "2019",
            "rating": "8.6",
            "tmdb_id": 88040,
            "isTV": true
        },
        {
            "name": "Летнее время",
            "image": "https://image.tmdb.org/t/p/w500//gyf39hodpr1qJzUXGFuGNlxysdi.jpg",
            "link": "/card/anime/100-32/Letnee-vremya.html",
            "year": "2022",
            "rating": "8.2",
            "tmdb_id": 117933,
            "isTV": true
        },
        {
            "name": "Стальной Алхимик: Братство",
            "image": "https://image.tmdb.org/t/p/w500//n2M0BslYmciTcxHc0SpwSljujUG.jpg",
            "link": "/card/anime/100-33/Stalnoj-Alhimik-Bratstvo.html",
            "year": "2009",
            "rating": "8.7",
            "tmdb_id": 31911,
            "isTV": true
        },
        {
            "name": "Юри на льду",
            "image": "https://image.tmdb.org/t/p/w500//uwHOl8SLvGcbumIlpHgFAqVCEb2.jpg",
            "link": "/card/anime/100-34/Yuri-na-ldu.html",
            "year": "2016",
            "rating": "8.6",
            "tmdb_id": 68129,
            "isTV": true
        },
        {
            "name": "Семь смертных грехов",
            "image": "https://image.tmdb.org/t/p/w500//rRZdyqqRAn1h45oNpA69NehQLcI.jpg",
            "link": "/card/anime/100-35/Sem-smertnyh-grehov.html",
            "year": "2014",
            "rating": "8.4",
            "tmdb_id": 62104,
            "isTV": true
        },
        {
            "name": "Пес и Пускающая в ход ножницы",
            "image": "https://image.tmdb.org/t/p/w500//aOa03hyMhuQlDLmPOovMsAphYH0.jpg",
            "link": "/card/anime/100-36/Pes-i-Puskayushaya-v-hod-nozhnicy.html",
            "year": "2013",
            "rating": "6.4",
            "tmdb_id": 49464,
            "isTV": true
        },
        {
            "name": "Призрак в доспехах: Синдром одиночки",
            "image": "https://image.tmdb.org/t/p/w500//wG7iZsxxFd6PPdYHndpDIMTPdaC.jpg",
            "link": "/card/anime/100-37/Prizrak-v-dospehah-Sindrom-odinochki.html",
            "year": "2002",
            "rating": "8.2",
            "tmdb_id": 1095,
            "isTV": true
        },
        {
            "name": "Токийский Гуль",
            "image": "https://image.tmdb.org/t/p/w500//cB9pdS49LbAryFtJpPQYwfFXbJd.jpg",
            "link": "/card/anime/100-38/Tokijskij-Gul.html",
            "year": "2014",
            "rating": "8.3",
            "tmdb_id": 61374,
            "isTV": true
        },
        {
            "name": "Мастера меча онлайн",
            "image": "https://image.tmdb.org/t/p/w500//htNohqrYEwuz4fCa9ATVF90s58S.jpg",
            "link": "/card/anime/100-39/Mastera-mecha-onlajn.html",
            "year": "2012",
            "rating": "8.2",
            "tmdb_id": 45782,
            "isTV": true
        },
        {
            "name": "Убийца Акаме!",
            "image": "https://image.tmdb.org/t/p/w500//3Jtt3UgwtjJHRFDWZBFwaOji9F.jpg",
            "link": "/card/anime/100-40/Ubijca-Akame!.html",
            "year": "2014",
            "rating": "8.3",
            "tmdb_id": 61223,
            "isTV": true
        },
        {
            "name": "Синие Мибуро",
            "image": "https://image.tmdb.org/t/p/w500//rADnozoUIkrJKBD1CMBPnOBWoqh.jpg",
            "link": "/card/anime/100-41/Sinie-Miburo.html",
            "year": "2024",
            "rating": "8.4",
            "tmdb_id": 234776,
            "isTV": true
        },
        {
            "name": "Тетрадь смерти",
            "image": "https://image.tmdb.org/t/p/w500//jtyBJAqZUUKL1WjyiUTngiviRqI.jpg",
            "link": "/card/anime/100-42/Tetrad-smerti.html",
            "year": "2006",
            "rating": "8.6",
            "tmdb_id": 13916,
            "isTV": true
        },
        {
            "name": "Унесённые призраками",
            "image": "https://image.tmdb.org/t/p/w500//xV3zYcOA6xFjYwizIMDDkl2MGT7.jpg",
            "link": "/card/anime/100-43/Unesyonnye-prizrakami.html",
            "year": "2001",
            "rating": "8.5",
            "tmdb_id": 129
        },
        {
            "name": "ПЛУТОН",
            "image": "https://image.tmdb.org/t/p/w500//uO5kzuKlkISDBzW8QXchk65haRp.jpg",
            "link": "/card/anime/100-44/PLUTON.html",
            "year": "2023",
            "rating": "7.9",
            "tmdb_id": 91997,
            "isTV": true
        },
        {
            "name": "Ходячий замок",
            "image": "https://image.tmdb.org/t/p/w500//oQvAlVSjYsJZPg9raiQRYE0aVrv.jpg",
            "link": "/card/anime/100-45/Hodyachij-zamok.html",
            "year": "2004",
            "rating": "8.4",
            "tmdb_id": 4935
        },
        {
            "name": "Перерождение: Монстр",
            "image": "https://image.tmdb.org/t/p/w500//cxV7wPMW3Xeuu27rV9MJrZm4I7y.jpg",
            "link": "/card/anime/100-46/Pererozhdenie-Monstr.html",
            "year": "2024",
            "rating": "8.2",
            "tmdb_id": 235389,
            "isTV": true
        },
        {
            "name": "Звёзды Айкацу!",
            "image": "https://image.tmdb.org/t/p/w500//fiWqW5wYF702dpQWwSeRwKOyXqZ.jpg",
            "link": "/card/anime/100-47/Zvyozdy-Ajkacu!.html",
            "year": "2016",
            "rating": "6.8",
            "tmdb_id": 65929,
            "isTV": true
        },
        {
            "name": "Хоримия",
            "image": "https://image.tmdb.org/t/p/w500//2ZOfEetRHnqCBzvubdYU3ytwcq.jpg",
            "link": "/card/anime/100-48/Horimiya.html",
            "year": "2021",
            "rating": "8.6",
            "tmdb_id": 110070,
            "isTV": true
        },
        {
            "name": "Обещанный Неверленд",
            "image": "https://image.tmdb.org/t/p/w500//eY2WprrRHCCD2J00PjNJ1Itodlr.jpg",
            "link": "/card/anime/100-49/Obeshannyj-Neverlend.html",
            "year": "2019",
            "rating": "8.4",
            "tmdb_id": 83097,
            "isTV": true
        },
        {
            "name": "Твоё имя",
            "image": "https://image.tmdb.org/t/p/w500//iH2WDCYLIUjc7oPWRT7Kxgxza6k.jpg",
            "link": "/card/anime/100-50/Tvoe-imya.html",
            "year": "2016",
            "rating": "8.5",
            "tmdb_id": 372058
        },
        {
            "name": "О моём перерождении в слизь",
            "image": "https://image.tmdb.org/t/p/w500//dyvUkf3bFFd0tC2yJCJ6rUgeZRO.jpg",
            "link": "/card/anime/100-51/O-moyom-pererozhdenii-v-sliz.html",
            "year": "2018",
            "rating": "8.5",
            "tmdb_id": 82684,
            "isTV": true
        },
        {
            "name": "Могила светлячков",
            "image": "https://image.tmdb.org/t/p/w500//nJYXr0RAznczy5tCZtYcjoYMjEg.jpg",
            "link": "/card/anime/100-52/Mogila-svetlyachkov.html",
            "year": "1988",
            "rating": "8.5",
            "tmdb_id": 12477
        },
        {
            "name": "Мононокэ",
            "image": "https://image.tmdb.org/t/p/w500//g2Hm6h1tQU0w0A1wH7gwB4tH7e7.jpg",
            "link": "/card/anime/100-53/Mononoke.html",
            "year": "2007",
            "rating": "7.9",
            "tmdb_id": 16660,
            "isTV": true
        },
        {
            "name": "Форма голоса",
            "image": "https://image.tmdb.org/t/p/w500//c0Gv8xTSEmIcQPxbhINKvkbJO8s.jpg",
            "link": "/card/anime/100-54/Forma-golosa.html",
            "year": "2016",
            "rating": "8.4",
            "tmdb_id": 378064
        },
        {
            "name": "Реинкарнация безработного",
            "image": "https://image.tmdb.org/t/p/w500//bC2DRV5S6BDtW0DmAqN3g3xtLoP.jpg",
            "link": "/card/anime/100-55/Reinkarnaciya-bezrabotnogo.html",
            "year": "2021",
            "rating": "8.5",
            "tmdb_id": 94664,
            "isTV": true
        },
        {
            "name": "Банановая рыба",
            "image": "https://image.tmdb.org/t/p/w500//3GiB5Ybbhzt0ePRR2zgld9R56DB.jpg",
            "link": "/card/anime/100-56/Bananovaya-ryba.html",
            "year": "2018",
            "rating": "8.6",
            "tmdb_id": 80564,
            "isTV": true
        },
        {
            "name": "Принцесса Мононоке",
            "image": "https://image.tmdb.org/t/p/w500//dZE9oUyp14UEoPk5QV7emBu0Ix3.jpg",
            "link": "/card/anime/100-57/Princessa-Mononoke.html",
            "year": "1997",
            "rating": "8.3",
            "tmdb_id": 128
        },
        {
            "name": "Рок-Шоу!!",
            "image": "https://image.tmdb.org/t/p/w500//cDhy72poqVcnevY3BOGlE76bdca.jpg",
            "link": "/card/anime/100-58/Rok-Shou!!.html",
            "year": "2020",
            "rating": "6.0",
            "tmdb_id": 65036,
            "isTV": true
        },
        {
            "name": "Мой сосед Тоторо",
            "image": "https://image.tmdb.org/t/p/w500//ynClhtTAYG8N7FfU7EYK0T131rj.jpg",
            "link": "/card/anime/100-59/Moj-sosed-Totoro.html",
            "year": "1988",
            "rating": "8.1",
            "tmdb_id": 8392
        },
        {
            "name": "Хост-клуб Оранской школы",
            "image": "https://image.tmdb.org/t/p/w500//rd6QqoO7mOqrfOWiSEa6XL9Jqlv.jpg",
            "link": "/card/anime/100-60/Host-klub-Oranskoj-shkoly.html",
            "year": "2006",
            "rating": "8.2",
            "tmdb_id": 1043,
            "isTV": true
        },
        {
            "name": "Аватар: Легенда об Аанге",
            "image": "https://image.tmdb.org/t/p/w500//pbTLpt8c7YUT4Vr6DE2ai3HY6U7.jpg",
            "link": "/card/anime/100-61/Avatar-Legenda-ob-Aange.html",
            "year": "2005",
            "rating": "8.7",
            "tmdb_id": 246,
            "isTV": true
        },
        {
            "name": "Адский рай",
            "image": "https://image.tmdb.org/t/p/w500//75OaIA4S8ZKFVNmKnTCgAcNqwlC.jpg",
            "link": "/card/anime/100-62/Adskij-raj.html",
            "year": "2023",
            "rating": "8.2",
            "tmdb_id": 117465,
            "isTV": true
        },
        {
            "name": "Дитя погоды",
            "image": "https://image.tmdb.org/t/p/w500//unkWKrTb4SdHAEb78AD4BJvXbwh.jpg",
            "link": "/card/anime/100-63/Ditya pogody.html",
            "year": "2019",
            "rating": "8.0",
            "tmdb_id": 568160
        },
        {
            "name": "Доктор Стоун",
            "image": "https://image.tmdb.org/t/p/w500//uJQCHiHAo7hoDyRPZ792ctjSZ71.jpg",
            "link": "/card/anime/100-64/Doktor-Stoun.html",
            "year": "2019",
            "rating": "8.5",
            "tmdb_id": 86031,
            "isTV": true
        },
        {
            "name": "Паприка",
            "image": "https://image.tmdb.org/t/p/w500//75lTLdVBlpWocSO8nWJqddyedCH.jpg",
            "link": "/card/anime/100-65/Paprika.html",
            "year": "2006",
            "rating": "7.8",
            "tmdb_id": 4977
        },
        {
            "name": "Бродяга Кэнсин",
            "image": "https://image.tmdb.org/t/p/w500//eNs5hTCeZtZCy6rTTsH4sMOrKGZ.jpg",
            "link": "/card/anime/100-66/Brodyaga-Kensin.html",
            "year": "2023",
            "rating": "8.4",
            "tmdb_id": 210879,
            "isTV": true
        },
        {
            "name": "Король шаманов",
            "image": "https://image.tmdb.org/t/p/w500//conBjZLX8KBc18vdQjSNegZytln.jpg",
            "link": "/card/anime/100-67/Korol-shamanov.html",
            "year": "2001",
            "rating": "8.5",
            "tmdb_id": 40143,
            "isTV": true
        },
        {
            "name": "5 сантиметров в секунду",
            "image": "https://image.tmdb.org/t/p/w500//ef5Kpp8knIaWCsuKHKE41cQpuPl.jpg",
            "link": "/card/anime/100-68/5-santimetrov-v-sekundu.html",
            "year": "2007",
            "rating": "7.3",
            "tmdb_id": 38142
        },
        {
            "name": "Путешествие Кино",
            "image": "https://image.tmdb.org/t/p/w500//HMCWRefv371GcIo1HsU0rkC7xx.jpg",
            "link": "/card/anime/100-69/Puteshestvie-Kino.html",
            "year": "2003",
            "rating": "7.7",
            "tmdb_id": 34166,
            "isTV": true
        },
        {
            "name": "Синий Экзорцист",
            "image": "https://image.tmdb.org/t/p/w500//g2RmOH0cDET7pptUrLnzVM6w8DJ.jpg",
            "link": "/card/anime/100-70/Sinij-Ekzorcist.html",
            "year": "2011",
            "rating": "7.9",
            "tmdb_id": 201223,
            "isTV": true
        },
        {
            "name": "Судьба: Начало",
            "image": "https://image.tmdb.org/t/p/w500//lkV0BOHMvdxHrfTWQfaFiKfKpRV.jpg",
            "link": "/card/anime/100-71/Sudba-Nachalo.html",
            "year": "2011",
            "rating": "8.0",
            "tmdb_id": 45845,
            "isTV": true
        },
        {
            "name": "Хвост Феи",
            "image": "https://image.tmdb.org/t/p/w500//q5GiuJHgJJwwk14ufs0ToxFkKt6.jpg",
            "link": "/card/anime/100-72/Hvost-Fei.html",
            "year": "2009",
            "rating": "7.9",
            "tmdb_id": 46261,
            "isTV": true
        },

        // конец


    ];

    processedLocalCards = await processLocalCardData(localCardData);

    const MAX_CARDS = 12;
    const addedCardsLinks = new Set();
    let recommendations = [];

    const addCardToRecommendations = (card) => {
        if (recommendations.length >= MAX_CARDS) return false;
        if (addedCardsLinks.has(card.link)) return false;
        recommendations.push(card);
        addedCardsLinks.add(card.link);
        return true;
    };

    const currentLink = window.location.pathname.includes('card') && window.location.pathname.split('/').some(p => p.endsWith('.html')) ?
        '/' + window.location.pathname.split('/').slice(window.location.pathname.split('/').indexOf('card')).join('/') :
        window.location.pathname.split('?')[0].split('#')[0];

    let currentMovie = null;

    let pageTmdbId = null;
    if (typeof currentFilmData !== 'undefined' && currentFilmData && currentFilmData.id) {
        pageTmdbId = currentFilmData.id;
    } else {
        const movieDataElement = document.getElementById('movie-data');
        if (movieDataElement && movieDataElement.dataset.tmdbId) {
            pageTmdbId = parseInt(movieDataElement.dataset.tmdbId);
        }
    }
    
    if (pageTmdbId) {
        currentMovie = processedLocalCards.find(c => c.tmdb_id === pageTmdbId);
    }

    if (!currentMovie) {
        currentMovie = processedLocalCards.find(c => c.link.toLowerCase() === currentLink.toLowerCase());
    }

    if (!currentMovie) {
        const pageTitleElement = document.querySelector('.movie-title') || document.querySelector('h1') || document.querySelector('h2');
        if (pageTitleElement) {
            const rawPageMovieTitle = pageTitleElement.innerText || pageTitleElement.textContent;
            const cleanPageMovieTitle = getBaseTitle(rawPageMovieTitle);
            currentMovie = processedLocalCards.find(c => getBaseTitle(c.name) === cleanPageMovieTitle);
        }
    }

    if (!currentMovie) {
        const pageTitle = document.title;
        const cleanPageTitle = getBaseTitle(pageTitle);
        const pageTitleMatch = pageTitle.match(/\((\d{4})\)/);
        const pageYear = pageTitleMatch ? parseInt(pageTitleMatch[1]) : null;

        currentMovie = processedLocalCards.find(c => {
            const cBaseTitle = getBaseTitle(c.name);
            const baseTitleMatches = cBaseTitle === cleanPageTitle;
            const yearMatches = pageYear ? parseInt(c.year) === pageYear : true;
            return baseTitleMatches && yearMatches;
        });

        if (!currentMovie) {
            currentMovie = processedLocalCards.find(c => getBaseTitle(c.name) === cleanPageTitle);
        }
    }
    
    if (currentMovie) {
        // ... (логика для страниц с определенным фильмом - без изменений)
        const currentMovieCollectionId = currentMovie.collection_id;
        const currentMovieBaseTitle = getBaseTitle(currentMovie.name);

        const moviesInCurrentFranchise = processedLocalCards.filter(c => {
            const cBaseTitle = getBaseTitle(c.name);
            return (c.link !== currentMovie.link) && 
                   ((c.collection_id && currentMovieCollectionId && c.collection_id === currentMovieCollectionId) ||
                    (cBaseTitle === currentMovieBaseTitle && cBaseTitle !== '' && cBaseTitle.length > 2));
        });

        if (moviesInCurrentFranchise.length > 0) {
            moviesInCurrentFranchise
                .sort((a, b) => parseInt(a.year) - parseInt(b.year))
                .forEach(c => addCardToRecommendations(c));
        }

        const allPotentialCandidates = new Set();
        
        if (currentMovie.tmdb_id) {
            const tmdbRecs = await getTmdbRecommendations(currentMovie.tmdb_id);
            tmdbRecs.forEach(tmdbCard => {
                const localCard = processedLocalCards.find(c => c.tmdb_id === tmdbCard.id);
                if (localCard && localCard.link !== currentMovie.link && !addedCardsLinks.has(localCard.link)) {
                    allPotentialCandidates.add(localCard);
                }
            });
        }

        processedLocalCards.forEach(card => {
            if (card.link !== currentMovie.link && !addedCardsLinks.has(card.link)) {
                allPotentialCandidates.add(card);
            }
        });

        const otherGroupedCandidates = new Map();
        
        for (const card of allPotentialCandidates) {
            const cardBaseTitle = getBaseTitle(card.name);
            const cardCollectionId = card.collection_id;
            let groupKey = null;

            if (cardCollectionId) {
                groupKey = `collection-${cardCollectionId}`;
            } else if (cardBaseTitle && cardBaseTitle.length > 2 &&
                       [...processedLocalCards].some(c => c.link !== card.link && getBaseTitle(c.name) === cardBaseTitle)) {
                groupKey = `title-${cardBaseTitle}`;
            }

            if (groupKey && 
                ((currentMovieCollectionId && groupKey === `collection-${currentMovieCollectionId}`) ||
                 (currentMovieBaseTitle && groupKey === `title-${currentMovieBaseTitle}`))) {
                continue;
            }

            if (groupKey) {
                const currentBestInGroup = otherGroupedCandidates.get(groupKey);
                if (!currentBestInGroup || scoreCard(card, currentMovie) > scoreCard(currentBestInGroup, currentMovie)) {
                    otherGroupedCandidates.set(groupKey, card);
                }
            } else {
                otherGroupedCandidates.set(`single-${card.link}`, card);
            }
        }

        const finalCandidatesForRanking = Array.from(otherGroupedCandidates.values());
        finalCandidatesForRanking.sort((a, b) => scoreCard(b, currentMovie) - scoreCard(a, currentMovie));

        for (const card of finalCandidatesForRanking) {
            if (recommendations.length >= MAX_CARDS) break;
            if (scoreCard(card, currentMovie) <= IRRELEVANT_SCORE) {
                continue;
            }
            addCardToRecommendations(card);
        }

    } else { // Логика для главной страницы или других страниц без конкретного фильма
        const uniqueRandomCards = new Set();
        const availableCards = shuffleArray([...processedLocalCards]); // Создаем копию и перемешиваем

        // Отбираем уникальные фильмы (по одной карточке от франшизы)
        for (const card of availableCards) {
            let isFranchiseAdded = false;
            if (card.collection_id) {
                // Проверяем, есть ли уже фильм из этой коллекции
                for (const existingCard of uniqueRandomCards) {
                    if (existingCard.collection_id === card.collection_id) {
                        isFranchiseAdded = true;
                        break;
                    }
                }
            } else {
                // Для фильмов без collection_id, проверяем по базовому названию
                const cardBaseTitle = getBaseTitle(card.name);
                if (cardBaseTitle && cardBaseTitle.length > 2) {
                    for (const existingCard of uniqueRandomCards) {
                        if (getBaseTitle(existingCard.name) === cardBaseTitle) {
                            isFranchiseAdded = true;
                            break;
                        }
                    }
                }
            }

            if (!isFranchiseAdded && addCardToRecommendations(card)) {
                uniqueRandomCards.add(card);
            }
            if (recommendations.length >= MAX_CARDS) break;
        }

        // Если не набрали достаточно, добиваем оставшимися уникальными
        if (recommendations.length < MAX_CARDS) {
            const remainingUnique = processedLocalCards.filter(c => {
                let isAlreadyAdded = addedCardsLinks.has(c.link);
                if (!isAlreadyAdded && c.collection_id) {
                    for (const existingCard of uniqueRandomCards) {
                        if (existingCard.collection_id === c.collection_id) {
                            isAlreadyAdded = true;
                            break;
                        }
                    }
                } else if (!isAlreadyAdded) {
                    const cBaseTitle = getBaseTitle(c.name);
                    if (cBaseTitle && cBaseTitle.length > 2) {
                        for (const existingCard of uniqueRandomCards) {
                            if (getBaseTitle(existingCard.name) === cBaseTitle) {
                                isAlreadyAdded = true;
                                break;
                            }
                        }
                    }
                }
                return !isAlreadyAdded;
            });
            shuffleArray(remainingUnique);
            for (const card of remainingUnique) {
                if (recommendations.length >= MAX_CARDS) break;
                addCardToRecommendations(card);
            }
        }
    }


    // --- Финальная сборка и отображение ---
    const finalDisplayCards = recommendations.slice(0, MAX_CARDS);

    // Логика группировки (без изменений) - теперь она нужна ТОЛЬКО для сортировки внутри уже отобранных фильмов
    const finalDisplayGrouped = [];
    const franchiseGroups = new Map();

    finalDisplayCards.forEach(card => {
        let key = null;
        if (card.collection_id) {
            key = `collection-${card.collection_id}`;
        } else {
            const potentialGroup = processedLocalCards.filter(pc => getBaseTitle(pc.name) === getBaseTitle(card.name) && getBaseTitle(card.name) !== '');
            if (potentialGroup.length > 1) {
                key = `title-${getBaseTitle(card.name)}`;
            } else {
                key = `single-${card.link}`; // Уникальный ключ для одиночных фильмов
            }
        }

        if (!franchiseGroups.has(key)) {
            franchiseGroups.set(key, []);
        }
        franchiseGroups.get(key).push(card);
    });

    const nonFranchiseCards = [];
    const sortedFranchiseKeys = Array.from(franchiseGroups.keys()).sort();

    for (const key of sortedFranchiseKeys) {
        const group = franchiseGroups.get(key);
        if (key.startsWith('collection-') || key.startsWith('title-')) { // Группы франшиз
            group.sort((a, b) => parseInt(a.year) - parseInt(b.year));
            finalDisplayGrouped.push(...group);
        } else { // Одиночные фильмы
            nonFranchiseCards.push(...group);
        }
    }
    shuffleArray(nonFranchiseCards); // Перемешиваем одиночные фильмы
    finalDisplayGrouped.push(...nonFranchiseCards);

    displayCards(finalDisplayGrouped.slice(0, MAX_CARDS), cardContainer);

    // --- Инициализация Splide (без изменений) ---
    var splide = new Splide('#Collections', {
        type: 'loop',
        focus: 'center',
        autoWidth: true,
        gap: '40px',
        pauseOnHover: true,
        pauseOnFocus: true,
        arrows: true,
        pagination: false,
        drag: true,
        perPage: 3,
        breakpoints: {
            5000: { gap: '23px', perPage: 3 },
            2299.5: { gap: '20px', perPage: 3 },
            2018.5: { gap: '18px', perPage: 3 },
            1899.5: { gap: '18px', perPage: 3 },
            1704.5: { gap: '12px', perPage: 3 },
            1520.5: { gap: '12px', perPage: 3 },
            1320.5: { gap: '28px', perPage: 3 },
            1050: { gap: '12px', perPage: 3 },
            480: { gap: '12px', perPage: 3 }
        }
    }).mount();

    positionCardRatingTrand();
}
// Функция для позиционирования рейтинга на карточках
function positionCardRatingTrand() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const image = card.querySelector('.card-img-top');
        const rating = card.querySelector('.card-rating-trand');
        if (image && rating) {
            const imageRect = image.getBoundingClientRect();
            const cardRect = card.getBoundingClientRect();

            const bottom = cardRect.bottom - imageRect.bottom + 8;
            const right = cardRect.right - imageRect.right + 8;

            rating.style.position = 'absolute';
            rating.style.bottom = bottom + 'px';
            rating.style.right = right + 'px';
        }
    });
}