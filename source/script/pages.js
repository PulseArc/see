




// Находим элементы
const searchInput = document.getElementById('search'); // Поле ввода
const resultsContainer = document.getElementById('results-container'); // Контейнер результатов
const menuToggle = document.querySelector('#menuToggle input');
const searchWrapper = document.querySelector('.search-wrapper'); // Внешний контейнер
const clearIcon = document.querySelector('.clear-icon'); // Крестик для очистки

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
  } else {
    // Скрываем контейнер, если поле ввода пустое
    resultsContainer.style.display = 'none';
    clearIcon.style.display = 'none'; // Прячем крестик
  }
});

// Событие клика по крестик
clearIcon.addEventListener('click', () => {
  searchInput.value = ''; // Очищаем поле ввода
  resultsContainer.style.display = 'none'; // Скрываем контейнер с результатами
  clearIcon.style.display = 'none'; // Скрываем крестик
});

// Событие переключения меню
menuToggle.addEventListener('change', () => {
  if (menuToggle.checked) {
    searchWrapper.classList.add('hidden'); // Применяем класс для скрытия
  } else {
    searchWrapper.classList.remove('hidden'); // Убираем класс для показа
  }
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















$('.single-item3').slick({
  infinite: true, // Бесконечная прокрутка
  dots: true, // Точки навигации
  autoplay: true, // Автоматическая прокрутка
  autoplaySpeed: 1800,
  pauseOnFocus: true,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  swipe: true,
  touchThreshold: 10,
  slidesToShow: 5.3,
  slidesToScroll: 1,
  waitForAnimate: false,
  speed: 500,
  touchMove: true,
  responsive: [
    {
      breakpoint: 4000,
      settings: {
        slidesToShow: 5.5,
      }
    },
    {
      breakpoint: 2481,
      settings: {
        slidesToShow: 5.3,
      }
    },
    {
      breakpoint: 2228,
      settings: {
        slidesToShow: 5.3,
      }
      
    },
    {
      breakpoint: 2011,
      settings: {
        slidesToShow: 6.4,
      }
      
    },
    {
      breakpoint: 1710,
      settings: {
        slidesToShow: 6.2,
      }
    },

    {
      breakpoint: 1665,
      settings: {
        slidesToShow: 6,
      }
    },
    {
      breakpoint: 1590,
      settings: {
        slidesToShow: 5.9,
      }
    },
    {
      breakpoint: 1540,
      settings: {
        slidesToShow: 5.8,
      }
    },

    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 5.7,
      }
    },

    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5.9,
      }
    },
    {
      breakpoint: 1375,
      settings: {
        slidesToShow: 5.8,
      }
    },
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 5.7,
      }
    },
    {
      breakpoint: 1325,
      settings: {
        slidesToShow: 5.6,
      }
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 5.5,
      }
    },
    {
      breakpoint: 1275,
      settings: {
        slidesToShow: 5.4,
      }
    },
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 5.3,
      }
    },
    {
      breakpoint: 1225,
      settings: {
        slidesToShow: 5.2,
      }
    },

    {
     breakpoint: 1200,
     settings: {
       slidesToShow: 5.1,
     }
   },
   
  {
    breakpoint: 1175,
    settings: {
      slidesToShow: 5,
    }
  },
  {
    breakpoint: 1150,
    settings: {
      slidesToShow: 4.9,
    }
  },
       {
         breakpoint: 1125,
         settings: {
           slidesToShow: 4.8,
         }
       },
       {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4.7,
        }
      },
      {
        breakpoint: 1075,
        settings: {
          slidesToShow: 4.6,
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4.5,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4.4,
        }
      },

       {
         breakpoint: 1000,
         settings: {
           slidesToShow: 4.3,
         }
       },
       {
        breakpoint: 975,
        settings: {
          slidesToShow: 4.2,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 4.1,
        }
      },
      {
        breakpoint: 925,
        settings: {
          slidesToShow: 4,
        }
      },
       {
         breakpoint: 900,
         settings: {
           slidesToShow: 3.9,
         }
       },
       {
        breakpoint: 875,
        settings: {
          slidesToShow: 3.8,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3.7,
        }
      },
      {
        breakpoint: 825,
        settings: {
          slidesToShow: 3.6,
        }
      },
       {
         breakpoint: 800,
         settings: {
           slidesToShow: 3.5,
         }
       },
       {
        breakpoint: 775,
        settings: {
          slidesToShow: 3.4,
        }
      },
       {
        breakpoint: 750,
        settings: {
          slidesToShow: 3.3,
        }
      },
       {
        breakpoint: 725,
        settings: {
          slidesToShow: 3.2,
        }
      },
       {
         breakpoint: 700,
         settings: {
           slidesToShow: 3.1,
         }
       },
       {
        breakpoint: 675,
        settings: {
          slidesToShow: 3,
        }
      },
       {
        breakpoint: 650,
        settings: {
          slidesToShow: 2.9,
        }
      },
       {
        breakpoint: 625,
        settings: {
          slidesToShow: 2.7,
        }
      },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2.6,
         }
       },
       {
        breakpoint: 575,
        settings: {
          slidesToShow: 2.51,
        }
      },
       {
        breakpoint: 550,
        settings: {
          slidesToShow: 2.4,
        }
      },
      {
        breakpoint: 525,
        settings: {
          slidesToShow: 2.31,
        }
      },
       {
         breakpoint: 500,
         settings: {
           slidesToShow: 2.22,
         }
       },
       {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.1,
        }
      },
      {
        breakpoint: 465,
        settings: {
          slidesToShow: 2.05,
        }
      },
       {
         breakpoint: 450,
         settings: {
           slidesToShow: 2,
         }
       },
       {
        breakpoint: 435,
        settings: {
          slidesToShow: 1.95,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1.92,
        }
      },
       {
         breakpoint: 400,
         settings: {
           slidesToShow: 1.8,
         }
       },
       {
        breakpoint: 380,
        settings: {
          slidesToShow: 1.75,
        }
      },
      {
        breakpoint: 365,
        settings: {
          slidesToShow: 1.65,
        }
      },
       
       {
         breakpoint: 350,
         settings: {
           slidesToShow: 1.6,
         }
       },
       {
        breakpoint: 340,
        settings: {
          slidesToShow: 1.55,
        }
      }
     ]
  
 });
 $('.single-item3').on('touchstart', function (e) {
  startX = e.originalEvent.touches[0].clientX;
});

// Завершаем свайп и обрабатываем длину
$('.single-item3').on('touchend', function (e) {
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

 $('.single-item4').slick({
  infinite: true, // Бесконечная прокрутка
  dots: true, // Точки навигации
  slidesToShow: 6.1, // Показываем 5.3 слайда
  slidesToScroll: 1, // Прокручиваем минимум 1 слайд
  swipeToSlide: true, // Плавный переход при свайпе или скролле
  touchThreshold: 10, // Настройка для длинного свайпа
  responsive: [
    {
      breakpoint: 2481,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 3,
      }
    },
   
    {
    breakpoint: 1400,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 1000,
    settings: {
      slidesToShow: 1.8,
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 1.5,
    }
  },

  {
    breakpoint: 700,
    settings: {
      slidesToShow: 1.3,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1.2,
    }
  },
  
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 1,
    }
  }
]
});
