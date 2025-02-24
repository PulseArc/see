

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
{
    "name": "Баки",
    "image": "http://image.tmdb.org/t/p/w500//6n3DLulcCLbHbkQiC9KBHUbZfGr.jpg",
    "link": "/see/card/anime/100-27/Баки.html",
    "year": "2001",
    "rating":"8.1"
},
{
    "name": "НАНА",
    "image": "http://image.tmdb.org/t/p/w500//5XyTQaZcWgn1iqSuxsh5FRzuJjB.jpg",
    "link": "/see/card/anime/100-28/НАНА.html",
    "year": "2006",
    "rating":"8.4"
},
{
    "name": "Моя геройская академия",
    "image": "http://image.tmdb.org/t/p/w500//aqOnGXW5eCQpfyx74Lu3GTt0AXU.jpg",
    "link": "/see/card/anime/100-29/Моя геройская академия.html",
    "year": "2016",
    "rating":"8.6"
},
{
    "name": "Страстное Сердце: Дикий Бомбардир",
    "image": "http://image.tmdb.org/t/p/w500//b0yW5cQX97QfhXeJU9kbQ4UYj9V.jpg",
    "link": "/see/card/anime/100-30/Страстное Сердце Дикий Бомбардир.html",
    "year": "2002",
    "rating":"7.9"
},
{
    "name": "Дарованный",
    "image": "http://image.tmdb.org/t/p/w500//gIZtv9fPZMsITHu2PSGiFnEQqHq.jpg",
    "link": "/see/card/anime/100-31/Дарованный.html",
    "year": "2019",
    "rating":"8.6"
},
{
    "name": "Летнее время",
    "image": "http://image.tmdb.org/t/p/w500//gyf39hodpr1qJzUXGFuGNlxysdi.jpg",
    "link": "/see/card/anime/100-32/Летнее время.html",
    "year": "2022",
    "rating":"8.2"
},
{
    "name": "Стальной Алхимик: Братство",
    "image": "http://image.tmdb.org/t/p/w500//n2M0BslYmciTcxHc0SpwSljujUG.jpg",
    "link": "/see/card/anime/100-33/Стальной Алхимик Братство.html",
    "year": "2009",
    "rating":"8.7"
},
{
    "name": "Юри на льду",
    "image": "http://image.tmdb.org/t/p/w500//uwHOl8SLvGcbumIlpHgFAqVCEb2.jpg",
    "link": "/see/card/anime/100-34/Юри на льду.html",
    "year": "2016",
    "rating":"8.6"
},
{
    "name": "Семь смертных грехов",
    "image": "http://image.tmdb.org/t/p/w500//rRZdyqqRAn1h45oNpA69NehQLcI.jpg",
    "link": "/see/card/anime/100-35/Семь смертных грехов.html",
    "year": "2014",
    "rating":"8.4"
},
{
    "name": "Пес и Пускающая в ход ножницы",
    "image": "http://image.tmdb.org/t/p/w500//aOa03hyMhuQlDLmPOovMsAphYH0.jpg",
    "link": "/see/card/anime/100-36/Пес и Пускающая в ход ножницы.html",
    "year": "2013",
    "rating":"6.4"
},
{
    "name": "Призрак в доспехах: Синдром одиночки",
    "image": "http://image.tmdb.org/t/p/w500//wG7iZsxxFd6PPdYHndpDIMTPdaC.jpg",
    "link": "/see/card/anime/100-37/Призрак в доспехах Синдром одиночки.html",
    "year": "2002",
    "rating":"8.2"
},
{
    "name": "Токийский Гуль",
    "image": "http://image.tmdb.org/t/p/w500//cB9pdS49LbAryFtJpPQYwfFXbJd.jpg",
    "link": "/see/card/anime/100-38/Токийский Гуль.html",
    "year": "2014",
    "rating":"8.3"
},
{
    "name": "Мастера меча онлайн",
    "image": "http://image.tmdb.org/t/p/w500//htNohqrYEwuz4fCa9ATVF90s58S.jpg",
    "link": "/see/card/anime/100-39/Мастера меча онлайн.html",
    "year": "2012",
    "rating":"8.2"
},
{
    "name": "Убийца Акаме!",
    "image": "http://image.tmdb.org/t/p/w500//3Jtt3UgwtjJHRFDWZBFwaOji9F.jpg",
    "link": "/see/card/anime/100-40/Убийца Акаме!.html",
    "year": "2014",
    "rating":"8.3"
},
{
    "name": "Синие Мибуро",
    "image": "http://image.tmdb.org/t/p/w500//rADnozoUIkrJKBD1CMBPnOBWoqh.jpg",
    "link": "/see/card/anime/100-41/Синие Мибуро.html",
    "year": "2024",
    "rating":"8.4"
},
{
    "name": "Тетрадь смерти",
    "image": "http://image.tmdb.org/t/p/w500//jtyBJAqZUUKL1WjyiUTngiviRqI.jpg",
    "link": "/see/card/anime/100-42/Тетрадь смерти.html",
    "year": "2006",
    "rating":"8.6"
},
{
    "name": "Унесённые призраками",
    "image": "http://image.tmdb.org/t/p/w500//xV3zYcOA6xFjYwizIMDDkl2MGT7.jpg",
    "link": "/see/card/anime/100-43/Унесённые призраками.html",
    "year": "2001",
    "rating":"8.5"
},
{
    "name": "ПЛУТОН",
    "image": "http://image.tmdb.org/t/p/w500//uO5kzuKlkISDBzW8QXchk65haRp.jpg",
    "link": "/see/card/anime/100-44/ПЛУТОН.html",
    "year": "2023",
    "rating":"7.9"
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