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










$('.single-item').slick({
 infinite: true,
	dots: true,
	slidesToShow: 6.1,
	slidesToScroll: 2,
	responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 5.5,
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
	        slidesToShow: 6,
	      }
	    },

      {
	      breakpoint: 900,
	      settings: {
	        slidesToShow: 5.3,
	      }
	    },
      {
	      breakpoint: 800,
	      settings: {
	        slidesToShow: 4.8,
	      }
	    },
      {
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 4.5,
	      }
	    },
      {
	      breakpoint: 650,
	      settings: {
	        slidesToShow: 4.2,
	      }
	    },
      {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 3.8,
	      }
	    },
      {
	      breakpoint: 550,
	      settings: {
	        slidesToShow: 3.6,
	      }
	    },
      {
	      breakpoint: 500,
	      settings: {
	        slidesToShow: 3.3,
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
         breakpoint: 1200,
         settings: {
           slidesToShow: 5.5,
         }
       },

       {
        breakpoint: 1190,
        settings: {
          slidesToShow: 4.5,
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
      breakpoint: 1200,
      settings: {
        slidesToShow: 5.5,
      }
    },

    {
     breakpoint: 1190,
     settings: {
       slidesToShow: 4.5,
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

