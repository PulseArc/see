// кнопки со счётчиком
$(document).ready(function() {
  $(".full-smile-rate-warp").click(function() {
      let countElement = $(this).find(".full-smile-rate"); // Получаем элемент для изменения числа
      let icon = $(this).find(".reaction-icon");

      if (countElement.length && icon.length) {
          let currentCount = parseInt(countElement.text());

          // Если элемент уже был кликнут, блокируем повторный клик
          if ($(this).hasClass("clicked")) {
              return;
          }

          $(this).addClass("clicked"); // Блокируем дальнейшие клики

          if (countElement.hasClass("clicked")) {
              // Если уже нажали, то убираем клик и уменьшаем число
              countElement.text(currentCount - 1);
              countElement.removeClass("clicked");
          } else {
              // Добавляем анимацию тряски для иконки
              icon.addClass("shake");

              setTimeout(() => {
                  icon.removeClass("shake");

                  // Увеличение иконки
                  icon.css({
                      transition: "transform 0.3s ease-in-out",
                      transform: "scale(1.3)"
                  });

                  setTimeout(() => {
                      icon.css("transform", "scale(1)");
                  }, 300);
              }, 300);

              // Анимация изменения числа
              countElement.css({
                  transition: "transform 0.3s ease-in-out",
                  transform: "scale(1.5)",
                  opacity: "0"
              });

              setTimeout(() => {
                  countElement.text(currentCount + 1);
                  countElement.css({
                      transform: "scale(1)",
                      opacity: "1"
                  });
              }, 300);

              countElement.addClass("clicked");
          }

          // Разблокировка кликов после завершения анимации
          setTimeout(() => {
              $(this).removeClass("clicked");
          }, 600); // Время, равное продолжительности анимации
      }
  });
});
// конец

// Кнопка лайк дизлайк
document.querySelectorAll('.kQnZoL').forEach(button => {
  button.addEventListener('click', function() {
    // Проверяем, если кнопка уже активна
    if (this.classList.contains('active')) {
      // Если кнопка уже активна, то снимаем с нее класс active
      this.classList.remove('active');
    } else {
      // Если кнопка не активна, то делаем ее активной
      this.classList.add('active');
      
      // Получаем соседние кнопки (лайк и дизлайк)
      const otherButton = this.closest('.Button-Border-Radius').classList.contains('Like') 
        ? document.querySelector('.Dislike .kQnZoL') 
        : document.querySelector('.Like .kQnZoL');
        
      // Снимаем активность с другой кнопки
      otherButton.classList.remove('active');
    }
  });
});
// конец



// Находим элементы
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search'); // Поле ввода
  const resultsContainer = document.getElementById('results-container'); // Контейнер результатов
  const menuToggle = document.querySelector('#menuCheckbox'); // Чекбокс меню
  const searchWrapper = document.querySelector('.search-wrapper'); // Внешний контейнер
  const clearIcon = document.querySelector('.clear-icon'); // Крестик для очистки
  const phoneVersion = document.querySelector('.Phone-version'); // Блок, которому меняем margin

  searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim(); // Получаем текст из поля поиска
      
      if (query.length > 0) {
          // Показываем контейнер с результатами, если есть текст
          resultsContainer.style.display = 'block';
          clearIcon.style.display = 'inline'; // Показываем крестик
          
          // Логика обновления содержимого результатов
          const updateContainer = document.getElementById('update');
          updateContainer.innerHTML = `<p>Результаты для: "${query}"</p>`;
          
          // Прокрутка страницы вверх
          window.scrollTo({
              top: 0, // Начало страницы
              behavior: 'smooth' // Плавная прокрутка
          });

          // Добавляем margin-top: 12vh к .Phone-version
          if (phoneVersion) {
              phoneVersion.style.marginTop = '8vh';
          }
      } else {
          // Скрываем контейнер, если поле ввода пустое
          resultsContainer.style.display = 'none';
          clearIcon.style.display = 'none'; // Прячем крестик

          // Убираем margin-top, если поиск сброшен
          if (phoneVersion) {
              phoneVersion.style.marginTop = '';
          }
      }
  });

  // Событие клика по крестику
clearIcon.addEventListener('click', () => {
    searchInput.value = ''; // Очищаем поле ввода
    resultsContainer.style.display = 'none'; // Скрываем контейнер с результатами
    clearIcon.style.display = 'none'; // Скрываем крестик
    searchInput.blur(); // Убираем фокус, скрывая клавиатуру
  });
  
  // Скрытие клавиатуры при нажатии Enter
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Предотвращаем стандартное поведение формы
      searchInput.blur(); // Убираем фокус с поля, скрывая клавиатуру
    }
  });

  // Событие переключения меню
  menuToggle.addEventListener('change', () => {
      if (menuToggle.checked) {
          searchWrapper.classList.add('hidden'); // Применяем класс для скрытия
      } else {
          searchWrapper.classList.remove('hidden'); // Убираем класс для показа
      }
  });
});






document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector('.navbar');
  const navbarPlaceholder = document.querySelector('.navbar-placeholder');
  const navbarHeight = navbar.offsetHeight;

  window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
          navbar.classList.add('scrolled');
          navbarPlaceholder.style.display = 'block'; // Показываем фиктивный элемент
          navbarPlaceholder.style.height = `${navbarHeight}px`; // Устанавливаем высоту фиктивного элемента
      } else {
          navbar.classList.remove('scrolled');
          navbarPlaceholder.style.display = 'none'; // Скрываем фиктивный элемент
      }
  });
});



// ссылки и блоб на фильмы

document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('play-video-btn');
  const iframe = document.querySelector('.video-js');
  
  if (!iframe) {
    console.error('Видео iframe не найден');
    return;
  }

  playButton.addEventListener('click', () => {
    const src = iframe.getAttribute('src');
    iframe.setAttribute('src', src + '?autoplay=1');
  });
});

    
// конец



$(document).ready(function () {
    let startX = 0;
    let swipeDistance = 0;
  
  
  $('.single-item').slick({
    infinite: true, // Бесконечная прокрутка
    dots: true, // Точки навигации
    autoplay: true, // Автоматическая прокрутка
    autoplaySpeed: 2000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    swipe: true,
    touchThreshold: 10,
    slidesToShow: 6.1,
    slidesToScroll: 1,
    waitForAnimate: false,
    speed: 500,
    touchMove: true,
    responsive:  [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 7,
        }
      },
      
      {
        breakpoint: 1710,
        settings: {
          slidesToShow: 7,
        }
      },
  
      {
        breakpoint: 1665,
        settings: {
          slidesToShow: 7.5,
        }
      },
      {
        breakpoint: 1590,
        settings: {
          slidesToShow: 7.4,
        }
      },
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 7.2,
        }
      },
  
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 7.4,
        }
      },
  
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 1375,
        settings: {
          slidesToShow: 6.7,
        }
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 6.6,
        }
      },
      {
        breakpoint: 1325,
        settings: {
          slidesToShow: 6.5,
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6.2,
        }
      },
     
      {
        breakpoint: 1275,
        settings: {
          slidesToShow: 6.1,
        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1225,
        settings: {
          slidesToShow: 5.9,
        }
      },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5.8,
            }
          },
        {
            breakpoint: 1175,
            settings: {
              slidesToShow: 5.7,
            }
          },
        {
            breakpoint: 1150,
            settings: {
              slidesToShow: 5.6,
            }
          },
        {
            breakpoint: 1125,
            settings: {
              slidesToShow: 5.5,
            }
          },
        {
            breakpoint: 1100,
            settings: {
              slidesToShow: 5.2,
            }
          },
  
        {
            breakpoint: 1075,
            settings: {
              slidesToShow: 5.1,
            }
          },
        {
            breakpoint: 1050,
            settings: {
              slidesToShow: 5,
            }
          },
        {
            breakpoint: 1025,
            settings: {
              slidesToShow: 4.9,
            }
          },
        {
            breakpoint: 1000,
            settings: {
              slidesToShow: 4.7,
            }
          },
        {
            breakpoint: 975,
            settings: {
              slidesToShow: 4.6,
            }
          },
        {
            breakpoint: 950,
            settings: {
              slidesToShow: 4.5,
            }
          },
        {
            breakpoint: 925,
            settings: {
              slidesToShow: 4.4,
            }
          },
        {
            breakpoint: 900,
            settings: {
              slidesToShow: 4.3,
            }
          },
        {
            breakpoint: 875,
            settings: {
              slidesToShow: 4.2,
            }
          },
        {
            breakpoint: 850,
            settings: {
              slidesToShow: 4.1,
            }
          },
        {
            breakpoint: 825,
            settings: {
              slidesToShow: 4,
            }
          },
        {
            breakpoint: 800,
            settings: {
              slidesToShow: 3.9,
            }
          },
        {
            breakpoint: 775,
            settings: {
              slidesToShow: 3.8,
            }
          },
        {
            breakpoint: 750,
            settings: {
              slidesToShow: 3.7,
            }
          },
        {
            breakpoint: 725,
            settings: {
              slidesToShow: 3.6,
            }
          },
        {
            breakpoint: 700,
            settings: {
              slidesToShow: 3.4,
            }
          },
        {
            breakpoint: 675,
            settings: {
              slidesToShow: 3.3,
            }
          },
        {
            breakpoint: 650,
            settings: {
              slidesToShow: 3.2,
            }
          },
        {
            breakpoint: 625,
            settings: {
              slidesToShow: 3.1,
            }
          },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 2.9,
            }
          },
        {
            breakpoint: 575,
            settings: {
              slidesToShow: 2.8,
            }
          },
        {
            breakpoint: 550,
            settings: {
              slidesToShow: 2.7,
            }
          },
        {
            breakpoint: 525,
            settings: {
              slidesToShow: 2.6,
            }
          },
        {
            breakpoint: 500,
            settings: {
              slidesToShow: 2.5,
            }
          },
        {
            breakpoint: 480.05,
            settings: {
              slidesToShow: 3.05,
            }
          },
        {
            breakpoint: 475,
            settings: {
              slidesToShow: 3,
            }
          },
       
  
        {
            breakpoint: 450,
            settings: {
              slidesToShow: 2.9,
            }
          },
        {
            breakpoint: 425,
            settings: {
              slidesToShow: 2.8,
            }
          },
        {
            breakpoint: 415,
            settings: {
              slidesToShow: 2.72,
            }
          },
        {
            breakpoint: 400,
            settings: {
              slidesToShow: 2.6,
            }
          },
  
        {
            breakpoint: 375,
            settings: {
              slidesToShow: 2.5,
            }
          },
          {
            breakpoint: 350,
            settings: {
              slidesToShow: 2.4,
            }
          },
        {
            breakpoint: 340,
            settings: {
              slidesToShow: 2.21,
            }
          },
      ]
  });
  
  $('.single-item').on('touchstart', function (e) {
    startX = e.originalEvent.touches[0].clientX;
  });
  
  // Завершаем свайп и обрабатываем длину
  $('.single-item').on('touchend', function (e) {
    const endX = e.originalEvent.changedTouches[0].clientX;
    swipeDistance = Math.abs(endX - startX);
  
    const slider = $(this).slick('getSlick');
  
    if (swipeDistance > 200) {
      // Длинный свайп: сдвигаем на 5 слайдов
      const direction = endX < startX ? 1 : -1; // Определяем направление свайпа
      const nextSlide = slider.currentSlide + direction * 5; // Переход на 5 слайдов
      slider.slickGoTo(nextSlide);
    }
  });
  });



