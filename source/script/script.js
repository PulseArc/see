const data = [
    {
        "name": "Эмилия Перес",
        "image": "https://image.tmdb.org/t/p/w500//6KvGEOCUBsgTUPkl1oWhH0Y3ePy.jpg",
        "link": "/card/Emilia%20Perez/Emilia%20Perez.html",
        "year": "2024",
        "rating":"7.8"
    },
    {
        "name": "Спуск в бездну",
        "image": "https://image.tmdb.org/t/p/w500//bSb3ynYHWJbXSSMRhblzrsgt1lO.jpg",
        "link": "/card/descent%20into%20the%20abyss/descent%20into%20the%20abyss.html",
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
        "name": "Охота за убийцей",
        "image": "https://image.tmdb.org/t/p/w500//lcoxNrC8Z00MiUynsqxNtwQDjvA.jpg",
        "link": "#",
        "year": "2024",
        "rating":"7.0"
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
        "name": "Трансформеры: Начало",
        "image": "https://image.tmdb.org/t/p/w500//47mnEdahUv5I28CKuBx5drLRcuK.jpg",
        "link": "#",
        "year": "2024",
        "rating":"7.6"
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
    {
        "name": "Лоракс",
        "image": "https://image.tmdb.org/t/p/w500//pCq2zMcfyC0METerLKJahBmlR0v.jpg",
        "link": "#",
        "year": "2012",
        "rating":"6.5"
    },
    {
        "name": "Астерикс и тайное зелье",
        "image": "https://image.tmdb.org/t/p/w200//tjhaD88iWGGEFmUX38KZ4GsCXRJ.jpg",
        "link": "#",
        "year": "2019",
        "rating":"6.9"
    },
    {
        "name": "Пушистое превращение",
        "image": "https://image.tmdb.org/t/p/w500//uR70IF8Xiw3fnM2j5KBmDKyyP2o.jpg",
        "link": "#",
        "year": "2024",
        "rating":"7.5"
    },
    {
        "name": "По кусочкам",
        "image": "https://image.tmdb.org/t/p/w200//9xSjP8B0iZHRzvrtKcYDkaalomS.jpg",
        "link": "#",
        "year": "2024",
        "rating":"7.7"
    },
    {
        "name": "Вперёд",
        "image": "https://image.tmdb.org/t/p/w500//6Pvojxr83EZNisODJbXmLfmOya8.jpg",
        "link": "#",
        "year": "2020",
        "rating":"7.7"
    },
    {
        "name": "Пингвины Мадагаскара",
        "image": "https://image.tmdb.org/t/p/w500//2qhOYbIsLnUr1m5ZYODTxCqKcNP.jpg",
        "link": "#",
        "year": "2014",
        "rating":"6.5"
    },
    {
        "name": "Пришельцы в доме",
        "image": "https://image.tmdb.org/t/p/w500//baugoi8UiAMReW62C3Mx5fk7PSP.jpg",
        "link": "#",
        "year": "2018",
        "rating":"6.5"
    },
    {
        "name": "Хранитель Луны",
        "image": "https://image.tmdb.org/t/p/w500//yCEBDLJrRDiB5yCEarmRI75xkYM.jpg",
        "link": "#",
        "year": "2015",
        "rating":"7.3"
    },
    {
        "name": "Король Лев",
        "image": "https://image.tmdb.org/t/p/w500//j8tdiuhbF9p5mnAeA1YOUvz82xY.jpg",
        "link": "#",
        "year": "1994",
        "rating":"8.3"
    },
    {
        "name": "Кокоша – маленький дракон",
        "image": "https://image.tmdb.org/t/p/w500//whaEzMfeeegBeD6URtATboFmNwf.jpg",
        "link": "#",
        "year": "2015",
        "rating":"5.2"
    },
    {
        "name": "Риверданс: Волшебное приключение",
        "image": "https://image.tmdb.org/t/p/w500//i6TRDlVuuEXMyLSlIkDd8YhBN0r.jpg",
        "link": "#",
        "year": "2021",
        "rating":"6.0"
    },
    {
        "name": "Тайная жизнь домашних животных",
        "image": "https://image.tmdb.org/t/p/w500//qmfuTRM3vQkXty85zqY7xfdQQjQ.jpg",
        "link": "#",
        "year": "2016",
        "rating":"6.3"
    },
    {
        "name": "Элементарно",
        "image": "https://image.tmdb.org/t/p/w500//88xo5uF03kEgFWXRQJerXRdONBE.jpg",
        "link": "#",
        "year": "2023",
        "rating":"7.6"
    },
    {
        "name": "Холодное сердце",
        "image": "https://image.tmdb.org/t/p/w500//5LYjyQT4IP7oM5ibawHXyDzT2Pp.jpg",
        "link": "#",
        "year": "2013",
        "rating":"7.2"
    },
    {
        "name": "Тайна Коко",
        "image": "https://image.tmdb.org/t/p/w500//jvYsGaUqN8ymH696kRfVJjJ3GIl.jpg",
        "link": "#",
        "year": "2017",
        "rating":"8.2"
    },
    {
        "name": "Шрек",
        "image": "https://image.tmdb.org/t/p/w500//5OPCH713UIEeWuvRZpVkkzrZ3Hd.jpg",
        "link": "#",
        "year": "2001",
        "rating":"7.7"
    },
    {
        "name": "Райя и последний дракон",
        "image": "https://image.tmdb.org/t/p/w500//c8srjTN6PXUxeqmVI0T2ffK3iwC.jpg",
        "link": "#",
        "year": "2021",
        "rating":"7.8"
    },
    {
        "name": "Ван-Пис: Красный",
        "image": "https://image.tmdb.org/t/p/w500//fUm0EqyGpja7W7RM10ltl5USuko.jpg",
        "link": "#",
        "year": "2022",
        "rating":"7.2"
    },
    {
        "name": "Головоломка",
        "image": "https://image.tmdb.org/t/p/w500//8wukxopBFO2Vrf50jlLpbrfj4OB.jpg",
        "link": "#",
        "year": "2015",
        "rating":"7.9"
    },
    {
        "name": "Монстры на каникулах",
        "image": "https://image.tmdb.org/t/p/w500//dLrppCn6TF99oObWrnU87Y7CMyX.jpg",
        "link": "#",
        "year": "2012",
        "rating":"7.0"
    },
    {
        "name": "Зверополис",
        "image": "https://image.tmdb.org/t/p/w500//qNZT8HwPWFv8Dc5rEE0O3FFODha.jpg",
        "link": "#",
        "year": "2016",
        "rating":"7.8"
    },
    {
        "name": "Паранорман, или Как приручить зомби",
        "image": "https://image.tmdb.org/t/p/w500//yDbJ3Ui5jrCjDqI3bJfccjJU3fm.jpg",
        "link": "#",
        "year": "2012",
        "rating":"7.0"
    },
    {
        "name": "Дикий робот",
        "image": "https://image.tmdb.org/t/p/w500//daKChcq5E1ZbIYtHDbWGWc4o0MC.jpg",
        "link": "#",
        "year": "2024",
        "rating":"8.4"
    },
    {
        "name": "Как приручить дракона",
        "image": "https://image.tmdb.org/t/p/w500//cMUmeDM2QRlSOAK9onB8PhXtdZJ.jpg",
        "link": "#",
        "year": "2010",
        "rating":"7.8"
    },
    {
        "name": "Суперсемейка",
        "image": "https://image.tmdb.org/t/p/w500//nVJGGWCs8CQ41G4fzJoTttfCgpQ.jpg",
        "link": "#",
        "year": "2004",
        "rating":"7.7"
    },
    {
        "name": "Кот в сапогах 2: Последнее желание",
        "image": "https://image.tmdb.org/t/p/w500//z2gOE3Z4mNLAcw0dQ1BlGoWLrH7.jpg",
        "link": "#",
        "year": "2022",
        "rating":"8.2"
    },
    {
        "name": "Удача",
        "image": "https://image.tmdb.org/t/p/w500//1tNajPL9FmFbM0msgFF1DMVdpcs.jpg",
        "link": "#",
        "year": "2022",
        "rating":"7.8"
    },
    {
        "name": "Моана",
        "image": "https://images.kinorium.com/movie/poster/772898/w1500_51627721.jpg",
        "link": "#",
        "year": "2016",
        "rating":"7.6"
    },
    {
        "name": "Человек-паук: Паутина вселенных",
        "image": "https://image.tmdb.org/t/p/w500//hsGAxOqbH0UNpIJPMsVRA6dFf85.jpg",
        "link": "#",
        "year": "2023",
        "rating":"8.4"
    },
    {
        "name": "Миньоны",
        "image": "https://image.tmdb.org/t/p/w500//4JubqgkLoGziLg77xCJATs8c0Ay.jpg",
        "link": "#",
        "year": "2015",
        "rating":"6.4"
    },
    {
        "name": "Супер-питомцы",
        "image": "https://image.tmdb.org/t/p/w500//75jSDcQtHrcVoSflDolT7PC5v82.jpg",
        "link": "#",
        "year": "2022",
        "rating":"7.2"
    },
    {
        "name": "Хранители снов",
        "image": "https://image.tmdb.org/t/p/w500//338JxTywTCKqel7RsGgMIqmYooJ.jpg",
        "link": "#",
        "year": "2012",
        "rating":"7.4"
    },
    {
        "name": "Angry Birds в кино 2",
        "image": "https://image.tmdb.org/t/p/w500//6lKxPyArJPJxveyKjp6ihQKH3Ge.jpg",
        "link": "#",
        "year": "2019",
        "rating":"7.1"
    },
    {
        "name": "Кунг-фу Панда 4",
        "image": "https://images.kinorium.com/movie/poster/9805987/w1500_51633606.jpg",
        "link": "#",
        "year": "2024",
        "rating":"7.1"
    },
    {
        "name": "Душа",
        "image": "https://image.tmdb.org/t/p/w500//jZkksyMZdTYw7fIVKyA95nFEPnt.jpg",
        "link": "#",
        "year": "2020",
        "rating":"8.1"
    },
    {
        "name": "Эверест",
        "image": "https://image.tmdb.org/t/p/w500//2tHCLXq7BbH2i9YjLNDMvohxpj3.jpg",
        "link": "#",
        "year": "2019",
        "rating":"7.5"
    },
    {
        "name": ">Дом Дракона",
        "image": "https://image.tmdb.org/t/p/w200//o00Qod5RUoUv1BiCZvCB74tiSDQ.jpg",
        "link": "#",
        "year": "2022",
        "rating":"8.4"
    },
    {
        "name": "Презумпция невиновности",
        "image": "https://image.tmdb.org/t/p/w500//l432WSWtwRw40R3IJuwakO0w6sq.jpg",
        "link": "#",
        "year": "2024",
        "rating":"8.1"
    },
    {
        "name": "Обреченные на славу",
        "image": "https://image.tmdb.org/t/p/w500//4NHRDQa5WgX2guZDihQLLtifYs.jpg",
        "link": "#",
        "year": "2024",
        "rating":"7.5"
    },
    {
        "name": "Пацаны",
        "image": "https://image.tmdb.org/t/p/w500//qAzoBXlcEVy52haniYkTpeFU3fa.jpg",
        "link": "#",
        "year": "2019",
        "rating":"8.5"
    },
    {
        "name": "Очень странные дела",
        "image": "https://image.tmdb.org/t/p/w500//uKBjtMZ7yDlJovmqIOBe0ZVGdVM.jpg",
        "link": "#",
        "year": "2016",
        "rating":"8.6"
    },
    {
        "name": "Шугар",
        "image": "https://image.tmdb.org/t/p/w500//z8rJ8FWiMpWt9ecbsVcxoE3UQxo.jpg",
        "link": "#",
        "year": "2024",
        "rating":"7.3"
    },
    {
        "name": "Охота за убийцей",
        "image": "https://image.tmdb.org/t/p/w500//lcoxNrC8Z00MiUynsqxNtwQDjvA.jpg",
        "link": "#",
        "year": "2024",
        "rating":"7.0"
    },
    {
        "name": "Ходячие мертвецы: Выжившие",
        "image": "https://image.tmdb.org/t/p/w500//rhN08H5Yg7xAFfBzeDzVV9GAwDj.jpg",
        "link": "#",
        "year": "2024",
        "rating":"7.5"
    },
    {
        "name": "Созвездие",
        "image": "https://image.tmdb.org/t/p/w500//pon5QHLxrsgmyZKVSUdpXmHg08C.jpg",
        "link": "#",
        "year": "2024",
        "rating":"7.3"
    },
    {
        "name": "Задача трёх тел",
        "image": "https://image.tmdb.org/t/p/w500//d4e2b1UiJNgU9V0kBvOxnbVPslE.jpg",
        "link": "#",
        "year": "2024",
        "rating":"8.5"
    },
    {
        "name": "Хало",
        "image": "https://image.tmdb.org/t/p/w500//5SBcW0WyqxZyE7AolxfX1ift532.jpg",
        "link": "#",
        "year": "2022",
        "rating":"7.1"
    },
    {
        "name": "Властелины воздуха",
        "image": "https://image.tmdb.org/t/p/w500//ondfe0K5CTb6YO2k6LZYOxN2NOb.jpg",
        "link": "#",
        "year": "2024",
        "rating":"7.9"
    },
    {
        "name": "Десять дней до весны",
        "image": "https://image.tmdb.org/t/p/w500//72y8m646aJbX0nKnz0sQwIyzb7c.jpg",
        "link": "#",
        "year": "2024",
        "rating":"8.0"
    },
    {
        "name": "Извне",
        "image": "https://image.tmdb.org/t/p/w500//rGFRCzgScvIC9LCfqkdb9T7NIs0.jpg",
        "link": "#",
        "year": "2022",
        "rating":"8.2"
    },
    {
        "name": "Чернобыль",
        "image": "https://image.tmdb.org/t/p/w500//qhzSVp06AGGcziMoibInZ5PY0Eg.jpg",
        "link": "#",
        "year": "2019",
        "rating":"9.4"
    },
    {
        "name": "Джек Ричер",
        "image": "https://image.tmdb.org/t/p/w500//8vmhDzJr7xqyojmX0P9xgD8ZSk1.jpg",
        "link": "#",
        "year": "2022",
        "rating":"8.1"
    },
    {
        "name": "Фарго",
        "image": "https://image.tmdb.org/t/p/w500//w7JI7tG0KVQJH22TLQS6P6BlCur.jpg",
        "link": "#",
        "year": "2014",
        "rating":"8.9"
    },
    {
        "name": "Третий лишний",
        "image": "https://image.tmdb.org/t/p/w500//cahNXUK7bp9RTPItIVyOF2z5m0L.jpg",
        "link": "#",
        "year": "2024",
        "rating":"8.0"
    },
    {
        "name": "Монарх: Наследие монстров",
        "image": "https://image.tmdb.org/t/p/w500//kam0gTmqC0h68uLiRxamj38nkPX.jpg",
        "link": "#",
        "year": "2023",
        "rating":"7.3"
    },
    {
        "name": "Пингвин",
        "image": "https://image.tmdb.org/t/p/w500//25dj85s5VtirRWF6rmO8TpZXHJV.jpg",
        "link": "#",
        "year": "2024",
        "rating":"8.5"
    },
    {
        "name": "Ведьмак",
        "image": "https://image.tmdb.org/t/p/w500//rY2c2LhN07CRKlAbRaDZxN2XjvK.jpg",
        "link": "#",
        "year": "2019",
        "rating":"8.0"
    },
    {
        "name": "Локи",
        "image": "https://image.tmdb.org/t/p/w500//fNTS8BOMmhYYM4FqLPLuJ6KRQEF.jpg",
        "link": "#",
        "year": "2019",
        "rating":"8.2"
    },
    {
        "name": "Тысяча и одна ночь",
        "image": "https://image.tmdb.org/t/p/w500//vR9Dh1zc0yQSAln3bqqCPRndhEB.jpg",
        "link": "#",
        "year": "2024",
        "rating":"5.5"
    },
    {
        "name": "Ходячие мертвецы: Дэрил Диксон",
        "image": "https://image.tmdb.org/t/p/w500//kRTaNKcs3RQJCB626y1mGOTHVYU.jpg",
        "link": "#",
        "year": "2023",
        "rating":"8.2"
    },
    {
        "name": "Зимний король",
        "image": "https://image.tmdb.org/t/p/w500//fYx5q9hPAmbDrWzsYUDhxZJnigC.jpg",
        "link": "#",
        "year": "2023",
        "rating":"7.3"
    },
    {
        "name": "Поколение «Ви»",
        "image": "https://image.tmdb.org/t/p/w500//2AVCQymHu0gj8Jwci2VxEuodZq4.jpg",
        "link": "#",
        "year": "2023",
        "rating":"7.9"
    },
    {
        "name": "Доисторическая планета",
        "image": "https://image.tmdb.org/t/p/w500//5mj82iMTp8UmnyXFaZbwRGuc81a.jpg",
        "link": "#",
        "year": "2022",
        "rating":"8.3"
    },
    {
        "name": "Одни из нас",
        "image": "https://image.tmdb.org/t/p/w500//69loIrm9JPpPRE3Akw4yRoitSYn.jpg",
        "link": "#",
        "year": "2023",
        "rating":"8.6"
    },
    {
        "name": "Захваченный рейс",
        "image": "https://image.tmdb.org/t/p/w500//v4oAWDy33lmKI7lsktThsYhp3zU.jpg",
        "link": "#",
        "year": "2023",
        "rating":"7.3"
    },
    {
        "name": "Скрежет металла",
        "image": "https://image.tmdb.org/t/p/w500//82HaUMIagdh5PLflUOVrHn5GsI9.jpg",
        "link": "#",
        "year": "2023",
        "rating":"8.0"
    },
    {
        "name": "Бумажный дом",
        "image": "https://image.tmdb.org/t/p/w500//x9YQ28gwAkAXCSw7n1cAsPbJaTF.jpg",
        "link": "#",
        "year": "2017",
        "rating":"8.2"
    },
    {
        "name": "Любовь и смерть ",
        "image": "https://image.tmdb.org/t/p/w500//tMm4sHiTkx8kaI71BcG2ELXRKfR.jpg",
        "link": "#",
        "year": "2023",
        "rating":"7.4"
    },
    {
        "name": "Цитадель",
        "image": "https://image.tmdb.org/t/p/w500//hwlI6qEtzFT47FAUMP3xac8qcnz.jpg",
        "link": "#",
        "year": "2023",
        "rating":"7.2"
    },
    {
        "name": "Экстраполяции",
        "image": "https://image.tmdb.org/t/p/w500//wzyKhC005b7wuCwfCgcKIIc7DWY.jpg",
        "link": "#",
        "year": "2023",
        "rating":"7.2"
    },
    {
        "name": "Fallout",
        "image": "https://image.tmdb.org/t/p/w500//tOrIGVF521WhBsIDwuGQ999ZbjV.jpg",
        "link": "#",
        "year": "2024",
        "rating":"8.3"
    },
    {
        "name": "Связь",
        "image": "https://image.tmdb.org/t/p/w500//u79ZbVgP5F8kugRHOrrAF78PFe1.jpg",
        "link": "#",
        "year": "2023",
        "rating":"6.4"
    },
    {
        "name": "Настоящий детектив",
        "image": "https://image.tmdb.org/t/p/w500//dHqKLovbM9GT0fkwtL5ew5SPtmk.jpg",
        "link": "#",
        "year": "2014",
        "rating":"8.3"
    },
    {
        "name": "Всевидящее око",
        "image": "https://image.tmdb.org/t/p/w500//5axQCuuavbNOAICMa3tduIXQL5T.jpg",
        "link": "#",
        "year": "2023",
        "rating":"6.8"
    },
    {
        "name": "Сёгун",
        "image": "https://image.tmdb.org/t/p/w500//cOKLRblbdBtcuf4TkAzsyJpZr23.jpg",
        "link": "#",
        "year": "2024",
        "rating":"8.5"
    },
    {
        "name": "Карнивал Роу",
        "image": "https://image.tmdb.org/t/p/w500//gdaKPawLiRqT44AqDJCnxBAsy2j.jpg",
        "link": "#",
        "year": "2019",
        "rating":"7.8"
    },
    {
        "name": "Сквозь снег",
        "image": "https://image.tmdb.org/t/p/w500//mNUE6FC57NcC9iC8QUCtlMEF5n8.jpg",
        "link": "#",
        "year": "2020",
        "rating":"7.5"
    },
    {
        "name": "Ты",
        "image": "https://image.tmdb.org/t/p/w500//aSEYa7z10DC6o3NedSZEyJ6SBXv.jpg",
        "link": "#",
        "year": "2018",
        "rating":"7.8"
    },
    {
        "name": "Мэйфейрские ведьмы",
        "image": "https://image.tmdb.org/t/p/w500//iPuGECyDYN7mzeZ6d8fCNLf77Lf.jpg",
        "link": "#",
        "year": "2023",
        "rating":"7.2"
    },
    {
        "name": "Наклз",
        "image": "https://image.tmdb.org/t/p/w500//zqT1Te9dnI3I8oDnDaLffFPaZ3c.jpg",
        "link": "#",
        "year": "2024",
        "rating":"7.4"
    },
    {
        "name": "1923",
        "image": "https://image.tmdb.org/t/p/w500//zgZRJZvZn5cpsWAB0zMUdad3iZd.jpg",
        "link": "#",
        "year": "2020",
        "rating":"8.1"
    },
    {
        "name": "Властелин колец: Кольца власти",
        "image": "https://image.tmdb.org/t/p/w500//8lTAqSucGNghyBBcvPLaqi2xtJr.jpg",
        "link": "#",
        "year": "2022",
        "rating":"7.3"
    },
    {
        "name": "Химия смерти",
        "image": "https://image.tmdb.org/t/p/w500//lUTPksMc9PhQCcWtWCmnQQrPC0B.jpg",
        "link": "#",
        "year": "2023",
        "rating":"6.6"
    },
    {
        "name": "Викинги: Вальхалла",
        "image": "https://image.tmdb.org/t/p/w500//zOB0Mo1rNUcfpVunce8gJjcvvSV.jpg",
        "link": "#",
        "year": "2022",
        "rating":"7.5"
    },
    {
        "name": "Кот в сапогах",
        "image": "https://image.tmdb.org/t/p/w500//4iuuvaCYNswlhG5f73JqX976a9d.jpg",
        "link": "#",
        "year": "2011",
        "rating":"6.6"
    },
    {
        "name": "Мадагаскар",
        "image": "https://image.tmdb.org/t/p/w500//vwPFZT7tS8b9zDSN0PdvOzeGlfW.jpg",
        "link": "#",
        "year": "2005",
        "rating":"6.9"
    },
    {
        "name": "Союз зверей",
        "image": "https://image.tmdb.org/t/p/w500//cg9KYCRLvRaKRjkuZF41Oef3Rbq.jpg",
        "link": "#",
        "year": "2010",
        "rating":"5.6"
    },
    {
        "name": "Рапунцель",
        "image": "https://image.tmdb.org/t/p/w500//ak5SCuJbdf8G4NbQ1KIUHjplrF1.jpg",
        "link": "#",
        "year": "2012",
        "rating":"7.1"
    },
    {
        "name": "Том и Джерри: Робин Гуд и мышь-весельчак",
        "image": "https://image.tmdb.org/t/p/w500//2lDUlkOne47joTE4yNmIG71qZ0m.jpg",
        "link": "#",
        "year": "2012",
        "rating":"6.5"
    },
    {
        "name": "Рио",
        "image": "https://image.tmdb.org/t/p/w500//oQZEFIeucAsuNFxkt7cUww8bh6s.jpg",
        "link": "#",
        "year": "2011",
        "rating":"6.7"
    },
    {
        "name": "Тайна красной планеты",
        "image": "https://image.tmdb.org/t/p/w500//mD4BnU0MTon8bhuJPCrc82IXLtp.jpg",
        "link": "#",
        "year": "2011",
        "rating":"5.9"
    },
    {
        "name": "Рататуй",
        "image": "https://image.tmdb.org/t/p/w500//6u4JvZBiw1Uv6BgTlWNsFSSHlMn.jpg",
        "link": "#",
        "year": "2007",
        "rating":"7.8"
    },
    {
        "name": "Храбрая сердцем",
        "image": "https://image.tmdb.org/t/p/w500//5A52Y3scfxXTwBKVdgEVmoa8i0q.jpg",
        "link": "#",
        "year": "2012",
        "rating":"7.0"
    },
    {
        "name": "В гости к Робинсонам",
        "image": "https://image.tmdb.org/t/p/w500//gx7TFtVxPZPHeuYuXdPgPGnboRU.jpg",
        "link": "#",
        "year": "2007",
        "rating":"6.9"
    },
    {
        "name": "Джок",
        "image": "https://image.tmdb.org/t/p/w500//6zTwStlGAcfCLwHB2fHij8PwF4V.jpg",
        "link": "#",
        "year": "2011",
        "rating":"4.4"
    },
    {
        "name": "Тачки",
        "image": "https://image.tmdb.org/t/p/w500//wnnv9vLO4jBhXF1Vw2Ss8uhjJPC.jpg",
        "link": "#",
        "year": "2006",
        "rating":"7.0"
    },
    {
        "name": "Франкенвини",
        "image": "https://image.tmdb.org/t/p/w500//pzqDbpshw50ulrSM5Sdc2AY70tq.jpg",
        "link": "#",
        "year": "2012",
        "rating":"7.0"
    },
    {
        "name": "Тэд Джонс",
        "image": "https://image.tmdb.org/t/p/w500//wxWt1mk4EeJ60b6XQ7SuTedZHvD.jpg",
        "link": "#",
        "year": "2012",
        "rating":"6.2"
    },
    {
        "name": "ВАЛЛ·И",
        "image": "https://image.tmdb.org/t/p/w500//i4qDsHTfrTD2EkPa7tT53cJYZkL.jpg",
        "link": "#",
        "year": "2008",
        "rating":"8.1"
    },
    {
        "name": "Фантазия",
        "image": "https://image.tmdb.org/t/p/w500//gCevkcGOmqowkB6jJaYUVZdHCVN.jpg",
        "link": "#",
        "year": "1940",
        "rating":"7.4"
    },
    {
        "name": "Аладдин",
        "image": "https://image.tmdb.org/t/p/w500//92GjkHUHMn9HIZqihuradZNZNLb.jpg",
        "link": "#",
        "year": "1992",
        "rating":"7.7"
    },
    {
        "name": "Семейка Крудс",
        "image": "https://image.tmdb.org/t/p/w500//bYF0aegBQBHfc1Lva7mChj4cPLM.jpg",
        "link": "#",
        "year": "2013",
        "rating":"6.9"
    },
    {
        "name": "Красавица и чудовище",
        "image": "https://image.tmdb.org/t/p/w500//A9AtXMWX0V4IZ2ygBi9Cr85tQD1.jpg",
        "link": "#",
        "year": "1991",
        "rating":"7.7"
    },
    {
        "name": "Самолеты",
        "image": "https://image.tmdb.org/t/p/w500//1OjNMu0THjx5iXXH43a6nAF7wqm.jpg",
        "link": "#",
        "year": "2013",
        "rating":"5.9"
    },
    {
        "name": "Эпик",
        "image": "https://image.tmdb.org/t/p/w500//vO3UVVzfpRN5PgxyyzCnFBfbRS2.jpg",
        "link": "#",
        "year": "2013",
        "rating":"6.5"
    },
    {
        "name": "Секретная служба Санта-Клауса",
        "image": "https://image.tmdb.org/t/p/w500//bHMGBqaYrdXgzVRfxn9ukN2PpN8.jpg",
        "link": "#",
        "year": "2011",
        "rating":"6.8"
    },
    {
        "name": "В поисках Немо",
        "image": "https://image.tmdb.org/t/p/w500//wwUYKw29xtFLk5PIZV9iDAs6zlW.jpg",
        "link": "#",
        "year": "2003",
        "rating":"7.8"
    },
    {
        "name": "Индюки: Назад в будущее",
        "image": "https://image.tmdb.org/t/p/w500//h1iOcJ6qEgFBQ76jACsALLboHQb.jpg",
        "link": "#",
        "year": "2013",
        "rating":"5.9"
    },
    {
        "name": "Ральф",
        "image": "https://image.tmdb.org/t/p/w500//uqWBFXy0lhoz32qy9PsfAjgKMge.jpg",
        "link": "#",
        "year": "2012",
        "rating":"7.3"
    },
    {
        "name": "Турбо",
        "image": "https://image.tmdb.org/t/p/w500//inTKQni4YW8syrfgnXHwzmNeSo4.jpg",
        "link": "#",
        "year": "2013",
        "rating":"6.2"
    },
    {
        "name": "Кошмар перед Рождеством",
        "image": "https://image.tmdb.org/t/p/w500//xvqFn90FxKTJflG4n0spZY7vySu.jpg",
        "link": "#",
        "year": "1993",
        "rating":"7.8"
    },
    {
        "name": "Утиные истории: Заветная лампа",
        "image": "https://image.tmdb.org/t/p/w500//2yY39ALrHQb8ZTRwUW9yiL3x7ft.jpg",
        "link": "#",
        "year": "1990",
        "rating":"6.7"
    },
    {
        "name": "История игрушек 3",
        "image": "https://image.tmdb.org/t/p/w500//2IWIk34c9fMv7xJQ5ur4Z3O1Hh9.jpg",
        "link": "#",
        "year": "2010",
        "rating":"7.8"
    },
    {
        "name": "Корпорация Монстров",
        "image": "https://image.tmdb.org/t/p/w500//zXIusESsQ7ZXP9MFwbvcTTZ3XWF.jpg",
        "link": "#",
        "year": "2001",
        "rating":"7.8"
    },
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
        "name": "Побег из Шоушенка",
        "image": "https://image.tmdb.org/t/p/w500//yvmKPlTIi0xdcFQIFcQKQJcI63W.jpg",
        "link": "#",
        "year": "1994",
        "rating":"8.7"
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
        "name": "Посвященный",
        "image": "https://image.tmdb.org/t/p/w500//aXXEcHZsZ2lXUxPLaadnXeZVz5c.jpg",
        "link": "#",
        "year": "2014",
        "rating":"6.6"
    },
    {
        "name": "Джентльмены",
        "image": "https://image.tmdb.org/t/p/w500//zRdUl8TxpXD3LTFqH9wiya14ZYS.jpg",
        "link": "#",
        "year": "2024",
        "rating":"7.9"
    },
    {
        "name": "Бриджертоны",
        "image": "https://image.tmdb.org/t/p/w500//jMDY8c3HpkM5LmYr1Xiz7a0r0qk.jpg",
        "link": "#",
        "year": "2020",
        "rating":"8.1"
    },
    {
        "name": "Лучше звоните Солу",
        "image": "https://image.tmdb.org/t/p/w500//rTjlrjxCnxiNNVo0PjqUSySoieH.jpg",
        "link": "#",
        "year": "2015",
        "rating":"8.7"
    },
    {
        "name": "Сто лет одиночества",
        "image": "https://image.tmdb.org/t/p/w500//vYtbH9Q5DaCDqzkB483dmYjfkA3.jpg",
        "link": "#",
        "year": "2024",
        "rating":"8.4"
    },
    {
        "name": "Люцифер",
        "image": "https://image.tmdb.org/t/p/w500//A7IP83pBzpLCbU7hlchJXsfcF8j.jpg",
        "link": "#",
        "year": "2016",
        "rating":"8.5"
    },
    {
        "name": "Декстер: Новая кровь",
        "image": "https://image.tmdb.org/t/p/w500//6Dlx8ck7zRKIxnFNJ1G1tXZ6p9D.jpg",
        "link": "#",
        "year": "2021",
        "rating":"8.0"
    },
    {
        "name": "Дневники вампира",
        "image": "https://image.tmdb.org/t/p/w500//y8hcR1R8QmGs8uLHQhIFHgCFWDd.jpg",
        "link": "#",
        "year": "2009",
        "rating":"8.3"
    },
    {
        "name": "Шерлок",
        "image": "https://image.tmdb.org/t/p/w500//kuaBGwju6CParqos7afHNvNEIdD.jpg",
        "link": "#",
        "year": "2010",
        "rating":"8.5"
    },
    {
        "name": "Тьма",
        "image": "https://image.tmdb.org/t/p/w500//ikhUNN25WVfMN2uvoJLLKYXp8jE.jpg",
        "link": "#",
        "year": "2017",
        "rating":"8.4"
    },
    {
        "name": "Игра в кальмара",
        "image": "https://image.tmdb.org/t/p/w500//3vMCgpRa5cdutE56AXqeEkGHtxI.jpg",
        "link": "#",
        "year": "2021",
        "rating":"7.8"
    },
    {
        "name": "Тед Лассо",
        "image": "https://image.tmdb.org/t/p/w500//htV1GTyatTXJB589hjiqUQPegjd.jpg",
        "link": "#",
        "year": "2020",
        "rating":"8.4"
    },
    {
        "name": "Друзья",
        "image": "https://image.tmdb.org/t/p/w500//zBOs8S3UOHyWLzOl9gF8lknBxlL.jpg",
        "link": "#",
        "year": "1994",
        "rating":"8.4"
    },
    {
        "name": "Хороший доктор",
        "image": "https://image.tmdb.org/t/p/w500//c3WPgJl5OjAMJotI7qPeL1zgcCX.jpg",
        "link": "#",
        "year": "2017",
        "rating":"8.5"
    },
    {
        "name": "Волчонок",
        "image": "https://image.tmdb.org/t/p/w500//bq0TmDgpYWrTuJVo8JpeMU3LLb8.jpg",
        "link": "#",
        "year": "2011",
        "rating":"8.5"
    },
    {
        "name": "Ходячие мертвецы",
        "image": "https://image.tmdb.org/t/p/w500//3metsxLVhlJU0mNj5gVfKIih0EF.jpg",
        "link": "#",
        "year": "2010",
        "rating":"8.1"
    },
    {
        "name": "Мистер Робот",
        "image": "https://image.tmdb.org/t/p/w500//v0O3GfmruiKwBCFUKc1cEM1PVLF.jpg",
        "link": "#",
        "year": "2015",
        "rating":"8.2"
    },
    {
        "name": "Мандалорец",
        "image": "https://image.tmdb.org/t/p/w500//3JcJfU9wm6sA2R6LQtnsBJsHMmY.jpg",
        "link": "#",
        "year": "2019",
        "rating":"8.4"
    },
    {
        "name": "Земля без людей",
        "image": "https://image.tmdb.org/t/p/w500//fRPUaAmxFtfhYPalD7Ru8Cu2MTr.jpg",
        "link": "#",
        "year": "2024",
        "rating":"7.7"
    },
    {
        "name": "Американская история ужасов",
        "image": "https://image.tmdb.org/t/p/w500//gj2dFFgEHdhxqSBpD2oPyo4YmPD.jpg",
        "link": "#",
        "year": "2011",
        "rating":"8.1"
    },
    {
        "name": "День Шакала",
        "image": "https://image.tmdb.org/t/p/w500//uFdIebgylj64d9ze6y1C5jsHUZZ.jpg",
        "link": "#",
        "year": "2024",
        "rating":"8.3"
    },
    {
        "name": "Кросс",
        "image": "https://image.tmdb.org/t/p/w500//vjC4LAf7K6aXCWcp3CdinYsG0aG.jpg",
        "link": "#",
        "year": "2024",
        "rating":"7.3"
    },
    {
        "name": "Ганнибал",
        "image": "https://image.tmdb.org/t/p/w500//cy5xnqFR88IG5RrHXxHlpqhLjEG.jpg",
        "link": "#",
        "year": "2013",
        "rating":"8.2"
    },
    {
        "name": "Сексуальное просвещение",
        "image": "https://image.tmdb.org/t/p/w500//ig9FyX4AMOhJXKQkDmau0xX0DWy.jpg",
        "link": "#",
        "year": "2019",
        "rating":"8.3"
    },
    {
        "name": "Ловкий Плут",
        "image": "https://image.tmdb.org/t/p/w500//3xhycTWtx8TsQDllkQ4g7s2mGBR.jpg",
        "link": "#",
        "year": "2023",
        "rating":"8.0"
    },
    {
        "name": "Дорогуша",
        "image": "https://image.tmdb.org/t/p/w500//33DCNqCAtqL408AOYrzJ09NhiN7.jpg",
        "link": "#",
        "year": "2024",
        "rating":"7.5"
    },
    {
        "name": "Игра престолов",
        "image": "https://image.tmdb.org/t/p/w500//tbBQW8jpDH7RpAymMGnBluIsdmH.jpg",
        "link": "#",
        "year": "2011",
        "rating":"8.5"
    },
    {
        "name": "Древние",
        "image": "https://image.tmdb.org/t/p/w500//dsVB3Mqv5sHGGsu1SGuF3fahw0Z.jpg",
        "link": "#",
        "year": "2013",
        "rating":"8.6"
    },
    {
        "name": "Отбросы",
        "image": "https://image.tmdb.org/t/p/w500//jpSJDe6TTnLL5Es9uZ8Viz6MMYV.jpg",
        "link": "#",
        "year": "2009",
        "rating":"7.6"
    },
    {
        "name": "Флэш",
        "image": "https://image.tmdb.org/t/p/w500//q14oRmj0ITMBzqHUdiGwXUIvg7t.jpg",
        "link": "#",
        "year": "2014",
        "rating":"7.8"
    },
    {
        "name": "Магазин светильников",
        "image": "https://image.tmdb.org/t/p/w500//edzQHpnGiwYYf1wRRv91iJETtWX.jpg",
        "link": "#",
        "year": "2024",
        "rating":"8.6"
    },
    
];
$('#search').keyup(function () {
    var searchField = $('#search').val();
    var myExp = new RegExp(searchField, "i");

    // Очистка результатов, если поле пустое
    if (searchField === "") {
        $('#update').html("");
        return;
    }

    // Генерация результатов поиска
    var output = '';
    $.each(data, function (key, val) {
        if (val.name.search(myExp) != -1) {
            output += `
                <div class="card" style="width: 12.35rem;">
                    <a href="${val.link}">
                        <img src="${val.image}" class="card-img-top" style="width: 205px; height: 300px;" alt="${val.name}">
                        <div class="card-rating" bis_skin_checked="1"><span class="span-rating">${val.rating}</span></div>
                        <div class="card-body">
                            <span class="card-tex">${val.name}<br><span class="year">${val.year}</span></span></a>
                    </div>
                
                </div>
            `;
        }
    });

    $('#update').html(output);
});