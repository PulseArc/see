document.addEventListener('DOMContentLoaded', () => {
    // Call the function for each array.
    generateMovieCards(window.movies, '#movie-cards-container', 0);
    generateMovieCards(window.cartoons, '#cartoon-cards-container', 0);
    generateMovieCards(window.series, '#series-cards-container', 0);
    generateMovieCards(window.anime, '#anime-cards-container', 0);
    
    // Запускаем ленивую загрузку изображений
    lazyLoadImages();
});

// Функция для ленивой загрузки изображений
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    images.forEach(img => {
        const actualSrc = img.getAttribute('data-src');
        
        // Создаем новый объект Image для предзагрузки
        const tempImg = new Image();
        
        tempImg.onload = function() {
            // Когда изображение загрузилось, заменяем заглушку
            img.src = actualSrc;
            img.removeAttribute('data-src');
            
            // Добавляем класс для плавного появления (опционально)
            img.classList.add('loaded');
        };
        
        tempImg.onerror = function() {
            // Если изображение не загрузилось, можно оставить заглушку
            // или установить изображение-ошибку
            console.error('Ошибка загрузки изображения:', actualSrc);
        };
        
        // Запускаем загрузку
        tempImg.src = actualSrc;
    });
}

// The updated generateMovieCards function
function generateMovieCards(cardData, containerSelector, startIndexForContent = 0) {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error('Ошибка: Контейнер для карточек не найден по селектору:', containerSelector);
        return;
    }

    if (!cardData || cardData.length === 0) {
        container.innerHTML = `<p>Контент не найден.</p>`;
        return;
    }

    const actualStartIndex = Math.max(0, startIndexForContent);
    const endIndex = Math.min(actualStartIndex + 12, cardData.length);
    const cardsToGenerate = cardData.slice(actualStartIndex, endIndex);

    let cardsHtml = '';
    cardsToGenerate.forEach(movie => {
        const tvHtml = movie.isTV ? `<div class="card-TV">TV</div>` : '';

        cardsHtml += `
            <div class="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <div class="card full-card">
                    <a href="${movie.link}">
                        <div class="all-flim-img-wrapper">
                           <img src="${PLACEHOLDER_BASE64}" data-src="${movie.image}" class="card-img-top all-flim-img" alt="${movie.name}">
                        </div>
                        <div class="card-rating">
                            <span class="span-rating">${movie.rating}</span>
                        </div>
                        ${tvHtml}
                        <div class="card-body">
                            <span class="card-tex">${movie.name}</span>
                                <span class="year">${movie.year}</span>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        `;
    });

    container.innerHTML = cardsHtml;
}