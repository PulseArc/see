// кнопки со счётчиком
function fn(a) {
  var n = 0;
  while (a >= 1000) {
    a /= 1000;
    n++;
  }
  return +a.toFixed(1) + (["", "K", "M", "B", "T"][n] || "");
}

$(document).ready(function () {
  $(".full-smile-rate").each(function () {
    let value = parseInt($(this).attr("data-value"), 10);
    if (!isNaN(value)) {
      $(this).text(fn(value));
    }
  });

  $(".full-smile-rate-warp").click(function () {
    let countElement = $(this).find(".full-smile-rate");
    let icon = $(this).find(".reaction-icon");

    if (countElement.length && icon.length) {
      let currentCount = parseInt(countElement.attr("data-value"), 10); // Берём актуальное значение

      if (isNaN(currentCount)) {
        currentCount = 0; 
      }

      if ($(this).hasClass("clicked")) {
        return;
      }

      $(this).addClass("clicked");

      if (countElement.hasClass("clicked")) {
        let newCount = currentCount - 1;
        countElement.attr("data-value", newCount); // Обновляем data-value
        countElement.text(fn(newCount));
        countElement.removeClass("clicked");
      } else {
        icon.addClass("shake");

        setTimeout(() => {
          icon.removeClass("shake");
          icon.css({ transition: "transform 0.3s ease-in-out", transform: "scale(1.3)" });

          setTimeout(() => {
            icon.css("transform", "scale(1)");
          }, 300);
        }, 300);

        countElement.css({ transition: "transform 0.3s ease-in-out", transform: "scale(1.5)", opacity: "0" });

        setTimeout(() => {
          let newCount = currentCount + 1;
          countElement.attr("data-value", newCount); // Обновляем data-value
          countElement.text(fn(newCount));
          countElement.css({ transform: "scale(1)", opacity: "1" });
        }, 300);

        countElement.addClass("clicked");
      }

      setTimeout(() => {
        $(this).removeClass("clicked");
      }, 600);
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
  const menuToggle = document.querySelector('#menuToggle input');
  const searchWrapper = document.querySelector('.search-wrapper'); // Внешний контейнер
  const clearIcon = document.querySelector('.clear-icon'); // Крестик для очистки
  const phoneVersion = document.querySelector('.Phone-version'); // Блок Phone-version
  const hero = document.querySelector('.hero'); // Блок hero

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
          if (phoneVersion) {
              phoneVersion.style.marginTop = '4em';
          }

          // Устанавливаем marginTop для hero, если есть результат
          if (hero) {
              hero.style.marginTop = '-1em';
          }
      } else {
          // Скрываем контейнер, если поле ввода пустое
          resultsContainer.style.display = 'none';
          clearIcon.style.display = 'none'; // Прячем крестик

          // Плавно убираем marginTop, если поиск сброшен
          if (phoneVersion) {
              phoneVersion.style.marginTop = '';
          }

          // Плавно убираем marginTop для hero, если поиск сброшен
          if (hero) {
              hero.style.marginTop = '';
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
      if (phoneVersion) {
          phoneVersion.style.marginTop = '';
      }

      // Плавно возвращаем marginTop для hero, если результаты скрыты
      if (hero) {
          hero.style.marginTop = '';
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



