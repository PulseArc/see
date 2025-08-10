


// Генерация карточек с случайными рейтингами
// Сериалы

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

// Вспомогательная функция для получения сертификации фильмов
function getMovieCertification(data) {
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
    return certification;
}

// Вспомогательная функция для получения сертификации сериалов
function getTVCertification(data) {
    let certification = null;
    if (data.content_ratings && data.content_ratings.results) {
        const ruRating = data.content_ratings.results.find(res => res.iso_3166_1 === 'RU');
        if (ruRating && ruRating.rating) {
            certification = ruRating.rating;
        } else {
            const usRating = data.content_ratings.results.find(res => res.iso_3166_1 === 'US');
            if (usRating && usRating.rating) {
                certification = usRating.rating;
            } else if (data.content_ratings.results.length > 0) {
                certification = data.content_ratings.results[0].rating;
            }
        }
    }
    return certification;
}

async function fetchTmdbData(id, initialIsTV) { 
    if (!id) return null;

    let type = initialIsTV ? 'tv' : 'movie';
    let appendToResponse = initialIsTV ? 'keywords,content_ratings' : 'keywords,release_dates';
    let url = `${BASE_TMDB_URL}/${type}/${id}?api_key=${TMDB_API_KEY}&append_to_response=${appendToResponse}&language=ru-RU`;

    try {
        let r = await fetch(url);

        // Если 404, пробуем другой тип (фильм, если изначально был сериал, и наоборот)
        if (!r.ok && r.status === 404) {
            console.warn(`TMDB ID ${id} не найден как ${type}, пробуем другой тип...`);
            type = initialIsTV ? 'movie' : 'tv'; // Меняем тип
            appendToResponse = type === 'tv' ? 'keywords,content_ratings' : 'keywords,release_dates';
            url = `${BASE_TMDB_URL}/${type}/${id}?api_key=${TMDB_API_KEY}&append_to_response=${appendToResponse}&language=ru-RU`;
            r = await fetch(url);
        }

        if (!r.ok) {
            console.error(`Не удалось получить данные с TMDb для ID ${id} (${type}). Статус: ${r.status}`);
            return null;
        }

        const data = await r.json();
        let certification = null;

        if (type === 'tv') { 
            certification = getTVCertification(data);
        } else {
            certification = getMovieCertification(data);
        }

        data.certification = certification;
        data.isTV = (type === 'tv'); // Обновляем isTV на основе того, что реально нашли
        return data;
    } catch (e) {
        console.error("Ошибка при получении данных с TMDb:", e);
        return null;
    }
}


async function processLocalCardData(data) {
    if (processedLocalCards.length && !processingPromise) return processedLocalCards;
    if (processingPromise) return await processingPromise;

    processingPromise = Promise.all(data.map(async (c) => {
        const u = { ...c };
        if (c.tmdb_id) {
            // Передаем флаг isTV из локальных данных в новую функцию fetchTmdbData
            // Если isTV не указан в localCardData, по умолчанию false (т.е. фильм)
            const m = await fetchTmdbData(c.tmdb_id, c.isTV === true); // Явно передаем true/false
            if (m) {
                u.genres = m.genres?.map(g => g.name) || [];
                u.keywords = m.keywords?.keywords?.map(k => k.name) || m.keywords?.results?.map(k => k.name) || [];
                u.collection_id = m.belongs_to_collection?.id || null;
                u.certification = m.certification || c.certification || null;
                // Обновляем isTV, если TMDb показал другой тип
                if (m.isTV !== undefined) u.isTV = m.isTV; 
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
        // Убедимся, что isTV всегда определен
        if (u.isTV === undefined) u.isTV = false; // По умолчанию фильм, если не указано
        return u;
    })).finally(() => {
        processingPromise = null;
    });
    
    processedLocalCards = await processingPromise;
    return processedLocalCards;
}


async function getTmdbRecommendations(id, isTV) { 
    let m = [];
    // Тип берется напрямую из переданного isTV
    const type = isTV ? 'tv' : 'movie'; 
    for (const e of [`recommendations`, `similar`]) {
        try {
            const r = await fetch(`${BASE_TMDB_URL}/${type}/${id}/${e}?api_key=${TMDB_API_KEY}&language=ru-RU&page=1`);
            if (r.ok) {
                const d = await r.json();
                if (d.results?.length) {
                    m = d.results;
                    break;
                }
            } else {
                 console.warn(`Не удалось получить ${e} для ID ${id} (${type}). Статус: ${r.status}`);
            }
        } catch (e) { 
            console.error(`Ошибка при получении ${e} с TMDb для ID ${id} (${type}):`, e);
        }
    }
    return m;
}

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

// --- Усиленные константы для жанров ---
const GENRE_MATCH_BONUS = 150;
const KEYWORD_MATCH_BONUS = 1000;
const IRRELEVANT_SCORE = -10000;
const YEAR_PROXIMITY_BONUS = 50;
const YEAR_DIFFERENCE_PENALTY_FACTOR = 3;

// --- Абсолютно несовместимые жанры (мгновенный отсев) ---
const ABSOLUTE_GENRE_CONFLICTS = {
    "ужасы": ["семейный", "мультфильм", "мюзикл", "спорт", "детский"],
    "семейный": ["ужасы", "криминал", "нуар", "боевик", "триллер", "детектив", "военный", "эротика"],
    "мультфильм": ["ужасы", "криминал", "нуар", "боевик", "триллер", "детектив", "военный", "эротика"],
    "документальный": ["фэнтези", "фантастика", "мультфильм", "мюзикл", "спорт", "детский"],
    "нуар": ["семейный", "мультфильм", "музыка", "спорт", "мюзикл", "комедия", "детский"],
    "мюзикл": ["ужасы", "криминал", "военный", "триллер", "нуар", "документальный", "спорт", "детский"],
    "спорт": ["ужасы", "фэнтези", "фантастика", "нуар", "мюзикл", "детский"],
    "эротика": ["семейный", "мультфильм", "детский"],
    "детский": ["ужасы", "криминал", "нуар", "боевик", "триллер", "детектив", "военный", "эротика", "документальный", "история", "биография"],
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
    "детский": -1200,
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
    "детский": -1500,
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

    // Ваши ЛОКАЛЬНЫЕ ДАННЫЕ ДОЛЖНЫ быть полными и актуальными!
    // Важно: для сериалов/аниме/мультфильмов укажите "isTV": true
    const localCardData = [
        {
            "name": "Уэнздей",
            "image": "https://image.tmdb.org/t/p/w500//rb2MBiP9gAGwtxObuMP9Qro12W3.jpg",
            "link": "/card/series/900-106/Uenzdej.html",
            "year": "2022",
            "rating": "8.4",
            "tmdb_id": 119051,
            "isTV": true
        },
        {
            "name": "Гангстерленд",
            "image": "https://image.tmdb.org/t/p/w500//qSRH45LOLb0BWWiVBHUXGytYFqL.jpg",
            "link": "/card/series/900-91/Gangsterlend.html",
            "year": "2025",
            "rating": "8.5",
            "tmdb_id": 247718,
            "isTV": true
        },
        {
            "name": "Алиса в Пограничье",
            "image": "https://image.tmdb.org/t/p/w500//AhSSceW4LshEU2MKVL3iDHLXZtX.jpg",
            "link": "/card/series/900-92/Alisa-v-Pograniche.html",
            "year": "2020",
            "rating": "8.2",
            "tmdb_id": 110316,
            "isTV": true
        },
        {
            "name": "Джинни и Джорджия",
            "image": "https://image.tmdb.org/t/p/w500//1yGNxmIfzr9UqKGxGoPF4P1AKbH.jpg",
            "link": "/card/series/900-93/Dzhinni-i-Dzhordzhiya.html",
            "year": "2021",
            "rating": "8.1",
            "tmdb_id": 117581,
            "isTV": true
        },
        {
            "name": "Герои",
            "image": "https://image.tmdb.org/t/p/w500//A2VAMFKW5Q4Qgp82XIVIjUhcj9n.jpg",
            "link": "/card/series/900-94/Geroi.html",
            "year": "2006",
            "rating": "7.5",
            "tmdb_id": 1639,
            "isTV": true
        },
        {
            "name": "Видеть",
            "image": "https://image.tmdb.org/t/p/w500//xI8GsMKify2ke4FvcmsoOaOdPIJ.jpg",
            "link": "/card/series/900-95/Videt.html",
            "year": "2019",
            "rating": "8.1",
            "tmdb_id": 80752,
            "isTV": true
        },
        {
            "name": "Отдел нераскрытых дел",
            "image": "https://image.tmdb.org/t/p/w500//jyqEWkBA3bm9YdDwhsM3DbDylfD.jpg",
            "link": "/card/series/900-96/Otdel-neraskrytyh-del.html",
            "year": "2025",
            "rating": "7.9",
            "tmdb_id": 245703,
            "isTV": true
        },
        {
            "name": "Остаться в живых",
            "image": "https://image.tmdb.org/t/p/w500//jR6yfKTUv7HqvyROtoRMuKzlFCb.jpg",
            "link": "/card/series/900-97/Ostatsya-v-zhivyh.html",
            "year": "2004",
            "rating": "7.9",
            "tmdb_id": 4607,
            "isTV": true
        },
        {
            "name": "Два с половиной человека",
            "image": "https://image.tmdb.org/t/p/w500//rfo3OHRPRIDODWWr54sY1bTZLd3.jpg",
            "link": "/card/series/900-98/Dva-s-polovinoj-cheloveka.html",
            "year": "2003",
            "rating": "7.5",
            "tmdb_id": 2691,
            "isTV": true
        },
        {
            "name": "Сотня",
            "image": "https://image.tmdb.org/t/p/w500//tEm3ALRXsoXT9IaCp1dcNFyjtBO.jpg",
            "link": "/card/series/900-99/Sotnya.html",
            "year": "2014",
            "rating": "7.9",
            "tmdb_id": 48866,
            "isTV": true
        },
        {
            "name": "Стрела",
            "image": "https://image.tmdb.org/t/p/w500//8xevzZgfa6ed0vVrZ8kwf71py4w.jpg",
            "link": "/card/series/900-100/Strela.html",
            "year": "2012",
            "rating": "6.8",
            "tmdb_id": 1412,
            "isTV": true
        },
        {
            "name": "Тайны Смолвиля",
            "image": "https://image.tmdb.org/t/p/w500//aRhhgcz1hMHZWp15E8g8oerb8vD.jpg",
            "link": "/card/series/900-101/Tajny-Smolvilya.html",
            "year": "2001",
            "rating": "8.2",
            "tmdb_id": 4604,
            "isTV": true
        },
        {
            "name": "Зачарованные",
            "image": "https://image.tmdb.org/t/p/w500//l66qYuj0h7r6aPfcznkRzVHiFLU.jpg",
            "link": "/card/series/900-102/Zacharovannye.html",
            "year": "1998",
            "rating": "8.2",
            "tmdb_id": 1981,
            "isTV": true
        },
        {
            "name": "Детство Шелдона",
            "image": "https://image.tmdb.org/t/p/w500//9bZR5H7LrEo4i9gYoKvUhvcfr1y.jpg",
            "link": "/card/series/900-103/Detstvo-Sheldona.html",
            "year": "2017",
            "rating": "8.0",
            "tmdb_id": 71728,
            "isTV": true
        },
        {
            "name": "Теория большого взрыва",
            "image": "https://image.tmdb.org/t/p/w500//wgCVpWDwc93wHlck8jEQT08tps0.jpg",
            "link": "/card/series/900-104/Teoriya-bolshogo-vzryva.html",
            "year": "2007",
            "rating": "7.9",
            "tmdb_id": 1418,
            "isTV": true
        },
        {
            "name": "Сваты",
            "image": "https://image.tmdb.org/t/p/w500//7DtVbNXIwMCplhysJFJCANp6pwx.jpg",
            "link": "/card/series/900-105/Svaty.html",
            "year": "2008",
            "rating": "6.2",
            "tmdb_id": 46014,
            "isTV": true
        },
        {
            "name": "911: Служба спасения",
            "image": "https://image.tmdb.org/t/p/w500//9dNWZPjFWdKo5Avr5JEEzLShLMZ.jpg",
            "link": "/card/series/900-01/911-sluzhba-spaseniya.html",
            "year": "2018",
            "rating":"8.2",
            "tmdb_id": 75219,
            "isTV": true
        },
        {
            "name": "Сверхъестественное",
            "image": "https://image.tmdb.org/t/p/w500//hvO99pEfSBxF55clgs8r4mpRzr.jpg",
            "link": "/card/series/900-03/Sverhestestvennoe.html",
            "year": "2005",
            "rating":"8.3",
            "tmdb_id": 1622,
            "isTV": true
        },
        {
            "name": "Корона",
            "image": "https://image.tmdb.org/t/p/w500//iS2m3TYiThK43IC3Ygm4snyA4UM.jpg",
            "link": "/card/series/900-04/Korona.html",
            "year": "2016",
            "rating":"8.2",
            "tmdb_id": 65494,
            "isTV": true
        },
        {
            "name": "Острые козырьки",
            "image": "https://image.tmdb.org/t/p/w500//pVJzfWgb3sHN29hLaiI5jmBN9vx.jpg",
            "link": "/card/series/900-05/Ostrye-kozyrki.html",
            "year": "2013",
            "rating":"8.5",
            "tmdb_id": 60574,
            "isTV": true
        },
        {
            "name": "Гримм",
            "image": "https://image.tmdb.org/t/p/w500//lTmjyJwiMTLsCdzKjkkj2L9VyCd.jpg",
            "link": "/card/series/900-06/Grimm.html",
            "year": "2011",
            "rating":"8.3",
            "tmdb_id": 39351,
            "isTV": true
        },
        {
            "name": "Джентльмены",
            "image": "https://image.tmdb.org/t/p/w500//zRdUl8TxpXD3LTFqH9wiya14ZYS.jpg",
            "link": "/card/series/900-07/Dzhentlmeny.html",
            "year": "2024",
            "rating":"7.9",
            "tmdb_id": 236235,
            "isTV": true
        },
        {
            "name": "Бриджертоны",
            "image": "https://image.tmdb.org/t/p/w500//jMDY8c3HpkM5LmYr1Xiz7a0r0qk.jpg",
            "link": "/card/series/900-08/Bridzhertony.html",
            "year": "2020",
            "rating":"8.1",
            "tmdb_id": 91239,
            "isTV": true
        },
        {
            "name": "Лучше звоните Солу",
            "image": "https://image.tmdb.org/t/p/w500//rTjlrjxCnxiNNVo0PjqUSySoieH.jpg",
            "link": "/card/series/900-09/Luchshe-zvonite-Solu.html",
            "year": "2015",
            "rating":"8.7",
            "tmdb_id": 60059,
            "isTV": true
        },
        {
            "name": "Сто лет одиночества",
            "image": "https://image.tmdb.org/t/p/w500//vYtbH9Q5DaCDqzkB483dmYjfkA3.jpg",
            "link": "/card/series/900-10/Sto-let-odinochestva.html",
            "year": "2024",
            "rating":"8.0",
            "tmdb_id": 207333,
            "isTV": true
        },
        {
            "name": "Люцифер",
            "image": "https://image.tmdb.org/t/p/w500//A7IP83pBzpLCbU7hlchJXsfcF8j.jpg",
            "link": "/card/series/900-11/Lyucifer.html",
            "year": "2016",
            "rating":"8.5",
            "tmdb_id": 63174,
            "isTV": true
        },
        {
            "name": "Декстер: Новая кровь",
            "image": "https://image.tmdb.org/t/p/w500//6Dlx8ck7zRKIxnFNJ1G1tXZ6p9D.jpg",
            "link": "/card/series/900-12/Dekster-Novaya-krov.html",
            "year": "2021",
            "rating":"8.0",
            "tmdb_id": 131927,
            "isTV": true
        },
        {
            "name": "Дневники вампира",
            "image": "https://image.tmdb.org/t/p/w500//y8hcR1R8QmGs8uLHQhIFHgCFWDd.jpg",
            "link": "/card/series/900-13/Dnevniki-vampira.html",
            "year": "2009",
            "rating":"8.3",
            "tmdb_id": 18165,
            "isTV": true
        },
        {
            "name": "Шерлок",
            "image": "https://image.tmdb.org/t/p/w500//kuaBGwju6CParqos7afHNvNEIdD.jpg",
            "link": "/card/series/900-14/Sherlok.html",
            "year": "2010",
            "rating":"8.5",
            "tmdb_id": 19885,
            "isTV": true
        },
        {
            "name": "Тьма",
            "image": "https://image.tmdb.org/t/p/w500//ikhUNN25WVfMN2uvoJLLKYXp8jE.jpg",
            "link": "/card/series/900-15/Tma.html",
            "year": "2017",
            "rating":"8.4",
            "tmdb_id": 70523,
            "isTV": true
        },
        {
            "name": "Игра в кальмара",
            "image": "https://image.tmdb.org/t/p/w500//3vMCgpRa5cdutE56AXqeEkGHtxI.jpg",
            "link": "/card/series/900-16/Igra-v-kalmara.html",
            "year": "2021",
            "rating":"7.9",
            "tmdb_id": 93405,
            "isTV": true
        },
        {
            "name": "Тед Лассо",
            "image": "https://image.tmdb.org/t/p/w500//htV1GTyatTXJB589hjiqUQPegjd.jpg",
            "link": "/card/series/900-17/Ted-Lasso.html",
            "year": "2020",
            "rating":"8.4",
            "tmdb_id": 97546,
            "isTV": true
        },
        {
            "name": "Друзья",
            "image": "https://image.tmdb.org/t/p/w500//zBOs8S3UOHyWLzOl9gF8lknBxlL.jpg",
            "link": "/card/series/900-18/Druzya.html",
            "year": "1994",
            "rating":"8.4",
            "tmdb_id": 1668,
            "isTV": true
        },
        {
            "name": "Хороший доктор",
            "image": "https://image.tmdb.org/t/p/w500//c3WPgJl5OjAMJotI7qPeL1zgcCX.jpg",
            "link": "/card/series/900-19/Horoshij-doktor.html",
            "year": "2017",
            "rating":"8.5",
            "tmdb_id": 71712,
            "isTV": true
        },
        {
            "name": "Волчонок",
            "image": "https://image.tmdb.org/t/p/w500//bq0TmDgpYWrTuJVo8JpeMU3LLb8.jpg",
            "link": "/card/series/900-20/Volchonok.html",
            "year": "2011",
            "rating":"8.5",
            "tmdb_id": 34524,
            "isTV": true
        },
        {
            "name": "Мистер Робот",
            "image": "https://image.tmdb.org/t/p/w500//v0O3GfmruiKwBCFUKc1cEM1PVLF.jpg",
            "link": "/card/series/900-22/Mister-Robot.html",
            "year": "2015",
            "rating":"8.2",
            "tmdb_id": 62560,
            "isTV": true
        },
        {
            "name": "Мандалорец",
            "image": "https://image.tmdb.org/t/p/w500//3JcJfU9wm6sA2R6LQtnsBJsHMmY.jpg",
            "link": "/card/series/900-23/Mandalorec.html",
            "year": "2019",
            "rating":"8.4",
            "tmdb_id": 82856,
            "isTV": true
        },
        {
            "name": "Земля без людей",
            "image": "https://image.tmdb.org/t/p/w500//fRPUaAmxFtfhYPalD7Ru8Cu2MTr.jpg",
            "link": "/card/series/900-24/Zemlya-bez-lyudej.html",
            "year": "2024",
            "rating":"7.2",
            "tmdb_id": 250308,
            "isTV": true
        },
        {
            "name": "Американская история ужасов",
            "image": "https://image.tmdb.org/t/p/w500//gj2dFFgEHdhxqSBpD2oPyo4YmPD.jpg",
            "link": "/card/series/900-25/Amerikanskaya-istoriya-uzhasov.html",
            "year": "2011",
            "rating":"8.1",
            "tmdb_id": 1413,
            "isTV": true
        },
        {
            "name": "День Шакала",
            "image": "https://image.tmdb.org/t/p/w500//uFdIebgylj64d9ze6y1C5jsHUZZ.jpg",
            "link": "/card/series/900-26/Den-Shakala.html",
            "year": "2024",
            "rating":"8.3",
            "tmdb_id": 222766,
            "isTV": true
        },
        {
            "name": "Кросс",
            "image": "https://image.tmdb.org/t/p/w500//vjC4LAf7K6aXCWcp3CdinYsG0aG.jpg",
            "link": "/card/series/900-27/Kross.html",
            "year": "2024",
            "rating":"7.2",
            "tmdb_id": 213306,
            "isTV": true
        },
        {
            "name": "Ганнибал",
            "image": "https://image.tmdb.org/t/p/w500//cy5xnqFR88IG5RrHXxHlpqhLjEG.jpg",
            "link": "/card/series/900-28/Gannibal.html",
            "year": "2013",
            "rating":"8.2",
            "tmdb_id": 40008,
            "isTV": true
        },
        {
            "name": "Магазин светильников",
            "image": "https://image.tmdb.org/t/p/w500//edzQHpnGiwYYf1wRRv91iJETtWX.jpg",
            "link": "/card/series/900-29/Magazin-svetilnikov.html",
            "year": "2024",
            "rating":"8.6",
            "tmdb_id": 226529,
            "isTV": true
        },
        {
            "name": "Сексуальное просвещение",
            "image": "https://image.tmdb.org/t/p/w500//ig9FyX4AMOhJXKQkDmau0xX0DWy.jpg",
            "link": "/card/series/900-30/Seksualnoe-prosveshenie.html",
            "year": "2019",
            "rating":"8.2",
            "tmdb_id": 81356,
            "isTV": true
        },
        {
            "name": "Ловкий Плут",
            "image": "https://image.tmdb.org/t/p/w500//3xhycTWtx8TsQDllkQ4g7s2mGBR.jpg",
            "link": "/card/series/900-31/Lovki-Plut.html",
            "year": "2023",
            "rating":"8.0",
            "tmdb_id": 202208,
            "isTV": true
        },
        {
            "name": "Дорогуша",
            "image": "https://image.tmdb.org/t/p/w500//33DCNqCAtqL408AOYrzJ09NhiN7.jpg",
            "link": "/card/series/900-32/Dorogusha.html",
            "year": "2024",
            "rating":"7.6",
            "tmdb_id": 218347,
            "isTV": true
        },
        {
            "name": "Игра престолов",
            "image": "https://image.tmdb.org/t/p/w500//tbBQW8jpDH7RpAymMGnBluIsdmH.jpg",
            "link": "/card/series/900-33/Igra-prestolov.html",
            "year": "2011",
            "rating":"8.5",
            "tmdb_id": 1399,
            "isTV": true
        },
        {
            "name": "Древние",
            "image": "https://image.tmdb.org/t/p/w500//dsVB3Mqv5sHGGsu1SGuF3fahw0Z.jpg",
            "link": "/card/series/900-34/Drevnie.html",
            "year": "2013",
            "rating":"8.6",
            "tmdb_id": 46896,
            "isTV": true
        },
        {
            "name": "Отбросы",
            "image": "https://image.tmdb.org/t/p/w500//jpSJDe6TTnLL5Es9uZ8Viz6MMYV.jpg",
            "link": "/card/series/900-35/Otbrosy.html",
            "year": "2009",
            "rating":"7.6",
            "tmdb_id": 31295,
            "isTV": true
        },
        {
            "name": "Флэш",
            "image": "https://image.tmdb.org/t/p/w500//q14oRmj0ITMBzqHUdiGwXUIvg7t.jpg",
            "link": "/card/series/900-36/Flesh.html",
            "year": "2014",
            "rating":"7.8",
            "tmdb_id": 60735,
            "isTV": true
        },
        {
            "name": "Дом Дракона",
            "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/emAFaKrAn1mhJ3ZQbM2503a1X2s.jpg",
            "link": "/card/series/900-37/Dom-Drakona.html",
            "year": "2022",
            "rating":"8.4",
            "tmdb_id": 94997,
            "isTV": true
        },
        {
            "name": "Презумпция невиновности",
            "image": "https://image.tmdb.org/t/p/w500//l432WSWtwRw40R3IJuwakO0w6sq.jpg",
            "link": "/card/series/900-38/Prezumpciya-nevinovnosti.html",
            "year": "2024",
            "rating":"8.1",
            "tmdb_id": 156933,
            "isTV": true
        },
        {
            "name": "Обречённые на славу",
            "image": "https://image.tmdb.org/t/p/w500//4NHRDQa5WgX2guZDihQLLtifYs.jpg",
            "link": "/card/series/900-39/Obrechennye-na-slavu.html",
            "year": "2024",
            "rating":"7.5",
            "tmdb_id": 218589,
            "isTV": true
        },
        {
            "name": "Пацаны",
            "image": "https://image.tmdb.org/t/p/w500//3NqlBDpWI83TgQ9nmeFwTVxEmtZ.jpg",
            "link": "/card/series/900-40/Pacany.html",
            "year": "2019",
            "rating":"8.5",
            "tmdb_id": 76479,
            "isTV": true
        },
        {
            "name": "Очень странные дела",
            "image": "https://image.tmdb.org/t/p/w500//uKBjtMZ7yDlJovmqIOBe0ZVGdVM.jpg",
            "link": "/card/series/900-41/Ochen-strannye-dela.html",
            "year": "2016",
            "rating":"8.6",
            "tmdb_id": 66732,
            "isTV": true
        },
        {
            "name": "Шугар",
            "image": "https://image.tmdb.org/t/p/w500//z8rJ8FWiMpWt9ecbsVcxoE3UQxo.jpg",
            "link": "/card/series/900-42/Shugar.html",
            "year": "2024",
            "rating":"7.3",
            "tmdb_id": 203744,
            "isTV": true
        },
        {
            "name": "Охота за убийцей",
            "image": "https://image.tmdb.org/t/p/w500//lcoxNrC8Z00MiUynsqxNtwQDjvA.jpg",
            "link": "/card/series/900-43/Ohota-za-ubijcej.html",
            "year": "2024",
            "rating":"6.9",
            "tmdb_id": 155533,
            "isTV": true
        },
        {
            "name": "Созвездие",
            "image": "https://image.tmdb.org/t/p/w500//pon5QHLxrsgmyZKVSUdpXmHg08C.jpg",
            "link": "/card/series/900-45/Sozvezdie.html",
            "year": "2024",
            "rating":"7.2",
            "tmdb_id": 197125,
            "isTV": true
        },
        {
            "name": "Бригада",
            "image": "https://image.tmdb.org/t/p/w500//nZBVnI2gWZ4OFnpxU49j3kYavYz.jpg",
            "link": "/card/series/900-02/Brigada.html",
            "year": "2002",
            "rating":"7.8",
            "tmdb_id": 30877,
            "isTV": true
        },
        {
            "name": "Задача трёх тел",
            "image": "https://image.tmdb.org/t/p/w500//d4e2b1UiJNgU9V0kBvOxnbVPslE.jpg",
            "link": "/card/series/900-46/Zadacha-tryoh-tel.html",
            "year": "2024",
            "rating":"7.5",
            "tmdb_id": 108545,
            "isTV": true
        },
        {
            "name": "Хало",
            "image": "https://image.tmdb.org/t/p/w500//5SBcW0WyqxZyE7AolxfX1ift532.jpg",
            "link": "/card/series/900-47/Halo.html",
            "year": "2022",
            "rating":"8.3",
            "tmdb_id": 52814,
            "isTV": true
        },
        {
            "name": "Властелины воздуха",
            "image": "https://image.tmdb.org/t/p/w500//mAJJPhPJ0EbyemFho6Wtwibi7FZ.jpg",
            "link": "/card/series/900-48/Vlasteliny-vozduha.html",
            "year": "2024",
            "rating":"7.8",
            "tmdb_id": 46518,
            "isTV": true
        },
        {
            "name": "Лунный рыцарь",
            "image": "https://image.tmdb.org/t/p/w500//pygGowaXF87Mfomit3oekliBvt7.jpg",
            "link": "/card/series/900-49/Lunnyj-rycar.html",
            "year": "2022",
            "rating":"7.7",
            "tmdb_id": 92749,
            "isTV": true
        },
        {
            "name": "Извне",
            "image": "https://image.tmdb.org/t/p/w500//rGFRCzgScvIC9LCfqkdb9T7NIs0.jpg",
            "link": "/card/series/900-50/Izvne.html",
            "year": "2022",
            "rating":"8.2",
            "tmdb_id": 124364,
            "isTV": true
        },
        {
            "name": "Чернобыль",
            "image": "https://image.tmdb.org/t/p/w500//qhzSVp06AGGcziMoibInZ5PY0Eg.jpg",
            "link": "/card/series/900-51/Chernobyl.html",
            "year": "2019",
            "rating":"8.7",
            "tmdb_id": 87108,
            "isTV": true
        },
        {
            "name": "Ричер",
            "image": "https://image.tmdb.org/t/p/w500//zLqlW0rXmHwOZRhmOjeod14sGiT.jpg",
            "link": "/card/series/900-52/Dzhek-Richer.html",
            "year": "2022",
            "rating":"8.1",
            "tmdb_id": 108978,
            "isTV": true
        },
        {
            "name": "Фарго",
            "image": "https://image.tmdb.org/t/p/w500//r8HpRhKl5q0kiNehdjVOmTC7K7p.jpg",
            "link": "/card/series/900-53/Fargo.html",
            "year": "2014",
            "rating":"8.3",
            "tmdb_id": 60622,
            "isTV": true
        },
        {
            "name": "Третий лишний",
            "image": "https://image.tmdb.org/t/p/w500//cahNXUK7bp9RTPItIVyOF2z5m0L.jpg",
            "link": "/card/series/900-54/Tretij-lishnij.html",
            "year": "2024",
            "rating":"7.9",
            "tmdb_id": 201834,
            "isTV": true
        },
        {
            "name": "«Монарх»: Наследие монстров",
            "image": "https://image.tmdb.org/t/p/w500//kam0gTmqC0h68uLiRxamj38nkPX.jpg",
            "link": "/card/series/900-55/Monarh-Nasledie-monstrov.html",
            "year": "2023",
            "rating":"7.8",
            "tmdb_id": 202411,
            "isTV": true
        },
        {
            "name": "Пингвин",
            "image": "https://image.tmdb.org/t/p/w500//25dj85s5VtirRWF6rmO8TpZXHJV.jpg",
            "link": "/card/series/900-56/Pingvin.html",
            "year": "2024",
            "rating":"8.5",
            "tmdb_id": 194764,
            "isTV": true
        },
        {
            "name": "Ведьмак",
            "image": "https://image.tmdb.org/t/p/w500//rY2c2LhN07CRKlAbRaDZxN2XjvK.jpg",
            "link": "/card/series/900-57/Vedmak.html",
            "year": "2019",
            "rating":"8.0",
            "tmdb_id": 71912,
            "isTV": true
        },
        {
            "name": "Локи",
            "image": "https://image.tmdb.org/t/p/w500//fNTS8BOMmhYYM4FqLPLuJ6KRQEF.jpg",
            "link": "/card/series/900-58/Loki.html",
            "year": "2019",
            "rating":"8.2",
            "tmdb_id": 84958,
            "isTV": true
        },
        {
            "name": "Тысяча и одна ночь",
            "image": "https://image.tmdb.org/t/p/w500//vR9Dh1zc0yQSAln3bqqCPRndhEB.jpg",
            "link": "/card/series/900-59/Tysyacha-i-odna-noch.html",
            "year": "2024",
            "rating":"4.0",
            "tmdb_id": 246706,
            "isTV": true
        },
        {
            "name": "Зимний король",
            "image": "https://image.tmdb.org/t/p/w500//fYx5q9hPAmbDrWzsYUDhxZJnigC.jpg",
            "link": "/card/series/900-61/Zimnij-korol.html",
            "year": "2023",
            "rating":"6.8",
            "tmdb_id": 99737,
            "isTV": true
        },
        {
            "name": "Поколение «Ви»",
            "image": "https://image.tmdb.org/t/p/w500//2AVCQymHu0gj8Jwci2VxEuodZq4.jpg",
            "link": "/card/series/900-62/Pokolenie-Vi.html",
            "year": "2023",
            "rating":"7.9",
            "tmdb_id": 205715,
            "isTV": true
        },
        {
            "name": "Доисторическая планета",
            "image": "https://image.tmdb.org/t/p/w500//5mj82iMTp8UmnyXFaZbwRGuc81a.jpg",
            "link": "/card/series/900-63/Doistoricheskaya-planeta.html",
            "year": "2022",
            "rating":"8.3",
            "tmdb_id": 95171,
            "isTV": true
        },
        {
            "name": "Одни из нас",
            "image": "https://image.tmdb.org/t/p/w500//69loIrm9JPpPRE3Akw4yRoitSYn.jpg",
            "link": "/card/series/900-64/Odni-iz-nas.html",
            "year": "2023",
            "rating":"8.6",
            "tmdb_id": 100088,
            "isTV": true
        },
        {
            "name": "Захваченный рейс",
            "image": "https://image.tmdb.org/t/p/w500//v4oAWDy33lmKI7lsktThsYhp3zU.jpg",
            "link": "/card/series/900-65/Zahvachennyj-rejs.html",
            "year": "2023",
            "rating":"7.8",
            "tmdb_id": 198102,
            "isTV": true
        },
        {
            "name": "Скрежет металла",
            "image": "https://image.tmdb.org/t/p/w500//82HaUMIagdh5PLflUOVrHn5GsI9.jpg",
            "link": "/card/series/900-66/Skrezhet-metalla.html",
            "year": "2023",
            "rating":"7.9",
            "tmdb_id": 133748,
            "isTV": true
        },
        {
            "name": "Бумажный дом",
            "image": "https://image.tmdb.org/t/p/w500//x9YQ28gwAkAXCSw7n1cAsPbJaTF.jpg",
            "link": "/card/series/900-67/Bumazhnyj-dom.html",
            "year": "2017",
            "rating":"8.2",
            "tmdb_id": 71446,
            "isTV": true
        },
        {
            "name": "Любовь и смерть",
            "image": "https://image.tmdb.org/t/p/w500//tMm4sHiTkx8kaI71BcG2ELXRKfR.jpg",
            "link": "/card/series/900-68/Lyubov-i-smert.html",
            "year": "2023",
            "rating":"7.9",
            "tmdb_id": 124800,
            "isTV": true
        },
        {
            "name": "Цитадель",
            "image": "https://image.tmdb.org/t/p/w500//hwlI6qEtzFT47FAUMP3xac8qcnz.jpg",
            "link": "/card/series/900-69/Citadel.html",
            "year": "2023",
            "rating":"6.9",
            "tmdb_id": 114922,
            "isTV": true
        },
        {
            "name": "Экстраполяции",
            "image": "https://image.tmdb.org/t/p/w500//wzyKhC005b7wuCwfCgcKIIc7DWY.jpg",
            "link": "/card/series/900-70/Ekstrapolyacii.html",
            "year": "2023",
            "rating":"6.0",
            "tmdb_id": 138169,
            "isTV": true
        },
        {
            "name": "Фоллаут",
            "image": "https://image.tmdb.org/t/p/w500//tOrIGVF521WhBsIDwuGQ999ZbjV.jpg",
            "link": "/card/series/900-71/Fallout.html",
            "year": "2024",
            "rating":"8.3",
            "tmdb_id": 106379,
            "isTV": true
        },
        {
            "name": "Связь",
            "image": "https://image.tmdb.org/t/p/w500//u79ZbVgP5F8kugRHOrrAF78PFe1.jpg",
            "link": "/card/series/900-72/Svyaz.html",
            "year": "2023",
            "rating":"6.3",
            "tmdb_id": 128066,
            "isTV": true
        },
        {
            "name": "Настоящий детектив",
            "image": "https://image.tmdb.org/t/p/w500//1p60ehq2diow72QQC8pyppfexky.jpg",
            "link": "/card/series/900-73/Nastoyashij-detektiv.html",
            "year": "2014",
            "rating":"8.3",
            "tmdb_id": 46648,
            "isTV": true
        },
        {
            "name": "Всевидящее око",
            "image": "https://image.tmdb.org/t/p/w500//5axQCuuavbNOAICMa3tduIXQL5T.jpg",
            "link": "/card/series/900-74/Vsevidyashee-oko.html",
            "year": "2023",
            "rating":"6.7",
            "tmdb_id": 205440,
            "isTV": true
        },
        {
            "name": "Сёгун",
            "image": "https://image.tmdb.org/t/p/w500//cOKLRblbdBtcuf4TkAzsyJpZr23.jpg",
            "link": "/card/series/900-75/Syogun.html",
            "year": "2024",
            "rating":"8.5",
            "tmdb_id": 126308,
            "isTV": true
        },
        {
            "name": "Карнивал Роу",
            "image": "https://image.tmdb.org/t/p/w500//gdaKPawLiRqT44AqDJCnxBAsy2j.jpg",
            "link": "/card/series/900-76/Karnival-Rou.html",
            "year": "2019",
            "rating":"7.7",
            "tmdb_id": 90027,
            "isTV": true
        },
        {
            "name": "Сквозь снег",
            "image": "https://image.tmdb.org/t/p/w500//mNUE6FC57NcC9iC8QUCtlMEF5n8.jpg",
            "link": "/card/series/900-77/Skvoz-sneg.html",
            "year": "2020",
            "rating":"7.4",
            "tmdb_id": 79680,
            "isTV": true
        },
        {
            "name": "Ты",
            "image": "https://image.tmdb.org/t/p/w500//aSEYa7z10DC6o3NedSZEyJ6SBXv.jpg",
            "link": "/card/series/900-78/Ty.html",
            "year": "2018",
            "rating":"8.0",
            "tmdb_id": 78191,
            "isTV": true
        },
        {
            "name": "Мэйфейрские ведьмы",
            "image": "https://image.tmdb.org/t/p/w500//wTwlZ3W3euIZIWKnPqKjWARJA5v.jpg",
            "link": "/card/series/900-79/Mejfejrskie-vedmy.html",
            "year": "2023",
            "rating":"7.4",
            "tmdb_id": 207863,
            "isTV": true
        },
        {
            "name": "Наклз",
            "image": "https://image.tmdb.org/t/p/w500//zqT1Te9dnI3I8oDnDaLffFPaZ3c.jpg",
            "link": "/card/series/900-80/Naklz.html",
            "year": "2024",
            "rating":"7.4",
            "tmdb_id": 158300,
            "isTV": true
        },
        {
            "name": "1923",
            "image": "https://image.tmdb.org/t/p/w500//zgZRJZvZn5cpsWAB0zMUdad3iZd.jpg",
            "link": "/card/series/900-81/1923.html",
            "year": "2022",
            "rating":"8.1",
            "tmdb_id": 157744,
            "isTV": true
        },
        {
            "name": "Властелин колец: Кольца власти",
            "image": "https://image.tmdb.org/t/p/w500//pp5yf6xRMtySYgtVf5YTDYh7fof.jpg",
            "link": "/card/series/900-82/Vlastelin-kolec-Kolca-vlasti.html",
            "year": "2022",
            "rating":"7.3",
            "tmdb_id": 84773,
            "isTV": true
        },
        {
            "name": "Химия смерти",
            "image": "https://image.tmdb.org/t/p/w500//lUTPksMc9PhQCcWtWCmnQQrPC0B.jpg",
            "link": "/card/series/900-83/Himiya-smerti.html",
            "year": "2023",
            "rating":"6.6",
            "tmdb_id": 217180,
            "isTV": true
        },
        {
            "name": "Викинги: Вальхалла",
            "image": "https://image.tmdb.org/t/p/w500//zOB0Mo1rNUcfpVunce8gJjcvvSV.jpg",
            "link": "/card/series/900-84/Vikingi-Valhalla.html",
            "year": "2022",
            "rating":"7.7",
            "tmdb_id": 116135,
            "isTV": true
        },
        {
            "name": "Черное зеркало",
            "image": "https://image.tmdb.org/t/p/w500//rAfh65N51dtzew6r0vKCqnaiSyf.jpg",
            "link": "/card/series/900-85/Chernoe-zerkalo.html",
            "year": "2011",
            "rating":"8.3",
            "tmdb_id": 42009,
            "isTV": true
        },
        {
            "name": "Во все тяжкие",
            "image": "https://image.tmdb.org/t/p/w500//3NA1FOlnjE909OyVT534B7fw5h5.jpg",
            "link": "/card/series/900-86/Vo-vse-tyazhkie.html",
            "year": "2008",
            "rating":"8.9",
            "tmdb_id": 1396,
            "isTV": true
        },
        {
            "name": "Ходячие мертвецы: Выжившие",
            "image": "https://image.tmdb.org/t/p/w500//rhN08H5Yg7xAFfBzeDzVV9GAwDj.jpg",
            "link": "/card/series/900-44/Hodyachie-mertvecy-Vyzhivshie.html",
            "year": "2024",
            "rating":"8.0",
            "tmdb_id": 206586,
            "isTV": true
        },
        {
            "name": "Ходячие мертвецы: Дэрил Диксон",
            "image": "https://image.tmdb.org/t/p/w500//kRTaNKcs3RQJCB626y1mGOTHVYU.jpg",
            "link": "/card/series/900-60/Hodyachie-mertvecy-Deril-Dikson.html",
            "year": "2023",
            "rating":"8.1",
            "tmdb_id": 211684,
            "isTV": true
        },
        {
            "name": "Ходячие мертвецы: Мертвый город",
            "image": "https://image.tmdb.org/t/p/w500//mx5CPdGPLTsebUGcKA54Gs2i81U.jpg",
            "link": "/card/series/900-87/Hodyachie-mertvecy-Mertvyj-gorod.html",
            "year": "2023",
            "rating":"8.0",
            "tmdb_id": 194583,
            "isTV": true
        },
        {
            "name": "Истории ходячих мертвецов",
            "image": "https://image.tmdb.org/t/p/original/rlC90W3krCHQ727fXKYBYLqSmeP.jpg",
            "link": "/card/series/900-88/Istorii-hodyachih-mertvecov.html",
            "year": "2022",
            "rating":"7.2",
            "tmdb_id": 136248,
            "isTV": true
        },
        {
            "name": "Ходячие мертвецы: Мир за пределами",
            "image": "https://image.tmdb.org/t/p/original/4DuXNzJrdommCOFBM3re20mM8bd.jpg",
            "link": "/card/series/900-89/Hodyachie-mertvecy-Mir-za-predelami.html",
            "year": "2020",
            "rating":"7.4",
            "tmdb_id": 94305,
            "isTV": true
        },
        {
            "name": "Бойтесь ходячих мертвецов",
            "image": "https://image.tmdb.org/t/p/w500//3BWbdYHwSxd3rkHkLip8gFxaPZv.jpg",
            "link": "/card/series/900-90/Bojtes-hodyachih-mertvecov.html",
            "year": "2015",
            "rating":"7.7",
            "tmdb_id": 62286,
            "isTV": true
        },
        {
            "name": "Ходячие мертвецы",
            "image": "https://image.tmdb.org/t/p/w500//3metsxLVhlJU0mNj5gVfKIih0EF.jpg",
            "link": "/card/series/900-21/Hodyachie-mertvecy.html",
            "year": "2010",
            "rating":"8.1",
            "tmdb_id": 1402,
            "isTV": true
        },
    
        // конец
       
        
    ];

    // processLocalCardData теперь обрабатывает isTV === undefined как false
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

    // --- Усиленная логика определения currentMovie только по локальным данным ---

    // 1. Поиск по точному совпадению ссылки
    currentMovie = processedLocalCards.find(c => c.link.toLowerCase() === currentLink.toLowerCase());
    if (currentMovie) {
        console.log('Найден текущий фильм/сериал по ссылке:', currentMovie.name);
    }

    // 2. Поиск по чистому названию и году, если по ссылке не нашли
    if (!currentMovie) {
        const pageTitleElement = document.querySelector('.movie-title') || document.querySelector('h1') || document.querySelector('h2');
        if (pageTitleElement) {
            const rawPageMovieTitle = pageTitleElement.innerText || pageTitleElement.textContent;
            const cleanPageMovieTitle = getBaseTitle(rawPageMovieTitle);
            const pageTitleMatch = rawPageMovieTitle.match(/\((\d{4})\)/); // Ищем год в скобках в названии
            const pageYear = pageTitleMatch ? parseInt(pageTitleMatch[1]) : null;

            if (pageYear) {
                currentMovie = processedLocalCards.find(c => 
                    getBaseTitle(c.name) === cleanPageMovieTitle && parseInt(c.year) === pageYear
                );
                if (currentMovie) {
                    console.log('Найден текущий фильм/сериал по названию и году:', currentMovie.name);
                }
            }
        }
    }

    // 3. Поиск только по чистому названию (самый неточный, но как последний шанс)
    if (!currentMovie) {
        const pageTitleElement = document.querySelector('.movie-title') || document.querySelector('h1') || document.querySelector('h2');
        if (pageTitleElement) {
            const rawPageMovieTitle = pageTitleElement.innerText || pageTitleElement.textContent;
            const cleanPageMovieTitle = getBaseTitle(rawPageMovieTitle);
            currentMovie = processedLocalCards.find(c => getBaseTitle(c.name) === cleanPageMovieTitle);
            if (currentMovie) {
                console.log('Найден текущий фильм/сериал только по названию:', currentMovie.name);
            }
        }
    }

    // --- Конец логики определения currentMovie ---


    if (currentMovie) {
        // Теперь currentMovie гарантированно содержит tmdb_id и isTV, если они были в localCardData
        console.log(`Определен текущий контент: "${currentMovie.name}" (TMDB ID: ${currentMovie.tmdb_id}, isTV: ${currentMovie.isTV})`);

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
        
        // Здесь мы используем currentMovie.tmdb_id и currentMovie.isTV
        if (currentMovie.tmdb_id) {
            console.log(`Запрос рекомендаций для TMDB ID: ${currentMovie.tmdb_id}, Тип: ${currentMovie.isTV ? 'Сериал' : 'Фильм'}`);
            const tmdbRecs = await getTmdbRecommendations(currentMovie.tmdb_id, currentMovie.isTV); 
            console.log(`Получено ${tmdbRecs.length} рекомендаций от TMDb.`);
            tmdbRecs.forEach(tmdbCard => {
                const localCard = processedLocalCards.find(c => c.tmdb_id === tmdbCard.id);
                if (localCard && localCard.link !== currentMovie.link && !addedCardsLinks.has(localCard.link)) {
                    allPotentialCandidates.add(localCard);
                }
            });
        } else {
            console.warn(`У "${currentMovie.name}" нет TMDB ID в localCardData. Рекомендации TMDb не будут запрошены.`);
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
        console.log('Не удалось определить текущий фильм/сериал по URL или заголовку. Генерируем случайные рекомендации.');
        const uniqueRandomCards = new Set();
        const availableCards = shuffleArray([...processedLocalCards]); 

        for (const card of availableCards) {
            let isFranchiseAdded = false;
            if (card.collection_id) {
                for (const existingCard of uniqueRandomCards) {
                    if (existingCard.collection_id === card.collection_id) {
                        isFranchiseAdded = true;
                        break;
                    }
                }
            } else {
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
                key = `single-${card.link}`; 
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
        if (key.startsWith('collection-') || key.startsWith('title-')) { 
            group.sort((a, b) => parseInt(a.year) - parseInt(b.year));
            finalDisplayGrouped.push(...group);
        } else { 
            nonFranchiseCards.push(...group);
        }
    }
    shuffleArray(nonFranchiseCards); 
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