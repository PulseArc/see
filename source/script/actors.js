// actors.js
import { getMovieId, getCredits } from '../../../source/script/apple.js';

const DEFAULT_IMG = '../../../source/images/logo/actor.svg';

async function showActors() {
    const movieTitle = document.getElementById('movie-title').innerText;
    const movieYear = document.getElementById('movie-year').innerText;
    
    const movieData = await getMovieId(movieTitle, movieYear);
    if (!movieData) {
        console.error('Фильм/сериал не найден');
        return;
    }

    const { id: movieId, type } = movieData;
    const credits = await getCredits(movieId, type);

    const actorsContainer = document.getElementById('actors-container');
    actorsContainer.innerHTML = '';

    let actors = credits.cast;

    // Если актёров больше 12, показываем только 12
    if (actors.length > 12) {
        actors = actors.slice(0, 12); // Показываем только первые 12 актёров
    } else if (actors.length < 6) {
        // Если актёров меньше 6, показываем только их
        actors = actors.slice(0, actors.length); // Показываем всех актёров, если их меньше 6
    } else {
        // Если актёров от 6 до 12, показываем 6
        actors = actors.slice(0, 6); // Показываем только первые 6 актёров
    }

    if (actors.length === 0) {
        actorsContainer.innerHTML = '<p>Актеры не найдены</p>';
    } else {
        actors.forEach(actor => {
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
