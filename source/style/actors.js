const API_KEY = '3da216c9cc3fe78b5488855d25d26e13'; // Ваш API ключ
const DEFAULT_IMG = '../../../source/images/logo/actor.svg'; // Место для изображения, если его нет

// Получаем ID фильма или сериала по названию и году
async function getMovieId(movieTitle, movieYear) {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(movieTitle)}&language=ru-RU`;
    const response = await fetch(url);
    const data = await response.json();

    // Фильтруем результаты, чтобы найти точное совпадение по году
    const matchedMovie = data.results.find(item => {
        const releaseDate = item.release_date || item.first_air_date; // У сериалов другое поле даты
        return releaseDate && new Date(releaseDate).getFullYear().toString() === movieYear;
    });

    if (!matchedMovie) return null;

    return {
        id: matchedMovie.id,
        type: matchedMovie.media_type // Определяем, это фильм или сериал
    };
}

// Получаем кредиты фильма (актеров)
async function getCredits(movieId, type) {
    const url = `https://api.themoviedb.org/3/${type}/${movieId}/credits?api_key=${API_KEY}&language=ru-RU`;
    const response = await fetch(url);
    return response.json();
}

// Показать детали фильма (актеров)
async function showMovieDetails() {
    const movieTitle = document.getElementById('movie-title').innerText;  // Получаем название фильма
    const movieYear = document.getElementById('movie-year').innerText;  // Получаем год фильма
    const movieData = await getMovieId(movieTitle, movieYear);

    if (!movieData) {
        console.error('Фильм/сериал не найден');
        return;
    }

    const { id: movieId, type } = movieData;
    const credits = await getCredits(movieId, type);

    // Актеры (первые 12)
    const actorsContainer = document.getElementById('actors-container');
    actorsContainer.innerHTML = '';

    // Если актеров нет или их меньше 12, выводим как есть
    const actors = credits.cast.slice(0, 12);
    if (actors.length === 0) {
        actorsContainer.innerHTML = '<p>Актеры не найдены</p>';
    } else {
        actors.forEach(actor => {
            actorsContainer.innerHTML += `
<div class="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 ">
            
            <div class="actor-cards-container">
              <div class="actor-card-wrapper">
                 <div class="actor-card">
                    <img src="${actor.profile_path ? 'https://image.tmdb.org/t/p/w500' + actor.profile_path : DEFAULT_IMG}" class="actor-photo" alt="${actor.name}">
                <div class="actor-name-overlay">
                <h5 class="actor-name">${actor.name}</h5>
            </div>
        </div>
    </div>
    <!-- Повторите блок .actor-card-wrapper для остальных карточек -->
   </div>

    

</div>
            `;
        });
    }
}

// Загружаем данные фильма при загрузке страницы
document.addEventListener("DOMContentLoaded", showMovieDetails);
