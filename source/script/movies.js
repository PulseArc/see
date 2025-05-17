

// Генерация карточек с случайными рейтингами
// Фильмы
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOMContentLoaded: Страница загружена");
    generateCards();
    setTimeout(positionCardRatingTrand, 100);
});

function generateCards() {
    var currentMovieTitleElement = document.querySelector('title');
    var currentMovieYearElement = document.getElementById('movie-year');
    var currentMovieGenresElement = document.querySelector('.full-genre');
    var allCardData = [
        {
            "name": "Прибытие",
            "image": "https://image.tmdb.org/t/p/w500//3K1byNV0CfChvJFNbe2ZAkiro4U.jpg",
            "link": "/see/card/movies/800-04/Pribytie.html",
            "year": "2016",
            "rating":"7.6",
            "genres": ["Драма", "Фантастика", "Детектив"]
        },
        {
            "name": "В первый раз",
            "image": "https://image.tmdb.org/t/p/w500//cnbNuaNbwblc0K6OC0h2nrVdqbi.jpg",
            "link": "/see/card/movies/800-05/V-pervyj-raz.html",
            "year": "2012",
            "rating":"7.0",
            "genres": ["Драма", "Комедия", "Мелодрама"]
        },
        {
            "name": "Паразиты",
            "image": "https://image.tmdb.org/t/p/w500//zg3lUyLTnpbS5N29G6B3a63O7uP.jpg",
            "link": "/see/card/movies/800-06/Parazity.html",
            "year": "2019",
            "rating":"8.5",
            "genres": ["Триллер", "Драма"]
        },
        {
            "name": "Идеальные незнакомцы",
            "image": "https://image.tmdb.org/t/p/w500//x6KjNrGkNUkhHcmml1vHR0989a9.jpg",
            "link": "/see/card/movies/800-07/Idealnye-neznakomcy.html",
            "year": "2016",
            "rating":"7.9",
            "genres": ["Комедия", "Драма"]
        },
        {
            "name": "Остров проклятых",
            "image": "https://image.tmdb.org/t/p/w500//3UVMyefkUBiktshtKIEnNXvOFKH.jpg",
            "link": "/see/card/movies/800-08/Ostrov-proklyatyh.html",
            "year": "2010",
            "rating":"8.2",
            "genres": ["Драма", "Триллер", "Детектив"]
        },
        {
            "name": "Логан",
            "image": "https://image.tmdb.org/t/p/w500//6FSoZ8mtEwPAO3k670G3yRaBpTK.jpg",
            "link": "/see/card/movies/800-09/Logan.html",
            "year": "2017",
            "rating":"7.8",
            "genres": ["Боевик", "Драма", "Фантастика"]
        },
        {
            "name": "Кит",
            "image": "https://image.tmdb.org/t/p/w500//bUA6X03vffX3qCy3diF91PFo428.jpg",
            "link": "/see/card/movies/800-11/Kit.html",
            "year": "2022",
            "rating":"7.8",
            "genres": ["Драма"]
        },
        {
            "name": "Кто там?",
            "image": "https://image.tmdb.org/t/p/original/awc6lTA5fYlkNsAAAZYZrGZ5yoq.jpg",
            "link": "/see/card/movies/800-13/Kto-tam.html",
            "year": "2015",
            "rating":"5.4",
            "genres": ["Ужасы", "Триллер", "Криминал"]
        },
        {
            "name": "Круэлла",
            "image": "https://image.tmdb.org/t/p/w500//hUfyYGP9Xf6cHF9y44JXJV3NxZM.jpg",
            "link": "/see/card/movies/800-15/Kruella.html",
            "year": "2021",
            "rating":"8.0",
            "genres": ["Комедия", "Криминал", "Приключения"]
        },
        {
            "name": "Зомби по имени Шон",
            "image": "https://image.tmdb.org/t/p/w500//hACq0LdC5WNjPb1jzTZzuj1R4qx.jpg",
            "link": "/see/card/movies/800-18/Zombi-po-imeni-Shon.html",
            "year": "2004",
            "rating":"7.5",
            "genres": ["Ужасы", "Комедия"]
        },
        {
            "name": "Выживший",
            "image": "https://image.tmdb.org/t/p/w500//gvWniVnehAkIAfy40VlcFy3vOef.jpg",
            "link": "/see/card/movies/800-19/Vyzhivshij.html",
            "year": "2015",
            "rating":"7.5",
            "genres": ["Вестерн", "Драма", "Приключения"]
        },
        {
            "name": "Гнев человеческий",
            "image": "https://image.tmdb.org/t/p/w500//nRE9zOfzdp4uQMeDOgCvMf6izNh.jpg",
            "link": "/see/card/movies/800-21/Gnev-chelovecheskij.html",
            "year": "2021",
            "rating":"7.6",
            "genres": ["Боевик", "Криминал", "Триллер"]
        },
        {
            "name": "Одержимость",
            "image": "https://image.tmdb.org/t/p/w500//nq3mYsTXx6086nFXxzDReQI0J1S.jpg",
            "link": "/see/card/movies/800-23/Oderzhimost.html",
            "year": "2014",
            "rating":"8.4",
            "genres": ["Драма", "Музыка"]
        },
        {
            "name": "Зелёная книга",
            "image": "https://image.tmdb.org/t/p/w500//aEeTnDzcnGRD5IjSFwVXjusKpu0.jpg",
            "link": "/see/card/movies/800-24/Zelyonaya-kniga.html",
            "year": "2018",
            "rating":"8.2",
            "genres": ["Драма", "История"]
        },
        {
            "name": "Ford против Ferrari",
            "image": "https://image.tmdb.org/t/p/w500//579BjDiFrK9VK8EnKZzYwtGGXCg.jpg",
            "link": "/see/card/movies/800-25/Ford-protiv-Ferrari.html",
            "year": "2019",
            "rating":"8.0",
            "genres": ["Драма", "Боевик", "История"]
        },
        {
            "name": "Миссия: Красный",
            "image": "https://image.tmdb.org/t/p/w500//6T36kuDbXCGRistIewSwKyTmijt.jpg",
            "link": "/see/card/movies/800-26/Missiya-Krasnyj.html",
            "year": "2024",
            "rating":"7.1",
            "genres": ["Боевик", "Комедия", "Фэнтези"]
        },
        {
            "name": "Братья Гримм",
            "image": "https://image.tmdb.org/t/p/w500//aADABzbuqnVWjXIu2jO5M1IkEIR.jpg",
            "link": "/see/card/movies/800-27/Bratya-Grimm.html",
            "year": "2005",
            "rating":"5.8",
            "genres": ["Приключения", "Фэнтези", "Комедия", "Триллер"]
        },
        {
            "name": "Посвященный",
            "image": "https://image.tmdb.org/t/p/w500//aXXEcHZsZ2lXUxPLaadnXeZVz5c.jpg",
            "link": "/see/card/movies/800-29/Posvyashennyj.html",
            "year": "2014",
            "rating":"6.6",
            "genres": ["Драма", "Фантастика"]
        },
        {
            "name": "И гаснет свет...",
            "image": "https://image.tmdb.org/t/p/w500//f5njPYl9eQdwf0xUwJuQ7no6ET.jpg",
            "link": "/see/card/movies/800-30/I-gasnet-svet.html",
            "year": "2016",
            "rating":"6.4",
            "genres": ["Ужасы"]
        },
        {
            "name": "Комната желаний",
            "image": "https://image.tmdb.org/t/p/w500//de2V6MaJzGRclg1pQaSG2v3i0yW.jpg",
            "link": "/see/card/movies/800-39/Komnata-zhelanij.html",
            "year": "2019",
            "rating":"6.4",
            "genres": ["Ужасы", "Драма", "Фантастика"]
        },
        {
            "name": "Дорогой Санта",
            "image": "https://image.tmdb.org/t/p/w500//v4LzYnQ1VGb0Q191Eb0NDSxdEKy.jpg",
            "link": "/see/card/movies/800-51/Dorogoj-Santa.html",
            "year": "2024",
            "rating":"6.3",
            "genres": ["Фэнтези", "Комедия"]
        },
        {
            "name": "Вивариум",
            "image": "https://image.tmdb.org/t/p/w500//6z5otnH68jltjyC6748irDsC7B3.jpg",
            "link": "/see/card/movies/800-37/Vivarium.html",
            "year": "2019",
            "rating":"6.1",
            "genres": ["Фантастика", "Триллер", "Детектив"]
        },
        {
            "name": "Марсианин",
            "image": "https://image.tmdb.org/t/p/w500//6U19srkH4wI6taluviXbVaIpsau.jpg",
            "link": "/see/card/movies/800-47/Marsianin.html",
            "year": "2015",
            "rating":"7.7",
            "genres": ["Драма", "Приключения", "Фантастика"]
        },
        {
            "name": "Наполеон",
            "image": "https://image.tmdb.org/t/p/w500//z7E0ZtNnRheOZThX2QtSu3RmtXP.jpg",
            "link": "/see/card/movies/800-89/Napoleon.html",
            "year": "2023",
            "rating":"6.4",
            "genres": ["История", "Военный", "Мелодрама"]
        },
        {
            "name": "Другой человек",
            "image": "https://image.tmdb.org/t/p/w500//dX5CQBzWX6ePHj8WvHWideMYw5D.jpg",
            "link": "/see/card/movies/800-64/Drugoj-chelovek.html",
            "year": "2024",
            "rating":"7.1",
            "genres": ["Комедия", "Драма"]
        },
        {
            "name": "Собачья жизнь 2",
            "image": "https://image.tmdb.org/t/p/w500//nTIYb1c3JcqFRo9V1RIzflsJTmj.jpg",
            "link": "/see/card/movies/800-151/Sobachya-zhizn-2.html",
            "year": "2019",
            "rating":"8.1",
            "genres": ["Семейный", "Приключения", "Драма"]
        },
        {
            "name": "Собачья жизнь",
            "image": "https://image.tmdb.org/t/p/w500//iTSNCcbjehovQf26YcW2uTRKBhH.jpg",
            "link": "/see/card/movies/800-152/Sobachya-zhizn.html",
            "year": "2017",
            "rating":"7.6",
            "genres": ["Приключения", "Комедия", "Семейный", "Драма"]
        },
        {
            "name": "Топ Ган: Мэверик",
            "image": "https://image.tmdb.org/t/p/w500//niNo4qTtIule2vvMFW05amvMtOB.jpg",
            "link": "/see/card/movies/800-10/Top-Gan-Meverik.html",
            "year": "2022",
            "rating":"8.2",
            "genres": ["Боевик", "Драма"]
        },
        {
            "name": "Лучший стрелок",
            "image": "https://image.tmdb.org/t/p/w500//8khU38Bv9ovTAP9M7lHqFA5ezAU.jpg",
            "link": "/see/card/movies/800-144/Luchshij-strelok.html",
            "year": "1986",
            "rating":"7.1",
            "genres": ["Боевик", "Драма"]
        },
        {
            "name": "Миссия невыполнима: Смертельная...",
            "image": "https://image.tmdb.org/t/p/w500//qncL23TGeAqmqmbBxJl4R6nYToJ.jpg",
            "link": "/see/card/movies/800-12/Missiya-nevypolnima-Smertelnaya....html",
            "year": "2023",
            "rating":"7.5",
            "genres": ["Боевик", "Приключения"]
        },
        {
            "name": "Миссия невыполнима: Последствия",
            "image": "https://image.tmdb.org/t/p/w500//2hDzCRhXWm5ry2nFs9HQBIon1DJ.jpg",
            "link": "/see/card/movies/800-145/Missiya-nevypolnima-Posledstviya.html",
            "year": "2018",
            "rating":"7.4",
            "genres": ["Боевик", "Приключения"]
        },
        {
            "name": "Миссия невыполнима: Племя изгоев",
            "image": "https://image.tmdb.org/t/p/w500//fTZcCAdMtMQllBRabszq6tZwhxS.jpg",
            "link": "/see/card/movies/800-146/Missiya-nevypolnima-Plemya-izgoev.html",
            "year": "2015",
            "rating":"7.2",
            "genres": ["Боевик", "Триллер", "Приключения"]
        },
        {
            "name": "Миссия невыполнима: Протокол Фантом",
            "image": "https://image.tmdb.org/t/p/w500//neKiBzXzI6yuN8Fn8beoLcYASsE.jpg",
            "link": "/see/card/movies/800-147/Missiya-nevypolnima-Protokol-Fantom.html",
            "year": "2011",
            "rating":"7.1",
            "genres": ["Боевик", "Триллер", "Приключения"]
        },
        {
            "name": "Миссия невыполнима 3",
            "image": "https://image.tmdb.org/t/p/w500//1QgOjoYLproxIWRZxhZx9pXsmuY.jpg",
            "link": "/see/card/movies/800-148/Missiya-nevypolnima-3.html",
            "year": "2006",
            "rating":"6.7",
            "genres": ["Боевик","Приключения", "Триллер"]
        },
        {
            "name": "Миссия невыполнима 2",
            "image": "https://image.tmdb.org/t/p/w500//er6j9Gh6cX2na9B0wXMcPAD2tbl.jpg",
            "link": "/see/card/movies/800-149/Missiya-nevypolnima-2.html",
            "year": "2000",
            "rating":"6.1",
            "genres": ["Приключения","Боевик", "Триллер"]
        },
        {
            "name": "Миссия невыполнима",
            "image": "https://image.tmdb.org/t/p/w500//1qnh1n1tVRq7JY8MYbvaZgfRfq2.jpg",
            "link": "/see/card/movies/800-150/Missiya-nevypolnima.html",
            "year": "1996",
            "rating":"7.0",
            "genres": ["Приключения","Боевик", "Триллер"]
        },
        {
            "name": "Стражи Галактики. Часть 3",
            "image": "https://image.tmdb.org/t/p/w500//5rHLzqZvw85tnhy8qpnAsN8Q7xO.jpg",
            "link": "/see/card/movies/800-153/Strazhi-Galaktiki-Chast-3.html",
            "year": "2023",
            "rating":"7.9",
            "genres": ["Фантастика","Боевик", "Комедия"]
        },
        {
            "name": "Стражи Галактики. Часть 2",
            "image": "https://image.tmdb.org/t/p/w500//miAFwzWPkv7l8VPwgH2sV5oQQKx.jpg",
            "link": "/see/card/movies/800-154/Strazhi-Galaktiki-Chast-2.html",
            "year": "2017",
            "rating":"7.6",
            "genres": ["Фантастика","Приключения", "Боевик"]
        },
        {
            "name": "Стражи Галактики",
            "image": "https://image.tmdb.org/t/p/w500//s8jpilArz8J5X07O4IB7ahMwgQP.jpg",
            "link": "/see/card/movies/800-14/Strazhi-Galaktiki.html",
            "year": "2014",
            "rating":"7.9",
            "genres": ["Боевик","Фантастика", "Приключения"]
        },
        {
            "name": "Достать ножи: Стеклянная луковица",
            "image": "https://image.tmdb.org/t/p/w500//14PudL6hCEhqwPDbxoBt2RHK5cC.jpg",
            "link": "/see/card/movies/800-155/Dostat-nozhi-Steklyannaya-lukovica.html",
            "year": "2022",
            "rating":"7.1",
            "genres": ["Комедия","Криминал", "Детектив"]
        },
        {
            "name": "Достать ножи",
            "image": "https://image.tmdb.org/t/p/w500//mGfb75tcFWxuT8esS1isHrNFE90.jpg",
            "link": "/see/card/movies/800-17/Dostat-nozhi.html",
            "year": "2019",
            "rating":"7.8",
            "genres": ["Комедия","Криминал", "Детектив"]
        },
        {
            "name": "Бегущий по лезвию 2049",
            "image": "https://image.tmdb.org/t/p/w500//kAq1RFHqtZrBvKve7GOGdgUU399.jpg",
            "link": "/see/card/movies/800-16/Begushij-po-lezviyu-2049.html",
            "year": "2017",
            "rating":"7.6",
            "genres": ["Фантастика","Драма"]
        },
        {
            "name": "Бегущий по лезвию",
            "image": "https://image.tmdb.org/t/p/w500//dFzA82XdkobzdOjrYLMIfApzCVC.jpg",
            "link": "/see/card/movies/800-156/Begushij-po-lezviyu.html",
            "year": "1982",
            "rating":"7.9",
            "genres": ["Фантастика","Драма", "Триллер"]
        },
        {
            "name": "Джон Уик 4",
            "image": "https://image.tmdb.org/t/p/w500//o29otcx30U3EkqNVGC2feJVz5yr.jpg",
            "link": "/see/card/movies/800-22/Dzhon-Uik-4.html",
            "year": "2023",
            "rating":"7.7",
            "genres": ["Боевик","Триллер", "Криминал"]
        },
        {
            "name": "Джон Уик 3",
            "image": "https://image.tmdb.org/t/p/w500//2RDx4bMYF5TbTdTBoOwDLDgIej.jpg",
            "link": "/see/card/movies/800-157/Dzhon-Uik-3.html",
            "year": "2019",
            "rating":"7.4",
            "genres": ["Боевик","Триллер", "Криминал"]
        },
        {
            "name": "Джон Уик 2",
            "image": "https://image.tmdb.org/t/p/w500//60dPOD22s6TS2SfQiiOGOePBg8N.jpg",
            "link": "/see/card/movies/800-158/Dzhon-Uik-2.html",
            "year": "2017",
            "rating":"7.3",
            "genres": ["Боевик","Триллер", "Криминал"]
        },
        {
            "name": "Джон Уик",
            "image": "https://image.tmdb.org/t/p/w500//2hfeF2566IKZ30c1BAay0N2lxBr.jpg",
            "link": "/see/card/movies/800-159/Dzhon-Uik.html",
            "year": "2014",
            "rating":"7.4",
            "genres": ["Боевик","Триллер"]
        },
        {
            "name": "Новые мутанты",
            "image": "https://image.tmdb.org/t/p/w500//2lyCa61EoF44vcQPXQfJzNvKT2D.jpg",
            "link": "/see/card/movies/800-160/Novye-mutanty.html",
            "year": "2020",
            "rating":"6.1",
            "genres": ["Фантастика","Ужасы", "Боевик"]
        },
        {
            "name": "Люди Икс: Тёмный Феникс",
            "image": "https://image.tmdb.org/t/p/w500//927lqua6AHPW4mUflU26yV3APKZ.jpg",
            "link": "/see/card/card/movies/800-161/Lyudi-Iks-Tyomnyj-Feniks.html",
            "year": "2019",
            "rating":"6.0",
            "genres": ["Фантастика","Боевик", "Приключения"]
        },
        {
            "name": "Люди Икс: Апокалипсис",
            "image": "https://image.tmdb.org/t/p/w500//aJ0WyuZpyRjTpz1DT1jcwgReXnP.jpg",
            "link": "/see/card/movies/800-162/Lyudi-Iks-Apokalipsis.html",
            "year": "2016",
            "rating":"6.5",
            "genres": ["Приключения","Боевик", "Фантастика"]
        },
        {
            "name": "Люди Икс: Дни минувшего будущего",
            "image": "https://image.tmdb.org/t/p/w500//9IdeGyzRZH66RgNq9zSZDwPPllg.jpg",
            "link": "/see/card/movies/800-28/Lyudi-Iks-Dni-minuvshego-budushego.html",
            "year": "2014",
            "rating":"7.5",
            "genres": ["Боевик","Приключения", "Фантастика"]
        },
        {
            "name": "Росомаха: Бессмертный",
            "image": "https://image.tmdb.org/t/p/w500//ol7Qyzx31q6HG9zGOvqiPIUIk3f.jpg",
            "link": "/see/card/movies/800-163/Rosomaha-Bessmertnyj.html",
            "year": "2013",
            "rating":"6.4",
            "genres": ["Боевик","Приключения", "Фантастика"]
        },
        {
            "name": "Люди Икс: Первый класс",
            "image": "https://image.tmdb.org/t/p/w500//6vkQtWNHqq3uzcS0PH2mER7Gzjd.jpg",
            "link": "/see/card/movies/800-164/Lyudi-Iks-Pervyj-klass.html",
            "year": "2011",
            "rating":"7.3",
            "genres": ["Боевик","Приключения", "Фантастика"]
        },
        {
            "name": "Люди Икс: Начало. Росомаха",
            "image": "https://image.tmdb.org/t/p/w500//nuOayxoKOCT6jog60i4A0iEfVk0.jpg",
            "link": "/see/card/movies/800-165/Lyudi-Iks-Nachalo-Rosomaha.html",
            "year": "2009",
            "rating":"6.3",
            "genres": ["Приключения","Боевик", "Фантастика"]
        },
        {
            "name": "Люди Икс: Последняя битва",
            "image": "https://image.tmdb.org/t/p/w500//jD5bK5jxDprc1StAhHXMAgaEBMY.jpg",
            "link": "/see/card/movies/800-166/Lyudi-Iks-Poslednyaya-bitva.html",
            "year": "2006",
            "rating":"6.4",
            "genres": ["Боевик","Фантастика", "Триллер"]
        },
        {
            "name": "Люди Икс 2",
            "image": "https://image.tmdb.org/t/p/w500//qkQ3KZ0wF7pyPWMzL5TxnEKKDiJ.jpg",
            "link": "/see/card/movies/800-167/Lyudi-Iks-2.html",
            "year": "2003",
            "rating":"7.0",
            "genres": ["Приключения","Боевик", "Фантастика"]
        },
        {
            "name": "Люди Икс",
            "image": "https://image.tmdb.org/t/p/w500//wBqh8PMSOoUmSCyilXR8IRnjhwN.jpg",
            "link": "/see/card/movies/800-168/Lyudi-Iks.html",
            "year": "2000",
            "rating":"7.0",
            "genres": ["Приключения","Боевик", "Фантастика"]
        },
        {
            "name": "Дом у дороги",
            "image": "https://image.tmdb.org/t/p/w500//z8AWDW9BaZ1oQohej87TdACGszm.jpg",
            "link": "/see/card/movies/800-31/Dom-u-dorogi.html",
            "year": "2024",
            "rating":"6.9",
            "genres": ["Боевик","Триллер"]
        },
        {
            "name": "Придорожная закусочная",
            "image": "https://image.tmdb.org/t/p/w500//2vYF1J7QeM1On7thBAL2RnVibHk.jpg",
            "link": "/see/card/movies/800-169/Pridorozhnaya-zakusochnaya.html",
            "year": "1989",
            "rating":"6.7",
            "genres": ["Боевик","Триллер"]
        },
        {
            "name": "King’s Man: Начало",
            "image": "https://image.tmdb.org/t/p/w500//9NyzS42sc9mvNLyPJtYqTqpkEoY.jpg",
            "link": "/see/card/movies/800-170/King’s-Man-Nachalo.html",
            "year": "2021",
            "rating":"6.7",
            "genres": ["Боевик","Приключения", "Триллер"]
        },
        {
            "name": "Kingsman: Золотое кольцо",
            "image": "https://image.tmdb.org/t/p/w500//vVQXYV7x6gpk9oVFbzsBxkIxdqT.jpg",
            "link": "/see/card/movies/800-171/Kingsman-Zolotoe-kolco.html",
            "year": "2017",
            "rating":"7.0",
            "genres": ["Боевик","Приключения", "Комедия", "Триллер"]
        },
        {
            "name": "Kingsman: Секретная служба",
            "image": "https://image.tmdb.org/t/p/w500//1br1GunwmrGaD9H3eyRPjLx1HY4.jpg",
            "link": "/see/card/movies/800-32/Kingsman-Sekretnaya-sluzhba.html",
            "year": "2015",
            "rating":"7.6",
            "genres": ["Криминал","Комедия", "Боевик"]
        },
        {
            "name": "Побег из Шоушенка",
            "image": "https://image.tmdb.org/t/p/w500//yvmKPlTIi0xdcFQIFcQKQJcI63W.jpg",
            "link": "/see/card/movies/800-33/Pobeg-iz-Shoushenka.html",
            "year": "1994",
            "rating":"8.7",
            "genres": ["Драма","Криминал"]
        },
        {
            "name": "Счастливого нового дня смерти",
            "image": "https://image.tmdb.org/t/p/w500//ZstlucYRCRfkZ74O2LUfbbNbyb.jpg",
            "link": "/see/card/movies/800-172/Schastlivogo-novogo-dnya-smerti.html",
            "year": "2019",
            "rating":"6.3",
            "genres": ["Комедия","Ужасы", "Фантастика"]
        },
        {
            "name": "Счастливого дня смерти",
            "image": "https://image.tmdb.org/t/p/w500//gxOqCjZ3YGxZpkKchQbHX3DeQ3V.jpg",
            "link": "/see/card/movies/800-34/Schastlivogo-dnya-smerti.html",
            "year": "2017",
            "rating":"6.7",
            "genres": ["Комедия","Ужасы", "Фантастика"]
        },
        {
            "name": "Геошторм",
            "image": "https://image.tmdb.org/t/p/w500//8kMSc2UVFCXScIvhkSuSiROySbS.jpg",
            "link": "/see/card/movies/800-36/Geoshtorm.html",
            "year": "2017",
            "rating":"6.1",
            "genres": ["Боевик","Фантастика", "Триллер"]
        },
        {
            "name": "Тёмный рыцарь: Возрождение легенды",
            "image": "https://image.tmdb.org/t/p/w500//2NaeRiOuxkpWv8s0uBzSlp7SuCn.jpg",
            "link": "/see/card/movies/800-173/Tyomnyj-rycar-Vozrozhdenie-legendy.html",
            "year": "2012",
            "rating":"7.8",
            "genres": ["Боевик","Криминал", "Драма", "Триллер"]
        },
        {
            "name": "Тёмный рыцарь",
            "image": "https://image.tmdb.org/t/p/w500//dxWaYQtgpLbycqUpHzkqqYkT5I3.jpg",
            "link": "/see/card/movies/800-38/Tyomnyj-rycar.html",
            "year": "2008",
            "rating":"8.5",
            "genres": ["Боевик","Криминал", "Драма", "Триллер"]
        },
        {
            "name": "Бэтмен: Начало",
            "image": "https://image.tmdb.org/t/p/w500//fIfmG3EaIy3eqebyq7hXjl1ymQW.jpg",
            "link": "/see/card/movies/800-174/Betmen-Nachalo.html",
            "year": "2005",
            "rating":"7.7",
            "genres": ["Боевик","Криминал", "Драма", "Триллер"]
        },
        {
            "name": "Реальные упыри",
            "image": "https://image.tmdb.org/t/p/w500//tmUHOe07a84zgwMeWCpwnAqUwU4.jpg",
            "link": "/see/card/movies/800-40/Realnye-upyri.html",
            "year": "2014",
            "rating":"7.6",
            "genres": ["Комедия","Ужасы"]
        },
        {
            "name": "Крёстный отец 3",
            "image": "https://image.tmdb.org/t/p/w500//b0kAYDl4NApOfzNWdlYzmXwujYU.jpg",
            "link": "/see/card/movies/800-175/Kryostnyj-otec-3.html",
            "year": "1990",
            "rating":"7.4",
            "genres": ["Криминал", "Драма", "Триллер"]
        },
        {
            "name": "Крёстный отец 2",
            "image": "https://image.tmdb.org/t/p/w500//tOLQ3iRDfbwhVaw3QjDzIOS7zcu.jpg",
            "link": "/see/card/movies/800-176/Kryostnyj-otec-2.html",
            "year": "1974",
            "rating":"8.6",
            "genres": ["Криминал", "Драма", "Триллер"]
        },
        {
            "name": "Крёстный отец",
            "image": "https://image.tmdb.org/t/p/w500//hoowzozsn0XQGtgH8nyivAMZfPN.jpg",
            "link": "/see/card/movies/800-41/Kryostnyj-otec.html",
            "year": "1972",
            "rating":"8.7",
            "genres": ["Криминал", "Драма", "Триллер"]
        },
        {
            "name": "Джобс: Империя соблазна",
            "image": "https://image.tmdb.org/t/p/w500//vPuWVOBvMsnpdIT8Qb2suLhIFSi.jpg",
            "link": "/see/card/movies/800-42/Dzhobs-Imperiya-soblazna.html",
            "year": "2013",
            "rating":"6.1",
            "genres": ["Драма", "История"]
        },
        {
            "name": "Скотт Пилигрим против всех",
            "image": "https://image.tmdb.org/t/p/w500//bLJEFAh6tILVS1PS5mCRlA9HVsR.jpg",
            "link": "/see/card/movies/800-44/Skott-Piligrim-protiv-vseh.html",
            "year": "2010",
            "rating":"7.5",
            "genres": ["Боевик", "Комедия", "Мелодрама"]
        },
        {
            "name": "Спасти рядового Райана",
            "image": "https://image.tmdb.org/t/p/w500//vhIwsqsMmdv6uwup4V6HJSMcQxI.jpg",
            "link": "/see/card/movies/800-45/Spasti-ryadovogo-Rajana.html",
            "year": "1998",
            "rating":"8.2",
            "genres": ["Драма", "История", "Военный"]
        },
        {
            "name": "Пассажиры",
            "image": "https://image.tmdb.org/t/p/w500//RY7YPqLRkgK5KiIq3kFQhCUJnB.jpg",
            "link": "/see/card/movies/800-46/Passazhiry.html",
            "year": "2016",
            "rating":"7.0",
            "genres": ["Драма", "Мелодрама", "Фантастика"]
        },
        {
            "name": "Список Шиндлера",
            "image": "https://image.tmdb.org/t/p/w500//4K8fGGcJP2EoGDucILnaJcOJhZl.jpg",
            "link": "/see/card/movies/800-48/Spisok-Shindlera.html",
            "year": "1993",
            "rating":"8.6",
            "genres": ["Драма", "История", "Военный"]
        },
        {
            "name": "5-я волна",
            "image": "https://image.tmdb.org/t/p/w500//5ngef6vRYcn55NixtJAfK2JTDxY.jpg",
            "link": "/see/card/movies/800-49/5-aya-volna.html",
            "year": "2016",
            "rating":"5.9",
            "genres": ["Приключения", "Боевик", "Фантастика",]
        },
        {
            "name": "Бойцовский клуб",
            "image": "https://image.tmdb.org/t/p/w500//66RvLrRJTm4J8l3uHXWF09AICol.jpg",
            "link": "/see/card/movies/800-50/Bojcovskij-klub.html",
            "year": "1999",
            "rating":"8.4",
            "genres": ["Драма", "Криминал", "Триллер"]
        },
        {
            "name": "Ущелье",
            "image": "https://image.tmdb.org/t/p/w500//yiUINsMKnemBFcUHqpv94yJolWH.jpg",
            "link": "/see/card/movies/800-02/Ushele.html",
            "year": "2025",
            "rating":"7.7",
            "genres": ["Триллер", "Мелодрама", "Фантастика"]
        },
        {
            "name": "Назад в будущее 3",
            "image": "https://image.tmdb.org/t/p/w500//xLRedXsCU3jDALWiQYNv1ZUbH5T.jpg",
            "link": "/see/card/movies/800-177/Nazad-v-budushee-3.html",
            "year": "1990",
            "rating":"7.5",
            "genres": ["Приключения", "Комедия", "Фантастика"]
        },
        {
            "name": "Назад в будущее 2",
            "image": "https://image.tmdb.org/t/p/w500//ieHWlIrxpTpdmvqjgxxq0lXsgYc.jpg",
            "link": "/see/card/movies/800-178/Nazad-v-budushee-2.html",
            "year": "1989",
            "rating":"7.8",
            "genres": ["Приключения", "Комедия", "Фантастика"]
        },
        {
            "name": "Назад в будущее",
            "image": "https://image.tmdb.org/t/p/w500//9a07nfvCoAAyUMfY0yQqsOjlb2C.jpg",
            "link": "/see/card/movies/800-52/Nazad-v-budushee.html",
            "year": "1985",
            "rating":"8.3",
            "genres": ["Приключения", "Комедия", "Фантастика"]
        },
        {
            "name": "Щелкунчики",
            "image": "https://image.tmdb.org/t/p/w500//iAoS1l0nRLKl4d97mbKF4pUFZhn.jpg",
            "link": "/see/card/movies/800-53/Shelkunchiki.html",
            "year": "2024",
            "rating":"5.9",
            "genres": ["Драма", "Комедия"]
        },
        {
            "name": "Гладиатор 2",
            "image": "https://image.tmdb.org/t/p/w500//6N7F1Ga9m0CTHziA2Fs7BQczaKZ.jpg",
            "link": "/see/card/movies/800-179/Gladiator-2.html",
            "year": "2024",
            "rating":"6.8",
            "genres": ["Боевик", "Приключения", "Драма"]
        },
        {
            "name": "Гладиатор",
            "image": "https://image.tmdb.org/t/p/w500//1wjNqlfsuHNTXTpCt2ZOV2iPxaf.jpg",
            "link": "/see/card/movies/800-54/Gladiator.html",
            "year": "2000",
            "rating":"8.2",
            "genres": ["Боевик", "Приключения", "Драма"]
        },
        {
            "name": "Почему он?",
            "image": "https://image.tmdb.org/t/p/w500//q0wK2bXSLulAre276C6M4ZS8Kfo.jpg",
            "link": "/see/card/movies/800-55/Pochemu-on.html",
            "year": "2016",
            "rating":"6.4",
            "genres": ["Комедия"]
        },
        {
            "name": "Аватар: Путь воды",
            "image": "https://image.tmdb.org/t/p/w500//yFNn7uWudLLWDJqfj3fwh5CcUdR.jpg",
            "link": "/see/card/movies/800-180/Avatar-Put-vody.html",
            "year": "2022",
            "rating":"7.6",
            "genres": ["Фантастика", "Приключения", "Боевик"]
        },
        {
            "name": "Аватар",
            "image": "https://image.tmdb.org/t/p/w200//lUKcrcO3wEPhNnzGq06JIX7GIEb.jpg",
            "link": "/see/card/movies/800-56/Avatar.html",
            "year": "2009",
            "rating":"7.6",
            "genres": ["Фантастика", "Приключения", "Боевик"]
        },
        {
            "name": "21 мост",
            "image": "https://image.tmdb.org/t/p/w500//lWDDukaPvDzIRYxgUuGFIH5YfyM.jpg",
            "link": "/see/card/movies/800-01/21-Most.html",
            "year": "2019",
            "rating":"6.8",
            "genres": ["Криминал", "Боевик", "Драма"]
        },
        {
            "name": "Эмилия Перес",
            "image": "https://image.tmdb.org/t/p/w500//6KvGEOCUBsgTUPkl1oWhH0Y3ePy.jpg",
            "link": "/see/card/movies/800-03/Emilia-Perez.html",
            "year": "2024",
            "rating":"7.8",
            "genres": ["Драма", "Триллер", "Комедия", "Мюзикл"]
        },
        {
            "name": "Спуск в бездну",
            "image": "https://image.tmdb.org/t/p/w500//bSb3ynYHWJbXSSMRhblzrsgt1lO.jpg",
            "link": "/see/card/movies/800-57/Spusk-v-bezdnu.html",
            "year": "2023",
            "rating":"5.7",
            "genres": ["Приключения", "Ужасы", "Драма"]
        },
        {
            "name": "Город тайн: Исчезнувшая",
            "image": "https://image.tmdb.org/t/p/w500//ez9LtVmvfbWjX9Spx4DrNEFVErx.jpg",
            "link": "/see/card/movies/800-58/Gorod-tajn-Ischeznuvshaya.html",
            "year": "2024",
            "rating":"6.5",
            "genres": ["Детектив", "Триллер"]
        },
        {
            "name": "Город тайн",
            "image": "https://image.tmdb.org/t/p/w500//phG9MqZdBuzyB2G8wTgGKEQZgNH.jpg",
            "link": "/see/card/movies/800-181/Gorod-tajn.html",
            "year": "2021",
            "rating":"6.8",
            "genres": ["Детектив", "Триллер"]
        },
        {
            "name": "Хитмен. Последнее дело",
            "image": "https://image.tmdb.org/t/p/w500//3TM9MzC1f6F3BwpPJhdv3hXWQRX.jpg",
            "link": "/see/card/movies/800-59/Hitmen-Poslednee-delo.html",
            "year": "2024",
            "rating":"6.9",
            "genres": ["Боевик", "Криминал", "Триллер"]
        },
        {
            "name": "Хитмэн: Агент 47",
            "image": "https://image.tmdb.org/t/p/original/AsLFRe7eORaNBO5yEVjLGYt4nxj.jpg",
            "link": "/see/card/movies/800-182/Hitmen-Agent-47.html",
            "year": "2015",
            "rating":"5.9",
            "genres": ["Боевик", "Криминал", "Триллер"]
        },
        {
            "name": "Хитмэн",
            "image": "https://image.tmdb.org/t/p/original/iHSpeT9cXOFDzXCWtkxxo8ZzREE.jpg",
            "link": "/see/card/movies/800-183/Hitmen.html",
            "year": "2007",
            "rating":"6.1",
            "genres": ["Боевик", "Криминал", "Триллер"]
        },
        {
            "name": "Непробиваемые",
            "image": "https://image.tmdb.org/t/p/w500//z497zVpHuGDQT4lBcHZcYdf6eDT.jpg",
            "link": "/see/card/movies/800-60/Neprobivaemye.html",
            "year": "2024",
            "rating":"5.6",
            "genres": ["Боевик", "Криминал", "Драма"]
        },
        {
            "name": "Однажды в Ла-Рое",
            "image": "https://image.tmdb.org/t/p/w500//8VQr2REac6qlshcQGBsmq5s4SiU.jpg",
            "link": "/see/card/movies/800-61/Odnazhdy-v-La-Roe.html",
            "year": "2024",
            "rating":"6.8",
            "genres": ["Криминал", "Комедия", "Триллер"]
        },
        {
            "name": "Охотники за привидениями: Леденящий ужас",
            "image": "https://image.tmdb.org/t/p/w500//ltG6ypHUyPv3y4e4ZOxRumYwikV.jpg",
            "link": "/see/card/movies/800-62/Ohotniki-za-privideniyami-Ledenyashij-uzhas.html",
            "year": "2024",
            "rating":"6.5",
            "genres": ["Фэнтези", "Приключения", "Комедия"]
        },
        {
            "name": "Охотники за привидениями: Наследники",
            "image": "https://image.tmdb.org/t/p/w500//wqXTMwkoBVrQ94FSBDAIwhK2ONa.jpg",
            "link": "/see/card/movies/800-184/Ohotniki-za-privideniyami-Nasledniki.html",
            "year": "2021",
            "rating":"7.3",
            "genres": ["Фэнтези", "Приключения", "Комедия"]
        },
        {
            "name": "Охотники за привидениями",
            "image": "https://image.tmdb.org/t/p/w500//xXcZFa1vXZ7JJAdFmmDL3IAURBS.jpg",
            "link": "/see/card/movies/800-185/Ohotniki-za-privideniyami2016.html",
            "year": "2016",
            "rating":"5.3",
            "genres": ["Фэнтези", "Приключения", "Комедия"]
        },
        {
            "name": "Охотники за привидениями 2",
            "image": "https://image.tmdb.org/t/p/w500//sNVd1heRFJFlwgOZEvQpLOsNusG.jpg",
            "link": "/see/card/movies/800-186/Ohotniki-za-privideniyami-2.html",
            "year": "1989",
            "rating":"6.6",
            "genres": ["Фэнтези", "Приключения", "Комедия"]
        },
        {
            "name": "Охотники за привидениями",
            "image": "https://image.tmdb.org/t/p/w500//4T0fzZK0hQkEkM0FIVTkgMRYzBn.jpg",
            "link": "/see/card/movies/800-187/Ohotniki-za-privideniyami1984.html",
            "year": "1984",
            "rating":"7.5",
            "genres": ["Фэнтези", "Приключения", "Комедия"]
        },
        {
            "name": "Дюна: Часть вторая",
            "image": "https://image.tmdb.org/t/p/w500//3aLghRkuJc9cs770fxo4a6YWht3.jpg",
            "link": "/see/card/movies/800-20/Dyuna-Chast-vtoraya.html",
            "year": "2024",
            "rating":"8.1",
            "genres": ["Фантастика", "Приключения"]
        },
        {
            "name": "Дюна",
            "image": "https://image.tmdb.org/t/p/w500//3hbXNclcHaj5KiF6kK41GBMjyFr.jpg",
            "link": "/see/card/movies/800-63/Dyuna.html",
            "year": "2021",
            "rating":"7.8",
            "genres": ["Фантастика", "Приключения"]
        },
        {
            "name": "Золото джунглей",
            "image": "https://image.tmdb.org/t/p/w500//1HuoF1IYoixGXhYznep4kBtijLZ.jpg",
            "link": "/see/card/movies/800-236/Zoloto-dzhunglej.html",
            "year": "2017",
            "rating":"5.7",
            "genres": ["История", "Драма", "Боевик"]
        },
        {
            "name": "Вуди Вудпекер в летнем лагере",
            "image": "https://image.tmdb.org/t/p/w500//oAF42DFZA430eEzRmEcrpB0D3rp.jpg",
            "link": "/see/card/movies/800-65/Vudi-Vudpeker-otpravlyaetsya-v-lager.html",
            "year": "2024",
            "rating":"6.5",
            "genres": ["Семейный", "Комедия"]
        },
        {
            "name": "Вуди Вудпекер",
            "image": "https://image.tmdb.org/t/p/w500//9F4ccwQlDToaG83IMlxb4w6ftN0.jpg",
            "link": "/see/card/movies/800-188/Vudi-Vudpeker.html",
            "year": "2017",
            "rating":"6.6",
            "genres": ["Семейный", "Комедия"]
        },
        {
            "name": "Возвращение грозной семейки",
            "image": "https://image.tmdb.org/t/p/w500//o1SGF0txwzZxBJbOsvIgbBtRk3A.jpg",
            "link": "/see/card/movies/800-66/Vozvrashenie-grozno-semejki.html",
            "year": "2024",
            "rating":"7.0",
            "genres": ["Семейный", "Фантастика", "Комедия"]
        },
        {
            "name": "След киллера",
            "image": "https://image.tmdb.org/t/p/original/uGTulIuR0NlI2CQzTRHHEuJJejp.jpg",
            "link": "/see/card/movies/800-67/Sled-killera.html",
            "year": "2024",
            "rating":"5.7",
            "genres": ["Боевик", "Драма", "Триллер", "Криминал"]
        },
        {
            "name": "Боб Марли: Одна любовь",
            "image": "https://image.tmdb.org/t/p/w500//79G6T8JSmUrIsypQVzsa5VjfOXU.jpg",
            "link": "/see/card/movies/800-68/Bob-Marli-Odna-lyubov.html",
            "year": "2024",
            "rating":"6.7",
            "genres": ["Музыка", "История", "Драма"]
        },
        {
            "name": "Джокер: Безумие на двоих",
            "image": "https://image.tmdb.org/t/p/w500//sqHQhhjsfZ0UAu67RiIaUkabZZD.jpg",
            "link": "/see/card/movies/800-69/Dzhoker-Bezumie-na-dvoih.html",
            "year": "2024",
            "rating":"5.5",
            "genres": ["Музыка", "Драма", "Криминал", "Триллер"]
        },
        {
            "name": "Джокер",
            "image": "https://image.tmdb.org/t/p/w500//5itx9nz3gXWgoD2I1UdaqOrphYm.jpg",
            "link": "/see/card/movies/800-189/Dzhoker.html",
            "year": "2019",
            "rating":"8.1",
            "genres": ["Драма", "Криминал", "Триллер"]
        },
        {
            "name": "Дыши!",
            "image": "https://image.tmdb.org/t/p/w500//4pRonl4LTHFw567HyX0iYolyaWS.jpg",
            "link": "/see/card/movies/800-70/Dyshi!.html",
            "year": "2024",
            "rating":"5.8",
            "genres": ["Боевик", "Фантастика", "Детектив"]
        },
        {
            "name": "Жуть",
            "image": "https://image.tmdb.org/t/p/w500//krCt93RSbZMmiPIw2k1r9zzfzTb.jpg",
            "link": "/see/card/movies/800-71/Zhut.html",
            "year": "2024",
            "rating":"6.6",
            "genres": ["Ужасы", "Триллер"]
        },
        {
            "name": "Чёрный чай",
            "image": "https://image.tmdb.org/t/p/w500//v6HmHzoOJVwFmdKDKpdfnnsRk39.jpg",
            "link": "/see/card/movies/800-72/Chyornyj-chaj.html",
            "year": "2024",
            "rating":"5.9",
            "genres": ["Мелодрама", "Драма"]
        },
        {
            "name": "Ученик. Восхождение Трампа",
            "image": "https://image.tmdb.org/t/p/w500//1rXbP2AdiJzbqL6CKxdZMeFuE4O.jpg",
            "link": "/see/card/movies/800-73/Uchenik-Voshozhdenie-Trampa.html",
            "year": "2024",
            "rating":"6.9",
            "genres": ["История", "Драма"]
        },
        {
            "name": "Профессионал",
            "image": "https://image.tmdb.org/t/p/w500//uBAgrWuglga1Vo7oUlFL0KFORcN.jpg",
            "link": "/see/card/movies/800-74/Professional.html",
            "year": "2024",
            "rating":"5.9",
            "genres": ["Боевик", "Криминал", "Триллер", "Детектив"]
        },
        {
            "name": "Кошмарные каникулы",
            "image": "https://image.tmdb.org/t/p/w500//ud6dvc0s6YapooFkUNQPuZ4eg5u.jpg",
            "link": "/see/card/movies/800-75/Koshmarnye-kanikuly.html",
            "year": "2024",
            "rating":"6.5",
            "genres": ["Приключения", "Детектив", "Ужасы"]
        },
        {
            "name": "Подземелья и драконы: Честь среди воров",
            "image": "https://image.tmdb.org/t/p/w500//nAbRIxxRJfCP2U9tpVJU1zWb6Ni.jpg",
            "link": "/see/card/movies/800-76/Podzemelya-i-drakony-Chest-sredi-vorov.html",
            "year": "2023",
            "rating":"7.3",
            "genres": ["Приключения", "Фэнтези", "Комедия"]
        },
        {
            "name": "Мегалополис",
            "image": "https://image.tmdb.org/t/p/w500//epglGr4yDHGaZVf8faMm7ilcHDu.jpg",
            "link": "/see/card/movies/800-77/Megalopolis.html",
            "year": "2024",
            "rating":"5.3",
            "genres": ["Фантастика", "Драма"]
        },
        {
            "name": "Выгон",
            "image": "https://image.tmdb.org/t/p/w500//z9GAjN21PQPDp0eRB4Ct6vIZaPF.jpg",
            "link": "/see/card/movies/800-78/Vygon.html",
            "year": "2024",
            "rating":"6.8",
            "genres": ["Драма"]
        },
        {
            "name": "Элиас",
            "image": "https://image.tmdb.org/t/p/w500//saPG6ZSORtOdCbl7S4dinNkpmA6.jpg",
            "link": "/see/card/movies/800-79/Elias.html",
            "year": "2024",
            "rating":"6.2",
            "genres": ["Боевик", "Триллер"]
        },
        {
            "name": "Граф Монте-Кристо",
            "image": "https://image.tmdb.org/t/p/w500//bv7XaMz155UTyQSOy2CHllMrAf9.jpg",
            "link": "/see/card/movies/800-80/Graf-Monte-Kristo.html",
            "year": "2024",
            "rating":"7.7",
            "genres": ["Боевик", "Драма", "Приключения"]
        },
        {
            "name": "Граф Монте-Кристо",
            "image": "https://image.tmdb.org/t/p/original/7O2N253Np012Fm8NGQTe5alTiwy.jpg",
            "link": "/see/card/movies/800-190/Graf-Monte-Kristo2002.html",
            "year": "2002",
            "rating":"7.7",
            "genres": ["Боевик", "Драма", "Приключения"]
        },
        {
            "name": "Уровни",
            "image": "https://image.tmdb.org/t/p/w500//yq39ChrCDlqrurYuaC8WM0vC1cx.jpg",
            "link": "/see/card/movies/800-81/Urovni.html",
            "year": "2024",
            "rating":"5.7",
            "genres": ["Боевик", "Фантастика", "Триллер"]
        },
        {
            "name": "Второй акт",
            "image": "https://image.tmdb.org/t/p/w500//8pAaShqpLUYTeik67jjN2IPaz3O.jpg",
            "link": "/see/card/movies/800-82/Vtoroj-akt.html",
            "year": "2024",
            "rating":"6.1",
            "genres": ["Комедия"]
        },
        {
            "name": "Оппенгеймер",
            "image": "https://image.tmdb.org/t/p/w500//8OQzw8keE6sDNH25sOqPRTxhFTO.jpg",
            "link": "/see/card/movies/800-83/Oppengejmer.html",
            "year": "2023",
            "rating":"8.1",
            "genres": ["Драма", "История"]
        },
        {
            "name": "Ковбои против пришельцев",
            "image": "https://image.tmdb.org/t/p/w500//iRzfV0jFnUqOjJNIvRu9M3G8Rxv.jpg",
            "link": "/see/card/movies/800-84/Kovboi-protiv-prishelcev.html",
            "year": "2011",
            "rating":"5.6",
            "genres": ["Фантастика", "Триллер", "Вестерн"]
        },
        {
            "name": "Стрим",
            "image": "https://image.tmdb.org/t/p/w500//7GVqDiiTUBzyJ2wYpPIO2tWpsYx.jpg",
            "link": "/see/card/movies/800-85/Strim.html",
            "year": "2024",
            "rating":"5.5",
            "genres": ["Ужасы", "Боевик", "Триллер"]
        },
        {
            "name": "Меган: К вашим услугам ",
            "image": "https://image.tmdb.org/t/p/w200//oGoQ5W5Zxo55hbqCu1PsqEmQJIX.jpg",
            "link": "/see/card/movies/800-86/Megan-K-vashim-uslugam.html",
            "year": "2024",
            "rating":"6.7",
            "genres": ["Ужасы", "Фантастика", "Триллер"]
        },
        
        {
            "name": "Псы войны",
            "image": "https://image.tmdb.org/t/p/w500//yhGps0BKzV9AiD2u03Iwc52BW4p.jpg",
            "link": "/see/card/movies/800-87/Psy-vojny.html",
            "year": "2024",
            "rating":"6.3",
            "genres": ["Боевик", "Триллер"]
        },
        {
            "name": "Призрачный гонщик 2",
            "image": "https://image.tmdb.org/t/p/w500//pmjeSQ4NocblwnqFDxk7zXggSQ7.jpg",
            "link": "/see/card/movies/800-88/Prizrachnyj-gonshik-2.html",
            "year": "2012",
            "rating":"5.0",
            "genres": ["Боевик", "Фэнтези", "Триллер"]
        },
        {
            "name": "Призрачный гонщик",
            "image": "https://image.tmdb.org/t/p/w500//4ULbCH7RO1bkCCsBEI9gAOm9cWp.jpg",
            "link": "/see/card/movies/800-191/Prizrachnyj-gonshik.html",
            "year": "2007",
            "rating":"5.6",
            "genres": ["Боевик", "Фэнтези", "Триллер"]
        },
        {
            "name": "Время",
            "image": "https://image.tmdb.org/t/p/w500//m0rqyzs7IbNaXuJvLTubCG40F92.jpg",
            "link": "/see/card/movies/800-90/Vremya.html",
            "year": "2021",
            "rating":"6.3",
            "genres": ["Триллер", "Детектив", "Ужасы"]
        },
        {
            "name": "Стекло",
            "image": "https://image.tmdb.org/t/p/w500//vICN2wjUMQrrpChnPCzJ1W2LPa1.jpg",
            "link": "/see/card/movies/800-192/Steklo.html",
            "year": "2019",
            "rating":"6.7",
            "genres": ["Триллер", "Драма", "Фантастика"]
        },
        {
            "name": "Сплит",
            "image": "https://image.tmdb.org/t/p/w500//xrVZF8DJNTPiILFygj8sg4tmauV.jpg",
            "link": "/see/card/movies/800-91/Split.html",
            "year": "2017",
            "rating":"7.3",
            "genres": ["Триллер", "Драма", "Фантастика"]
        },
        {
            "name": "Неуязвимый",
            "image": "https://image.tmdb.org/t/p/w500//jz968bMurZtNJr1kGNdnqVgqmrJ.jpg",
            "link": "/see/card/movies/800-193/Neuyazvimyj.html",
            "year": "2000",
            "rating":"7.1",
            "genres": ["Триллер", "Драма", "Фантастика"]
        },
        {
            "name": "Время жить",
            "image": "https://image.tmdb.org/t/p/w500//3PeStsMSHG3sNPpJ9NT1ZGMsi3P.jpg",
            "link": "/see/card/movies/800-93/Vremya-zhit.html",
            "year": "2024",
            "rating":"7.3",
            "genres": ["Мелодрама", "Драма"]
        },
        {
            "name": "Оно 2",
            "image": "https://image.tmdb.org/t/p/w500//rjM13nwgzt80xAUKXVp9mzRYyHp.jpg",
            "link": "/see/card/movies/800-194/Ono-2.html",
            "year": "2019",
            "rating":"6.8",
            "genres": ["Ужасы", "Триллер"]
        },
        {
            "name": "Оно",
            "image": "https://image.tmdb.org/t/p/w500//wEHpeWhH3zGYJbqz3OtUJ4tMMM6.jpg",
            "link": "/see/card/movies/800-94/Ono.html",
            "year": "2017",
            "rating":"7.2",
            "genres": ["Ужасы", "Триллер"]
        },
        {
            "name": "Образцовый самец 2",
            "image": "https://image.tmdb.org/t/p/w500//hSAbrO3FYcvzyBiUHXLflIbSIGZ.jpg",
            "link": "/see/card/movies/800-95/Obrazcovyj-samec-2.html",
            "year": "2016",
            "rating":"4.9",
            "genres": ["Комедия", "Приключения", "Боевик"]
        },
        {
            "name": "Образцовый самец",
            "image": "https://image.tmdb.org/t/p/w500//7PPWHLcJF7pjuYjorUX8HzmsESu.jpg",
            "link": "/see/card/movies/800-195/Obrazcovyj-samec.html",
            "year": "2001",
            "rating":"6.2",
            "genres": ["Комедия", "Приключения", "Боевик"]
        },
        {
            "name": "Улыбка 2",
            "image": "https://image.tmdb.org/t/p/w500//xceYC3jmhyZVzBpZVaiJWIoVWa2.jpg",
            "link": "/see/card/movies/800-96/Ulybka-2.html",
            "year": "2024",
            "rating":"6.6",
            "genres": ["Ужасы", "Детектив"]
        },
        {
            "name": "Улыбка",
            "image": "https://image.tmdb.org/t/p/w500//fiBVwImRr5MerRBfyFHeyOHKtCH.jpg",
            "link": "/see/card/movies/800-196/Ulybka.html",
            "year": "2022",
            "rating":"6.7",
            "genres": ["Ужасы", "Детектив"]
        },
        {
            "name": "Грань будущего",
            "image": "https://image.tmdb.org/t/p/w500//98Ll6igWXdjHiKuZtCacTzRGyNX.jpg",
            "link": "/see/card/movies/800-97/Gran-budushego.html",
            "year": "2014",
            "rating":"7.6",
            "genres": ["Боевик", "Фантастика"]
        },
        {
            "name": "Мой сосед - монстр",
            "image": "https://image.tmdb.org/t/p/w500//ipj9b6KZMr6yFidQBf7xxuWnKQi.jpg",
            "link": "/see/card/movies/800-98/Moj-sosed-monstr.html",
            "year": "2024",
            "rating":"6.7",
            "genres": ["Мелодрама", "Комедия", "Ужасы"]
        },
        {
            "name": "Вышка",
            "image": "https://image.tmdb.org/t/p/w500//8xukbVG9JJfnpcdIEYPijVVOfhH.jpg",
            "link": "/see/card/movies/800-99/Vyshka.html",
            "year": "2022",
            "rating":"7.1",
            "genres": ["Триллер"]
        },
        {
            "name": "Пол: Секретный материальчик",
            "image": "https://image.tmdb.org/t/p/w500//h5JcoPVADhTh5jSn4QKjvM4tKlK.jpg",
            "link": "/see/card/movies/800-100/Pol-Sekretnyj-materialchik.html",
            "year": "2011",
            "rating":"6.7",
            "genres": ["Приключения", "Комедия", "Фантастика"]
        },
        {
            "name": "Один дома",
            "image": "https://image.tmdb.org/t/p/w500//nkXZwR8k46VDdjdcOctVgZC3MJ5.jpg",
            "link": "/see/card/movies/800-197/Odin-doma2021.html",
            "year": "2021",
            "rating":"4.9",
            "genres": ["Семейный", "Комедия",]
        },
        {
            "name": "Один дома 5: Праздничное ограбление",
            "image": "https://image.tmdb.org/t/p/w500//6bZdqzK3le84IVUIJCppYMG7UeA.jpg",
            "link": "/see/card/movies/800-198/Odin-doma-5-Prazdnichnoe-ograblenie.html",
            "year": "2012",
            "rating":"5.2",
            "genres": ["Семейный", "Комедия",]
        },
        {
            "name": "Один дома 4",
            "image": "https://image.tmdb.org/t/p/w500//t5qYSUiF0mlRc7LXBNbCoY7lsJO.jpg",
            "link": "/see/card/movies/800-199/Odin-doma-4.html",
            "year": "2002",
            "rating":"4.5",
            "genres": ["Семейный", "Комедия",]
        },
        {
            "name": "Один дома 3",
            "image": "https://image.tmdb.org/t/p/w500//pkejadStkq8fMaZtKb3EqBWOJz.jpg",
            "link": "/see/card/movies/800-200/Odin-doma-3.html",
            "year": "1997",
            "rating":"5.3",
            "genres": ["Семейный", "Комедия",]
        },
        {
            "name": "Один дома 2: Затерянный в Нью-Йорке",
            "image": "https://image.tmdb.org/t/p/w500//tOpSeLYsZLL4h1N9tHcqRm1Y5t2.jpg",
            "link": "/see/card/movies/800-201/Odin-doma-2-Zateryannyj-v-Nyu-Jorke.html",
            "year": "1992",
            "rating":"6.8",
            "genres": ["Семейный", "Комедия",]
        },
        {
            "name": "Один дома",
            "image": "https://image.tmdb.org/t/p/w500//yeS4fjFnTm6jBRiU6zSzFZ8t9W5.jpg",
            "link": "/see/card/movies/800-101/Odin-doma.html",
            "year": "1990",
            "rating":"7.4",
            "genres": ["Семейный", "Комедия",]
        },
        {
            "name": "Проводник смерти",
            "image": "https://image.tmdb.org/t/p/w500//yn1aTogxzXyHIXs0ZvUAmalujLo.jpg",
            "link": "/see/card/movies/800-102/Provodnik-smerti.html",
            "year": "2024",
            "rating":"5.5",
            "genres": ["Триллер", "Драма",]
        },
        {
            "name": "Паранормальное явление: Ближайшая родня",
            "image": "https://image.tmdb.org/t/p/original/bXAVveHiLotZbWdg3PKGhAzxYKP.jpg",
            "link": "/see/card/movies/800-202/Paranormalnoe-yavlenie-Blizhajshaya-rodnya.html",
            "year": "2021",
            "rating":"6.1",
            "genres": ["Ужасы", "Детектив",]
        },
        {
            "name": "Паранормальное явление 5: Призраки в 3D",
            "image": "https://image.tmdb.org/t/p/w500//ozKoD30eG6kacH5SjcRD1wLnBOj.jpg",
            "link": "/see/card/movies/800-203/Paranormalnoe-yavlenie-5-Prizraki-v-3D.html",
            "year": "2015",
            "rating":"5.3",
            "genres": ["Ужасы", "Детектив",]
        },
        {
            "name": "Паранормальное явление: Метка Дьявола",
            "image": "https://image.tmdb.org/t/p/w500//1rrHvalz3i96FfmHTcIMcwZ6qGC.jpg",
            "link": "/see/card/movies/800-103/Paranormalnoe-yavlenie-Metka-Dyavola.html",
            "year": "2014",
            "rating":"5.4",
            "genres": ["Ужасы", "Детектив",]
        },
        {
            "name": "Паранормальное явление 4",
            "image": "https://image.tmdb.org/t/p/w500//xQukmfHfOZCuG0pxHARMk1xJZMs.jpg",
            "link": "/see/card/movies/800-204/Paranormalnoe-yavlenie-4.html",
            "year": "2012",
            "rating":"5.4",
            "genres": ["Ужасы", "Детектив",]
        },
        {
            "name": "Паранормальное явление 3",
            "image": "https://image.tmdb.org/t/p/w500//nbOOPSsezzvHWuWSEw1j3Ypa67e.jpg",
            "link": "/see/card/movies/800-205/Paranormalnoe-yavlenie-3.html",
            "year": "2011",
            "rating":"5.9",
            "genres": ["Ужасы", "Детектив",]
        },
        {
            "name": "Паранормальное явление 2",
            "image": "https://image.tmdb.org/t/p/w500//cq35G7cR4NAn9nAndBBbHlKNexE.jpg",
            "link": "/see/card/movies/800-206/Paranormalnoe-yavlenie-2.html",
            "year": "2010",
            "rating":"5.8",
            "genres": ["Ужасы", "Детектив",]
        },
        {
            "name": "Паранормальное явление",
            "image": "https://image.tmdb.org/t/p/w500//4PpnPcmAGqpZWpFX5imX0WmWTfZ.jpg",
            "link": "/see/card/movies/800-207/Paranormalnoe-yavlenie.html",
            "year": "2007",
            "rating":"6.0",
            "genres": ["Ужасы", "Детектив",]
        },
        {
            "name": "Ужасающий 3",
            "image": "https://image.tmdb.org/t/p/w500//5jbCnDREJeciL3KR7ZWdSotEgzG.jpg",
            "link": "/see/card/movies/800-104/Uzhasayushij-3.html",
            "year": "2024",
            "rating":"6.9",
            "genres": ["Ужасы", "Триллер",]
        },
        {
            "name": "Ужасающий 2",
            "image": "https://image.tmdb.org/t/p/w500//huYBDlUpa2IwZW8MOceKN9j3Auk.jpg",
            "link": "/see/card/movies/800-208/Uzhasayushij-2.html",
            "year": "2022",
            "rating":"6.7",
            "genres": ["Ужасы", "Триллер",]
        },
        {
            "name": "Ужасающий",
            "image": "https://image.tmdb.org/t/p/w500//knJUVRPou9y254Oa9ckdzK6XPpC.jpg",
            "link": "/see/card/movies/800-209/Uzhasayushij.html",
            "year": "2018",
            "rating":"6.3",
            "genres": ["Ужасы", "Триллер",]
        },
        {
            "name": "Полтора шпиона",
            "image": "https://image.tmdb.org/t/p/w500//z0myyIDZRsGiksfS8hlN3p3NNwc.jpg",
            "link": "/see/card/movies/800-105/Poltora-shpiona.html",
            "year": "2016",
            "rating":"6.4",
            "genres": ["Боевик", "Комедия",]
        },
        {
            "name": "Ловушка",
            "image": "https://image.tmdb.org/t/p/w500//3VmHv2WVdDFpD8xtoV2wfjtS5rl.jpg",
            "link": "/see/card/movies/800-106/Lovushka.html",
            "year": "2024",
            "rating":"6.3",
            "genres": ["Криминал", "Триллер", "Ужасы"]
        },
        {
            "name": "Робот по имени Чаппи",
            "image": "https://image.tmdb.org/t/p/w500//gEYz6t7RqsseZrJgjD0wR77p3T7.jpg",
            "link": "/see/card/movies/800-107/Robot-po-imeni-Chappi.html",
            "year": "2015",
            "rating":"6.8",
            "genres": ["Криминал", "Боевик", "Фантастика"]
        },
        {
            "name": "Субстанция",
            "image": "https://image.tmdb.org/t/p/w500//x3yhBGbTqlAjxM450BANUNCHpOO.jpg",
            "link": "/see/card/movies/800-108/Substanciya.html",
            "year": "2024",
            "rating":"7.1",
            "genres": ["Ужасы", "Фантастика"]
        },
        {
            "name": "Простушка",
            "image": "https://image.tmdb.org/t/p/w500//tTBQSoiv9w9M5mf9qVGfkFDaSF5.jpg",
            "link": "/see/card/movies/800-109/Prostushka.html",
            "year": "2015",
            "rating":"6.8",
            "genres": ["Мелодрама", "Комедия"]
        },
        {
            "name": "Затерянное место",
            "image": "https://image.tmdb.org/t/p/w500//qVukhgesgdhVIlRZpsTO6wLVcWI.jpg",
            "link": "/see/card/movies/800-110/Zateryannoe-mesto.html",
            "year": "2024",
            "rating":"6.2",
            "genres": ["Ужасы"]
        },
        {
            "name": "Мачо и ботан 2",
            "image": "https://image.tmdb.org/t/p/w500//iwtNmSFyePLX9CdZ4iXy5kw6wCq.jpg",
            "link": "/see/card/movies/800-210/Macho-i-botan-2.html",
            "year": "2014",
            "rating":"6.8",
            "genres": ["Криминал", "Комедия", "Боевик"]
        },
        {
            "name": "Мачо и ботан",
            "image": "https://image.tmdb.org/t/p/w500//xjNJi44FDx0xSmUPxpmKIXa8zoY.jpg",
            "link": "/see/card/movies/800-111/Macho-i-botan.html",
            "year": "2012",
            "rating":"6.9",
            "genres": ["Криминал", "Комедия", "Боевик"]
        },
        {
            "name": "Одинокие волки",
            "image": "https://image.tmdb.org/t/p/w500//54U26SA33pxxJ2lf5mRxWeqRTLu.jpg",
            "link": "/see/card/movies/800-112/Odinokie-volki.html",
            "year": "2024",
            "rating":"6.5",
            "genres": ["Криминал", "Комедия", "Боевик"]
        },
        {
            "name": "Хэнкок",
            "image": "https://image.tmdb.org/t/p/w500//zH9RhVlpMBzGp9VM7jVmlnZpRuR.jpg",
            "link": "/see/card/movies/800-113/Henkok.html",
            "year": "2008",
            "rating":"6.3",
            "genres": ["Фэнтези", "Боевик"]
        },
        {
            "name": "Подай знак",
            "image": "https://image.tmdb.org/t/p/w500//7bIXHZLZoBvo5EbeIdAnL2wCCla.jpg",
            "link": "/see/card/movies/800-114/Podaj-znak.html",
            "year": "2024",
            "rating":"6.7",
            "genres": ["Детектив", "Триллер"]
        },
        {
            "name": "Я – Четвертый",
            "image": "https://image.tmdb.org/t/p/w500//iCTi4zBFmqKQb0Q8D8FZ3i5hFyx.jpg",
            "link": "/see/card/movies/800-115/Ya–Chetvertyj.html",
            "year": "2011",
            "rating":"6.2",
            "genres": ["Боевик", "Триллер", "Фантастика"]
        },
        {
            "name": "Миллион способов потерять голову",
            "image": "https://image.tmdb.org/t/p/w500//oza59UpAODrr1xSvtoNudWShuut.jpg",
            "link": "/see/card/movies/800-116/Million-sposobov-poteryat-golovu.html",
            "year": "2014",
            "rating":"6.0",
            "genres": ["Комедия", "Вестерн"]
        },
        {
            "name": "Озеро Каддо",
            "image": "https://image.tmdb.org/t/p/w500//tk7g8DWPfak1MNtwX5RY7rcbpO1.jpg",
            "link": "/see/card/movies/800-117/Ozero-Kaddo.html",
            "year": "2024",
            "rating":"7.3",
            "genres": ["Триллер", "Детектив", "Драма", "Фантастика"]
        },
        {
            "name": "Интерстеллар",
            "image": "https://image.tmdb.org/t/p/w500//vReLRjDV9XPhiOSEW7QWow4DXwf.jpg",
            "link": "/see/card/movies/800-118/Interstellar.html",
            "year": "2014",
            "rating":"8.5",
            "genres": ["Приключения", "Драма", "Фантастика"]
        },
        {
            "name": "За гранью З/Л/А",
            "image": "https://image.tmdb.org/t/p/w500//jaxQj8lnTMuPkVB2Rp7pkr0M1Ki.jpg",
            "link": "/see/card/movies/800-119/Za-granyu-ZLA.html",
            "year": "2024",
            "rating":"6.7",
            "genres": ["Ужасы", "Фантастика", "Триллер"]
        },
        {
            "name": "Zомбилэнд: Контрольный выстрел",
            "image": "https://image.tmdb.org/t/p/w500//ociepR7KE1ixlSps5LZb51rkZwa.jpg",
            "link": "/see/card/movies/800-211/Zombilend-Kontrolnyj-vystrel.html",
            "year": "2019",
            "rating":"6.9",
            "genres": ["Комедия", "Ужасы", "Боевик"]
        },
        {
            "name": "Добро пожаловать в Zомбилэнд",
            "image": "https://image.tmdb.org/t/p/w500//kKImcJWO19FWRwcVf1jJMJ7Q72S.jpg",
            "link": "/see/card/movies/800-120/Dobro-pozhalovat-v-Zombilend.html",
            "year": "2009",
            "rating":"7.3",
            "genres": ["Комедия", "Ужасы", "Боевик"]
        },
        {
            "name": "Битлджус Битлджус",
            "image": "https://image.tmdb.org/t/p/w500//cC27Z2eQJXjII2Bw7D4BDCsTCr1.jpg",
            "link": "/see/card/movies/800-122/Bitldzhus-Bitldzhus.html",
            "year": "2024",
            "rating":"7.0",
            "genres": ["Ужасы", "Комедия", "Фэнтези"]
        },
        {
            "name": "Битлджюс",
            "image": "https://image.tmdb.org/t/p/w500//vV40BJbN1NVYkOXVdkQt4qi1PmQ.jpg",
            "link": "/see/card/movies/800-212/Bitldzhyus.html",
            "year": "1988",
            "rating":"7.4",
            "genres": ["Ужасы", "Комедия", "Фэнтези"]
        },
        {
            "name": "Игра в имитацию",
            "image": "https://image.tmdb.org/t/p/w500//iM1C3NYISOzLbWEo8HcUDBASprh.jpg",
            "link": "/see/card/movies/800-123/Igra-v-imitaciyu.html",
            "year": "2014",
            "rating":"8.0",
            "genres": ["История", "Драма", "Триллер", "Военный"]
        },
        {
            "name": "Ворон",
            "image": "https://image.tmdb.org/t/p/w500//msAYTWaQXWGoeChpp5EUGzpMpVb.jpg",
            "link": "/see/card/movies/800-124/Voron.html",
            "year": "2024",
            "rating":"5.8",
            "genres": ["Боевик", "Фэнтези", "Ужасы"]
        },
        {
            "name": "Ворон",
            "image": "https://image.tmdb.org/t/p/w500//a5ZZ2XfFkcpik8M56lDznqrsyTp.jpg",
            "link": "/see/card/movies/800-213/Voron1994.html",
            "year": "1994",
            "rating":"7.5",
            "genres": ["Боевик", "Фэнтези", "Ужасы"]
        },
        {
            "name": "Хроника",
            "image": "https://image.tmdb.org/t/p/w500//8gik6OwbWuhUAKctvGRHUgYZJOm.jpg",
            "link": "/see/card/movies/800-125/Hronika.html",
            "year": "2012",
            "rating":"6.8",
            "genres": ["Фантастика", "Драма", "Триллер"]
        },
        {
            "name": "Грань времени",
            "image": "https://image.tmdb.org/t/p/original/wgm4gdJwb7iSYX0uBsRAZmHQmPm.jpg",
            "link": "/see/card/movies/800-126/Gran-vremeni.html",
            "year": "2020",
            "rating":"6.3",
            "genres": ["Ужасы", "Фантастика", "Триллер"]
        },
        {
            "name": "Не говори никому",
            "image": "https://image.tmdb.org/t/p/original/r0xn6drfJXKWetJj58hYEySaQ3N.jpg",
            "link": "/see/card/movies/800-127/Ne-govori-nikomu.html",
            "year": "2024",
            "rating":"7.2",
            "genres": ["Ужасы", "Триллер"]
        },
        {
            "name": "Мой пингвин",
            "image": "https://image.tmdb.org/t/p/w500//n5yjFZLh6sx04B6YKynae1myD2X.jpg",
            "link": "/see/card/movies/800-129/Moj-pingvin.html",
            "year": "2024",
            "rating":"7.5",
            "genres": ["Семейный", "Приключения", "Драма"]
        },
        {
            "name": "Гарри Поттер 20 лет спустя: возвращение в Хогвартс",
            "image": "https://image.tmdb.org/t/p/w500//pMlCpcBKTB7h4nhazWl26wgngvf.jpg",
            "link": "/see/card/movies/800-214/Garri-Potter-20-let-spustya-vozvrashenie-v-Hogvarts.html",
            "year": "2022",
            "rating":"7.3",
            "genres": ["Документальный"]
        },
        {
            "name": "Гарри Поттер и Дары Смерти: Часть II",
            "image": "https://image.tmdb.org/t/p/w500//cSxvq15AOeJ2jNdVRXJvAoZU8T6.jpg",
            "link": "/see/card/movies/800-215/Garri-Potter-i-Dary-Smerti-Chast-II.html",
            "year": "2011",
            "rating":"8.1",
            "genres": ["Фэнтези", "Приключения"]
        },
        {
            "name": "Гарри Поттер и Дары Смерти: Часть I",
            "image": "https://image.tmdb.org/t/p/w500//nUJc0DOO0lh8pjLkmMtPObA2NKf.jpg",
            "link": "/see/card/movies/800-216/Garri-Potter-i-Dary-Smerti-Chast-I.html",
            "year": "2010",
            "rating":"7.7",
            "genres": ["Фэнтези", "Приключения"]
        },
        {
            "name": "Гарри Поттер и Принц-полукровка",
            "image": "https://image.tmdb.org/t/p/w500//zhMOIXezutmTCeP1AvPZHakGCYs.jpg",
            "link": "/see/card/movies/800-217/Garri-Potter-i-Princ-polukrovka.html",
            "year": "2009",
            "rating":"7.7",
            "genres": ["Фэнтези", "Приключения"]
        },
        {
            "name": "Гарри Поттер и Орден Феникса",
            "image": "https://image.tmdb.org/t/p/w500//lBuFOlXNY3YYIkXInGqcd7aJoAY.jpg",
            "link": "/see/card/movies/800-218/Garri-Potter-i-Orden-Feniksa.html",
            "year": "2007",
            "rating":"7.7",
            "genres": ["Фэнтези", "Приключения"]
        },
        {
            "name": "Гарри Поттер и Кубок огня",
            "image": "https://image.tmdb.org/t/p/w500//wWlSRexsjrdTWBYY84s671dYde5.jpg",
            "link": "/see/card/movies/800-219/Garri-Potter-i-Kubok-ognya.html",
            "year": "2005",
            "rating":"7.8",
            "genres": ["Фэнтези", "Приключения"]
        },
        {
            "name": "Гарри Поттер и узник Азкабана",
            "image": "https://image.tmdb.org/t/p/w500//dd3dM7g6x8TIBBKr22oHM8wZxv8.jpg",
            "link": "/see/card/movies/800-220/Garri-Potter-i-uznik-Azkabana.html",
            "year": "2004",
            "rating":"8.0",
            "genres": ["Фэнтези", "Приключения"]
        },
        {
            "name": "Гарри Поттер и Тайная комната",
            "image": "https://image.tmdb.org/t/p/w500//33Wj3LSyoAqtqkeh7YXcVMvTQzc.jpg",
            "link": "/see/card/movies/800-92/Garri-Potter-i-Tajnaya-komnata.html",
            "year": "2002",
            "rating":"7.7",
            "genres": ["Фэнтези", "Приключения"]
        },
        {
            "name": "Гарри Поттер и философский камень",
            "image": "https://image.tmdb.org/t/p/w500//Z2CbhtMtbVaBEvhqBKMNB0p0ko.jpg",
            "link": "/see/card/movies/800-130/Garri-Potter-i-filosofskij-kamen.html",
            "year": "2001",
            "rating":"7.9",
            "genres": ["Фэнтези", "Приключения"]
        },
        {
            "name": "Хоббит: Битва пяти воинств",
            "image": "https://image.tmdb.org/t/p/w500//19fnHQ9g3Sy87rHKtw3wqhkBGOh.jpg",
            "link": "/see/card/movies/800-221/Hobbit-Bitva-pyati-voinstv.html",
            "year": "2014",
            "rating":"7.3",
            "genres": ["Боевик", "Приключения", "Фэнтези"]
        },
        {
            "name": "Хоббит: Пустошь Смауга",
            "image": "https://image.tmdb.org/t/p/w500//ccbf6gnYwB2tMaU9EAgxCi88NEe.jpg",
            "link": "/see/card/movies/800-222/Hobbit-Pustosh-Smauga.html",
            "year": "2013",
            "rating":"7.6",
            "genres": ["Боевик", "Приключения", "Фэнтези"]
        },
        {
            "name": "Хоббит: Нежданное путешествие",
            "image": "https://image.tmdb.org/t/p/w500//zTnup9V8UJEG4jWULQQpyKB6Tq0.jpg",
            "link": "/see/card/movies/800-223/Hobbit-Nezhdannoe-puteshestvie.html",
            "year": "2012",
            "rating":"7.4",
            "genres": ["Боевик", "Приключения", "Фэнтези"]
        },
        {
            "name": "Властелин колец: Возвращение короля",
            "image": "https://image.tmdb.org/t/p/w500//x6NqCWwU1SrQnvfdmVPAuATyUgD.jpg",
            "link": "/see/card/movies/800-43/Vlastelin-kolec-Vozvrashenie-korolya.html",
            "year": "2003",
            "rating":"8.5",
            "genres": ["Боевик", "Приключения", "Фэнтези"]
        },
        {
            "name": "Властелин колец: Две крепости",
            "image": "https://image.tmdb.org/t/p/w500//fl7QZlAoZ4MLcxvgOaBjeUxlpQt.jpg",
            "link": "/see/card/movies/800-224/Vlastelin-kolec-Dve-kreposti.html",
            "year": "2002",
            "rating":"8.4",
            "genres": ["Боевик", "Приключения", "Фэнтези"]
        },
        {
            "name": "Властелин колец: Братство кольца",
            "image": "https://image.tmdb.org/t/p/w500//dfoCSXJIamlzlpDCRxXVY5R9GSX.jpg",
            "link": "/see/card/movies/800-225/Vlastelin-kolec-Bratstvo-kolca.html",
            "year": "2001",
            "rating":"8.4",
            "genres": ["Боевик", "Приключения", "Фэнтези"]
        },
        {
            "name": "Перси Джексон и Море чудовищ",
            "image": "https://image.tmdb.org/t/p/w500//1cJWgzakpefE5TnEvVHtUfSJ8Zd.jpg",
            "link": "/see/card/movies/800-226/Persi-Dzhekson-i-More-chudovish.html",
            "year": "2013",
            "rating":"6.0",
            "genres": ["Приключения", "Семейный", "Фэнтези"]
        },
        {
            "name": "Перси Джексон и похититель молний",
            "image": "https://image.tmdb.org/t/p/w500//xQazS5kqxp9Wpsll3KYs5z4Prqh.jpg",
            "link": "/see/card/movies/800-128/Persi-Dzhekson-i-pohititel-molnij.html",
            "year": "2010",
            "rating":"6.2",
            "genres": ["Приключения", "Семейный", "Фэнтези"]
        },
        {
            "name": "Чужой: Ромул",
            "image": "https://image.tmdb.org/t/p/w500//A2CU4WbCZlkYbz9gEFIpchlIGpq.jpg",
            "link": "/see/card/movies/800-131/Chuzhoj-Romul.html",
            "year": "2024",
            "rating":"7.2",
            "genres": ["Ужасы", "Фантастика"]
        },
        {
            "name": "Чужой: Завет",
            "image": "https://image.tmdb.org/t/p/w500//5ff1DVsSL7CP5zIjr8ayHaaHScP.jpg",
            "link": "/see/card/movies/800-227/Chuzhoj-Zavet.html",
            "year": "2017",
            "rating":"6.2",
            "genres": ["Ужасы", "Фантастика"]
        },
        {
            "name": "Прометей",
            "image": "https://image.tmdb.org/t/p/w500//kE9dT4e44v1hiVM0GBjWEFczCFc.jpg",
            "link": "/see/card/movies/800-121/Prometej.html",
            "year": "2012",
            "rating":"6.6",
            "genres": ["Ужасы", "Фантастика"]
        },
        {
            "name": "Чужие против Хищника: Реквием",
            "image": "https://image.tmdb.org/t/p/w500//A7vfsc9IcLgi63KaBFeOvio0yRY.jpg",
            "link": "/see/card/movies/800-228/Chuzhie-protiv-Hishnika-Rekviem.html",
            "year": "2007",
            "rating":"5.2",
            "genres": ["Ужасы", "Фантастика"]
        },
        {
            "name": "Чужой против Хищника",
            "image": "https://image.tmdb.org/t/p/w500//uIhgEqmO1Zd9uNJkJzoyvPcgHfA.jpg",
            "link": "/see/card/movies/800-229/Chuzhoj-protiv-Hishnika.html",
            "year": "2004",
            "rating":"5.9",
            "genres": ["Ужасы", "Фантастика"]
        },
        {
            "name": "Чужой: Воскрешение",
            "image": "https://image.tmdb.org/t/p/w500//pkiOQmiRtm0JbvBPtbz4PjrZQM3.jpg",
            "link": "/see/card/movies/800-230/Chuzhoj-Voskreshenie.html",
            "year": "1997",
            "rating":"6.2",
            "genres": ["Ужасы", "Фантастика"]
        },
        {
            "name": "Чужой 3",
            "image": "https://image.tmdb.org/t/p/w500//x49NIbvqwWZ2apQXAa3009FyEzi.jpg",
            "link": "/see/card/movies/800-231/Chuzhoj-3.html",
            "year": "1992",
            "rating":"6.4",
            "genres": ["Ужасы", "Фантастика"]
        },
        {
            "name": "Чужие",
            "image": "https://image.tmdb.org/t/p/w500//sSCmIDZ2EO1oLa8QMq6dL8kNFKq.jpg",
            "link": "/see/card/movies/800-232/Chuzhie.html",
            "year": "1986",
            "rating":"8.0",
            "genres": ["Ужасы", "Фантастика"]
        },
        {
            "name": "Чужой",
            "image": "https://image.tmdb.org/t/p/w500//6EXQpftMDnbEFu75fmRGGF6CuOT.jpg",
            "link": "/see/card/movies/800-233/Chuzhoj1979.html",
            "year": "1979",
            "rating":"8.2",
            "genres": ["Ужасы", "Фантастика"]
        },
        {
            "name": "128 ударов сердца в минуту",
            "image": "https://image.tmdb.org/t/p/w500//jdKfkrUTl2JknNAeTOnz8We15bX.jpg",
            "link": "/see/card/movies/800-132/128-udarov-serdca-v-minutu.html",
            "year": "2015",
            "rating":"6.8",
            "genres": ["Драма", "Музыка", "Мелодрама", "Комедия"]
        },
        {
            "name": "Дэдпул и Росомаха",
            "image": "https://image.tmdb.org/t/p/w500//8uOIWsrHvBTeZP4LSf25NomvLb6.jpg",
            "link": "/see/card/movies/800-133/Dedpul-i-Rosomaha.html",
            "year": "2024",
            "rating":"7.6",
            "genres": ["Боевик", "Комедия", "Фантастика"]
        },
        {
            "name": "Дэдпул 2",
            "image": "https://image.tmdb.org/t/p/w500//6ieUmjpY7bMMZqIdFxHKUEwfwSB.jpg",
            "link": "/see/card/movies/800-234/Dedpul-2.html",
            "year": "2018",
            "rating":"7.5",
            "genres": ["Боевик", "Комедия", "Фантастика"]
        },
        {
            "name": "Дэдпул",
            "image": "https://image.tmdb.org/t/p/w500//r5PYZGOiIQuGpaZas9TTplNZ5Ox.jpg",
            "link": "/see/card/movies/800-235/Dedpul.html",
            "year": "2016",
            "rating":"7.6",
            "genres": ["Боевик", "Комедия", "Фантастика"]
        },
        {
            "name": "Бойфренд из будущего",
            "image": "https://image.tmdb.org/t/p/w500//xWk8ukJ6dhRvlrboG3qgNWNtLJ1.jpg",
            "link": "/see/card/movies/800-134/Bojfrend-iz-budushego.html",
            "year": "2013",
            "rating":"7.9",
            "genres": ["Драма", "Мелодрама", "Фэнтези"]
        },
        {
            "name": "После. Навсегда",
            "image": "https://image.tmdb.org/t/p/w500//p5NuTOVdJsje6qOjsLStoaXsoGy.jpg",
            "link": "/see/card/movies/800-143/Posle-Navsegda.html",
            "year": "2023",
            "rating":"6.9",
            "genres": ["Мелодрама", "Драма"]
        },
        {
            "name": "После. Долго и счастливо",
            "image": "https://image.tmdb.org/t/p/w500//7SAIQcQfPgimB7BHef9DANUQZkY.jpg",
            "link": "/see/card/movies/800-142/Posle-Dolgo-i-schastlivo.html",
            "year": "2022",
            "rating":"6.8",
            "genres": ["Мелодрама", "Драма"]
        },
        {
            "name": "После. Глава 3",
            "image": "https://image.tmdb.org/t/p/w500//eRmylmc17IIxKKQrGcQt1723APP.jpg",
            "link": "/see/card/movies/800-141/Posle-Glava-3.html",
            "year": "2021",
            "rating":"7.0",
            "genres": ["Мелодрама", "Драма"]
        },
        {
            "name": "После. Глава 2",
            "image": "https://image.tmdb.org/t/p/w500//kWkFxHdXhKBM3NmncrX8JYhVXEe.jpg",
            "link": "/see/card/movies/800-140/Posle-Glava-2.html",
            "year": "2020",
            "rating":"7.2",
            "genres": ["Мелодрама", "Драма"]
        },
        {
            "name": "После",
            "image": "https://image.tmdb.org/t/p/w500//7Prt3Le9H0EeRYVltAXFJqwDIig.jpg",
            "link": "/see/card/movies/800-135/Posle.html",
            "year": "2019",
            "rating":"7.1",
            "genres": ["Мелодрама", "Драма"]
        },
        {
            "name": "Ребел-Ридж",
            "image": "https://image.tmdb.org/t/p/w500//8rnSpfoXiizlIGFEIRed7h8inrP.jpg",
            "link": "/see/card/movies/800-136/Rebel-Ridzh.html",
            "year": "2024",
            "rating":"7.0",
            "genres": ["Криминал", "Боевик", "Триллер", "Драма"]
        },
        {
            "name": "Ты водишь!",
            "image": "https://image.tmdb.org/t/p/w500//4GTpZgK5ijNGzJSB6tXjz8Xz7t2.jpg",
            "link": "/see/card/movies/800-137/Ty-vodish!.html",
            "year": "2018",
            "rating":"6.7",
            "genres": ["Комедия", "Боевик"]
        },
        {
            "name": "Место под соснами",
            "image": "https://image.tmdb.org/t/p/w500//8y4tBbEUVdD3uGjqos21EAOAxc5.jpg",
            "link": "/see/card/movies/800-138/Mesto-pod-sosnami.html",
            "year": "2013",
            "rating":"7.0",
            "genres": ["Драма", "Криминал"]
        },
        {
            "name": "Чаща",
            "image": "https://image.tmdb.org/t/p/w500//ihzZSZZ2eFmbxscbnqy3e5YOvtp.jpg",
            "link": "/see/card/movies/800-139/Chasha.html",
            "year": "2024",
            "rating":"6.4",
            "genres": ["Криминал", "Триллер", "Вестерн"]
        },
        // конец
       
        
    ];

    var cardContainer = $('#card-container');
    if (!cardContainer.length) {
        console.error("#card-container не найден!");
        return;
    }
    cardContainer.html("");

    if (currentMovieTitleElement && currentMovieYearElement && currentMovieGenresElement) {
        // Извлекаем название фильма из тега <title>
        let fullTitle = currentMovieTitleElement.textContent;
        let currentMovieTitle = fullTitle.split('(')[0].trim();

        var currentMovieYear = currentMovieYearElement.textContent;
        let fullGenreText = currentMovieGenresElement.textContent;
        let genreStartIndex = fullGenreText.indexOf('●') + 1;
        let extractedGenres = fullGenreText.substring(genreStartIndex).trim();
        let currentMovieGenres = extractedGenres.split('|').map(genre => genre.trim());

        const getBaseTitle = (title) => {
            title = title.toLowerCase();
            title = title.replace(/[:\s-]+.+?(?=\s*\d+|$)/g, '');
            title = title.replace(/\s+\d+$/, '');
            return title.trim();
        };

        const currentBaseTitle = getBaseTitle(currentMovieTitle);
        const numCurrentGenres = currentMovieGenres.length;

        var cardsToDisplay = [];
        var addedCards = new Set();

        const getMatchingGenresCount = (cardGenres) => {
            if (!Array.isArray(cardGenres)) return 0;
            return currentMovieGenres.filter(genre => cardGenres.includes(genre)).length;
        };

        const isCurrentMovie = (card) => {
            return card.name === currentMovieTitle && card.year === currentMovieYear;
        };

        // Отбираем карточки по убыванию количества совпадающих жанров
        for (let i = numCurrentGenres; i >= 1; i--) {
            // Перемешиваем массив перед фильтрацией на каждой итерации
            const shuffledAllCardData = shuffleArray([...allCardData]);

            const matchingGenreCards = shuffledAllCardData.filter(card => {
                // Исключаем текущий фильм по названию и году
                if (isCurrentMovie(card) || addedCards.has(`${card.name}-${card.year}`)) {
                    return false;
                }
                const matchingCount = getMatchingGenresCount(card.genres);
                console.log(`Текущие жанры:`, currentMovieGenres);
                console.log(`Жанры карточки "${card.name}":`, card.genres);
                console.log(`Количество совпадений:`, matchingCount);
                console.log(`Требуемое совпадений (i):`, i);
                return matchingCount === i;
            });

            // Добавляем отобранные карточки в массив
            matchingGenreCards.forEach(card => {
                if (cardsToDisplay.length < 15) {
                    cardsToDisplay.push(card);
                    addedCards.add(`${card.name}-${card.year}`);
                }
            });

            // Если набрали 15 карточек, выходим из цикла
            if (cardsToDisplay.length >= 15) {
                break;
            }
        }

        // Если осталось место, добавляем случайные карточки (исключая текущий и добавленные)
        if (cardsToDisplay.length < 15) {
            const remainingCards = shuffleArray(allCardData.filter(card => !isCurrentMovie(card) && !addedCards.has(`${card.name}-${card.year}`)));
            const cardsToAdd = remainingCards.slice(0, 15 - cardsToDisplay.length);
            cardsToAdd.forEach(card => {
                cardsToDisplay.push(card);
                addedCards.add(`${card.name}-${card.year}`);
            });
        }

        displayCards(cardsToDisplay.slice(0, 15), cardContainer);

    } else {
        // Логика для отображения случайных фильмов
        const shuffledAllCards = shuffleArray(allCardData);
        displayCards(shuffledAllCards.slice(0, 15), cardContainer);
    }

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

function displayCards(cards, container) {
    var count = 0;
    cards.forEach(function (val) {
        if (count >= 15) return;
        var cardHTML = `
            <li class="splide__slide">
                <div class="card card-media" style="width: 12rem" data-rating="${val.rating}">
                    <a href="${val.link}">
                        <img src="${val.image}" class="card-img-top img-9x16 mt-2" alt="${val.name}">
                        <div class="card-rating-trand" bis_skin_checked="1">
                            <span class="span-rating">${val.rating}</span>
                        </div>
                        ${val.isTV ? '<div class="card-TV" bis_skin_checked="1">TV</div>' : ''}
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

function positionCardRatingTrand() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const image = card.querySelector('.card-img-top');
        const rating = card.querySelector('.card-rating-trand');
        if (image && rating) {
            const imageRect = { width: image.offsetWidth, height: image.offsetHeight, top: image.offsetTop, left: image.offsetLeft };
            const cardRect = { width: card.offsetWidth, height: card.offsetHeight, top: card.offsetTop, left: card.offsetLeft };
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