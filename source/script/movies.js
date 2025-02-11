

// Генерация карточек с случайными рейтингами
// Фильмы
function generateRandomCards() {
    var cardData = [
        {
            "name": "Миссия: Красный",
            "image": "https://image.tmdb.org/t/p/w500//6T36kuDbXCGRistIewSwKyTmijt.jpg",
            "link": "#",
            "year": "2024",
            "rating":"7.0"
        },
        {
            "name": "Братья Гримм",
            "image": "https://image.tmdb.org/t/p/w500//aADABzbuqnVWjXIu2jO5M1IkEIR.jpg",
            "link": "#",
            "year": "2005",
            "rating":"5.8"
        },
        {
            "name": "Люди Икс: Дни минувшего будущего",
            "image": "https://image.tmdb.org/t/p/w500//9IdeGyzRZH66RgNq9zSZDwPPllg.jpg",
            "link": "#",
            "year": "2014",
            "rating":"7.5"
        },
        {
            "name": "Посвященный",
            "image": "https://image.tmdb.org/t/p/w500//aXXEcHZsZ2lXUxPLaadnXeZVz5c.jpg",
            "link": "#",
            "year": "2014",
            "rating":"6.6"
        },
        {
            "name": "И гаснет свет",
            "image": "https://image.tmdb.org/t/p/w500//f5njPYl9eQdwf0xUwJuQ7no6ET.jpg",
            "link": "#",
            "year": "2016",
            "rating":"6.4"
        },
        {
            "name": "Дом у дороги",
            "image": "https://image.tmdb.org/t/p/w500//z8AWDW9BaZ1oQohej87TdACGszm.jpg",
            "link": "#",
            "year": "2024",
            "rating":"7.0"
        },
        {
            "name": "Kingsman: Секретная служба",
            "image": "https://image.tmdb.org/t/p/w500//1br1GunwmrGaD9H3eyRPjLx1HY4.jpg",
            "link": "#",
            "year": "2015",
            "rating":"7.6"
        },
        {
            "name": "Счастливого дня смерти",
            "image": "https://image.tmdb.org/t/p/w500//gxOqCjZ3YGxZpkKchQbHX3DeQ3V.jpg",
            "link": "#",
            "year": "2017",
            "rating":"6.6"
        },
        {
            "name": "Геошторм",
            "image": "https://image.tmdb.org/t/p/w500//8kMSc2UVFCXScIvhkSuSiROySbS.jpg",
            "link": "#",
            "year": "2017",
            "rating":"6.1"
        },
        {
            "name": "Вивариум",
            "image": "https://image.tmdb.org/t/p/w500//6z5otnH68jltjyC6748irDsC7B3.jpg",
            "link": "#",
            "year": "2019",
            "rating":"6.1"
        },
        {
            "name": "Тёмный рыцарь",
            "image": "https://image.tmdb.org/t/p/w500//dxWaYQtgpLbycqUpHzkqqYkT5I3.jpg",
            "link": "#",
            "year": "2008",
            "rating":"8.5"
        },
        {
            "name": "Комната желаний",
            "image": "https://image.tmdb.org/t/p/w500//de2V6MaJzGRclg1pQaSG2v3i0yW.jpg",
            "link": "#",
            "year": "2019",
            "rating":"6.4"
        },
        {
            "name": "Реальные упыри",
            "image": "https://image.tmdb.org/t/p/w500//tmUHOe07a84zgwMeWCpwnAqUwU4.jpg",
            "link": "#",
            "year": "2014",
            "rating":"7.6"
        },
        {
            "name": "Крёстный отец",
            "image": "https://image.tmdb.org/t/p/w500//gZUc6DbAirZGWJL1685jsOd90Sf.jpg",
            "link": "#",
            "year": "1972",
            "rating":"8.7"
        },
        {
            "name": "Джобс: Империя соблазна",
            "image": "https://image.tmdb.org/t/p/w500//vPuWVOBvMsnpdIT8Qb2suLhIFSi.jpg",
            "link": "#",
            "year": "2013",
            "rating":"6.1"
        },
        {
            "name": "Властелин колец: Возвращение короля",
            "image": "https://image.tmdb.org/t/p/w500//x6NqCWwU1SrQnvfdmVPAuATyUgD.jpg",
            "link": "#",
            "year": "2003",
            "rating":"8.5"
        },
        {
            "name": "Скотт Пилигрим против всех",
            "image": "https://image.tmdb.org/t/p/w500//bLJEFAh6tILVS1PS5mCRlA9HVsR.jpg",
            "link": "#",
            "year": "2010",
            "rating":"7.5"
        },
        {
            "name": "Спасти рядового Райана",
            "image": "https://image.tmdb.org/t/p/w500//vhIwsqsMmdv6uwup4V6HJSMcQxI.jpg",
            "link": "#",
            "year": "1998",
            "rating":"8.2"
        },
        {
            "name": "Пассажиры",
            "image": "https://image.tmdb.org/t/p/w500//RY7YPqLRkgK5KiIq3kFQhCUJnB.jpg",
            "link": "#",
            "year": "2016",
            "rating":"7.0"
        },
        {
            "name": "Марсианин",
            "image": "https://image.tmdb.org/t/p/w500//6U19srkH4wI6taluviXbVaIpsau.jpg",
            "link": "#",
            "year": "2015",
            "rating":"7.7"
        },
        {
            "name": "Список Шиндлера",
            "image": "https://image.tmdb.org/t/p/w500//4K8fGGcJP2EoGDucILnaJcOJhZl.jpg",
            "link": "#",
            "year": "1993",
            "rating":"8.6"
        },
        {
            "name": "5-ая волна",
            "image": "https://image.tmdb.org/t/p/w500//5ngef6vRYcn55NixtJAfK2JTDxY.jpg",
            "link": "#",
            "year": "2016",
            "rating":"5.9"
        },
        {
            "name": "Бойцовский клуб",
            "image": "https://image.tmdb.org/t/p/w500//66RvLrRJTm4J8l3uHXWF09AICol.jpg",
            "link": "#",
            "year": "1999",
            "rating":"8.4"
        },
        {
            "name": "Дорогой Санта",
            "image": "https://image.tmdb.org/t/p/w500//v4LzYnQ1VGb0Q191Eb0NDSxdEKy.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.6"
        },
        {
            "name": "Назад в будущее",
            "image": "https://image.tmdb.org/t/p/w500//9a07nfvCoAAyUMfY0yQqsOjlb2C.jpg",
            "link": "#",
            "year": "1985",
            "rating":"8.3"
        },
        {
            "name": "Щелкунчики",
            "image": "https://image.tmdb.org/t/p/w500//iAoS1l0nRLKl4d97mbKF4pUFZhn.jpg",
            "link": "#",
            "year": "2024",
            "rating":"5.6"
        },
        {
            "name": "Гладиатор",
            "image": "https://image.tmdb.org/t/p/w500//1wjNqlfsuHNTXTpCt2ZOV2iPxaf.jpg",
            "link": "#",
            "year": "2000",
            "rating":"8.2"
        },
        {
            "name": "Почему он",
            "image": "https://image.tmdb.org/t/p/w500//q0wK2bXSLulAre276C6M4ZS8Kfo.jpg",
            "link": "#",
            "year": "2016",
            "rating":"6.4"
        },
        {
            "name": "Аватар",
            "image": "https://image.tmdb.org/t/p/w200//lUKcrcO3wEPhNnzGq06JIX7GIEb.jpg",
            "link": "#",
            "year": "2009",
            "rating":"7.6"
        },
        {
            "name": "Эмилия Перес",
            "image": "https://image.tmdb.org/t/p/w500//6KvGEOCUBsgTUPkl1oWhH0Y3ePy.jpg",
            "link": "/see/card/movies/Emilia%20Perez/Emilia%20Perez.html",
            "year": "2024",
            "rating":"7.8"
        },
        {
            "name": "Спуск в бездну",
            "image": "https://image.tmdb.org/t/p/w500//bSb3ynYHWJbXSSMRhblzrsgt1lO.jpg",
            "link": "/see/card/movies/descent%20into%20the%20abyss/descent%20into%20the%20abyss.html",
            "year": "2023",
            "rating":"5.8"
        },
        {
            "name": "Город тайн: Исчезнувшая",
            "image": "https://image.tmdb.org/t/p/w500//ez9LtVmvfbWjX9Spx4DrNEFVErx.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.6"
        },
        {
            "name": "Хитмен. Последнее дело",
            "image": "https://image.tmdb.org/t/p/w500//3TM9MzC1f6F3BwpPJhdv3hXWQRX.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.7"
        },
        {
            "name": "Непробиваемые",
            "image": "https://image.tmdb.org/t/p/w500//z497zVpHuGDQT4lBcHZcYdf6eDT.jpg",
            "link": "#",
            "year": "2024",
            "rating":"5.0"
        },
        {
            "name": "Однажды в Ла-Рое",
            "image": "https://image.tmdb.org/t/p/w500//8VQr2REac6qlshcQGBsmq5s4SiU.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.9"
        },
        {
            "name": "Охотники за привидениями: Леденящий ужас",
            "image": "https://image.tmdb.org/t/p/w500//ltG6ypHUyPv3y4e4ZOxRumYwikV.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.6"
        },
        {
            "name": "Дюна: «Час настал»",
            "image": "https://image.tmdb.org/t/p/w500//3hbXNclcHaj5KiF6kK41GBMjyFr.jpg",
            "link": "#",
            "year": "2024",
            "rating":"7.8"
        },
        {
            "name": "Другой человек",
            "image": "https://image.tmdb.org/t/p/w500//dX5CQBzWX6ePHj8WvHWideMYw5D.jpg",
            "link": "#",
            "year": "2024",
            "rating":"7.0"
        },
        {
            "name": "Вуди Вудпекер отправляется в лагерь",
            "image": "https://image.tmdb.org/t/p/w500//oAF42DFZA430eEzRmEcrpB0D3rp.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.5"
        },
        {
            "name": "Возвращение грозной семейки",
            "image": "https://image.tmdb.org/t/p/w500//o1SGF0txwzZxBJbOsvIgbBtRk3A.jpg",
            "link": "#",
            "year": "2024",
            "rating":"4.9"
        },
        {
            "name": "След киллера",
            "image": "https://image.tmdb.org/t/p/w500//AusoO8766oTq3o1PQeJpuPbt9hZ.jpg",
            "link": "#",
            "year": "2024",
            "rating":"5.8"
        },
        {
            "name": "Боб Марли: Одна любовь",
            "image": "https://image.tmdb.org/t/p/w500//79G6T8JSmUrIsypQVzsa5VjfOXU.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.8"
        },
        {
            "name": "Джокер: Безумие на двоих",
            "image": "https://image.tmdb.org/t/p/w500//sqHQhhjsfZ0UAu67RiIaUkabZZD.jpg",
            "link": "#",
            "year": "2024",
            "rating":"5.7"
        },
        {
            "name": "Дыши!",
            "image": "https://image.tmdb.org/t/p/w500//4pRonl4LTHFw567HyX0iYolyaWS.jpg",
            "link": "#",
            "year": "2024",
            "rating":"5.4"
        },
        {
            "name": "Жуть",
            "image": "https://image.tmdb.org/t/p/w500//krCt93RSbZMmiPIw2k1r9zzfzTb.jpg",
            "link": "#",
            "year": "2024",
            "rating":"7.4"
        },
        {
            "name": "Чёрный чай",
            "image": "https://image.tmdb.org/t/p/w500//v6HmHzoOJVwFmdKDKpdfnnsRk39.jpg",
            "link": "#",
            "year": "2024",
            "rating":"5.6"
        },
        {
            "name": "Ученик. Восхождение Трампа",
            "image": "https://image.tmdb.org/t/p/w500//1rXbP2AdiJzbqL6CKxdZMeFuE4O.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.8"
        },
        {
            "name": "Профессионал",
            "image": "https://image.tmdb.org/t/p/w500//uBAgrWuglga1Vo7oUlFL0KFORcN.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.1"
        },
        {
            "name": "Чудовищное лето",
            "image": "https://image.tmdb.org/t/p/w500//ud6dvc0s6YapooFkUNQPuZ4eg5u.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.5"
        },
        {
            "name": "Подземная бездна",
            "image": "https://image.tmdb.org/t/p/w500//foK52B7aQk14ANwAPbjfPJNEy1f.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.0"
        },
        {
            "name": "Мегалополис",
            "image": "https://image.tmdb.org/t/p/w500//epglGr4yDHGaZVf8faMm7ilcHDu.jpg",
            "link": "#",
            "year": "2024",
            "rating":"5.5"
        },
        {
            "name": "Выгон",
            "image": "https://image.tmdb.org/t/p/w500//z9GAjN21PQPDp0eRB4Ct6vIZaPF.jpg",
            "link": "#",
            "year": "2024",
            "rating":"7.1"
        },
        {
            "name": "Элиас",
            "image": "https://image.tmdb.org/t/p/w500//saPG6ZSORtOdCbl7S4dinNkpmA6.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.2"
        },
        {
            "name": "Граф Монте-Кристо",
            "image": "https://image.tmdb.org/t/p/w500//bv7XaMz155UTyQSOy2CHllMrAf9.jpg",
            "link": "#",
            "year": "2024",
            "rating":"7.7"
        },
        {
            "name": "Уровни",
            "image": "https://image.tmdb.org/t/p/w500//yq39ChrCDlqrurYuaC8WM0vC1cx.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.0"
        },
        {
            "name": "Второй акт",
            "image": "https://image.tmdb.org/t/p/w500//8pAaShqpLUYTeik67jjN2IPaz3O.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.1"
        },
        {
            "name": "Оппенгеймер",
            "image": "http://image.tmdb.org/t/p/w500//8OQzw8keE6sDNH25sOqPRTxhFTO.jpg",
            "link": "#",
            "year": "2023",
            "rating":"8.1"
        },
        {
            "name": "Деревенские против пришельцев",
            "image": "https://image.tmdb.org/t/p/w500//qELcpKCX0HMszrWyq25GS2DTK3o.jpg",
            "link": "#",
            "year": "2024",
            "rating":"5.3"
        },
        {
            "name": "Стрим",
            "image": "https://image.tmdb.org/t/p/w500//7GVqDiiTUBzyJ2wYpPIO2tWpsYx.jpg",
            "link": "#",
            "year": "2024",
            "rating":"5.7"
        },
        {
            "name": "Меган: К вашим услугам ",
            "image": "https://image.tmdb.org/t/p/w200//oGoQ5W5Zxo55hbqCu1PsqEmQJIX.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.7"
        },
        
        {
            "name": "Псы войны",
            "image": "https://image.tmdb.org/t/p/w500//yhGps0BKzV9AiD2u03Iwc52BW4p.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.5"
        },
        {
            "name": "Призрачный гонщик 2",
            "image": "https://image.tmdb.org/t/p/w500//pmjeSQ4NocblwnqFDxk7zXggSQ7.jpg",
            "link": "#",
            "year": "2012",
            "rating":"5.0"
        },
        {
            "name": "Наполеон",
            "image": "https://image.tmdb.org/t/p/w500//z7E0ZtNnRheOZThX2QtSu3RmtXP.jpg",
            "link": "#",
            "year": "2023",
            "rating":"6.4"
        },
        {
            "name": "Время",
            "image": "https://image.tmdb.org/t/p/w500//m0rqyzs7IbNaXuJvLTubCG40F92.jpg",
            "link": "#",
            "year": "2021",
            "rating":"6.3"
        },
        {
            "name": "Сплит",
            "image": "https://image.tmdb.org/t/p/w500//xrVZF8DJNTPiILFygj8sg4tmauV.jpg",
            "link": "#",
            "year": "2017",
            "rating":"7.3"
        },
        {
            "name": "Сплит",
            "image": "https://image.tmdb.org/t/p/w500//xrVZF8DJNTPiILFygj8sg4tmauV.jpg",
            "link": "#",
            "year": "2017",
            "rating":"7.3"
        },
        {
            "name": "Гарри Поттер и Тайная комната",
            "image": "https://image.tmdb.org/t/p/w500//33Wj3LSyoAqtqkeh7YXcVMvTQzc.jpg",
            "link": "#",
            "year": "2002",
            "rating":"7.7"
        },
        {
            "name": "Время жить",
            "image": "https://image.tmdb.org/t/p/w500//3PeStsMSHG3sNPpJ9NT1ZGMsi3P.jpg",
            "link": "#",
            "year": "2024",
            "rating":"7.7"
        },
        {
            "name": "Оно",
            "image": "https://image.tmdb.org/t/p/w500//wEHpeWhH3zGYJbqz3OtUJ4tMMM6.jpg",
            "link": "#",
            "year": "2017",
            "rating":"7.2"
        },
        {
            "name": "Образцовый самец 2",
            "image": "https://image.tmdb.org/t/p/w500//hSAbrO3FYcvzyBiUHXLflIbSIGZ.jpg",
            "link": "#",
            "year": "2016",
            "rating":"4.9"
        },
        {
            "name": "Улыбка 2",
            "image": "https://image.tmdb.org/t/p/w500//xceYC3jmhyZVzBpZVaiJWIoVWa2.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.9"
        },
        {
            "name": "Грань будущего",
            "image": "https://image.tmdb.org/t/p/w500//98Ll6igWXdjHiKuZtCacTzRGyNX.jpg",
            "link": "#",
            "year": "2014",
            "rating":"7.6"
        },
        {
            "name": "Мой сосед - монстр",
            "image": "https://image.tmdb.org/t/p/w500//ipj9b6KZMr6yFidQBf7xxuWnKQi.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.6"
        },
        {
            "name": "Вышка",
            "image": "https://image.tmdb.org/t/p/w500//8xukbVG9JJfnpcdIEYPijVVOfhH.jpg",
            "link": "#",
            "year": "2022",
            "rating":"7.2"
        },
        {
            "name": "Пол: Секретный материальчик",
            "image": "https://image.tmdb.org/t/p/w500//h5JcoPVADhTh5jSn4QKjvM4tKlK.jpg",
            "link": "#",
            "year": "2011",
            "rating":"6.7"
        },
        {
            "name": "Один дома",
            "image": "https://image.tmdb.org/t/p/w500//yeS4fjFnTm6jBRiU6zSzFZ8t9W5.jpg",
            "link": "#",
            "year": "1990",
            "rating":"7.4"
        },
        {
            "name": "Проводник смерти",
            "image": "https://image.tmdb.org/t/p/w500//yn1aTogxzXyHIXs0ZvUAmalujLo.jpg",
            "link": "#",
            "year": "2024",
            "rating":"5.5"
        },
        {
            "name": "Паранормальное явление: Метка Дьявола",
            "image": "https://image.tmdb.org/t/p/w500//1rrHvalz3i96FfmHTcIMcwZ6qGC.jpg",
            "link": "#",
            "year": "2014",
            "rating":"5.4"
        },
        {
            "name": "Ужасающий 3",
            "image": "https://image.tmdb.org/t/p/w500//5jbCnDREJeciL3KR7ZWdSotEgzG.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.9"
        },
        {
            "name": "Полтора шпиона",
            "image": "https://image.tmdb.org/t/p/w500//z0myyIDZRsGiksfS8hlN3p3NNwc.jpg",
            "link": "#",
            "year": "2016",
            "rating":"6.4"
        },
        {
            "name": "Ловушка",
            "image": "https://image.tmdb.org/t/p/w500//3VmHv2WVdDFpD8xtoV2wfjtS5rl.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.4"
        },
        {
            "name": "Робот по имени Чаппи",
            "image": "https://image.tmdb.org/t/p/w500//gEYz6t7RqsseZrJgjD0wR77p3T7.jpg",
            "link": "#",
            "year": "2015",
            "rating":"6.8"
        },
        {
            "name": "Субстанция",
            "image": "https://image.tmdb.org/t/p/w500//x3yhBGbTqlAjxM450BANUNCHpOO.jpg",
            "link": "#",
            "year": "2024",
            "rating":"7.3"
        },
        {
            "name": "Простушка",
            "image": "https://image.tmdb.org/t/p/w500//tTBQSoiv9w9M5mf9qVGfkFDaSF5.jpg",
            "link": "#",
            "year": "2015",
            "rating":"6.8"
        },
        {
            "name": "Затерянное место",
            "image": "https://image.tmdb.org/t/p/w500//qVukhgesgdhVIlRZpsTO6wLVcWI.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.4"
        },
        {
            "name": "Мачо и ботан",
            "image": "https://image.tmdb.org/t/p/w500//xjNJi44FDx0xSmUPxpmKIXa8zoY.jpg",
            "link": "#",
            "year": "2012",
            "rating":"6.9"
        },
        {
            "name": "Одинокие волки",
            "image": "https://image.tmdb.org/t/p/w500//54U26SA33pxxJ2lf5mRxWeqRTLu.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.6"
        },
        {
            "name": "Хэнкок",
            "image": "https://image.tmdb.org/t/p/w500//zH9RhVlpMBzGp9VM7jVmlnZpRuR.jpg",
            "link": "#",
            "year": "2008",
            "rating":"6.3"
        },
        {
            "name": "Подай знак",
            "image": "https://image.tmdb.org/t/p/w500//7bIXHZLZoBvo5EbeIdAnL2wCCla.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.8"
        },
        {
            "name": "Я – Четвертый",
            "image": "https://image.tmdb.org/t/p/w500//iCTi4zBFmqKQb0Q8D8FZ3i5hFyx.jpg",
            "link": "#",
            "year": "2011",
            "rating":"6.2"
        },
        {
            "name": "Миллион способов потерять голову",
            "image": "https://image.tmdb.org/t/p/w500//oza59UpAODrr1xSvtoNudWShuut.jpg",
            "link": "#",
            "year": "2014",
            "rating":"6.0"
        },
        {
            "name": "Озеро Каддо",
            "image": "https://image.tmdb.org/t/p/w500//tk7g8DWPfak1MNtwX5RY7rcbpO1.jpg",
            "link": "#",
            "year": "2024",
            "rating":"7.1"
        },
        {
            "name": "Интерстеллар",
            "image": "https://image.tmdb.org/t/p/w500//vReLRjDV9XPhiOSEW7QWow4DXwf.jpg",
            "link": "#",
            "year": "2014",
            "rating":"8.4"
        },
        {
            "name": "За гранью З/Л/А",
            "image": "https://image.tmdb.org/t/p/w500//jaxQj8lnTMuPkVB2Rp7pkr0M1Ki.jpg",
            "link": "#",
            "year": "2024",
            "rating":"5.8"
        },
        {
            "name": "Добро пожаловать в Zомбилэнд",
            "image": "https://image.tmdb.org/t/p/w500//kKImcJWO19FWRwcVf1jJMJ7Q72S.jpg",
            "link": "#",
            "year": "2009",
            "rating":"7.3"
        },
        {
            "name": "Прометей",
            "image": "https://image.tmdb.org/t/p/w500//zaNwfrCuLlfD4MTLGr2HO6DKt9M.jpg",
            "link": "#",
            "year": "2012",
            "rating":"6.6"
        },
        {
            "name": "Битлджус Битлджус",
            "image": "https://image.tmdb.org/t/p/w500//cC27Z2eQJXjII2Bw7D4BDCsTCr1.jpg",
            "link": "#",
            "year": "2024",
            "rating":"7.0"
        },
        {
            "name": "Игра в имитацию",
            "image": "https://image.tmdb.org/t/p/w500//iM1C3NYISOzLbWEo8HcUDBASprh.jpg",
            "link": "#",
            "year": "2014",
            "rating":"8.0"
        },
        {
            "name": "Ворон",
            "image": "https://image.tmdb.org/t/p/w500//msAYTWaQXWGoeChpp5EUGzpMpVb.jpg",
            "link": "#",
            "year": "2024",
            "rating":"5.4"
        },
        {
            "name": "Хроника",
            "image": "https://image.tmdb.org/t/p/w500//8gik6OwbWuhUAKctvGRHUgYZJOm.jpg",
            "link": "#",
            "year": "2012",
            "rating":"6.8"
        },
        {
            "name": "Грань времени",
            "image": "https://image.tmdb.org/t/p/w500//lHmF2lv5q5EzNNiZ6DXVKrRDgX.jpg",
            "link": "#",
            "year": "2019",
            "rating":"6.3"
        },
        {
            "name": "Не говори никому",
            "image": "https://image.tmdb.org/t/p/w500//z7tMZefbCSffsPl3SErtC6ubcdh.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.8"
        },
        {
            "name": "Перси Джексон и похититель молний",
            "image": "https://image.tmdb.org/t/p/w500//xQazS5kqxp9Wpsll3KYs5z4Prqh.jpg",
            "link": "#",
            "year": "2010",
            "rating":"6.2"
        },
        {
            "name": "Мой пингвин",
            "image": "https://image.tmdb.org/t/p/w500//n5yjFZLh6sx04B6YKynae1myD2X.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.4"
        },
        {
            "name": "Гарри Поттер и философский камень",
            "image": "https://image.tmdb.org/t/p/w500//Z2CbhtMtbVaBEvhqBKMNB0p0ko.jpg",
            "link": "#",
            "year": "2001",
            "rating":"7.9"
        },
        {
            "name": "Чужой: Ромул",
            "image": "https://image.tmdb.org/t/p/w500//A2CU4WbCZlkYbz9gEFIpchlIGpq.jpg",
            "link": "#",
            "year": "2024",
            "rating":"7.5"
        },
        {
            "name": "128 ударов сердца в минуту",
            "image": "https://image.tmdb.org/t/p/w500//jdKfkrUTl2JknNAeTOnz8We15bX.jpg",
            "link": "#",
            "year": "2015",
            "rating":"6.8"
        },
        {
            "name": "Дэдпул и Росомаха",
            "image": "https://image.tmdb.org/t/p/w500//8uOIWsrHvBTeZP4LSf25NomvLb6.jpg",
            "link": "#",
            "year": "2024",
            "rating":"8.0"
        },
        {
            "name": "Бойфренд из будущего",
            "image": "https://image.tmdb.org/t/p/w500//xWk8ukJ6dhRvlrboG3qgNWNtLJ1.jpg",
            "link": "#",
            "year": "2013",
            "rating":"7.9"
        },
        {
            "name": "После",
            "image": "https://image.tmdb.org/t/p/w500//7Prt3Le9H0EeRYVltAXFJqwDIig.jpg",
            "link": "#",
            "year": "2019",
            "rating":"7.1"
        },
        {
            "name": "Ребел-Ридж",
            "image": "https://image.tmdb.org/t/p/w500//8rnSpfoXiizlIGFEIRed7h8inrP.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.7"
        },
        {
            "name": "Ты водишь!",
            "image": "https://image.tmdb.org/t/p/w500//4GTpZgK5ijNGzJSB6tXjz8Xz7t2.jpg",
            "link": "#",
            "year": "2018",
            "rating":"6.7"
        },
        {
            "name": "Место под соснами",
            "image": "https://image.tmdb.org/t/p/w500//8y4tBbEUVdD3uGjqos21EAOAxc5.jpg",
            "link": "#",
            "year": "2012",
            "rating":"7.0"
        },
        {
            "name": "Чаща",
            "image": "https://image.tmdb.org/t/p/w500//ihzZSZZ2eFmbxscbnqy3e5YOvtp.jpg",
            "link": "#",
            "year": "2024",
            "rating":"6.0"
        },
        // конец
       
        
    ];

    var cardContainer = $('#card-container'); // Контейнер для отображения карточек

    // Очищаем контейнер перед добавлением новых карточек
    cardContainer.html("");

    // Получаем название из card-title
    var cardTitle = $(".card-title").text().trim();

    // Перемешиваем карточки случайным образом
    cardData = shuffleArray(cardData);

    var count = 0; // Счетчик карточек

    cardData.forEach(function (val) {
        if (count >= 10) return; // Прекращаем, когда карточек становится больше 10

        var randomRating = val.rating; // Оставляем рейтинг постоянным

        // Проверка на совпадение названия с cardTitle
        if (val.name === cardTitle) {
            return; // Пропускаем добавление карточки
        }

        var cardHTML = `
        <div class="col-lg-2 col-md-3">
            <div class="card card-media" style="width: 12rem" data-rating="${randomRating}">
                <a href="${val.link}">
                    <img src="${val.image}" class="card-img-top mt-2" alt="${val.name}">
                    <div class="card-rating-trand" bis_skin_checked="1">
                        <span class="span-rating">${randomRating}</span>
                    </div>
                    <div class="card-body">
                        <span class="card-tex">${val.name}<br><span class="year">${val.year}</span></span>
                    </div>
                </a>
            </div>
        </div>
        `;

        // Добавляем карточку в контейнер
        cardContainer.append(cardHTML);

        count++;
    });
}

// Функция перемешивания массива (Фишера-Йетса)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Функция для перемешивания массива случайным образом
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // Обмен элементов местами
    }
    return array;
}

// Вызов функции для генерации случайных карточек
generateRandomCards();

