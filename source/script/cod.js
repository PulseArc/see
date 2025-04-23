




// Находим элементы
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search'); // Поле ввода
  const resultsContainer = document.getElementById('results-container'); // Контейнер результатов
  const menuToggle = document.querySelector('#menuToggle input');
  const searchWrapper = document.querySelector('.search-wrapper'); // Внешний контейнер
  const clearIcon = document.querySelector('.clear-icon'); // Крестик для очистки
  const homeBackgroundImage = document.querySelector('.Home-background-image'); // Блок, которому меняем margin

  // Проверяем, существуют ли элементы перед тем, как с ними работать
  if (!searchInput || !resultsContainer || !clearIcon) return;

  searchInput.addEventListener('input', () => {
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
      if (event.key === 'Enter') {
          event.preventDefault(); // Предотвращаем стандартное поведение формы
          searchInput.blur(); // Убираем фокус с поля, скрывая клавиатуру
      }
  });

  // Событие переключения меню
  if (menuToggle && searchWrapper) {
      menuToggle.addEventListener('change', () => {
          if (menuToggle.checked) {
              searchWrapper.classList.add('hidden'); // Применяем класс для скрытия
          } else {
              searchWrapper.classList.remove('hidden'); // Убираем класс для показа
          }
      });
  }
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
function handleShowMoreClick(buttonId, cardContainerClass) {
  const button = document.getElementById(buttonId);
  const batchSize = 24;
  let shownCards = [];
  let lastClickedButton = null; // Переменная для хранения кнопки, на которую кликнули

  button.addEventListener("click", function () {
    const allCards = document.querySelectorAll(`.${cardContainerClass}`);

    if (button.textContent === "Ещё") {
      // Находим скрытые карточки
      const hiddenCards = Array.from(allCards).filter(card => card.classList.contains("hidden"));

      // Показать максимум 24 карточки
      const toShow = hiddenCards.slice(0, batchSize);
      toShow.forEach(card => {
        card.classList.remove("hidden");
        shownCards.push(card);
      });

      // Если больше нет скрытых карточек, меняем кнопку
      if (document.querySelectorAll(`.${cardContainerClass}.hidden`).length === 0) {
        button.textContent = "Скрыть";
        button.classList.add("red");
      }
      
      // Запоминаем кнопку, на которую кликнули
      lastClickedButton = button;
    } else {
      // Запоминаем текущую позицию перед скрытием
      const scrollY = window.scrollY;
      const rect = button.getBoundingClientRect();
      const offsetTop = rect.top + scrollY;

      // Скрываем только те карточки, которые были показаны кнопкой
      shownCards.forEach(card => card.classList.add("hidden"));
      shownCards = [];

      // Меняем текст кнопки и убираем красный фон
      button.textContent = "Ещё";
      button.classList.remove("red");

      // Возвращаем скролл обратно к кнопке, на которую кликнули
      if (lastClickedButton) {
        const lastButtonRect = lastClickedButton.getBoundingClientRect();
        const lastButtonOffsetTop = lastButtonRect.top + window.scrollY;
        window.scrollTo({
          top: lastButtonOffsetTop,
          behavior: 'auto' // Плавное прокручивание можно заменить на 'auto' для чёткости
        });
      }
    }

    positionCardRating();
  });
}

// Запуск функции для обработки нажатия кнопки "Ещё"
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(positionCardRating, 100);

  handleShowMoreClick("show-more-btn", "card-container");
  handleShowMoreClick("show-more-btn1", "card-container1");
  handleShowMoreClick("show-more-btn2", "card-container2");
  handleShowMoreClick("show-more-btn3", "card-container3");
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








