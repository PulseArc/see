




// Находим элементы
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search');
  const resultsContainer = document.getElementById('results-container');
  const menuToggle = document.querySelector('#menuToggle input');
  const searchWrapper = document.querySelector('.search-wrapper');
  const clearIcon = document.querySelector('.clear-icon');
  const homeBackgroundImage = document.querySelector('.Home-background-image');

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
function positionCardRating() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const image = card.querySelector('.card-img-top');
    const rating = card.querySelector('.card-rating');
    const ratingTrand = card.querySelector('.card-rating-trand');

    if (image) {
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

      if (rating) {
        rating.style.position = 'absolute';
        rating.style.bottom = bottom + 'px';
        rating.style.right = right + 'px';
      }

      if (ratingTrand) {
        ratingTrand.style.position = 'absolute';
        ratingTrand.style.bottom = bottom + 'px';
        ratingTrand.style.right = (right + 10) + 'px';
      }
    }
  });
}

// Функция для обработки клика на кнопку "Ещё" или "Скрыть"
const globalResizeObserver = new ResizeObserver(entries => {
  positionCardRating();
});

function handleShowMoreClick(buttonId, cardContainerClass) {
  const button = document.getElementById(buttonId);
  const batchSize = 24;
  let shownCards = [];
  let lastClickedButton = null;
  let firstBatchShown = false; // Флаг, чтобы отслеживать, была ли показана первая партия

  button.addEventListener("click", function() {
    const allCards = document.querySelectorAll(`.${cardContainerClass}`);

    if (button.textContent === "Ещё") {
      const hiddenCards = Array.from(allCards).filter(card => card.classList.contains("hidden"));
      const toShow = hiddenCards.slice(0, batchSize);

      toShow.forEach((card, index) => {
        card.classList.add("fade-in");
        card.classList.remove("hidden");

        setTimeout(() => {
          card.classList.add("visible");
        }, 10);

        shownCards.push(card);

        // Добавляем класс "first-batch-visible" только к первой партии показанных карточек
        if (!firstBatchShown && index < toShow.length) {
          card.classList.add("first-batch-visible");
        }

        // Получаем изображение и начинаем его отслеживать
        const image = card.querySelector('.card-img-top');
        if (image) {
          globalResizeObserver.observe(image);
        }
      });

      // Устанавливаем флаг после показа первой партии
      if (!firstBatchShown && toShow.length > 0) {
        firstBatchShown = true;
      }

      if (document.querySelectorAll(`.${cardContainerClass}.hidden`).length === 0) {
        button.textContent = "Скрыть";
        button.classList.add("red");
      }

      lastClickedButton = button;

    } else {
      shownCards.forEach(card => {
        card.classList.remove("visible");
        card.classList.add("hidden");
        card.classList.remove("fade-in");
        card.classList.remove("first-batch-visible"); // Удаляем класс при скрытии
      });
      shownCards = [];
      firstBatchShown = false; // Сбрасываем флаг при скрытии

      button.textContent = "Ещё";
      button.classList.remove("red");

      if (lastClickedButton) {
        const lastButtonRect = lastClickedButton.getBoundingClientRect();
        const lastButtonOffsetTop = lastButtonRect.top + window.scrollY;
        window.scrollTo({
          top: lastButtonOffsetTop,
          behavior: 'auto'
        });
      }
    }

    positionCardRating(); // Вызываем после показа/скрытия
  });
}

// Запуск функций
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(positionCardRating, 100);

  handleShowMoreClick("show-more-btn", "card-container");
  handleShowMoreClick("show-more-btn1", "card-container1");
  handleShowMoreClick("show-more-btn2", "card-container2");
  handleShowMoreClick("show-more-btn3", "card-container3");

  // Добавим класс "hidden" ко всем карточкам изначально, кроме первых 24 (если они есть)
  document.querySelectorAll(".card-container, .card-container1, .card-container2, .card-container3").forEach(container => {
    const cards = container.querySelectorAll(".card");
    if (cards.length > 24) {
      cards.forEach((card, index) => {
        if (index >= 24) {
          card.classList.add("hidden");
        }
      });
    } else {
      cards.forEach(card => card.classList.remove("hidden"));
    }
  });

  // Начинаем наблюдение за всеми изображениями при загрузке страницы
  document.querySelectorAll('.card-img-top').forEach(image => {
    globalResizeObserver.observe(image);
  });
});
// ссылки и блоб на фильмы

      document.addEventListener("DOMContentLoaded", function() {
      const videos = document.querySelectorAll('.hls-video');
      
      videos.forEach(video => {
        video.addEventListener('click', function initializeVideo() {
          const src = video.getAttribute('data-src');
          
          if (src) {
            fetch(src)
              .then(response => response.blob())
              .then(blob => {
                const blobUrl = URL.createObjectURL(blob); // Создаем Blob URL

                if (Hls.isSupported()) {
                  const hls = new Hls();
                  hls.loadSource(blobUrl); // Загружаем Blob-URL как источник HLS
                  hls.attachMedia(video);
                } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                  video.src = blobUrl;
                }

                video.removeEventListener('click', initializeVideo);
              })
              .catch(error => console.error('Ошибка при загрузке видео:', error));
          }
        });
      });
    });
    
// конец






// Конец



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
  // Добавляем слушатель события для начала перетаскивания (свайпа) слайдера
  splideTrend.on('drag', function () {
    if (searchInput === document.activeElement) { // Проверяем, активно ли поле поиска
        searchInput.blur(); // Убираем фокус с поля ввода
    }
});

// Также можно добавить на событие 'move' (после перемещения слайда)
splideTrend.on('move', function () {
    if (searchInput === document.activeElement) {
        searchInput.blur();
    }
});
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








