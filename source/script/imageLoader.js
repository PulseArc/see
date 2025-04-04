// imageLoader.js
import { getMovieId } from './apple.js';

async function loadImageUrls(movieTitle, movieYear) {
    try {
        const movieData = await getMovieId(movieTitle, movieYear);
        if (!movieData) {
            console.error('Фильм/сериал не найден для загрузки изображений.');
            return null;
        }
        const { id: movieId, type } = movieData;
        const API_KEY = '3da216c9cc3fe78b5488855d25d26e13';
        const imageUrls = {};

        // Получаем постер (вертикальное изображение)
        const posterResponse = await fetch(`https://api.themoviedb.org/3/${type}/${movieId}/images?api_key=${API_KEY}`);
        const posterData = await posterResponse.json();
        if (posterData.posters && posterData.posters.length > 0) {
            const posterPath = posterData.posters.find(poster => poster.iso_639_1 === 'ru' || poster.iso_639_1 === null)?.file_path || posterData.posters[0].file_path;
            imageUrls.poster = `http://image.tmdb.org/t/p/w500/${posterPath}`;
        } else {
            imageUrls.poster = null;
            console.warn('Вертикальный постер не найден.');
        }

        // Получаем бэкдроп (горизонтальное изображение)
        const backdropResponse = await fetch(`https://api.themoviedb.org/3/${type}/${movieId}/images?api_key=${API_KEY}`);
        const backdropData = await backdropResponse.json();
        if (backdropData.backdrops && backdropData.backdrops.length > 0) {
            const backdropPath = backdropData.backdrops.find(backdrop => backdrop.iso_639_1 === 'ru' || backdrop.iso_639_1 === null)?.file_path || backdropData.backdrops[0].file_path;
            imageUrls.backdrop = `http://image.tmdb.org/t/p/w1280/${backdropPath}`;
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
    const movieTitle = document.getElementById('movie-title')?.innerText;
    const movieYear = document.getElementById('movie-year')?.innerText;

    if (!movieTitle || !movieYear) {
        console.error('Не удалось получить название или год фильма для загрузки изображений.');
        return;
    }

    const imageUrls = await loadImageUrls(movieTitle, movieYear);

    if (imageUrls) {
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
            // Сохраняем существующие стили и заменяем только URL изображения
            const existingStyle = phoneBackgroundImageDiv.getAttribute('style');
            const newBackgroundStyle = existingStyle.replace(/url\([^)]*\)/, `url('${imageUrls.poster}')`);
            phoneBackgroundImageDiv.setAttribute('style', newBackgroundStyle);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Небольшая задержка, чтобы убедиться, что название и год фильма уже подставлены
    setTimeout(updateImages, 10);
});