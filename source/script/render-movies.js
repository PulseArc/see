document.addEventListener('DOMContentLoaded', () => {

    // Функция для позиционирования рейтинга на карточке
    function positionCardRating(card) {
        const image = card.querySelector('.card-img-top');
        const rating = card.querySelector('.card-rating') || card.querySelector('.card-rating-trand');

        // Проверяем, существуют ли элементы и загружено ли изображение
        if (image && rating && image.complete) {
            const imageRect = {
                width: image.offsetWidth,
                height: image.offsetHeight,
                top: image.offsetTop,
                left: image.offsetLeft
            };

            const cardRect = {
                width: card.offsetWidth,
                height: card.offsetHeight,
                top: card.offsetTop,
                left: card.offsetLeft
            };

            const bottom = cardRect.height - imageRect.height - imageRect.top + 8;
            const right = cardRect.width - imageRect.width - imageRect.left + 8;

            rating.style.position = 'absolute';
            rating.style.bottom = bottom + 'px';
            rating.style.right = right + 'px';
        }
    }

    // Позиционирование всех рейтингов после загрузки изображений
    function positionAllRatings() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const image = card.querySelector('.card-img-top');
            if (image) {
                // Вызываем позиционирование после загрузки изображения
                if (image.complete) {
                    positionCardRating(card);
                } else {
                    image.addEventListener('load', () => positionCardRating(card), { once: true });
                }
            }
        });
    }

    // Перепозиционирование при изменении размера окна
    window.addEventListener('resize', positionAllRatings);

    // Предположим, что movies - это глобальный массив данных
    const movies = window.movies;

    // Определяем размер пакета в зависимости от ширины экрана
    const BATCH_SIZE = window.innerWidth <= 1100 ? 90 : 60;
    const BUFFER_SIZE = BATCH_SIZE * 2;

    let isLoading = false;
    let userScrollingToTop = false;
    let scrollTimeout = null;
    let currentStartIndex = 0;

    const movieList = document.getElementById("movie-list");
    const sentinelTop = document.getElementById("sentinel-top");
    const sentinelBottom = document.getElementById("sentinel-bottom");

    const footer = document.querySelector(".footer");

    // Создаём кнопку "Наверх"
    function createScrollToTopButton() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.id = 'scroll-to-top-btn';
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.title = 'Наверх';

    // 🎨 Настройки цветов
    const backgroundColor = 'rgba(255, 255, 255, 0.9)';
    const arrowColor = '#000000ff';
    const shadowColor = 'rgba(0, 0, 0, 0.6)';

    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 40px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: ${backgroundColor};
        color: ${arrowColor};
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
        z-index: 10;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 0 12px ${shadowColor};
    `;

    // hover эффект
    scrollToTopBtn.addEventListener('mouseenter', () => {
        scrollToTopBtn.style.transform = 'scale(1.15)';
        scrollToTopBtn.style.boxShadow = `0 0 20px ${shadowColor}`;
    });

    scrollToTopBtn.addEventListener('mouseleave', () => {
        scrollToTopBtn.style.transform = 'scale(1)';
        scrollToTopBtn.style.boxShadow = `0 0 12px ${shadowColor}`;
    });

        scrollToTopBtn.addEventListener('click', () => {
            resetAndRenderFromTop();
        });

        document.body.appendChild(scrollToTopBtn);
        return scrollToTopBtn;
    }

    const scrollToTopBtn = createScrollToTopButton();

    function toggleScrollToTopButton() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    }

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        toggleScrollToTopButton();

        if (scrollTop < 200) {
            userScrollingToTop = true;
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                userScrollingToTop = false;
            }, 2000);
        } else {
            if (!userScrollingToTop) {
                userScrollingToTop = false;
            }
        }

        if (scrollTop === 0) {
            if (currentStartIndex > 0) {
                resetAndRenderFromTop();
            }
        }
    }

    window.addEventListener('scroll', handleScroll);

    function createCard(movie) {
        const col = document.createElement("div");
        col.className = "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2";
        col.style.width = '12.35em';
        col.dataset.tmdbId = movie.tmdb_id;

        

        col.innerHTML = `
            <div class="card full-card">
                <a href="${movie.link}">
                    <div class="all-flim-img-wrapper">
                        <img src="${movie.image}" class="card-img-top all-flim-img" alt="${movie.name}">
                    </div>
                    <div class="card-rating">
                        <span class="span-rating">${movie.rating}</span>
                    </div>
                    
                    <div class="card-body">
                        <span class="card-tex">${movie.name} <br>
                            <span class="year">${movie.year}</span>
                        </span>
                    </div>
                </a>
            </div>
        `;
        return col;
    }

  function renderBatch(direction) {
    if (isLoading) {
        return Promise.resolve();
    }
    isLoading = true;

    const currentChildren = Array.from(movieList.children);
    let newCardsData = [];
    let newStartIndex = 0;
    let newEndIndex = 0;

    if (direction === "down") {
        newStartIndex = currentStartIndex + currentChildren.length;
        newEndIndex = Math.min(newStartIndex + BATCH_SIZE, movies.length);
        
        // Если достигли конца массива, завершаем
        if (newStartIndex >= movies.length) {
            isLoading = false;
            footer.classList.remove('d-none');
            return Promise.resolve();
        }
        
        newCardsData = movies.slice(newStartIndex, newEndIndex);

    } else { // direction === "up"
        newEndIndex = currentStartIndex;
        newStartIndex = Math.max(0, currentStartIndex - BATCH_SIZE);
        newCardsData = movies.slice(newStartIndex, newEndIndex);
        
        currentStartIndex = newStartIndex;
    }

    if (newCardsData.length === 0) {
        isLoading = false;
        return Promise.resolve();
    }
    
    const fragment = document.createDocumentFragment();
    const promises = [];

    newCardsData.forEach(movie => {
        const newCard = createCard(movie);
        fragment.appendChild(newCard);
        promises.push(new Promise(resolve => {
            const imageElement = newCard.querySelector('.card-img-top');
            if (imageElement && imageElement.complete) {
                resolve(newCard);
            } else if (imageElement) {
                imageElement.addEventListener('load', () => resolve(newCard), { once: true });
                imageElement.addEventListener('error', () => resolve(newCard), { once: true });
            } else {
                resolve(newCard);
            }
        }));
    });

    if (direction === 'down') {
        movieList.appendChild(fragment);
    } else {
        movieList.prepend(fragment);
    }

    const totalChildren = movieList.children;
    
    // ИСПРАВЛЕНИЕ: Для последнего батча не удаляем карточки, если это приведет к неправильному отображению
    if (direction === 'down') {
        const currentEndIndex = newStartIndex + newCardsData.length;
        
        // Если это последний батч (достигли конца массива), не удаляем карточки
        if (currentEndIndex >= movies.length) {
            footer.classList.remove('d-none');
        } else {
            // Удаляем карточки только если не достигли конца и превышен буфер
            const numToRemove = Math.max(0, totalChildren.length - BUFFER_SIZE);
            if (numToRemove > 0) {
                for (let i = 0; i < numToRemove; i++) {
                    if (movieList.firstElementChild) {
                        movieList.removeChild(movieList.firstElementChild);
                        currentStartIndex++;
                    }
                }
            }
        }
    } else {
        // Для направления "up" оставляем старую логику
        const numToRemove = Math.max(0, totalChildren.length - BUFFER_SIZE);
        if (numToRemove > 0) {
            for (let i = 0; i < numToRemove; i++) {
                if (movieList.lastElementChild) {
                    movieList.removeChild(movieList.lastElementChild);
                }
            }
        }
    }

    return Promise.all(promises).then((loadedCards) => {
        isLoading = false;
        loadedCards.forEach(card => {
            positionCardRating(card.querySelector('.full-card'));
        });
    }).catch(() => {
        isLoading = false;
    });
}

    function initialRender() {
        movieList.innerHTML = '';
        footer.classList.add('d-none');
        isLoading = false;
        currentStartIndex = 0;

        if (!movies || movies.length === 0) {
            return;
        }
        renderBatch("down");
    }

    function resetAndRenderFromTop() {
        userScrollingToTop = true;
        currentStartIndex = 0;
        movieList.innerHTML = '';
        renderBatch("down");
        window.scrollTo({ top: 0, behavior: 'smooth' });
        footer.classList.add('d-none');
        
        setTimeout(() => {
            userScrollingToTop = false;
        }, 1500);
    }

    const observerBottom = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            if (!isLoading) {
                renderBatch("down");
            }
        }
    }, { rootMargin: '0px 0px 1000px 0px' });
    observerBottom.observe(sentinelBottom);

    const observerTop = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !userScrollingToTop && currentStartIndex > 0 && !isLoading) {
            renderBatch("up");
        }
    }, { rootMargin: '1000px 0px 0px 0px' });
    observerTop.observe(sentinelTop);

    initialRender();
});