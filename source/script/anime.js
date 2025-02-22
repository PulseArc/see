

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
  "link": "/see/card/anime/100-06/Восхождение в тени.html",
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
{
    "name": "Шарлотта",
    "image": "http://image.tmdb.org/t/p/w500//rMOGHPGfuywDViL9Oc0tA29oxtA.jpg",
    "link": "/see/card/anime/100-15/Шарлотта.html",
    "year": "2015",
    "rating":"8.3"
},
{
    "name": "Семья шпиона",
    "image": "http://image.tmdb.org/t/p/w500//xMqGSPjjnc4awD4R8JrRTW0IGOt.jpg",
    "link": "/see/card/anime/100-16/Семья шпиона.html",
    "year": "2022",
    "rating":"8.6"
},
{
    "name": "Борьба в прямом эфире",
    "image": "http://image.tmdb.org/t/p/w500//fJw0XoP3t1VNhKLqanyxVOMxjwX.jpg",
    "link": "/see/card/anime/100-17/Борьба в прямом эфире.html",
    "year": "2024",
    "rating":"8.3"
},
{
    "name": "Врата Штейна 0",
    "image": "http://image.tmdb.org/t/p/w500//qpd4qivQAVnJ7Zz6QFCE9km5Jiu.jpg",
    "link": "/see/card/anime/100-18/Врата Штейна 0.html",
    "year": "2018",
    "rating":"8.0"
},
{
    "name": "Ох, уж этот экстрасенс Сайки Кусуо!",
    "image": "http://image.tmdb.org/t/p/w500//hqOIldYJTq8eI1APi4tx4rZuiHe.jpg",
    "link": "/see/card/anime/100-19/Ох, уж этот экстрасенс Сайки Кусуо.html",
    "year": "2016",
    "rating":"8.3"
},
{
    "name": "Ван-Пис",
    "image": "http://image.tmdb.org/t/p/w500//osRT8GsND3PfhvevsS5DK9px0LI.jpg",
    "link": "/see/card/anime/100-20/Ван-Пис.html",
    "year": "1999",
    "rating":"8.7"
},
{
    "name": "Добро пожаловать в N.H.K.",
    "image": "http://image.tmdb.org/t/p/w500//5iXnyp9zQb3tNTSOXn0rAJOlxu0.jpg",
    "link": "/see/card/anime/100-21/Добро пожаловать в N.H.K..html",
    "year": "2006",
    "rating":"8.5"
},
{
    "name": "Атака титанов",
    "image": "http://image.tmdb.org/t/p/w500//p5nYJj1N5pVMUixtyIJtfkw1FEr.jpg",
    "link": "/see/card/anime/100-22/Атака титанов.html",
    "year": "2013",
    "rating":"8.7"
},
{
    "name": "Драконий жемчуг супер",
    "image": "http://image.tmdb.org/t/p/w500//9gzkpjs6N7Xxo1CnnJqhFtmYCez.jpg",
    "link": "/see/card/anime/100-23/Драконий жемчуг супер.html",
    "year": "2015",
    "rating":"8.2"
},
{
    "name": "Волейбол!!",
    "image": "http://image.tmdb.org/t/p/w500//5lrJDEQjwCJPLdlfhBmJ8mfpnpX.jpg",
    "link": "/see/card/anime/100-24/Волейбол.html",
    "year": "2014",
    "rating":"8.6"
},
{
    "name": "Мартовский лев",
    "image": "http://image.tmdb.org/t/p/w500//ufgAYwzv6N2JrOWwyAkoGKMlMbo.jpg",
    "link": "/see/card/anime/100-25/Мартовский лев.html",
    "year": "2016",
    "rating":"7.9"
},
{
    "name": "Истребитель демонов",
    "image": "http://image.tmdb.org/t/p/w500//zg3GrU3jAoTGxmlGGhkfNYMOHlb.jpg",
    "link": "/see/card/anime/100-26/Истребитель демонов.html",
    "year": "2019",
    "rating":"8.7"
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