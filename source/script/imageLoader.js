// imageLoader.js

export function showImages(data) {
    console.log('imageLoader.js: Начало обновления изображений.');

    // Используем более надежные пути из основного объекта
    const posterPath = data.poster_path;
    const backdropPath = data.backdrop_path;

    // Если основные пути не найдены, используем сложную логику
    // (на случай, если изображения есть только в массивах)
    if (!posterPath) {
        data.images.posters?.find(p => p.iso_639_1 === 'ru')?.file_path ||
        data.images.posters?.find(p => p.iso_639_1 === null)?.file_path ||
        data.images.posters?.[0]?.file_path;
    }
    
    if (!backdropPath) {
        data.images.backdrops?.find(b => b.iso_639_1 === 'ru')?.file_path ||
        data.images.backdrops?.find(b => b.iso_639_1 === null)?.file_path ||
        data.images.backdrops?.[0]?.file_path;
    }

    console.log('imageLoader.js: Рассчитанный постер:', posterPath);
    console.log('imageLoader.js: Рассчитанный бэкдроп:', backdropPath);

    const cardImage = document.querySelector('.movie-card-img');
    if (cardImage && posterPath) {
        console.log('imageLoader.js: Элемент для постера найден. Обновляем.');
        const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
        cardImage.src = posterUrl;
    } else {
        console.error('imageLoader.js: Элемент или путь к постеру не найдены.');
    }

    const heroImage = document.querySelector('.hero .mobile-img');
    if (heroImage && backdropPath) {
        console.log('imageLoader.js: Элемент для заднего фона найден. Обновляем.');
        const backdropUrl = `https://image.tmdb.org/t/p/w1280${backdropPath}`;
        heroImage.src = backdropUrl;
    } else {
        console.error('imageLoader.js: Элемент или путь к заднему фону не найдены.');
    }

    const phoneBackgroundImageDiv = document.querySelector('.Phone-version > div[style*="background"]');
    if (phoneBackgroundImageDiv && posterPath) {
        console.log('imageLoader.js: Элемент для мобильного фона найден. Обновляем.');
        const existingStyle = phoneBackgroundImageDiv.getAttribute('style');
        const newBackgroundStyle = existingStyle.replace(/url\([^)]*\)/, `url('https://image.tmdb.org/t/p/w500${posterPath}')`);
        phoneBackgroundImageDiv.setAttribute('style', newBackgroundStyle);
    } else {
        console.error('imageLoader.js: Элемент или путь к постеру для мобильного не найдены.');
    }
}