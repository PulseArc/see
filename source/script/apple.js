// apple.js

import { showMovieDescription } from './description.js';
import { showActors } from './actors.js';
import { showImages } from './imageLoader.js';

const API_KEY = '3da216c9cc3fe78b5488855d25d26e13';

// Создаем глобальный объект и Promise СРАЗУ, как только скрипт загружен.
window.appData = {
    movieData: null,
    dataLoadedPromise: new Promise(resolve => {
        document.addEventListener("DOMContentLoaded", async () => {
            const data = await initMoviePage();
            window.appData.movieData = data;
            // Разрешаем Promise, когда данные будут готовы
            resolve(data);
            setupMoviePage(data);
        });
    })
};

/**
 * Получает ID фильма или сериала по названию и году.
 */
export async function getMovieId(movieTitle, movieYear) {
    console.log('API: Ищем ID фильма по названию и году:', movieTitle, movieYear);
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(movieTitle)}&language=ru-RU`;
    const response = await fetch(url);
    const data = await response.json();
    console.log('API: Результат поиска ID:', data);

    const matchedMovie = data.results.find(item => {
        const releaseDate = item.release_date || item.first_air_date;
        return releaseDate && new Date(releaseDate).getFullYear().toString() === movieYear;
    });

    if (matchedMovie) {
        console.log('API: Найден фильм/сериал с ID:', matchedMovie.id, 'и типом:', matchedMovie.media_type);
        return { id: matchedMovie.id, type: matchedMovie.media_type };
    } else {
        console.log('API: Фильм/сериал не найден.');
        return null;
    }
}

/**
 * Получает все необходимые данные о фильме/сериале за один запрос.
 */
export async function getComprehensiveData(movieId, type) {
    console.log('API: Делаем комплексный запрос к API для ID:', movieId, 'и типа:', type);
    try {
        const url = `https://api.themoviedb.org/3/${type}/${movieId}?api_key=${API_KEY}&language=ru-RU&append_to_response=credits,keywords,images,release_dates,production_companies,videos,reviews`;
        const response = await fetch(url);
        const data = await response.json();
        console.log('API: Комплексные данные успешно получены:', data);
        return data;
    } catch (error) {
        console.error('API: Ошибка при получении комплексных данных:', error);
        return null;
    }
}

/**
 * Главная функция, которая инициализирует страницу фильма.
 */
async function initMoviePage() {
    console.log('Инициализация страницы фильма...');
    let movieId;
    let movieType;

    const elementId = document.getElementById('movie-id')?.innerText;
    const elementType = document.getElementById('movie-type')?.innerText;

    if (elementId && elementType) {
        movieId = elementId;
        movieType = elementType;
        console.log('HTML: Нашли ID и тип в HTML:', movieId, movieType);
    } else {
        const movieTitleElement = document.getElementById('movie-title');
        const movieYearElement = document.getElementById('movie-year');
        const movieTitle = movieTitleElement ? movieTitleElement.innerText : null;
        const movieYear = movieYearElement ? movieYearElement.innerText : null;
        
        console.log('HTML: ID и тип не найдены. Ищем по названию и году:', movieTitle, movieYear);
        if (!movieTitle || !movieYear) {
            console.error('Ошибка: Не удалось найти данные для поиска фильма в HTML.');
            return null;
        }
        try {
            const movieData = await getMovieId(movieTitle, movieYear);
            if (!movieData) {
                console.error('Ошибка: Фильм/сериал не найден.');
                return null;
            }
            movieId = movieData.id;
            movieType = movieData.type;
        } catch (error) {
            console.error('Ошибка при поиске фильма по названию:', error);
            return null;
        }
    }

    const data = await getComprehensiveData(movieId, movieType);
    if (!data) {
        console.error('Ошибка: Не удалось загрузить полные данные о фильме.');
        return null;
    }
    
    return data;
}

/**
 * Функция, которая запускается после получения данных
 */
async function setupMoviePage(data) {
    if (!data) return;
    
    console.log('Успех: Данные получены. Вызываем функции для обновления DOM.');
    showMovieDescription(data);
    showActors(data);
    showImages(data);
}