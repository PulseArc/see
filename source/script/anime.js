

// Генерация карточек с случайными рейтингами
// Мультфильмы
document.addEventListener('DOMContentLoaded', function () {
    generateRandomCards();
});

function generateRandomCards() {
    var cardData = [
        {
            "name": "Башня Бога",
            "image": "http://image.tmdb.org/t/p/w500//m4FQUNPbxonuv4kcFm1YgyRgl2C.jpg",
            "link": "/see/card/anime/100-01/Башня Бога.html",
            "year": "2020",
            "rating":"8.3"
        },
        {
          "name": "Поднятие уровня в одиночку",
          "image": "http://image.tmdb.org/t/p/w500//gjemx47qD8xtuuGcsdWqlFXWR0b.jpg",
          "link": "/see/card/anime/100-02/Поднятие уровня в одиночку.html",
          "year": "2024",
          "rating":"8.5"
      },
      {
        "name": "Наруто: Ураганные хроники",
        "image": "http://image.tmdb.org/t/p/w500//dIRmrc4XwLJWc3eTCe7KaOYJdKX.jpg",
        "link": "/see/card/anime/100-03/Наруто Ураганные хроники.html",
        "year": "2007",
        "rating":"8.5"
    },
    {
      "name": "Блич",
      "image": "http://image.tmdb.org/t/p/w500//nqOO3OmDpTsSgVLUZn2T1Dr2mcV.jpg",
      "link": "/see/card/anime/100-04/Блич.html",
      "year": "2004",
      "rating":"8.4"
  },
  {
    "name": "Ванпанчмен",
    "image": "http://image.tmdb.org/t/p/w500//nhq66gOdiAp5mnNbVsxAonliffa.jpg",
    "link": "/see/card/anime/100-05/Ванпанчмен.html",
    "year": "2015",
    "rating":"8.5"
},
    
        // конец
       
        
    ];

    var cardContainer = $('#card-container'); 

    // Очищаем контейнер перед добавлением новых карточек
    cardContainer.html("");

    // Перемешиваем карточки случайным образом
    cardData = shuffleArray(cardData);

    var count = 0; 

    cardData.forEach(function (val) {
        if (count >= 15) return;

        var randomRating = val.rating;

        var cardHTML = `
        <li class="splide__slide">
            <div class="card card-media" style="width: 12rem" data-rating="${randomRating}">
                <a href="${val.link}">
                    <img src="${val.image}" class="card-img-top img-9x16 mt-2" alt="${val.name}">
                    <div class="card-rating-trand" bis_skin_checked="1">
                        <span class="span-rating">${randomRating}</span>
                    </div>
                    <div class="card-body">
                        <span class="card-tex">${val.name}<br><span class="year">${val.year}</span></span>
                    </div>
                </a>
            </div>
        </li>
        `;

        // Добавляем карточку в контейнер
        cardContainer.append(cardHTML);

        count++;
    });

    // Инициализируем Splide после добавления карточек
    new Splide('#Collections', {
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
}

// Функция перемешивания массива
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

