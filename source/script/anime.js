

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
          "image": "http://image.tmdb.org/t/p/w500//orLdJQCcC1Lq13xt62P2xJycyAL.jpg",
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
{
  "name": "Восхождение в тени!",
  "image": "http://image.tmdb.org/t/p/w500//eRwEUoIPJ6hNUalD848Ud4F77gZ.jpg",
  "link": "/see/card/anime/100-05/Ванпанчмен.html",
  "year": "2022",
  "rating":"8.1"
},
{
  "name": "Магическая битва",
  "image": "http://image.tmdb.org/t/p/w500//rcHnYQHyFRpl9uOltPQILx8Cnla.jpg",
  "link": "/see/card/anime/100-07/Магическая битва.html",
  "year": "2020",
  "rating":"8.6"
},
{
  "name": "Баскетбол Куроко",
  "image": "http://image.tmdb.org/t/p/w500//ftT1qtT6yWO5rfs237a466N8QRr.jpg",
  "link": "/see/card/anime/100-08/Баскетбол Куроко.html",
  "year": "2012",
  "rating":"8.5"
},
{
  "name": "Дорохедоро",
  "image": "http://image.tmdb.org/t/p/w500//lzngNiuEmUYj7oKB5ZWrJggUXFL.jpg",
  "link": "/see/card/anime/100-09/Дорохедоро.html",
  "year": "2020",
  "rating":"8.3"
},
{
  "name": "Человек-бензопила",
  "image": "http://image.tmdb.org/t/p/w500//92Ds0hOHObvZBekqneimrGpxyXh.jpg",
  "link": "/see/card/anime/100-10/Человек-бензопила.html",
  "year": "2022",
  "rating":"8.6"
},
{
  "name": "Дороро",
  "image": "http://image.tmdb.org/t/p/w500//oudk6QIrLLtMlmVBBQoheNzcqeI.jpg",
  "link": "/see/card/anime/100-11/Дороро.html",
  "year": "2019",
  "rating":"8.6"
},
{
  "name": "Чёрный клевер",
  "image": "http://image.tmdb.org/t/p/w500//vcsAzsoSJEHgJZ29EkxXWSEVbDN.jpg",
  "link": "/see/card/anime/100-12/Чёрный клевер.html",
  "year": "2017",
  "rating":"8.5"
},
{
  "name": "Магия и мускулы",
  "image": "http://image.tmdb.org/t/p/w500//vp3oSq3XUSDeSjv4fvSVlT4mleC.jpg",
  "link": "/see/card/anime/100-13/Магия и мускулы.html",
  "year": "2023",
  "rating":"8.3"
},
{
  "name": "Школа-тюрьма",
  "image": "http://image.tmdb.org/t/p/w500//50eY9B9JtWcG0KuY5SS1X7E9wQb.jpg",
  "link": "/see/card/anime/100-14/Школа-тюрьма.html",
  "year": "2015",
  "rating":"8.1"
},
    
        // конец
       
        
      ];

      var cardContainer = $('#card-container'); 
  
      // Очищаем контейнер перед добавлением новых карточек
      cardContainer.html("");
  
      // Перемешиваем карточки случайным образом
      cardData = shuffleArray(cardData);
  
      var count = 0; 
  
      // Получаем название фильма из элемента с id="movie-title"
      var movieTitle = $('#movie-title').text().trim();
  
      cardData.forEach(function (val) {
          // Проверяем, совпадает ли название карточки с movieTitle
          if (val.name === movieTitle) return;
  
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
          gap: '40px',
          pauseOnHover: true,
          pauseOnFocus: true,
          arrows: true,
          pagination: false,
          drag: true,
          perPage: 3,
          breakpoints: {
              5000: {
                  gap: '23px',
                  perPage: 3,
              },
              2299.5: {
                  gap: '20px',
                  perPage: 3,
              },
              2018.5: {
                  gap: '18px',
                  perPage: 3,
              },
              1899.5: {
                  gap: '18px',
                  perPage: 3,
              },
              1704.5: {
                  gap: '12px',
                  perPage: 3,
              },
              1520.5: {
                  gap: '12px',
                  perPage: 3,
              },
              1320.5: {
                  gap: '28px',
                  perPage: 3,
              },
              1050: {
                  gap: '12px',
                  perPage: 3,
              },
              480: {
                  gap: '12px',
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