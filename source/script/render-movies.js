// Предполагается, что 'PLACEHOLDER_BASE64' — это переменная с вашей заглушкой.
// const PLACEHOLDER_BASE64 = "...";

document.addEventListener('DOMContentLoaded', () => {

    // ======================================================================
    // КОНФИГУРАЦИЯ И ПЕРЕМЕННЫЕ СОСТОЯНИЯ
    // ======================================================================

    const BATCH_SIZE = window.innerWidth <= 1100 ? 90 : 60;

    let moviesLoadedCount = 0;
    let isLoading = false;

    // Предполагается, что 'movies' - это глобальная переменная с данными.
    const allMovies = movies;
    const container = document.getElementById("movies-container");
    const footer = document.querySelector('.footer');
    
    // Хранилище состояний изображений
    const imageStates = new Map();

    // ======================================================================
    // ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
    // ======================================================================
    
    function positionCardRating(card) {
        const image = card.querySelector('.all-flim-img');
        const rating = card.querySelector('.card-rating');
        
        // Добавляем проверку, что изображение уже загружено, чтобы избежать некорректного позиционирования
        if (image && rating && image.complete && image.naturalHeight > 0) {
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

    /**
     * Обрабатывает загрузку изображения и заменяет заглушку
     */
    function handleImageLoad(image, cardWrapper, tmdbId) {
        const state = imageStates.get(tmdbId) || {};
        
        if (state.loaded || state.loading) {
            return;
        }

        if (!image.dataset.src) {
            return;
        }

        console.log(`Starting real image load for ${tmdbId}`);
        imageStates.set(tmdbId, { loading: true });

        const tempImage = new Image();
        
        const handleLoad = () => {
            console.log(`Image loaded successfully ${tmdbId}`);
            imageStates.set(tmdbId, { loaded: true, loading: false });
            
            // Показываем рейтинг ТОЛЬКО если карточка видима И изображение не заглушка
            const rating = cardWrapper.querySelector('.card-rating');
            if (rating && cardWrapper.style.opacity === '1') {
                image.src = tempImage.src;
                rating.classList.remove('card-rating-hidden');
                positionCardRating(cardWrapper);
            } else {
                // Если карточка не видима, просто сохраняем факт загрузки без показа
                image.src = tempImage.src;
            }
            
            cleanupListeners();
        };

        const handleError = () => {
            console.log(`Image failed to load ${tmdbId}`);
            imageStates.set(tmdbId, { loaded: true, loading: false, error: true });
            cleanupListeners();
        };

        const cleanupListeners = () => {
            tempImage.removeEventListener('load', handleLoad);
            tempImage.removeEventListener('error', handleError);
        };

        tempImage.addEventListener('load', handleLoad);
        tempImage.addEventListener('error', handleError);

        tempImage.src = image.dataset.src;
        if (tempImage.complete && tempImage.naturalHeight > 0) {
            console.log(`Image loaded from cache immediately ${tmdbId}`);
            handleLoad();
        }
    }

    /**
     * Создаёт HTML-элемент карточки фильма сразу с заглушкой
     */
    function createCardAndObserve(movie) {
        const col = document.createElement("div");
        col.className = "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2";
        col.style.width = '12.35em';
        col.dataset.tmdbId = movie.tmdb_id;

        col.innerHTML = `
            <div class="card full-card">
                <div class="content-wrapper">
                    <a href="${movie.link}">
                        <div class="all-flim-img-wrapper">
                            <img src="${PLACEHOLDER_BASE64}" data-src="${movie.image}" class="card-img-top all-flim-img" alt="${movie.name}">
                        </div>
                        <div class="card-rating card-rating-hidden">
                            <span class="span-rating">${movie.rating}</span>
                        </div>
                        <div class="card-body">
                            <span class="card-tex">${movie.name}</span> 
                                <span class="year">${movie.year}</span>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        `;
        
        imageStates.set(movie.tmdb_id, { loaded: false, loading: false });
        
        contentObserver.observe(col);
        
        return col;
    }

    // === IntersectionObserver для контента ===
    let contentObserver = null;
    if ('IntersectionObserver' in window) {
        contentObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const tmdbId = entry.target.dataset.tmdbId;
                const image = entry.target.querySelector('.all-flim-img');
                const cardWrapper = entry.target.querySelector('.full-card');
                const rating = entry.target.querySelector('.card-rating');

                if (!image || !cardWrapper || !tmdbId || !rating) return;

                const state = imageStates.get(tmdbId) || {};
                
                if (entry.isIntersecting) {
                    // Карточка стала видимой, делаем её непрозрачной
                    cardWrapper.style.opacity = '1';

                    if (!state.loaded && !state.loading) {
                        // Первая загрузка - рейтинг скрыт, показываем заглушку
                        handleImageLoad(image, cardWrapper, tmdbId);
                    } else if (state.loaded && !state.error) {
                        // Изображение было загружено ранее - сначала показываем заглушку без рейтинга
                        image.src = PLACEHOLDER_BASE64;
                        rating.classList.add('card-rating-hidden');
                        
                        // Затем асинхронно загружаем реальное изображение с рейтингом
                        setTimeout(() => {
                            image.src = image.dataset.src;
                            rating.classList.remove('card-rating-hidden');
                            positionCardRating(cardWrapper);
                        }, 50); // Небольшая задержка для плавного перехода
                    }
                } else {
                    // Карточка ушла из видимости, делаем её прозрачной
                    cardWrapper.style.opacity = '0';
                    
                    // Заменяем изображение на заглушку и ВСЕГДА скрываем рейтинг
                    if (state.loaded && !state.error) {
                        image.src = PLACEHOLDER_BASE64;
                    }
                    // Скрываем рейтинг независимо от состояния загрузки
                    rating.classList.add('card-rating-hidden');
                }
            });
        }, {
            rootMargin: '1500px 0px 1500px 0px',
            threshold: 0.01
        });
    }

    // === IntersectionObserver для ленивой загрузки следующей партии ===
    const lastCardObserver = new IntersectionObserver((entries) => {
        const lastCard = entries[0];
        if (lastCard.isIntersecting && !isLoading) {
            lastCardObserver.unobserve(lastCard.target);
            renderNextBatch();
        }
    }, {
        rootMargin: '1500px',
        threshold: 0.1
    });

    // --- Функция для рендеринга следующей партии фильмов ---
    function renderNextBatch() {
        if (isLoading || moviesLoadedCount >= allMovies.length) {
            return;
        }

        isLoading = true;
        const currentBatch = allMovies.slice(moviesLoadedCount, moviesLoadedCount + BATCH_SIZE);
        const fragment = document.createDocumentFragment();

        currentBatch.forEach(movie => {
            fragment.appendChild(createCardAndObserve(movie));
        });
        
        container.appendChild(fragment);
        moviesLoadedCount += currentBatch.length;
        isLoading = false;
        
        const lastMovieCard = container.lastElementChild;
        if (lastMovieCard && moviesLoadedCount < allMovies.length) {
            lastCardObserver.observe(lastMovieCard);
        }

        if (moviesLoadedCount >= allMovies.length) {
            footer.classList.remove('d-none');
            lastCardObserver.disconnect();
        }
    }

    /**
     * Перепозиционирует рейтинги на всех видимых карточках при изменении размера окна.
     */
    function positionAllRatingsOnResize() {
        const visibleCards = document.querySelectorAll('.card');
        visibleCards.forEach(card => {
            positionCardRating(card);
        });
    }

    // --- Создание кнопки "Scroll to Top" ---
    function createScrollToTopButton() {
        const scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.id = 'scroll-to-top-btn';
        scrollToTopBtn.innerHTML = '↑';
        scrollToTopBtn.title = 'Наверх';
        
        scrollToTopBtn.style.cssText = `
            position: fixed;
            bottom: 40px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            background: rgba(255, 255, 255, 0.9);
            color: #000;
            font-size: 25px;
            font-weight: bold;
            cursor: pointer;
            z-index: 10;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
        `;
        
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        document.body.appendChild(scrollToTopBtn);
        return scrollToTopBtn;
    }

    const scrollToTopBtn = createScrollToTopButton();
    let lastScrollTop = 0;
    let lastScrollTime = Date.now();
    let scrollVelocity = 0;

    function toggleScrollToTopButton() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const currentTime = Date.now();
        
        const deltaScroll = scrollTop - lastScrollTop;
        const deltaTime = currentTime - lastScrollTime;
        
        if (deltaTime > 0) {
            scrollVelocity = deltaScroll / (deltaTime / 1000);
        }
        
        lastScrollTop = scrollTop;
        lastScrollTime = currentTime;
        
        if (scrollTop > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    }

    // --- Инициализация ---
    renderNextBatch();
    window.addEventListener('scroll', toggleScrollToTopButton, { passive: true });
    window.addEventListener('resize', positionAllRatingsOnResize);
});