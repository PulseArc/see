
const API_KEY = '3da216c9cc3fe78b5488855d25d26e13';

// Получаем ID фильма или сериала по названию и году
export async function getMovieId(movieTitle, movieYear) {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(movieTitle)}&language=ru-RU`;
    const response = await fetch(url);
    const data = await response.json();

    const matchedMovie = data.results.find(item => {
        const releaseDate = item.release_date || item.first_air_date;
        return releaseDate && new Date(releaseDate).getFullYear().toString() === movieYear;
    });

    return matchedMovie ? { id: matchedMovie.id, type: matchedMovie.media_type } : null;
}

// Получаем описание фильма
export async function getMovieDetails(movieId, type) {
    const url = `https://api.themoviedb.org/3/${type}/${movieId}?api_key=${API_KEY}&language=ru-RU`;
    const response = await fetch(url);
    return response.json();
}

// Получаем список актеров
export async function getCredits(movieId, type) {
    const url = `https://api.themoviedb.org/3/${type}/${movieId}/credits?api_key=${API_KEY}&language=ru-RU`;
    const response = await fetch(url);
    return response.json();
}

// Получаем список производственных компаний
export async function getProductionCompanies(movieId, type) {
    const url = `https://api.themoviedb.org/3/${type}/${movieId}?api_key=${API_KEY}&language=ru-RU`;
    const response = await fetch(url);
    const data = await response.json();
    return data.production_companies || [];
}

// Получаем ключевые слова фильма или сериала
export async function getKeywords(movieId, type) {
    try {
        const url = `https://api.themoviedb.org/3/${type}/${movieId}/keywords?api_key=${API_KEY}&language=en-US`;
        const response = await fetch(url);
        const data = await response.json();

        if (type === 'movie') {
            return data.keywords || [];
        } else if (type === 'tv') {
            return data.results || [];
        } else {
            return []; // Возвращаем пустой массив, если тип не распознан
        }
    } catch (error) {
        console.error('Ошибка при получении ключевых слов:', error);
        return [];
    }
}

// Получаем подробную информацию о фильме или сериале на русском языке
export async function getMovieDetailsRu(movieId, type) {
    const url = `https://api.themoviedb.org/3/${type}/${movieId}?api_key=${API_KEY}&language=ru-RU`;
    const response = await fetch(url);
    return response.json();
}
