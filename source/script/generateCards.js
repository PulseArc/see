document.addEventListener('DOMContentLoaded', () => {

    // The data arrays are now available globally thanks to the script tags.
    // We can directly access them using `window.`

    // Call the function for each array.
    generateMovieCards(window.movies, '#movie-cards-container', 0);
    generateMovieCards(window.cartoons, '#cartoon-cards-container', 0);
    generateMovieCards(window.series, '#series-cards-container', 0);
    generateMovieCards(window.anime, '#anime-cards-container', 0);
});

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
        // Мы используем "movie" вместо "item" для каждой карточки в цикле
        const tvHtml = movie.isTV ? `<div class="card-TV">TV</div>` : '';

        cardsHtml += `
            <div class="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <div class="card full-card">
                    <a href="${movie.link}">
                        <div class="all-flim-img-wrapper">
                            <img src="${movie.image}" class="card-img-top all-flim-img" alt="${movie.name}">
                        </div>
                        <div class="card-rating">
                            <span class="span-rating">${movie.rating}</span>
                        </div>
                        ${tvHtml}
                        <div class="card-body">
                            <span class="card-tex">${movie.name}<br>
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