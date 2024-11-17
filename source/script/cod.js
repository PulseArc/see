

const menuToggle = document.querySelector('#menuToggle input');
const searchWrapper = document.querySelector('.search-wrapper');

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
document.getElementById("show-more-btn").addEventListener("click", function() {
  // Находим все скрытые карточки
  const hiddenCards = document.querySelectorAll(".card-container.hidden");
  hiddenCards.forEach((card, index) => {
      // Показываем определенное количество карточек
      if (index < 6) {
          card.classList.remove("hidden");
      }
  });

  // Если больше нет скрытых карточек, скрываем кнопку
  if (document.querySelectorAll(".card-container.hidden").length === 0) {
      document.getElementById("show-more-btn").style.display = "none";
  }
});
// конец
// кнопка ещё
document.getElementById("show-more-btn1").addEventListener("click", function() {
  // Находим все скрытые карточки
  const hiddenCards = document.querySelectorAll(".card-container1.hidden");
  hiddenCards.forEach((card, index) => {
      // Показываем определенное количество карточек
      if (index < 6) {
          card.classList.remove("hidden");
      }
  });

  // Если больше нет скрытых карточек, скрываем кнопку
  if (document.querySelectorAll(".card-container.hidden").length === 0) {
      document.getElementById("show-more-btn").style.display = "none";
  }
});
// конец
// кнопка ещё
document.getElementById("show-more-btn2").addEventListener("click", function() {
  // Находим все скрытые карточки
  const hiddenCards = document.querySelectorAll(".card-container2.hidden");
  hiddenCards.forEach((card, index) => {
      // Показываем определенное количество карточек
      if (index < 6) {
          card.classList.remove("hidden");
      }
  });

  // Если больше нет скрытых карточек, скрываем кнопку
  if (document.querySelectorAll(".card-container.hidden").length === 0) {
      document.getElementById("show-more-btn").style.display = "none";
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







$('.single-item').slick({
 infinite: true,
	dots: true,
	slidesToShow: 6.1,
	slidesToScroll: 2,
	responsive: [
    {
      breakpoint: 2481,
      settings: {
        slidesToShow: 8.2,
      }
    },
    {
      breakpoint: 2228,
      settings: {
        slidesToShow: 7.9,
      }
    },
    {
      breakpoint: 1710,
      settings: {
        slidesToShow: 7.7,
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
      breakpoint: 1300,
      settings: {
        slidesToShow: 6.1,
      }
    },
   

	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 5.6,
	      }
	    },

      {
	      breakpoint: 1100,
	      settings: {
	        slidesToShow: 5,
	      }
	    },

      {
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 4.8,
	      }
	    },

      {
	      breakpoint: 900,
	      settings: {
	        slidesToShow: 4.3,
	      }
	    },
      {
	      breakpoint: 800,
	      settings: {
	        slidesToShow: 4,
	      }
	    },
      {
	      breakpoint: 750,
	      settings: {
	        slidesToShow: 3.8,
	      }
	    },
      {
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 3.6,
	      }
	    },
      {
	      breakpoint: 650,
	      settings: {
	        slidesToShow: 3.4,
	      }
	    },
      {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
      {
	      breakpoint: 550,
	      settings: {
	        slidesToShow: 2.7,
	      }
	    },
      {
	      breakpoint: 500,
	      settings: {
	        slidesToShow: 2.6,
	      }
	    },

      {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 3.2,
	      }
	    },
     

      {
	      breakpoint: 450,
	      settings: {
	        slidesToShow: 2.9,
	      }
	    },

      {
	      breakpoint: 400,
	      settings: {
	        slidesToShow: 2.6,
	      }
	    },

      
	    {
	      breakpoint: 350,
	      settings: {
	        slidesToShow: 2.2,
	      }
	    }
    ]
});





$('.single-item2').slick({
  infinite: true,
   dots: true,
   slidesToShow: 5.3,
   slidesToScroll: 1,
   responsive: [
    {
      breakpoint: 2481,
      settings: {
        slidesToShow: 8.2,
      }
    },
    {
      breakpoint: 2228,
      settings: {
        slidesToShow: 7.7,
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
        slidesToShow: 5.5,
      }
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 5.6,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5.4,
      }
    },

    {
     breakpoint: 1190,
     settings: {
       slidesToShow: 5.1,
     }
   },
 
       {
         breakpoint: 1130,
         settings: {
           slidesToShow: 4.3,
         }
       },
 
       {
         breakpoint: 1000,
         settings: {
           slidesToShow: 4.1,
         }
       },
 
       {
         breakpoint: 900,
         settings: {
           slidesToShow: 3.6,
         }
       },
       {
         breakpoint: 800,
         settings: {
           slidesToShow: 3.3,
         }
       },
       {
         breakpoint: 700,
         settings: {
           slidesToShow: 2.7,
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2.5,
         }
       },
       {
        breakpoint: 550,
        settings: {
          slidesToShow: 2.3,
        }
      },
       {
         breakpoint: 500,
         settings: {
           slidesToShow: 2,
         }
       },
 
       {
         breakpoint: 450,
         settings: {
           slidesToShow: 1.8,
         }
       },
 
       {
         breakpoint: 400,
         settings: {
           slidesToShow: 1.6,
         }
       },
 
       
       {
         breakpoint: 350,
         settings: {
           slidesToShow: 1.5,
         }
       }
     ]
 });

 $('.single-item3').slick({
  infinite: true,
   dots: true,
   slidesToShow: 5.3,
   slidesToScroll: 1,
   responsive: [
    {
      breakpoint: 2481,
      settings: {
        slidesToShow: 8.2,
      }
    },
    {
      breakpoint: 2228,
      settings: {
        slidesToShow: 7.7,
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
        slidesToShow: 5.5,
      }
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 5.6,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5.4,
      }
    },

    {
     breakpoint: 1190,
     settings: {
       slidesToShow: 5.1,
     }
   },

    {
      breakpoint: 1130,
      settings: {
        slidesToShow: 4.3,
      }
    },

    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4.1,
      }
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3.6,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3.3,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2.7,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.5,
      }
    },
    {
     breakpoint: 550,
     settings: {
       slidesToShow: 2.3,
     }
   },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
      }
    },

    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1.8,
      }
    },

    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1.6,
      }
    },

    
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1.5,
      }
    }
  ]
 });

 $('.single-item4').slick({
  infinite: true,
   dots: true,
   slidesToShow: 6.1,
   slidesToScroll: 1,
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
