

// Генерация карточек с случайными рейтингами
// Фильмы






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
const GENRE_MATCH_BONUS = 300;
const KEYWORD_MATCH_BONUS = 100;
const IRRELEVANT_SCORE = -7000;

// --- Абсолютно несовместимые жанры (мгновенный отсев) ---
const ABSOLUTE_GENRE_CONFLICTS = {
    "ужасы": ["семейный", "мультфильм"],
    "семейный": ["ужасы", "криминал", "нуар", "боевик", "триллер"],
    "мультфильм": ["ужасы", "криминал", "нуар", "боевик", "триллер"],
    "документальный": ["фэнтези", "фантастика", "мультфильм"],
    "нуар": ["семейный", "мультфильм", "музыка", "спорт"],
    "мюзикл": ["ужасы", "криминал", "военный", "триллер"],
};

// --- Веса для штрафов за ОТСУТСТВИЕ жанра у кандидата, если он ЕСТЬ у текущего фильма ---
const MISSING_REQUIRED_GENRE_PENALTIES = {
    "ужасы": -800,
    "фантастика": -700,
    "фэнтези": -600,
    "детектив": -500,
    "триллер": -500,
    "боевик": -400,
    "криминал": -400,
    "нуар": -700,
    "вестерн": -600,
    "документальный": -900,
    "мультфильм": -800,
    "семейный": -900,
    "мюзикл": -700,
    "история": -300,
    "военный": -800,
    "спорт": -300,
    "музыка": -300,
    "драма": -100,
    "комедия": -100,
    "приключения": -100,
    "романтика": -50,
};

// --- Веса для штрафов за ПРИСУТСТВИЕ "нежелательного" жанра у кандидата, если его НЕТ у текущего фильма ---
const UNWANTED_GENRE_PENALTIES = {
    "ужасы": -1200,
    "мультфильм": -900,
    "семейный": -900,
    "документальный": -1000,
    "мюзикл": -700,
    "вестерн": -700,
    "нуар": -700,
    "военный": -500,
    "криминал": -400,
    "спорт": -400,
    "музыка": -400,
    "комедия": -300,
    "боевик": -200,
    "триллер": -200,
    "фантастика": -200,
    "фэнтези": -200,
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
            "name": "Мама",
            "image": "https://image.tmdb.org/t/p/w500//ahMqF353szhxtdzltopouUJLJhY.jpg",
            "link": "/card/movies/800-343/Mama.html",
            "year": "2013",
            "rating":"6.3","tmdb_id": 132232
        },
        {
            "name": "Тихое место 2",
            "image": "https://image.tmdb.org/t/p/w500//9mLRf87tqKKpOjEx8M1yl1jZa1k.jpg",
            "link": "/card/movies/800-344/Tihoe-mesto-2.html",
            "year": "2021",
            "rating":"7.5","tmdb_id": 520763
        },
        {
            "name": "Тихое место",
            "image": "https://image.tmdb.org/t/p/w500//b6MMVZWO7LPITq9XS5a4R22CZjG.jpg",
            "link": "/card/movies/800-345/Tihoe-mesto.html",
            "year": "2018",
            "rating":"7.4","tmdb_id": 447332
        },
        {
            "name": "Обезьяна",
            "image": "https://image.tmdb.org/t/p/w500//ehrnPGBOA7EDYDYijNQxcEWLW9F.jpg",
            "link": "/card/movies/800-346/Obezyana.html",
            "year": "2025",
            "rating":"5.9",
            "type": "movie","tmdb_id": 1124620
        },
        {
            "name": "Под Сильвер-Лэйк",
            "image": "https://image.tmdb.org/t/p/w500//tDV86snXPfKknIo8nurftjOS6Sg.jpg",
            "link": "/card/movies/800-347/Pod-Silver-Lejk.html",
            "year": "2018",
            "rating":"6.4","tmdb_id": 396461
        },
        {
            "name": "Ветреная река",
            "image": "https://image.tmdb.org/t/p/w500//jl2w7A4dVbQvCUXvNnduPWrNHZT.jpg",
            "link": "/card/movies/800-348/Vetrenaya-reka.html",
            "year": "2017",
            "rating":"7.4","tmdb_id": 395834
        },
        {
            "name": "Ночные игры",
            "image": "https://image.tmdb.org/t/p/w500//bUXx4kR3SsOxMpqpcy8z0rar028.jpg",
            "link": "/card/movies/800-349/Nochnye-igry.html",
            "year": "2018",
            "rating":"6.8","tmdb_id": 445571
        },
        {
            "name": "Всё могу",
            "image": "https://image.tmdb.org/t/p/w500//gkEDDnkAoD8XbWWel61iTzHYpSa.jpg",
            "link": "/card/movies/800-350/Vsyo-mogu.html",
            "year": "2015",
            "rating":"5.9",
            "type": "movie","tmdb_id": 86828
        },
        {
            "name": "Как быть мужиком",
            "image": "https://image.tmdb.org/t/p/w500//9X9wf40QWAc7K6VDAGv49ifk4uh.jpg",
            "link": "/card/movies/800-351/Kak-byt-muzhikom.html",
            "year": "2013",
            "rating":"6.4","tmdb_id": 213417
        },
        {
            "name": "Самый удачливый человек в Америке",
            "image": "https://image.tmdb.org/t/p/w500//d5X7zcYvQRCMeDOMmRwh8EEtavE.jpg",
            "link": "/card/movies/800-352/Samyj-udachlivyj-chelovek-v-Amerike.html",
            "year": "2025",
            "rating":"6.7","tmdb_id": 1288070
        },
        {
            "name": "Охота на дикарей",
            "image": "https://image.tmdb.org/t/p/w500//2MK52LiSL8ERDSkapfSZeyNEBHE.jpg",
            "link": "/card/movies/800-353/Ohota-na-dikarej.html",
            "year": "2016",
            "rating":"7.6","tmdb_id": 371645
        },
        {
            "name": "Машина времени в джакузи 2",
            "image": "https://image.tmdb.org/t/p/w500//pvVkNrm2q3LXxYPhmn7aqZfnkHN.jpg",
            "link": "/card/movies/800-354/Mashina-vremeni-v-dzhakuzi-2.html",
            "year": "2015",
            "rating":"5.2","tmdb_id": 243938
        },
        {
            "name": "Машина времени в джакузи",
            "image": "https://image.tmdb.org/t/p/w500//rWGA9tP2iIIHa5XTr7TFAi8ef16.jpg",
            "link": "/card/movies/800-355/Mashina-vremeni-v-dzhakuzi.html",
            "year": "2010",
            "rating":"6.0","tmdb_id": 23048
        },
        {
            "name": "Патерсон",
            "image": "https://image.tmdb.org/t/p/w500//pGM4NX8F9hqDmxsc9xFuVHqxE6X.jpg",
            "link": "/card/movies/800-356/Paterson.html",
            "year": "2016",
            "rating":"7.1","tmdb_id": 370755
        },
        {
            "name": "Маяк",
            "image": "https://image.tmdb.org/t/p/w500//70wtLK20nQAg5TrT7e6eMJtaHPW.jpg",
            "link": "/card/movies/800-357/Mayak.html",
            "year": "2019",
            "rating":"7.5","tmdb_id": 503919
        },
        {
            "name": "Из машины",
            "image": "https://image.tmdb.org/t/p/original/ofDay63FNRFW8T92NurTj7IOJAh.jpg",
            "link": "/card/movies/800-358/Iz-mashiny.html",
            "year": "2015",
            "rating":"7.6","tmdb_id": 264660
        },
        {
            "name": "Мина",
            "image": "https://image.tmdb.org/t/p/w500//aA2s6vZPgBGMHSoSpvjSPRP9u1D.jpg",
            "link": "/card/movies/800-359/Mina.html",
            "year": "2016",
            "rating":"6.6","tmdb_id": 345009
        },
        {
            "name": "Лок",
            "image": "https://image.tmdb.org/t/p/w500//n3bGK6pMgQG1tVDhYA5VYORlBmx.jpg",
            "link": "/card/movies/800-360/Lok.html",
            "year": "2014",
            "rating":"6.9","tmdb_id": 210479
        },
        {
            "name": "Враг общества",
            "image": "https://image.tmdb.org/t/p/w500//qoy7q0ZYCvQcjZNlw23ur7Piy30.jpg",
            "link": "/card/movies/800-361/Vrag-obshestva.html",
            "year": "2009",
            "rating":"6.7","tmdb_id": 11322
        },
        {
            "name": "Проект X: Дорвались",
            "image": "https://image.tmdb.org/t/p/w500//tYk4TGtQqtXDrxVDshmLzkNHMkR.jpg",
            "link": "/card/movies/800-362/Proekt-X-Dorvalis.html",
            "year": "2012",
            "rating":"6.9","tmdb_id": 57214
        },
        {
            "name": "Соседи: На тропе войны 2",
            "image": "https://image.tmdb.org/t/p/w500//rWWp4mH8vGUxhQCEffUFaw2yhDi.jpg",
            "link": "/card/movies/800-363/Sosedi-Na-trope-vojny-2.html",
            "year": "2016",
            "rating":"5.8","tmdb_id": 325133
        },
        {
            "name": "Соседи: На тропе войны",
            "image": "https://image.tmdb.org/t/p/w500//jLQxIV4y8GSknnbO9wsT645UaBg.jpg",
            "link": "/card/movies/800-364/Sosedi-Na-trope-vojny.html",
            "year": "2014",
            "rating":"6.2","tmdb_id": 195589
        },
        {
            "name": "Моя девушка – монстр",
            "image": "https://image.tmdb.org/t/p/w500//6x8QfyCKKjsqxsw7Zqx0sQ6Ogc7.jpg",
            "link": "/card/movies/800-365/Moya-devushka-monstr.html",
            "year": "2017",
            "rating":"6.3","tmdb_id": 339967
        },
        {
            "name": "Путешествия Гулливера",
            "image": "https://image.tmdb.org/t/p/w500//oj165IiIp469ysflTjE62BAIzNr.jpg",
            "link": "/card/movies/800-366/Puteshestviya-Gullivera.html",
            "year": "2010",
            "rating":"5.2","tmdb_id": 38745
        },
        {
            "name": "Престиж",
            "image": "https://image.tmdb.org/t/p/w500//9jMvxh1Ib6BPnE0pprRcaNibKDO.jpg",
            "link": "/card/movies/800-270/Prestizh.html",
            "year": "2006",
            "rating":"8.2","tmdb_id": 1124
        },
        {
            "name": "Инферно Габриэля",
            "image": "https://image.tmdb.org/t/p/w500//db3t8EdVco9uWGjffTABpa16MIn.jpg",
            "link": "/card/movies/800-271/Inferno-Gabrielya.html",
            "year": "2020",
            "rating":"8.4","tmdb_id": 696374
        },
        {
            "name": "Миллиардер из трущоб",
            "image": "https://image.tmdb.org/t/p/w500//dFNJOjtKD9ypSHciXY6JRgK24Pw.jpg",
            "link": "/card/movies/800-272/Milliarder-iz-trushob.html",
            "year": "2024",
            "rating":"6.9","tmdb_id": 1299537
        },
        {
            "name": "Великая стена",
            "image": "https://image.tmdb.org/t/p/w500//cMFaJHTdwkaZebGeLoIQxKFR5KN.jpg",
            "link": "/card/movies/800-273/Velikaya-stena.html",
            "year": "2016",
            "rating":"6.0","tmdb_id": 311324
        },
        {
            "name": "Каратэ-пацан",
            "image": "https://image.tmdb.org/t/p/w500//jZs6kX6JCzjJBkTUoMPdaQSFjFa.jpg",
            "link": "/card/movies/800-274/Karate-pacan.html",
            "year": "2010",
            "rating":"6.6","tmdb_id": 38575
        },
        {
            "name": "Хроники хищных городов",
            "image": "https://image.tmdb.org/t/p/w500//6GOzuWuwcEmys4Vs4U699YiqXE3.jpg",
            "link": "/card/movies/800-275/Hroniki-hishnyh-gorodov.html",
            "year": "2018",
            "rating":"6.2","tmdb_id": 428078
        },
        {
            "name": "Загадочная история Бенджамина Баттона",
            "image": "https://image.tmdb.org/t/p/w500//wmVLPh1WFUe8CglklJYpXFMQqiG.jpg",
            "link": "/card/movies/800-276/Zagadochnaya-istoriya-Bendzhamina-Battona.html",
            "year": "2008",
            "rating":"7.6","tmdb_id": 4922
        },
        {
            "name": "Обитель теней",
            "image": "https://image.tmdb.org/t/p/w500//kEeY9gD33yOE1kZ2bv83OvHVeui.jpg",
            "link": "/card/movies/800-277/Obitel-tenej.html",
            "year": "2017",
            "rating":"7.3","tmdb_id": 399366
        },
        {
            "name": "Чип и Дейл спешат на помощь",
            "image": "https://image.tmdb.org/t/p/w500//iFqRKD0epiGXygjsRgnxpTemiO3.jpg",
            "link": "/card/movies/800-278/Chip-i-Dejl-speshat-na-pomosh.html",
            "year": "2022",
            "rating":"7.0","tmdb_id": 420821
        },
        {
            "name": "Области тьмы",
            "image": "https://image.tmdb.org/t/p/w500//tpvt8Le1Pyd3d7lnp9GTW2uD7hj.jpg",
            "link": "/card/movies/800-279/Oblasti-tmy.html",
            "year": "2011",
            "rating":"7.2","tmdb_id": 51876
        },
        {
            "name": "Мальчик в полосатой пижаме",
            "image": "https://image.tmdb.org/t/p/w500//ceMjx4DarStARA96uNvQ7CkwK5c.jpg",
            "link": "/card/movies/800-280/Malchik-v-polosatoj-pizhame.html",
            "year": "2008",
            "rating":"7.8","tmdb_id": 14574
        },
        {
            "name": "Убойные каникулы",
            "image": "https://image.tmdb.org/t/p/w500//oId9WDFgTJGLrXz7RAvnjSrn5PX.jpg",
            "link": "/card/movies/800-281/Ubojnye-kanikuly.html",
            "year": "2010",
            "rating":"7.4","tmdb_id": 46838
        },
        {
            "name": "Эта дурацкая любовь",
            "image": "https://image.tmdb.org/t/p/w500//ho2mxV5t3ZxsgSNP1JMHfxdxpkW.jpg",
            "link": "/card/movies/800-282/Eta-durackaya-lyubov.html",
            "year": "2011",
            "rating":"7.3","tmdb_id": 50646
        },
        {
            "name": "Предел риска",
            "image": "https://image.tmdb.org/t/p/w500//jQpZcCkvf93pBaymalTmW6IPIXf.jpg",
            "link": "/card/movies/800-283/Predel-riska.html",
            "year": "2011",
            "rating":"6.9","tmdb_id": 50839
        },
        {
            "name": "Беглец",
            "image": "https://image.tmdb.org/t/p/w500//ezNxCR9fju6gnTnJ4W6KgcZhD4.jpg",
            "link": "/card/movies/800-284/Beglec.html",
            "year": "2023",
            "rating":"6.8","tmdb_id": 717930
        },
        {
            "name": "Гренландия",
            "image": "https://image.tmdb.org/t/p/w500//5Ko11P6zf8Wfe9IMFJEOAyNf0FK.jpg",
            "link": "/card/movies/800-285/Grenlandiya.html",
            "year": "2020",
            "rating":"7.1","tmdb_id": 524047
        },
        {
            "name": "Последний день Земли",
            "image": "https://image.tmdb.org/t/p/w500//fH1O6CAhZYtSJtQhM0ezUDwYAJJ.jpg",
            "link": "/card/movies/800-286/Poslednij-den-Zemli.html",
            "year": "2024",
            "rating":"5.8","tmdb_id": 1196470
        },
        {
            "name": "Солт",
            "image": "https://image.tmdb.org/t/p/w500//gd7oyofwqEgBhur6XLiGoqMQm2e.jpg",
            "link": "/card/movies/800-287/Solt.html",
            "year": "2010",
            "rating":"6.4","tmdb_id": 27576
        },
        {
            "name": "Земля будущего",
            "image": "https://image.tmdb.org/t/p/w500//d0FN6g1xOevTnq6OYDUg0vURIbJ.jpg",
            "link": "/card/movies/800-288/Zemlya-budushego.html",
            "year": "2015",
            "rating":"6.3","tmdb_id": 158852
        },
        {
            "name": "Красное уведомление",
            "image": "https://image.tmdb.org/t/p/w500//u6m4JTp9ZEAF25mSo0xfStmXSHh.jpg",
            "link": "/card/movies/800-289/Krasnoe-uvedomlenie.html",
            "year": "2021",
            "rating":"6.8","tmdb_id": 512195
        },
        {
            "name": "Самый быстрый Indian",
            "image": "https://image.tmdb.org/t/p/w500//oBFzq9Fdb8GIg8Pc2oFVTvkUmDZ.jpg",
            "link": "/card/movies/800-290/Samyj-bystryj-Indian.html",
            "year": "2005",
            "rating":"7.7","tmdb_id": 9912
        },
        {
            "name": "Сокровище Амазонки",
            "image": "https://image.tmdb.org/t/p/w500//9bKYACG9Uv4TlqKoBdMI8tKNXcl.jpg",
            "link": "/card/movies/800-291/Sokrovishe-Amazonki.html",
            "year": "2003",
            "rating":"6.5","tmdb_id": 10159
        },
        {
            "name": "Человек, который изменил всё",
            "image": "https://image.tmdb.org/t/p/w500//sVTliDUi3ehhRKxHwGC4LxdXg85.jpg",
            "link": "/card/movies/800-292/Chelovek-kotoryj-izmenil-vsyo.html",
            "year": "2011",
            "rating":"7.3","tmdb_id": 60308
        },
        {
            "name": "Легенда",
            "image": "https://image.tmdb.org/t/p/w500//vkjHGlBxNgeLQDA8XpxpJDy0iij.jpg",
            "link": "/card/movies/800-293/Legenda.html",
            "year": "2015",
            "rating":"7.1","tmdb_id": 276907
        },
        {
            "name": "Особняк с привидениями",
            "image": "https://image.tmdb.org/t/p/w500//pE0LqHpxaQvKZCuNR2EikRNO39e.jpg",
            "link": "/card/movies/800-294/Osobnyak-s-privideniyami.html",
            "year": "2023",
            "rating":"6.5","tmdb_id": 616747
        },
        {
            "name": "Особняк с привидениями",
            "image": "https://image.tmdb.org/t/p/w500//l5Z7r1VZfHBE0FlanKrC95EQDw5.jpg",
            "link": "/card/movies/800-295/Osobnyak-s-privideniyami2003.html",
            "year": "2003",
            "rating":"5.7","tmdb_id": 10756
        },
        {
            "name": "Гравитация",
            "image": "https://image.tmdb.org/t/p/w500//u8cZd9KAS0LvLTf2Z4cPflAf0Wz.jpg",
            "link": "/card/movies/800-296/Gravitaciya.html",
            "year": "2013",
            "rating":"7.2","tmdb_id": 49047
        },
        {
            "name": "12 лет рабства",
            "image": "https://image.tmdb.org/t/p/w500//qBY5A6iX3BtTEBIYGUdKm373pxH.jpg",
            "link": "/card/movies/800-297/12-let-rabstva.html",
            "year": "2013",
            "rating":"7.9","tmdb_id": 76203
        },
        {
            "name": "Каникулы",
            "image": "https://image.tmdb.org/t/p/w500//7K4pewvTT1yc7cbFNS6GOZYlNtW.jpg",
            "link": "/card/movies/800-298/Kanikuly.html",
            "year": "2015",
            "rating":"6.3","tmdb_id": 296099
        },
        {
            "name": "Лунный свет",
            "image": "https://image.tmdb.org/t/p/w500//8DD8b6jcAAWLFM55vM51UhYT42h.jpg",
            "link": "/card/movies/800-299/Lunnyj-svet.html",
            "year": "2016",
            "rating":"7.4","tmdb_id": 376867
        },
        {
            "name": "Первому игроку приготовиться",
            "image": "https://image.tmdb.org/t/p/w500//eVvMjpcw2lkS1A7hTeOzZDk0Ocf.jpg",
            "link": "/card/movies/800-300/Pervomu-igroku-prigotovitsya.html",
            "year": "2018",
            "rating":"7.6","tmdb_id": 333339
        },
        {
            "name": "Дракула",
            "image": "https://image.tmdb.org/t/p/original/yw5K6HeWPE2zicm1PcewSkNdJ0v.jpg",
            "link": "/card/movies/800-301/Drakula.html",
            "year": "2014",
            "rating":"6.4","tmdb_id": 49017
        },
        {
            "name": "Пиксели",
            "image": "https://image.tmdb.org/t/p/w500//hpZKgjYqY9Fy0glIvQrddvgz9Ov.jpg",
            "link": "/card/movies/800-302/Pikseli.html",
            "year": "2015",
            "rating":"5.7","tmdb_id": 257344
        },
        {
            "name": "Всё везде и сразу",
            "image": "https://image.tmdb.org/t/p/w500//oFiudghfudYUtW3yHgvv82xgoXP.jpg",
            "link": "/card/movies/800-303/Vsyo-vezde-i-srazu.html",
            "year": "2022",
            "rating":"7.8","tmdb_id": 545611
        },
        {
            "name": "Миа и белый лев",
            "image": "https://image.tmdb.org/t/p/w500//yaFw0YbkGuWeTiidqSNQo4jjxRc.jpg",
            "link": "/card/movies/800-304/Mia-i-belyj-lev.html",
            "year": "2018",
            "rating":"7.3","tmdb_id": 498248
        },
        {
            "name": "Король Ричард",
            "image": "https://image.tmdb.org/t/p/w500//JHb7M3mwxWGLHHtfTu08Ys6aVz.jpg",
            "link": "/card/movies/800-305/Korol-Richard.html",
            "year": "2021",
            "rating":"7.6","tmdb_id": 614917
        },
        {
            "name": "Источник вечной молодости",
            "image": "https://image.tmdb.org/t/p/w500//sxsoSQP16e0Jt8E9Hc8NvwByu8T.jpg",
            "link": "/card/movies/800-306/Istochnik-vechnoj-molodosti.html",
            "year": "2025",
            "rating":"6.6","tmdb_id": 1098006
        },
        {
            "name": "Боги Египта",
            "image": "https://image.tmdb.org/t/p/w500//aAMAc3eIQRkEXXwkreZwpJkNJdG.jpg",
            "link": "/card/movies/800-307/Bogi-Egipta.html",
            "year": "2016",
            "rating":"5.7","tmdb_id": 205584
        },
        {
            "name": "Отель «Гранд Будапешт»",
            "image": "https://image.tmdb.org/t/p/w500//5qFxj03eBrkI0bUiGIonb4e0AI4.jpg",
            "link": "/card/movies/800-308/Otel-Grand-Budapesht.html",
            "year": "2014",
            "rating":"8.0","tmdb_id": 120467
        },
        {
            "name": "Шафер напрокат",
            "image": "https://image.tmdb.org/t/p/w500//1rjskQMrE3QrKry64jLsz8GjEbr.jpg",
            "link": "/card/movies/800-309/Shafer-naprokat.html",
            "year": "2015",
            "rating":"6.5","tmdb_id": 252838
        },
        {
            "name": "Прогулка",
            "image": "https://image.tmdb.org/t/p/w500//uosoDdJkXtLdXT9Vc9kGDpWaQFK.jpg",
            "link": "/card/movies/800-310/Progulka.html",
            "year": "2015",
            "rating":"7.0","tmdb_id": 285783
        },
        {
            "name": "Эверест",
            "image": "https://image.tmdb.org/t/p/w500//zIuSZWPQ51PNXD1HnwjkJ3sm9w8.jpg",
            "link": "/card/movies/800-311/Everest.html",
            "year": "2015",
            "rating":"6.8","tmdb_id": 253412
        },
        {
            "name": "Исчезнувшая",
            "image": "https://image.tmdb.org/t/p/w500//dBFu1XPsa8NptOJnGiKUJKMVe3C.jpg",
            "link": "/card/movies/800-312/Ischeznuvshaya.html",
            "year": "2014",
            "rating":"7.9","tmdb_id": 210577
        },
        {
            "name": "Дожить до Рассвета",
            "image": "https://image.tmdb.org/t/p/w500//s00A7xz0CtnRO7jAXQxCKnVt3XB.jpg",
            "link": "/card/movies/800-313/Dozhit-do-Rassveta.html",
            "year": "2025",
            "rating":"6.5","tmdb_id": 1232546
        },
        {
            "name": "Спасатели Малибу",
            "image": "https://image.tmdb.org/t/p/w500//s4T3R588ESvNTEuIizFyftzz8Kt.jpg",
            "link": "/card/movies/800-314/Spasateli-Malibu.html",
            "year": "2017",
            "rating":"6.1","tmdb_id": 339846
        },
        {
            "name": "Призраки в Венеции",
            "image": "https://image.tmdb.org/t/p/w500//jtKew4ZqdFi8l6lfmEPGnU87T2J.jpg",
            "link": "/card/movies/800-315/Prizraki-v-Venecii.html",
            "year": "2023",
            "rating":"6.6","tmdb_id": 945729
        },
        {
            "name": "Смерть на Ниле",
            "image": "https://image.tmdb.org/t/p/w500//iFseuSAGkldPtMbvpap2VM0xqnc.jpg",
            "link": "/card/movies/800-316/Smert-na-Nile.html",
            "year": "2022",
            "rating":"6.4","tmdb_id": 505026
        },
        {
            "name": "Убийство в «Восточном экспрессе»",
            "image": "https://image.tmdb.org/t/p/w500//c0EHJ8sOgghjgEXw2PCE3j3qV0A.jpg",
            "link": "/card/movies/800-317/Ubijstvo-v-Vostochnom-ekspresse.html",
            "year": "2017",
            "rating":"6.7","tmdb_id": 392044
        },
        {
            "name": "Философы: Урок выживания",
            "image": "https://image.tmdb.org/t/p/w500//qB0xYHut6aMDnJamTlRk84tPHBp.jpg",
            "link": "/card/movies/800-318/Filosofy-Urok-vyzhivaniya.html",
            "year": "2013",
            "rating":"6.1","tmdb_id": 198287
        },
        {
            "name": "История дельфина 2",
            "image": "https://image.tmdb.org/t/p/w500//3r7rpXgCRSeHxjqX7XygIiNZSFy.jpg",
            "link": "/card/movies/800-319/Istoriya-delfina-2.html",
            "year": "2014",
            "rating":"6.9","tmdb_id": 227735
        },
        {
            "name": "История дельфина",
            "image": "https://image.tmdb.org/t/p/w500//9WWuPFkYOUHmi2lW4Fcc1G9pRUe.jpg",
            "link": "/card/movies/800-320/Istoriya-delfina.html",
            "year": "2011",
            "rating":"6.9","tmdb_id": 62837
        },
        {
            "name": "Комната",
            "image": "https://image.tmdb.org/t/p/w500//t8ee0FShxIeijkg84wFZdc62ivX.jpg",
            "link": "/card/movies/800-321/Komnata.html",
            "year": "2015",
            "rating":"8.0","tmdb_id": 264644
        },
        {
            "name": "Как заработать на убийстве",
            "image": "https://image.tmdb.org/t/p/w500//wRynb0YJqH8gw5TctwDQUIbpFaQ.jpg",
            "link": "/card/movies/800-322/Kak-zarabotat-na-ubijstve.html",
            "year": "2025",
            "rating":"6.6","tmdb_id": 1210732
        },
        {
            "name": "Дюнкерк",
            "image": "https://image.tmdb.org/t/p/w500//m3xR365ajZrTN5vm2xf91L1zplv.jpg",
            "link": "/card/movies/800-323/Dyunkerk.html",
            "year": "2017",
            "rating":"7.5","tmdb_id": 374720
        },
        {
            "name": "Меню",
            "image": "https://image.tmdb.org/t/p/w500//84khkKvBldEp3h1PQUe6v8ItpR7.jpg",
            "link": "/card/movies/800-324/Menyu.html",
            "year": "2022",
            "rating":"7.2","tmdb_id": 593643
        },
        {
            "name": "Лекарство от здоровья",
            "image": "https://image.tmdb.org/t/p/w500//qN67d5SCiilDe8caBHi4GH6Ih8o.jpg",
            "link": "/card/movies/800-325/Lekarstvo-ot-zdorovya.html",
            "year": "2017",
            "rating":"6.3","tmdb_id": 340837
        },
        {
            "name": "Не звезди!",
            "image": "https://image.tmdb.org/t/p/w500//tAkZCkfPlb1R7ltLODoSZ3ybbXH.jpg",
            "link": "/card/movies/800-326/Ne-zvezdi.html",
            "year": "2022",
            "rating":"5.0","tmdb_id": 829165
        },
        {
            "name": "Диктатор",
            "image": "https://image.tmdb.org/t/p/w500//zfBGrRcTIocjWXrwdUfWmfCAeez.jpg",
            "link": "/card/movies/800-327/Diktator.html",
            "year": "2012",
            "rating":"6.2","tmdb_id": 76493
        },
        {
            "name": "Прочь",
            "image": "https://image.tmdb.org/t/p/w500//hkchWNmGfcgow2Jivyxv83JqHCy.jpg",
            "link": "/card/movies/800-328/Proch.html",
            "year": "2017",
            "rating":"7.6","tmdb_id": 419430
        },
        {
            "name": "Аладдин",
            "image": "https://image.tmdb.org/t/p/w500//t7D1Q4qQ4LjlaUXUqB7ny3xdIAy.jpg",
            "link": "/card/movies/800-329/Aladdin2019.html",
            "year": "2019",
            "rating":"7.1","tmdb_id": 420817
        },
        {
            "name": "Люси",
            "image": "https://image.tmdb.org/t/p/w500//et3oLVuK8AfAikDot01X68PbMmK.jpg",
            "link": "/card/movies/800-330/Lyusi.html",
            "year": "2014",
            "rating":"6.5","tmdb_id": 240832
        },
        {
            "name": "Война токов",
            "image": "https://image.tmdb.org/t/p/w500//oD5vaUElVgwwfF2k5aI7pSOVNdJ.jpg",
            "link": "/card/movies/800-331/Vojna-tokov.html",
            "year": "2018",
            "rating":"6.7","tmdb_id": 418879
        },
        {
            "name": "Отец-молодец",
            "image": "https://image.tmdb.org/t/p/w500//rcXVtyWQNDSJaQY2LciQ2xVU7cs.jpg",
            "link": "/card/movies/800-332/Otec-molodec.html",
            "year": "2013",
            "rating":"6.3","tmdb_id": 146239
        },
        {
            "name": "Игра на понижение",
            "image": "https://image.tmdb.org/t/p/w500//i46ouFO2WBqJ1xIoTQgrD8Criol.jpg",
            "link": "/card/movies/800-333/Igra-na-ponizhenie.html",
            "year": "2015",
            "rating":"7.4","tmdb_id": 318846
        },
        {
            "name": "Крепись!",
            "image": "https://image.tmdb.org/t/p/w500//8v1u1kU50wvqtZhV6WQMD1lVFZY.jpg",
            "link": "/card/movies/800-334/Krepis.html",
            "year": "2015",
            "rating":"6.0","tmdb_id": 257091
        },
        {
            "name": "Любовь и другие лекарства",
            "image": "https://image.tmdb.org/t/p/w500//zys6uLVuwh2o7epNMYj45cylDxl.jpg",
            "link": "/card/movies/800-335/Lyubov-i-drugie-lekarstva.html",
            "year": "2010",
            "rating":"7.0","tmdb_id": 43347
        },
        {
            "name": "Быть лучше: История Робби Уильямса",
            "image": "https://image.tmdb.org/t/p/w500//4nUN5BtOyHKi0bWmin8ZEgdTzve.jpg",
            "link": "/card/movies/800-336/Byt-luchshe-Istoriya-Robbi-Uilyamsa.html",
            "year": "2024",
            "rating":"7.8","tmdb_id": 799766
        },
        {
            "name": "Хочу как ты",
            "image": "https://image.tmdb.org/t/p/w500//b2OQYDWZJGUrfSP6dOSyXJ3xq2r.jpg",
            "link": "/card/movies/800-337/Hochu-kak-ty.html",
            "year": "2011",
            "rating":"6.2","tmdb_id": 49520
        },
        {
            "name": "Бабули",
            "image": "https://image.tmdb.org/t/p/w500//7yGSVs3N0USyU2N2z1NC4H6AY03.jpg",
            "link": "/card/movies/800-342/Babuli.html",
            "year": "2025",
            "rating":"6.9","tmdb_id": 1151039
        },
        {
            "name": "Я иду искать",
            "image": "https://image.tmdb.org/t/p/w500//jPGy3buduikigoc7UJFPRbWhL1b.jpg",
            "link": "/card/movies/800-338/Ya-idu-iskat.html",
            "year": "2019",
            "rating":"7.0","tmdb_id": 567609
        },
        {
            "name": "Одарённая",
            "image": "https://image.tmdb.org/t/p/w500//z6wow2HLj15W3xGJeToIm45647e.jpg",
            "link": "/card/movies/800-339/Odaryonnaya.html",
            "year": "2017",
            "rating":"8.0","tmdb_id": 400928
        },
        {
            "name": "Тетрадь смерти",
            "image": "https://image.tmdb.org/t/p/w500//AkU1W85hrAYABv0oTDMrYaX8T8F.jpg",
            "link": "/card/movies/800-340/Tetrad-smerti.html",
            "year": "2017",
            "rating":"4.3","tmdb_id": 351460
        },
        {
            "name": "Прибытие",
            "image": "https://image.tmdb.org/t/p/w500//3K1byNV0CfChvJFNbe2ZAkiro4U.jpg",
            "link": "/card/movies/800-04/Pribytie.html",
            "year": "2016",
            "rating":"7.6","tmdb_id": 329865
        },
        {
            "name": "Богемская рапсодия",
            "image": "https://image.tmdb.org/t/p/w500//fXGXv5myFWcQjrVol546Fa9lmo6.jpg",
            "link": "/card/movies/800-341/Bogemskaya-rapsodiya.html",
            "year": "2018",
            "rating":"8.0","tmdb_id": 424694
        },
        {
            "name": "В первый раз",
            "image": "https://image.tmdb.org/t/p/w500//cnbNuaNbwblc0K6OC0h2nrVdqbi.jpg",
            "link": "/card/movies/800-05/V-pervyj-raz.html",
            "year": "2012",
            "rating":"7.0","tmdb_id": 84199
        },
        {
            "name": "Паразиты",
            "image": "https://image.tmdb.org/t/p/w500//zg3lUyLTnpbS5N29G6B3a63O7uP.jpg",
            "link": "/card/movies/800-06/Parazity.html",
            "year": "2019",
            "rating":"8.5","tmdb_id": 496243
        },
        {
            "name": "Идеальные незнакомцы",
            "image": "https://image.tmdb.org/t/p/w500//x6KjNrGkNUkhHcmml1vHR0989a9.jpg",
            "link": "/card/movies/800-07/Idealnye-neznakomcy.html",
            "year": "2016",
            "rating":"7.9","tmdb_id": 381341
        },
        {
            "name": "Остров проклятых",
            "image": "https://image.tmdb.org/t/p/w500//3UVMyefkUBiktshtKIEnNXvOFKH.jpg",
            "link": "/card/movies/800-08/Ostrov-proklyatyh.html",
            "year": "2010",
            "rating":"8.2","tmdb_id": 11324
        },
        {
            "name": "Логан",
            "image": "https://image.tmdb.org/t/p/w500//6FSoZ8mtEwPAO3k670G3yRaBpTK.jpg",
            "link": "/card/movies/800-09/Logan.html",
            "year": "2017",
            "rating":"7.8","tmdb_id": 263115
        },
        {
            "name": "Кит",
            "image": "https://image.tmdb.org/t/p/w500//bUA6X03vffX3qCy3diF91PFo428.jpg",
            "link": "/card/movies/800-11/Kit.html",
            "year": "2022",
            "rating":"7.8","tmdb_id": 785084
        },
        {
            "name": "Кто там?",
            "image": "https://image.tmdb.org/t/p/original/awc6lTA5fYlkNsAAAZYZrGZ5yoq.jpg",
            "link": "/card/movies/800-13/Kto-tam.html",
            "year": "2015",
            "rating":"5.4","tmdb_id": 263472
        },
        {
            "name": "Круэлла",
            "image": "https://image.tmdb.org/t/p/w500//hUfyYGP9Xf6cHF9y44JXJV3NxZM.jpg",
            "link": "/card/movies/800-15/Kruella.html",
            "year": "2021",
            "rating":"8.0","tmdb_id": 337404
        },
        {
            "name": "Зомби по имени Шон",
            "image": "https://image.tmdb.org/t/p/w500//hACq0LdC5WNjPb1jzTZzuj1R4qx.jpg",
            "link": "/card/movies/800-18/Zombi-po-imeni-Shon.html",
            "year": "2004",
            "rating":"7.5","tmdb_id": 747
        },
        {
            "name": "Выживший",
            "image": "https://image.tmdb.org/t/p/w500//gvWniVnehAkIAfy40VlcFy3vOef.jpg",
            "link": "/card/movies/800-19/Vyzhivshij.html",
            "year": "2015",
            "rating":"7.5","tmdb_id": 281957
        },
        {
            "name": "Гнев человеческий",
            "image": "https://image.tmdb.org/t/p/w500//nRE9zOfzdp4uQMeDOgCvMf6izNh.jpg",
            "link": "/card/movies/800-21/Gnev-chelovecheskij.html",
            "year": "2021",
            "rating":"7.6","tmdb_id": 637649
        },
        {
            "name": "Одержимость",
            "image": "https://image.tmdb.org/t/p/w500//nq3mYsTXx6086nFXxzDReQI0J1S.jpg",
            "link": "/card/movies/800-23/Oderzhimost.html",
            "year": "2014",
            "rating":"8.4","tmdb_id": 244786
        },
        {
            "name": "Зелёная книга",
            "image": "https://image.tmdb.org/t/p/w500//aEeTnDzcnGRD5IjSFwVXjusKpu0.jpg",
            "link": "/card/movies/800-24/Zelyonaya-kniga.html",
            "year": "2018",
            "rating":"8.2","tmdb_id": 490132
        },
        {
            "name": "Последний охотник на демонов",
            "image": "https://image.tmdb.org/t/p/w500//t1U8Rvxb2uimjlH5J45kGg2AHYS.jpg",
            "link": "/card/movies/800-243/Poslednij-ohotnik-na-demonov.html",
            "year": "2025",
            "rating":"6.2","tmdb_id": 1353117
        },
        {
            "name": "Ford против Ferrari",
            "image": "https://image.tmdb.org/t/p/w500//579BjDiFrK9VK8EnKZzYwtGGXCg.jpg",
            "link": "/card/movies/800-25/Ford-protiv-Ferrari.html",
            "year": "2019",
            "rating":"8.0","tmdb_id": 359724
        },
        {
            "name": "Миссия: Красный",
            "image": "https://image.tmdb.org/t/p/w500//6T36kuDbXCGRistIewSwKyTmijt.jpg",
            "link": "/card/movies/800-26/Missiya-Krasnyj.html",
            "year": "2024",
            "rating":"7.1","tmdb_id": 845781
        },
        {
            "name": "Братья Гримм",
            "image": "https://image.tmdb.org/t/p/w500//aADABzbuqnVWjXIu2jO5M1IkEIR.jpg",
            "link": "/card/movies/800-27/Bratya-Grimm.html",
            "year": "2005",
            "rating":"5.8","tmdb_id": 4442
        },
        {
            "name": "Посвященный",
            "image": "https://image.tmdb.org/t/p/w500//aXXEcHZsZ2lXUxPLaadnXeZVz5c.jpg",
            "link": "/card/movies/800-29/Posvyashennyj.html",
            "year": "2014",
            "rating":"6.6","tmdb_id": 227156
        },
        {
            "name": "Рейс навылет",
            "image": "https://image.tmdb.org/t/p/w500//1Os0R2vgXPIBAl6MyMoBhJcmbHw.jpg",
            "link": "/card/movies/800-244/Rejs-navylet.html",
            "year": "2025",
            "rating":"5.9","tmdb_id": 1212855
        },
        {
            "name": "И гаснет свет",
            "image": "https://image.tmdb.org/t/p/w500//f5njPYl9eQdwf0xUwJuQ7no6ET.jpg",
            "link": "/card/movies/800-30/I-gasnet-svet.html",
            "year": "2016",
            "rating":"6.4","tmdb_id": 345911
        },
        {
            "name": "Комната желаний",
            "image": "https://image.tmdb.org/t/p/w500//de2V6MaJzGRclg1pQaSG2v3i0yW.jpg",
            "link": "/card/movies/800-39/Komnata-zhelanij.html",
            "year": "2019",
            "rating":"6.4","tmdb_id": 582913
        },
        {
            "name": "Школа мистера Пингвина",
            "image": "https://image.tmdb.org/t/p/w500//xiavsOGJJD0NGliB5BZtrJdbQLT.jpg",
            "link": "/card/movies/800-245/Shkola-mistera-Pingvina.html",
            "year": "2025",
            "rating":"7.2","tmdb_id": 1086497
        },
        {
            "name": "Дорогой Санта",
            "image": "https://image.tmdb.org/t/p/w500//v4LzYnQ1VGb0Q191Eb0NDSxdEKy.jpg",
            "link": "/card/movies/800-51/Dorogoj-Santa.html",
            "year": "2024",
            "rating":"6.3","tmdb_id": 1097870
        },
        {
            "name": "Вивариум",
            "image": "https://image.tmdb.org/t/p/w500//6z5otnH68jltjyC6748irDsC7B3.jpg",
            "link": "/card/movies/800-37/Vivarium.html",
            "year": "2019",
            "rating":"6.1","tmdb_id": 458305
        },
        {
            "name": "Смерть Единорога",
            "image": "https://image.tmdb.org/t/p/w500//lVINt3dHhoMBLscMog0oYzrjCzR.jpg",
            "link": "/card/movies/800-246/Smert-Edinoroga.html",
            "year": "2025",
            "rating":"6.5","tmdb_id": 1153714
        },
        {
            "name": "Марсианин",
            "image": "https://image.tmdb.org/t/p/w500//6U19srkH4wI6taluviXbVaIpsau.jpg",
            "link": "/card/movies/800-47/Marsianin.html",
            "year": "2015",
            "rating":"7.7","tmdb_id": 286217
        },
        {
            "name": "Наполеон",
            "image": "https://image.tmdb.org/t/p/w500//z7E0ZtNnRheOZThX2QtSu3RmtXP.jpg",
            "link": "/card/movies/800-89/Napoleon.html",
            "year": "2023",
            "rating":"6.4","tmdb_id": 753342
        },
        {
            "name": "Другой человек",
            "image": "https://image.tmdb.org/t/p/w500//dX5CQBzWX6ePHj8WvHWideMYw5D.jpg",
            "link": "/card/movies/800-64/Drugoj-chelovek.html",
            "year": "2024",
            "rating":"7.1","tmdb_id": 989662
        },
        {
            "name": "Собачья жизнь 2",
            "image": "https://image.tmdb.org/t/p/w500//nTIYb1c3JcqFRo9V1RIzflsJTmj.jpg",
            "link": "/card/movies/800-151/Sobachya-zhizn-2.html",
            "year": "2019",
            "rating":"8.1","tmdb_id": 522518
        },
        {
            "name": "Собачья жизнь",
            "image": "https://image.tmdb.org/t/p/w500//iTSNCcbjehovQf26YcW2uTRKBhH.jpg",
            "link": "/card/movies/800-152/Sobachya-zhizn.html",
            "year": "2017",
            "rating":"7.6","tmdb_id": 381289
        },
        {
            "name": "Микки 17",
            "image": "https://image.tmdb.org/t/p/w500//884NNRoCyADkpk7pzxpCaSZCzor.jpg",
            "link": "/card/movies/800-247/Mikki-17.html",
            "year": "2025",
            "rating":"6.9","tmdb_id": 696506
        },
        {
            "name": "Топ Ган: Мэверик",
            "image": "https://image.tmdb.org/t/p/w500//niNo4qTtIule2vvMFW05amvMtOB.jpg",
            "link": "/card/movies/800-10/Top-Gan-Meverik.html",
            "year": "2022",
            "rating":"8.2","tmdb_id": 361743
        },
        {
            "name": "Лучший стрелок",
            "image": "https://image.tmdb.org/t/p/w500//8khU38Bv9ovTAP9M7lHqFA5ezAU.jpg",
            "link": "/card/movies/800-144/Luchshij-strelok.html",
            "year": "1986",
            "rating":"7.1","tmdb_id": 744
        },
        {
            "name": "Миссия невыполнима: Смертельная...",
            "image": "https://image.tmdb.org/t/p/w500//qncL23TGeAqmqmbBxJl4R6nYToJ.jpg",
            "link": "/card/movies/800-12/Missiya-nevypolnima-Smertelnaya....html",
            "year": "2023",
            "rating":"7.5","tmdb_id": 575264
        },
        {
            "name": "Миссия невыполнима: Последствия",
            "image": "https://image.tmdb.org/t/p/w500//2hDzCRhXWm5ry2nFs9HQBIon1DJ.jpg",
            "link": "/card/movies/800-145/Missiya-nevypolnima-Posledstviya.html",
            "year": "2018",
            "rating":"7.4","tmdb_id": 353081
        },
        {
            "name": "Миссия невыполнима: Племя изгоев",
            "image": "https://image.tmdb.org/t/p/w500//fTZcCAdMtMQllBRabszq6tZwhxS.jpg",
            "link": "/card/movies/800-146/Missiya-nevypolnima-Plemya-izgoev.html",
            "year": "2015",
            "rating":"7.2","tmdb_id": 177677
        },
        {
            "name": "Миссия невыполнима: Протокол Фантом",
            "image": "https://image.tmdb.org/t/p/w500//neKiBzXzI6yuN8Fn8beoLcYASsE.jpg",
            "link": "/card/movies/800-147/Missiya-nevypolnima-Protokol-Fantom.html",
            "year": "2011",
            "rating":"7.1","tmdb_id": 56292
        },
        {
            "name": "Миссия невыполнима 3",
            "image": "https://image.tmdb.org/t/p/w500//1QgOjoYLproxIWRZxhZx9pXsmuY.jpg",
            "link": "/card/movies/800-148/Missiya-nevypolnima-3.html",
            "year": "2006",
            "rating":"6.7","tmdb_id": 956
        },
        {
            "name": "Миссия невыполнима 2",
            "image": "https://image.tmdb.org/t/p/w500//er6j9Gh6cX2na9B0wXMcPAD2tbl.jpg",
            "link": "/card/movies/800-149/Missiya-nevypolnima-2.html",
            "year": "2000",
            "rating":"6.1","tmdb_id": 955
        },
        {
            "name": "Миссия невыполнима",
            "image": "https://image.tmdb.org/t/p/w500//1qnh1n1tVRq7JY8MYbvaZgfRfq2.jpg",
            "link": "/card/movies/800-150/Missiya-nevypolnima.html",
            "year": "1996",
            "rating":"7.0","tmdb_id": 954
        },
        {
            "name": "Стражи Галактики. Часть 3",
            "image": "https://image.tmdb.org/t/p/w500//5rHLzqZvw85tnhy8qpnAsN8Q7xO.jpg",
            "link": "/card/movies/800-153/Strazhi-Galaktiki-Chast-3.html",
            "year": "2023",
            "rating":"7.9","tmdb_id": 447365
        },
        {
            "name": "Стражи Галактики. Часть 2",
            "image": "https://image.tmdb.org/t/p/w500//miAFwzWPkv7l8VPwgH2sV5oQQKx.jpg",
            "link": "/card/movies/800-154/Strazhi-Galaktiki-Chast-2.html",
            "year": "2017",
            "rating":"7.6","tmdb_id": 283995
        },
        {
            "name": "Стражи Галактики",
            "image": "https://image.tmdb.org/t/p/w500//s8jpilArz8J5X07O4IB7ahMwgQP.jpg",
            "link": "/card/movies/800-14/Strazhi-Galaktiki.html",
            "year": "2014",
            "rating":"7.9","tmdb_id": 118340
        },
        {
            "name": "Достать ножи: Стеклянная луковица",
            "image": "https://image.tmdb.org/t/p/w500//14PudL6hCEhqwPDbxoBt2RHK5cC.jpg",
            "link": "/card/movies/800-155/Dostat-nozhi-Steklyannaya-lukovica.html",
            "year": "2022",
            "rating":"7.1","tmdb_id": 661374
        },
        {
            "name": "Достать ножи",
            "image": "https://image.tmdb.org/t/p/w500//mGfb75tcFWxuT8esS1isHrNFE90.jpg",
            "link": "/card/movies/800-17/Dostat-nozhi.html",
            "year": "2019",
            "rating":"7.8","tmdb_id": 546554
        },
        {
            "name": "Бегущий по лезвию 2049",
            "image": "https://image.tmdb.org/t/p/w500//kAq1RFHqtZrBvKve7GOGdgUU399.jpg",
            "link": "/card/movies/800-16/Begushij-po-lezviyu-2049.html",
            "year": "2017",
            "rating":"7.6","tmdb_id": 335984
        },
        {
            "name": "Бегущий по лезвию",
            "image": "https://image.tmdb.org/t/p/w500//dFzA82XdkobzdOjrYLMIfApzCVC.jpg",
            "link": "/card/movies/800-156/Begushij-po-lezviyu.html",
            "year": "1982",
            "rating":"7.9","tmdb_id": 78
        },
        {
            "name": "Джон Уик 4",
            "image": "https://image.tmdb.org/t/p/w500//o29otcx30U3EkqNVGC2feJVz5yr.jpg",
            "link": "/card/movies/800-22/Dzhon-Uik-4.html",
            "year": "2023",
            "rating":"7.7","tmdb_id": 603692
        },
        {
            "name": "Джон Уик 3",
            "image": "https://image.tmdb.org/t/p/w500//2RDx4bMYF5TbTdTBoOwDLDgIej.jpg",
            "link": "/card/movies/800-157/Dzhon-Uik-3.html",
            "year": "2019",
            "rating":"7.4","tmdb_id": 458156
        },
        {
            "name": "Джон Уик 2",
            "image": "https://image.tmdb.org/t/p/w500//60dPOD22s6TS2SfQiiOGOePBg8N.jpg",
            "link": "/card/movies/800-158/Dzhon-Uik-2.html",
            "year": "2017",
            "rating":"7.3","tmdb_id": 324552
        },
        {
            "name": "Джон Уик",
            "image": "https://image.tmdb.org/t/p/w500//2hfeF2566IKZ30c1BAay0N2lxBr.jpg",
            "link": "/card/movies/800-159/Dzhon-Uik.html",
            "year": "2014",
            "rating":"7.4","tmdb_id": 245891
        },
        {
            "name": "Новые мутанты",
            "image": "https://image.tmdb.org/t/p/w500//2lyCa61EoF44vcQPXQfJzNvKT2D.jpg",
            "link": "/card/movies/800-160/Novye-mutanty.html",
            "year": "2020",
            "rating":"6.1","tmdb_id": 340102
        },
        {
            "name": "Люди Икс: Тёмный Феникс",
            "image": "https://image.tmdb.org/t/p/w500//927lqua6AHPW4mUflU26yV3APKZ.jpg",
            "link": "/card/movies/800-161/Lyudi-Iks-Tyomnyj-Feniks.html",
            "year": "2019",
            "rating":"6.0","tmdb_id": 320288
        },
        {
            "name": "Люди Икс: Апокалипсис",
            "image": "https://image.tmdb.org/t/p/w500//aJ0WyuZpyRjTpz1DT1jcwgReXnP.jpg",
            "link": "/card/movies/800-162/Lyudi-Iks-Apokalipsis.html",
            "year": "2016",
            "rating":"6.5","tmdb_id": 246655
        },
        {
            "name": "Люди Икс: Дни минувшего будущего",
            "image": "https://image.tmdb.org/t/p/w500//9IdeGyzRZH66RgNq9zSZDwPPllg.jpg",
            "link": "/card/movies/800-28/Lyudi-Iks-Dni-minuvshego-budushego.html",
            "year": "2014",
            "rating":"7.5","tmdb_id": 127585
        },
        {
            "name": "Росомаха: Бессмертный",
            "image": "https://image.tmdb.org/t/p/w500//ol7Qyzx31q6HG9zGOvqiPIUIk3f.jpg",
            "link": "/card/movies/800-163/Rosomaha-Bessmertnyj.html",
            "year": "2013",
            "rating":"6.4","tmdb_id": 76170
        },
        {
            "name": "Люди Икс: Первый класс",
            "image": "https://image.tmdb.org/t/p/w500//6vkQtWNHqq3uzcS0PH2mER7Gzjd.jpg",
            "link": "/card/movies/800-164/Lyudi-Iks-Pervyj-klass.html",
            "year": "2011",
            "rating":"7.3","tmdb_id": 49538
        },
        {
            "name": "Люди Икс: Начало. Росомаха",
            "image": "https://image.tmdb.org/t/p/w500//nuOayxoKOCT6jog60i4A0iEfVk0.jpg",
            "link": "/card/movies/800-165/Lyudi-Iks-Nachalo-Rosomaha.html",
            "year": "2009",
            "rating":"6.3","tmdb_id": 2080
        },
        {
            "name": "Люди Икс: Последняя битва",
            "image": "https://image.tmdb.org/t/p/w500//jD5bK5jxDprc1StAhHXMAgaEBMY.jpg",
            "link": "/card/movies/800-166/Lyudi-Iks-Poslednyaya-bitva.html",
            "year": "2006",
            "rating":"6.4","tmdb_id": 36668
        },
        {
            "name": "Люди Икс 2",
            "image": "https://image.tmdb.org/t/p/w500//qkQ3KZ0wF7pyPWMzL5TxnEKKDiJ.jpg",
            "link": "/card/movies/800-167/Lyudi-Iks-2.html",
            "year": "2003",
            "rating":"7.0","tmdb_id": 36658
        },
        {
            "name": "Люди Икс",
            "image": "https://image.tmdb.org/t/p/w500//wBqh8PMSOoUmSCyilXR8IRnjhwN.jpg",
            "link": "/card/movies/800-168/Lyudi-Iks.html",
            "year": "2000",
            "rating":"7.0","tmdb_id": 36657
        },
        {
            "name": "Дом у дороги",
            "image": "https://image.tmdb.org/t/p/w500//z8AWDW9BaZ1oQohej87TdACGszm.jpg",
            "link": "/card/movies/800-31/Dom-u-dorogi.html",
            "year": "2024",
            "rating":"6.9","tmdb_id": 359410
        },
        {
            "name": "Придорожная закусочная",
            "image": "https://image.tmdb.org/t/p/w500//2vYF1J7QeM1On7thBAL2RnVibHk.jpg",
            "link": "/card/movies/800-169/Pridorozhnaya-zakusochnaya.html",
            "year": "1989",
            "rating":"6.7","tmdb_id": 10135
        },
        {
            "name": "King’s Man: Начало",
            "image": "https://image.tmdb.org/t/p/w500//9NyzS42sc9mvNLyPJtYqTqpkEoY.jpg",
            "link": "/card/movies/800-170/King’s-Man-Nachalo.html",
            "year": "2021",
            "rating":"6.7","tmdb_id": 476669
        },
        {
            "name": "Kingsman: Золотое кольцо",
            "image": "https://image.tmdb.org/t/p/w500//vVQXYV7x6gpk9oVFbzsBxkIxdqT.jpg",
            "link": "/card/movies/800-171/Kingsman-Zolotoe-kolco.html",
            "year": "2017",
            "rating":"7.0","tmdb_id": 343668
        },
        {
            "name": "Kingsman: Секретная служба",
            "image": "https://image.tmdb.org/t/p/w500//1br1GunwmrGaD9H3eyRPjLx1HY4.jpg",
            "link": "/card/movies/800-32/Kingsman-Sekretnaya-sluzhba.html",
            "year": "2015",
            "rating":"7.6","tmdb_id": 207703
        },
        {
            "name": "Побег из Шоушенка",
            "image": "https://image.tmdb.org/t/p/w500//yvmKPlTIi0xdcFQIFcQKQJcI63W.jpg",
            "link": "/card/movies/800-33/Pobeg-iz-Shoushenka.html",
            "year": "1994",
            "rating":"8.7","tmdb_id": 278
        },
        {
            "name": "Счастливого нового дня смерти",
            "image": "https://image.tmdb.org/t/p/w500//ZstlucYRCRfkZ74O2LUfbbNbyb.jpg",
            "link": "/card/movies/800-172/Schastlivogo-novogo-dnya-smerti.html",
            "year": "2019",
            "rating":"6.3","tmdb_id": 512196
        },
        {
            "name": "Счастливого дня смерти",
            "image": "https://image.tmdb.org/t/p/w500//gxOqCjZ3YGxZpkKchQbHX3DeQ3V.jpg",
            "link": "/card/movies/800-34/Schastlivogo-dnya-smerti.html",
            "year": "2017",
            "rating":"6.7","tmdb_id": 440021
        },
        {
            "name": "Геошторм",
            "image": "https://image.tmdb.org/t/p/w500//8kMSc2UVFCXScIvhkSuSiROySbS.jpg",
            "link": "/card/movies/800-36/Geoshtorm.html",
            "year": "2017",
            "rating":"6.1","tmdb_id": 274855
        },
        {
            "name": "Тёмный рыцарь: Возрождение легенды",
            "image": "https://image.tmdb.org/t/p/w500//2NaeRiOuxkpWv8s0uBzSlp7SuCn.jpg",
            "link": "/card/movies/800-173/Tyomnyj-rycar-Vozrozhdenie-legendy.html",
            "year": "2012",
            "rating":"7.8","tmdb_id": 49026
        },
        {
            "name": "Тёмный рыцарь",
            "image": "https://image.tmdb.org/t/p/w500//dxWaYQtgpLbycqUpHzkqqYkT5I3.jpg",
            "link": "/card/movies/800-38/Tyomnyj-rycar.html",
            "year": "2008",
            "rating":"8.5","tmdb_id": 155
        },
        {
            "name": "Бэтмен: Начало",
            "image": "https://image.tmdb.org/t/p/w500//fIfmG3EaIy3eqebyq7hXjl1ymQW.jpg",
            "link": "/card/movies/800-174/Betmen-Nachalo.html",
            "year": "2005",
            "rating":"7.7","tmdb_id": 272
        },
        {
            "name": "Реальные упыри",
            "image": "https://image.tmdb.org/t/p/w500//tmUHOe07a84zgwMeWCpwnAqUwU4.jpg",
            "link": "/card/movies/800-40/Realnye-upyri.html",
            "year": "2014",
            "rating":"7.6","tmdb_id": 246741
        },
        {
            "name": "Крёстный отец 3",
            "image": "https://image.tmdb.org/t/p/w500//b0kAYDl4NApOfzNWdlYzmXwujYU.jpg",
            "link": "/card/movies/800-175/Kryostnyj-otec-3.html",
            "year": "1990",
            "rating":"7.4","tmdb_id": 242
        },
        {
            "name": "Крёстный отец 2",
            "image": "https://image.tmdb.org/t/p/w500//tOLQ3iRDfbwhVaw3QjDzIOS7zcu.jpg",
            "link": "/card/movies/800-176/Kryostnyj-otec-2.html",
            "year": "1974",
            "rating":"8.6","tmdb_id": 240
        },
        {
            "name": "Крёстный отец",
            "image": "https://image.tmdb.org/t/p/w500//hoowzozsn0XQGtgH8nyivAMZfPN.jpg",
            "link": "/card/movies/800-41/Kryostnyj-otec.html",
            "year": "1972",
            "rating":"8.7","tmdb_id": 238
        },
        {
            "name": "Джобс: Империя соблазна",
            "image": "https://image.tmdb.org/t/p/w500//vPuWVOBvMsnpdIT8Qb2suLhIFSi.jpg",
            "link": "/card/movies/800-42/Dzhobs-Imperiya-soblazna.html",
            "year": "2013",
            "rating":"6.1","tmdb_id": 115782
        },
        {
            "name": "Скотт Пилигрим против всех",
            "image": "https://image.tmdb.org/t/p/w500//bLJEFAh6tILVS1PS5mCRlA9HVsR.jpg",
            "link": "/card/movies/800-44/Skott-Piligrim-protiv-vseh.html",
            "year": "2010",
            "rating":"7.5","tmdb_id": 22538
        },
        {
            "name": "Спасти рядового Райана",
            "image": "https://image.tmdb.org/t/p/w500//vhIwsqsMmdv6uwup4V6HJSMcQxI.jpg",
            "link": "/card/movies/800-45/Spasti-ryadovogo-Rajana.html",
            "year": "1998",
            "rating":"8.2","tmdb_id": 857
        },
        {
            "name": "Пассажиры",
            "image": "https://image.tmdb.org/t/p/w500//RY7YPqLRkgK5KiIq3kFQhCUJnB.jpg",
            "link": "/card/movies/800-46/Passazhiry.html",
            "year": "2016",
            "rating":"7.0","tmdb_id": 274870
        },
        {
            "name": "Список Шиндлера",
            "image": "https://image.tmdb.org/t/p/w500//4K8fGGcJP2EoGDucILnaJcOJhZl.jpg",
            "link": "/card/movies/800-48/Spisok-Shindlera.html",
            "year": "1993",
            "rating":"8.6","tmdb_id": 424
        },
        {
            "name": "5-я волна",
            "image": "https://image.tmdb.org/t/p/w500//5ngef6vRYcn55NixtJAfK2JTDxY.jpg",
            "link": "/card/movies/800-49/5-aya-volna.html",
            "year": "2016",
            "rating":"5.9","tmdb_id": 299687
        },
        {
            "name": "Бойцовский клуб",
            "image": "https://image.tmdb.org/t/p/w500//66RvLrRJTm4J8l3uHXWF09AICol.jpg",
            "link": "/card/movies/800-50/Bojcovskij-klub.html",
            "year": "1999",
            "rating":"8.4","tmdb_id": 550
        },
        {
            "name": "Ущелье",
            "image": "https://image.tmdb.org/t/p/w500//yiUINsMKnemBFcUHqpv94yJolWH.jpg",
            "link": "/card/movies/800-02/Ushele.html",
            "year": "2025",
            "rating":"7.7","tmdb_id": 950396
        },
        {
            "name": "Назад в будущее 3",
            "image": "https://image.tmdb.org/t/p/w500//xLRedXsCU3jDALWiQYNv1ZUbH5T.jpg",
            "link": "/card/movies/800-177/Nazad-v-budushee-3.html",
            "year": "1990",
            "rating":"7.5","tmdb_id": 196
        },
        {
            "name": "Назад в будущее 2",
            "image": "https://image.tmdb.org/t/p/w500//ieHWlIrxpTpdmvqjgxxq0lXsgYc.jpg",
            "link": "/card/movies/800-178/Nazad-v-budushee-2.html",
            "year": "1989",
            "rating":"7.8","tmdb_id": 165
        },
        {
            "name": "Назад в будущее",
            "image": "https://image.tmdb.org/t/p/w500//9a07nfvCoAAyUMfY0yQqsOjlb2C.jpg",
            "link": "/card/movies/800-52/Nazad-v-budushee.html",
            "year": "1985",
            "rating":"8.3","tmdb_id": 105
        },
        {
            "name": "Щелкунчики",
            "image": "https://image.tmdb.org/t/p/w500//iAoS1l0nRLKl4d97mbKF4pUFZhn.jpg",
            "link": "/card/movies/800-53/Shelkunchiki.html",
            "year": "2024",
            "rating":"5.9","tmdb_id": 1203236
        },
        {
            "name": "Гладиатор 2",
            "image": "https://image.tmdb.org/t/p/w500//6N7F1Ga9m0CTHziA2Fs7BQczaKZ.jpg",
            "link": "/card/movies/800-179/Gladiator-2.html",
            "year": "2024",
            "rating":"6.8","tmdb_id": 558449
        },
        {
            "name": "Гладиатор",
            "image": "https://image.tmdb.org/t/p/w500//1wjNqlfsuHNTXTpCt2ZOV2iPxaf.jpg",
            "link": "/card/movies/800-54/Gladiator.html",
            "year": "2000",
            "rating":"8.2","tmdb_id": 98
        },
        {
            "name": "Почему он?",
            "image": "https://image.tmdb.org/t/p/w500//q0wK2bXSLulAre276C6M4ZS8Kfo.jpg",
            "link": "/card/movies/800-55/Pochemu-on.html",
            "year": "2016",
            "rating":"6.4","tmdb_id": 356305
        },
        {
            "name": "Аватар: Путь воды",
            "image": "https://image.tmdb.org/t/p/w500//yFNn7uWudLLWDJqfj3fwh5CcUdR.jpg",
            "link": "/card/movies/800-180/Avatar-Put-vody.html",
            "year": "2022",
            "rating":"7.6","tmdb_id": 76600
        },
        {
            "name": "Аватар",
            "image": "https://image.tmdb.org/t/p/w200//lUKcrcO3wEPhNnzGq06JIX7GIEb.jpg",
            "link": "/card/movies/800-56/Avatar.html",
            "year": "2009",
            "rating":"7.6","tmdb_id": 19995
        },
        {
            "name": "21 мост",
            "image": "https://image.tmdb.org/t/p/w500//lWDDukaPvDzIRYxgUuGFIH5YfyM.jpg",
            "link": "/card/movies/800-01/21-Most.html",
            "year": "2019",
            "rating":"6.8","tmdb_id": 535292
        },
        {
            "name": "Эмилия Перес",
            "image": "https://image.tmdb.org/t/p/w500//6KvGEOCUBsgTUPkl1oWhH0Y3ePy.jpg",
            "link": "/card/movies/800-03/Emilia-Perez.html",
            "year": "2024",
            "rating":"7.8","tmdb_id": 974950
        },
        {
            "name": "Грешники",
            "image": "https://image.tmdb.org/t/p/w500//atPV0sdDhFrs4irt1Hw5Fq4aO4V.jpg",
            "link": "/card/movies/800-237/Greshniki.html",
            "year": "2025",
            "rating":"7.6","tmdb_id": 1233413
        },
        {
            "name": "Спуск в бездну",
            "image": "https://image.tmdb.org/t/p/w500//bSb3ynYHWJbXSSMRhblzrsgt1lO.jpg",
            "link": "/card/movies/800-57/Spusk-v-bezdnu.html",
            "year": "2023",
            "rating":"5.7","tmdb_id": 976830
        },
        {
            "name": "Город тайн: Исчезнувшая",
            "image": "https://image.tmdb.org/t/p/w500//ez9LtVmvfbWjX9Spx4DrNEFVErx.jpg",
            "link": "/card/movies/800-58/Gorod-tajn-Ischeznuvshaya.html",
            "year": "2024",
            "rating":"6.5","tmdb_id": 832262
        },
        {
            "name": "Город тайн",
            "image": "https://image.tmdb.org/t/p/w500//phG9MqZdBuzyB2G8wTgGKEQZgNH.jpg",
            "link": "/card/movies/800-181/Gorod-tajn.html",
            "year": "2021",
            "rating":"6.8","tmdb_id": 567797
        },
        {
            "name": "Хитмен. Последнее дело",
            "image": "https://image.tmdb.org/t/p/w500//3TM9MzC1f6F3BwpPJhdv3hXWQRX.jpg",
            "link": "/card/movies/800-59/Hitmen-Poslednee-delo.html",
            "year": "2024",
            "rating":"6.9","tmdb_id": 972614
        },
        {
            "name": "Хитмэн: Агент 47",
            "image": "https://image.tmdb.org/t/p/original/AsLFRe7eORaNBO5yEVjLGYt4nxj.jpg",
            "link": "/card/movies/800-182/Hitmen-Agent-47.html",
            "year": "2015",
            "rating":"5.9","tmdb_id": 249070
        },
        {
            "name": "Хитмэн",
            "image": "https://image.tmdb.org/t/p/original/iHSpeT9cXOFDzXCWtkxxo8ZzREE.jpg",
            "link": "/card/movies/800-183/Hitmen.html",
            "year": "2007",
            "rating":"6.1","tmdb_id": 1620
        },
        {
            "name": "Непробиваемые",
            "image": "https://image.tmdb.org/t/p/w500//z497zVpHuGDQT4lBcHZcYdf6eDT.jpg",
            "link": "/card/movies/800-60/Neprobivaemye.html",
            "year": "2024",
            "rating":"5.6","tmdb_id": 1182387
        },
        {
            "name": "Западня",
            "image": "https://image.tmdb.org/t/p/w500//zHCLkP6xYYPFYlM9U6DA0FaZAvZ.jpg",
            "link": "/card/movies/800-242/Zapadnya.html",
            "year": "2025",
            "rating":"6.3","tmdb_id": 1083968
        },
        {
            "name": "Однажды в Ла-Рое",
            "image": "https://image.tmdb.org/t/p/w500//8VQr2REac6qlshcQGBsmq5s4SiU.jpg",
            "link": "/card/movies/800-61/Odnazhdy-v-La-Roe.html",
            "year": "2024",
            "rating":"6.8","tmdb_id": 1001783
        },
        {
            "name": "Охотники за привидениями: Леденящий ужас",
            "image": "https://image.tmdb.org/t/p/w500//ltG6ypHUyPv3y4e4ZOxRumYwikV.jpg",
            "link": "/card/movies/800-62/Ohotniki-za-privideniyami-Ledenyashij-uzhas.html",
            "year": "2024",
            "rating":"6.5","tmdb_id": 967847
        },
        {
            "name": "Охотники за привидениями: Наследники",
            "image": "https://image.tmdb.org/t/p/w500//wqXTMwkoBVrQ94FSBDAIwhK2ONa.jpg",
            "link": "/card/movies/800-184/Ohotniki-za-privideniyami-Nasledniki.html",
            "year": "2021",
            "rating":"7.3","tmdb_id": 425909
        },
        {
            "name": "Охотники за привидениями",
            "image": "https://image.tmdb.org/t/p/w500//xXcZFa1vXZ7JJAdFmmDL3IAURBS.jpg",
            "link": "/card/movies/800-185/Ohotniki-za-privideniyami2016.html",
            "year": "2016",
            "rating":"5.3","tmdb_id": 43074
        },
        {
            "name": "Охотники за привидениями 2",
            "image": "https://image.tmdb.org/t/p/w500//sNVd1heRFJFlwgOZEvQpLOsNusG.jpg",
            "link": "/card/movies/800-186/Ohotniki-za-privideniyami-2.html",
            "year": "1989",
            "rating":"6.6","tmdb_id": 2978
        },
        {
            "name": "Охотники за привидениями",
            "image": "https://image.tmdb.org/t/p/w500//4T0fzZK0hQkEkM0FIVTkgMRYzBn.jpg",
            "link": "/card/movies/800-187/Ohotniki-za-privideniyami1984.html",
            "year": "1984",
            "rating":"7.5","tmdb_id": 620
        },
        {
            "name": "Дюна: Часть вторая",
            "image": "https://image.tmdb.org/t/p/w500//3aLghRkuJc9cs770fxo4a6YWht3.jpg",
            "link": "/card/movies/800-20/Dyuna-Chast-vtoraya.html",
            "year": "2024",
            "rating":"8.1","tmdb_id": 693134
        },
        {
            "name": "Дюна",
            "image": "https://image.tmdb.org/t/p/w500//3hbXNclcHaj5KiF6kK41GBMjyFr.jpg",
            "link": "/card/movies/800-63/Dyuna.html",
            "year": "2021",
            "rating":"7.8","tmdb_id": 438631
        },
        {
            "name": "Громовержцы*",
            "image": "https://image.tmdb.org/t/p/w500//l4UtldCA7OgORWY9UcyWBqaHWHF.jpg",
            "link": "/card/movies/800-241/Gromoverzhcy.html",
            "year": "2025",
            "rating":"7.5","tmdb_id": 986056
        },
        {
            "name": "Капитан Америка: Новый Мир",
            "image": "https://image.tmdb.org/t/p/w500//bljRQO5fTGen0qRV7KuPRXIdRGx.jpg",
            "link": "/card/movies/800-250/Kapitan-Amerika-Novyj-Mir.html",
            "year": "2025",
            "rating":"6.1","tmdb_id": 822119
        },
        {
            "name": "Золото джунглей",
            "image": "https://image.tmdb.org/t/p/w500//1HuoF1IYoixGXhYznep4kBtijLZ.jpg",
            "link": "/card/movies/800-236/Zoloto-dzhunglej.html",
            "year": "2017",
            "rating":"5.7","tmdb_id": 436830
        },
        {
            "name": "Вуди Вудпекер в летнем лагере",
            "image": "https://image.tmdb.org/t/p/w500//oAF42DFZA430eEzRmEcrpB0D3rp.jpg",
            "link": "/card/movies/800-65/Vudi-Vudpeker-otpravlyaetsya-v-lager.html",
            "year": "2024",
            "rating":"6.5","tmdb_id": 1239146
        },
        {
            "name": "Вуди Вудпекер",
            "image": "https://image.tmdb.org/t/p/w500//9F4ccwQlDToaG83IMlxb4w6ftN0.jpg",
            "link": "/card/movies/800-188/Vudi-Vudpeker.html",
            "year": "2017",
            "rating":"6.6","tmdb_id": 462883
        },
        {
            "name": "Minecraft в Кино",
            "image": "https://image.tmdb.org/t/p/w500//3txl2FUNZCQUnHQPzkuNc17yLIs.jpg",
            "link": "/card/movies/800-240/Minecraft-v-Kino.html",
            "year": "2025",
            "rating":"6.5","tmdb_id": 950387
        },
        {
            "name": "Возвращение грозной семейки",
            "image": "https://image.tmdb.org/t/p/w500//o1SGF0txwzZxBJbOsvIgbBtRk3A.jpg",
            "link": "/card/movies/800-66/Vozvrashenie-grozno-semejki.html",
            "year": "2024",
            "rating":"7.0","tmdb_id": 1094556
        },
        {
            "name": "След киллера",
            "image": "https://image.tmdb.org/t/p/original/uGTulIuR0NlI2CQzTRHHEuJJejp.jpg",
            "link": "/card/movies/800-67/Sled-killera.html",
            "year": "2024",
            "rating":"5.7","tmdb_id": 1105407
        },
        {
            "name": "Боб Марли: Одна любовь",
            "image": "https://image.tmdb.org/t/p/w500//79G6T8JSmUrIsypQVzsa5VjfOXU.jpg",
            "link": "/card/movies/800-68/Bob-Marli-Odna-lyubov.html",
            "year": "2024",
            "rating":"6.7","tmdb_id": 802219
        },
        {
            "name": "Джокер: Безумие на двоих",
            "image": "https://image.tmdb.org/t/p/w500//sqHQhhjsfZ0UAu67RiIaUkabZZD.jpg",
            "link": "/card/movies/800-69/Dzhoker-Bezumie-na-dvoih.html",
            "year": "2024",
            "rating":"5.5","tmdb_id": 889737
        },
        {
            "name": "Джокер",
            "image": "https://image.tmdb.org/t/p/w500//5itx9nz3gXWgoD2I1UdaqOrphYm.jpg",
            "link": "/card/movies/800-189/Dzhoker.html",
            "year": "2019",
            "rating":"8.1","tmdb_id": 475557
        },
        {
            "name": "Очи",
            "image": "https://image.tmdb.org/t/p/w500//tKIRObB9Gwq0fnCDjapdz9zAmJz.jpg",
            "link": "/card/movies/800-238/Ochi.html",
            "year": "2025",
            "rating":"5.9","tmdb_id": 896536
        },
        {
            "name": "Дыши!",
            "image": "https://image.tmdb.org/t/p/w500//4pRonl4LTHFw567HyX0iYolyaWS.jpg",
            "link": "/card/movies/800-70/Dyshi!.html",
            "year": "2024",
            "rating":"5.8","tmdb_id": 720321
        },
        {
            "name": "Жуть",
            "image": "https://image.tmdb.org/t/p/w500//krCt93RSbZMmiPIw2k1r9zzfzTb.jpg",
            "link": "/card/movies/800-71/Zhut.html",
            "year": "2024",
            "rating":"6.6","tmdb_id": 1265517
        },
        {
            "name": "Чёрный чай",
            "image": "https://image.tmdb.org/t/p/w500//v6HmHzoOJVwFmdKDKpdfnnsRk39.jpg",
            "link": "/card/movies/800-72/Chyornyj-chaj.html",
            "year": "2024",
            "rating":"5.9","tmdb_id": 662402
        },
        {
            "name": "Ученик. Восхождение Трампа",
            "image": "https://image.tmdb.org/t/p/w500//1rXbP2AdiJzbqL6CKxdZMeFuE4O.jpg",
            "link": "/card/movies/800-73/Uchenik-Voshozhdenie-Trampa.html",
            "year": "2024",
            "rating":"6.9","tmdb_id": 1182047
        },
        {
            "name": "Профессионал",
            "image": "https://image.tmdb.org/t/p/w500//uBAgrWuglga1Vo7oUlFL0KFORcN.jpg",
            "link": "/card/movies/800-74/Professional.html",
            "year": "2024",
            "rating":"5.9","tmdb_id": 974453
        },
        {
            "name": "Кошмарные каникулы",
            "image": "https://image.tmdb.org/t/p/w500//ud6dvc0s6YapooFkUNQPuZ4eg5u.jpg",
            "link": "/card/movies/800-75/Koshmarnye-kanikuly.html",
            "year": "2024",
            "rating":"6.5","tmdb_id": 928480
        },
        {
            "name": "Подземелья и драконы: Честь среди воров",
            "image": "https://image.tmdb.org/t/p/w500//nAbRIxxRJfCP2U9tpVJU1zWb6Ni.jpg",
            "link": "/card/movies/800-76/Podzemelya-i-drakony-Chest-sredi-vorov.html",
            "year": "2023",
            "rating":"7.3","tmdb_id": 493529
        },
        {
            "name": "Мегалополис",
            "image": "https://image.tmdb.org/t/p/w500//epglGr4yDHGaZVf8faMm7ilcHDu.jpg",
            "link": "/card/movies/800-77/Megalopolis.html",
            "year": "2024",
            "rating":"5.3","tmdb_id": 592831
        },
        {
            "name": "Выгон",
            "image": "https://image.tmdb.org/t/p/w500//z9GAjN21PQPDp0eRB4Ct6vIZaPF.jpg",
            "link": "/card/movies/800-78/Vygon.html",
            "year": "2024",
            "rating":"6.8","tmdb_id": 785542
        },
        {
            "name": "Элиас",
            "image": "https://image.tmdb.org/t/p/w500//saPG6ZSORtOdCbl7S4dinNkpmA6.jpg",
            "link": "/card/movies/800-79/Elias.html",
            "year": "2024",
            "rating":"6.2","tmdb_id": 1154215
        },
        {
            "name": "Граф Монте-Кристо",
            "image": "https://image.tmdb.org/t/p/w500//bv7XaMz155UTyQSOy2CHllMrAf9.jpg",
            "link": "/card/movies/800-80/Graf-Monte-Kristo.html",
            "year": "2024",
            "rating":"7.7","tmdb_id": 1084736
        },
        {
            "name": "Граф Монте-Кристо",
            "image": "https://image.tmdb.org/t/p/original/7O2N253Np012Fm8NGQTe5alTiwy.jpg",
            "link": "/card/movies/800-190/Graf-Monte-Kristo2002.html",
            "year": "2002",
            "rating":"7.7","tmdb_id": 11362
        },
        {
            "name": "Мастер",
            "image": "https://image.tmdb.org/t/p/w500//zmcXyVExW9vVIKOgzeDpPTWJySF.jpg",
            "link": "/card/movies/800-249/Master.html",
            "year": "2025",
            "rating":"6.6","tmdb_id": 1197306
        },
        {
            "name": "Уровни",
            "image": "https://image.tmdb.org/t/p/w500//yq39ChrCDlqrurYuaC8WM0vC1cx.jpg",
            "link": "/card/movies/800-81/Urovni.html",
            "year": "2024",
            "rating":"5.7","tmdb_id": 791042
        },
        {
            "name": "Второй акт",
            "image": "https://image.tmdb.org/t/p/w500//8pAaShqpLUYTeik67jjN2IPaz3O.jpg",
            "link": "/card/movies/800-82/Vtoroj-akt.html",
            "year": "2024",
            "rating":"6.1","tmdb_id": 1161108
        },
        {
            "name": "В потерянных землях",
            "image": "https://image.tmdb.org/t/p/w500//hoMFjgg9uwhkOjXsw1tmyNM9vsV.jpg",
            "link": "/card/movies/800-248/V-poteryannyh-zemlyah.html",
            "year": "2025",
            "rating":"6.4","tmdb_id": 324544
        },
        {
            "name": "Оппенгеймер",
            "image": "https://image.tmdb.org/t/p/w500//8OQzw8keE6sDNH25sOqPRTxhFTO.jpg",
            "link": "/card/movies/800-83/Oppengejmer.html",
            "year": "2023",
            "rating":"8.1","tmdb_id": 872585
        },
        {
            "name": "Ковбои против пришельцев",
            "image": "https://image.tmdb.org/t/p/w500//iRzfV0jFnUqOjJNIvRu9M3G8Rxv.jpg",
            "link": "/card/movies/800-84/Kovboi-protiv-prishelcev.html",
            "year": "2011",
            "rating":"5.6","tmdb_id": 49849
        },
        {
            "name": "Стрим",
            "image": "https://image.tmdb.org/t/p/w500//7GVqDiiTUBzyJ2wYpPIO2tWpsYx.jpg",
            "link": "/card/movies/800-85/Strim.html",
            "year": "2024",
            "rating":"5.5","tmdb_id": 806731
        },
        {
            "name": "Дурное влияние",
            "image": "https://image.tmdb.org/t/p/w500//oogmlZekRCHP0JDhHKDZIyDIfpP.jpg",
            "link": "/card/movies/800-253/Durnoe-vliyanie.html",
            "year": "2025",
            "rating":"5.7","tmdb_id": 1323784
        },
        {
            "name": "Меган: К вашим услугам ",
            "image": "https://image.tmdb.org/t/p/w200//oGoQ5W5Zxo55hbqCu1PsqEmQJIX.jpg",
            "link": "/card/movies/800-86/Megan-K-vashim-uslugam.html",
            "year": "2024",
            "rating":"6.7","tmdb_id": 1064028
        },
        {
            "name": "Особо опасный пассажир",
            "image": "https://image.tmdb.org/t/p/w500//oifl3tfR9c4GhWwhJ8m0d6ummZH.jpg",
            "link": "/card/movies/800-260/Osobo-opasnyj-passazhir.html",
            "year": "2025",
            "rating":"6.1","tmdb_id": 1126166
        },
        {
            "name": "Псы войны",
            "image": "https://image.tmdb.org/t/p/w500//yhGps0BKzV9AiD2u03Iwc52BW4p.jpg",
            "link": "/card/movies/800-87/Psy-vojny.html",
            "year": "2024",
            "rating":"6.3","tmdb_id": 949484
        },
        {
            "name": "Багровая отмель",
            "image": "https://image.tmdb.org/t/p/original/v2sF5vnXSo6R6YWrkzTGKzROkGI.jpg",
            "link": "/card/movies/800-259/Bagrovaya-otmel.html",
            "year": "2025",
            "rating":"5.5","tmdb_id": 1232933
        },
        {
            "name": "Призрачный гонщик 2",
            "image": "https://image.tmdb.org/t/p/w500//pmjeSQ4NocblwnqFDxk7zXggSQ7.jpg",
            "link": "/card/movies/800-88/Prizrachnyj-gonshik-2.html",
            "year": "2012",
            "rating":"5.0","tmdb_id": 71676
        },
        {
            "name": "Призрачный гонщик",
            "image": "https://image.tmdb.org/t/p/w500//4ULbCH7RO1bkCCsBEI9gAOm9cWp.jpg",
            "link": "/card/movies/800-191/Prizrachnyj-gonshik.html",
            "year": "2007",
            "rating":"5.6","tmdb_id": 1250
        },
        {
            "name": "Мудрые парни",
            "image": "https://image.tmdb.org/t/p/w500//dOFv3tCliqlTgeBOFRdQFcuhgGK.jpg",
            "link": "/card/movies/800-258/Mudrye-parni.html",
            "year": "2025",
            "rating":"6.2","tmdb_id": 1013601
        },
        {
            "name": "Время",
            "image": "https://image.tmdb.org/t/p/w500//m0rqyzs7IbNaXuJvLTubCG40F92.jpg",
            "link": "/card/movies/800-90/Vremya.html",
            "year": "2021",
            "rating":"6.3","tmdb_id": 631843
        },
        {
            "name": "Электрический штат",
            "image": "https://image.tmdb.org/t/p/w500//yoxaghGvZ0L0zJi2UdgJfb8zqTr.jpg",
            "link": "/card/movies/800-257/Elektricheskij-shtat.html",
            "year": "2025",
            "rating":"6.6","tmdb_id": 777443
        },
        {
            "name": "Стекло",
            "image": "https://image.tmdb.org/t/p/w500//vICN2wjUMQrrpChnPCzJ1W2LPa1.jpg",
            "link": "/card/movies/800-192/Steklo.html",
            "year": "2019",
            "rating":"6.7","tmdb_id": 450465
        },
        {
            "name": "Сплит",
            "image": "https://image.tmdb.org/t/p/w500//xrVZF8DJNTPiILFygj8sg4tmauV.jpg",
            "link": "/card/movies/800-91/Split.html",
            "year": "2017",
            "rating":"7.3","tmdb_id": 381288
        },
        {
            "name": "Неуязвимый",
            "image": "https://image.tmdb.org/t/p/w500//jz968bMurZtNJr1kGNdnqVgqmrJ.jpg",
            "link": "/card/movies/800-193/Neuyazvimyj.html",
            "year": "2000",
            "rating":"7.1","tmdb_id": 9741
        },
        {
            "name": "Время жить",
            "image": "https://image.tmdb.org/t/p/w500//3PeStsMSHG3sNPpJ9NT1ZGMsi3P.jpg",
            "link": "/card/movies/800-93/Vremya-zhit.html",
            "year": "2024",
            "rating":"7.3","tmdb_id": 1100099
        },
        {
            "name": "Дыхание шторма",
            "image": "https://image.tmdb.org/t/p/w500//k6QMEYGNjszAupPJRPa3c3F7KXy.jpg",
            "link": "/card/movies/800-256/Dyhanie-shtorma.html",
            "year": "2025",
            "rating":"7.0","tmdb_id": 972533
        },
        {
            "name": "Оно 2",
            "image": "https://image.tmdb.org/t/p/w500//rjM13nwgzt80xAUKXVp9mzRYyHp.jpg",
            "link": "/card/movies/800-194/Ono-2.html",
            "year": "2019",
            "rating":"6.8","tmdb_id": 474350
        },
        {
            "name": "Оно",
            "image": "https://image.tmdb.org/t/p/w500//wEHpeWhH3zGYJbqz3OtUJ4tMMM6.jpg",
            "link": "/card/movies/800-94/Ono.html",
            "year": "2017",
            "rating":"7.2","tmdb_id": 346364
        },
        {
            "name": "Новокаин",
            "image": "https://image.tmdb.org/t/p/w500//sPHcPY7eKqw2FHTMkpwMr1CRQB1.jpg",
            "link": "/card/movies/800-255/Novokain.html",
            "year": "2025",
            "rating":"6.9","tmdb_id": 1195506
        },
        {
            "name": "Образцовый самец 2",
            "image": "https://image.tmdb.org/t/p/w500//hSAbrO3FYcvzyBiUHXLflIbSIGZ.jpg",
            "link": "/card/movies/800-95/Obrazcovyj-samec-2.html",
            "year": "2016",
            "rating":"4.9","tmdb_id": 329833
        },
        {
            "name": "Образцовый самец",
            "image": "https://image.tmdb.org/t/p/w500//7PPWHLcJF7pjuYjorUX8HzmsESu.jpg",
            "link": "/card/movies/800-195/Obrazcovyj-samec.html",
            "year": "2001",
            "rating":"6.2","tmdb_id": 9398
        },
        {
            "name": "Улыбка 2",
            "image": "https://image.tmdb.org/t/p/w500//xceYC3jmhyZVzBpZVaiJWIoVWa2.jpg",
            "link": "/card/movies/800-96/Ulybka-2.html",
            "year": "2024",
            "rating":"6.6","tmdb_id": 1100782
        },
        {
            "name": "Улыбка",
            "image": "https://image.tmdb.org/t/p/w500//fiBVwImRr5MerRBfyFHeyOHKtCH.jpg",
            "link": "/card/movies/800-196/Ulybka.html",
            "year": "2022",
            "rating":"6.7","tmdb_id": 882598
        },
        {
            "name": "Компаньон",
            "image": "https://image.tmdb.org/t/p/w500//wxFGXmNmFf9Y38XQVsMIrqIom8f.jpg",
            "link": "/card/movies/800-254/Kompanon.html",
            "year": "2025",
            "rating":"7.1","tmdb_id": 1084199
        },
        {
            "name": "Грань будущего",
            "image": "https://image.tmdb.org/t/p/w500//98Ll6igWXdjHiKuZtCacTzRGyNX.jpg",
            "link": "/card/movies/800-97/Gran-budushego.html",
            "year": "2014",
            "rating":"7.6","tmdb_id": 137113
        },
        {
            "name": "Мой сосед - монстр",
            "image": "https://image.tmdb.org/t/p/w500//ipj9b6KZMr6yFidQBf7xxuWnKQi.jpg",
            "link": "/card/movies/800-98/Moj-sosed-monstr.html",
            "year": "2024",
            "rating":"6.7","tmdb_id": 1098378
        },
        {
            "name": "Вышка",
            "image": "https://image.tmdb.org/t/p/w500//8xukbVG9JJfnpcdIEYPijVVOfhH.jpg",
            "link": "/card/movies/800-99/Vyshka.html",
            "year": "2022",
            "rating":"7.1","tmdb_id": 985939
        },
        {
            "name": "Пол: Секретный материальчик",
            "image": "https://image.tmdb.org/t/p/w500//h5JcoPVADhTh5jSn4QKjvM4tKlK.jpg",
            "link": "/card/movies/800-100/Pol-Sekretnyj-materialchik.html",
            "year": "2011",
            "rating":"6.7","tmdb_id": 39513
        },
        {
            "name": "Один дома",
            "image": "https://image.tmdb.org/t/p/w500//nkXZwR8k46VDdjdcOctVgZC3MJ5.jpg",
            "link": "/card/movies/800-197/Odin-doma2021.html",
            "year": "2021",
            "rating":"4.9","tmdb_id": 654974
        },
        {
            "name": "Один дома 5: Праздничное ограбление",
            "image": "https://image.tmdb.org/t/p/w500//6bZdqzK3le84IVUIJCppYMG7UeA.jpg",
            "link": "/card/movies/800-198/Odin-doma-5-Prazdnichnoe-ograblenie.html",
            "year": "2012",
            "rating":"5.2","tmdb_id": 134375
        },
        {
            "name": "Один дома 4",
            "image": "https://image.tmdb.org/t/p/w500//t5qYSUiF0mlRc7LXBNbCoY7lsJO.jpg",
            "link": "/card/movies/800-199/Odin-doma-4.html",
            "year": "2002",
            "rating":"4.5","tmdb_id": 12536
        },
        {
            "name": "Один дома 3",
            "image": "https://image.tmdb.org/t/p/w500//pkejadStkq8fMaZtKb3EqBWOJz.jpg",
            "link": "/card/movies/800-200/Odin-doma-3.html",
            "year": "1997",
            "rating":"5.3","tmdb_id": 9714
        },
        {
            "name": "Один дома 2: Затерянный в Нью-Йорке",
            "image": "https://image.tmdb.org/t/p/w500//tOpSeLYsZLL4h1N9tHcqRm1Y5t2.jpg",
            "link": "/card/movies/800-201/Odin-doma-2-Zateryannyj-v-Nyu-Jorke.html",
            "year": "1992",
            "rating":"6.8","tmdb_id": 772
        },
        {
            "name": "Один дома",
            "image": "https://image.tmdb.org/t/p/w500//yeS4fjFnTm6jBRiU6zSzFZ8t9W5.jpg",
            "link": "/card/movies/800-101/Odin-doma.html",
            "year": "1990",
            "rating":"7.4","tmdb_id": 771
        },
        {
            "name": "Проводник смерти",
            "image": "https://image.tmdb.org/t/p/w500//yn1aTogxzXyHIXs0ZvUAmalujLo.jpg",
            "link": "/card/movies/800-102/Provodnik-smerti.html",
            "year": "2024",
            "rating":"5.5","tmdb_id": 1167732
        },
        {
            "name": "Паранормальное явление: Ближайшая родня",
            "image": "https://image.tmdb.org/t/p/original/bXAVveHiLotZbWdg3PKGhAzxYKP.jpg",
            "link": "/card/movies/800-202/Paranormalnoe-yavlenie-Blizhajshaya-rodnya.html",
            "year": "2021",
            "rating":"6.1","tmdb_id": 609972
        },
        {
            "name": "Паранормальное явление 5: Призраки в 3D",
            "image": "https://image.tmdb.org/t/p/w500//ozKoD30eG6kacH5SjcRD1wLnBOj.jpg",
            "link": "/card/movies/800-203/Paranormalnoe-yavlenie-5-Prizraki-v-3D.html",
            "year": "2015",
            "rating":"5.3","tmdb_id": 146301
        },
        {
            "name": "Паранормальное явление: Метка Дьявола",
            "image": "https://image.tmdb.org/t/p/w500//1rrHvalz3i96FfmHTcIMcwZ6qGC.jpg",
            "link": "/card/movies/800-103/Paranormalnoe-yavlenie-Metka-Dyavola.html",
            "year": "2014",
            "rating":"5.4","tmdb_id": 227348
        },
        {
            "name": "Паранормальное явление 4",
            "image": "https://image.tmdb.org/t/p/w500//xQukmfHfOZCuG0pxHARMk1xJZMs.jpg",
            "link": "/card/movies/800-204/Paranormalnoe-yavlenie-4.html",
            "year": "2012",
            "rating":"5.4","tmdb_id": 82990
        },
        {
            "name": "Паранормальное явление 3",
            "image": "https://image.tmdb.org/t/p/w500//nbOOPSsezzvHWuWSEw1j3Ypa67e.jpg",
            "link": "/card/movies/800-205/Paranormalnoe-yavlenie-3.html",
            "year": "2011",
            "rating":"5.9","tmdb_id": 72571
        },
        {
            "name": "Паранормальное явление 2",
            "image": "https://image.tmdb.org/t/p/w500//cq35G7cR4NAn9nAndBBbHlKNexE.jpg",
            "link": "/card/movies/800-206/Paranormalnoe-yavlenie-2.html",
            "year": "2010",
            "rating":"5.8","tmdb_id": 41436
        },
        {
            "name": "Паранормальное явление",
            "image": "https://image.tmdb.org/t/p/w500//4PpnPcmAGqpZWpFX5imX0WmWTfZ.jpg",
            "link": "/card/movies/800-207/Paranormalnoe-yavlenie.html",
            "year": "2007",
            "rating":"6.0","tmdb_id": 23827
        },
        {
            "name": "Ужасающий 3",
            "image": "https://image.tmdb.org/t/p/w500//5jbCnDREJeciL3KR7ZWdSotEgzG.jpg",
            "link": "/card/movies/800-104/Uzhasayushij-3.html",
            "year": "2024",
            "rating":"6.9","tmdb_id": 1034541
        },
        {
            "name": "Ужасающий 2",
            "image": "https://image.tmdb.org/t/p/w500//huYBDlUpa2IwZW8MOceKN9j3Auk.jpg",
            "link": "/card/movies/800-208/Uzhasayushij-2.html",
            "year": "2022",
            "rating":"6.7","tmdb_id": 663712
        },
        {
            "name": "Ужасающий",
            "image": "https://image.tmdb.org/t/p/w500//knJUVRPou9y254Oa9ckdzK6XPpC.jpg",
            "link": "/card/movies/800-209/Uzhasayushij.html",
            "year": "2018",
            "rating":"6.3","tmdb_id": 420634
        },
        {
            "name": "Полтора шпиона",
            "image": "https://image.tmdb.org/t/p/w500//z0myyIDZRsGiksfS8hlN3p3NNwc.jpg",
            "link": "/card/movies/800-105/Poltora-shpiona.html",
            "year": "2016",
            "rating":"6.4","tmdb_id": 302699
        },
        {
            "name": "Ловушка",
            "image": "https://image.tmdb.org/t/p/w500//3VmHv2WVdDFpD8xtoV2wfjtS5rl.jpg",
            "link": "/card/movies/800-106/Lovushka.html",
            "year": "2024",
            "rating":"6.3","tmdb_id": 1032823
        },
        {
            "name": "Робот по имени Чаппи",
            "image": "https://image.tmdb.org/t/p/w500//gEYz6t7RqsseZrJgjD0wR77p3T7.jpg",
            "link": "/card/movies/800-107/Robot-po-imeni-Chappi.html",
            "year": "2015",
            "rating":"6.8","tmdb_id": 198184
        },
        {
            "name": "Субстанция",
            "image": "https://image.tmdb.org/t/p/w500//x3yhBGbTqlAjxM450BANUNCHpOO.jpg",
            "link": "/card/movies/800-108/Substanciya.html",
            "year": "2024",
            "rating":"7.1","tmdb_id": 933260
        },
        {
            "name": "Простушка",
            "image": "https://image.tmdb.org/t/p/w500//tTBQSoiv9w9M5mf9qVGfkFDaSF5.jpg",
            "link": "/card/movies/800-109/Prostushka.html",
            "year": "2015",
            "rating":"6.8","tmdb_id": 272693
        },
        {
            "name": "Затерянное место",
            "image": "https://image.tmdb.org/t/p/w500//qVukhgesgdhVIlRZpsTO6wLVcWI.jpg",
            "link": "/card/movies/800-110/Zateryannoe-mesto.html",
            "year": "2024",
            "rating":"6.2","tmdb_id": 814889
        },
        {
            "name": "Мачо и ботан 2",
            "image": "https://image.tmdb.org/t/p/w500//iwtNmSFyePLX9CdZ4iXy5kw6wCq.jpg",
            "link": "/card/movies/800-210/Macho-i-botan-2.html",
            "year": "2014",
            "rating":"6.8","tmdb_id": 187017
        },
        {
            "name": "Мачо и ботан",
            "image": "https://image.tmdb.org/t/p/w500//xjNJi44FDx0xSmUPxpmKIXa8zoY.jpg",
            "link": "/card/movies/800-111/Macho-i-botan.html",
            "year": "2012",
            "rating":"6.9","tmdb_id": 64688
        },
        {
            "name": "Одинокие волки",
            "image": "https://image.tmdb.org/t/p/w500//54U26SA33pxxJ2lf5mRxWeqRTLu.jpg",
            "link": "/card/movies/800-112/Odinokie-volki.html",
            "year": "2024",
            "rating":"6.5","tmdb_id": 877817
        },
        {
            "name": "Хэнкок",
            "image": "https://image.tmdb.org/t/p/w500//zH9RhVlpMBzGp9VM7jVmlnZpRuR.jpg",
            "link": "/card/movies/800-113/Henkok.html",
            "year": "2008",
            "rating":"6.3","tmdb_id": 8960
        },
        {
            "name": "Спящие псы",
            "image": "https://image.tmdb.org/t/p/w500//7IIWX53p0h54ZtbhFXLobnAOm8s.jpg",
            "link": "/card/movies/800-239/Spyashie-psy.html",
            "year": "2024",
            "rating":"7.0","tmdb_id": 978592
        },
        {
            "name": "Пчеловод",
            "image": "https://image.tmdb.org/t/p/w500//1mbla3dGMbzyAz1PgpMcy4Yjtir.jpg",
            "link": "/card/movies/800-261/Pchelovod.html",
            "year": "2024",
            "rating":"7.3","tmdb_id": 866398
        },
        {
            "name": "Подай знак",
            "image": "https://image.tmdb.org/t/p/w500//7bIXHZLZoBvo5EbeIdAnL2wCCla.jpg",
            "link": "/card/movies/800-114/Podaj-znak.html",
            "year": "2024",
            "rating":"6.7","tmdb_id": 840705
        },
        {
            "name": "Гран Туризмо",
            "image": "https://image.tmdb.org/t/p/w500//zS3cofAvqaKAvdXCPrZjToI3N6H.jpg",
            "link": "/card/movies/800-269/Gran-Turizmo.html",
            "year": "2023",
            "rating":"7.8","tmdb_id": 980489
        },
        {
            "name": "Я – Четвертый",
            "image": "https://image.tmdb.org/t/p/w500//iCTi4zBFmqKQb0Q8D8FZ3i5hFyx.jpg",
            "link": "/card/movies/800-115/Ya–Chetvertyj.html",
            "year": "2011",
            "rating":"6.2","tmdb_id": 46529
        },
        {
            "name": "Министерство неджентльменских дел",
            "image": "https://image.tmdb.org/t/p/w500//fxLCzo1HzlcvNIXmb1lLTkAJsfV.jpg",
            "link": "/card/movies/800-268/Ministerstvo-nedzhentlmenskih-del.html",
            "year": "2024",
            "rating":"7.1","tmdb_id": 799583
        },
        {
            "name": "Миллион способов потерять голову",
            "image": "https://image.tmdb.org/t/p/w500//oza59UpAODrr1xSvtoNudWShuut.jpg",
            "link": "/card/movies/800-116/Million-sposobov-poteryat-golovu.html",
            "year": "2014",
            "rating":"6.0","tmdb_id": 188161
        },
        {
            "name": "Атлас",
            "image": "https://image.tmdb.org/t/p/w500//6z8NNTDR6NMVAWkCOdyprHeS49p.jpg",
            "link": "/card/movies/800-262/Atlas.html",
            "year": "2024",
            "rating":"6.7","tmdb_id": 614933
        },
        {
            "name": "Озеро Каддо",
            "image": "https://image.tmdb.org/t/p/w500//tk7g8DWPfak1MNtwX5RY7rcbpO1.jpg",
            "link": "/card/movies/800-117/Ozero-Kaddo.html",
            "year": "2024",
            "rating":"7.3","tmdb_id": 863873
        },
        {
            "name": "Звук свободы",
            "image": "https://image.tmdb.org/t/p/w500//r5VQb0LDEZ0r5OHmAQirhOsWrru.jpg",
            "link": "/card/movies/800-264/Zvuk-svobody.html",
            "year": "2023",
            "rating":"8.0","tmdb_id": 678512
        },
        {
            "name": "Интерстеллар",
            "image": "https://image.tmdb.org/t/p/w500//vReLRjDV9XPhiOSEW7QWow4DXwf.jpg",
            "link": "/card/movies/800-118/Interstellar.html",
            "year": "2014",
            "rating":"8.5","tmdb_id": 157336
        },
        {
            "name": "Артур, ты король",
            "image": "https://image.tmdb.org/t/p/w500//aufA1yiiDpQF8YELXRV16T5aSrG.jpg",
            "link": "/card/movies/800-263/Artur-ty-korol.html",
            "year": "2024",
            "rating":"7.6","tmdb_id": 618588
        },
        {
            "name": "За гранью З/Л/А",
            "image": "https://image.tmdb.org/t/p/w500//jaxQj8lnTMuPkVB2Rp7pkr0M1Ki.jpg",
            "link": "/card/movies/800-119/Za-granyu-ZLA.html",
            "year": "2024",
            "rating":"6.7","tmdb_id": 1190868
        },
        {
            "name": "Каскадёры",
            "image": "https://image.tmdb.org/t/p/w500//hegoKiLI9FxPXfqn3rMsnRC0RPY.jpg",
            "link": "/card/movies/800-265/Kaskadyory.html",
            "year": "2024",
            "rating":"7.0","tmdb_id": 746036
        },
        {
            "name": "Zомбилэнд: Контрольный выстрел",
            "image": "https://image.tmdb.org/t/p/w500//ociepR7KE1ixlSps5LZb51rkZwa.jpg",
            "link": "/card/movies/800-211/Zombilend-Kontrolnyj-vystrel.html",
            "year": "2019",
            "rating":"6.9","tmdb_id": 338967
        },
        {
            "name": "Добро пожаловать в Zомбилэнд",
            "image": "https://image.tmdb.org/t/p/w500//kKImcJWO19FWRwcVf1jJMJ7Q72S.jpg",
            "link": "/card/movies/800-120/Dobro-pozhalovat-v-Zombilend.html",
            "year": "2009",
            "rating":"7.3","tmdb_id": 19908
        },
        {
            "name": "Битлджус Битлджус",
            "image": "https://image.tmdb.org/t/p/w500//cC27Z2eQJXjII2Bw7D4BDCsTCr1.jpg",
            "link": "/card/movies/800-122/Bitldzhus-Bitldzhus.html",
            "year": "2024",
            "rating":"7.0","tmdb_id": 917496
        },
        {
            "name": "Битлджюс",
            "image": "https://image.tmdb.org/t/p/w500//vV40BJbN1NVYkOXVdkQt4qi1PmQ.jpg",
            "link": "/card/movies/800-212/Bitldzhyus.html",
            "year": "1988",
            "rating":"7.4","tmdb_id": 4011
        },
        {
            "name": "Игра в имитацию",
            "image": "https://image.tmdb.org/t/p/w500//iM1C3NYISOzLbWEo8HcUDBASprh.jpg",
            "link": "/card/movies/800-123/Igra-v-imitaciyu.html",
            "year": "2014",
            "rating":"8.0","tmdb_id": 205596
        },
        {
            "name": "Догмен",
            "image": "https://image.tmdb.org/t/p/w500//rhvNgsWZXJ1Hix9RafDMIbd6SsO.jpg",
            "link": "/card/movies/800-266/Dogmen.html",
            "year": "2023",
            "rating":"7.9","tmdb_id": 944401
        },
        {
            "name": "Ворон",
            "image": "https://image.tmdb.org/t/p/w500//msAYTWaQXWGoeChpp5EUGzpMpVb.jpg",
            "link": "/card/movies/800-124/Voron.html",
            "year": "2024",
            "rating":"5.8","tmdb_id": 957452
        },
        {
            "name": "Ворон",
            "image": "https://image.tmdb.org/t/p/w500//a5ZZ2XfFkcpik8M56lDznqrsyTp.jpg",
            "link": "/card/movies/800-213/Voron1994.html",
            "year": "1994",
            "rating":"7.5","tmdb_id": 9495
        },
        {
            "name": "Хроника",
            "image": "https://image.tmdb.org/t/p/w500//8gik6OwbWuhUAKctvGRHUgYZJOm.jpg",
            "link": "/card/movies/800-125/Hronika.html",
            "year": "2012",
            "rating":"6.8","tmdb_id": 76726
        },
        {
            "name": "За пивом!",
            "image": "https://image.tmdb.org/t/p/w500//reEdwRv8FPxc7lBzeQHUNmhJCxC.jpg",
            "link": "/card/movies/800-267/Za-pivom.html",
            "year": "2022",
            "rating":"7.6","tmdb_id": 597922
        },
        {
            "name": "Грань времени",
            "image": "https://image.tmdb.org/t/p/original/wgm4gdJwb7iSYX0uBsRAZmHQmPm.jpg",
            "link": "/card/movies/800-126/Gran-vremeni.html",
            "year": "2020",
            "rating":"6.3","tmdb_id": 549294
        },
        {
            "name": "Не говори никому",
            "image": "https://image.tmdb.org/t/p/original/r0xn6drfJXKWetJj58hYEySaQ3N.jpg",
            "link": "/card/movies/800-127/Ne-govori-nikomu.html",
            "year": "2024",
            "rating":"7.2","tmdb_id": 1114513
        },
        {
            "name": "Мой пингвин",
            "image": "https://image.tmdb.org/t/p/w500//n5yjFZLh6sx04B6YKynae1myD2X.jpg",
            "link": "/card/movies/800-129/Moj-pingvin.html",
            "year": "2024",
            "rating":"7.5","tmdb_id": 1159799
        },
        {
            "name": "Гарри Поттер 20 лет спустя: возвращение в Хогвартс",
            "image": "https://image.tmdb.org/t/p/w500//pMlCpcBKTB7h4nhazWl26wgngvf.jpg",
            "link": "/card/movies/800-214/Garri-Potter-20-let-spustya-vozvrashenie-v-Hogvarts.html",
            "year": "2022",
            "rating":"7.3","tmdb_id": 899082
        },
        {
            "name": "Гарри Поттер и Дары Смерти: Часть II",
            "image": "https://image.tmdb.org/t/p/w500//cSxvq15AOeJ2jNdVRXJvAoZU8T6.jpg",
            "link": "/card/movies/800-215/Garri-Potter-i-Dary-Smerti-Chast-II.html",
            "year": "2011",
            "rating":"8.1","tmdb_id": 12445
        },
        {
            "name": "Гарри Поттер и Дары Смерти: Часть I",
            "image": "https://image.tmdb.org/t/p/w500//nUJc0DOO0lh8pjLkmMtPObA2NKf.jpg",
            "link": "/card/movies/800-216/Garri-Potter-i-Dary-Smerti-Chast-I.html",
            "year": "2010",
            "rating":"7.7","tmdb_id": 12444
        },
        {
            "name": "Гарри Поттер и Принц-полукровка",
            "image": "https://image.tmdb.org/t/p/w500//zhMOIXezutmTCeP1AvPZHakGCYs.jpg",
            "link": "/card/movies/800-217/Garri-Potter-i-Princ-polukrovka.html",
            "year": "2009",
            "rating":"7.7","tmdb_id": 767
        },
        {
            "name": "Гарри Поттер и Орден Феникса",
            "image": "https://image.tmdb.org/t/p/w500//lBuFOlXNY3YYIkXInGqcd7aJoAY.jpg",
            "link": "/card/movies/800-218/Garri-Potter-i-Orden-Feniksa.html",
            "year": "2007",
            "rating":"7.7","tmdb_id": 675
        },
        {
            "name": "Гарри Поттер и Кубок огня",
            "image": "https://image.tmdb.org/t/p/w500//wWlSRexsjrdTWBYY84s671dYde5.jpg",
            "link": "/card/movies/800-219/Garri-Potter-i-Kubok-ognya.html",
            "year": "2005",
            "rating":"7.8","tmdb_id": 674
        },
        {
            "name": "Гарри Поттер и узник Азкабана",
            "image": "https://image.tmdb.org/t/p/w500//dd3dM7g6x8TIBBKr22oHM8wZxv8.jpg",
            "link": "/card/movies/800-220/Garri-Potter-i-uznik-Azkabana.html",
            "year": "2004",
            "rating":"8.0","tmdb_id": 673
        },
        {
            "name": "Гарри Поттер и Тайная комната",
            "image": "https://image.tmdb.org/t/p/w500//33Wj3LSyoAqtqkeh7YXcVMvTQzc.jpg",
            "link": "/card/movies/800-92/Garri-Potter-i-Tajnaya-komnata.html",
            "year": "2002",
            "rating":"7.7","tmdb_id": 672
        },
        {
            "name": "Гарри Поттер и философский камень",
            "image": "https://image.tmdb.org/t/p/w500//Z2CbhtMtbVaBEvhqBKMNB0p0ko.jpg",
            "link": "/card/movies/800-130/Garri-Potter-i-filosofskij-kamen.html",
            "year": "2001",
            "rating":"7.9","tmdb_id": 671
        },
        {
            "name": "Хоббит: Битва пяти воинств",
            "image": "https://image.tmdb.org/t/p/w500//19fnHQ9g3Sy87rHKtw3wqhkBGOh.jpg",
            "link": "/card/movies/800-221/Hobbit-Bitva-pyati-voinstv.html",
            "year": "2014",
            "rating":"7.3","tmdb_id": 122917
        },
        {
            "name": "Хоббит: Пустошь Смауга",
            "image": "https://image.tmdb.org/t/p/w500//ccbf6gnYwB2tMaU9EAgxCi88NEe.jpg",
            "link": "/card/movies/800-222/Hobbit-Pustosh-Smauga.html",
            "year": "2013",
            "rating":"7.6","tmdb_id": 57158
        },
        {
            "name": "Хоббит: Нежданное путешествие",
            "image": "https://image.tmdb.org/t/p/w500//zTnup9V8UJEG4jWULQQpyKB6Tq0.jpg",
            "link": "/card/movies/800-223/Hobbit-Nezhdannoe-puteshestvie.html",
            "year": "2012",
            "rating":"7.4","tmdb_id": 49051
        },
        {
            "name": "Властелин колец: Возвращение короля",
            "image": "https://image.tmdb.org/t/p/w500//x6NqCWwU1SrQnvfdmVPAuATyUgD.jpg",
            "link": "/card/movies/800-43/Vlastelin-kolec-Vozvrashenie-korolya.html",
            "year": "2003",
            "rating":"8.5","tmdb_id": 122
        },
        {
            "name": "Властелин колец: Две крепости",
            "image": "https://image.tmdb.org/t/p/w500//fl7QZlAoZ4MLcxvgOaBjeUxlpQt.jpg",
            "link": "/card/movies/800-224/Vlastelin-kolec-Dve-kreposti.html",
            "year": "2002",
            "rating":"8.4","tmdb_id": 121
        },
        {
            "name": "Властелин колец: Братство кольца",
            "image": "https://image.tmdb.org/t/p/w500//dfoCSXJIamlzlpDCRxXVY5R9GSX.jpg",
            "link": "/card/movies/800-225/Vlastelin-kolec-Bratstvo-kolca.html",
            "year": "2001",
            "rating":"8.4","tmdb_id": 120
        },
        {
            "name": "Опустошение",
            "image": "https://image.tmdb.org/t/p/w500//tgSmrSZHMtI0PFBiDIrjfRV3qAm.jpg",
            "link": "/card/movies/800-251/Opustoshenie.html",
            "year": "2025",
            "rating":"6.5","tmdb_id": 668489
        },
        {
            "name": "Перси Джексон и Море чудовищ",
            "image": "https://image.tmdb.org/t/p/w500//1cJWgzakpefE5TnEvVHtUfSJ8Zd.jpg",
            "link": "/card/movies/800-226/Persi-Dzhekson-i-More-chudovish.html",
            "year": "2013",
            "rating":"6.0","tmdb_id": 76285
        },
        {
            "name": "Перси Джексон и похититель молний",
            "image": "https://image.tmdb.org/t/p/w500//xQazS5kqxp9Wpsll3KYs5z4Prqh.jpg",
            "link": "/card/movies/800-128/Persi-Dzhekson-i-pohititel-molnij.html",
            "year": "2010",
            "rating":"6.2","tmdb_id": 32657
        },
        {
            "name": "Чужой: Ромул",
            "image": "https://image.tmdb.org/t/p/w500//A2CU4WbCZlkYbz9gEFIpchlIGpq.jpg",
            "link": "/card/movies/800-131/Chuzhoj-Romul.html",
            "year": "2024",
            "rating":"7.2","tmdb_id": 945961
        },
        {
            "name": "Чужой: Завет",
            "image": "https://image.tmdb.org/t/p/w500//5ff1DVsSL7CP5zIjr8ayHaaHScP.jpg",
            "link": "/card/movies/800-227/Chuzhoj-Zavet.html",
            "year": "2017",
            "rating":"6.2","tmdb_id": 126889
        },
        {
            "name": "Прометей",
            "image": "https://image.tmdb.org/t/p/w500//kE9dT4e44v1hiVM0GBjWEFczCFc.jpg",
            "link": "/card/movies/800-121/Prometej.html",
            "year": "2012",
            "rating":"6.6","tmdb_id": 70981
        },
        {
            "name": "Чужие против Хищника: Реквием",
            "image": "https://image.tmdb.org/t/p/w500//A7vfsc9IcLgi63KaBFeOvio0yRY.jpg",
            "link": "/card/movies/800-228/Chuzhie-protiv-Hishnika-Rekviem.html",
            "year": "2007",
            "rating":"5.2","tmdb_id": 440
        },
        {
            "name": "Чужой против Хищника",
            "image": "https://image.tmdb.org/t/p/w500//uIhgEqmO1Zd9uNJkJzoyvPcgHfA.jpg",
            "link": "/card/movies/800-229/Chuzhoj-protiv-Hishnika.html",
            "year": "2004",
            "rating":"5.9","tmdb_id": 395
        },
        {
            "name": "Чужой: Воскрешение",
            "image": "https://image.tmdb.org/t/p/w500//pkiOQmiRtm0JbvBPtbz4PjrZQM3.jpg",
            "link": "/card/movies/800-230/Chuzhoj-Voskreshenie.html",
            "year": "1997",
            "rating":"6.2","tmdb_id": 8078
        },
        {
            "name": "Чужой 3",
            "image": "https://image.tmdb.org/t/p/w500//x49NIbvqwWZ2apQXAa3009FyEzi.jpg",
            "link": "/card/movies/800-231/Chuzhoj-3.html",
            "year": "1992",
            "rating":"6.4","tmdb_id": 8077
        },
        {
            "name": "Чужие",
            "image": "https://image.tmdb.org/t/p/w500//sSCmIDZ2EO1oLa8QMq6dL8kNFKq.jpg",
            "link": "/card/movies/800-232/Chuzhie.html",
            "year": "1986",
            "rating":"8.0","tmdb_id": 679
        },
        {
            "name": "Чужой",
            "image": "https://image.tmdb.org/t/p/w500//6EXQpftMDnbEFu75fmRGGF6CuOT.jpg",
            "link": "/card/movies/800-233/Chuzhoj1979.html",
            "year": "1979",
            "rating":"8.2","tmdb_id": 348
        },
        {
            "name": "Игры возмездия",
            "image": "https://image.tmdb.org/t/p/w500//x0v0MIrnl4HrtmgmOFAQubOCMEr.jpg",
            "link": "/card/movies/800-252/Igry-vozmezdiya.html",
            "year": "2025",
            "rating":"5.0","tmdb_id": 977294
        },
        {
            "name": "128 ударов сердца в минуту",
            "image": "https://image.tmdb.org/t/p/w500//jdKfkrUTl2JknNAeTOnz8We15bX.jpg",
            "link": "/card/movies/800-132/128-udarov-serdca-v-minutu.html",
            "year": "2015",
            "rating":"6.8","tmdb_id": 301351
        },
        {
            "name": "Дэдпул и Росомаха",
            "image": "https://image.tmdb.org/t/p/w500//8uOIWsrHvBTeZP4LSf25NomvLb6.jpg",
            "link": "/card/movies/800-133/Dedpul-i-Rosomaha.html",
            "year": "2024",
            "rating":"7.6","tmdb_id": 533535
        },
        {
            "name": "Дэдпул 2",
            "image": "https://image.tmdb.org/t/p/w500//6ieUmjpY7bMMZqIdFxHKUEwfwSB.jpg",
            "link": "/card/movies/800-234/Dedpul-2.html",
            "year": "2018",
            "rating":"7.5","tmdb_id": 383498
        },
        {
            "name": "Дэдпул",
            "image": "https://image.tmdb.org/t/p/w500//r5PYZGOiIQuGpaZas9TTplNZ5Ox.jpg",
            "link": "/card/movies/800-235/Dedpul.html",
            "year": "2016",
            "rating":"7.6","tmdb_id": 293660
        },
        {
            "name": "Бойфренд из будущего",
            "image": "https://image.tmdb.org/t/p/w500//xWk8ukJ6dhRvlrboG3qgNWNtLJ1.jpg",
            "link": "/card/movies/800-134/Bojfrend-iz-budushego.html",
            "year": "2013",
            "rating":"7.9","tmdb_id": 122906
        },
        {
            "name": "После. Навсегда",
            "image": "https://image.tmdb.org/t/p/w500//p5NuTOVdJsje6qOjsLStoaXsoGy.jpg",
            "link": "/card/movies/800-143/Posle-Navsegda.html",
            "year": "2023",
            "rating":"6.9","tmdb_id": 820525
        },
        {
            "name": "После. Долго и счастливо",
            "image": "https://image.tmdb.org/t/p/w500//7SAIQcQfPgimB7BHef9DANUQZkY.jpg",
            "link": "/card/movies/800-142/Posle-Dolgo-i-schastlivo.html",
            "year": "2022",
            "rating":"6.8","tmdb_id": 744276
        },
        {
            "name": "После. Глава 3",
            "image": "https://image.tmdb.org/t/p/w500//eRmylmc17IIxKKQrGcQt1723APP.jpg",
            "link": "/card/movies/800-141/Posle-Glava-3.html",
            "year": "2021",
            "rating":"7.0","tmdb_id": 744275
        },
        {
            "name": "После. Глава 2",
            "image": "https://image.tmdb.org/t/p/w500//kWkFxHdXhKBM3NmncrX8JYhVXEe.jpg",
            "link": "/card/movies/800-140/Posle-Glava-2.html",
            "year": "2020",
            "rating":"7.2","tmdb_id": 613504
        },
        {
            "name": "После",
            "image": "https://image.tmdb.org/t/p/w500//7Prt3Le9H0EeRYVltAXFJqwDIig.jpg",
            "link": "/card/movies/800-135/Posle.html",
            "year": "2019",
            "rating":"7.1","tmdb_id": 537915
        },
        {
            "name": "Ребел-Ридж",
            "image": "https://image.tmdb.org/t/p/w500//8rnSpfoXiizlIGFEIRed7h8inrP.jpg",
            "link": "/card/movies/800-136/Rebel-Ridzh.html",
            "year": "2024",
            "rating":"7.0","tmdb_id": 646097
        },
        {
            "name": "Ты водишь!",
            "image": "https://image.tmdb.org/t/p/w500//4GTpZgK5ijNGzJSB6tXjz8Xz7t2.jpg",
            "link": "/card/movies/800-137/Ty-vodish!.html",
            "year": "2018",
            "rating":"6.7","tmdb_id": 455980
        },
        {
            "name": "Место под соснами",
            "image": "https://image.tmdb.org/t/p/w500//8y4tBbEUVdD3uGjqos21EAOAxc5.jpg",
            "link": "/card/movies/800-138/Mesto-pod-sosnami.html",
            "year": "2013",
            "rating":"7.0","tmdb_id": 97367
        },
        {
            "name": "Чаща",
            "image": "https://image.tmdb.org/t/p/w500//ihzZSZZ2eFmbxscbnqy3e5YOvtp.jpg",
            "link": "/card/movies/800-139/Chasha.html",
            "year": "2024",
            "rating":"6.4","tmdb_id": 395817
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