







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




// кнопка ещё


// конец


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





document.addEventListener('DOMContentLoaded', function () {
  new Splide('#image-slider', {
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






// Рейтинг

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
 