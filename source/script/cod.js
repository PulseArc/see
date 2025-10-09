// 16X9
const loadedImages = new Map();

document.addEventListener("DOMContentLoaded", () => {
  
  // СНАЧАЛА сохраняем все оригинальные src в data-атрибуты ДО инициализации Splide
  const images = document.querySelectorAll(".sirials-watch-img");
  
  images.forEach((img, index) => {
    
    // Сохраняем оригинальный src в data-атрибут
    if (!img.dataset.originalSrc) {
      img.dataset.originalSrc = img.src;
      
    }
    // Ставим placeholder
    img.src = PLACEHOLDER_BASE16X9;
    
  });

  // Функция загрузки изображения
  function loadImage(img) {
    const originalSrc = img.dataset.originalSrc;
    
    if (!originalSrc) {
      console.error('❌ Нет data-original-src для изображения');
      return;
    }

    // Если изображение уже загружено в глобальное хранилище
    if (loadedImages.has(originalSrc)) {
      
      img.src = originalSrc;
      img.classList.add("loaded");
      return;
    }

    // Если уже идёт загрузка этого URL
    if (img.dataset.loading === 'true') {
      
      return;
    }

    
    img.dataset.loading = 'true';

    const realImage = new Image();
    realImage.src = originalSrc;

    realImage.onload = () => {
      
      
      // Сохраняем в глобальный кэш
      loadedImages.set(originalSrc, true);
      
      // Обновляем ВСЕ изображения с таким же src (включая клоны)
      document.querySelectorAll('.sirials-watch-img').forEach(element => {
        if (element.dataset.originalSrc === originalSrc) {
          
          element.src = originalSrc;
          element.classList.add("loaded");
          element.dataset.loaded = 'true';
          element.dataset.loading = 'false';
        }
      });
    };

    realImage.onerror = () => {
      console.error('❌ Ошибка загрузки:', originalSrc);
      img.dataset.loading = 'false';
    };
  }

  // Загружаем видимые изображения
  
  images.forEach((img, index) => {
    
    loadImage(img);
  });
});
// Конец


// 9X16
const loadedImages9x16 = new Map();

document.addEventListener("DOMContentLoaded", () => {
  
  // СНАЧАЛА сохраняем все оригинальные src в data-атрибуты ДО инициализации Splide
  const images = document.querySelectorAll(".img-9x16");
  
  
  images.forEach((img, index) => {
    
    
    
    // Сохраняем оригинальный src в data-атрибут
    if (!img.dataset.originalSrc) {
      img.dataset.originalSrc = img.src;
      
    }
    // Ставим placeholder
    img.src = PLACEHOLDER_BASE64;
    
  });

  // Функция загрузки изображения
  function loadImage(img) {
    const originalSrc = img.dataset.originalSrc;
    
    if (!originalSrc) {
      console.error('❌ Нет data-original-src для изображения');
      return;
    }

    

    // Если изображение уже загружено в глобальное хранилище
    if (loadedImages.has(originalSrc)) {
      
      img.src = originalSrc;
      img.classList.add("loaded");
      return;
    }

    // Если уже идёт загрузка этого URL
    if (img.dataset.loading === 'true') {
      
      return;
    }

    
    img.dataset.loading = 'true';

    const realImage = new Image();
    realImage.src = originalSrc;

    realImage.onload = () => {
      
      
      // Сохраняем в глобальный кэш
      loadedImages.set(originalSrc, true);
      
      // Обновляем ВСЕ изображения с таким же src (включая клоны)
      document.querySelectorAll('.img-9x16').forEach(element => {
        if (element.dataset.originalSrc === originalSrc) {
          
          element.src = originalSrc;
          element.classList.add("loaded");
          element.dataset.loaded = 'true';
          element.dataset.loading = 'false';
        }
      });
    };

    realImage.onerror = () => {
      console.error('❌ Ошибка загрузки:', originalSrc);
      img.dataset.loading = 'false';
    };
  }

  // Загружаем видимые изображения
  
  images.forEach((img, index) => {
    
    loadImage(img);
  });
});
// Конец


document.addEventListener('DOMContentLoaded', () => {

    function positionCardRating(card) {
        const image = card.querySelector('.card-img-top');
        const rating = card.querySelector('.card-rating') || card.querySelector('.card-rating-trand');

        if (image && rating) {
            // Проверяем, загружено ли изображение. Если нет, ждём.
            if (!image.complete) {
                image.addEventListener('load', () => positionCardRating(card), { once: true });
                return; 
            }

            // Используем offsetTop/offsetLeft для позиционирования относительно родителя
            const imageRect = {
                width: image.offsetWidth,
                height: image.offsetHeight,
                top: image.offsetTop,
                left: image.offsetLeft
            };

            const cardRect = {
                width: card.offsetWidth,
                height: card.offsetHeight
            };

            // Вычисляем отступы
            const bottom = cardRect.height - (imageRect.height + imageRect.top) + 8;
            const right = cardRect.width - (imageRect.width + imageRect.left) + 8;
            
            // Применяем стили
            rating.style.position = 'absolute';
            rating.style.bottom = bottom + 'px';
            rating.style.right = right + 'px';
        }
    }

    function positionAllRatings() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            positionCardRating(card);
        });
    }

    // Запускаем позиционирование сразу после загрузки DOM
    positionAllRatings();

    // Перепозиционирование при изменении размера окна
    window.addEventListener('resize', positionAllRatings);
});


// Находим элементы
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search');
  const resultsContainer = document.getElementById('results-container');
  const menuToggle = document.querySelector('#menuToggle input');
  const searchWrapper = document.querySelector('.search-wrapper');
  const clearIcon = document.querySelector('.clear-icon');
  const homeBackgroundImage = document.querySelector('.Home-background-image');

  // Бургер
if (menuToggle && searchWrapper) {
        menuToggle.addEventListener('change', () => {
            if (menuToggle.checked) {
                // Меню открыто
                searchWrapper.classList.add('hidden-by-menu'); // <--- ВОТ ЭТА СТРОКА
                searchWrapper.classList.remove('active'); // Сворачиваем поиск визуально

               
            } else {
                // Меню закрыто
                searchWrapper.classList.remove('hidden-by-menu'); // <--- И ВОТ ЭТА СТРОКА
                searchInput.removeAttribute('disabled'); // Разрешаем ввод
                updateSearchInputState(); // Обновляем состояние на основе mouseover/mouseout
            }
        });
    }
    // конец

    
  // Функция для обновления состояния поля ввода
  function updateSearchInputState() {
      if (searchWrapper.classList.contains('active')) {
          searchInput.removeAttribute('disabled'); // Разрешить ввод
      } else {
          searchInput.setAttribute('disabled', 'disabled'); // Запретить ввод
      }
  }

  // Изначальная проверка состояния
  updateSearchInputState();

  // Обработчик события наведения мыши (для разворачивания поля)
  searchWrapper.addEventListener('mouseover', () => {
      searchWrapper.classList.add('active');
      updateSearchInputState();
  });

  // Обработчик события ухода мыши (для сворачивания поля)
  searchWrapper.addEventListener('mouseout', () => {
      searchWrapper.classList.remove('active');
      updateSearchInputState();
  });

  // Обработчик события изменения состояния меню (если это влияет на поиск)
  if (menuToggle && searchWrapper) {
      menuToggle.addEventListener('change', () => {
          // Здесь может быть ваша логика, определяющая, когда поиск активен/неактивен
          // Например, если при открытом меню поиск должен быть неактивен:
          if (menuToggle.checked) {
              searchWrapper.classList.remove('active'); // Сворачиваем поиск
          } else {
              // searchWrapper.classList.add('active'); // Разворачиваем поиск (опционально)
          }
          updateSearchInputState();
      });
  }

  // Проверяем, существуют ли элементы перед тем, как с ними работать
  if (!searchInput || !resultsContainer || !clearIcon) return;

  searchInput.addEventListener('input', () => {
      if (searchInput.disabled) { // Проверяем, заблокировано ли поле
          return; // Ничего не делаем, если поиск неактивен
      }
      const query = searchInput.value.trim(); // Получаем текст из поля поиска

      if (query.length > 0) {
          // Показываем контейнер с результатами, если есть текст
          resultsContainer.style.display = 'block';
          clearIcon.style.display = 'inline'; // Показываем крестик

          // Логика обновления содержимого результатов

          // Прокрутка страницы вверх
          window.scrollTo({
              top: 0, // Начало страницы
              behavior: 'smooth' // Плавная прокрутка
          });

          // Устанавливаем marginTop, если есть результат
          if (homeBackgroundImage) {
              homeBackgroundImage.style.marginTop = '4em';
          }
      } else {
          // Скрываем контейнер, если поле ввода пустое
          resultsContainer.style.display = 'none';
          clearIcon.style.display = 'none'; // Прячем крестик

          // Плавно убираем marginTop, если поиск сброшен
          if (homeBackgroundImage) {
              homeBackgroundImage.style.marginTop = '';
          }
      }
  });

  // Событие клика по крестику
  clearIcon.addEventListener('click', () => {
      if (searchInput.disabled) { // Проверяем, заблокировано ли поле
          return; // Ничего не делаем, если поиск неактивен
      }
      searchInput.value = ''; // Очищаем поле ввода
      resultsContainer.style.display = 'none'; // Скрываем контейнер с результатами
      clearIcon.style.display = 'none'; // Скрываем крестик
      searchInput.blur(); // Убираем фокус, скрывая клавиатуру

      // Плавно возвращаем marginTop, если результаты скрыты
      if (homeBackgroundImage) {
          homeBackgroundImage.style.marginTop = '';
      }
  });

  // Скрывает клавиатуру поиска
  document.addEventListener('touchend', function(event) {
    if (searchInput === document.activeElement && !searchInput.contains(event.target)) {
        searchInput.blur();
    }
});
// Конец

  // Скрытие клавиатуры при нажатии Enter
  searchInput.addEventListener('keypress', (event) => {
      if (searchInput.disabled) { // Проверяем, заблокировано ли поле
          event.preventDefault(); // Предотвращаем ввод, если поиск неактивен
          return;
      }
      if (event.key === 'Enter') {
          event.preventDefault(); // Предотвращаем стандартное поведение формы
          searchInput.blur(); // Убираем фокус с поля, скрывая клавиатуру
      }
  });
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.innerWidth > 1100) {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  } else {
      navbar.classList.remove('scrolled'); // Убираем класс, если ширина меньше 1100px
  }
});

// рейтинг и кнопка ещё


// Конец
document.addEventListener('DOMContentLoaded', () => {
    // 1. Находим каждую кнопку по её уникальному ID
    const movieBtn = document.getElementById('show-more-btn');
    const cartoonBtn = document.getElementById('show-more-btn1');
    const seriesBtn = document.getElementById('show-more-btn2');
    const animeBtn = document.getElementById('show-more-btn3');

    // 2. Добавляем слушатели событий 'click' для каждой кнопки
    if (movieBtn) {
        movieBtn.addEventListener('click', () => {
            window.location.href = 'movies.html';
        });
    }

    if (cartoonBtn) {
        cartoonBtn.addEventListener('click', () => {
            window.location.href = 'cartoons.html';
        });
    }

    if (seriesBtn) {
        seriesBtn.addEventListener('click', () => {
            window.location.href = 'series.html';
        });
    }

    if (animeBtn) {
        animeBtn.addEventListener('click', () => {
            window.location.href = 'anime.html';
        });
    }
});


// Широкие Картинки Слайдер

document.addEventListener('DOMContentLoaded', function () {
  new Splide('#trend', {
    type: 'loop',
    focus: 'center',
    autoWidth: true, 
    gap: '40px', // По умолчанию 40px
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: true,
    pagination: false,
    drag: true,
    perPage: 3,
    autoplay: false, // Автопрокрутка/
    breakpoints: {
      5000: {
        gap: '280px', // При ширине экрана до 1200px
        perPage: 3,
      },
      2299.5: {
        gap: '198px', // При ширине экрана до 1200px
        perPage: 3,
      },
      2018.5: {
        gap: '180px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1899.5: {
        gap: '180px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1704.5: {
        gap: '100px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1520.5: {
        gap: '100px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1320.5: {
        gap: '93px', // При ширине экрана до 768px
        perPage: 3, // Можно уменьшить количество слайдов на маленьких экранах
      }
    }
  }).mount();
});
// Конец



document.addEventListener('DOMContentLoaded', function () {
  new Splide('#nov', {
    type: 'loop',
    focus: 'center',
    autoWidth: true, 
    gap: '40px', // По умолчанию 40px
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: true,
    pagination: false,
    drag: true,
    perPage: 3,
    autoplay: false, // Автопрокрутка 
    breakpoints: {
      5000: {
        gap: '23px', // При ширине экрана до 1200px
        perPage: 3,
      },
      2299.5: {
        gap: '20px', // При ширине экрана до 1200px
        perPage: 3,
      },
      2018.5: {
        gap: '18px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1899.5: {
        gap: '18px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1704.5: {
        gap: '12px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1520.5: {
        gap: '12px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1320.5: {
        gap: '28px', // При ширине экрана до 768px
        perPage: 3, // Можно уменьшить количество слайдов на маленьких экранах
      },
      1050: {
        gap: '12px', // При ширине экрана до 1200px
        perPage: 3,
      },
      480: {
        gap: '12px', // При ширине экрана до 1200px
        perPage: 3,
      }
    }
  }).mount();
});







document.addEventListener('DOMContentLoaded', function () {
  new Splide('#pop-films', {
    type: 'loop',
    focus: 'center',
    autoWidth: true, 
    gap: '40px', // По умолчанию 40px
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: true,
    pagination: false,
    drag: true,
    perPage: 3,
    autoplay: false,
    breakpoints: {
      5000: {
        gap: '280px', // При ширине экрана до 1200px
        perPage: 3,
      },
      2299.5: {
        gap: '198px', // При ширине экрана до 1200px
        perPage: 3,
      },
      2018.5: {
        gap: '180px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1899.5: {
        gap: '180px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1704.5: {
        gap: '100px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1520.5: {
        gap: '100px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1320.5: {
        gap: '93px', // При ширине экрана до 768px
        perPage: 3, // Можно уменьшить количество слайдов на маленьких экранах
      }
    }
  }).mount();
});




document.addEventListener('DOMContentLoaded', function () {
  new Splide('#pop-cartoon', {
    type: 'loop',
    focus: 'center',
    autoWidth: true, 
    gap: '40px', // По умолчанию 40px
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: true,
    pagination: false,
    drag: true,
    perPage: 3,
    autoplay: false,
    breakpoints: {
      5000: {
        gap: '280px', // При ширине экрана до 1200px
        perPage: 3,
      },
      2299.5: {
        gap: '198px', // При ширине экрана до 1200px
        perPage: 3,
      },
      2018.5: {
        gap: '180px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1899.5: {
        gap: '180px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1704.5: {
        gap: '100px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1520.5: {
        gap: '100px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1320.5: {
        gap: '93px', // При ширине экрана до 768px
        perPage: 3, // Можно уменьшить количество слайдов на маленьких экранах
      }
    }
  }).mount();
});


document.addEventListener('DOMContentLoaded', function () {
  new Splide('#pop-serials', {
    type: 'loop',
    focus: 'center',
    autoWidth: true, 
    gap: '40px', // По умолчанию 40px
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: true,
    pagination: false,
    drag: true,
    perPage: 3, 
    autoplay: false,
    breakpoints: {
      5000: {
        gap: '280px', // При ширине экрана до 1200px
        perPage: 3,
      },
      2299.5: {
        gap: '198px', // При ширине экрана до 1200px
        perPage: 3,
      },
      2018.5: {
        gap: '180px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1899.5: {
        gap: '180px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1704.5: {
        gap: '100px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1520.5: {
        gap: '100px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1320.5: {
        gap: '93px', // При ширине экрана до 768px
        perPage: 3, // Можно уменьшить количество слайдов на маленьких экранах
      }
    }
  }).mount();
});


document.addEventListener('DOMContentLoaded', function () {
  new Splide('#pop-anime', {
    type: 'loop',
    focus: 'center',
    autoWidth: true, 
    gap: '40px', // По умолчанию 40px
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: true,
    pagination: false,
    drag: true,
    perPage: 3,
    autoplay: false,
    breakpoints: {
      5000: {
        gap: '280px', // При ширине экрана до 1200px
        perPage: 3,
      },
      2299.5: {
        gap: '198px', // При ширине экрана до 1200px
        perPage: 3,
      },
      2018.5: {
        gap: '180px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1899.5: {
        gap: '180px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1704.5: {
        gap: '100px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1520.5: {
        gap: '100px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1320.5: {
        gap: '93px', // При ширине экрана до 768px
        perPage: 3, // Можно уменьшить количество слайдов на маленьких экранах
      }
    }
  }).mount();
});