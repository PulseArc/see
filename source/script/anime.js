

// Генерация карточек с случайными рейтингами
// Мультфильмы
document.addEventListener('DOMContentLoaded', function () {
    generateRandomCards();
    setTimeout(positionCardRatingTrand, 100); // Добавляем вызов для card-rating-trand
});

function generateRandomCards() {
    var cardData = [
        {
            "name": "Башня Бога",
            "image": "http://image.tmdb.org/t/p/w500//m4FQUNPbxonuv4kcFm1YgyRgl2C.jpg",
            "link": "/see/card/anime/100-01/Bashnya-Boga.html",
            "year": "2020",
            "rating":"8.3",
            "isTV": true
        },
        {
          "name": "Поднятие уровня в одиночку",
          "image": "http://image.tmdb.org/t/p/w500//orLdJQCcC1Lq13xt62P2xJycyAL.jpg",
          "link": "/see/card/anime/100-02/Podnyatie-urovnya-v-odinochku.html",
          "year": "2024",
          "rating":"8.5",
          "isTV": true
      },
      {
        "name": "Наруто: Ураганные хроники",
        "image": "http://image.tmdb.org/t/p/w500//dIRmrc4XwLJWc3eTCe7KaOYJdKX.jpg",
        "link": "/see/card/anime/100-03/Naruto-Uragannye-hroniki.html",
        "year": "2007",
        "rating":"8.5",
        "isTV": true
    },
    {
      "name": "Блич",
      "image": "http://image.tmdb.org/t/p/w500//nqOO3OmDpTsSgVLUZn2T1Dr2mcV.jpg",
      "link": "/see/card/anime/100-04/Blich.html",
      "year": "2004",
      "rating":"8.4",
      "isTV": true
  },
  {
    "name": "Ванпанчмен",
    "image": "http://image.tmdb.org/t/p/w500//nhq66gOdiAp5mnNbVsxAonliffa.jpg",
    "link": "/see/card/anime/100-05/Vanpanchmen.html",
    "year": "2015",
    "rating":"8.5",
    "isTV": true
},
{
  "name": "Восхождение в тени!",
  "image": "http://image.tmdb.org/t/p/w500//eRwEUoIPJ6hNUalD848Ud4F77gZ.jpg",
  "link": "/see/card/anime/100-06/Voshozhdenie-v-teni.html",
  "year": "2022",
  "rating":"8.1",
  "isTV": true
},
{
  "name": "Магическая битва",
  "image": "http://image.tmdb.org/t/p/w500//rcHnYQHyFRpl9uOltPQILx8Cnla.jpg",
  "link": "/see/card/anime/100-07/Magicheskaya-bitva.html",
  "year": "2020",
  "rating":"8.6",
  "isTV": true
},
{
  "name": "Баскетбол Куроко",
  "image": "http://image.tmdb.org/t/p/w500//ftT1qtT6yWO5rfs237a466N8QRr.jpg",
  "link": "/see/card/anime/100-08/Basketbol-Kuroko.html",
  "year": "2012",
  "rating":"8.5",
  "isTV": true
},
{
  "name": "Дорохедоро",
  "image": "http://image.tmdb.org/t/p/w500//lzngNiuEmUYj7oKB5ZWrJggUXFL.jpg",
  "link": "/see/card/anime/100-09/Dorohedoro.html",
  "year": "2020",
  "rating":"8.3",
  "isTV": true
},
{
  "name": "Человек-бензопила",
  "image": "http://image.tmdb.org/t/p/w500//92Ds0hOHObvZBekqneimrGpxyXh.jpg",
  "link": "/see/card/anime/100-10/Chelovek-benzopila.html",
  "year": "2022",
  "rating":"8.6",
  "isTV": true
},
{
  "name": "Дороро",
  "image": "http://image.tmdb.org/t/p/w500//oudk6QIrLLtMlmVBBQoheNzcqeI.jpg",
  "link": "/see/card/anime/100-11/Dororo.html",
  "year": "2019",
  "rating":"8.6",
  "isTV": true
},
{
  "name": "Чёрный клевер",
  "image": "http://image.tmdb.org/t/p/w500//vcsAzsoSJEHgJZ29EkxXWSEVbDN.jpg",
  "link": "/see/card/anime/100-12/Chyornyj-klever.html",
  "year": "2017",
  "rating":"8.5",
  "isTV": true
},
{
  "name": "Магия и мускулы",
  "image": "http://image.tmdb.org/t/p/w500//vp3oSq3XUSDeSjv4fvSVlT4mleC.jpg",
  "link": "/see/card/anime/100-13/Magiya-i-muskuly.html",
  "year": "2023",
  "rating":"8.3",
  "isTV": true
},
{
  "name": "Школа-тюрьма",
  "image": "http://image.tmdb.org/t/p/w500//50eY9B9JtWcG0KuY5SS1X7E9wQb.jpg",
  "link": "/see/card/anime/100-14/Shkola-tyurma.html",
  "year": "2015",
  "rating":"8.1",
  "isTV": true
},
{
    "name": "Шарлотта",
    "image": "http://image.tmdb.org/t/p/w500//rMOGHPGfuywDViL9Oc0tA29oxtA.jpg",
    "link": "/see/card/anime/100-15/Sharlotta.html",
    "year": "2015",
    "rating":"8.3",
    "isTV": true
},
{
    "name": "Семья шпиона",
    "image": "http://image.tmdb.org/t/p/w500//xMqGSPjjnc4awD4R8JrRTW0IGOt.jpg",
    "link": "/see/card/anime/100-16/Semya-shpiona.html",
    "year": "2022",
    "rating":"8.6",
    "isTV": true
},
{
    "name": "Борьба в прямом эфире",
    "image": "http://image.tmdb.org/t/p/w500//fJw0XoP3t1VNhKLqanyxVOMxjwX.jpg",
    "link": "/see/card/anime/100-17/Borba-v-pryamom-efire.html",
    "year": "2024",
    "rating":"8.3",
    "isTV": true
},
{
    "name": "Врата Штейна 0",
    "image": "http://image.tmdb.org/t/p/w500//qpd4qivQAVnJ7Zz6QFCE9km5Jiu.jpg",
    "link": "/see/card/anime/100-18/Vrata-Shtejna-0.html",
    "year": "2018",
    "rating":"8.0",
    "isTV": true
},
{
    "name": "Ох, уж этот экстрасенс Сайки Кусуо!",
    "image": "http://image.tmdb.org/t/p/w500//hqOIldYJTq8eI1APi4tx4rZuiHe.jpg",
    "link": "/see/card/anime/100-19/Oh,-uzh-etot-ekstrasens-Sajki-Kusuo.html",
    "year": "2016",
    "rating":"8.3",
    "isTV": true
},
{
    "name": "Ван-Пис",
    "image": "http://image.tmdb.org/t/p/w500//osRT8GsND3PfhvevsS5DK9px0LI.jpg",
    "link": "/see/card/anime/100-20/Van-Pis.html",
    "year": "1999",
    "rating":"8.7",
    "isTV": true
},
{
    "name": "Добро пожаловать в N.H.K.",
    "image": "http://image.tmdb.org/t/p/w500//5iXnyp9zQb3tNTSOXn0rAJOlxu0.jpg",
    "link": "/see/card/anime/100-21/Dobro-pozhalovat-v-N.H.K..html",
    "year": "2006",
    "rating":"8.5",
    "isTV": true
},
{
    "name": "Атака титанов",
    "image": "http://image.tmdb.org/t/p/w500//p5nYJj1N5pVMUixtyIJtfkw1FEr.jpg",
    "link": "/see/card/anime/100-22/Ataka-titanov.html",
    "year": "2013",
    "rating":"8.7",
    "isTV": true
},
{
    "name": "Драконий жемчуг супер",
    "image": "http://image.tmdb.org/t/p/w500//9gzkpjs6N7Xxo1CnnJqhFtmYCez.jpg",
    "link": "/see/card/anime/100-23/Drakonij-zhemchug-super.html",
    "year": "2015",
    "rating":"8.2",
    "isTV": true
},
{
    "name": "Волейбол!!",
    "image": "http://image.tmdb.org/t/p/w500//5lrJDEQjwCJPLdlfhBmJ8mfpnpX.jpg",
    "link": "/see/card/anime/100-24/Volejbol.html",
    "year": "2014",
    "rating":"8.6",
    "isTV": true
},
{
    "name": "Мартовский лев",
    "image": "http://image.tmdb.org/t/p/w500//ufgAYwzv6N2JrOWwyAkoGKMlMbo.jpg",
    "link": "/see/card/anime/100-25/Martovskij-lev.html",
    "year": "2016",
    "rating":"7.9",
    "isTV": true
},
{
    "name": "Истребитель демонов",
    "image": "http://image.tmdb.org/t/p/w500//zg3GrU3jAoTGxmlGGhkfNYMOHlb.jpg",
    "link": "/see/card/anime/100-26/Istrebitel-demonov.html",
    "year": "2019",
    "rating":"8.7",
    "isTV": true
},
{
    "name": "Баки",
    "image": "http://image.tmdb.org/t/p/w500//6n3DLulcCLbHbkQiC9KBHUbZfGr.jpg",
    "link": "/see/card/anime/100-27/Baki.html",
    "year": "2001",
    "rating":"8.1",
    "isTV": true
},
{
    "name": "Нана",
    "image": "http://image.tmdb.org/t/p/w500//5XyTQaZcWgn1iqSuxsh5FRzuJjB.jpg",
    "link": "/see/card/anime/100-28/Nana.html",
    "year": "2006",
    "rating":"8.4",
    "isTV": true
},
{
    "name": "Моя геройская академия",
    "image": "http://image.tmdb.org/t/p/w500//aqOnGXW5eCQpfyx74Lu3GTt0AXU.jpg",
    "link": "/see/card/anime/100-29/Moya-gerojskaya-akademiya.html",
    "year": "2016",
    "rating":"8.6",
    "isTV": true
},
{
    "name": "Страстное Сердце: Дикий Бомбардир",
    "image": "http://image.tmdb.org/t/p/w500//b0yW5cQX97QfhXeJU9kbQ4UYj9V.jpg",
    "link": "/see/card/anime/100-30/Strastnoe-Serdce-Dikij-Bombardir.html",
    "year": "2002",
    "rating":"7.9",
    "isTV": true
},
{
    "name": "Дарованный",
    "image": "http://image.tmdb.org/t/p/w500//gIZtv9fPZMsITHu2PSGiFnEQqHq.jpg",
    "link": "/see/card/anime/100-31/Darovannyj.html",
    "year": "2019",
    "rating":"8.6",
    "isTV": true
},
{
    "name": "Летнее время",
    "image": "http://image.tmdb.org/t/p/w500//gyf39hodpr1qJzUXGFuGNlxysdi.jpg",
    "link": "/see/card/anime/100-32/Letnee-vremya.html",
    "year": "2022",
    "rating":"8.2",
    "isTV": true
},
{
    "name": "Стальной Алхимик: Братство",
    "image": "http://image.tmdb.org/t/p/w500//n2M0BslYmciTcxHc0SpwSljujUG.jpg",
    "link": "/see/card/anime/100-33/Stalnoj-Alhimik-Bratstvo.html",
    "year": "2009",
    "rating":"8.7",
    "isTV": true
},
{
    "name": "Юри на льду",
    "image": "http://image.tmdb.org/t/p/w500//uwHOl8SLvGcbumIlpHgFAqVCEb2.jpg",
    "link": "/see/card/anime/100-34/Yuri-na-ldu.html",
    "year": "2016",
    "rating":"8.6",
    "isTV": true
},
{
    "name": "Семь смертных грехов",
    "image": "http://image.tmdb.org/t/p/w500//rRZdyqqRAn1h45oNpA69NehQLcI.jpg",
    "link": "/see/card/anime/100-35/Sem-smertnyh-grehov.html",
    "year": "2014",
    "rating":"8.4",
    "isTV": true
},
{
    "name": "Пес и Пускающая в ход ножницы",
    "image": "http://image.tmdb.org/t/p/w500//aOa03hyMhuQlDLmPOovMsAphYH0.jpg",
    "link": "/see/card/anime/100-36/Pes-i-Puskayushaya-v-hod-nozhnicy.html",
    "year": "2013",
    "rating":"6.4",
    "isTV": true
},
{
    "name": "Призрак в доспехах: Синдром одиночки",
    "image": "http://image.tmdb.org/t/p/w500//wG7iZsxxFd6PPdYHndpDIMTPdaC.jpg",
    "link": "/see/card/anime/100-37/Prizrak-v-dospehah-Sindrom-odinochki.html",
    "year": "2002",
    "rating":"8.2",
    "isTV": true
},
{
    "name": "Токийский Гуль",
    "image": "http://image.tmdb.org/t/p/w500//cB9pdS49LbAryFtJpPQYwfFXbJd.jpg",
    "link": "/see/card/anime/100-38/Tokijskij-Gul.html",
    "year": "2014",
    "rating":"8.3",
    "isTV": true
},
{
    "name": "Мастера меча онлайн",
    "image": "http://image.tmdb.org/t/p/w500//htNohqrYEwuz4fCa9ATVF90s58S.jpg",
    "link": "/see/card/anime/100-39/Mastera-mecha-onlajn.html",
    "year": "2012",
    "rating":"8.2",
    "isTV": true
},
{
    "name": "Убийца Акаме!",
    "image": "http://image.tmdb.org/t/p/w500//3Jtt3UgwtjJHRFDWZBFwaOji9F.jpg",
    "link": "/see/card/anime/100-40/Ubijca-Akame!.html",
    "year": "2014",
    "rating":"8.3",
    "isTV": true
},
{
    "name": "Синие Мибуро",
    "image": "http://image.tmdb.org/t/p/w500//rADnozoUIkrJKBD1CMBPnOBWoqh.jpg",
    "link": "/see/card/anime/100-41/Sinie-Miburo.html",
    "year": "2024",
    "rating":"8.4",
    "isTV": true
},
{
    "name": "Тетрадь смерти",
    "image": "http://image.tmdb.org/t/p/w500//jtyBJAqZUUKL1WjyiUTngiviRqI.jpg",
    "link": "/see/card/anime/100-42/Tetrad-smerti.html",
    "year": "2006",
    "rating":"8.6",
    "isTV": true
},
{
    "name": "Унесённые призраками",
    "image": "http://image.tmdb.org/t/p/w500//xV3zYcOA6xFjYwizIMDDkl2MGT7.jpg",
    "link": "/see/card/anime/100-43/Unesyonnye-prizrakami.html",
    "year": "2001",
    "rating":"8.5"
},
{
    "name": "ПЛУТОН",
    "image": "http://image.tmdb.org/t/p/w500//uO5kzuKlkISDBzW8QXchk65haRp.jpg",
    "link": "/see/card/anime/100-44/PLUTON.html",
    "year": "2023",
    "rating":"7.9",
    "isTV": true
},
{
    "name": "Ходячий замок",
    "image": "http://image.tmdb.org/t/p/w500//oQvAlVSjYsJZPg9raiQRYE0aVrv.jpg",
    "link": "/see/card/anime/100-45/Hodyachij-zamok.html",
    "year": "2004",
    "rating":"8.4"
},
{
    "name": "Перерождение: Монстр",
    "image": "http://image.tmdb.org/t/p/w500//cxV7wPMW3Xeuu27rV9MJrZm4I7y.jpg",
    "link": "/see/card/anime/100-46/Pererozhdenie-Monstr.html",
    "year": "2024",
    "rating":"8.2",
    "isTV": true
},
{
    "name": "Звёзды Айкацу!",
    "image": "http://image.tmdb.org/t/p/w500//fiWqW5wYF702dpQWwSeRwKOyXqZ.jpg",
    "link": "/see/card/anime/100-47/Zvyozdy-Ajkacu!.html",
    "year": "2016",
    "rating":"6.8",
    "isTV": true
},
{
    "name": "Хоримия",
    "image": "http://image.tmdb.org/t/p/w500//2ZOfEetRHnqCBzvubdYU3ytwcq.jpg",
    "link": "/see/card/anime/100-48/Horimiya.html",
    "year": "2021",
    "rating":"8.6",
    "isTV": true
},
{
    "name": "Обещанный Неверленд",
    "image": "http://image.tmdb.org/t/p/w500//eY2WprrRHCCD2J00PjNJ1Itodlr.jpg",
    "link": "/see/card/anime/100-49/Obeshannyj-Neverlend.html",
    "year": "2019",
    "rating":"8.4",
    "isTV": true
},
{
    "name": "Твоё имя",
    "image": "http://image.tmdb.org/t/p/w500//iH2WDCYLIUjc7oPWRT7Kxgxza6k.jpg",
    "link": "/see/card/anime/100-50/Tvoe-imya.html",
    "year": "2016",
    "rating":"8.5"
},
{
    "name": "О моём перерождении в слизь",
    "image": "http://image.tmdb.org/t/p/w500//dyvUkf3bFFd0tC2yJCJ6rUgeZRO.jpg",
    "link": "/see/card/anime/100-51/O-moyom-pererozhdenii-v-sliz.html",
    "year": "2018",
    "rating":"8.5",
    "isTV": true
},
{
    "name": "Могила светлячков",
    "image": "http://image.tmdb.org/t/p/w500//nJYXr0RAznczy5tCZtYcjoYMjEg.jpg",
    "link": "/see/card/anime/100-52/Mogila-svetlyachkov.html",
    "year": "1988",
    "rating":"8.5"
},
{
    "name": "Мононокэ",
    "image": "http://image.tmdb.org/t/p/w500//g2Hm6h1tQU0w0A1wH7gwB4tH7e7.jpg",
    "link": "/see/card/anime/100-53/Mononoke.html",
    "year": "2007",
    "rating":"7.9",
    "isTV": true
},
{
    "name": "Форма голоса",
    "image": "http://image.tmdb.org/t/p/w500//c0Gv8xTSEmIcQPxbhINKvkbJO8s.jpg",
    "link": "/see/card/anime/100-54/Forma-golosa.html",
    "year": "2016",
    "rating":"8.4"
},
{
    "name": "Реинкарнация безработного",
    "image": "http://image.tmdb.org/t/p/w500//bC2DRV5S6BDtW0DmAqN3g3xtLoP.jpg",
    "link": "/see/card/anime/100-55/Reinkarnaciya-bezrabotnogo.html",
    "year": "2021",
    "rating":"8.5",
    "isTV": true
},
{
    "name": "Банановая рыба",
    "image": "http://image.tmdb.org/t/p/w500//3GiB5Ybbhzt0ePRR2zgld9R56DB.jpg",
    "link": "/see/card/anime/100-56/Bananovaya-ryba.html",
    "year": "2018",
    "rating":"8.6",
    "isTV": true
},
{
    "name": "Принцесса Мононоке",
    "image": "http://image.tmdb.org/t/p/w500//dZE9oUyp14UEoPk5QV7emBu0Ix3.jpg",
    "link": "/see/card/anime/100-57/Princessa-Mononoke.html",
    "year": "1997",
    "rating":"8.3"
},
{
    "name": "Рок-Шоу!!",
    "image": "http://image.tmdb.org/t/p/w500//cDhy72poqVcnevY3BOGlE76bdca.jpg",
    "link": "/see/card/anime/100-58/Rok-Shou!!.html",
    "year": "2020",
    "rating":"6.0",
    "isTV": true
},
{
    "name": "Мой сосед Тоторо",
    "image": "http://image.tmdb.org/t/p/w500//ynClhtTAYG8N7FfU7EYK0T131rj.jpg",
    "link": "/see/card/anime/100-59/Moj-sosed-Totoro.html",
    "year": "1988",
    "rating":"8.1"
},
{
    "name": "Хост-клуб Оранской школы",
    "image": "http://image.tmdb.org/t/p/w500//rd6QqoO7mOqrfOWiSEa6XL9Jqlv.jpg",
    "link": "/see/card/anime/100-60/Host-klub-Oranskoj-shkoly.html",
    "year": "2006",
    "rating":"8.2",
    "isTV": true
},
{
    "name": "Аватар: Легенда об Аанге",
    "image": "http://image.tmdb.org/t/p/w500//pbTLpt8c7YUT4Vr6DE2ai3HY6U7.jpg",
    "link": "/see/card/anime/100-61/Avatar-Legenda-ob-Aange.html",
    "year": "2005",
    "rating":"8.7",
    "isTV": true
},
{
    "name": "Адский рай",
    "image": "http://image.tmdb.org/t/p/w500//75OaIA4S8ZKFVNmKnTCgAcNqwlC.jpg",
    "link": "/see/card/anime/100-62/Adskij-raj.html",
    "year": "2023",
    "rating":"8.2",
    "isTV": true
},
{
    "name": "Дитя погоды",
    "image": "http://image.tmdb.org/t/p/w500//unkWKrTb4SdHAEb78AD4BJvXbwh.jpg",
    "link": "/see/card/anime/100-63/Ditya pogody.html",
    "year": "2019",
    "rating":"8.0"
},
{
    "name": "Доктор Стоун",
    "image": "http://image.tmdb.org/t/p/w500//uJQCHiHAo7hoDyRPZ792ctjSZ71.jpg",
    "link": "/see/card/anime/100-64/Doktor-Stoun.html",
    "year": "2019",
    "rating":"8.5",
    "isTV": true
},
{
    "name": "Паприка",
    "image": "http://image.tmdb.org/t/p/w500//75lTLdVBlpWocSO8nWJqddyedCH.jpg",
    "link": "/see/card/anime/100-65/Paprika.html",
    "year": "2006",
    "rating":"7.8"
},
{
    "name": "Бродяга Кэнсин",
    "image": "http://image.tmdb.org/t/p/w500//eNs5hTCeZtZCy6rTTsH4sMOrKGZ.jpg",
    "link": "/see/card/anime/100-66/Brodyaga-Kensin.html",
    "year": "2023",
    "rating":"8.4",
    "isTV": true
},
{
    "name": "Король шаманов",
    "image": "http://image.tmdb.org/t/p/w500//conBjZLX8KBc18vdQjSNegZytln.jpg",
    "link": "/see/card/anime/100-67/Korol-shamanov.html",
    "year": "2001",
    "rating":"8.5",
    "isTV": true
},
{
    "name": "5 сантиметров в секунду",
    "image": "http://image.tmdb.org/t/p/w500//ef5Kpp8knIaWCsuKHKE41cQpuPl.jpg",
    "link": "/see/card/anime/100-68/5-santimetrov-v-sekundu.html",
    "year": "2007",
    "rating":"7.3"
},
{
    "name": "Путешествие Кино",
    "image": "http://image.tmdb.org/t/p/w500//HMCWRefv371GcIo1HsU0rkC7xx.jpg",
    "link": "/see/card/anime/100-69/Puteshestvie-Kino.html",
    "year": "2003",
    "rating":"7.7",
    "isTV": true
},
{
    "name": "Синий Экзорцист",
    "image": "http://image.tmdb.org/t/p/w500//g2RmOH0cDET7pptUrLnzVM6w8DJ.jpg",
    "link": "/see/card/anime/100-70/Sinij-Ekzorcist.html",
    "year": "2011",
    "rating":"7.9",
    "isTV": true
},
{
    "name": "Судьба: Начало",
    "image": "http://image.tmdb.org/t/p/w500//lkV0BOHMvdxHrfTWQfaFiKfKpRV.jpg",
    "link": "/see/card/anime/100-71/Sudba-Nachalo.html",
    "year": "2011",
    "rating":"8.0",
    "isTV": true
},
{
    "name": "Хвост Феи",
    "image": "http://image.tmdb.org/t/p/w500//q5GiuJHgJJwwk14ufs0ToxFkKt6.jpg",
    "link": "/see/card/anime/100-72/Hvost-Fei.html",
    "year": "2009",
    "rating":"7.9",
    "isTV": true
},
    
        // конец
       
        
    ];

    var cardContainer = $('#card-container');
    if (!cardContainer) {
        console.error("#card-container not found!");
        return;
    }

    cardContainer.html("");
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
                        ${val.isTV ? '<div class="card-TV" bis_skin_checked="1">TV</div>' : ''}
                        <div class="card-body">
                            <span class="card-tex">${val.name}<br><span class="year">${val.year}</span></span>
                        </div>
                    </a>
                </div>
            </li>
        `;

        cardContainer.append(cardHTML);
        count++;
    });

    // Инициализируем Splide после добавления карточек
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

    positionCardRatingTrand(); // Вызываем после инициализации
}

function positionCardRatingTrand() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const image = card.querySelector('.card-img-top');
        const rating = card.querySelector('.card-rating-trand');

        if (image && rating) {
            const imageRect = {
                width: image.offsetWidth,
                height: image.offsetHeight,
                top: image.offsetTop,
                left: image.offsetLeft
            };

            const cardRect = {
                width: card.offsetWidth,
                height: card.offsetHeight,
                top: card.offsetTop,
                left: card.offsetLeft
            };

            const bottom = cardRect.height - imageRect.height - imageRect.top + 8;
            const right = cardRect.width - imageRect.width - imageRect.left + 8;

            rating.style.position = 'absolute';
            rating.style.bottom = bottom + 'px';
            rating.style.right = right + 'px';
        }
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}