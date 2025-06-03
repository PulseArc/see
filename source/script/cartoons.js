

// Генерация карточек с случайными рейтингами
// Мультфильмы
document.addEventListener('DOMContentLoaded', function () {
    generateCards();
    setTimeout(positionCardRatingTrand, 200);
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Перенесена сюда, чтобы была доступна глобально, если нужна для other functions
const getBaseTitle = (title) => {
    title = title.toLowerCase();
    // Использование вашей логики очистки названия
    title = title.replace(/[:\s-]+.+?(?=\s*\d+|$)/g, '');
    title = title.replace(/\s+\d+$/, '');
    return title.trim();
};

async function generateCards() {
    var currentMovieTitleElement = document.querySelector('title');
    var currentMovieYearElement = document.getElementById('movie-year');
    var currentMovieGenresElement = document.getElementById('movie-genres'); // Использование вашего элемента для жанров

    var localCardData = [ // Переименовано на localCardData для соответствия вашему примеру
        
        {
            "name": "Союз зверей",
            "image": "https://image.tmdb.org/t/p/w500//cg9KYCRLvRaKRjkuZF41Oef3Rbq.jpg",
            "link": "/card/cartoons/500-03/Soyuz-zverej.html",
            "year": "2010",
            "rating":"5.6",
            "genres": ["Семейный", "Комедия"]
        },
        {
            "name": "Рапунцель: Новая история",
            "image": "https://image.tmdb.org/t/p/w500//s12Z2uGrvjj5sA7LsBStTtfTYjC.jpg",
            "link": "/card/cartoons/500-79/Rapuncel-Novaya-istoriya.html",
            "year": "2017",
            "rating":"7.3",
            "isTV": true,
            "genres": ["Детский","Приключения", "Комедия", "Фэнтези"]
        },
        {
            "name": "Рапунцель: Дорога к мечте",
            "image": "https://image.tmdb.org/t/p/w500//zj82L9maBSW6CAVZltBoFBSuTk1.jpg",
            "link": "/card/cartoons/500-80/Rapuncel-Doroga-k-mechte.html",
            "year": "2017",
            "rating":"6.8",
            "genres": ["Приключения", "Комедия", "Фэнтези"]
        },
        {
            "name": "Рапунцель: Запутанная история",
            "image": "https://image.tmdb.org/t/p/w500//i6hhWWRMglTJR2Oi5xsN0JV6tNq.jpg",
            "link": "/card/cartoons/500-04/Rapuncel-Zaputannaya-istoriya.html",
            "year": "2010",
            "rating":"7.6",
            "genres": ["Приключения", "Комедия", "Фэнтези"]
        },
        {
            "name": "Том и Джерри в Нью-Йорке",
            "image": "https://image.tmdb.org/t/p/w500//5nvIUVjFpRAiMziG5zP2KR1uLHV.jpg",
            "link": "/card/cartoons/500-81/Tom-i-Dzherri-v-Nyu-Jorke.html",
            "year": "2021",
            "rating":"7.0",
            "isTV": true,
            "genres": ["Детский", "Комедия"]
        },
        {
            "name": "Том и Джерри: Сказки",
            "image": "https://image.tmdb.org/t/p/original/hMx3Ybd4Zov0Uy7GwqrjfHVcnA2.jpg",
            "link": "/card/cartoons/500-82/Tom-i-Dzherri-Skazki.html",
            "year": "2006",
            "rating":"7.8",
            "isTV": true,
            "genres": ["Детский", "Комедия", "Семейный"]
        },
        {
            "name": "Том и Джерри в детстве",
            "image": "https://image.tmdb.org/t/p/w500//pApniCXhegDnhxQda7RcpG8gFP0.jpg",
            "link": "/card/cartoons/500-83/Tom-i-Dzherri-v-detstve.html",
            "year": "1990",
            "rating":"6.3",
            "isTV": true,
            "genres": ["Детский", "Комедия"]
        },
        {
            "name": "Том и Джерри: Комедийное шоу",
            "image": "https://image.tmdb.org/t/p/w500//4usKsUnNy3DYkrEGC8EXe3bQ8PV.jpg",
            "link": "/card/cartoons/500-84/Tom-i-Dzherri-Komedijnoe-shou.html",
            "year": "1980",
            "rating":"7.5",
            "isTV": true,
            "genres": ["Приключения", "Комедия"]
        },
        {
            "name": "Том и Джерри: Бравые ковбои!",
            "image": "https://image.tmdb.org/t/p/w500//rdSW1PtCAsEmqjWZ5SijWbROLDX.jpg",
            "link": "/card/cartoons/500-85/Tom-i-Dzherri-Bravye-kovboi.html",
            "year": "2022",
            "rating":"6.9",
            "genres": ["Комедия", "Семейный", "Вестерн"]
        },
        {
            "name": "Том и Джерри: Страна снеговиков",
            "image": "https://image.tmdb.org/t/p/w500//c8VZDpxfrcAtdQ9bxb4qsLSkFN4.jpg",
            "link": "/card/cartoons/500-86/Tom-i-Dzherri-Strana-snegovikov.html",
            "year": "2022",
            "rating":"6.7",
            "genres": ["Приключения", "Комедия"]
        },
        {
            "name": "Том и Джерри: Вилли Вонка и шоколадная фабрика",
            "image": "https://image.tmdb.org/t/p/w500//vh5iYhj80l1inSdep61sF8g1S8m.jpg",
            "link": "/card/cartoons/500-87/Tom-i-Dzherri-Villi-Vonka-i-shokoladnaya-fabrika.html",
            "year": "2017",
            "rating":"6.7",
            "genres": ["Комедия", "Семейный"]
        },
        {
            "name": "Том и джерри: возвращение в страну Оз",
            "image": "https://image.tmdb.org/t/p/w500//oXC2YDZkPdhxAaLOGOcepv1BXFB.jpg",
            "link": "/card/cartoons/500-88/Tom-i-dzherri-vozvrashenie-v-stranu-Oz.html",
            "year": "2016",
            "rating":"5.8",
            "genres": ["Комедия", "Семейный", "Фэнтези"]
        },
        {
            "name": "Том и Джерри: Шпион Квест",
            "image": "https://image.tmdb.org/t/p/w500//vnksJqA66fWRZoLuqfkdzUWqw75.jpg",
            "link": "/card/cartoons/500-89/Tom-i-Dzherri-Shpion-Kvest.html",
            "year": "2015",
            "rating":"6.0",
            "genres": ["Комедия", "Семейный"]
        },
        {
            "name": "Том и Джерри: Потерянный дракон",
            "image": "https://image.tmdb.org/t/p/w500//uGHtwQuPFfrsM2DMgwcnA3WGGVc.jpg",
            "link": "/card/cartoons/500-90/Tom-i-Dzherri-Poteryannyj-drakon.html",
            "year": "2014",
            "rating":"6.0",
            "genres": ["Комедия", "Семейный", "Фэнтези"]
        },
        {
            "name": "Том и Джерри: Гигантское приключение",
            "image": "https://image.tmdb.org/t/p/w500//v5IZVUFBU6TymmUHdakVmoWmOeE.jpg",
            "link": "/card/cartoons/500-91/Tom-i-Dzherri-Gigantskoe-priklyuchenie.html",
            "year": "2013",
            "rating":"5.8",
            "genres": ["Комедия", "Семейный", "Фэнтези"]
        },
        {
            "name": "Том и Джерри: Робин Гуд и мышь-весельчак",
            "image": "https://image.tmdb.org/t/p/w500//2lDUlkOne47joTE4yNmIG71qZ0m.jpg",
            "link": "/card/cartoons/500-05/Tom-i-Dzherri-Robin-Gud-i-mysh-veselchak.html",
            "year": "2012",
            "rating":"6.5",
            "genres": ["Комедия", "Приключения", "Семейный"]
        },
        {
            "name": "Том и Джерри и Волшебник из страны Оз",
            "image": "https://image.tmdb.org/t/p/w500//fN1LLxZx5cmcrq6c0lsC27UYmw0.jpg",
            "link": "/card/cartoons/500-92/Tom-i-Dzherri-i-Volshebnik-iz-strany-Oz.html",
            "year": "2011",
            "rating":"6.3",
            "genres": ["Комедия", "Семейный", "Фэнтези", "Приключения"]
        },
        {
            "name": "Том и Джерри: Шерлок Холмс",
            "image": "https://image.tmdb.org/t/p/w500//771TGoHCnMX6afZdD7KcPO53ED7.jpg",
            "link": "/card/cartoons/500-93/Tom-i-Dzherri-Sherlok-Holms.html",
            "year": "2010",
            "rating":"6.4",
            "genres": ["Комедия", "Детектив", "Семейный"]
        },
        {
            "name": "Том и Джерри: История о Щелкунчике",
            "image": "https://image.tmdb.org/t/p/w500//akjBwODBGSIYpaIxhTtGfsi3I5y.jpg",
            "link": "/card/cartoons/500-94/Tom-i-Dzherri-Istoriya-o-Shelkunchike.html",
            "year": "2007",
            "rating":"6.8",
            "genres": ["Комедия", "Семейный"]
        },
        {
            "name": "Том и Джерри: Трепещи, усатый!",
            "image": "https://image.tmdb.org/t/p/w500//l4j8r4SHLJXjMccxX8yGH3QudRO.jpg",
            "link": "/card/cartoons/500-95/Tom-i-Dzherri-Trepeshi-usatyj.html",
            "year": "2006",
            "rating":"6.9",
            "genres": ["Комедия", "Семейный", "Приключения"]
        },
        {
            "name": "Том и Джерри: Быстрый и бешеный",
            "image": "https://image.tmdb.org/t/p/w500//q25nIkJzPG9amPibssLwDteMid1.jpg",
            "link": "/card/cartoons/500-96/Tom-i-Dzherri-Bystryj-i-beshenyj.html",
            "year": "2005",
            "rating":"7.0",
            "genres": ["Комедия", "Семейный"]
        },
        {
            "name": "Том и Джерри: Волшебное кольцо",
            "image": "https://image.tmdb.org/t/p/w500//vP9l1bTvRWfaTnooaCl5ta20Ysx.jpg",
            "link": "/card/cartoons/500-97/Tom-i-Dzherri-Volshebnoe-kolco.html",
            "year": "2002",
            "rating":"6.4",
            "genres": ["Комедия", "Семейный", "Фэнтези"]
        },
        {
            "name": "Том и Джерри: Мотор!",
            "image": "https://image.tmdb.org/t/p/w500//kJ6yQPWxdnDjPNWaR4nRD3GgpOT.jpg",
            "link": "/card/cartoons/500-98/Tom-i-Dzherri-Motor.html",
            "year": "1992",
            "rating":"6.3",
            "genres": ["Комедия", "Семейный", "Музыка"]
        },
        {
            "name": "Рио 2",
            "image": "https://image.tmdb.org/t/p/w500//o3dmiL6W0EqRnbRpm7h6Pen31PF.jpg",
            "link": "/card/cartoons/500-99/Rio-2.html",
            "year": "2014",
            "rating":"6.5",
            "genres": ["Приключения", "Комедия", "Семейный"]
        },
        {
            "name": "Рио",
            "image": "https://image.tmdb.org/t/p/w500//oQZEFIeucAsuNFxkt7cUww8bh6s.jpg",
            "link": "/card/cartoons/500-06/Rio.html",
            "year": "2011",
            "rating":"6.7",
            "genres": ["Приключения", "Комедия", "Семейный"]
        },
        {
            "name": "Тайна красной планеты",
            "image": "https://image.tmdb.org/t/p/w500//mD4BnU0MTon8bhuJPCrc82IXLtp.jpg",
            "link": "/card/cartoons/500-07/Tajna-krasnoj-planety.html",
            "year": "2011",
            "rating":"6.0",
            "genres": ["Приключения","Фантастика", "Семейный"]
        },
        {
            "name": "Рататуй",
            "image": "https://image.tmdb.org/t/p/w500//6u4JvZBiw1Uv6BgTlWNsFSSHlMn.jpg",
            "link": "/card/cartoons/500-08/Ratatuj.html",
            "year": "2007",
            "rating":"7.8",
            "genres": ["Комедия", "Семейный", "Фэнтези"]
        },
        {
            "name": "Храбрая сердцем",
            "image": "https://image.tmdb.org/t/p/w500//5A52Y3scfxXTwBKVdgEVmoa8i0q.jpg",
            "link": "/card/cartoons/500-09/Hrabraya-serdcem.html",
            "year": "2012",
            "rating":"7.0",
            "genres": ["Комедия", "Семейный", "Фэнтези", "Боевик"]
        },
        {
            "name": "В гости к Робинсонам",
            "image": "https://image.tmdb.org/t/p/w500//gx7TFtVxPZPHeuYuXdPgPGnboRU.jpg",
            "link": "/card/cartoons/500-10/V-gosti-k-Robinsonam.html",
            "year": "2007",
            "rating":"6.9",
            "genres": ["Комедия", "Семейный"]
        },
        {
            "name": "Дорога на Эльдорадо",
            "image": "https://image.tmdb.org/t/p/w500//kbXR4E6xhi6MFcyEvz1VKQaRhc9.jpg",
            "link": "/card/cartoons/500-11/Doroga-na-Eldorado.html",
            "year": "2000",
            "rating":"7.2",
            "genres": ["Семейный","Приключения", "Комедия"]
        },
        {
            "name": "Франкенвини",
            "image": "https://image.tmdb.org/t/p/w500//pzqDbpshw50ulrSM5Sdc2AY70tq.jpg",
            "link": "/card/cartoons/500-13/Frankenvini.html",
            "year": "2012",
            "rating":"7.0",
            "genres": ["Комедия", "Семейный"]
        },
        {
            "name": "Правила Мегамозга!",
            "image": "https://image.tmdb.org/t/p/w500//kXdT6ait0Kw4ylzFgEA0z8kWaMM.jpg",
            "link": "/card/cartoons/500-100/Pravila-Megamozga.html",
            "year": "2024",
            "rating":"5.5",
            "isTV": true,
            "genres": ["Комедия", "Детский", "Приключения"]
        },
        {
            "name": "Мегамозг против Синдиката Рока",
            "image": "https://image.tmdb.org/t/p/w500//rtQYsfEhWE9hGX94dZyPFoMdg2V.jpg",
            "link": "/card/cartoons/500-101/Megamozg-protiv-Sindikata-Roka.html",
            "year": "2024",
            "rating":"5.1",
            "genres": ["Комедия", "Детский", "Приключения"]
        },
        {
            "name": "Мегамозг",
            "image": "https://image.tmdb.org/t/p/w500//wmbjH9s0mu5gv1WX3v8n9IwbbHq.jpg",
            "link": "/card/cartoons/500-14/Megamozg.html",
            "year": "2010",
            "rating":"7.0",
            "genres": ["Комедия", "Детский", "Приключения"]
        },
        {
            "name": "ВАЛЛ·И",
            "image": "https://image.tmdb.org/t/p/w500//i4qDsHTfrTD2EkPa7tT53cJYZkL.jpg",
            "link": "/card/cartoons/500-15/VALL·I.html",
            "year": "2008",
            "rating":"8.1",
            "genres": ["Семейный","Приключения", "Фантастика"]
        },
        {
            "name": "Фантазия",
            "image": "https://image.tmdb.org/t/p/w500//gCevkcGOmqowkB6jJaYUVZdHCVN.jpg",
            "link": "/card/cartoons/500-16/Fantaziya.html",
            "year": "1940",
            "rating":"7.4",
            "genres": ["Семейный", "Фэнтези"]
        },
        {
            "name": "Аладдин и Король Разбойников",
            "image": "https://image.tmdb.org/t/p/w500//wYyCFCIXNgABzkq975JT4LASG6M.jpg",
            "link": "/card/cartoons/500-102/Aladdin-i-Korol-Razbojnikov.html",
            "year": "1996",
            "rating":"6.3",
            "genres": ["Приключения", "Семейный"]
        },
        {
            "name": "Аладдин",
            "image": "https://image.tmdb.org/t/p/w500//faTIP0dG6tSWfGYHjEyYw3JeBT2.jpg",
            "link": "/card/cartoons/500-103/Aladdin1994.html",
            "year": "1994",
            "rating":"6.9",
            "isTV": true,
            "genres": ["Приключения", "Семейный"]
        },
        {
            "name": "Возвращение Джафара",
            "image": "https://image.tmdb.org/t/p/w500//yW8wI3SnjmuqsFHVFQepKL1e9T.jpg",
            "link": "/card/cartoons/500-104/Vozvrashenie-Dzhafara.html",
            "year": "1994",
            "rating":"6.2",
            "genres": ["Приключения", "Семейный"]
        },
        {
            "name": "Аладдин",
            "image": "https://image.tmdb.org/t/p/w500//92GjkHUHMn9HIZqihuradZNZNLb.jpg",
            "link": "/card/cartoons/500-17/Aladdin.html",
            "year": "1992",
            "rating":"7.7",
            "genres": ["Приключения", "Семейный"]
        },
        {
            "name": "Семейка Крудс: Семейное древо",
            "image": "https://image.tmdb.org/t/p/original/aUgEi0VryenHDoQ0wJH0fycBwzU.jpg",
            "link": "/card/cartoons/500-105/Semejka-Kruds-Semejnoe-drevo.html",
            "year": "2021",
            "rating":"7.2",
            "isTV": true,
            "genres": ["Семейный", "Приключения", "Комедия"]
        },
        {
            "name": "Семейка Крудс: Новоселье",
            "image": "https://image.tmdb.org/t/p/w500//gT8cDQklL3xoVuXPLGRdjDI3tRA.jpg",
            "link": "/card/cartoons/500-106/Semejka-Kruds-Novosele.html",
            "year": "2020",
            "rating":"7.5",
            "genres": ["Семейный", "Приключения", "Комедия"]
        },
        {
            "name": "Семейка Крудс",
            "image": "https://image.tmdb.org/t/p/w500//bYF0aegBQBHfc1Lva7mChj4cPLM.jpg",
            "link": "/card/cartoons/500-18/Semejka-Kruds.html",
            "year": "2013",
            "rating":"6.9",
            "genres": ["Семейный", "Приключения", "Комедия"]
        },
        {
            "name": "Красавица и Чудовище: Чудесное Рождество",
            "image": "https://image.tmdb.org/t/p/w500//afJhfRcAVpOpBa177tHlV5TJxzn.jpg",
            "link": "/card/cartoons/500-107/Krasavica-i-Chudovishe-Chudesnoe-Rozhdestvo.html",
            "year": "1997",
            "rating":"6.2",
            "genres": ["Семейный", "Фэнтези"]
        },
        {
            "name": "Красавица и чудовище",
            "image": "https://image.tmdb.org/t/p/w500//A9AtXMWX0V4IZ2ygBi9Cr85tQD1.jpg",
            "link": "/card/cartoons/500-19/Krasavica-i-chudovishe.html",
            "year": "1991",
            "rating":"7.7",
            "genres": ["Семейный", "Фэнтези"]
        },
        {
            "name": "Зверогонщики",
            "image": "https://image.tmdb.org/t/p/w500//5ix430YAsjDNlVdUlR5UHSmXZeY.jpg",
            "link": "/card/cartoons/500-108/Zverogonshiki.html",
            "year": "2023",
            "rating":"6.7",
            "genres": ["Семейный", "Комедия"]
        },
        {
            "name": "Самолёты: Огонь и вода",
            "image": "https://image.tmdb.org/t/p/w500//fdB4qAY1xwBSnivCvCsVqR2Vg7e.jpg",
            "link": "/card/cartoons/500-109/Samolyoty-Ogon-i-voda.html",
            "year": "2014",
            "rating":"6.2",
            "genres": ["Комедия", "Приключения", "Семейный"]
        },
        {
            "name": "Самолёты",
            "image": "https://image.tmdb.org/t/p/w500//1OjNMu0THjx5iXXH43a6nAF7wqm.jpg",
            "link": "/card/cartoons/500-20/Samolety.html",
            "year": "2013",
            "rating":"5.9",
            "genres": ["Комедия", "Приключения", "Семейный"]
        },
        {
            "name": "Тачки на дороге",
            "image": "https://image.tmdb.org/t/p/w500//gH6IQvbPekyyPN8rMXlaiR99Rxp.jpg",
            "link": "/card/cartoons/500-110/Tachki-na-doroge.html",
            "year": "2022",
            "rating":"7.5",
            "isTV": true,
            "genres": ["Комедия", "Детский"]
        },
        {
            "name": "Тачки 3",
            "image": "https://image.tmdb.org/t/p/w500//yOaxBNkId5a1fZVGWayFJohxG7S.jpg",
            "link": "/card/cartoons/500-111/Tachki-3.html",
            "year": "2017",
            "rating":"6.9",
            "genres": ["Семейный", "Комедия", "Приключения"]
        },
        {
            "name": "Тачки 2",
            "image": "https://image.tmdb.org/t/p/w500//n6wISTzNLYFTosY8Sh9Qj39Nq7f.jpg",
            "link": "/card/cartoons/500-112/Tachki-2.html",
            "year": "2011",
            "rating":"6.1",
            "genres": ["Семейный", "Комедия", "Приключения"]
        },
        {
            "name": "Тачки",
            "image": "https://image.tmdb.org/t/p/w500//wnnv9vLO4jBhXF1Vw2Ss8uhjJPC.jpg",
            "link": "/card/cartoons/500-12/Tachki.html",
            "year": "2006",
            "rating":"7.0",
            "genres": ["Семейный", "Комедия", "Приключения"]
        },
        {
            "name": "Эпик",
            "image": "https://image.tmdb.org/t/p/w500//vO3UVVzfpRN5PgxyyzCnFBfbRS2.jpg",
            "link": "/card/cartoons/500-21/Epik.html",
            "year": "2013",
            "rating":"6.5",
            "genres": ["Приключения", "Семейный", "Фэнтези"]
        },
        {
            "name": "Университет монстров",
            "image": "https://image.tmdb.org/t/p/w500//3LkX2ZFLbgj07lhdQYzOUHaMoZd.jpg",
            "link": "/card/cartoons/500-113/Universitet-monstrov.html",
            "year": "2013",
            "rating":"7.0",
            "genres": ["Семейный", "Комедия"]
        },
        {
            "name": "Корпорация Монстров",
            "image": "https://image.tmdb.org/t/p/w500//zXIusESsQ7ZXP9MFwbvcTTZ3XWF.jpg",
            "link": "/card/cartoons/500-22/Korporaciya-Monstrov.html",
            "year": "2001",
            "rating":"7.8",
            "genres": ["Семейный", "Комедия"]
        },
        {
            "name": "Секретная служба Санта-Клауса",
            "image": "https://image.tmdb.org/t/p/w500//bHMGBqaYrdXgzVRfxn9ukN2PpN8.jpg",
            "link": "/card/cartoons/500-23/Sekretnaya-sluzhba-Santa-Klausa.html",
            "year": "2011",
            "rating":"6.8",
            "genres": ["Драма", "Семейный", "Комедия"]
        },
        {
            "name": "Турбо",
            "image": "https://image.tmdb.org/t/p/w500//inTKQni4YW8syrfgnXHwzmNeSo4.jpg",
            "link": "/card/cartoons/500-27/Turbo.html",
            "year": "2013",
            "rating":"6.2",
            "genres": ["Семейный", "Комедия"]
        },
        {
            "name": "В поисках Дори",
            "image": "https://image.tmdb.org/t/p/w500//xBUhR52S1RQHYEY40Yo04ner32I.jpg",
            "link": "/card/cartoons/500-115/V-poiskah-Dori.html",
            "year": "2016",
            "rating":"7.0",
            "genres": ["Приключения", "Комедия", "Семейный"]
        },
        {
            "name": "В поисках Немо",
            "image": "https://image.tmdb.org/t/p/w500//wwUYKw29xtFLk5PIZV9iDAs6zlW.jpg",
            "link": "/card/cartoons/500-24/V-poiskah-Nemo.html",
            "year": "2003",
            "rating":"7.8",
            "genres": ["Приключения", "Комедия", "Семейный"]
        },
        {
            "name": "Лоракс",
            "image": "https://image.tmdb.org/t/p/w500//pCq2zMcfyC0METerLKJahBmlR0v.jpg",
            "link": "/card/cartoons/500-32/Loraks.html",
            "year": "2012",
            "rating":"6.5",
            "genres": ["Семейный"]
        },
        {
            "name": "Индюки: Назад в будущее",
            "image": "https://image.tmdb.org/t/p/w500//h1iOcJ6qEgFBQ76jACsALLboHQb.jpg",
            "link": "/card/cartoons/500-25/Indyuki-Nazad-v-budushee.html",
            "year": "2013",
            "rating":"5.9",
            "genres": ["Семейный", "Комедия"]
        },
        {
            "name": "Ральф против Интернета",
            "image": "https://image.tmdb.org/t/p/w500//tVmomifGhoJfijkOnSGDDZwRSH5.jpg",
            "link": "/card/cartoons/500-116/Ralf-protiv-Interneta.html",
            "year": "2018",
            "rating":"7.2",
            "genres": ["Комедия", "Приключения"]
        },
        {
            "name": "Ральф",
            "image": "https://image.tmdb.org/t/p/w500//uqWBFXy0lhoz32qy9PsfAjgKMge.jpg",
            "link": "/card/cartoons/500-26/Ralf.html",
            "year": "2012",
            "rating":"7.3",
            "genres": ["Комедия", "Приключения"]
        },
        {
            "name": "Трансформеры: Начало",
            "image": "https://image.tmdb.org/t/p/w500//47mnEdahUv5I28CKuBx5drLRcuK.jpg",
            "link": "/card/cartoons/500-28/Transformery-Nachalo.html",
            "year": "2024",
            "rating":"8.1",
            "genres": ["Фантастика", "Приключения", "Семейный"]
        },
        {
            "name": "Трансформеры: Земная Искра",
            "image": "https://image.tmdb.org/t/p/w500//jLwU37QusZDkkOuFNb1TA6NQZNT.jpg",
            "link": "/card/cartoons/500-117/Transformery-Zemnaya-Iskra.html",
            "year": "2022",
            "rating":"7.0",
            "isTV": true,
            "genres": ["Детский", "НФ и Фэнтези", "Комедия"]
        },
        {
            "name": "Трансформеры: Ботботы",
            "image": "https://image.tmdb.org/t/p/w500//hKtDA3GG3puz5DGnieFCNRGPpjK.jpg",
            "link": "/card/cartoons/500-118/Transformery-Botboty.html",
            "year": "2022",
            "rating":"5.1",
            "isTV": true,
            "genres": ["Детский"]
        },
        {
            "name": "Трансформеры. Война за Кибертрон. Королевство",
            "image": "https://image.tmdb.org/t/p/w500//r2IouRpN9IXMyY8RX0YnJhkCirE.jpg",
            "link": "/card/cartoons/500-119/Transformery-Vojna-za-Kibertron-Korolevstvo.html",
            "year": "2021",
            "rating":"7.7",
            "isTV": true,
            "genres": ["Боевик и Приключения", "НФ и Фэнтези"]
        },
        {
            "name": "Трансформеры: Войны гештальтов",
            "image": "https://image.tmdb.org/t/p/w500//reYa1VrOuNfKcMIJGQQ66kvIuBM.jpg",
            "link": "/card/cartoons/500-120/Transformery-Vojny-geshtaltov.html",
            "year": "2016",
            "rating":"7.8",
            "isTV": true,
            "genres": ["Приключения", "Фэнтези"]
        },
        {
            "name": "Трансформеры. Роботы под прикрытием",
            "image": "https://image.tmdb.org/t/p/w500//pbRpKAGbXnASnNFHCGFC4CwVPla.jpg",
            "link": "/card/cartoons/500-121/Transformery-Roboty-pod-prikrytiem.html",
            "year": "2015",
            "rating":"7.1",
            "isTV": true,
            "genres": ["Детский"]
        },
        {
            "name": "Трансформеры: Боты-спасатели",
            "image": "https://image.tmdb.org/t/p/w500//wtugHPxksnORftAs7EOGK3Oy0I5.jpg",
            "link": "/card/cartoons/500-122/Transformery-Boty-spasateli.html",
            "year": "2012",
            "rating":"7.4",
            "isTV": true,
            "genres": ["Детский", "Приключения", "НФ и Фэнтези"]
        },
        {
            "name": "Трансформеры: Прайм",
            "image": "https://image.tmdb.org/t/p/original/nEzYyon3gBhhWdmQds9k23lHKEd.jpg",
            "link": "/card/cartoons/500-123/Transformery-Prajm.html",
            "year": "2010",
            "rating":"8.0",
            "isTV": true,
            "genres": ["Детский", "Приключения"]
        },
        {
            "name": "Трансформеры",
            "image": "https://image.tmdb.org/t/p/w500//uEKVNu69urMrXSuAdeK54HOtvo4.jpg",
            "link": "/card/cartoons/500-124/Transformery2007.html",
            "year": "2007",
            "rating":"8.0",
            "isTV": true,
            "genres": ["Семейный", "НФ и Фэнтези", "Детский"]
        },
        {
            "name": "Трансформеры: Зверороботы",
            "image": "https://image.tmdb.org/t/p/w500//pNvziasPFwBlWDpmM346OnUB6E6.jpg",
            "link": "/card/cartoons/500-125/Transformery-Zveroroboty.html",
            "year": "1999",
            "rating":"8.0",
            "isTV": true,
            "genres": ["Боевик и Приключения", "Детский"]
        },
        {
            "name": "Трансформеры: Битвы Зверей",
            "image": "https://image.tmdb.org/t/p/original/148PzBHH19K6QANTSUoJt3Dghi.jpg",
            "link": "/card/cartoons/500-126/Transformery-Bitvy-Zverej.html",
            "year": "1996",
            "rating":"8.1",
            "isTV": true,
            "genres": ["Боевик и Приключения"]
        },
        {
            "name": "Трансформеры: Воины Великой Силы",
            "image": "https://image.tmdb.org/t/p/original/ztyqe6amne1ZmddsM9IrU0f7OcW.jpg",
            "link": "/card/cartoons/500-127/Transformery-Voiny-Velikoj-Sily.html",
            "year": "1988",
            "rating":"8.2",
            "isTV": true,
            "genres": ["Приключения", "НФ и Фэнтези"]
        },
        {
            "name": "Трансформеры",
            "image": "https://image.tmdb.org/t/p/w500//5OptmOBeHvIwqah6VETRNOtTmWz.jpg",
            "link": "/card/cartoons/500-128/Transformery1986.html",
            "year": "1986",
            "rating":"7.1",
            "genres": ["Боевик и Приключения", "Семейный"]
        },
        {
            "name": "Трансформеры",
            "image": "https://image.tmdb.org/t/p/w500//h4DvodvcLWh7xdpj872Bq0V2DKS.jpg",
            "link": "/card/cartoons/500-129/Transformery1984.html",
            "year": "1984",
            "rating":"7.8",
            "isTV": true,
            "genres": ["Детский", "Приключения", "НФ и Фэнтези"]
        },
        {
            "name": "Кошмар перед Рождеством",
            "image": "https://image.tmdb.org/t/p/w500//xvqFn90FxKTJflG4n0spZY7vySu.jpg",
            "link": "/card/cartoons/500-29/Koshmar-pered-Rozhdestvom.html",
            "year": "1993",
            "rating":"7.8",
            "genres": ["Фэнтези", "Семейный"]
        },
        {
            "name": "Утиные истории",
            "image": "https://image.tmdb.org/t/p/original/2THLokQ6Ce914l4b3rYvvbEPJpz.jpg",
            "link": "/card/cartoons/500-130/Utinye-istorii2017.html",
            "year": "2017",
            "rating":"7.8",
            "isTV": true,
            "genres": ["Комедия", "Семейный"]
        },
        {
            "name": "Утиные истории: Заветная лампа",
            "image": "https://image.tmdb.org/t/p/w500//2yY39ALrHQb8ZTRwUW9yiL3x7ft.jpg",
            "link": "/card/cartoons/500-30/Utinye-istorii-Zavetnaya-lampa.html",
            "year": "1990",
            "rating":"6.7",
            "genres": ["Комедия", "Семейный"]
        },
        {
            "name": "Утиные истории",
            "image": "https://image.tmdb.org/t/p/original/l39HDf6WYzV8VLY5EnCRC81DWOy.jpg",
            "link": "/card/cartoons/500-131/Utinye-istorii1987.html",
            "year": "1987",
            "rating":"7.6",
            "isTV": true,
            "genres": ["Комедия", "Семейный"]
        },
        {
            "name": "История игрушек 4",
            "image": "https://image.tmdb.org/t/p/w500//flLgw8DJKbjSblWnZvTvvYL2pRr.jpg",
            "link": "/card/cartoons/500-132/Istoriya-igrushek-4.html",
            "year": "2019",
            "rating":"7.5",
            "genres": ["Семейный", "Приключения", "Комедия"]
        },
        {
            "name": "История игрушек 3",
            "image": "https://image.tmdb.org/t/p/w500//2IWIk34c9fMv7xJQ5ur4Z3O1Hh9.jpg",
            "link": "/card/cartoons/500-31/Istoriya-igrushek-3.html",
            "year": "2010",
            "rating":"7.8",
            "genres": ["Семейный", "Приключения", "Комедия"]
        },
        {
            "name": "История игрушек 2",
            "image": "https://image.tmdb.org/t/p/w500//descLErszABnAy79SDTzupmPD7e.jpg",
            "link": "/card/cartoons/500-133/Istoriya-igrushek-2.html",
            "year": "1999",
            "rating":"7.6",
            "genres": ["Семейный", "Приключения", "Комедия"]
        },
        {
            "name": "История игрушек",
            "image": "https://image.tmdb.org/t/p/w500//gRLk7XpdRyNa697taDKtFx3l6qV.jpg",
            "link": "/card/cartoons/500-134/Istoriya-igrushek1995.html",
            "year": "1995",
            "rating":"8.0",
            "genres": ["Семейный", "Приключения", "Комедия"]
        },
        {
            "name": "Футурама: В дикую зелёную даль",
            "image": "https://image.tmdb.org/t/p/w500//oL6SymcxQE6TN9KrrbdyhlulnEG.jpg",
            "link": "/card/cartoons/500-114/Futurama-V-dikuyu-zelyonuyu-dal.html",
            "year": "2009",
            "rating":"7.0",
            "genres": ["Комедия", "Фантастика"]
        },
        {
            "name": "Футурама: Игра Бендера",
            "image": "https://image.tmdb.org/t/p/w500//bx8OVOBn5WP9TJJuOpRzyMCdzzb.jpg",
            "link": "/card/cartoons/500-135/Futurama-Igra-Bendera.html",
            "year": "2008",
            "rating":"6.9",
            "genres": ["Комедия", "Фантастика", "Боевик"]
        },
        {
            "name": "Футурама: Зверь с миллиардом спин",
            "image": "https://image.tmdb.org/t/p/w500//ldZZ8wdVOFCN1c11O8IzT3XzV9A.jpg",
            "link": "/card/cartoons/500-136/Futurama-Zver-s-milliardom-spin.html",
            "year": "2008",
            "rating":"6.9",
            "genres": ["Комедия", "Фантастика", "Мелодрама"]
        },
        {
            "name": "Футурама: Большой куш Бендера",
            "image": "https://image.tmdb.org/t/p/w500//3pJdmpC5KvOnOYYWSnLrgbTP5jE.jpg",
            "link": "/card/cartoons/500-137/Futurama-Bolshoj-kush-Bendera.html",
            "year": "2007",
            "rating":"7.4",
            "genres": ["Комедия", "Фантастика"]
        },
        {
            "name": "Футурама",
            "image": "https://image.tmdb.org/t/p/w500//407xqcHFS2O3NsqBo2XpprCjKSc.jpg",
            "link": "/card/cartoons/500-78/Futurama.html",
            "year": "1999",
            "rating":"8.4",
            "isTV": true,
            "genres": ["Комедия", "Фантастика", "НФ и Фэнтези"]
        },
        {
            "name": "Астерикс и Обеликс: поединок вождей",
            "image": "https://image.tmdb.org/t/p/w500//9iD1rFwjj8E8JdXEg1pJj9SQz4r.jpg",
            "link": "/card/cartoons/500-147/Asteriks-i-Obeliks-poedinok-vozhdej.html",
            "year": "2025",
            "rating":"8.1",
            "isTV": true,
            "genres": ["Комедия", "Детский", "НФ и Фэнтези"]
        },
        {
            "name": "Астерикс и тайное зелье",
            "image": "https://image.tmdb.org/t/p/w200//tjhaD88iWGGEFmUX38KZ4GsCXRJ.jpg",
            "link": "/card/cartoons/500-33/Asteriks-i-tajnoe-zele.html",
            "year": "2018",
            "rating":"6.9",
            "genres": ["Семейный", "Приключения"]
        },
        {
            "name": "Астерикс: Земля Богов",
            "image": "https://image.tmdb.org/t/p/w500//e61MmASenVYze4AQinHPIeVBPOK.jpg",
            "link": "/card/cartoons/500-138/Asteriks-Zemlya-Bogov.html",
            "year": "2014",
            "rating":"6.8",
            "genres": ["Комедия", "Приключения", "Семейный"]
        },
        {
            "name": "Астерикс и викинги",
            "image": "https://image.tmdb.org/t/p/original/dW9h1Ez6PRx8PnZUVT27MnG8Wu5.jpg",
            "link": "/card/cartoons/500-139/Asteriks-i-vikingi.html",
            "year": "2006",
            "rating":"6.1",
            "genres": ["Комедия", "Приключения", "Семейный"]
        },
        {
            "name": "Астерикс завоёвывает Америку",
            "image": "https://image.tmdb.org/t/p/w500//wQDCj9P67suPY55LA6zxgSH8QFl.jpg",
            "link": "/card/cartoons/500-140/Asteriks-zavoyovyvaet-Ameriku.html",
            "year": "1994",
            "rating":"6.2",
            "genres": ["Семейный", "Приключения", "Комедия"]
        },
        {
            "name": "Большой бой Астерикса",
            "image": "https://image.tmdb.org/t/p/w500//uu0Ixw36nxrzsx03Tdfak2qN1VU.jpg",
            "link": "/card/cartoons/500-141/Bolshoj-boj-Asteriksa.html",
            "year": "1989",
            "rating":"6.3",
            "genres": ["Семейный", "Приключения", "Комедия"]
        },
        {
            "name": "Астерикс в Британии",
            "image": "https://image.tmdb.org/t/p/w500//1MWTDqNWLzjs9HUtC8aKanNLZLH.jpg",
            "link": "/card/cartoons/500-142/Asteriks-v-Britanii.html",
            "year": "1986",
            "rating":"6.8",
            "genres": ["Семейный", "Приключения", "Комедия"]
        },
        {
            "name": "Астерикс против Цезаря",
            "image": "https://image.tmdb.org/t/p/w500//8kY2WmF9PgkzfmtcPyW1AmQJswu.jpg",
            "link": "/card/cartoons/500-143/Asteriks-protiv-Cezarya.html",
            "year": "1985",
            "rating":"6.5",
            "genres": ["Комедия", "Семейный", "Приключения"]
        },
        {
            "name": "12 подвигов Астерикса",
            "image": "https://image.tmdb.org/t/p/w500//b7ebaaTwig78TkuKSTxjodCQ6iA.jpg",
            "link": "/card/cartoons/500-144/12-podvigov-Asteriksa.html",
            "year": "1976",
            "rating":"7.3",
            "genres": ["Семейный", "Комедия", "Приключения"]
        },
        {
            "name": "Астерикс и Клеопатра",
            "image": "https://image.tmdb.org/t/p/w500//sO87S5lVVJ4i7oYof1irO5OXl8B.jpg",
            "link": "/see/cartoons/500-145/Asteriks-i-Kleopatra.html",
            "year": "1968",
            "rating":"6.9",
            "genres": ["Семейный", "Приключения", "Комедия"]
        },
        {
            "name": "Астерикс из Галлии",
            "image": "https://image.tmdb.org/t/p/w500//vBwwWn6irVjGROIjWJMCzPIerwg.jpg",
            "link": "/card/cartoons/500-146/Asteriks-iz-Gallii.html",
            "year": "1967",
            "rating":"6.4",
            "genres": ["Семейный", "Приключения", "Комедия"]
        },
        {
            "name": "Пушистое превращение",
            "image": "https://image.tmdb.org/t/p/w500//uR70IF8Xiw3fnM2j5KBmDKyyP2o.jpg",
            "link": "/card/cartoons/500-34/Pushistoe-prevrashenie.html",
            "year": "2024",
            "rating":"5.1",
            "genres": ["Приключения", "Фэнтези"]
        },
        {
            "name": "Шаг за шагом",
            "image": "https://image.tmdb.org/t/p/w200//9xSjP8B0iZHRzvrtKcYDkaalomS.jpg",
            "link": "/card/cartoons/500-35/Shag-za-shagom.html",
            "year": "2024",
            "rating":"7.5",
            "genres": ["Мультфильм", "Музыка"]
        },
        {
            "name": "Вперёд",
            "image": "https://image.tmdb.org/t/p/w500//6Pvojxr83EZNisODJbXmLfmOya8.jpg",
            "link": "/card/cartoons/500-36/Vperyod.html",
            "year": "2020",
            "rating":"7.7",
            "genres": ["Приключения", "Комедия", "Фэнтези"]
        },
        {
            "name": "Мадагаскар 3",
            "image": "https://image.tmdb.org/t/p/w500//aOKn2A1Ve0rKd6u8nTS1kXYSR65.jpg",
            "link": "/card/cartoons/500-148/Madagaskar-3.html",
            "year": "2012",
            "rating":"6.6",
            "genres": ["Семейный", "Приключения", "Комедия"]
        },
        {
            "name": "Мадагаскар 2",
            "image": "https://image.tmdb.org/t/p/w500//rfwloSBRAZCrWwsJcXd1iveI59n.jpg",
            "link": "/card/cartoons/500-149/Madagaskar-2.html",
            "year": "2008",
            "rating":"6.5",
            "genres": ["Семейный", "Приключения", "Комедия"]
        },
        {
            "name": "Мадагаскар",
            "image": "https://image.tmdb.org/t/p/w500//vwPFZT7tS8b9zDSN0PdvOzeGlfW.jpg",
            "link": "/card/cartoons/500-02/Madagaskar.html",
            "year": "2005",
            "rating":"6.9",
            "genres": ["Семейный", "Приключения", "Комедия"]
        },
        {
            "name": "Пингвины Мадагаскара",
            "image": "https://image.tmdb.org/t/p/w500//uovMwhOMMF31sO9TxGvqjIGvdm8.jpg",
            "link": "/card/cartoons/500-37/Pingviny-Madagaskara.html",
            "year": "2014",
            "rating":"6.5",
            "genres": ["Семейный", "Приключения", "Комедия"]
        },
        {
            "name": "Пингвины Мадагаскара",
            "image": "https://image.tmdb.org/t/p/w500//yj25y94rEWsTxmcp5WdHDfuoriU.jpg",
            "link": "/card/cartoons/500-150/Pingviny-Madagaskara2008.html",
            "year": "2008",
            "rating":"7.4",
            "isTV": true,
            "genres": ["Семейный", "Приключения", "Комедия"]
        },
        {
            "name": "Хранитель Луны",
            "image": "https://image.tmdb.org/t/p/w500//yCEBDLJrRDiB5yCEarmRI75xkYM.jpg",
            "link": "/card/cartoons/500-38/Hranitel-Luny.html",
            "year": "2015",
            "rating":"7.3",
            "genres": ["Семейный", "Приключения", "Фэнтези", "Детский"]
        },
        {
            "name": "Гриффины: Там, там, на тёмной стороне",
            "image": "https://image.tmdb.org/t/p/w500//fWr85GtJlzY4ZwdB2eCu3pdzWHz.jpg",
            "link": "/card/cartoons/500-151/Griffiny-Tam-tam-na-temnoj-storone.html",
            "year": "2009",
            "rating":"7.2",
            "genres": ["Комедия", "Фэнтези", "Фантастика"]
        },
        {
            "name": "Гриффины",
            "image": "https://image.tmdb.org/t/p/w500//seS4Uv5EvezwCS4aVfiBcvB4q4y.jpg",
            "link": "/card/cartoons/500-77/Griffiny.html",
            "year": "1999",
            "rating":"7.4",
            "isTV": true,
            "genres": ["Мультфильм", "Комедия"]
        },
        {
            "name": "Пришельцы в доме",
            "image": "https://image.tmdb.org/t/p/w500//baugoi8UiAMReW62C3Mx5fk7PSP.jpg",
            "link": "/card/cartoons/500-39/Prishelcy-v-dome.html",
            "year": "2018",
            "rating":"6.4",
            "genres": ["Семейный"]
        },
        {
            "name": "Король Лев 3: Акуна Матата",
            "image": "https://image.tmdb.org/t/p/w500//wIIVzCF9TPeXG79FBdr6z1Fxbbl.jpg",
            "link": "/card/cartoons/500-152/Korol-Lev-3-Akuna-Matata.html",
            "year": "2004",
            "rating":"6.6",
            "genres": ["Семейный", "Комедия", "Боевик"]
        },
        {
            "name": "Король Лев 2: Гордость Симбы",
            "image": "https://image.tmdb.org/t/p/w500//1Q0juLckjyydMglTpsokxL3lafF.jpg",
            "link": "/card/cartoons/500-153/Korol-Lev-2-Gordost-Simby.html",
            "year": "1998",
            "rating":"6.9",
            "genres": ["Семейный", "Приключения", "Боевик"]
        },
        {
            "name": "Король Лев",
            "image": "https://image.tmdb.org/t/p/w500//j8tdiuhbF9p5mnAeA1YOUvz82xY.jpg",
            "link": "/card/cartoons/500-40/Korol-Lev.html",
            "year": "1994",
            "rating":"8.3",
            "genres": ["Семейный", "Мультфильм", "Драма"]
        },
        {
            "name": "Тимон и Пумба",
            "image": "https://image.tmdb.org/t/p/w500//uOFvLi1bWiiU3G1HSmUXdDIZKpS.jpg",
            "link": "/card/cartoons/500-154/Timon-i-Pumba.html",
            "year": "1995",
            "rating":"7.2",
            "isTV": true,
            "genres": ["Комедия", "Детский", "Семейный"]
        },
        {
            "name": "Кокоша – маленький дракон",
            "image": "https://image.tmdb.org/t/p/w500//whaEzMfeeegBeD6URtATboFmNwf.jpg",
            "link": "/card/cartoons/500-41/Kokosha–malenkij-drakon.html",
            "year": "2014",
            "rating":"5.2",
            "genres": ["Мультфильм", "Семейный"]
        },
        {
            "name": "Риверданс: Волшебное приключение",
            "image": "https://image.tmdb.org/t/p/w500//i6TRDlVuuEXMyLSlIkDd8YhBN0r.jpg",
            "link": "/card/cartoons/500-42/Riverdans-Volshebnoe-priklyuchenie.html",
            "year": "2021",
            "rating":"6.0",
            "genres": ["Фэнтези", "Музыка", "Приключения"]
        },
        {
            "name": "Тайная жизнь домашних животных 2",
            "image": "https://image.tmdb.org/t/p/w500//8k4heBxuvX8ec2B7vAuhe2L9DaW.jpg",
            "link": "/card/cartoons/500-155/Tajnaya-zhizn-domashnih-zhivotnyh-2.html",
            "year": "2019",
            "rating":"7.0",
            "genres": ["Приключения", "Комедия", "Семейный"]
        },
        {
            "name": "Тайная жизнь домашних животных",
            "image": "https://image.tmdb.org/t/p/w500//qmfuTRM3vQkXty85zqY7xfdQQjQ.jpg",
            "link": "/card/cartoons/500-43/Tajnaya-zhizn-domashnih-zhivotnyh.html",
            "year": "2016",
            "rating":"6.3",
            "genres": ["Приключения", "Комедия", "Семейный"]
        },
        {
            "name": "Южный Парк: Конец ожирения",
            "image": "https://image.tmdb.org/t/p/w500//uvmz9QExwxBCrhKkFah0slqMmmi.jpg",
            "link": "/card/cartoons/500-156/Yuzhnyj-Park-Konec-ozhireniya.html",
            "year": "2024",
            "rating":"7.5",
            "genres": ["Мультфильм", "Комедия"]
        },
        {
            "name": "Южный Парк: Не предназначено для просмотра детьми",
            "image": "https://image.tmdb.org/t/p/w500//kN5H9EhUqDWBAsbnbt2XNhS7BFe.jpg",
            "link": "/card/cartoons/500-157/Yuzhnyj-Park-Ne-prednaznacheno-dlya-prosmotra-detmi.html",
            "year": "2023",
            "rating":"7.5",
            "genres": ["Мультфильм", "Комедия"]
        },
        {
            "name": "Южный Парк: Присоединение к Пандервселенной",
            "image": "https://image.tmdb.org/t/p/w500//18IsRVfs5MkkTcqTGlUAnka6sCh.jpg",
            "link": "/card/cartoons/500-158/Yuzhnyj-Park-Prisoedinenie-k-Pandervselennoj.html",
            "year": "2023",
            "rating":"7.7",
            "genres": ["Мультфильм", "Комедия", "Фантастика"]
        },
        {
            "name": "Южный Парк: Потоковые Войны Часть 2",
            "image": "https://image.tmdb.org/t/p/w500//cqWXH5rYHTD32I5RY6pHR828BrO.jpg",
            "link": "/card/cartoons/500-159/Yuzhnyj-Park-Potokovye-Vojny-Chast-2.html",
            "year": "2022",
            "rating":"7.1",
            "genres": ["Мультфильм", "Комедия"]
        },
        {
            "name": "Южный Парк: Потоковые Войны",
            "image": "https://image.tmdb.org/t/p/w500//dfgZJlKYg5xm6dBl05bOKhfunXb.jpg",
            "link": "/card/cartoons/500-160/Yuzhnyj-Park-Potokovye-Vojny.html",
            "year": "2022",
            "rating":"7.2",
            "genres": ["Мультфильм", "Комедия"]
        },
        {
            "name": "Южный Парк: пост-ковидный: возвращение ковида",
            "image": "https://image.tmdb.org/t/p/w500//vkONqd4gcYXqboYYqlaFFEYzRE3.jpg",
            "link": "/card/cartoons/500-161/Yuzhnyj-Park-post-kovidnyj-vozvrashenie-kovida.html",
            "year": "2021",
            "rating":"7.4",
            "genres": ["Мультфильм", "Комедия"]
        },
        {
            "name": "Южный Парк: пост-ковидный",
            "image": "https://image.tmdb.org/t/p/w500//slwTmP4737sJV1hYMYezMoYCjYa.jpg",
            "link": "/card/cartoons/500-162/Yuzhnyj-Park-post-kovidnyj.html",
            "year": "2021",
            "rating":"7.2",
            "genres": ["Мультфильм", "Комедия"]
        },
        {
            "name": "Южный Парк: Воображляндия",
            "image": "https://image.tmdb.org/t/p/w500//eENI0WN2AAuQWfPmQupzMD6G4gV.jpg",
            "link": "/card/cartoons/500-163/Yuzhnyj-Park-Voobrazhlyandiya.html",
            "year": "2008",
            "rating":"7.9",
            "genres": ["Комедия", "Фэнтези", "Приключения"]
        },
        {
            "name": "Южный Парк: Большой, длинный и необрезанный",
            "image": "https://image.tmdb.org/t/p/original/tS0PedvA2mFO9VCHYwQpaU1K36U.jpg",
            "link": "/card/cartoons/500-164/Yuzhnyj-Park-Bolshoj-dlinnyj-i-neobrezannyj.html",
            "year": "1999",
            "rating":"7.3",
            "genres": ["Мультфильм", "Комедия"]
        },
        {
            "name": "Южный Парк",
            "image": "https://image.tmdb.org/t/p/w500//nfttp2lquST92j4ItAYdmtdoj5t.jpg",
            "link": "/card/cartoons/500-76/Yuzhnyj-Park.html",
            "year": "1997",
            "rating":"8.4",
            "isTV": true,
            "genres": ["Мультфильм", "Комедия"]
        },
        {
            "name": "Элементарно",
            "image": "https://image.tmdb.org/t/p/w500//88xo5uF03kEgFWXRQJerXRdONBE.jpg",
            "link": "/card/cartoons/500-44/Elementarno.html",
            "year": "2023",
            "rating":"7.6",
            "genres": ["Комедия", "Семейный", "Фэнтези", "Мелодрама"]
        },
        {
            "name": "Холодное сердце 2",
            "image": "https://image.tmdb.org/t/p/w500//4NIQcsmtyBOoJKI3c1Rg5sFFaUj.jpg",
            "link": "/card/cartoons/500-165/Holodnoe-serdce-2.html",
            "year": "2019",
            "rating":"7.3",
            "genres": ["Приключения", "Комедия", "Фэнтези"]
        },
        {
            "name": "Холодное сердце",
            "image": "https://image.tmdb.org/t/p/w500//5LYjyQT4IP7oM5ibawHXyDzT2Pp.jpg",
            "link": "/card/cartoons/500-45/Holodnoe-serdce.html",
            "year": "2013",
            "rating":"7.2",
            "genres": ["Семейный", "Приключения", "Фэнтези"]
        },
        {
            "name": "Тайна Коко",
            "image": "https://image.tmdb.org/t/p/w500//jvYsGaUqN8ymH696kRfVJjJ3GIl.jpg",
            "link": "/card/cartoons/500-46/Tajna-Koko.html",
            "year": "2017",
            "rating":"8.2",
            "genres": ["Семейный", "Музыка", "Приключения"]
        },
        {
            "name": "Шрэк Навсегда",
            "image": "https://image.tmdb.org/t/p/w500//6n740zxR80xTNCHK3Uo3Mzj5CED.jpg",
            "link": "/card/cartoons/500-166/Shrek-Navsegda.html",
            "year": "2010",
            "rating":"6.4",
            "genres": ["Комедия", "Приключения", "Фэнтези"]
        },
        {
            "name": "Шрэк 3",
            "image": "https://image.tmdb.org/t/p/w500//o2uojIx8bgL7Bxs4PGXbKStMz2o.jpg",
            "link": "/card/cartoons/500-167/Shrek-3.html",
            "year": "2007",
            "rating":"6.3",
            "genres": ["Семейный", "Приключения", "Комедия"]
        },
        {
            "name": "Шрэк 2",
            "image": "https://image.tmdb.org/t/p/w500//vALSn7rJEuX742gWKcmCVLquw5J.jpg",
            "link": "/card/cartoons/500-168/Shrek-2.html",
            "year": "2004",
            "rating":"7.3",
            "genres": ["Комедия", "Фэнтези", "Приключения"]
        },
        {
            "name": "Шрэк",
            "image": "https://image.tmdb.org/t/p/w500//5OPCH713UIEeWuvRZpVkkzrZ3Hd.jpg",
            "link": "/card/cartoons/500-47/Shrek.html",
            "year": "2001",
            "rating":"7.7",
            "genres": ["Комедия", "Фэнтези", "Приключения"]
        },
        {
            "name": "Симпсоны в кино",
            "image": "https://image.tmdb.org/t/p/w500//51mnJmefPpRYNgQ9j1G13Rcar6J.jpg",
            "link": "/card/cartoons/500-169/Simpsony-v-kino.html",
            "year": "2007",
            "rating":"7.0",
            "genres": ["Мультфильм", "Комедия", "Семейный"]
        },
        {
            "name": "Симпсоны",
            "image": "https://image.tmdb.org/t/p/w500//171yRAHGCziNjtO53sEil1PH64v.jpg",
            "link": "/card/cartoons/500-75/Simpsony.html",
            "year": "1989",
            "rating":"8.0",
            "isTV": true,
            "genres": ["Семейный", "Мультфильм", "Комедия"]
        },
        {
            "name": "Райя и последний дракон",
            "image": "https://image.tmdb.org/t/p/w500//c8srjTN6PXUxeqmVI0T2ffK3iwC.jpg",
            "link": "/card/cartoons/500-48/Rajya-i-poslednij-drakon.html",
            "year": "2021",
            "rating":"7.8",
            "genres": ["Фэнтези", "Боевик", "Приключения"]
        },
        {
            "name": "Крутые бобры",
            "image": "https://image.tmdb.org/t/p/w500//9KYUA9tZrVNVXk2LTaYNMqGpHUj.jpg",
            "link": "/card/cartoons/500-49/Krutye-bobry.html",
            "year": "1997",
            "rating":"6.9",
            "isTV": true,
            "genres": ["Комедия", "Детский", "Семейный"]
        },
        {
            "name": "Головоломка 2",
            "image": "https://image.tmdb.org/t/p/w500//5fXrqBIvatwSuph7nTuSETBQYxm.jpg",
            "link": "/card/cartoons/500-170/Golovolomka-2.html",
            "year": "2024",
            "rating":"7.6",
            "genres": ["Приключения", "Комедия", "Семейный"]
        },
        {
            "name": "Головоломка",
            "image": "https://image.tmdb.org/t/p/w500//8wukxopBFO2Vrf50jlLpbrfj4OB.jpg",
            "link": "/card/cartoons/500-50/Golovolomka.html",
            "year": "2015",
            "rating":"7.9",
            "genres": ["Приключения", "Драма", "Комедия"]
        },
        {
            "name": "Монстры на каникулах: Трансформания",
            "image": "https://image.tmdb.org/t/p/w500//AlNkzripIDbRfP0ipKFDYXJa1e0.jpg",
            "link": "/card/cartoons/500-171/Monstry-na-kanikulah-Transformaniya.html",
            "year": "2022",
            "rating":"7.1",
            "genres": ["Комедия", "Приключения", "Фэнтези"]
        },
        {
            "name": "Монстры на каникулах 3: Море зовёт",
            "image": "https://image.tmdb.org/t/p/w500//p4on3LYdFXgMefXLpUlIyNoEb4P.jpg",
            "link": "/card/cartoons/500-172/Monstry-na-kanikulah-3-More-zovyot.html",
            "year": "2018",
            "rating":"6.9",
            "genres": ["Комедия", "Семейный", "Фэнтези"]
        },
        {
            "name": "Монстры на каникулах 2",
            "image": "https://image.tmdb.org/t/p/w500//75lGCEnBRD26y2fZq45k4tgwWTQ.jpg",
            "link": "/card/cartoons/500-173/Monstry-na-kanikulah-2.html",
            "year": "2015",
            "rating":"6.8",
            "genres": ["Комедия", "Семейный", "Фэнтези"]
        },
        {
            "name": "Монстры на каникулах",
            "image": "https://image.tmdb.org/t/p/w500//dLrppCn6TF99oObWrnU87Y7CMyX.jpg",
            "link": "/card/cartoons/500-51/Monstry-na-kanikulah.html",
            "year": "2012",
            "rating":"7.0",
            "genres": ["Комедия", "Семейный", "Фэнтези"]
        },
        {
            "name": "Зверопой 2",
            "image": "https://image.tmdb.org/t/p/w500//cYWc9bCi2gprrXnIMa4MqXUTpNu.jpg",
            "link": "/card/cartoons/500-174/Zveropoj-2.html",
            "year": "2021",
            "rating":"7.8",
            "genres": ["Семейный", "Музыка", "Комедия"]
        },
        {
            "name": "Зверопой",
            "image": "https://image.tmdb.org/t/p/w500//vlXBtiqwNrcheDh4TB5kHTRnlUY.jpg",
            "link": "/card/cartoons/500-175/Zveropoj.html",
            "year": "2016",
            "rating":"7.1",
            "genres": ["Семейный", "Музыка", "Комедия"]
        },
        {
            "name": "Зверополис+",
            "image": "https://image.tmdb.org/t/p/w500//inzPPPr2BsE92m4rHhQn3sf2yPk.jpg",
            "link": "/card/cartoons/500-176/Zveropolis-2022.html",
            "year": "2022",
            "rating":"7.2",
            "isTV": true,
            "genres": ["Мультфильм", "Семейный", "Приключения"]
        },
        {
            "name": "Зверополис",
            "image": "https://image.tmdb.org/t/p/w500//qNZT8HwPWFv8Dc5rEE0O3FFODha.jpg",
            "link": "/card/cartoons/500-52/Zveropolis.html",
            "year": "2016",
            "rating":"7.7",
            "genres": ["Приключения", "Семейный", "Комедия"]
        },
        {
            "name": "Как приручить бизона",
            "image": "https://image.tmdb.org/t/p/w500//r9BeqSkZdGuvFGQ7BoIPSbMAihh.jpg",
            "link": "/card/cartoons/500-177/Kak-priruchit-bizona.html",
            "year": "2024",
            "rating":"6.8",
            "genres": ["Приключения", "Семейный", "Комедия"]
        },
        {
            "name": "Паранорман, или Как приручить зомби",
            "image": "https://image.tmdb.org/t/p/w500//yDbJ3Ui5jrCjDqI3bJfccjJU3fm.jpg",
            "link": "/card/cartoons/500-53/Paranorman,-ili-Kak-priruchit-zombi.html",
            "year": "2012",
            "rating":"7.0",
            "genres": ["Приключения", "Семейный", "Комедия"]
        },
        {
            "name": "Дикий робот",
            "image": "https://image.tmdb.org/t/p/w500//sDTumQBxhIyYbZ9acsTtoLfb5ZG.jpg",
            "link": "/card/cartoons/500-54/Dikij-robot.html",
            "year": "2024",
            "rating":"8.3",
            "genres": ["Мультфильм", "Фантастика", "Семейный"]
        },
        {
            "name": "Как приручить дракона 3",
            "image": "https://image.tmdb.org/t/p/w500//AdIhqttutOdkKUttw8ofld870Dx.jpg",
            "link": "/card/cartoons/500-178/Kak-priruchit-drakona-3.html",
            "year": "2019",
            "rating":"7.7",
            "genres": ["Мультфильм", "Семейный", "Приключения"]
        },
        {
            "name": "Как приручить дракона 2",
            "image": "https://image.tmdb.org/t/p/w500//1o0MBGNfvL0doZR7kWJdqVBXs7r.jpg",
            "link": "/card/cartoons/500-179/Kak-priruchit-drakona-2.html",
            "year": "2014",
            "rating":"7.7",
            "genres": ["Мультфильм", "Приключения", "Комедия"]
        },
        {
            "name": "Как приручить дракона",
            "image": "https://image.tmdb.org/t/p/w500//cMUmeDM2QRlSOAK9onB8PhXtdZJ.jpg",
            "link": "/card/cartoons/500-55/Kak-priruchit-drakona.html",
            "year": "2010",
            "rating":"7.8",
            "genres": ["Фэнтези", "Приключения", "Семейный"]
        },
        {
            "name": "Суперсемейка 2",
            "image": "https://image.tmdb.org/t/p/w500//vwer36JvbZxeZ6ZRBvzrsUm6tYt.jpg",
            "link": "/card/cartoons/500-180/Supersemejka-2.html",
            "year": "2018",
            "rating":"7.5",
            "genres": ["Боевик", "Приключения", "Семейный"]
        },
        {
            "name": "Суперсемейка",
            "image": "https://image.tmdb.org/t/p/w500//nVJGGWCs8CQ41G4fzJoTttfCgpQ.jpg",
            "link": "/card/cartoons/500-56/Supersemejka.html",
            "year": "2004",
            "rating":"7.7",
            "genres": ["Боевик", "Приключения", "Семейный"]
        },
        {
            "name": "Кот в сапогах 2: Последнее желание",
            "image": "https://image.tmdb.org/t/p/w500//z2gOE3Z4mNLAcw0dQ1BlGoWLrH7.jpg",
            "link": "/card/cartoons/500-57/Kot-v-sapogah-2-Poslednee-zhelanie.html",
            "year": "2022",
            "rating":"8.2",
            "genres": ["Приключения", "Фэнтези", "Комедия"]
        },
        {
            "name": "Кот в сапогах",
            "image": "https://image.tmdb.org/t/p/w500//4iuuvaCYNswlhG5f73JqX976a9d.jpg",
            "link": "/card/cartoons/500-01/Kot-v-sapogah.html",
            "year": "2011",
            "rating":"6.6",
            "genres": ["Семейный", "Фэнтези", "Приключения"]
        },
        {
            "name": "Удача",
            "image": "https://image.tmdb.org/t/p/w500//1tNajPL9FmFbM0msgFF1DMVdpcs.jpg",
            "link": "/card/cartoons/500-58/Udacha.html",
            "year": "2022",
            "rating":"7.8",
            "genres": ["Приключения", "Фэнтези", "Комедия"]
        },
        {
            "name": "Рик и Морти",
            "image": "https://image.tmdb.org/t/p/w500//wdzk1wPGOnO8dCnaQozSpe1oH9l.jpg",
            "link": "/card/cartoons/500-73/Rik-i-Morti.html",
            "year": "2013",
            "rating":"8.7",
            "isTV": true,
            "genres": ["Комедия", "Боевик и Приключения"]
        },
        {
            "name": "Моана 2",
            "image": "https://image.tmdb.org/t/p/w500//wrg0C7sw1T1ogXvS8P4kiawY9xv.jpg",
            "link": "/card/cartoons/500-181/Moana-2.html",
            "year": "2024",
            "rating":"7.1",
            "genres": ["Приключения", "Семейный", "Комедия"]
        },
        {
            "name": "Моана",
            "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jo20xWDab4qDXgq8eiPyQ2dCASC.jpg",
            "link": "/card/cartoons/500-59/Moana.html",
            "year": "2016",
            "rating":"7.6",
            "genres": ["Приключения", "Семейный", "Комедия"]
        },
        {
            "name": "Человек-паук: Паутина вселенных",
            "image": "https://image.tmdb.org/t/p/w500//hsGAxOqbH0UNpIJPMsVRA6dFf85.jpg",
            "link": "/card/cartoons/500-60/Chelovek-pauk-Pautina-vselennyh.html",
            "year": "2023",
            "rating":"8.3",
            "genres": ["Боевик", "Приключения", "Фантастика"]
        },
        {
            "name": "Человек-паук: Через вселенные",
            "image": "https://image.tmdb.org/t/p/w500//wmEKJr81CABBU68Qy2wYPwQHn0L.jpg",
            "link": "/card/cartoons/500-182/Chelovek-pauk-Cherez-vselennye.html",
            "year": "2018",
            "rating":"8.4",
            "genres": ["Боевик", "Приключения", "Фантастика"]
        },
        {
            "name": "Ваш дружелюбный сосед Человек-Паук",
            "image": "https://image.tmdb.org/t/p/w500//4uFWdcZilCMS8cwanp1b2baqFbU.jpg",
            "link": "/card/cartoons/500-183/Vash-druzhelyubnyj-sosed-Chelovek-Pauk.html",
            "year": "2025",
            "rating":"7.8",
            "isTV": true,
            "genres": ["Приключения", "НФ и Фэнтези", "Комедия"]
        },
        {
            "name": "Паучок и его удивительные друзья",
            "image": "https://image.tmdb.org/t/p/w500//etO5jDS5WgR4Y1lTyXhQcilJ6u2.jpg",
            "link": "/card/cartoons/500-184/Pauchok-i-ego-udivitelnye-druzya.html",
            "year": "2021",
            "rating":"7.3",
            "isTV": true,
            "genres": ["Детский", "Мультфильм", "Комедия"]
        },
        {
            "name": "Человек-паук",
            "image": "https://image.tmdb.org/t/p/w500//dKdcyyHUR5WTMnrbPdYN5y9xPVp.jpg",
            "link": "/card/cartoons/500-185/Chelovek-pauk-2017.html",
            "year": "2017",
            "rating":"7.5",
            "isTV": true,
            "genres": ["НФ и Фэнтези", "Комедия", "Семейный"]
        },
        {
            "name": "Великий Человек-паук",
            "image": "https://image.tmdb.org/t/p/w500//usY6rAxW0fGJJDGypFg8UthUqvs.jpg",
            "link": "/card/cartoons/500-186/Velikij-Chelovek-pauk.html",
            "year": "2012",
            "rating":"7.7",
            "isTV": true,
            "genres": ["Детский", "Боевик и Приключения", "Комедия"]
        },
        {
            "name": "Грандиозный Человек-паук",
            "image": "https://image.tmdb.org/t/p/w500//dCNxOhXT7c4lqYuRpdM3m8s9XDp.jpg",
            "link": "/card/cartoons/500-187/Grandioznyj-Chelovek-pauk.html",
            "year": "2008",
            "rating":"8.6",
            "isTV": true,
            "genres": ["Приключения", "Детский", "Семейный"]
        },
        {
            "name": "Человек-паук",
            "image": "https://image.tmdb.org/t/p/w500//v3UfqXCAxAcI7oUO4zwtk1T9G3n.jpg",
            "link": "/card/cartoons/500-188/Chelovek-pauk-2003.html",
            "year": "2003",
            "rating":"7.2",
            "isTV": true,
            "genres": ["Мультфильм", "Приключения", "НФ и Фэнтези"]
        },
        {
            "name": "Непобедимый Спайдермен",
            "image": "https://image.tmdb.org/t/p/w500//vLzRWbu8MHuO2bcEblWEyHr0O7N.jpg",
            "link": "/card/cartoons/500-189/Nepobedimyj-Spajdermen.html",
            "year": "1999",
            "rating":"7.5",
            "isTV": true,
            "genres": ["Приключения", "НФ и Фэнтези", "Детский"]
        },
        {
            "name": "Человек-паук",
            "image": "https://image.tmdb.org/t/p/w500//xEJaSQaNqWUd0JQjKRhMFcc4TuA.jpg",
            "link": "/card/cartoons/500-190/Chelovek-pauk-1994.html",
            "year": "1994",
            "rating":"8.3",
            "isTV": true,
            "genres": ["Мультфильм", "Боевик и Приключения"]
        },
        {
            "name": "Человек-Паук и его удивительные друзья",
            "image": "https://image.tmdb.org/t/p/w500//4b8HFH1arZ4b05RHwxPc2JfueYv.jpg",
            "link": "/card/cartoons/500-191/Chelovek-Pauk-i-ego-udivitelnye-druzya.html",
            "year": "1981",
            "rating":"7.4",
            "isTV": true,
            "genres": ["Приключения", "Мультфильм", "НФ и Фэнтези"]
        },
        {
            "name": "Человек-паук",
            "image": "https://image.tmdb.org/t/p/original/nJomMoPbzmud9Ar0G0wQTWagFaS.jpg",
            "link": "/card/cartoons/500-192/Chelovek-pauk-1981.html",
            "year": "1981",
            "rating":"7.2",
            "isTV": true,
            "genres": ["Детский", "Приключения", "НФ и Фэнтези"]
        },
        {
            "name": "Настоящий Человек-паук",
            "image": "https://image.tmdb.org/t/p/w500//tyvMExqaLlHObRGCuwiNZ24Ns2x.jpg",
            "link": "/card/cartoons/500-193/Nastoyashij-Chelovek-pauk.html",
            "year": "1967",
            "rating":"7.7",
            "isTV": true,
            "genres": ["Детский", "Мультфильм", "Приключения"]
        },
        {
            "name": "Миньоны: Грювитация",
            "image": "https://image.tmdb.org/t/p/w500//mz14SJeXJ3sLMxM2fS7APWklFfX.jpg",
            "link": "/card/cartoons/500-194/Minony-Gryuvitaciya.html",
            "year": "2022",
            "rating":"7.3",
            "genres": ["Комедия", "Семейный", "Приключения"]
        },
        {
            "name": "Миньоны",
            "image": "https://image.tmdb.org/t/p/w500//4JubqgkLoGziLg77xCJATs8c0Ay.jpg",
            "link": "/card/cartoons/500-61/Minony.html",
            "year": "2015",
            "rating":"6.4",
            "genres": ["Мультфильм", "Приключения", "Комедия"]
        },
        {
            "name": "Гадкий я 4",
            "image": "https://image.tmdb.org/t/p/w500//ppSdlmiEmfjsdx9jNHfJ2DQ2IVp.jpg",
            "link": "/card/cartoons/500-195/Gadkij-ya-4.html",
            "year": "2024",
            "rating":"7.1",
            "genres": ["Семейный", "Комедия", "Фантастика"]
        },
        {
            "name": "Гадкий я 3",
            "image": "https://image.tmdb.org/t/p/w500//wlSfRcfo2mkHwegiXCoeiQnQ874.jpg",
            "link": "/card/cartoons/500-196/Gadkij-ya-3.html",
            "year": "2017",
            "rating":"6.5",
            "genres": ["Комедия", "Семейный", "Приключения"]
        },
        {
            "name": "Гадкий я 2",
            "image": "https://image.tmdb.org/t/p/w500//onACDW8RBbHhhuLCasaeK0sLKT0.jpg",
            "link": "/card/cartoons/500-197/Gadkij-ya-2.html",
            "year": "2013",
            "rating":"6.9",
            "genres": ["Мультфильм", "Комедия", "Семейный"]
        },
        {
            "name": "Гадкий я",
            "image": "https://image.tmdb.org/t/p/w500//n1PD367AaU6J2abLmiZrxeuqyb0.jpg",
            "link": "/card/cartoons/500-198/Gadkij-ya.html",
            "year": "2010",
            "rating":"7.2",
            "genres": ["Мультфильм", "Комедия", "Семейный"]
        },
        {
            "name": "Суперпитомцы",
            "image": "https://image.tmdb.org/t/p/w500//75jSDcQtHrcVoSflDolT7PC5v82.jpg",
            "link": "/card/cartoons/500-62/Superpitomcy.html",
            "year": "2022",
            "rating":"7.2",
            "genres": ["Боевик", "Семейный", "Комедия", "Фантастика"]
        },
        {
            "name": "Хранители снов",
            "image": "https://image.tmdb.org/t/p/w500//338JxTywTCKqel7RsGgMIqmYooJ.jpg",
            "link": "/card/cartoons/500-63/Hraniteli-snov.html",
            "year": "2012",
            "rating":"7.4",
            "genres": ["Мультфильм", "Семейный", "Фэнтези"]
        },
        {
            "name": "Angry Birds: Летнее безумие",
            "image": "https://image.tmdb.org/t/p/w500//6ko4jfA5BrcRADDaAfMagZ4ZGpG.jpg",
            "link": "/card/cartoons/500-199/Angry-Birds-Letnee-bezumie.html",
            "year": "2022",
            "rating":"7.2",
            "isTV": true,
            "genres": ["Приключения", "НФ и Фэнтези", "Комедия"]
        },
        {
            "name": "Angry Birds в кино 2",
            "image": "https://image.tmdb.org/t/p/w500//6lKxPyArJPJxveyKjp6ihQKH3Ge.jpg",
            "link": "/card/cartoons/500-64/Angry-Birds-v-kino-2.html",
            "year": "2019",
            "rating":"7.1",
            "genres": ["Боевик", "Фэнтези", "Приключения", "Комедия"]
        },
        {
            "name": "Angry Birds в кино",
            "image": "https://image.tmdb.org/t/p/w500//rRBnDVllqsYG3F0A8Qc75wMiw5I.jpg",
            "link": "/card/cartoons/500-200/Angry-Birds-v-kino.html",
            "year": "2016",
            "rating":"6.2",
            "genres": ["Приключения", "Семейный", "Комедия"]
        },
        {
            "name": "Angry Birds. Сердитые птички",
            "image": "https://image.tmdb.org/t/p/w500//eIte8WWTWszppxtv2MQIqZSOWM1.jpg",
            "link": "/card/cartoons/500-201/Angry-Birds-Serditye-ptichki.html",
            "year": "2013",
            "rating":"6.1",
            "isTV": true,
            "genres": ["Приключения", "НФ и Фэнтези", "Комедия"]
        },
        {
            "name": "Кунг-фу Панда 4",
            "image": "https://image.tmdb.org/t/p/w500//7RK9GHFArnQusZERwYwIaMZwRll.jpg",
            "link": "/card/cartoons/500-65/Kung-fu-Panda-4.html",
            "year": "2024",
            "rating":"7.1",
            "genres": ["Боевик", "Комедия", "Приключения"]
        },
        {
            "name": "Кунг-фу Панда 3",
            "image": "https://image.tmdb.org/t/p/w500//2YSydZMbCSMMdtCEEYVfJsDrQyc.jpg",
            "link": "/card/cartoons/500-202/Kung-fu-Panda-3.html",
            "year": "2016",
            "rating":"6.9",
            "genres": ["Приключения", "Семейный", "Комедия"]
        },
        {
            "name": "Кунг-фу Панда 2",
            "image": "https://image.tmdb.org/t/p/w500//7DOB9aaa6PpCclaLRlMBTR34Ti.jpg",
            "link": "/card/cartoons/500-203/Kung-fu-Panda-2.html",
            "year": "2011",
            "rating":"7.0",
            "genres": ["Мультфильм", "Семейный", "Комедия"]
        },
        {
            "name": "Кунг-фу Панда: Захватывающие легенды",
            "image": "https://image.tmdb.org/t/p/w500//rkq5Jt7boR5v65bDbELHz3DW7sv.jpg",
            "link": "/card/cartoons/500-204/Kung-fu-Panda-Zahvatyvayushie-legendy.html",
            "year": "2011",
            "rating":"7.4",
            "isTV": true,
            "genres": ["Приключения", "Комедия", "НФ и Фэнтези"]
        },
        {
            "name": "Кунг-фу Панда",
            "image": "https://image.tmdb.org/t/p/w500//3EQ7y1wVCPsCnlB3PGee618SdIc.jpg",
            "link": "/card/cartoons/500-205/Kung-fu-Panda.html",
            "year": "2008",
            "rating":"7.0",
            "genres": ["Приключения", "Семейный", "Комедия"]
        },
        {
            "name": "Душа",
            "image": "https://image.tmdb.org/t/p/w500//jZkksyMZdTYw7fIVKyA95nFEPnt.jpg",
            "link": "/card/cartoons/500-66/Dusha.html",
            "year": "2020",
            "rating":"8.1",
            "genres": ["Семейный", "Комедия", "Фэнтези"]
        },
        {
            "name": "Эверест",
            "image": "https://image.tmdb.org/t/p/w500//2tHCLXq7BbH2i9YjLNDMvohxpj3.jpg",
            "link": "/card/cartoons/500-67/Everest.html",
            "year": "2019",
            "rating":"7.5",
            "genres": ["Мультфильм", "Приключения", "Комедия"]
        },
        {
            "name": "Дневник слабака: Рождественская лихорадка",
            "image": "https://image.tmdb.org/t/p/w500//tcVlrSIeafV8uWJMt4Aqwp1NCx2.jpg",
            "link": "/card/cartoons/500-206/Dnevnik-slabaka-Rozhdestvenskaya-lihoradka.html",
            "year": "2023",
            "rating":"6.6",
            "genres": ["Мультфильм", "Комедия", "Семейный"]
        },
        {
            "name": "Дневник слабака: Правила Родрика",
            "image": "https://image.tmdb.org/t/p/w500//uzhA8ZkrVlNVeysfmvITMYR2MlM.jpg",
            "link": "/card/cartoons/500-207/Dnevnik-slabaka-Pravila-Rodrika.html",
            "year": "2022",
            "rating":"6.8",
            "genres": ["Мультфильм", "Комедия", "Семейный"]
        },
        {
            "name": "Дневник слабака",
            "image": "https://image.tmdb.org/t/p/w500//OR5miI8pm2Shmeoha0zHk97ceK.jpg",
            "link": "/card/cartoons/500-68/Dnevnik-slabaka.html",
            "year": "2021",
            "rating":"6.2",
            "genres": ["Мультфильм", "Комедия", "Семейный"]
        },
        {
            "name": "Время приключений: Фионна и Кейк",
            "image": "https://image.tmdb.org/t/p/w500//eDqwpPj3H6iSwyqWVEA7c2CZzS9.jpg",
            "link": "/card/cartoons/500-208/Vremya-priklyuchenij-Fionna-i-Kejk.html",
            "year": "2023",
            "rating":"8.8",
            "isTV": true,
            "genres": ["НФ и Фэнтези", "Приключения", "Комедия"]
        },
        {
            "name": "Время приключений: Далёкие земли",
            "image": "https://image.tmdb.org/t/p/original/k3E4RXC0CcWznXjlTBz01SQ2r6z.jpg",
            "link": "/card/cartoons/500-209/Vremya-priklyuchenij-Dalyokie-zemli.html",
            "year": "2020",
            "rating":"8.1",
            "isTV": true,
            "genres": ["НФ и Фэнтези", "Приключения", "Комедия"]
        },
        {
            "name": "Время приключений",
            "image": "https://image.tmdb.org/t/p/w500//kMXB29thNci4oHVbH2bP18XSIav.jpg",
            "link": "/card/cartoons/500-74/Vremya-priklyuchenij.html",
            "year": "2010",
            "rating":"8.5",
            "isTV": true,
            "genres": ["Мультфильм", "Комедия", "НФ и Фэнтези"]
        },
        {
            "name": "Не бей копытом",
            "image": "https://image.tmdb.org/t/p/w500//3YteNf7HJvJT9IRxpiISoyvRoRR.jpg",
            "link": "/card/cartoons/500-69/Ne-bej-kopytom.html",
            "year": "2004",
            "rating":"6.1",
            "genres": ["Мультфильм", "Семейный"]
        },
        {
            "name": "Большое путешествие",
            "image": "https://image.tmdb.org/t/p/w500//82cjRTHAsrNBRWfMJ8VzrvXcYfX.jpg",
            "link": "/card/cartoons/500-70/Bolshoe-puteshestvie.html",
            "year": "2006",
            "rating":"5.5",
            "genres": ["Мультфильм", "Семейный"]
        },
        {
            "name": "Лерой и Стич",
            "image": "https://image.tmdb.org/t/p/w500//mVXTQVYBSdhGuNWzpbF9ULt62jH.jpg",
            "link": "/card/cartoons/500-71/Leroj-i-Stich.html",
            "year": "2006",
            "rating":"6.6",
            "genres": ["Мультфильм", "Комедия", "Семейный"]
        },
        {
            "name": "Лило и Стич 2: Большая Проблема Стича",
            "image": "https://image.tmdb.org/t/p/w500//iXI3yci0L32ItDicRH3AUyuKsGp.jpg",
            "link": "/card/cartoons/500-210/Lilo-i-Stich-2-Bolshaya-Problema-Sticha.html",
            "year": "2005",
            "rating":"6.7",
            "genres": ["Семейный", "Комедия", "Фантастика"]
        },
        {
            "name": "Новые Приключения Стича",
            "image": "https://image.tmdb.org/t/p/w500//7DloQFBMZzH1r355T52GP4iye5Y.jpg",
            "link": "/card/cartoons/500-211/Novye-Priklyucheniya-Sticha.html",
            "year": "2003",
            "rating":"6.4",
            "genres": ["Приключения", "Мультфильм", "Фантастика"]
        },
        {
            "name": "Лило и Стич",
            "image": "https://image.tmdb.org/t/p/w500//srUqap7vwsQDycwikiw3MxpuvUx.jpg",
            "link": "/card/cartoons/500-212/Lilo-i-Stich.html",
            "year": "2003",
            "rating":"7.4",
            "isTV": true,
            "genres": ["Комедия", "Приключения", "НФ и Фэнтези"]
        },
        {
            "name": "Лило и Стич",
            "image": "https://image.tmdb.org/t/p/w500//6YhJyjmkGiP34uVa56ZkfSs8UXm.jpg",
            "link": "/card/cartoons/500-213/Lilo-i-Stich-2002.html",
            "year": "2002",
            "rating":"7.5",
            "genres": ["Мультфильм", "Семейный", "Комедия"]
        },
        {
            "name": "Базз Лайтер",
            "image": "https://image.tmdb.org/t/p/w500//DQU4vUTMoAlUGJIC5hNfHPVELz.jpg",
            "link": "/card/cartoons/500-72/Bazz-Lajter.html",
            "year": "2022",
            "rating":"6.9",
            "genres": ["Фантастика", "Семейный", "Приключения"]
        },
        {
            "name": "Приключения Базза Лайтера из Звёздной Команды",
            "image": "https://image.tmdb.org/t/p/w500//4uFvEU2NMx4p4U2vEvsuC0kLcUF.jpg",
            "link": "/card/cartoons/500-214/Priklyucheniya-Bazza-Lajtera-iz-Zvyozdnoj-Komandy.html",
            "year": "2000",
            "rating":"6.5",
            "isTV": true,
            "genres": ["Детский", "НФ и Фэнтези", "Комедия"]
        },
       
        
       
    
        // конец
       
        
    ];

    var cardContainer = $('#card-container');
    if (!cardContainer.length) {
        console.error("#card-container не найден!"); // Оставляем эту полезную ошибку
        return;
    }
    cardContainer.html("");

    // Извлечение информации о текущем фильме
    let currentMovieTitle = '';
    let currentMovieYear = '';
    let currentMovieGenres = [];
    let currentBaseTitle = '';

    // Ваша логика извлечения данных о текущем фильме
    if (currentMovieTitleElement) {
        currentMovieTitle = currentMovieTitleElement.textContent.split('(')[0].trim();
        currentBaseTitle = getBaseTitle(currentMovieTitle);
    }
    if (currentMovieYearElement) {
        currentMovieYear = currentMovieYearElement.textContent;
    }
    if (currentMovieGenresElement) {
        let fullGenreText = currentMovieGenresElement.textContent;
        let genreStartIndex = fullGenreText.indexOf('●') + 1;
        let extractedGenres = fullGenreText.substring(genreStartIndex).trim();
        currentMovieGenres = extractedGenres.split('|').map(genre => genre.trim());
    }

    // Вспомогательные функции, основанные на вашем примере
    const isCurrentMovie = (card) => {
        // Убедимся, что сравниваем по названию и году, так как ссылка может быть разной
        return getBaseTitle(card.name) === currentBaseTitle && card.year === currentMovieYear;
    };

    const doesTitleMatch = (card) => {
        const cardBaseTitle = getBaseTitle(card.name);
        // Используем вашу логику includes для гибкого соответствия франшизам
        return cardBaseTitle.includes(currentBaseTitle) || currentBaseTitle.includes(cardBaseTitle);
    };

    const getMatchingGenresCount = (cardGenres) => {
        if (!Array.isArray(cardGenres)) return 0;
        // Убедимся, что currentMovieGenres определён
        if (!currentMovieGenres || currentMovieGenres.length === 0) return 0;
        return currentMovieGenres.filter(genre => cardGenres.includes(genre)).length;
    };

    var cardsToDisplay = [];
    var addedCards = new Set(); // Используем Set для быстрого поиска уже добавленных карточек

    const MAX_CARDS = 15;

    // --- Этап 0: Добавляем текущий фильм в addedCards, чтобы он не рекомендовался самому себе ---
    // Это важно сделать в первую очередь, чтобы он не попал ни в одну из следующих категорий.
    if (currentMovieTitle && currentMovieYear) {
        addedCards.add(`${currentMovieTitle}-${currentMovieYear}`);
    }


    // --- Этап 1: Карточки со схожим названием (франшизы) ---
    // Находим все потенциальные франшизные фильмы, исключая текущий и уже добавленные.
    const matchingTitleCards = shuffleArray(localCardData.filter(card => 
        !isCurrentMovie(card) && doesTitleMatch(card) && !addedCards.has(`${card.name}-${card.year}`)
    ));
    
    matchingTitleCards.forEach(card => {
        if (cardsToDisplay.length < MAX_CARDS) {
            cardsToDisplay.push(card);
            addedCards.add(`${card.name}-${card.year}`); // Добавляем в Set, чтобы не дублировать
        }
    });

    // --- Этап 2: Карточки с похожими жанрами (по убыванию количества совпадений) ---
    // Этот этап выполняется только если currentMovieGenres определен и есть свободные места.
    if (currentMovieGenres.length > 0 && cardsToDisplay.length < MAX_CARDS) {
        const specificGenreWeights = {
            'ужасы': 5.0,
            'фэнтези': 4.5,
            'научная фантастика': 4.2, 
            'вестерн': 5.0,
            'мультфильм': 5.0, 
            'документальный': 5.0, 
            'мюзикл': 4.0, 
            'триллер': 2.5,
            'детектив': 3.8, 
            'боевик': 1.8, 
            'комедия': 2.2, 
            'драма': 0.5,
            'мелодрама': 5.0, 
            'приключения': 2.5, 
            'криминал': 2.0, 
            'история': 3.5,
            'романтика': 2.0, 
            'семейный': 5.0, 
            'музыка': 4.0, 
            'военный': 2.8,
            'Боевик и Приключения': 4.0,
            'Война и Политика': 4.2,
            'Детский': 4.5,
            'фантастика': 4.5
        };
        const MIN_GENRE_SCORE_THRESHOLD = 1.0;
        const NON_MATCHING_GENRE_PENALTY_MULTIPLIER = 0.5;

        const genreRelevantCandidates = [];
        const currentGenresLower = new Set(currentMovieGenres.map(g => g.toLowerCase()));

        // Проходим по всем карточкам, которые еще не были добавлены
        const remainingForGenreCheck = localCardData.filter(card => !addedCards.has(`${card.name}-${card.year}`));

        for (const card of remainingForGenreCheck) {
            let genreMatchScore = 0;
            let nonMatchingGenrePenalty = 0;

            for (const localGenre of card.genres) {
                const lowerLocalGenre = localGenre.toLowerCase();
                if (currentGenresLower.has(lowerLocalGenre)) {
                    genreMatchScore += (specificGenreWeights[lowerLocalGenre] || 1);
                } else {
                    if (specificGenreWeights[lowerLocalGenre] && specificGenreWeights[lowerLocalGenre] > 1.5) {
                        nonMatchingGenrePenalty += specificGenreWeights[lowerLocalGenre] * NON_MATCHING_GENRE_PENALTY_MULTIPLIER;
                    }
                }
            }
            
            genreMatchScore -= nonMatchingGenrePenalty;

            if (genreMatchScore > MIN_GENRE_SCORE_THRESHOLD) {
                genreRelevantCandidates.push({ card: card, score: genreMatchScore });
            }
        }

        shuffleArray(genreRelevantCandidates); // Перемешиваем перед сортировкой
        genreRelevantCandidates.sort((a, b) => b.score - a.score);

        for (const item of genreRelevantCandidates) {
            if (cardsToDisplay.length < MAX_CARDS) {
                cardsToDisplay.push(item.card);
                addedCards.add(`${item.card.name}-${item.card.year}`);
            } else {
                break;
            }
        }
    }

    // --- Этап 3: Добавляем случайные карточки, если не набрали MAX_CARDS ---
    if (cardsToDisplay.length < MAX_CARDS) {
        const remainingCards = shuffleArray(localCardData.filter(card => 
            !addedCards.has(`${card.name}-${card.year}`)
        ));
        
        for (const card of remainingCards) {
            if (cardsToDisplay.length < MAX_CARDS) {
                cardsToDisplay.push(card);
                addedCards.add(`${card.name}-${card.year}`); // Добавляем в Set, чтобы не дублировать
            } else {
                break;
            }
        }
    }

    displayCards(cardsToDisplay.slice(0, MAX_CARDS), cardContainer);

    // Инициализация Splide
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
    container.empty();
    cards.forEach(function (val) {
        if (count >= 15) return;
        var cardHTML = `
            <li class="splide__slide">
                <div class="card card-media" style="width: 12rem" data-rating="${val.rating}">
                    <a href="${val.link}">
                        <img src="${val.image}" class="card-img-top img-9x16 mt-2" alt="${val.name}">
                        <div class="card-rating-trand">
                            <span class="span-rating">${val.rating}</span>
                        </div>
                        ${val.isTV ? '<div class="card-TV card-TV-trends">TV</div>' : ''}
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
            const imageRect = image.getBoundingClientRect();
            const cardRect = card.getBoundingClientRect();

            // Расчет смещения от нижнего правого угла изображения к нижнему правому углу карточки
            const bottom = cardRect.bottom - imageRect.bottom + 8; // 8px отступ
            const right = cardRect.right - imageRect.right + 8; // 8px отступ

            rating.style.position = 'absolute';
            rating.style.bottom = bottom + 'px';
            rating.style.right = right + 'px';
        }
    });
}