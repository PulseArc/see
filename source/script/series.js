


// Генерация карточек с случайными рейтингами
// Сериалы
document.addEventListener('DOMContentLoaded', async () => {
    const container = document.querySelector('#card-container');
    const splideContainer = document.querySelector('#Collections');
    if (!container || !splideContainer) {
        console.error("Missing required elements: #card-container or #Collections. Recommendations cannot be generated.");
        return;
    }

    const localCardData = window.series;

    if (!localCardData || localCardData.length === 0) {
        console.error("localCardData is empty. No recommendations can be generated.");
        return;
    }

    await generateCards(localCardData);
    setTimeout(positionCardRatingTrand, 0);
});

// --- Константы и глобальные функции ---
const KIDS_CERTIFICATIONS = new Set(['0+', '6+', 'G', 'TV-G', 'PG', 'PG-13', '12+']);
const ADULT_CERTIFICATIONS = new Set(['16+', '18+', 'R', 'NC-17', 'TV-MA', 'UNRATED']);

// Новая карта для преобразования рейтингов в числа
const CERTIFICATION_MAP = {
    '0+': 0, 'G': 0, 'TV-G': 0,
    '6+': 6,
    '12+': 12, 'PG': 12, 'PG-13': 12,
    '16+': 16, 'R': 16,
    '18+': 18, 'NC-17': 18, 'TV-MA': 18, 'UNRATED': 18,
};

const MIN_GENRE_OVERLAP_RATIO = 0.5;
const STRONG_KEYWORD_WEIGHT = 160;
const KEYWORD_WEIGHT = 80;
const TAGLINE_WEIGHT = 250;
const RARE_GENRE_WEIGHT = 140;
const COMMON_GENRE_WEIGHT = 120;
const OTHER_GENRE_WEIGHT = 200;
const ACTOR_WEIGHT = 50;
const DIRECTOR_WEIGHT = 100;
const RATING_CLOSE_BONUS = 50;
const YEAR_CLOSE_BONUS = 140;
const RELEVANCE_THRESHOLD = 200;
const MODERATE_RELEVANCE_THRESHOLD = 50;
const HIGH_RATING_THRESHOLD = 7.0;

const RARE_GENRES = new Set(['horror', 'horrors', 'ужасы', 'fantasy', 'фэнтези', 'sci-fi', 'sci fi', 'science fiction', 'боевик', 'action', 'thriller', 'thrillers', 'sport', 'спорт', 'war', 'western', 'crime', 'mystery', 'animation', 'documentary', 'biography', 'биография', 'мультфильм']);
const GENERIC_GENRES = new Set(['drama', 'драма', 'comedy', 'комедия', 'romance', 'романтика', 'family', 'семейный', 'фантастика']);
const STRONG_KEYWORDS = new Set([
    'race', 'racing', 'гонки', 'car', 'cars', 'motorsport', 'автогонки',
    'time travel', 'time-loop', 'время', 'временная петля',
    'space', 'космос', 'astronaut', 'alien', 'инопланетянин',
    'zombie', 'зомби', 'apocalypse', 'апокалипсис', 'wizard', 'волшебник', 'magic'
]);

const shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

const getExactTitle = (t) => {
    if (!t) return '';
    let cleaned = t.toLowerCase();
    cleaned = cleaned.replace(/\s*(?:смотреть онлайн бесплатно|в хорошем качестве).*$/, '').trim();
    cleaned = cleaned.replace(/[\–\—]/g, '-').replace(/\s+/g, ' ').trim();
    return cleaned;
};

const getBaseTitle = (t) => {
    if (!t) return '';
    let cleaned = t.toLowerCase();
    cleaned = cleaned.replace(/\s*\(\d{4}\s*\)\s*$/, '').replace(/\s*\d{4}\s*$/, '').trim();
    cleaned = cleaned.replace(/\s*(?:смотреть онлайн бесплатно|в хорошем качестве).*$/, '').trim();
    cleaned = cleaned.replace(/[^a-z0-9а-яё\s]+/g, ' ').replace(/\s+/g, ' ').trim();
    return cleaned;
};

const getRating = (c) => parseFloat(c.rating) || 0;
const delay = ms => new Promise(res => setTimeout(ms, ms));

const TMDB_API_KEY = '3da216c9cc3fe78b5488855d25d26e13';
const BASE_TMDB_URL = 'https://api.themoviedb.org/3';
const TMDB_CACHE_KEY = 'tmdb_data_cache';

/**
 * Функция для получения подробных данных TMDB
 */
async function fetchTmdbData(id, mediaType) {
    if (!id || !mediaType) return null;
    let retries = 3;
    while (retries > 0) {
        try {
            const response = await fetch(`${BASE_TMDB_URL}/${mediaType}/${id}?api_key=${TMDB_API_KEY}&append_to_response=keywords,release_dates,credits,genres,belongs_to_collection&language=ru-RU`);
            if (response.status === 429) {
                console.warn(`TMDB API rate limit exceeded. Retrying in 1 second...`);
                await delay(1000);
                retries--;
                continue;
            }
            if (!response.ok) return null;
            const data = await response.json();

            let certification = null;
            if (data.release_dates?.results) {
                const ruRelease = data.release_dates.results.find(res => res.iso_3166_1 === 'RU') ||
                    data.release_dates.results.find(res => res.iso_3166_1 === 'US') ||
                    data.release_dates.results[0];
                if (ruRelease?.release_dates?.length > 0) {
                    certification = ruRelease.release_dates.find(r => r.certification)?.certification;
                }
            }
            data.certification = certification;
            data.director = data.credits?.crew?.find(m => m.job === 'Director')?.name;
            data.actors = data.credits?.cast?.slice(0, 5).map(a => a.name) || [];
            data.genres = data.genres?.map(g => g.name) || [];
            data.keywords = data.keywords?.keywords?.map(k => k.name) || [];
            data.collection_id = data.belongs_to_collection?.id || null;
            data.collection_name = data.belongs_to_collection?.name || null;
            data.tagline = data.tagline || null;

            return data;
        } catch (e) {
            console.error(`Error fetching TMDB data for ID ${id}:`, e);
            return null;
        }
    }
    return null;
}

/**
 * Новая функция для обработки локальных данных карточек с кэшированием
 */
/**
 * Функция для обработки локальных данных карточек с более надёжным кэшированием
 */
async function processLocalCardData(data) {
    const CACHE_KEY = 'tmdb_data_cache';
    const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 часа в миллисекундах
    const dataHash = JSON.stringify(data).length; // Простой хеш данных для проверки изменений

    let cachedData = null;
    let cacheInfo = null;

    try {
        const stored = sessionStorage.getItem(CACHE_KEY);
        if (stored) {
            cacheInfo = JSON.parse(stored);
            if (cacheInfo.hash === dataHash && (Date.now() - cacheInfo.timestamp < CACHE_TTL)) {
                cachedData = cacheInfo.data;
                console.log("Using valid cached TMDB data from sessionStorage.");
            } else {
                console.log("Cache is outdated or data has changed. Fetching from TMDB...");
            }
        }
    } catch (e) {
        console.error("Failed to parse cached data from sessionStorage.", e);
    }

    if (!cachedData) {
        cachedData = Array(data.length).fill(null);
    }

    const fetchPromises = data.map(async (c, index) => {
        const u = { ...c };

        if (!Object.prototype.hasOwnProperty.call(u, 'isTV')) {
            u.isTV = false;
        }

        // Используем кэшированные данные, если они есть
        const cachedCard = cachedData[index];
        if (cachedCard && cachedCard.genres && cachedCard.tmdb_id === u.tmdb_id) {
            return {
                ...u,
                genres: cachedCard.genres,
                keywords: cachedCard.keywords,
                collection_id: cachedCard.collection_id,
                collection_name: cachedCard.collection_name,
                certification: cachedCard.certification,
                director: cachedCard.director,
                actors: cachedCard.actors,
                tagline: cachedCard.tagline,
                isTV: cachedCard.isTV
            };
        }

        // Если данных нет, делаем запрос
        if (u.tmdb_id) {
            const mediaType = u.isTV ? 'tv' : 'movie';
            const m = await fetchTmdbData(u.tmdb_id, mediaType);
            if (m) {
                u.genres = m.genres;
                u.keywords = m.keywords;
                u.collection_id = m.collection_id;
                u.collection_name = m.collection_name;
                u.certification = m.certification || u.certification || null;
                u.director = m.director;
                u.actors = m.actors;
                u.name = m.title || m.name || u.name;
                u.tagline = m.tagline;
                u.isTV = mediaType === 'tv';
            }
        }
        return u;
    });

    const processedCards = await Promise.all(fetchPromises);

    try {
        const newCache = {
            timestamp: Date.now(),
            hash: dataHash,
            data: processedCards
        };
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(newCache));
        console.log("Successfully updated TMDB data cache in sessionStorage.");
    } catch (e) {
        console.error("Failed to save data to sessionStorage.", e);
    }

    return processedCards;
}

/**
 * Функция для получения подробных данных только для рекомендаций (остается для совместимости)
 */
async function fetchDetailedRecommendationsData(cards) {
    // Данные уже обработаны в processLocalCardData, просто возвращаем их
    return cards;
}

function normalizeList(arr) {
    if (!arr || !arr.length) return [];
    return arr.map(x => ('' + x).toLowerCase().trim()).filter(Boolean);
}

function genreOverlapInfo(currentGenres, cardGenres) {
    if (!currentGenres || currentGenres.length === 0) return {
        count: 0,
        ratio: 0,
        list: []
    };
    const cur = new Set(currentGenres.map(g => g.toLowerCase()));
    const card = new Set(cardGenres.map(g => g.toLowerCase()));
    let common = 0;
    const commonGenresList = [];
    for (const g of cur) {
        if (card.has(g)) {
            common++;
            commonGenresList.push(g);
        }
    }
    return {
        count: common,
        ratio: common / cur.size,
        list: commonGenresList
    };
}

// Обновленная функция ageCompatible с дополнительной проверкой
function ageCompatible(currentCert, cardCert) {
    const curCertNormalized = (currentCert || '').toUpperCase().replace(/\s/g, '');
    const cardCertNormalized = (cardCert || '').toUpperCase().replace(/\s/g, '');

    const curRating = CERTIFICATION_MAP[curCertNormalized];
    const cardRating = CERTIFICATION_MAP[cardCertNormalized];

    if (curRating === undefined) {
        return true;
    }

    if (cardRating === undefined) {
        return false;
    }

    if (curRating >= 16) {
        return cardRating >= curRating;
    }

    return cardRating < 16;
}

const scoreCard = (card, currentMovieRef) => {
    if (!currentMovieRef) return {
        score: -Infinity,
        reasons: ['No reference movie'],
        commonGenres: []
    };
    if (card.tmdb_id === currentMovieRef.tmdb_id) {
        return { score: -Infinity, reasons: ['Self-reference'], commonGenres: [] };
    }
    if (!ageCompatible(currentMovieRef.certification, card.certification)) {
        return {
            score: -99999,
            reasons: ['Age incompatibility'],
            commonGenres: []
        };
    }

    const currGenres = normalizeList(currentMovieRef.genres || []);
    const cardGenres = normalizeList(card.genres || []);
    const currKeywords = normalizeList(currentMovieRef.keywords || []);
    const cardKeywords = normalizeList(card.keywords || []);
    const genreOverlap = genreOverlapInfo(currGenres, cardGenres);

    let commonKeywordsCount = 0;
    let strongKeywordMatches = 0;
    for (const k of currKeywords) {
        if (cardKeywords.includes(k)) {
            commonKeywordsCount++;
            if (STRONG_KEYWORDS.has(k)) strongKeywordMatches++;
        }
    }

    const commonActors = [...new Set((currentMovieRef.actors || []).map(a => ('' + a).toLowerCase()))].filter(a => (card.actors || []).map(x => ('' + x).toLowerCase()).includes(a)).length;
    const sameDirector = currentMovieRef.director && card.director && currentMovieRef.director === card.director;

    if (genreOverlap.count === 0 && commonKeywordsCount === 0 && commonActors === 0 && !sameDirector && !(currentMovieRef.tagline && card.tagline)) {
        return {
            score: 0,
            reasons: ['Failed primary relevance check (no genre/keyword/actor/director/tagline match)'],
            commonGenres: []
        };
    }

    let score = 0;
    const reasons = [];

    let taglineScore = 0;
    const currTagline = (currentMovieRef.tagline || '').toLowerCase();
    const cardTagline = (card.tagline || '').toLowerCase();
    if (currTagline && cardTagline) {
        const currWords = new Set(currTagline.split(/\s+/).filter(w => w.length > 2));
        const cardWords = new Set(cardTagline.split(/\s+/).filter(w => w.length > 2));
        let commonWordsCount = 0;
        for (const word of currWords) {
            if (cardWords.has(word)) {
                commonWordsCount++;
            }
        }
        if (commonWordsCount > 0) {
            taglineScore = commonWordsCount * TAGLINE_WEIGHT;
            score += taglineScore;
            reasons.push(`Tagline match (${commonWordsCount} words): +${taglineScore}`);
        }
    }

    let genreScore = 0;
    for (const g of genreOverlap.list) {
        const gl = g.toLowerCase();
        if (RARE_GENRES.has(gl)) genreScore += RARE_GENRE_WEIGHT;
        else if (GENERIC_GENRES.has(gl)) genreScore += COMMON_GENRE_WEIGHT;
        else genreScore += OTHER_GENRE_WEIGHT;
    }
    score += genreScore;
    if (genreScore > 0) reasons.push(`Genres match (${genreOverlap.list.join(', ')}): +${genreScore}`);

    const kwScore = commonKeywordsCount * KEYWORD_WEIGHT + strongKeywordMatches * (STRONG_KEYWORD_WEIGHT - KEYWORD_WEIGHT);
    score += kwScore;
    if (kwScore > 0) reasons.push(`Keywords match: +${kwScore}`);

    if (sameDirector) {
        score += DIRECTOR_WEIGHT;
        reasons.push(`Same director (${currentMovieRef.director}): +${DIRECTOR_WEIGHT}`);
    }
    if (commonActors > 0) {
        score += commonActors * ACTOR_WEIGHT;
        reasons.push(`Common actors (${commonActors}): +${commonActors * ACTOR_WEIGHT}`);
    }

    const rCur = parseFloat(currentMovieRef.rating) || 0;
    const rCard = parseFloat(card.rating) || 0;
    const rDiff = Math.abs(rCur - rCard);
    let ratingBonus = 0;
    if (rDiff <= 0.3) ratingBonus = RATING_CLOSE_BONUS;
    else if (rDiff <= 0.7) ratingBonus = Math.round(RATING_CLOSE_BONUS * 0.7);
    else if (rDiff <= 1.2) ratingBonus = Math.round(RATING_CLOSE_BONUS * 0.4);
    score += ratingBonus;
    if (ratingBonus > 0) reasons.push(`Similar rating: +${ratingBonus}`);

    if (currentMovieRef.year && card.year) {
        const yd = Math.abs((parseInt(card.year) || 0) - (parseInt(currentMovieRef.year) || 0));
        let yearBonus = 0;
        if (yd <= 2) yearBonus = YEAR_CLOSE_BONUS;
        else if (yd <= 5) yearBonus = Math.round(YEAR_CLOSE_BONUS * 0.7);
        else if (yd <= 10) yearBonus = Math.round(YEAR_CLOSE_BONUS * 0.4);
        else score -= Math.min(yd * 2, 150);
        score += yearBonus;
        if (yearBonus > 0) reasons.push(`Similar year (${yd} years difference): +${yearBonus}`);
    }

    score += Math.random() * 20;

    return {
        score,
        reasons,
        commonGenres: genreOverlap.list,
        commonKeywords: commonKeywordsCount
    };
};

function getPageTmdbId() {
    const urlMatch = window.location.pathname.match(/-(\d+)$/);
    return urlMatch ? parseInt(urlMatch[1], 10) : null;
}

function getFranchiseKey(card) {
    if (card.collection_id) {
        return `collection_${card.collection_id}`;
    }
    const baseTitle = getBaseTitle(card.name);
    return `baseTitle_${baseTitle}`;
}

// movies.js

async function generateCards(localCardData) {
    const cardContainer = document.querySelector('#card-container');
    if (!cardContainer) return;

    let currentMovie = null;
    let tmdbIdFromPage = null;

    // 1. Попытка получить данные о фильме из apple.js
    if (window.appData && window.appData.dataLoadedPromise) {
        try {
            const movieFromApple = await window.appData.dataLoadedPromise;
            console.log("Данные, полученные от apple.js:", movieFromApple);
            if (movieFromApple && movieFromApple.id) {
                console.log("Используем TMDB ID, полученный от apple.js:", movieFromApple.id);
                tmdbIdFromPage = movieFromApple.id;
            } else {
                console.warn("Данные от apple.js не содержат ID. Переход к альтернативному поиску.");
            }
        } catch (e) {
            console.error("Произошла ошибка при ожидании данных от apple.js", e);
        }
    }

    // Обрабатываем все локальные данные с кэшированием
    const processedCards = await processLocalCardData(localCardData);

    // 2. Если TMDB ID не получен от apple.js, ищем его из других источников
    if (!tmdbIdFromPage) {
        tmdbIdFromPage = getPageTmdbId();
        if (tmdbIdFromPage) {
            console.log(`TMDB ID найден в URL: ${tmdbIdFromPage}`);
        }
    }

    // 3. Находим полный объект фильма в processedCards по TMDB ID
    if (tmdbIdFromPage) {
        currentMovie = processedCards.find(c => c.tmdb_id === tmdbIdFromPage);
        if (currentMovie) {
            console.log(`Фильм успешно найден в локальных данных по TMDB ID: ${currentMovie.name}`);
        }
    }

    // 4. Если фильм не найден по ID, ищем по названию и году
    if (!currentMovie) {
        console.warn("Фильм не найден по ID. Ищем по названию и году.");
        const yearElement = document.getElementById('movie-year');
        const movieYear = yearElement ? yearElement.innerText.trim() : null;
        const pageTitleElement = document.querySelector('title');
        const fullPageTitle = pageTitleElement ? getExactTitle(pageTitleElement.innerText) : '';

        if (fullPageTitle && movieYear) {
            currentMovie = processedCards.find(card => getExactTitle(card.name) === fullPageTitle && card.year === movieYear);
            if (currentMovie) {
                console.log(`Фильм успешно найден по полному названию и году: ${currentMovie.name} (${currentMovie.year})`);
            }
        }
    }

    if (!currentMovie) {
        console.error("Не удалось найти фильм для рекомендаций. Будут показаны случайные высокорейтинговые фильмы.");
        displayFallbackCards(processedCards, cardContainer);
        return;
    }

    console.groupCollapsed(`### Рекомендации для фильма: ${currentMovie.name} (${currentMovie.year})`);
    console.log('Current movie data:', {
        'Название': currentMovie.name,
        'TMDB ID': currentMovie.tmdb_id,
        'Collection ID': currentMovie.collection_id,
        'Collection Name': currentMovie.collection_name,
        'Franchise Key': getFranchiseKey(currentMovie)
    });

    const MAX_CARDS = 12;
    const recommendations = [];
    const addedTmdb = new Set();
    const addedFranchiseKeys = new Set();
    const RECENT_KEY = 'recent_recs_tmdb';
    const LAST_UPDATE_KEY = 'last_update_ts';
    const ONE_DAY_MS = 24 * 60 * 60 * 1000;

    let recentShown = [];
    try {
        const lastUpdate = parseInt(localStorage.getItem(LAST_UPDATE_KEY) || '0', 10);
        if (Date.now() - lastUpdate > ONE_DAY_MS) {
            sessionStorage.removeItem(RECENT_KEY);
            localStorage.setItem(LAST_UPDATE_KEY, Date.now().toString());
            console.log("Кэш рекомендаций очищен, так как прошло более 24 часов.");
        } else {
            recentShown = JSON.parse(sessionStorage.getItem(RECENT_KEY) || '[]');
        }
    } catch (e) {
        recentShown = [];
        console.error("Failed to manage cache expiration.", e);
    }

    addedTmdb.add(currentMovie.tmdb_id);

    const currentFranchiseKey = getFranchiseKey(currentMovie);

    // 1. Добавляем весь контент из основной франшизы в первую очередь
    const mainFranchiseCandidates = processedCards.filter(c =>
        c.tmdb_id !== currentMovie.tmdb_id && getFranchiseKey(c) === currentFranchiseKey
    );

    console.log(`Main franchise candidates (${currentFranchiseKey}):`, mainFranchiseCandidates.map(c => ({
        name: c.name,
        tmdb_id: c.tmdb_id,
        collection_id: c.collection_id,
        franchise_key: getFranchiseKey(c)
    })));

    mainFranchiseCandidates.sort((a, b) => (parseInt(b.year) || 0) - (parseInt(a.year) || 0));
    for (const card of mainFranchiseCandidates) {
        if (recommendations.length >= MAX_CARDS) break;
        if (!addedTmdb.has(card.tmdb_id)) {
            recommendations.push({ ...card, reason: 'Из основной франшизы' });
            addedTmdb.add(card.tmdb_id);
            addedFranchiseKeys.add(getFranchiseKey(card));
        }
    }

    // 2. Группируем весь остальной контент по франшизам
    const otherCandidatesByGroup = new Map();
    processedCards
        .filter(c => !addedTmdb.has(c.tmdb_id) && !recentShown.includes(c.tmdb_id))
        .forEach(card => {
            const key = getFranchiseKey(card);
            if (addedFranchiseKeys.has(key)) return;

            if (!otherCandidatesByGroup.has(key)) {
                otherCandidatesByGroup.set(key, []);
            }
            otherCandidatesByGroup.get(key).push({
                ...card,
                ...scoreCard(card, currentMovie)
            });
        });

    // 3. Выбираем единственный лучший фильм из каждой другой франшизы
    const bestCandidates = [];
    for (const [key, candidates] of otherCandidatesByGroup.entries()) {
        const best = candidates.sort((a, b) => b.score - a.score)[0];
        if (best.score >= MODERATE_RELEVANCE_THRESHOLD) {
            bestCandidates.push(best);
        }
    }

    // 4. Сортируем этих лучших кандидатов по релевантности и добавляем в рекомендации
    const sortedBestCandidates = bestCandidates.sort((a, b) => b.score - a.score);

    for (const card of sortedBestCandidates) {
        if (recommendations.length >= MAX_CARDS) break;
        if (!addedTmdb.has(card.tmdb_id)) {
            recommendations.push({ ...card, reason: `Релевантность (Score: ${card.score.toFixed(0)})` });
            addedTmdb.add(card.tmdb_id);
            addedFranchiseKeys.add(getFranchiseKey(card));
        }
    }

    // 5. Заполняем высокорейтинговыми фильмами при необходимости
    if (recommendations.length < MAX_CARDS) {
        const highRatedFillers = processedCards
            .filter(c => !addedTmdb.has(c.tmdb_id) && !recentShown.includes(c.tmdb_id) && !addedFranchiseKeys.has(getFranchiseKey(c)) && getRating(c) >= HIGH_RATING_THRESHOLD)
            .sort((a, b) => getRating(b) - getRating(a));

        for (const card of highRatedFillers) {
            if (recommendations.length >= MAX_CARDS) break;
            recommendations.push({ ...card, reason: 'Высокий рейтинг' });
            addedTmdb.add(card.tmdb_id);
            addedFranchiseKeys.add(getFranchiseKey(card));
        }
    }
    
    // 6. Финальная заполнение оставшимися фильмами
    if (recommendations.length < MAX_CARDS) {
      console.warn("Недостаточно рекомендаций. Добавляем фильмы, игнорируя кэш 'недавно показанных'.");
      const remainingFillers = shuffleArray(processedCards.filter(c => !addedTmdb.has(c.tmdb_id) && !addedFranchiseKeys.has(getFranchiseKey(c))));
      for (const card of remainingFillers) {
        if (recommendations.length >= MAX_CARDS) break;
        recommendations.push({ ...card, reason: 'Запасной вариант (не хватает новых)' });
        addedTmdb.add(card.tmdb_id);
        addedFranchiseKeys.add(getFranchiseKey(card));
      }
    }
    
    const finalRecommendations = await fetchDetailedRecommendationsData(recommendations);

    finalRecommendations.forEach((rec, index) => {
        const debugInfo = {
            'Место в списке': index + 1,
            'Название': rec.name,
            'ID TMDB': rec.tmdb_id,
            'Рейтинг': rec.rating,
            'Причина рекомендации': rec.reason,
            'isTV': rec.isTV,
            'Collection ID': rec.collection_id,
        };
        if (rec.score && rec.score !== Infinity) {
            debugInfo['Релевантность (Score)'] = rec.score.toFixed(0);
            if (rec.reasons) debugInfo['Подробности Score'] = rec.reasons;
        }
        console.log(`%cРекомендация #${index + 1}: ${rec.name}`, 'font-weight: bold; color: #4CAF50;');
        console.log(debugInfo);
    });

    console.groupEnd();

    try {
        const toStore = [...new Set([...(recentShown || []), ...Array.from(addedTmdb)])].slice(-120);
        sessionStorage.setItem(RECENT_KEY, JSON.stringify(toStore));
    } catch (e) {}

    displayCards(finalRecommendations.slice(0, MAX_CARDS), cardContainer);
}

function displayFallbackCards(cards, container) {
    const recommendations = [];
    const addedTitles = new Set();
    const addedGenres = new Set();
    const MAX_CARDS = 12;
    const allGenres = [...new Set(cards.flatMap(c => c.genres || []))];

    const shuffledCards = shuffleArray(cards);

    for (const genre of allGenres) {
        if (recommendations.length >= MAX_CARDS) break;
        const movieForGenre = shuffledCards.find(card =>
            card.genres?.includes(genre) &&
            !addedTitles.has(getBaseTitle(card.name))
        );

        if (movieForGenre) {
            recommendations.push(movieForGenre);
            addedTitles.add(getBaseTitle(movieForGenre.name));
            addedGenres.add(genre);
        }
    }

    const remainingCards = shuffledCards.filter(card => !addedTitles.has(getBaseTitle(card.name)));
    for (const card of remainingCards) {
        if (recommendations.length >= MAX_CARDS) break;
        recommendations.push(card);
        addedTitles.add(getBaseTitle(card.name));
    }

    displayCards(recommendations, container);
}

function displayCards(cards, container) {
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();

    cards.forEach((card) => {
        const li = document.createElement('li');
        li.className = 'splide__slide';
        li.innerHTML = `
            <div class="card card-media" style="width: 12rem" data-rating="${card.rating}">
                <a href="${card.link}">
                    <img src="${card.image}" class="card-img-top img-9x16 mt-2" alt="${card.name}" loading="lazy" onerror="this.onerror=null;this.src='/path/to/default-image.jpg';">
                    <div class="card-rating-trand"><span class="span-rating">${card.rating}</span></div>
                    ${card.isTV ? '<div class="card-TV card-TV-trends">TV</div>' : ''}
                    <div class="card-body"><span class="card-tex">${card.name}<br><span class="year">${card.year}</span></span></div>
                </a>
            </div>
        `;
        fragment.appendChild(li);
    });

    if (cards.length > 0) {
        container.appendChild(fragment);
        initSplide();
    } else {
        const titleElement = document.createElement('h2');
        titleElement.textContent = 'Рекомендаций пока нет.';
        container.appendChild(titleElement);
    }
}

function initSplide() {
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
            5000: {
                gap: '23px',
                perPage: 3
            },
            2299.5: {
                gap: '20px',
                perPage: 3
            },
            2018.5: {
                gap: '18px',
                perPage: 3
            },
            1899.5: {
                gap: '18px',
                perPage: 3
            },
            1704.5: {
                gap: '12px',
                perPage: 3
            },
            1520.5: {
                gap: '12px',
                perPage: 3
            },
            1320.5: {
                gap: '28px',
                perPage: 3
            },
            1050: {
                gap: '12px',
                perPage: 3
            },
            480: {
                gap: '12px',
                perPage: 3
            }
        }
    });
    splide.mount();

    const images = document.querySelectorAll('#Collections .card-img-top');
    let loadedImages = 0;
    const positionRating = () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const image = card.querySelector('.card-img-top');
            const rating = card.querySelector('.card-rating-trand');
            if (image && rating && image.complete) {
                const imageRect = image.getBoundingClientRect();
                const cardRect = card.getBoundingClientRect();
                const bottom = cardRect.bottom - imageRect.bottom + 8;
                const right = cardRect.right - imageRect.right + 8;
                rating.style.position = 'absolute';
                rating.style.bottom = `${bottom}px`;
                rating.style.right = `${right}px`;
            }
        });
    };
    if (images.length === 0) positionRating();
    images.forEach(img => {
        if (img.complete) {
            loadedImages++;
        } else {
            img.addEventListener('load', () => {
                loadedImages++;
                if (loadedImages === images.length) positionRating();
            });
            img.addEventListener('error', () => {
                loadedImages++;
                if (loadedImages === images.length) positionRating();
            });
        }
    });
    if (loadedImages === images.length) positionRating();
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