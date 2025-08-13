import { getMovieId, getMovieDetails, getMovieDetailsRu, getProductionCompanies, getKeywords } from './apple.js';

function createKeywordSpans(keywords) {
    console.log('Ключевые слова для отображения:', keywords);
    return keywords.map(keyword => {
        return `<span>${keyword.name}</span>`;
    }).join('');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = date.toLocaleDateString('ru-RU', options);
    // Удаляем " г." из конца строки
    if (formattedDate.endsWith(' г.')) {
        formattedDate = formattedDate.slice(0, -3);
    }
    return formattedDate;
}

async function showMovieDescription() {
    let movieId;
    let movieType;

    // 1. Пытаемся получить ID и тип из HTML-элементов.
    // Например, <span id="movie-id">12345</span> и <span id="movie-type">movie</span>
    const elementId = document.getElementById('movie-id')?.innerText;
    const elementType = document.getElementById('movie-type')?.innerText;

    if (elementId && elementType) {
        movieId = elementId;
        movieType = elementType;
        console.log(`Ищем по ID: ${movieId} и типу: ${movieType}`);
    } else {
        // 2. Если ID не найден, ищем по названию и году.
        const movieTitle = document.getElementById('movie-title')?.innerText;
        const movieYear = document.getElementById('movie-year')?.innerText;

        if (!movieTitle || !movieYear) {
            console.error('Не удалось получить данные о названии, годе или ID фильма');
            return;
        }

        console.log(`Ищем по названию: ${movieTitle} (${movieYear})`);

        try {
            const movieData = await getMovieId(movieTitle, movieYear);
            console.log('Данные о фильме (поиск по названию):', movieData);

            if (!movieData) {
                console.error('Фильм/сериал не найден');
                return;
            }

            movieId = movieData.id;
            movieType = movieData.type;
        } catch (error) {
            console.error('Произошла ошибка при поиске фильма по названию:', error);
            return;
        }
    }

    try {
        // Получаем подробности о фильме или сериале, используя найденный ID и тип
        const movieDetails = await getMovieDetails(movieId, movieType);

        // --- Здесь начинается логика обновления DOM, она остается прежней, но использует новые movieId и movieType ---

        // Отображаем описание фильма
        const descriptionContainer = document.getElementById('description-container');
        descriptionContainer.innerHTML = movieDetails.overview ? `<p>${movieDetails.overview}</p>` : '<p style="font-family: sans-serif;color: rgb(218, 215, 215);">Без Описания</p>';

        // Получаем и отображаем информацию о производственных компаниях
        const productionCompanies = await getProductionCompanies(movieId, movieType);
        const productionContainer = document.getElementById('production-container');
        if (productionCompanies.length === 0) {
            productionContainer.innerHTML = '<p style="font-family: sans-serif;color: rgb(218, 215, 215);">Производство не указано</p>';
        } else {
            productionContainer.innerHTML = productionCompanies.map(company => `<span>${company.name}</span>`).join('');
        }

        // Получаем и отображаем ключевые слова
        const keywords = await getKeywords(movieId, movieType);
        console.log('Полученные ключевые слова:', keywords);
        const keywordsContainer = document.getElementById('keywords-container');

        if (keywords.length === 0) {
            keywordsContainer.innerHTML = '<p style="font-family: sans-serif;color: rgb(218, 215, 215);">Ключевые слова не доступны для этого фильма</p>';
        } else {
            keywordsContainer.innerHTML = createKeywordSpans(keywords);
        }

        // Получаем подробную информацию о фильме или сериале на русском языке
        const movieDetailsRu = await getMovieDetailsRu(movieId, movieType);

        // Отображаем дату релиза
        const releaseDateContainer = document.querySelector('#column div:nth-child(1) p:nth-child(2)');
        releaseDateContainer.textContent = movieDetailsRu.release_date ? formatDate(movieDetailsRu.release_date) : movieDetailsRu.first_air_date ? formatDate(movieDetailsRu.first_air_date) : 'Не указано';

        // Отображаем бюджет
        const budgetContainer = document.querySelector('#column div:nth-child(2) p:nth-child(2)');
        budgetContainer.textContent = movieDetailsRu.budget ? `$ ${movieDetailsRu.budget.toLocaleString()}` : '$ 0';

        // Отображаем страны
        const countriesContainer = document.querySelector('#column div:nth-child(3) p:nth-child(2)');
        countriesContainer.textContent = movieDetailsRu.production_countries && movieDetailsRu.production_countries.length > 0 ? movieDetailsRu.production_countries.map(country => country.name).join(', ') : 'Не указано';

    } catch (error) {
        console.error('Произошла ошибка при загрузке данных:', error);
    }
}

// Загружаем данные при загрузке страницы
document.addEventListener("DOMContentLoaded", showMovieDescription);