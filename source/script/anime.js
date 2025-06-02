

// Генерация карточек с случайными рейтингами
// Мультфильмы
document.addEventListener('DOMContentLoaded', function () {
    generateCards();
    
    setTimeout(positionCardRatingTrand, 200);
});


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Обмен элементов
    }
    return array;
}

// Вспомогательная функция для стандартизации названий фильмов (без года)
const getBaseTitle = (title) => {
    title = title.toLowerCase();
    title = title.replace(/\s*\(.*\)\s*$/, '').replace(/\s*\[.*\]\s*$/, '');
    title = title.replace(/[:–—\-].*$/, '');
    title = title.replace(/\s+\d{4}$/, '');
    return title.trim();
};

async function generateCards() {
    var currentMovieTitleElement = document.querySelector('title');
    var currentMovieYearElement = document.getElementById('movie-year');
    var currentMovieLink = window.location.pathname;

    
    var localCardData = [
        {
            "name": "Башня Бога",
            "image": "https://image.tmdb.org/t/p/w500//m4FQUNPbxonuv4kcFm1YgyRgl2C.jpg",
            "link": "/card/anime/100-01/Bashnya-Boga.html",
            "year": "2020",
            "rating":"8.3",
            "isTV": true,
            "genres": ["Детектив", "НФ и Фэнтези", "Боевик и Приключения"]
        },
        {
          "name": "Поднятие уровня в одиночку",
          "image": "https://image.tmdb.org/t/p/w500//orLdJQCcC1Lq13xt62P2xJycyAL.jpg",
          "link": "/card/anime/100-02/Podnyatie-urovnya-v-odinochku.html",
          "year": "2024",
          "rating":"8.5",
          "isTV": true,
          "genres": ["Боевик", "Приключения", "Фэнтези"]
      },
      {
        "name": "Наруто: Ураганные хроники",
        "image": "https://image.tmdb.org/t/p/w500//dIRmrc4XwLJWc3eTCe7KaOYJdKX.jpg",
        "link": "/card/anime/100-03/Naruto-Uragannye-hroniki.html",
        "year": "2007",
        "rating":"8.5",
        "isTV": true,
        "genres": ["Боевик и Приключения", "НФ и Фэнтези"]
    },
    {
      "name": "Блич",
      "image": "https://image.tmdb.org/t/p/w500//nqOO3OmDpTsSgVLUZn2T1Dr2mcV.jpg",
      "link": "/card/anime/100-04/Blich.html",
      "year": "2004",
      "rating":"8.4",
      "isTV": true,
      "genres": ["Боевик и Приключения", "НФ и Фэнтези"]
  },
  {
    "name": "Ванпанчмен",
    "image": "https://image.tmdb.org/t/p/w500//nhq66gOdiAp5mnNbVsxAonliffa.jpg",
    "link": "/card/anime/100-05/Vanpanchmen.html",
    "year": "2015",
    "rating":"8.5",
    "isTV": true,
    "genres": ["Комедия", "НФ и Фэнтези"]
},
{
  "name": "Восхождение в тени!",
  "image": "https://image.tmdb.org/t/p/w500//eRwEUoIPJ6hNUalD848Ud4F77gZ.jpg",
  "link": "/card/anime/100-06/Voshozhdenie-v-teni.html",
  "year": "2022",
  "rating":"8.1",
  "isTV": true,
  "genres": ["Комедия", "НФ и Фэнтези", "Боевик и Приключения"]
},
{
  "name": "Магическая битва",
  "image": "https://image.tmdb.org/t/p/w500//rcHnYQHyFRpl9uOltPQILx8Cnla.jpg",
  "link": "/card/anime/100-07/Magicheskaya-bitva.html",
  "year": "2020",
  "rating":"8.6",
  "isTV": true,
  "genres": ["Боевик и Приключения", "НФ и Фэнтези"]
},
{
  "name": "Баскетбол Куроко",
  "image": "https://image.tmdb.org/t/p/w500//ftT1qtT6yWO5rfs237a466N8QRr.jpg",
  "link": "/card/anime/100-08/Basketbol-Kuroko.html",
  "year": "2012",
  "rating":"8.5",
  "isTV": true,
  "genres": ["Комедия", "Драма", "Спорт"]
},
{
  "name": "Дорохедоро",
  "image": "https://image.tmdb.org/t/p/w500//lzngNiuEmUYj7oKB5ZWrJggUXFL.jpg",
  "link": "/card/anime/100-09/Dorohedoro.html",
  "year": "2020",
  "rating":"8.3",
  "isTV": true,
  "genres": ["Комедия", "Боевик и Приключения", "НФ и Фэнтези"]
},
{
  "name": "Человек-бензопила",
  "image": "https://image.tmdb.org/t/p/w500//92Ds0hOHObvZBekqneimrGpxyXh.jpg",
  "link": "/card/anime/100-10/Chelovek-benzopila.html",
  "year": "2022",
  "rating":"8.6",
  "isTV": true,
  "genres": ["Боевик и Приключения", "НФ и Фэнтези"]
},
{
  "name": "Дороро",
  "image": "https://image.tmdb.org/t/p/w500//oudk6QIrLLtMlmVBBQoheNzcqeI.jpg",
  "link": "/card/anime/100-11/Dororo.html",
  "year": "2019",
  "rating":"8.6",
  "isTV": true,
  "genres": ["Боевик и Приключения"]
},
{
  "name": "Чёрный клевер",
  "image": "https://image.tmdb.org/t/p/w500//vcsAzsoSJEHgJZ29EkxXWSEVbDN.jpg",
  "link": "/card/anime/100-12/Chyornyj-klever.html",
  "year": "2017",
  "rating":"8.5",
  "isTV": true,
  "genres": ["Боевик и Приключения", "Комедия"]
},
{
  "name": "Магия и мускулы",
  "image": "https://image.tmdb.org/t/p/w500//vp3oSq3XUSDeSjv4fvSVlT4mleC.jpg",
  "link": "/card/anime/100-13/Magiya-i-muskuly.html",
  "year": "2023",
  "rating":"8.3",
  "isTV": true,
  "genres": ["Комедия", "Боевик и Приключения", "НФ и Фэнтези"]
},
{
  "name": "Школа-тюрьма",
  "image": "https://image.tmdb.org/t/p/w500//50eY9B9JtWcG0KuY5SS1X7E9wQb.jpg",
  "link": "/card/anime/100-14/Shkola-tyurma.html",
  "year": "2015",
  "rating":"8.1",
  "isTV": true,
  "genres": ["Комедия"]
},
{
    "name": "Шарлотта",
    "image": "https://image.tmdb.org/t/p/w500//rMOGHPGfuywDViL9Oc0tA29oxtA.jpg",
    "link": "/card/anime/100-15/Sharlotta.html",
    "year": "2015",
    "rating":"8.3",
    "isTV": true,
    "genres": ["Драма", "НФ и Фэнтези"]
},
{
    "name": "Семья шпиона",
    "image": "https://image.tmdb.org/t/p/w500//xMqGSPjjnc4awD4R8JrRTW0IGOt.jpg",
    "link": "/card/anime/100-16/Semya-shpiona.html",
    "year": "2022",
    "rating":"8.6",
    "isTV": true,
    "genres": ["Комедия", "Боевик и Приключения"]
},
{
    "name": "Борьба в прямом эфире",
    "image": "https://image.tmdb.org/t/p/w500//fJw0XoP3t1VNhKLqanyxVOMxjwX.jpg",
    "link": "/card/anime/100-17/Borba-v-pryamom-efire.html",
    "year": "2024",
    "rating":"8.3",
    "isTV": true,
    "genres": ["Комедия", "Боевик и Приключения"]
},
{
    "name": "Врата Штейна 0",
    "image": "https://image.tmdb.org/t/p/w500//qpd4qivQAVnJ7Zz6QFCE9km5Jiu.jpg",
    "link": "/card/anime/100-18/Vrata-Shtejna-0.html",
    "year": "2018",
    "rating":"8.0",
    "isTV": true,
    "genres": ["НФ и Фэнтези"]
},
{
    "name": "Ох, уж этот экстрасенс Сайки Кусуо!",
    "image": "https://image.tmdb.org/t/p/w500//hqOIldYJTq8eI1APi4tx4rZuiHe.jpg",
    "link": "/card/anime/100-19/Oh,-uzh-etot-ekstrasens-Sajki-Kusuo.html",
    "year": "2016",
    "rating":"8.3",
    "isTV": true,
    "genres": ["Комедия", "НФ и Фэнтези"]
},
{
    "name": "Ван-Пис",
    "image": "https://image.tmdb.org/t/p/w500//osRT8GsND3PfhvevsS5DK9px0LI.jpg",
    "link": "/card/anime/100-20/Van-Pis.html",
    "year": "1999",
    "rating":"8.7",
    "isTV": true,
    "genres": ["Боевик и Приключения", "Комедия"]
},
{
    "name": "Добро пожаловать в N.H.K.",
    "image": "https://image.tmdb.org/t/p/w500//5iXnyp9zQb3tNTSOXn0rAJOlxu0.jpg",
    "link": "/card/anime/100-21/Dobro-pozhalovat-v-N.H.K..html",
    "year": "2006",
    "rating":"8.5",
    "isTV": true,
    "genres": ["Комедия", "Драма"]
},
{
    "name": "Атака титанов",
    "image": "https://image.tmdb.org/t/p/w500//p5nYJj1N5pVMUixtyIJtfkw1FEr.jpg",
    "link": "/card/anime/100-22/Ataka-titanov.html",
    "year": "2013",
    "rating":"8.7",
    "isTV": true,
    "genres": ["Боевик и Приключения", "НФ и Фэнтези"]
},
{
    "name": "Драконий жемчуг супер",
    "image": "https://image.tmdb.org/t/p/w500//9gzkpjs6N7Xxo1CnnJqhFtmYCez.jpg",
    "link": "/card/anime/100-23/Drakonij-zhemchug-super.html",
    "year": "2015",
    "rating":"8.2",
    "isTV": true,
    "genres": ["Боевик и Приключения", "НФ и Фэнтези"]
},
{
    "name": "Волейбол!!",
    "image": "https://image.tmdb.org/t/p/w500//5lrJDEQjwCJPLdlfhBmJ8mfpnpX.jpg",
    "link": "/card/anime/100-24/Volejbol.html",
    "year": "2014",
    "rating":"8.6",
    "isTV": true,
    "genres": ["Комедия", "Боевик и Приключения" , "Спорт"]
},
{
    "name": "Мартовский лев",
    "image": "https://image.tmdb.org/t/p/w500//ufgAYwzv6N2JrOWwyAkoGKMlMbo.jpg",
    "link": "/card/anime/100-25/Martovskij-lev.html",
    "year": "2016",
    "rating":"7.9",
    "isTV": true,
    "genres": ["Драма"]
},
{
    "name": "Истребитель демонов",
    "image": "https://image.tmdb.org/t/p/w500//zg3GrU3jAoTGxmlGGhkfNYMOHlb.jpg",
    "link": "/card/anime/100-26/Istrebitel-demonov.html",
    "year": "2019",
    "rating":"8.7",
    "isTV": true,
    "genres": ["Боевик и Приключения", "НФ и Фэнтези"]
},
{
    "name": "Баки",
    "image": "https://image.tmdb.org/t/p/w500//6n3DLulcCLbHbkQiC9KBHUbZfGr.jpg",
    "link": "/card/anime/100-27/Baki.html",
    "year": "2001",
    "rating":"8.1",
    "isTV": true,
    "genres": ["Спорт", "Криминал", "Драма"]
},
{
    "name": "Нана",
    "image": "https://image.tmdb.org/t/p/w500//5XyTQaZcWgn1iqSuxsh5FRzuJjB.jpg",
    "link": "/card/anime/100-28/Nana.html",
    "year": "2006",
    "rating":"8.4",
    "isTV": true,
    "genres": ["Комедия", "Драма", "Семейный"]
},
{
    "name": "Моя геройская академия",
    "image": "https://image.tmdb.org/t/p/w500//aqOnGXW5eCQpfyx74Lu3GTt0AXU.jpg",
    "link": "/card/anime/100-29/Moya-gerojskaya-akademiya.html",
    "year": "2016",
    "rating":"8.6",
    "isTV": true,
    "genres": ["Боевик и Приключения", "НФ и Фэнтези"]
},
{
    "name": "Страстное Сердце: Дикий Бомбардир",
    "image": "https://image.tmdb.org/t/p/w500//b0yW5cQX97QfhXeJU9kbQ4UYj9V.jpg",
    "link": "/card/anime/100-30/Strastnoe-Serdce-Dikij-Bombardir.html",
    "year": "2002",
    "rating":"7.9",
    "isTV": true,
    "genres": ["Комедия", "Драма" , "Спорт"]
},
{
    "name": "Дарованный",
    "image": "https://image.tmdb.org/t/p/w500//gIZtv9fPZMsITHu2PSGiFnEQqHq.jpg",
    "link": "/card/anime/100-31/Darovannyj.html",
    "year": "2019",
    "rating":"8.6",
    "isTV": true,
    "genres": ["Драма"]
},
{
    "name": "Летнее время",
    "image": "https://image.tmdb.org/t/p/w500//gyf39hodpr1qJzUXGFuGNlxysdi.jpg",
    "link": "/card/anime/100-32/Letnee-vremya.html",
    "year": "2022",
    "rating":"8.2",
    "isTV": true,
    "genres": ["Драма" , "Детектив"]
},
{
    "name": "Стальной Алхимик: Братство",
    "image": "https://image.tmdb.org/t/p/w500//n2M0BslYmciTcxHc0SpwSljujUG.jpg",
    "link": "/card/anime/100-33/Stalnoj-Alhimik-Bratstvo.html",
    "year": "2009",
    "rating":"8.7",
    "isTV": true,
    "genres": ["Боевик и Приключения", "НФ и Фэнтези"]
},
{
    "name": "Юри на льду",
    "image": "https://image.tmdb.org/t/p/w500//uwHOl8SLvGcbumIlpHgFAqVCEb2.jpg",
    "link": "/card/anime/100-34/Yuri-na-ldu.html",
    "year": "2016",
    "rating":"8.6",
    "isTV": true,
    "genres": ["Комедия", "Драма"]
},
{
    "name": "Семь смертных грехов",
    "image": "https://image.tmdb.org/t/p/w500//rRZdyqqRAn1h45oNpA69NehQLcI.jpg",
    "link": "/card/anime/100-35/Sem-smertnyh-grehov.html",
    "year": "2014",
    "rating":"8.4",
    "isTV": true,
    "genres": ["Боевик и Приключения", "НФ и Фэнтези"]
},
{
    "name": "Пес и Пускающая в ход ножницы",
    "image": "https://image.tmdb.org/t/p/w500//aOa03hyMhuQlDLmPOovMsAphYH0.jpg",
    "link": "/card/anime/100-36/Pes-i-Puskayushaya-v-hod-nozhnicy.html",
    "year": "2013",
    "rating":"6.4",
    "isTV": true,
    "genres": ["Комедия"]
},
{
    "name": "Призрак в доспехах: Синдром одиночки",
    "image": "https://image.tmdb.org/t/p/w500//wG7iZsxxFd6PPdYHndpDIMTPdaC.jpg",
    "link": "/card/anime/100-37/Prizrak-v-dospehah-Sindrom-odinochki.html",
    "year": "2002",
    "rating":"8.2",
    "isTV": true,
    "genres": ["Боевик и Приключения", "Криминал", "НФ и Фэнтези"]
},
{
    "name": "Токийский Гуль",
    "image": "https://image.tmdb.org/t/p/w500//cB9pdS49LbAryFtJpPQYwfFXbJd.jpg",
    "link": "/card/anime/100-38/Tokijskij-Gul.html",
    "year": "2014",
    "rating":"8.3",
    "isTV": true,
    "genres": ["Драма", "НФ и Фэнтези"]
},
{
    "name": "Мастера меча онлайн",
    "image": "https://image.tmdb.org/t/p/w500//htNohqrYEwuz4fCa9ATVF90s58S.jpg",
    "link": "/card/anime/100-39/Mastera-mecha-onlajn.html",
    "year": "2012",
    "rating":"8.2",
    "isTV": true,
    "genres": ["НФ и Фэнтези", "Боевик и Приключения"]
},
{
    "name": "Убийца Акаме!",
    "image": "https://image.tmdb.org/t/p/w500//3Jtt3UgwtjJHRFDWZBFwaOji9F.jpg",
    "link": "/card/anime/100-40/Ubijca-Akame!.html",
    "year": "2014",
    "rating":"8.3",
    "isTV": true,
    "genres": ["Драма", "Боевик и Приключения"]
},
{
    "name": "Синие Мибуро",
    "image": "https://image.tmdb.org/t/p/w500//rADnozoUIkrJKBD1CMBPnOBWoqh.jpg",
    "link": "/card/anime/100-41/Sinie-Miburo.html",
    "year": "2024",
    "rating":"8.4",
    "isTV": true,
    "genres": ["Боевик и Приключения"]
},
{
    "name": "Тетрадь смерти",
    "image": "https://image.tmdb.org/t/p/w500//jtyBJAqZUUKL1WjyiUTngiviRqI.jpg",
    "link": "/card/anime/100-42/Tetrad-smerti.html",
    "year": "2006",
    "rating":"8.6",
    "isTV": true,
    "genres": ["Детектив", "НФ и Фэнтези"]
},
{
    "name": "Унесённые призраками",
    "image": "https://image.tmdb.org/t/p/w500//xV3zYcOA6xFjYwizIMDDkl2MGT7.jpg",
    "link": "/card/anime/100-43/Unesyonnye-prizrakami.html",
    "year": "2001",
    "rating":"8.5",
    "genres": ["Мультфильм", "Семейный", "Фэнтези"]
},
{
    "name": "ПЛУТОН",
    "image": "https://image.tmdb.org/t/p/w500//uO5kzuKlkISDBzW8QXchk65haRp.jpg",
    "link": "/card/anime/100-44/PLUTON.html",
    "year": "2023",
    "rating":"7.9",
    "isTV": true,
    "genres": ["НФ и Фэнтези", "Детектив", "Криминал"]
},
{
    "name": "Ходячий замок",
    "image": "https://image.tmdb.org/t/p/w500//oQvAlVSjYsJZPg9raiQRYE0aVrv.jpg",
    "link": "/card/anime/100-45/Hodyachij-zamok.html",
    "year": "2004",
    "rating":"8.4",
    "genres": ["Мультфильм", "Приключения", "Фэнтези"]
},
{
    "name": "Перерождение: Монстр",
    "image": "https://image.tmdb.org/t/p/w500//cxV7wPMW3Xeuu27rV9MJrZm4I7y.jpg",
    "link": "/card/anime/100-46/Pererozhdenie-Monstr.html",
    "year": "2024",
    "rating":"8.2",
    "isTV": true,
    "genres": ["Боевик и Приключения", "НФ и Фэнтези"]
},
{
    "name": "Звёзды Айкацу!",
    "image": "https://image.tmdb.org/t/p/w500//fiWqW5wYF702dpQWwSeRwKOyXqZ.jpg",
    "link": "/card/anime/100-47/Zvyozdy-Ajkacu!.html",
    "year": "2016",
    "rating":"6.8",
    "isTV": true,
    "genres": ["Комедия", "Драма", "Семейный", "Детский"]
},
{
    "name": "Хоримия",
    "image": "https://image.tmdb.org/t/p/w500//2ZOfEetRHnqCBzvubdYU3ytwcq.jpg",
    "link": "/card/anime/100-48/Horimiya.html",
    "year": "2021",
    "rating":"8.6",
    "isTV": true,
    "genres": ["Комедия", "Драма"]
},
{
    "name": "Обещанный Неверленд",
    "image": "https://image.tmdb.org/t/p/w500//eY2WprrRHCCD2J00PjNJ1Itodlr.jpg",
    "link": "/card/anime/100-49/Obeshannyj-Neverlend.html",
    "year": "2019",
    "rating":"8.4",
    "isTV": true,
    "genres": ["Детектив", "Драма", "НФ и Фэнтези"]
},
{
    "name": "Твоё имя",
    "image": "https://image.tmdb.org/t/p/w500//iH2WDCYLIUjc7oPWRT7Kxgxza6k.jpg",
    "link": "/card/anime/100-50/Tvoe-imya.html",
    "year": "2016",
    "rating":"8.5",
    "genres": ["Мультфильм", "Мелодрама", "Драма"]
},
{
    "name": "О моём перерождении в слизь",
    "image": "https://image.tmdb.org/t/p/w500//dyvUkf3bFFd0tC2yJCJ6rUgeZRO.jpg",
    "link": "/card/anime/100-51/O-moyom-pererozhdenii-v-sliz.html",
    "year": "2018",
    "rating":"8.5",
    "isTV": true,
    "genres": ["Боевик и Приключения", "НФ и Фэнтези"]
},
{
    "name": "Могила светлячков",
    "image": "https://image.tmdb.org/t/p/w500//nJYXr0RAznczy5tCZtYcjoYMjEg.jpg",
    "link": "/card/anime/100-52/Mogila-svetlyachkov.html",
    "year": "1988",
    "rating":"8.5",
    "genres": ["Мультфильм", "Драма", "Военный"]
},
{
    "name": "Мононокэ",
    "image": "https://image.tmdb.org/t/p/w500//g2Hm6h1tQU0w0A1wH7gwB4tH7e7.jpg",
    "link": "/card/anime/100-53/Mononoke.html",
    "year": "2007",
    "rating":"7.9",
    "isTV": true,
    "genres": ["Детектив", "НФ и Фэнтези"]
},
{
    "name": "Форма голоса",
    "image": "https://image.tmdb.org/t/p/w500//c0Gv8xTSEmIcQPxbhINKvkbJO8s.jpg",
    "link": "/card/anime/100-54/Forma-golosa.html",
    "year": "2016",
    "rating":"8.4",
    "genres": ["Мультфильм", "Драма", "Мелодрама"]
},
{
    "name": "Реинкарнация безработного",
    "image": "https://image.tmdb.org/t/p/w500//bC2DRV5S6BDtW0DmAqN3g3xtLoP.jpg",
    "link": "/card/anime/100-55/Reinkarnaciya-bezrabotnogo.html",
    "year": "2021",
    "rating":"8.5",
    "isTV": true,
    "genres": ["Боевик и Приключения", "НФ и Фэнтези"]
},
{
    "name": "Банановая рыба",
    "image": "https://image.tmdb.org/t/p/w500//3GiB5Ybbhzt0ePRR2zgld9R56DB.jpg",
    "link": "/card/anime/100-56/Bananovaya-ryba.html",
    "year": "2018",
    "rating":"8.6",
    "isTV": true,
    "genres": ["Детектив", "Боевик и Приключения", "Драма"]
},
{
    "name": "Принцесса Мононоке",
    "image": "https://image.tmdb.org/t/p/w500//dZE9oUyp14UEoPk5QV7emBu0Ix3.jpg",
    "link": "/card/anime/100-57/Princessa-Mononoke.html",
    "year": "1997",
    "rating":"8.3",
    "genres": ["Мультфильм", "Приключения", "Фэнтези"]
},
{
    "name": "Рок-Шоу!!",
    "image": "https://image.tmdb.org/t/p/w500//cDhy72poqVcnevY3BOGlE76bdca.jpg",
    "link": "/card/anime/100-58/Rok-Shou!!.html",
    "year": "2020",
    "rating":"6.0",
    "isTV": true,
    "genres": ["Комедия"]
},
{
    "name": "Мой сосед Тоторо",
    "image": "https://image.tmdb.org/t/p/w500//ynClhtTAYG8N7FfU7EYK0T131rj.jpg",
    "link": "/card/anime/100-59/Moj-sosed-Totoro.html",
    "year": "1988",
    "rating":"8.1",
    "genres": ["Мультфильм", "Фэнтези", "Семейный"]
},
{
    "name": "Хост-клуб Оранской школы",
    "image": "https://image.tmdb.org/t/p/w500//rd6QqoO7mOqrfOWiSEa6XL9Jqlv.jpg",
    "link": "/card/anime/100-60/Host-klub-Oranskoj-shkoly.html",
    "year": "2006",
    "rating":"8.2",
    "isTV": true,
    "genres": ["Комедия", "Драма"]
},
{
    "name": "Аватар: Легенда об Аанге",
    "image": "https://image.tmdb.org/t/p/w500//pbTLpt8c7YUT4Vr6DE2ai3HY6U7.jpg",
    "link": "/card/anime/100-61/Avatar-Legenda-ob-Aange.html",
    "year": "2005",
    "rating":"8.7",
    "isTV": true,
    "genres": ["Боевик и Приключения", "НФ и Фэнтези"]
},
{
    "name": "Адский рай",
    "image": "https://image.tmdb.org/t/p/w500//75OaIA4S8ZKFVNmKnTCgAcNqwlC.jpg",
    "link": "/card/anime/100-62/Adskij-raj.html",
    "year": "2023",
    "rating":"8.2",
    "isTV": true,
    "genres": ["Драма", "Боевик и Приключения", "НФ и Фэнтези"]
},
{
    "name": "Дитя погоды",
    "image": "https://image.tmdb.org/t/p/w500//unkWKrTb4SdHAEb78AD4BJvXbwh.jpg",
    "link": "/card/anime/100-63/Ditya pogody.html",
    "year": "2019",
    "rating":"8.0",
    "genres": ["Мультфильм", "Фэнтези", "Мелодрама", "Драма"]
},
{
    "name": "Доктор Стоун",
    "image": "https://image.tmdb.org/t/p/w500//uJQCHiHAo7hoDyRPZ792ctjSZ71.jpg",
    "link": "/card/anime/100-64/Doktor-Stoun.html",
    "year": "2019",
    "rating":"8.5",
    "isTV": true,
    "genres": ["Боевик и Приключения", "Комедия", "НФ и Фэнтези"]
},
{
    "name": "Паприка",
    "image": "https://image.tmdb.org/t/p/w500//75lTLdVBlpWocSO8nWJqddyedCH.jpg",
    "link": "/card/anime/100-65/Paprika.html",
    "year": "2006",
    "rating":"7.8",
    "genres": ["Мультфильм", "Фантастика", "Триллер"]
},
{
    "name": "Бродяга Кэнсин",
    "image": "https://image.tmdb.org/t/p/w500//eNs5hTCeZtZCy6rTTsH4sMOrKGZ.jpg",
    "link": "/card/anime/100-66/Brodyaga-Kensin.html",
    "year": "2023",
    "rating":"8.4",
    "isTV": true,
    "genres": ["Боевик и Приключения"]
},
{
    "name": "Король шаманов",
    "image": "https://image.tmdb.org/t/p/w500//conBjZLX8KBc18vdQjSNegZytln.jpg",
    "link": "/card/anime/100-67/Korol-shamanov.html",
    "year": "2001",
    "rating":"8.5",
    "isTV": true,
    "genres": ["Боевик и Приключения", "НФ и Фэнтези"]
},
{
    "name": "5 сантиметров в секунду",
    "image": "https://image.tmdb.org/t/p/w500//ef5Kpp8knIaWCsuKHKE41cQpuPl.jpg",
    "link": "/card/anime/100-68/5-santimetrov-v-sekundu.html",
    "year": "2007",
    "rating":"7.3",
    "genres": ["Мультфильм", "Мелодрама", "Драма"]
},
{
    "name": "Путешествие Кино",
    "image": "https://image.tmdb.org/t/p/w500//HMCWRefv371GcIo1HsU0rkC7xx.jpg",
    "link": "/card/anime/100-69/Puteshestvie-Kino.html",
    "year": "2003",
    "rating":"7.7",
    "isTV": true,
    "genres": ["НФ и Фэнтези"]
},
{
    "name": "Синий Экзорцист",
    "image": "https://image.tmdb.org/t/p/w500//g2RmOH0cDET7pptUrLnzVM6w8DJ.jpg",
    "link": "/card/anime/100-70/Sinij-Ekzorcist.html",
    "year": "2011",
    "rating":"7.9",
    "isTV": true,
    "genres": ["НФ и Фэнтези", "Детектив", "Боевик и Приключения"]
},
{
    "name": "Судьба: Начало",
    "image": "https://image.tmdb.org/t/p/w500//lkV0BOHMvdxHrfTWQfaFiKfKpRV.jpg",
    "link": "/card/anime/100-71/Sudba-Nachalo.html",
    "year": "2011",
    "rating":"8.0",
    "isTV": true,
    "genres": ["Боевик и Приключения", "НФ и Фэнтези"]
},
{
    "name": "Хвост Феи",
    "image": "https://image.tmdb.org/t/p/w500//q5GiuJHgJJwwk14ufs0ToxFkKt6.jpg",
    "link": "/card/anime/100-72/Hvost-Fei.html",
    "year": "2009",
    "rating":"7.9",
    "isTV": true,
    "genres": ["Боевик и Приключения", "НФ и Фэнтези"]
},
    
        // конец
       
        
    ];

    var cardContainer = $('#card-container');
    if (!cardContainer.length) {
        return; // Возвращаемся, если контейнер не найден
    }
    cardContainer.html(""); // Очищаем существующие карточки

    // Нормализация текущей ссылки для поиска в localCardData
    let normalizedCurrentLink = currentMovieLink;
    const cardPathIndex = currentMovieLink.toLowerCase().indexOf('/card/');
    if (cardPathIndex !== -1) {
        normalizedCurrentLink = currentMovieLink.substring(cardPathIndex);
        normalizedCurrentLink = decodeURIComponent(normalizedCurrentLink);
    }

    if (currentMovieTitleElement && currentMovieYearElement) {
        let currentMovieRawTitle = currentMovieTitleElement.textContent.split('(')[0].trim();
        let currentMovieBaseTitle = getBaseTitle(currentMovieRawTitle);
        let currentMovieYear = currentMovieYearElement.textContent;

        let cardsToDisplay = [];
        const addedCardsTracker = new Set();

        let currentMovieGenres = [];

        // Поиск текущего фильма в локальных данных по нормализованной ссылке
        const currentLocalCard = localCardData.find(card => card.link === normalizedCurrentLink);

        if (currentLocalCard) {
            const currentCardIdentifier = `${getBaseTitle(currentLocalCard.name)}-${currentLocalCard.year}-${currentLocalCard.link}`;
            addedCardsTracker.add(currentCardIdentifier);
            currentMovieGenres = currentLocalCard.genres;
        } else {
            addedCardsTracker.add(`${currentMovieBaseTitle}-${currentMovieYear}-N/A`);
        }

        // Определите веса для специфических жанров.
        const specificGenreWeights = {
            'ужасы': 5.0,
            'фэнтези': 4.0,
            'научная фантастика': 4.2, 
            'вестерн': 5.0,
            'мультфильм': 5.0, 
            'документальный': 5.0, 
            'мюзикл': 4.0, 
            'триллер': 2.5,
            'детектив': 3.8, 
            'боевик': 1.8, 
            'комедия': 4.2, 
            'драма': 0.5,
            'мелодрама': 5.0, 
            'приключения': 3.5, 
            'криминал': 2.0, 
            'история': 3.5,
            'романтика': 2.0, 
            'семейный': 5.0, 
            'музыка': 4.0, 
            'военный': 2.8,
            'Боевик и Приключения': 4.0,
            'Война и Политика': 4.2,
            'НФ и Фэнтези': 3.5,
            'Детский': 5.0,
            'Спорт': 5.0,
            'фантастика': 4.5
        };

        const MIN_GENRE_SCORE_THRESHOLD = 1.0;
        const NON_MATCHING_GENRE_PENALTY_MULTIPLIER = 0.5;
        const FRANCHISE_BONUS = 3.0;

        // ЭТАП 1: Подбор по жанрам и франшизам из localCardData
        if (currentMovieGenres.length > 0) {
            const genreRelevantCandidates = [];
            const currentGenresLower = new Set(currentMovieGenres.map(g => g.toLowerCase()));

            for (const card of localCardData) {
                const cardIdentifier = `${getBaseTitle(card.name)}-${card.year}-${card.link}`;
                if (addedCardsTracker.has(cardIdentifier)) {
                    continue;
                }

                let genreMatchScore = 0;
                let nonMatchingGenrePenalty = 0;

                for (const localGenre of card.genres) {
                    const lowerLocalGenre = localGenre.toLowerCase();
                    if (currentGenresLower.has(lowerLocalGenre)) {
                        let scoreToAdd = 1;
                        if (specificGenreWeights[lowerLocalGenre]) {
                            scoreToAdd += specificGenreWeights[lowerLocalGenre];
                        }
                        genreMatchScore += scoreToAdd;
                    } else {
                        if (specificGenreWeights[lowerLocalGenre] && specificGenreWeights[lowerLocalGenre] > 1.5) {
                            let penaltyAmount = specificGenreWeights[lowerLocalGenre] * NON_MATCHING_GENRE_PENALTY_MULTIPLIER;
                            nonMatchingGenrePenalty += penaltyAmount;
                        }
                    }
                }

                const cardBaseTitle = getBaseTitle(card.name);
                if (currentMovieBaseTitle === cardBaseTitle && card.year !== currentMovieYear) {
                    genreMatchScore += FRANCHISE_BONUS;
                }

                genreMatchScore -= nonMatchingGenrePenalty;

                if (genreMatchScore > MIN_GENRE_SCORE_THRESHOLD) {
                    genreRelevantCandidates.push({ card: card, score: genreMatchScore });
                }
            }

            shuffleArray(genreRelevantCandidates);
            genreRelevantCandidates.sort((a, b) => b.score - a.score);

            for (const item of genreRelevantCandidates) {
                if (cardsToDisplay.length < 15) {
                    cardsToDisplay.push(item.card);
                    addedCardsTracker.add(`${getBaseTitle(item.card.name)}-${item.card.year}-${item.card.link}`);
                } else {
                    break;
                }
            }
        }

        // ЭТАП 2: Заполняем оставшиеся места случайными картами, если все еще не хватает
        if (cardsToDisplay.length < 15) {
            const remainingLocalCards = shuffleArray(localCardData.filter(card =>
                !addedCardsTracker.has(`${getBaseTitle(card.name)}-${card.year}-${card.link}`)
            ));

            for (const card of remainingLocalCards) {
                if (cardsToDisplay.length < 15) {
                    cardsToDisplay.push(card);
                    addedCardsTracker.add(`${getBaseTitle(card.name)}-${card.year}-${card.link}`);
                } else {
                    break;
                }
            }
        }

        // ЭТАП 3: Финальное перемешивание всего списка для максимального разнообразия
        if (cardsToDisplay.length > 0) {
            shuffleArray(cardsToDisplay);
        }

        displayCards(cardsToDisplay.slice(0, 15), cardContainer);

    } else {
        const shuffledAllCards = shuffleArray(localCardData);
        displayCards(shuffledAllCards.slice(0, 15), cardContainer);
    }

    // Инициализация Splide. Убедитесь, что Splide.js подключен.
    var splide = new Splide('#Collections', {
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
            5000: { gap: '23px', perPage: 3 },
            2299.5: { gap: '20px', perPage: 3 },
            2018.5: { gap: '18px', perPage: 3 },
            1899.5: { gap: '18px', perPage: 3 },
            1704.5: { gap: '12px', perPage: 3 },
            1520.5: { gap: '12px', perPage: 3 },
            1320.5: { gap: '28px', perPage: 3 },
            1050: { gap: '12px', perPage: 3 },
            480: { gap: '12px', perPage: 3 }
        }
    }).mount();

    positionCardRatingTrand();
}

// Вспомогательная функция для отображения карточек в контейнере
function displayCards(cards, container) {
    var count = 0;
    container.empty();
    cards.forEach(function (val) {
        if (count >= 15) return; // Ограничиваем до 15 карточек
        var cardHTML = `
            <li class="splide__slide">
                <div class="card card-media" style="width: 12rem" data-rating="${val.rating}">
                    <a href="${val.link}">
                        <img src="${val.image}" class="card-img-top img-9x16 mt-2" alt="${val.name}">
                        <div class="card-rating-trand">
                            <span class="span-rating">${val.rating}</span>
                        </div>
                        ${val.isTV ? '<div class="card-TV">TV</div>' : ''}
                        <div class="card-body">
                            <span class="card-tex">${val.name}<br><span class="year">${val.year}</span></span>
                        </div>
                    </a>
                </div>
            </li>
        `;
        container.append(cardHTML);
        count++;
    });
}

// Функция для позиционирования рейтинга на карточках
function positionCardRatingTrand() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const image = card.querySelector('.card-img-top');
        const rating = card.querySelector('.card-rating-trand');
        if (image && rating) {
            const imageRect = image.getBoundingClientRect();
            const cardRect = card.getBoundingClientRect();

            const bottom = cardRect.bottom - imageRect.bottom + 8;
            const right = cardRect.right - imageRect.right + 8;

            rating.style.position = 'absolute';
            rating.style.bottom = bottom + 'px';
            rating.style.right = right + 'px';
        }
    });
}