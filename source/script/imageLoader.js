// imageLoader.js
import { getMovieId } from './apple.js';

// Изменения: Функция теперь принимает `movieId` и `movieType` как необязательные параметры.
async function loadImageUrls(movieTitle, movieYear, movieId = null, movieType = null) {
    try {
        let finalMovieId;
        let finalMovieType;

        // Если передан ID и тип, используем их напрямую.
        if (movieId && movieType) {
            finalMovieId = movieId;
            finalMovieType = movieType;
        } else {
            // Если ID не передан, ищем по названию и году, как и раньше.
            const movieData = await getMovieId(movieTitle, movieYear);
            if (!movieData) {
                console.error('Фильм/сериал не найден для загрузки изображений.');
                return null;
            }
            finalMovieId = movieData.id;
            finalMovieType = movieData.type;
        }

        const API_KEY = '3da216c9cc3fe78b5488855d25d26e13';
        const imageUrls = {};

        // Запросы к API теперь используют finalMovieId и finalMovieType
        // Получаем постер (вертикальное изображение)
        const posterResponse = await fetch(`https://api.themoviedb.org/3/${finalMovieType}/${finalMovieId}/images?api_key=${API_KEY}`);
        const posterData = await posterResponse.json();
        if (posterData.posters && posterData.posters.length > 0) {
            const posterPath = posterData.posters.find(poster => poster.iso_639_1 === 'ru' || poster.iso_639_1 === null)?.file_path || posterData.posters[0].file_path;
            imageUrls.poster = `https://image.tmdb.org/t/p/w500/${posterPath}`;
        } else {
            imageUrls.poster = null;
            console.warn('Вертикальный постер не найден.');
        }

        // Получаем бэкдроп (горизонтальное изображение)
        const backdropResponse = await fetch(`https://api.themoviedb.org/3/${finalMovieType}/${finalMovieId}/images?api_key=${API_KEY}`);
        const backdropData = await backdropResponse.json();
        if (backdropData.backdrops && backdropData.backdrops.length > 0) {
            const backdropPath = backdropData.backdrops.find(backdrop => backdrop.iso_639_1 === 'ru' || backdrop.iso_639_1 === null)?.file_path || backdropData.backdrops[0].file_path;
            imageUrls.backdrop = `https://image.tmdb.org/t/p/w1280/${backdropPath}`;
        } else {
            imageUrls.backdrop = null;
            console.warn('Горизонтальный бэкдроп не найден.');
        }

        return imageUrls;

    } catch (error) {
        console.error('Ошибка при загрузке URL изображений:', error);
        return null;
    }
}

async function updateImages() {
    // Получаем ID и тип из HTML-элементов, если они есть.
    // Например, <span id="movie-id">12345</span> и <span id="movie-type">movie</span>
    const movieId = document.getElementById('movie-id')?.innerText;
    const movieType = document.getElementById('movie-type')?.innerText;

    // Если ID и тип найдены, используем их для поиска.
    if (movieId && movieType) {
        console.log(`Ищем изображения по ID: ${movieId} и типу: ${movieType}`);
        const imageUrls = await loadImageUrls(null, null, movieId, movieType);

        if (imageUrls) {
            // Обновляем изображения
            updateDomImages(imageUrls);
        }
    } else {
        // Если ID не найден, ищем по названию и году (старый способ).
        const movieTitle = document.getElementById('movie-title')?.innerText;
        const movieYear = document.getElementById('movie-year')?.innerText;

        if (movieTitle && movieYear) {
            console.log(`Ищем изображения по названию: ${movieTitle} (${movieYear})`);
            const imageUrls = await loadImageUrls(movieTitle, movieYear);

            if (imageUrls) {
                // Обновляем изображения
                updateDomImages(imageUrls);
            }
        } else {
            console.error('Не удалось получить ID, название или год фильма для загрузки изображений.');
            return;
        }
    }
}

// Новая вспомогательная функция для обновления DOM
function updateDomImages(imageUrls) {
    // Обновляем вертикальное изображение (карточка)
    const cardImage = document.querySelector('.movie-card-img');
    if (cardImage) {
        cardImage.src = imageUrls.poster || '';
    }

    // Обновляем горизонтальное изображение (задний фон для ПК)
    const heroImage = document.querySelector('.hero .mobile-img');
    if (heroImage) {
        heroImage.src = imageUrls.backdrop || '';
    }

    // Обновляем вертикальное изображение для мобильной версии
    const phoneBackgroundImageDiv = document.querySelector('.Phone-version > div[style*="background"]');
    if (phoneBackgroundImageDiv && imageUrls.poster) {
        const existingStyle = phoneBackgroundImageDiv.getAttribute('style');
        const newBackgroundStyle = existingStyle.replace(/url\([^)]*\)/, `url('${imageUrls.poster}')`);
        phoneBackgroundImageDiv.setAttribute('style', newBackgroundStyle);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    updateImages();
});