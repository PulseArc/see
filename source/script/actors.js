// actors.js
import { getMovieId, getCredits } from './apple.js';

const DEFAULT_IMG = '../../../source/images/logo/actor.jpg';

async function showActors() {
    let movieId;
    let movieType;

    // 1. Пытаемся получить ID и тип из HTML-элементов.
    // Предполагаем, что они находятся в элементах с id="movie-id" и id="movie-type"
    const elementId = document.getElementById('movie-id')?.innerText;
    const elementType = document.getElementById('movie-type')?.innerText;

    if (elementId && elementType) {
        movieId = elementId;
        movieType = elementType;
        console.log(`Получаем актеров по ID: ${movieId} и типу: ${movieType}`);
    } else {
        // 2. Если ID не найден, ищем по названию и году.
        const movieTitle = document.getElementById('movie-title')?.innerText;
        const movieYear = document.getElementById('movie-year')?.innerText;

        if (!movieTitle || !movieYear) {
            console.error('Не удалось получить данные о названии, годе или ID фильма/сериала.');
            return;
        }

        console.log(`Получаем актеров по названию: ${movieTitle} (${movieYear})`);

        try {
            const movieData = await getMovieId(movieTitle, movieYear);
            if (!movieData) {
                console.error('Фильм/сериал не найден');
                return;
            }
            movieId = movieData.id;
            movieType = movieData.type;
        } catch (error) {
            console.error('Ошибка при поиске фильма по названию:', error);
            return;
        }
    }

    // --- Логика получения и отображения актеров, которая остается прежней ---
    const credits = await getCredits(movieId, movieType);

    const actorsContainer = document.getElementById('actors-container');
    actorsContainer.innerHTML = '';

    let actors = credits.cast;

    if (actors.length === 0) {
        actorsContainer.innerHTML = '<p style="font-family: sans-serif;">Актеры не найдены</p>';
    } else {
        // Логика отображения актеров, в зависимости от их количества
        const actorsToShow = actors.length > 12 ? actors.slice(0, 12) :
                             actors.length < 6 ? actors :
                             actors.slice(0, 6);

        actorsToShow.forEach(actor => {
            actorsContainer.innerHTML += `
                <div class="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <div class="actor-cards-container">
                        <div class="actor-card-wrapper">
                            <div class="actor-card">
                                <img src="${actor.profile_path ? 'https://image.tmdb.org/t/p/w500' + actor.profile_path : DEFAULT_IMG}" class="actor-photo" alt="${actor.name}">
                                <div class="actor-name-overlay">
                                    <h5 class="actor-name">${actor.name}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }
}

// Загружаем данные при загрузке страницы
document.addEventListener("DOMContentLoaded", showActors);