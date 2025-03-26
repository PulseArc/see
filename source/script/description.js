console.log(window.location.pathname); //Если работаете в браузере.
import { getMovieId, getMovieDetails, getMovieDetailsRu, getProductionCompanies, getKeywords } from '../../../source/script/apple.js';

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
    const movieTitle = document.getElementById('movie-title')?.innerText;
    const movieYear = document.getElementById('movie-year')?.innerText;

    if (!movieTitle || !movieYear) {
        console.error('Не удалось получить данные о названии или году фильма');
        return;
    }

    // Логируем данные для отладки
    console.log('Заголовок фильма:', movieTitle);
    console.log('Год фильма:', movieYear);

    try {
        // Получаем ID фильма или сериала по названию и году
        const movieData = await getMovieId(movieTitle, movieYear);
        console.log('Данные о фильме:', movieData);

        if (!movieData) {
            console.error('Фильм/сериал не найден');
            return;
        }

        const { id: movieId, type } = movieData;

        // Получаем подробности о фильме или сериале
        const movieDetails = await getMovieDetails(movieId, type);

        // Отображаем описание фильма
        const descriptionContainer = document.getElementById('description-container');
        descriptionContainer.innerHTML = movieDetails.overview ? `<p>${movieDetails.overview}</p>` : '<p>Описание не найдено</p>';

        // Получаем и отображаем информацию о производственных компаниях
        const productionCompanies = await getProductionCompanies(movieId, type);
        const productionContainer = document.getElementById('production-container');
        if (productionCompanies.length === 0) {
            productionContainer.innerHTML = '<p>Производство не указано</p>';
        } else {
            productionContainer.innerHTML = productionCompanies.map(company => `<span>${company.name}</span>`).join('');
        }

        // Получаем и отображаем ключевые слова
        const keywords = await getKeywords(movieId, type);
        console.log('Полученные ключевые слова:', keywords);
        const keywordsContainer = document.getElementById('keywords-container');

        if (keywords.length === 0) {
            keywordsContainer.innerHTML = '<p>Ключевые слова не доступны для этого фильма</p>';
        } else {
            keywordsContainer.innerHTML = createKeywordSpans(keywords);
        }

        // Получаем подробную информацию о фильме или сериале на русском языке
        const movieDetailsRu = await getMovieDetailsRu(movieId, type);

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