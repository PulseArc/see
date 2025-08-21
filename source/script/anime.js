

// Генерация карточек с случайными рейтингами
// Мультфильмы
document.addEventListener('DOMContentLoaded', async () => {
    const container = document.querySelector('#card-container');
    const splideContainer = document.querySelector('#Collections');
    if (!container || !splideContainer) {
        console.error("Missing required elements: #card-container or #Collections. Recommendations cannot be generated.");
        return;
    }

    const localCardData = [
        {
            "name": "Берсерк",
            "image": "https://image.tmdb.org/t/p/w500//rPqWt642UhC8UObCtnpRz4iM2DQ.jpg",
            "link": "/card/anime/100-73/Berserk.html",
            "year": "2016",
            "rating": "7.5",
            "tmdb_id": 66053,
            "isTV": true
        },
        {
            "name": "Монстр",
            "image": "https://image.tmdb.org/t/p/w500//sfmpjO9KwgIDcFybwLcN061ZwOb.jpg",
            "link": "/card/anime/100-74/Monstr.html",
            "year": "2004",
            "rating": "8.5",
            "tmdb_id": 30981,
            "isTV": true
        },
        {
            "name": "Сага о Винланде",
            "image": "https://image.tmdb.org/t/p/original/rNVcMGzDZal17mgdPLIu4dcrdi0.jpg",
            "link": "/card/anime/100-75/Saga-o-Vinlande.html",
            "year": "2019",
            "rating": "8.5",
            "tmdb_id": 88803,
            "isTV": true
        },
        {
            "name": "Паразит: Учение о жизни",
            "image": "https://image.tmdb.org/t/p/w500//tKArAWlgpuEl7q8CRmBfSVLnFan.jpg",
            "link": "/card/anime/100-76/Parazit-Uchenie-o-zhizni.html",
            "year": "2014",
            "rating": "8.3",
            "tmdb_id": 61459,
            "isTV": true
        },
        {
            "name": "Повелитель",
            "image": "https://image.tmdb.org/t/p/w500//4VIY97dUAvsNekhRpCTv6d82S8G.jpg",
            "link": "/card/anime/100-77/Povelitel.html",
            "year": "2015",
            "rating": "8.5",
            "tmdb_id": 64196,
            "isTV": true
        },
        {
            "name": "Кайдзю № 8",
            "image": "https://image.tmdb.org/t/p/w500//4HJKaviTLn1incPtSZKAJZ6NJrv.jpg",
            "link": "/card/anime/100-78/Kajdzyu-8.html",
            "year": "2024",
            "rating": "8.6",
            "tmdb_id": 207468,
            "isTV": true
        },
        {
            "name": "Моб Психо 100",
            "image": "https://image.tmdb.org/t/p/w500//4HJKaviTLn1incPtSZKAJZ6NJrv.jpg",
            "link": "/card/anime/100-79/Mob-Psiho-100.html",
            "year": "2016",
            "rating": "8.5",
            "tmdb_id": 67075,
            "isTV": true
        },
        {
            "name": "Башня Бога",
            "image": "https://image.tmdb.org/t/p/w500//m4FQUNPbxonuv4kcFm1YgyRgl2C.jpg",
            "link": "/card/anime/100-01/Bashnya-Boga.html",
            "year": "2020",
            "rating": "8.3",
            "tmdb_id": 97860,
            "isTV": true
        },
        {
            "name": "Поднятие уровня в одиночку",
            "image": "https://image.tmdb.org/t/p/w500//orLdJQCcC1Lq13xt62P2xJycyAL.jpg",
            "link": "/card/anime/100-02/Podnyatie-urovnya-v-odinochku.html",
            "year": "2024",
            "rating": "8.5",
            "tmdb_id": 127532,
            "isTV": true
        },
        {
            "name": "Наруто: Ураганные хроники",
            "image": "https://image.tmdb.org/t/p/w500//dIRmrc4XwLJWc3eTCe7KaOYJdKX.jpg",
            "link": "/card/anime/100-03/Naruto-Uragannye-hroniki.html",
            "year": "2007",
            "rating": "8.5",
            "tmdb_id": 31910,
            "isTV": true
        },
        {
            "name": "Блич",
            "image": "https://image.tmdb.org/t/p/w500//nqOO3OmDpTsSgVLUZn2T1Dr2mcV.jpg",
            "link": "/card/anime/100-04/Blich.html",
            "year": "2004",
            "rating": "8.4",
            "tmdb_id": 30984,
            "isTV": true
        },
        {
            "name": "Ванпанчмен",
            "image": "https://image.tmdb.org/t/p/w500//nhq66gOdiAp5mnNbVsxAonliffa.jpg",
            "link": "/card/anime/100-05/Vanpanchmen.html",
            "year": "2015",
            "rating": "8.5",
            "tmdb_id": 63926,
            "isTV": true
        },
        {
            "name": "Восхождение в тени!",
            "image": "https://image.tmdb.org/t/p/w500//eRwEUoIPJ6hNUalD848Ud4F77gZ.jpg",
            "link": "/card/anime/100-06/Voshozhdenie-v-teni.html",
            "year": "2022",
            "rating": "8.1",
            "tmdb_id": 119495,
            "isTV": true
        },
        {
            "name": "Магическая битва",
            "image": "https://image.tmdb.org/t/p/w500//rcHnYQHyFRpl9uOltPQILx8Cnla.jpg",
            "link": "/card/anime/100-07/Magicheskaya-bitva.html",
            "year": "2020",
            "rating": "8.6",
            "tmdb_id": 95479,
            "isTV": true
        },
        {
            "name": "Баскетбол Куроко",
            "image": "https://image.tmdb.org/t/p/w500//ftT1qtT6yWO5rfs237a466N8QRr.jpg",
            "link": "/card/anime/100-08/Basketbol-Kuroko.html",
            "year": "2012",
            "rating": "8.5",
            "tmdb_id": 45783,
            "isTV": true
        },
        {
            "name": "Дорохедоро",
            "image": "https://image.tmdb.org/t/p/w500//lzngNiuEmUYj7oKB5ZWrJggUXFL.jpg",
            "link": "/card/anime/100-09/Dorohedoro.html",
            "year": "2020",
            "rating": "8.3",
            "tmdb_id": 94404,
            "isTV": true
        },
        {
            "name": "Человек-бензопила",
            "image": "https://image.tmdb.org/t/p/w500//92Ds0hOHObvZBekqneimrGpxyXh.jpg",
            "link": "/card/anime/100-10/Chelovek-benzopila.html",
            "year": "2022",
            "rating": "8.6",
            "tmdb_id": 114410,
            "isTV": true
        },
        {
            "name": "Дороро",
            "image": "https://image.tmdb.org/t/p/w500//oudk6QIrLLtMlmVBBQoheNzcqeI.jpg",
            "link": "/card/anime/100-11/Dororo.html",
            "year": "2019",
            "rating": "8.6",
            "tmdb_id": 83100,
            "isTV": true
        },
        {
            "name": "Чёрный клевер",
            "image": "https://image.tmdb.org/t/p/w500//vcsAzsoSJEHgJZ29EkxXWSEVbDN.jpg",
            "link": "/card/anime/100-12/Chyornyj-klever.html",
            "year": "2017",
            "rating": "8.5",
            "tmdb_id": 73223,
            "isTV": true
        },
        {
            "name": "Магия и мускулы",
            "image": "https://image.tmdb.org/t/p/w500//vp3oSq3XUSDeSjv4fvSVlT4mleC.jpg",
            "link": "/card/anime/100-13/Magiya-i-muskuly.html",
            "year": "2023",
            "rating": "8.3",
            "tmdb_id": 204832,
            "isTV": true
        },
        {
            "name": "Школа-тюрьма",
            "image": "https://image.tmdb.org/t/p/w500//50eY9B9JtWcG0KuY5SS1X7E9wQb.jpg",
            "link": "/card/anime/100-14/Shkola-tyurma.html",
            "year": "2015",
            "rating": "8.1",
            "tmdb_id": 64706,
            "isTV": true
        },
        {
            "name": "Шарлотта",
            "image": "https://image.tmdb.org/t/p/w500//rMOGHPGfuywDViL9Oc0tA29oxtA.jpg",
            "link": "/card/anime/100-15/Sharlotta.html",
            "year": "2015",
            "rating": "8.3",
            "tmdb_id": 63145,
            "isTV": true
        },
        {
            "name": "Семья шпиона",
            "image": "https://image.tmdb.org/t/p/w500//xMqGSPjjnc4awD4R8JrRTW0IGOt.jpg",
            "link": "/card/anime/100-16/Semya-shpiona.html",
            "year": "2022",
            "rating": "8.6",
            "tmdb_id": 120089,
            "isTV": true
        },
        {
            "name": "Борьба в прямом эфире",
            "image": "https://image.tmdb.org/t/p/w500//fJw0XoP3t1VNhKLqanyxVOMxjwX.jpg",
            "link": "/card/anime/100-17/Borba-v-pryamom-efire.html",
            "year": "2024",
            "rating": "8.3",
            "tmdb_id": 246029,
            "isTV": true
        },
        {
            "name": "Врата Штейна 0",
            "image": "https://image.tmdb.org/t/p/w500//qpd4qivQAVnJ7Zz6QFCE9km5Jiu.jpg",
            "link": "/card/anime/100-18/Vrata-Shtejna-0.html",
            "year": "2018",
            "rating": "8.0",
            "tmdb_id": 78102,
            "isTV": true
        },
        {
            "name": "Ох, уж этот экстрасенс Сайки Кусуо!",
            "image": "https://image.tmdb.org/t/p/w500//hqOIldYJTq8eI1APi4tx4rZuiHe.jpg",
            "link": "/card/anime/100-19/Oh,-uzh-etot-ekstrasens-Sajki-Kusuo.html",
            "year": "2016",
            "rating": "8.3",
            "tmdb_id": 67676,
            "isTV": true
        },
        {
            "name": "Ван-Пис",
            "image": "https://image.tmdb.org/t/p/w500//osRT8GsND3PfhvevsS5DK9px0LI.jpg",
            "link": "/card/anime/100-20/Van-Pis.html",
            "year": "1999",
            "rating": "8.7",
            "tmdb_id": 37854,
            "isTV": true
        },
        {
            "name": "Добро пожаловать в N.H.K.",
            "image": "https://image.tmdb.org/t/p/w500//5iXnyp9zQb3tNTSOXn0rAJOlxu0.jpg",
            "link": "/card/anime/100-21/Dobro-pozhalovat-v-N.H.K..html",
            "year": "2006",
            "rating": "8.5",
            "tmdb_id": 42821,
            "isTV": true
        },
        {
            "name": "Атака титанов",
            "image": "https://image.tmdb.org/t/p/w500//p5nYJj1N5pVMUixtyIJtfkw1FEr.jpg",
            "link": "/card/anime/100-22/Ataka-titanov.html",
            "year": "2013",
            "rating": "8.7",
            "tmdb_id": 1429,
            "isTV": true
        },
        {
            "name": "Драконий жемчуг супер",
            "image": "https://image.tmdb.org/t/p/w500//9gzkpjs6N7Xxo1CnnJqhFtmYCez.jpg",
            "link": "/card/anime/100-23/Drakonij-zhemchug-super.html",
            "year": "2015",
            "rating": "8.2",
            "tmdb_id": 62715,
            "isTV": true
        },
        {
            "name": "Волейбол!!",
            "image": "https://image.tmdb.org/t/p/w500//5lrJDEQjwCJPLdlfhBmJ8mfpnpX.jpg",
            "link": "/card/anime/100-24/Volejbol.html",
            "year": "2014",
            "rating": "8.6",
            "tmdb_id": 60863,
            "isTV": true
        },
        {
            "name": "Мартовский лев",
            "image": "https://image.tmdb.org/t/p/w500//ufgAYwzv6N2JrOWwyAkoGKMlMbo.jpg",
            "link": "/card/anime/100-25/Martovskij-lev.html",
            "year": "2016",
            "rating": "7.9",
            "tmdb_id": 65336,
            "isTV": true
        },
        {
            "name": "Истребитель демонов",
            "image": "https://image.tmdb.org/t/p/w500//zg3GrU3jAoTGxmlGGhkfNYMOHlb.jpg",
            "link": "/card/anime/100-26/Istrebitel-demonov.html",
            "year": "2019",
            "rating": "8.7",
            "tmdb_id": 85937,
            "isTV": true
        },
        {
            "name": "Баки",
            "image": "https://image.tmdb.org/t/p/w500//6n3DLulcCLbHbkQiC9KBHUbZfGr.jpg",
            "link": "/card/anime/100-27/Baki.html",
            "year": "2001",
            "rating": "8.1",
            "tmdb_id": 56425,
            "isTV": true
        },
        {
            "name": "Нана",
            "image": "https://image.tmdb.org/t/p/w500//5XyTQaZcWgn1iqSuxsh5FRzuJjB.jpg",
            "link": "/card/anime/100-28/Nana.html",
            "year": "2006",
            "rating": "8.4",
            "tmdb_id": 56568,
            "isTV": true
        },
        {
            "name": "Моя геройская академия",
            "image": "https://image.tmdb.org/t/p/w500//aqOnGXW5eCQpfyx74Lu3GTt0AXU.jpg",
            "link": "/card/anime/100-29/Moya-gerojskaya-akademiya.html",
            "year": "2016",
            "rating": "8.6",
            "tmdb_id": 65930,
            "isTV": true
        },
        {
            "name": "Страстное Сердце: Дикий Бомбардир",
            "image": "https://image.tmdb.org/t/p/w500//b0yW5cQX97QfhXeJU9kbQ4UYj9V.jpg",
            "link": "/card/anime/100-30/Strastnoe-Serdce-Dikij-Bombardir.html",
            "year": "2002",
            "rating": "7.9",
            "tmdb_id": 90451,
            "isTV": true
        },
        {
            "name": "Дарованный",
            "image": "https://image.tmdb.org/t/p/w500//gIZtv9fPZMsITHu2PSGiFnEQqHq.jpg",
            "link": "/card/anime/100-31/Darovannyj.html",
            "year": "2019",
            "rating": "8.6",
            "tmdb_id": 88040,
            "isTV": true
        },
        {
            "name": "Летнее время",
            "image": "https://image.tmdb.org/t/p/w500//gyf39hodpr1qJzUXGFuGNlxysdi.jpg",
            "link": "/card/anime/100-32/Letnee-vremya.html",
            "year": "2022",
            "rating": "8.2",
            "tmdb_id": 117933,
            "isTV": true
        },
        {
            "name": "Стальной Алхимик: Братство",
            "image": "https://image.tmdb.org/t/p/w500//n2M0BslYmciTcxHc0SpwSljujUG.jpg",
            "link": "/card/anime/100-33/Stalnoj-Alhimik-Bratstvo.html",
            "year": "2009",
            "rating": "8.7",
            "tmdb_id": 31911,
            "isTV": true
        },
        {
            "name": "Юри на льду",
            "image": "https://image.tmdb.org/t/p/w500//uwHOl8SLvGcbumIlpHgFAqVCEb2.jpg",
            "link": "/card/anime/100-34/Yuri-na-ldu.html",
            "year": "2016",
            "rating": "8.6",
            "tmdb_id": 68129,
            "isTV": true
        },
        {
            "name": "Семь смертных грехов",
            "image": "https://image.tmdb.org/t/p/w500//rRZdyqqRAn1h45oNpA69NehQLcI.jpg",
            "link": "/card/anime/100-35/Sem-smertnyh-grehov.html",
            "year": "2014",
            "rating": "8.4",
            "tmdb_id": 62104,
            "isTV": true
        },
        {
            "name": "Пес и Пускающая в ход ножницы",
            "image": "https://image.tmdb.org/t/p/w500//aOa03hyMhuQlDLmPOovMsAphYH0.jpg",
            "link": "/card/anime/100-36/Pes-i-Puskayushaya-v-hod-nozhnicy.html",
            "year": "2013",
            "rating": "6.4",
            "tmdb_id": 49464,
            "isTV": true
        },
        {
            "name": "Призрак в доспехах: Синдром одиночки",
            "image": "https://image.tmdb.org/t/p/w500//wG7iZsxxFd6PPdYHndpDIMTPdaC.jpg",
            "link": "/card/anime/100-37/Prizrak-v-dospehah-Sindrom-odinochki.html",
            "year": "2002",
            "rating": "8.2",
            "tmdb_id": 1095,
            "isTV": true
        },
        {
            "name": "Токийский Гуль",
            "image": "https://image.tmdb.org/t/p/w500//cB9pdS49LbAryFtJpPQYwfFXbJd.jpg",
            "link": "/card/anime/100-38/Tokijskij-Gul.html",
            "year": "2014",
            "rating": "8.3",
            "tmdb_id": 61374,
            "isTV": true
        },
        {
            "name": "Мастера меча онлайн",
            "image": "https://image.tmdb.org/t/p/w500//htNohqrYEwuz4fCa9ATVF90s58S.jpg",
            "link": "/card/anime/100-39/Mastera-mecha-onlajn.html",
            "year": "2012",
            "rating": "8.2",
            "tmdb_id": 45782,
            "isTV": true
        },
        {
            "name": "Убийца Акаме!",
            "image": "https://image.tmdb.org/t/p/w500//3Jtt3UgwtjJHRFDWZBFwaOji9F.jpg",
            "link": "/card/anime/100-40/Ubijca-Akame!.html",
            "year": "2014",
            "rating": "8.3",
            "tmdb_id": 61223,
            "isTV": true
        },
        {
            "name": "Синие Мибуро",
            "image": "https://image.tmdb.org/t/p/w500//rADnozoUIkrJKBD1CMBPnOBWoqh.jpg",
            "link": "/card/anime/100-41/Sinie-Miburo.html",
            "year": "2024",
            "rating": "8.4",
            "tmdb_id": 234776,
            "isTV": true
        },
        {
            "name": "Тетрадь смерти",
            "image": "https://image.tmdb.org/t/p/w500//jtyBJAqZUUKL1WjyiUTngiviRqI.jpg",
            "link": "/card/anime/100-42/Tetrad-smerti.html",
            "year": "2006",
            "rating": "8.6",
            "tmdb_id": 13916,
            "isTV": true
        },
        {
            "name": "Унесённые призраками",
            "image": "https://image.tmdb.org/t/p/w500//xV3zYcOA6xFjYwizIMDDkl2MGT7.jpg",
            "link": "/card/anime/100-43/Unesyonnye-prizrakami.html",
            "year": "2001",
            "rating": "8.5",
            "tmdb_id": 129
        },
        {
            "name": "ПЛУТОН",
            "image": "https://image.tmdb.org/t/p/w500//uO5kzuKlkISDBzW8QXchk65haRp.jpg",
            "link": "/card/anime/100-44/PLUTON.html",
            "year": "2023",
            "rating": "7.9",
            "tmdb_id": 91997,
            "isTV": true
        },
        {
            "name": "Ходячий замок",
            "image": "https://image.tmdb.org/t/p/w500//oQvAlVSjYsJZPg9raiQRYE0aVrv.jpg",
            "link": "/card/anime/100-45/Hodyachij-zamok.html",
            "year": "2004",
            "rating": "8.4",
            "tmdb_id": 4935
        },
        {
            "name": "Перерождение: Монстр",
            "image": "https://image.tmdb.org/t/p/w500//cxV7wPMW3Xeuu27rV9MJrZm4I7y.jpg",
            "link": "/card/anime/100-46/Pererozhdenie-Monstr.html",
            "year": "2024",
            "rating": "8.2",
            "tmdb_id": 235389,
            "isTV": true
        },
        {
            "name": "Звёзды Айкацу!",
            "image": "https://image.tmdb.org/t/p/w500//fiWqW5wYF702dpQWwSeRwKOyXqZ.jpg",
            "link": "/card/anime/100-47/Zvyozdy-Ajkacu!.html",
            "year": "2016",
            "rating": "6.8",
            "tmdb_id": 65929,
            "isTV": true
        },
        {
            "name": "Хоримия",
            "image": "https://image.tmdb.org/t/p/w500//2ZOfEetRHnqCBzvubdYU3ytwcq.jpg",
            "link": "/card/anime/100-48/Horimiya.html",
            "year": "2021",
            "rating": "8.6",
            "tmdb_id": 110070,
            "isTV": true
        },
        {
            "name": "Обещанный Неверленд",
            "image": "https://image.tmdb.org/t/p/w500//eY2WprrRHCCD2J00PjNJ1Itodlr.jpg",
            "link": "/card/anime/100-49/Obeshannyj-Neverlend.html",
            "year": "2019",
            "rating": "8.4",
            "tmdb_id": 83097,
            "isTV": true
        },
        {
            "name": "Твоё имя",
            "image": "https://image.tmdb.org/t/p/w500//iH2WDCYLIUjc7oPWRT7Kxgxza6k.jpg",
            "link": "/card/anime/100-50/Tvoe-imya.html",
            "year": "2016",
            "rating": "8.5",
            "tmdb_id": 372058
        },
        {
            "name": "О моём перерождении в слизь",
            "image": "https://image.tmdb.org/t/p/w500//dyvUkf3bFFd0tC2yJCJ6rUgeZRO.jpg",
            "link": "/card/anime/100-51/O-moyom-pererozhdenii-v-sliz.html",
            "year": "2018",
            "rating": "8.5",
            "tmdb_id": 82684,
            "isTV": true
        },
        {
            "name": "Могила светлячков",
            "image": "https://image.tmdb.org/t/p/w500//nJYXr0RAznczy5tCZtYcjoYMjEg.jpg",
            "link": "/card/anime/100-52/Mogila-svetlyachkov.html",
            "year": "1988",
            "rating": "8.5",
            "tmdb_id": 12477
        },
        {
            "name": "Мононокэ",
            "image": "https://image.tmdb.org/t/p/w500//g2Hm6h1tQU0w0A1wH7gwB4tH7e7.jpg",
            "link": "/card/anime/100-53/Mononoke.html",
            "year": "2007",
            "rating": "7.9",
            "tmdb_id": 16660,
            "isTV": true
        },
        {
            "name": "Форма голоса",
            "image": "https://image.tmdb.org/t/p/w500//c0Gv8xTSEmIcQPxbhINKvkbJO8s.jpg",
            "link": "/card/anime/100-54/Forma-golosa.html",
            "year": "2016",
            "rating": "8.4",
            "tmdb_id": 378064
        },
        {
            "name": "Реинкарнация безработного",
            "image": "https://image.tmdb.org/t/p/w500//bC2DRV5S6BDtW0DmAqN3g3xtLoP.jpg",
            "link": "/card/anime/100-55/Reinkarnaciya-bezrabotnogo.html",
            "year": "2021",
            "rating": "8.5",
            "tmdb_id": 94664,
            "isTV": true
        },
        {
            "name": "Банановая рыба",
            "image": "https://image.tmdb.org/t/p/w500//3GiB5Ybbhzt0ePRR2zgld9R56DB.jpg",
            "link": "/card/anime/100-56/Bananovaya-ryba.html",
            "year": "2018",
            "rating": "8.6",
            "tmdb_id": 80564,
            "isTV": true
        },
        {
            "name": "Принцесса Мононоке",
            "image": "https://image.tmdb.org/t/p/w500//dZE9oUyp14UEoPk5QV7emBu0Ix3.jpg",
            "link": "/card/anime/100-57/Princessa-Mononoke.html",
            "year": "1997",
            "rating": "8.3",
            "tmdb_id": 128
        },
        {
            "name": "Рок-Шоу!!",
            "image": "https://image.tmdb.org/t/p/w500//cDhy72poqVcnevY3BOGlE76bdca.jpg",
            "link": "/card/anime/100-58/Rok-Shou!!.html",
            "year": "2020",
            "rating": "6.0",
            "tmdb_id": 65036,
            "isTV": true
        },
        {
            "name": "Мой сосед Тоторо",
            "image": "https://image.tmdb.org/t/p/w500//ynClhtTAYG8N7FfU7EYK0T131rj.jpg",
            "link": "/card/anime/100-59/Moj-sosed-Totoro.html",
            "year": "1988",
            "rating": "8.1",
            "tmdb_id": 8392
        },
        {
            "name": "Хост-клуб Оранской школы",
            "image": "https://image.tmdb.org/t/p/w500//rd6QqoO7mOqrfOWiSEa6XL9Jqlv.jpg",
            "link": "/card/anime/100-60/Host-klub-Oranskoj-shkoly.html",
            "year": "2006",
            "rating": "8.2",
            "tmdb_id": 1043,
            "isTV": true
        },
        {
            "name": "Аватар: Легенда об Аанге",
            "image": "https://image.tmdb.org/t/p/w500//pbTLpt8c7YUT4Vr6DE2ai3HY6U7.jpg",
            "link": "/card/anime/100-61/Avatar-Legenda-ob-Aange.html",
            "year": "2005",
            "rating": "8.7",
            "tmdb_id": 246,
            "isTV": true
        },
        {
            "name": "Адский рай",
            "image": "https://image.tmdb.org/t/p/w500//75OaIA4S8ZKFVNmKnTCgAcNqwlC.jpg",
            "link": "/card/anime/100-62/Adskij-raj.html",
            "year": "2023",
            "rating": "8.2",
            "tmdb_id": 117465,
            "isTV": true
        },
        {
            "name": "Дитя погоды",
            "image": "https://image.tmdb.org/t/p/w500//unkWKrTb4SdHAEb78AD4BJvXbwh.jpg",
            "link": "/card/anime/100-63/Ditya pogody.html",
            "year": "2019",
            "rating": "8.0",
            "tmdb_id": 568160
        },
        {
            "name": "Доктор Стоун",
            "image": "https://image.tmdb.org/t/p/w500//uJQCHiHAo7hoDyRPZ792ctjSZ71.jpg",
            "link": "/card/anime/100-64/Doktor-Stoun.html",
            "year": "2019",
            "rating": "8.5",
            "tmdb_id": 86031,
            "isTV": true
        },
        {
            "name": "Паприка",
            "image": "https://image.tmdb.org/t/p/w500//75lTLdVBlpWocSO8nWJqddyedCH.jpg",
            "link": "/card/anime/100-65/Paprika.html",
            "year": "2006",
            "rating": "7.8",
            "tmdb_id": 4977
        },
        {
            "name": "Бродяга Кэнсин",
            "image": "https://image.tmdb.org/t/p/w500//eNs5hTCeZtZCy6rTTsH4sMOrKGZ.jpg",
            "link": "/card/anime/100-66/Brodyaga-Kensin.html",
            "year": "2023",
            "rating": "8.4",
            "tmdb_id": 210879,
            "isTV": true
        },
        {
            "name": "Король шаманов",
            "image": "https://image.tmdb.org/t/p/w500//conBjZLX8KBc18vdQjSNegZytln.jpg",
            "link": "/card/anime/100-67/Korol-shamanov.html",
            "year": "2001",
            "rating": "8.5",
            "tmdb_id": 40143,
            "isTV": true
        },
        {
            "name": "5 сантиметров в секунду",
            "image": "https://image.tmdb.org/t/p/w500//ef5Kpp8knIaWCsuKHKE41cQpuPl.jpg",
            "link": "/card/anime/100-68/5-santimetrov-v-sekundu.html",
            "year": "2007",
            "rating": "7.3",
            "tmdb_id": 38142
        },
        {
            "name": "Путешествие Кино",
            "image": "https://image.tmdb.org/t/p/w500//HMCWRefv371GcIo1HsU0rkC7xx.jpg",
            "link": "/card/anime/100-69/Puteshestvie-Kino.html",
            "year": "2003",
            "rating": "7.7",
            "tmdb_id": 34166,
            "isTV": true
        },
        {
            "name": "Синий Экзорцист",
            "image": "https://image.tmdb.org/t/p/w500//g2RmOH0cDET7pptUrLnzVM6w8DJ.jpg",
            "link": "/card/anime/100-70/Sinij-Ekzorcist.html",
            "year": "2011",
            "rating": "7.9",
            "tmdb_id": 201223,
            "isTV": true
        },
        {
            "name": "Судьба: Начало",
            "image": "https://image.tmdb.org/t/p/w500//lkV0BOHMvdxHrfTWQfaFiKfKpRV.jpg",
            "link": "/card/anime/100-71/Sudba-Nachalo.html",
            "year": "2011",
            "rating": "8.0",
            "tmdb_id": 45845,
            "isTV": true
        },
        {
            "name": "Хвост Феи",
            "image": "https://image.tmdb.org/t/p/w500//q5GiuJHgJJwwk14ufs0ToxFkKt6.jpg",
            "link": "/card/anime/100-72/Hvost-Fei.html",
            "year": "2009",
            "rating": "7.9",
            "tmdb_id": 46261,
            "isTV": true
        },

        // конец


  ];

    if (!localCardData || localCardData.length === 0) {
        console.error("localCardData is empty. No recommendations can be generated.");
        return;
    }

    await generateCards(localCardData);
    setTimeout(positionCardRatingTrand, 200);
});

// --- Константы и глобальные функции ---
const KIDS_CERTIFICATIONS = new Set(['0+', '6+', 'G', 'TV-G', 'PG', 'PG-13', '12+']);
const ADULT_CERTIFICATIONS = new Set(['16+', '18+', 'R', 'NC-17', 'TV-MA', 'UNRATED']);

const MIN_GENRE_OVERLAP_RATIO = 0.5;
const STRONG_KEYWORD_WEIGHT = 200;
const KEYWORD_WEIGHT = 100;
const RARE_GENRE_WEIGHT = 140;
const COMMON_GENRE_WEIGHT = 60;
const OTHER_GENRE_WEIGHT = 100;
const ACTOR_WEIGHT = 70;
const DIRECTOR_WEIGHT = 150;
const RATING_CLOSE_BONUS = 120;
const YEAR_CLOSE_BONUS = 140;
const RELEVANCE_THRESHOLD = 200;
const MODERATE_RELEVANCE_THRESHOLD = 20;
const HIGH_RATING_THRESHOLD = 7.0;

const RARE_GENRES = new Set(['horror', 'horrors', 'ужасы', 'fantasy', 'фэнтези', 'фантастика', 'sci-fi', 'sci fi', 'science fiction', 'боевик', 'action', 'thriller', 'thrillers', 'sport', 'спорт', 'war', 'western', 'crime', 'mystery', 'animation', 'documentary', 'biography', 'биография', 'мультфильм']);
const GENERIC_GENRES = new Set(['drama', 'драма', 'comedy', 'комедия', 'romance', 'романтика', 'family', 'семейный']);
const STRONG_KEYWORDS = new Set([
    'race', 'racing', 'гонки', 'car', 'cars', 'motorsport', 'автогонки',
    'time travel', 'time-loop', 'время', 'временная петля',
    'space', 'космос', 'astronaut', 'alien', 'инопланетянин',
    'zombie', 'зомби', 'apocalypse', 'апокалипсис', 'wizard', 'волшебник', 'magic'
]);

const shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

const getExactTitle = (t) => {
    if (!t) return '';
    let cleaned = t.toLowerCase();
    cleaned = cleaned.replace(/\s*(?:смотреть онлайн бесплатно|в хорошем качестве).*$/, '').trim();
    cleaned = cleaned.replace(/[\–\—]/g, '-').replace(/\s+/g, ' ').trim();
    return cleaned;
};

const getBaseTitle = (t) => {
    if (!t) return '';
    let cleaned = t.toLowerCase();
    cleaned = cleaned.replace(/\s*\(\d{4}\s*\)\s*$/, '').replace(/\s*\d{4}\s*$/, '').trim();
    cleaned = cleaned.replace(/\s*(?:смотреть онлайн бесплатно|в хорошем качестве).*$/, '').trim();
    cleaned = cleaned.replace(/[^a-z0-9а-яё\s]+/g, ' ').replace(/\s+/g, ' ').trim();
    return cleaned;
};

const getRating = (c) => parseFloat(c.rating) || 0;
const delay = ms => new Promise(res => setTimeout(ms, ms));

const TMDB_API_KEY = '3da216c9cc3fe78b5488855d25d26e13';
const BASE_TMDB_URL = 'https://api.themoviedb.org/3';
const TMDB_CACHE_KEY = 'tmdb_data_cache';

async function fetchTmdbData(id, mediaType) {
    if (!id || !mediaType) return null;
    let retries = 3;
    while (retries > 0) {
        try {
            const response = await fetch(`${BASE_TMDB_URL}/${mediaType}/${id}?api_key=${TMDB_API_KEY}&append_to_response=keywords,release_dates,credits,genres,belongs_to_collection&language=ru-RU`);
            if (response.status === 429) {
                console.warn(`TMDB API rate limit exceeded. Retrying in 1 second...`);
                await delay(1000);
                retries--;
                continue;
            }
            if (!response.ok) return null;
            const data = await response.json();

            let certification = null;
            if (data.release_dates?.results) {
                const ruRelease = data.release_dates.results.find(res => res.iso_3166_1 === 'RU') ||
                    data.release_dates.results.find(res => res.iso_3166_1 === 'US') ||
                    data.release_dates.results[0];
                if (ruRelease?.release_dates?.length > 0) {
                    certification = ruRelease.release_dates.find(r => r.certification)?.certification;
                }
            }
            data.certification = certification;
            data.director = data.credits?.crew?.find(m => m.job === 'Director')?.name;
            data.actors = data.credits?.cast?.slice(0, 5).map(a => a.name) || [];
            data.genres = data.genres?.map(g => g.name) || [];
            data.keywords = data.keywords?.keywords?.map(k => k.name) || [];
            data.collection_id = data.belongs_to_collection?.id || null;
            data.collection_name = data.belongs_to_collection?.name || null;

            return data;
        } catch (e) {
            console.error(`Error fetching TMDB data for ID ${id}:`, e);
            return null;
        }
    }
    return null;
}

async function processLocalCardData(data) {
    let cachedData = null;
    try {
        const stored = sessionStorage.getItem(TMDB_CACHE_KEY);
        if (stored) {
            cachedData = JSON.parse(stored);
        }
    } catch (e) {
        console.error("Failed to parse cached data from sessionStorage.", e);
    }

    if (cachedData && cachedData.length === data.length) {
        console.log("Using cached TMDB data from sessionStorage.");
    } else {
        console.log("Cache is invalid or missing. Fetching from TMDB...");
        cachedData = [];
    }

    const fetchPromises = data.map(async (c, index) => {
        const u = { ...c
        };

        if (!Object.prototype.hasOwnProperty.call(u, 'isTV')) {
            u.isTV = false;
        }

        if (u.tmdb_id && !cachedData[index]?.genres) {
            const mediaType = u.isTV ? 'tv' : 'movie';
            const m = await fetchTmdbData(u.tmdb_id, mediaType);
            if (m) {
                u.genres = m.genres;
                u.keywords = m.keywords;
                u.collection_id = m.collection_id;
                u.collection_name = m.collection_name;
                u.certification = m.certification || u.certification || null;
                u.director = m.director;
                u.actors = m.actors;
                u.name = m.title || m.name || u.name;
            }
        } else if (cachedData[index]) {
            const cachedCard = cachedData[index];
            u.genres = cachedCard.genres;
            u.keywords = cachedCard.keywords;
            u.collection_id = cachedCard.collection_id;
            u.collection_name = cachedCard.collection_name;
            u.certification = cachedCard.certification;
            u.director = cachedCard.director;
            u.actors = cachedCard.actors;
        }

        return u;
    });

    const processedCards = await Promise.all(fetchPromises);

    try {
        sessionStorage.setItem(TMDB_CACHE_KEY, JSON.stringify(processedCards));
        console.log("Successfully cached TMDB data to sessionStorage.");
    } catch (e) {
        console.error("Failed to save data to sessionStorage.", e);
    }

    return processedCards;
}

function normalizeList(arr) {
    if (!arr || !arr.length) return [];
    return arr.map(x => ('' + x).toLowerCase().trim()).filter(Boolean);
}

function genreOverlapInfo(currentGenres, cardGenres) {
    if (!currentGenres || currentGenres.length === 0) return {
        count: 0,
        ratio: 0,
        list: []
    };
    const cur = new Set(currentGenres.map(g => g.toLowerCase()));
    const card = new Set(cardGenres.map(g => g.toLowerCase()));
    let common = 0;
    const commonGenresList = [];
    for (const g of cur) {
        if (card.has(g)) {
            common++;
            commonGenresList.push(g);
        }
    }
    return {
        count: common,
        ratio: common / cur.size,
        list: commonGenresList
    };
}

function ageCompatible(currentCert, cardCert) {
    const cur = currentCert?.toUpperCase().replace(/\s/g, '');
    const cand = cardCert?.toUpperCase().replace(/\s/g, '');
    const isCurKids = KIDS_CERTIFICATIONS.has(cur);
    const isCandKids = KIDS_CERTIFICATIONS.has(cand);
    const isCurAdult = ADULT_CERTIFICATIONS.has(cur);
    const isCandAdult = ADULT_CERTIFICATIONS.has(cand);
    if ((isCurKids && isCandAdult) || (isCurAdult && isCandKids)) return false;
    if (isCurKids && !cand) return false;
    return true;
}

const scoreCard = (card, currentMovieRef) => {
    if (!currentMovieRef) return {
        score: -Infinity,
        reasons: ['No reference movie'],
        commonGenres: []
    };
    if (!ageCompatible(currentMovieRef.certification, card.certification)) {
        return {
            score: -99999,
            reasons: ['Age incompatibility'],
            commonGenres: []
        };
    }

    const currGenres = normalizeList(currentMovieRef.genres || []);
    const cardGenres = normalizeList(card.genres || []);
    const currKeywords = normalizeList(currentMovieRef.keywords || []);
    const cardKeywords = normalizeList(card.keywords || []);
    const genreOverlap = genreOverlapInfo(currGenres, cardGenres);

    let commonKeywordsCount = 0;
    let strongKeywordMatches = 0;
    for (const k of currKeywords) {
        if (cardKeywords.includes(k)) {
            commonKeywordsCount++;
            if (STRONG_KEYWORDS.has(k)) strongKeywordMatches++;
        }
    }

    const commonActors = [...new Set((currentMovieRef.actors || []).map(a => ('' + a).toLowerCase()))].filter(a => (card.actors || []).map(x => ('' + x).toLowerCase()).includes(a)).length;
    const sameDirector = currentMovieRef.director && card.director && currentMovieRef.director === card.director;

    if (genreOverlap.count === 0 && commonKeywordsCount === 0 && commonActors === 0 && !sameDirector) {
        return {
            score: 0,
            reasons: ['Failed primary relevance check (no genre/keyword/actor/director match)'],
            commonGenres: []
        };
    }

    let score = 0;
    const reasons = [];

    let genreScore = 0;
    for (const g of genreOverlap.list) {
        const gl = g.toLowerCase();
        if (RARE_GENRES.has(gl)) genreScore += RARE_GENRE_WEIGHT;
        else if (GENERIC_GENRES.has(gl)) genreScore += COMMON_GENRE_WEIGHT;
        else genreScore += OTHER_GENRE_WEIGHT;
    }
    score += genreScore;
    if (genreScore > 0) reasons.push(`Genres match (${genreOverlap.list.join(', ')}): +${genreScore}`);

    const kwScore = commonKeywordsCount * KEYWORD_WEIGHT + strongKeywordMatches * (STRONG_KEYWORD_WEIGHT - KEYWORD_WEIGHT);
    score += kwScore;
    if (kwScore > 0) reasons.push(`Keywords match: +${kwScore}`);

    if (sameDirector) {
        score += DIRECTOR_WEIGHT;
        reasons.push(`Same director (${currentMovieRef.director}): +${DIRECTOR_WEIGHT}`);
    }
    if (commonActors > 0) {
        score += commonActors * ACTOR_WEIGHT;
        reasons.push(`Common actors (${commonActors}): +${commonActors * ACTOR_WEIGHT}`);
    }

    const rCur = parseFloat(currentMovieRef.rating) || 0;
    const rCard = parseFloat(card.rating) || 0;
    const rDiff = Math.abs(rCur - rCard);
    let ratingBonus = 0;
    if (rDiff <= 0.3) ratingBonus = RATING_CLOSE_BONUS;
    else if (rDiff <= 0.7) ratingBonus = Math.round(RATING_CLOSE_BONUS * 0.7);
    else if (rDiff <= 1.2) ratingBonus = Math.round(RATING_CLOSE_BONUS * 0.4);
    score += ratingBonus;
    if (ratingBonus > 0) reasons.push(`Similar rating: +${ratingBonus}`);

    if (currentMovieRef.year && card.year) {
        const yd = Math.abs((parseInt(card.year) || 0) - (parseInt(currentMovieRef.year) || 0));
        let yearBonus = 0;
        if (yd <= 2) yearBonus = YEAR_CLOSE_BONUS;
        else if (yd <= 5) yearBonus = Math.round(YEAR_CLOSE_BONUS * 0.7);
        else if (yd <= 10) yearBonus = Math.round(YEAR_CLOSE_BONUS * 0.4);
        else score -= Math.min(yd * 2, 150);
        score += yearBonus;
        if (yearBonus > 0) reasons.push(`Similar year (${yd} years difference): +${yearBonus}`);
    }

    score += Math.random() * 20;

    return {
        score,
        reasons,
        commonGenres: genreOverlap.list,
        commonKeywords: commonKeywordsCount
    };
};

function getPageTmdbId() {
    const urlMatch = window.location.pathname.match(/-(\d+)$/);
    return urlMatch ? parseInt(urlMatch[1], 10) : null;
}

function getFranchiseKey(card) {
    if (card.collection_id) {
        return `collection_${card.collection_id}`;
    }
    const baseTitle = getBaseTitle(card.name);
    return `baseTitle_${baseTitle}`;
}

function getFranchiseKey(card) {
    if (card.collection_id) {
        return `collection_${card.collection_id}`;
    }
    const baseTitle = getBaseTitle(card.name);
    return `baseTitle_${baseTitle}`;
}

async function generateCards(localCardData) {
    const cardContainer = document.querySelector('#card-container');
    if (!cardContainer) return;

    const MAX_CARDS = 12;
    const recommendations = [];
    const addedTmdb = new Set();
    const addedFranchiseKeys = new Set();
    const RECENT_KEY = 'recent_recs_tmdb';

    let recentShown = [];
    try {
        recentShown = JSON.parse(sessionStorage.getItem(RECENT_KEY) || '[]');
    } catch (e) {
        recentShown = [];
    }

    const processedCards = await processLocalCardData(localCardData);
    let currentMovie = null;

    const yearElement = document.getElementById('movie-year');
    const movieYear = yearElement ? yearElement.innerText.trim() : null;

    const tmdbIdFromUrl = getPageTmdbId();
    if (tmdbIdFromUrl) {
        currentMovie = processedCards.find(c => c.tmdb_id === tmdbIdFromUrl);
        if (currentMovie) {
            console.log(`Фильм успешно найден по TMDB ID: ${currentMovie.name}`);
        }
    }

    if (!currentMovie) {
        const pageTitleElement = document.querySelector('title');
        const fullPageTitle = pageTitleElement ? getExactTitle(pageTitleElement.innerText) : '';
        if (fullPageTitle && movieYear) {
            currentMovie = processedCards.find(card => getExactTitle(card.name) === fullPageTitle && card.year === movieYear);
            if (currentMovie) {
                console.log(`Фильм успешно найден по полному названию и году: ${currentMovie.name} (${currentMovie.year})`);
            }
        }
    }

    if (!currentMovie) {
        const pageTitleElement = document.querySelector('title');
        if (pageTitleElement) {
            const pageTitleText = getBaseTitle(pageTitleElement.innerText);
            
            let bestMatch = null;
            let bestMatchLength = 0;

            const candidates = processedCards.filter(card => card.year === movieYear);

            for (const card of candidates) {
                const cardName = getBaseTitle(card.name);
                if (pageTitleText.includes(cardName) && cardName.length > bestMatchLength) {
                    bestMatch = card;
                    bestMatchLength = cardName.length;
                }
            }
            
            currentMovie = bestMatch;

            if (currentMovie) {
                console.log(`Фильм найден по наиболее точному совпадению названия И года: ${currentMovie.name} (${currentMovie.year})`);
            } else {
                console.warn("Не удалось найти фильм по базовому названию и году.");
            }
        }
    }

    if (!currentMovie) {
        console.error("Не удалось найти фильм для рекомендаций. Будут показаны случайные высокорейтинговые фильмы.");
        displayFallbackCards(processedCards, cardContainer);
        return;
    }
    
    addedTmdb.add(currentMovie.tmdb_id);

    console.groupCollapsed(`### Рекомендации для фильма: ${currentMovie.name} (${currentMovie.year})`);

    const currentFranchiseKey = getFranchiseKey(currentMovie);

    // 1. Add all content from the main franchise first
    const mainFranchiseCandidates = processedCards.filter(c => 
        c.tmdb_id !== currentMovie.tmdb_id && getFranchiseKey(c) === currentFranchiseKey
    );

    mainFranchiseCandidates.sort((a, b) => (parseInt(b.year) || 0) - (parseInt(a.year) || 0));
    for (const card of mainFranchiseCandidates) {
        if (recommendations.length >= MAX_CARDS) break;
        if (!addedTmdb.has(card.tmdb_id)) {
            recommendations.push({ ...card, reason: 'Из основной франшизы' });
            addedTmdb.add(card.tmdb_id);
            addedFranchiseKeys.add(getFranchiseKey(card));
        }
    }

    // 2. Group all other content by franchise
    const otherCandidatesByGroup = new Map();
    processedCards
        .filter(c => !addedTmdb.has(c.tmdb_id) && !recentShown.includes(c.tmdb_id))
        .forEach(card => {
            const key = getFranchiseKey(card);
            if (addedFranchiseKeys.has(key)) return;

            if (!otherCandidatesByGroup.has(key)) {
                otherCandidatesByGroup.set(key, []);
            }
            otherCandidatesByGroup.get(key).push({
                ...card,
                ...scoreCard(card, currentMovie)
            });
        });

    // 3. Select the single best film from each other franchise
    const bestCandidates = [];
    for (const [key, candidates] of otherCandidatesByGroup.entries()) {
        const best = candidates.sort((a, b) => b.score - a.score)[0];
        if (best.score >= MODERATE_RELEVANCE_THRESHOLD) {
            bestCandidates.push(best);
        }
    }

    // 4. Sort these best candidates by relevance and add them to recommendations
    const sortedBestCandidates = bestCandidates.sort((a, b) => b.score - a.score);

    for (const card of sortedBestCandidates) {
        if (recommendations.length >= MAX_CARDS) break;
        if (!addedTmdb.has(card.tmdb_id)) {
            recommendations.push({ ...card, reason: `Релевантность (Score: ${card.score.toFixed(0)})` });
            addedTmdb.add(card.tmdb_id);
            addedFranchiseKeys.add(getFranchiseKey(card));
        }
    }

    // 5. Fill with high-rated films if needed
    if (recommendations.length < MAX_CARDS) {
        const highRatedFillers = processedCards
            .filter(c => !addedTmdb.has(c.tmdb_id) && !recentShown.includes(c.tmdb_id) && !addedFranchiseKeys.has(getFranchiseKey(c)) && getRating(c) >= HIGH_RATING_THRESHOLD)
            .sort((a, b) => getRating(b) - getRating(a));

        for (const card of highRatedFillers) {
            if (recommendations.length >= MAX_CARDS) break;
            recommendations.push({ ...card, reason: 'Высокий рейтинг' });
            addedTmdb.add(card.tmdb_id);
            addedFranchiseKeys.add(getFranchiseKey(card));
        }
    }
    
    // 6. Final fill with any remaining films
    if (recommendations.length < MAX_CARDS) {
      console.warn("Недостаточно рекомендаций. Добавляем фильмы, игнорируя кэш 'недавно показанных'.");
      const remainingFillers = shuffleArray(processedCards.filter(c => !addedTmdb.has(c.tmdb_id) && !addedFranchiseKeys.has(getFranchiseKey(c))));
      for (const card of remainingFillers) {
        if (recommendations.length >= MAX_CARDS) break;
        recommendations.push({ ...card, reason: 'Запасной вариант (не хватает новых)' });
        addedTmdb.add(card.tmdb_id);
        addedFranchiseKeys.add(getFranchiseKey(card));
      }
    }

    recommendations.forEach((rec, index) => {
        const debugInfo = {
            'Место в списке': index + 1,
            'Название': rec.name,
            'ID TMDB': rec.tmdb_id,
            'Рейтинг': rec.rating,
            'Причина рекомендации': rec.reason,
            'isTV': rec.isTV,
            'Collection ID': rec.collection_id,
        };
        if (rec.score && rec.score !== Infinity) {
            debugInfo['Релевантность (Score)'] = rec.score.toFixed(0);
            if (rec.reasons) debugInfo['Подробности Score'] = rec.reasons;
        }
        console.log(`%cРекомендация #${index + 1}: ${rec.name}`, 'font-weight: bold; color: #4CAF50;');
        console.log(debugInfo);
    });
    console.groupEnd();

    try {
        const toStore = [...new Set([...(recentShown || []), ...Array.from(addedTmdb)])].slice(-120);
        sessionStorage.setItem(RECENT_KEY, JSON.stringify(toStore));
    } catch (e) {}

    displayCards(recommendations.slice(0, MAX_CARDS), cardContainer);
}

function displayFallbackCards(cards, container) {
    const highRatedFillers = shuffleArray(cards.filter(c => getRating(c) >= HIGH_RATING_THRESHOLD)).sort((a, b) => getRating(b) - getRating(a));
    const randomRecs = [];
    const addedTmdb = new Set();
    const MAX_CARDS = 12;

    for (const card of highRatedFillers) {
        if (randomRecs.length >= MAX_CARDS) break;
        if (!addedTmdb.has(card.tmdb_id)) {
            randomRecs.push({ ...card, reason: 'Популярный фильм (нет привязки)' });
            addedTmdb.add(card.tmdb_id);
        }
    }
    displayCards(randomRecs, container);
}

function displayCards(cards, container) {
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();

    cards.forEach((card) => {
        const li = document.createElement('li');
        li.className = 'splide__slide';
        li.innerHTML = `
            <div class="card card-media" style="width: 12rem" data-rating="${card.rating}">
                <a href="${card.link}">
                    <img src="${card.image}" class="card-img-top img-9x16 mt-2" alt="${card.name}" loading="lazy" onerror="this.onerror=null;this.src='/path/to/default-image.jpg';">
                    <div class="card-rating-trand"><span class="span-rating">${card.rating}</span></div>
                    ${card.isTV ? '<div class="card-TV card-TV-trends">TV</div>' : ''}
                    <div class="card-body"><span class="card-tex">${card.name}<br><span class="year">${card.year}</span></span></div>
                </a>
            </div>
        `;
        fragment.appendChild(li);
    });

    if (cards.length > 0) {
        container.appendChild(fragment);
        initSplide();
    } else {
        const titleElement = document.createElement('h2');
        titleElement.textContent = 'Рекомендаций пока нет.';
        container.appendChild(titleElement);
    }
}

function initSplide() {
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
                perPage: 3
            },
            2299.5: {
                gap: '20px',
                perPage: 3
            },
            2018.5: {
                gap: '18px',
                perPage: 3
            },
            1899.5: {
                gap: '18px',
                perPage: 3
            },
            1704.5: {
                gap: '12px',
                perPage: 3
            },
            1520.5: {
                gap: '12px',
                perPage: 3
            },
            1320.5: {
                gap: '28px',
                perPage: 3
            },
            1050: {
                gap: '12px',
                perPage: 3
            },
            480: {
                gap: '12px',
                perPage: 3
            }
        }
    });
    splide.mount();

    const images = document.querySelectorAll('#Collections .card-img-top');
    let loadedImages = 0;
    const positionRating = () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const image = card.querySelector('.card-img-top');
            const rating = card.querySelector('.card-rating-trand');
            if (image && rating && image.complete) {
                const imageRect = image.getBoundingClientRect();
                const cardRect = card.getBoundingClientRect();
                const bottom = cardRect.bottom - imageRect.bottom + 8;
                const right = cardRect.right - imageRect.right + 8;
                rating.style.position = 'absolute';
                rating.style.bottom = `${bottom}px`;
                rating.style.right = `${right}px`;
            }
        });
    };
    if (images.length === 0) positionRating();
    images.forEach(img => {
        if (img.complete) {
            loadedImages++;
        } else {
            img.addEventListener('load', () => {
                loadedImages++;
                if (loadedImages === images.length) positionRating();
            });
            img.addEventListener('error', () => {
                loadedImages++;
                if (loadedImages === images.length) positionRating();
            });
        }
    });
    if (loadedImages === images.length) positionRating();
}

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