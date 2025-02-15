




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
          const updateContainer = document.getElementById('update');
          if (updateContainer) {
              updateContainer.innerHTML = `<p style="margin-left: 1.5em;">Результаты для: "${query}"</p>`;
          }
          
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

// кнопка ещё
document.getElementById("show-more-btn").addEventListener("click", function () {
  const button = this;
  const hiddenCards = document.querySelectorAll(".card-container.hidden");
  const allCards = document.querySelectorAll(".card-container");

  if (button.textContent === "Ещё") {
    // Показать до 24 карточек
    hiddenCards.forEach((card, index) => {
      if (index < 24) {
        card.classList.remove("hidden");
      }
    });

    // Проверяем, есть ли ещё скрытые карточки
    if (document.querySelectorAll(".card-container.hidden").length === 0) {
      button.textContent = "Скрыть"; // Меняем текст на "Скрыть"
      button.classList.add("red"); // Добавляем красный фон
    }
  } else {
    // Скрыть все карточки, кроме первых 6
    allCards.forEach((card, index) => {
      if (index >= 0) {
        card.classList.add("hidden");
      }
    });

    button.textContent = "Ещё"; // Меняем текст на "Ещё"
    button.classList.remove("red"); // Убираем красный фон
  }
});


// конец
// кнопка ещё
document.getElementById("show-more-btn1").addEventListener("click", function () {
  const button = this;
  const hiddenCards = document.querySelectorAll(".card-container1.hidden");
  const allCards = document.querySelectorAll(".card-container1");

  if (button.textContent === "Ещё") {
    // Показать до 24 карточек
    hiddenCards.forEach((card, index) => {
      if (index < 24) {
        card.classList.remove("hidden");
      }
    });

    // Проверяем, есть ли ещё скрытые карточки
    if (document.querySelectorAll(".card-container1.hidden").length === 0) {
      button.textContent = "Скрыть"; // Меняем текст на "Скрыть"
      button.classList.add("red"); // Добавляем красный фон
    }
  } else {
    // Скрыть все карточки, кроме первых 6
    allCards.forEach((card, index) => {
      if (index >= 0) {
        card.classList.add("hidden");
      }
    });

    button.textContent = "Ещё"; // Меняем текст на "Ещё"
    button.classList.remove("red"); // Убираем красный фон
  }
});
// конец
// кнопка ещё
document.getElementById("show-more-btn2").addEventListener("click", function () {
  const button = this;
  const hiddenCards = document.querySelectorAll(".card-container2.hidden");
  const allCards = document.querySelectorAll(".card-container2");

  if (button.textContent === "Ещё") {
    // Показать до 24 карточек
    hiddenCards.forEach((card, index) => {
      if (index < 24) {
        card.classList.remove("hidden");
      }
    });

    // Проверяем, есть ли ещё скрытые карточки
    if (document.querySelectorAll(".card-container2.hidden").length === 0) {
      button.textContent = "Скрыть"; // Меняем текст на "Скрыть"
      button.classList.add("red"); // Добавляем красный фон
    }
  } else {
    // Скрыть все карточки, кроме первых 6
    allCards.forEach((card, index) => {
      if (index >= 0) {
        card.classList.add("hidden");
      }
    });

    button.textContent = "Ещё"; // Меняем текст на "Ещё"
    button.classList.remove("red"); // Убираем красный фон
  }
});
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
    perPage: 3, // Показываем 3 карточки (слайда)
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
    perPage: 3, // Показываем 3 карточки (слайда)
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
      480: {
        gap: '28px', // При ширине экрана до 1200px
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
    perPage: 3, // Показываем 3 карточки (слайда)
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
    perPage: 3, // Показываем 3 карточки (слайда)
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
    perPage: 3, // Показываем 3 карточки (слайда)
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









