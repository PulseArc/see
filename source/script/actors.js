const API_KEY = '3da216c9cc3fe78b5488855d25d26e13'; // Вставьте ваш API ключ
const DEFAULT_IMG = '../../../source/images/logo/actor.svg'; // Место для изображения, если его нет

// Получаем ID фильма по названию и году
async function getMovieId(movieTitle, movieYear) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieTitle)}&language=ru-RU`;
    const response = await fetch(url);
    const data = await response.json();

    // Фильтруем результаты, чтобы найти фильм с нужным годом
    const matchedMovie = data.results.find(movie => movie.release_date && movie.release_date.includes(movieYear));

    return matchedMovie ? matchedMovie.id : null;
}

// Получаем кредиты фильма (актеров и режиссера)
async function getCredits(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=ru-RU`;
    const response = await fetch(url);
    return response.json();
}

// Показать детали фильма (актеров и режиссера)
async function showMovieDetails() {
    const movieTitle = document.getElementById('movie-title').innerText;  // Получаем название фильма
    const movieYear = document.getElementById('movie-year').innerText;  // Получаем год фильма
    const movieId = await getMovieId(movieTitle, movieYear);

    if (!movieId) {
        console.error('Фильм не найден');
        return;
    }

    const credits = await getCredits(movieId);

    // Режиссер
    const director = credits.crew.find(person => person.job === "Director");
    const directorContainer = document.getElementById('director-container');
    directorContainer.innerHTML = director ? `
        <div class="col-md-4">
            <div class="card text-center">
                <img src="${director.profile_path ? 'https://image.tmdb.org/t/p/w500' + director.profile_path : DEFAULT_IMG}" class="card-img-top" alt="${director.name}">
                <div class="card-body">
                    <h5 class="card-title">${director.name}</h5>
                </div>
            </div>
        </div>
    ` : '<p>Режиссер не найден</p>';

    // Актеры (первые 12 актеров)
    const actors = credits.cast.slice(0, 12);
    const actorsContainer = document.getElementById('actors-container');
    actorsContainer.innerHTML = '';

    if (actors.length === 0) {
        actorsContainer.innerHTML = '<p>Актеры не найдены</p>';
    } else {
        actors.forEach(actor => {
            const actorCard = `
                <div class="col-md-3">
                    <div class="card text-center">
                        <img src="${actor.profile_path ? 'https://image.tmdb.org/t/p/w500' + actor.profile_path : DEFAULT_IMG}" class="card-img-top" alt="${actor.name}">
                        <div class="card-body">
                            <h5 class="card-title">${actor.name}</h5>
                        </div>
                    </div>
                </div>
            `;
            actorsContainer.innerHTML += actorCard;
        });
    }
}

// Загрузка данных фильма при загрузке страницы
document.addEventListener("DOMContentLoaded", showMovieDetails);