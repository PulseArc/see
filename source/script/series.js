


// Генерация карточек с случайными рейтингами
// Сериалы
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
            "name": "911: Служба спасения",
            "image": "https://image.tmdb.org/t/p/w500//9dNWZPjFWdKo5Avr5JEEzLShLMZ.jpg",
            "link": "/card/series/900-01/911-sluzhba-spaseniya.html",
            "year": "2018",
            "rating":"8.2",
            "isTV": true,
            "genres": ["Драма", "Криминал", "Боевик и Приключения"]
        },
        {
            "name": "Сверхъестественное",
            "image": "https://image.tmdb.org/t/p/w500//hvO99pEfSBxF55clgs8r4mpRzr.jpg",
            "link": "/card/series/900-03/Sverhestestvennoe.html",
            "year": "2005",
            "rating":"8.3",
            "isTV": true,
            "genres": ["Драма", "Детектив", "НФ и Фэнтези"]
        },
        {
            "name": "Корона",
            "image": "https://image.tmdb.org/t/p/w500//iS2m3TYiThK43IC3Ygm4snyA4UM.jpg",
            "link": "/card/series/900-04/Korona.html",
            "year": "2016",
            "rating":"8.2",
            "isTV": true,
            "genres": ["Драма", "История", "Биография"]
        },
        {
            "name": "Острые козырьки",
            "image": "https://image.tmdb.org/t/p/w500//pVJzfWgb3sHN29hLaiI5jmBN9vx.jpg",
            "link": "/card/series/900-05/Ostrye-kozyrki.html",
            "year": "2013",
            "rating":"8.5",
            "isTV": true,
            "genres": ["Драма", "Криминал"]
        },
        {
            "name": "Гримм",
            "image": "https://image.tmdb.org/t/p/w500//lTmjyJwiMTLsCdzKjkkj2L9VyCd.jpg",
            "link": "/card/series/900-06/Grimm.html",
            "year": "2011",
            "rating":"8.3",
            "isTV": true,
            "genres": ["Драма", "Детектив", "НФ и Фэнтези"]
        },
        {
            "name": "Джентльмены",
            "image": "https://image.tmdb.org/t/p/w500//zRdUl8TxpXD3LTFqH9wiya14ZYS.jpg",
            "link": "/card/series/900-07/Dzhentlmeny.html",
            "year": "2024",
            "rating":"7.9",
            "isTV": true,
            "genres": ["Комедия", "Драма", "Криминал"]
        },
        {
            "name": "Бриджертоны",
            "image": "https://image.tmdb.org/t/p/w500//jMDY8c3HpkM5LmYr1Xiz7a0r0qk.jpg",
            "link": "/card/series/900-08/Bridzhertony.html",
            "year": "2020",
            "rating":"8.1",
            "isTV": true,
            "genres": ["Драма", "Мелодрама", "История"]
        },
        {
            "name": "Лучше звоните Солу",
            "image": "https://image.tmdb.org/t/p/w500//rTjlrjxCnxiNNVo0PjqUSySoieH.jpg",
            "link": "/card/series/900-09/Luchshe-zvonite-Solu.html",
            "year": "2015",
            "rating":"8.7",
            "isTV": true,
            "genres": ["Драма", "Криминал"]
        },
        {
            "name": "Сто лет одиночества",
            "image": "https://image.tmdb.org/t/p/w500//vYtbH9Q5DaCDqzkB483dmYjfkA3.jpg",
            "link": "/card/series/900-10/Sto-let-odinochestva.html",
            "year": "2024",
            "rating":"8.0",
            "isTV": true,
            "genres": ["Драма", "НФ и Фэнтези"]
        },
        {
            "name": "Люцифер",
            "image": "https://image.tmdb.org/t/p/w500//A7IP83pBzpLCbU7hlchJXsfcF8j.jpg",
            "link": "/card/series/900-11/Lyucifer.html",
            "year": "2016",
            "rating":"8.5",
            "isTV": true,
            "genres": ["Криминал", "НФ и Фэнтези"]
        },
        {
            "name": "Декстер: Новая кровь",
            "image": "https://image.tmdb.org/t/p/w500//6Dlx8ck7zRKIxnFNJ1G1tXZ6p9D.jpg",
            "link": "/card/series/900-12/Dekster-Novaya-krov.html",
            "year": "2021",
            "rating":"8.0",
            "isTV": true,
            "genres": ["Драма", "Криминал"]
        },
        {
            "name": "Дневники вампира",
            "image": "https://image.tmdb.org/t/p/w500//y8hcR1R8QmGs8uLHQhIFHgCFWDd.jpg",
            "link": "/card/series/900-13/Dnevniki-vampira.html",
            "year": "2009",
            "rating":"8.3",
            "isTV": true,
            "genres": ["Драма", "НФ и Фэнтези"]
        },
        {
            "name": "Шерлок",
            "image": "https://image.tmdb.org/t/p/w500//kuaBGwju6CParqos7afHNvNEIdD.jpg",
            "link": "/card/series/900-14/Sherlok.html",
            "year": "2010",
            "rating":"8.5",
            "isTV": true,
            "genres": ["Криминал", "Драма", "Детектив"]
        },
        {
            "name": "Тьма",
            "image": "https://image.tmdb.org/t/p/w500//ikhUNN25WVfMN2uvoJLLKYXp8jE.jpg",
            "link": "/card/series/900-15/Tma.html",
            "year": "2017",
            "rating":"8.4",
            "isTV": true,
            "genres": ["Криминал", "Драма", "НФ и Фэнтези"]
        },
        {
            "name": "Игра в кальмара",
            "image": "https://image.tmdb.org/t/p/w500//3vMCgpRa5cdutE56AXqeEkGHtxI.jpg",
            "link": "/card/series/900-16/Igra-v-kalmara.html",
            "year": "2021",
            "rating":"7.9",
            "isTV": true,
            "genres": ["Боевик и Приключения", "Детектив", "Драма"]
        },
        {
            "name": "Тед Лассо",
            "image": "https://image.tmdb.org/t/p/w500//htV1GTyatTXJB589hjiqUQPegjd.jpg",
            "link": "/card/series/900-17/Ted-Lasso.html",
            "year": "2020",
            "rating":"8.4",
            "isTV": true,
            "genres": ["Комедия", "Драма"]
        },
        {
            "name": "Друзья",
            "image": "https://image.tmdb.org/t/p/w500//zBOs8S3UOHyWLzOl9gF8lknBxlL.jpg",
            "link": "/card/series/900-18/Druzya.html",
            "year": "1994",
            "rating":"8.4",
            "isTV": true,
            "genres": ["Комедия", "Мелодрама"]
        },
        {
            "name": "Хороший доктор",
            "image": "https://image.tmdb.org/t/p/w500//c3WPgJl5OjAMJotI7qPeL1zgcCX.jpg",
            "link": "/card/series/900-19/Horoshij-doktor.html",
            "year": "2017",
            "rating":"8.5",
            "isTV": true,
            "genres": ["Драма"]
        },
        {
            "name": "Волчонок",
            "image": "https://image.tmdb.org/t/p/w500//bq0TmDgpYWrTuJVo8JpeMU3LLb8.jpg",
            "link": "/card/series/900-20/Volchonok.html",
            "year": "2011",
            "rating":"8.5",
            "isTV": true,
            "genres": ["НФ и Фэнтези", "Драма", "Комедия"]
        },
        {
            "name": "Мистер Робот",
            "image": "https://image.tmdb.org/t/p/w500//v0O3GfmruiKwBCFUKc1cEM1PVLF.jpg",
            "link": "/card/series/900-22/Mister-Robot.html",
            "year": "2015",
            "rating":"8.2",
            "isTV": true,
            "genres": ["Криминал", "Драма"]
        },
        {
            "name": "Мандалорец",
            "image": "https://image.tmdb.org/t/p/w500//3JcJfU9wm6sA2R6LQtnsBJsHMmY.jpg",
            "link": "/card/series/900-23/Mandalorec.html",
            "year": "2019",
            "rating":"8.4",
            "isTV": true,
            "genres": ["НФ и Фэнтези", "Боевик и Приключения"]
        },
        {
            "name": "Земля без людей",
            "image": "https://image.tmdb.org/t/p/w500//fRPUaAmxFtfhYPalD7Ru8Cu2MTr.jpg",
            "link": "/card/series/900-24/Zemlya-bez-lyudej.html",
            "year": "2024",
            "rating":"7.2",
            "isTV": true,
            "genres": ["НФ и Фэнтези"]
        },
        {
            "name": "Американская история ужасов",
            "image": "https://image.tmdb.org/t/p/w500//gj2dFFgEHdhxqSBpD2oPyo4YmPD.jpg",
            "link": "/card/series/900-25/Amerikanskaya-istoriya-uzhasov.html",
            "year": "2011",
            "rating":"8.1",
            "isTV": true,
            "genres": ["Драма", "Детектив", "НФ и Фэнтези"]
        },
        {
            "name": "День Шакала",
            "image": "https://image.tmdb.org/t/p/w500//uFdIebgylj64d9ze6y1C5jsHUZZ.jpg",
            "link": "/card/series/900-26/Den-Shakala.html",
            "year": "2024",
            "rating":"8.3",
            "isTV": true,
            "genres": ["Драма", "Боевик и Приключения", "Детектив"]
        },
        {
            "name": "Кросс",
            "image": "https://image.tmdb.org/t/p/w500//vjC4LAf7K6aXCWcp3CdinYsG0aG.jpg",
            "link": "/card/series/900-27/Kross.html",
            "year": "2024",
            "rating":"7.2",
            "isTV": true,
            "genres": ["Криминал", "Драма", "Детектив"]
        },
        {
            "name": "Ганнибал",
            "image": "https://image.tmdb.org/t/p/w500//cy5xnqFR88IG5RrHXxHlpqhLjEG.jpg",
            "link": "/card/series/900-28/Gannibal.html",
            "year": "2013",
            "rating":"8.2",
            "isTV": true,
            "genres": ["Криминал", "Драма"]
        },
        {
            "name": "Магазин светильников",
            "image": "https://image.tmdb.org/t/p/w500//edzQHpnGiwYYf1wRRv91iJETtWX.jpg",
            "link": "/card/series/900-29/Magazin-svetilnikov.html",
            "year": "2024",
            "rating":"8.6",
            "isTV": true,
            "genres": ["Драма", "Детектив"]
        },
        {
            "name": "Сексуальное просвещение",
            "image": "https://image.tmdb.org/t/p/w500//ig9FyX4AMOhJXKQkDmau0xX0DWy.jpg",
            "link": "/card/series/900-30/Seksualnoe-prosveshenie.html",
            "year": "2019",
            "rating":"8.2",
            "isTV": true,
            "genres": ["Комедия", "Драма"]
        },
        {
            "name": "Ловкий Плут",
            "image": "https://image.tmdb.org/t/p/w500//3xhycTWtx8TsQDllkQ4g7s2mGBR.jpg",
            "link": "/card/series/900-31/Lovki-Plut.html",
            "year": "2023",
            "rating":"8.0",
            "isTV": true,
            "genres": ["Драма", "Криминал", "Боевик и Приключения"]
        },
        {
            "name": "Дорогуша",
            "image": "https://image.tmdb.org/t/p/w500//33DCNqCAtqL408AOYrzJ09NhiN7.jpg",
            "link": "/card/series/900-32/Dorogusha.html",
            "year": "2024",
            "rating":"7.6",
            "isTV": true,
            "genres": ["Комедия", "Драма"]
        },
        {
            "name": "Игра престолов",
            "image": "https://image.tmdb.org/t/p/w500//tbBQW8jpDH7RpAymMGnBluIsdmH.jpg",
            "link": "/card/series/900-33/Igra-prestolov.html",
            "year": "2011",
            "rating":"8.5",
            "isTV": true,
            "genres": ["НФ и Фэнтези", "Драма", "Приключения"]
        },
        {
            "name": "Древние",
            "image": "https://image.tmdb.org/t/p/w500//dsVB3Mqv5sHGGsu1SGuF3fahw0Z.jpg",
            "link": "/card/series/900-34/Drevnie.html",
            "year": "2013",
            "rating":"8.6",
            "isTV": true,
            "genres": ["НФ и Фэнтези", "Драма", "Детектив"]
        },
        {
            "name": "Отбросы",
            "image": "https://image.tmdb.org/t/p/w500//jpSJDe6TTnLL5Es9uZ8Viz6MMYV.jpg",
            "link": "/card/series/900-35/Otbrosy.html",
            "year": "2009",
            "rating":"7.6",
            "isTV": true,
            "genres": ["НФ и Фэнтези", "Драма", "Комедия"]
        },
        {
            "name": "Флэш",
            "image": "https://image.tmdb.org/t/p/w500//q14oRmj0ITMBzqHUdiGwXUIvg7t.jpg",
            "link": "/card/series/900-36/Flesh.html",
            "year": "2014",
            "rating":"7.8",
            "isTV": true,
            "genres": ["НФ и Фэнтези", "Драма"]
        },
        {
            "name": "Дом Дракона",
            "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/emAFaKrAn1mhJ3ZQbM2503a1X2s.jpg",
            "link": "/card/series/900-37/Dom-Drakona.html",
            "year": "2022",
            "rating":"8.4",
            "isTV": true,
            "genres": ["НФ и Фэнтези", "Драма", "Приключения"]
        },
        {
            "name": "Презумпция невиновности",
            "image": "https://image.tmdb.org/t/p/w500//l432WSWtwRw40R3IJuwakO0w6sq.jpg",
            "link": "/card/series/900-38/Prezumpciya-nevinovnosti.html",
            "year": "2024",
            "rating":"8.1",
            "isTV": true,
            "genres": ["Драма", "Детектив"]
        },
        {
            "name": "Обречённые на славу",
            "image": "https://image.tmdb.org/t/p/w500//4NHRDQa5WgX2guZDihQLLtifYs.jpg",
            "link": "/card/series/900-39/Obrechennye-na-slavu.html",
            "year": "2024",
            "rating":"7.5",
            "isTV": true,
            "genres": ["Драма", "История"]
        },
        {
            "name": "Пацаны",
            "image": "https://image.tmdb.org/t/p/w500//3NqlBDpWI83TgQ9nmeFwTVxEmtZ.jpg",
            "link": "/card/series/900-40/Pacany.html",
            "year": "2019",
            "rating":"8.5",
            "isTV": true,
            "genres": ["Боевик и Приключения", "Драма", "Фэнтези"]
        },
        {
            "name": "Очень странные дела",
            "image": "https://image.tmdb.org/t/p/w500//uKBjtMZ7yDlJovmqIOBe0ZVGdVM.jpg",
            "link": "/card/series/900-41/Ochen-strannye-dela.html",
            "year": "2016",
            "rating":"8.6",
            "isTV": true,
            "genres": ["Детектив", "Драма", "НФ и Фэнтези"]
        },
        {
            "name": "Шугар",
            "image": "https://image.tmdb.org/t/p/w500//z8rJ8FWiMpWt9ecbsVcxoE3UQxo.jpg",
            "link": "/card/series/900-42/Shugar.html",
            "year": "2024",
            "rating":"7.3",
            "isTV": true,
            "genres": ["Детектив", "Драма"]
        },
        {
            "name": "Охота за убийцей",
            "image": "https://image.tmdb.org/t/p/w500//lcoxNrC8Z00MiUynsqxNtwQDjvA.jpg",
            "link": "/card/series/900-43/Ohota-za-ubijcej.html",
            "year": "2024",
            "rating":"6.9",
            "isTV": true,
            "genres": ["Драма", "Криминал", "История"]
        },
        {
            "name": "Созвездие",
            "image": "https://image.tmdb.org/t/p/w500//pon5QHLxrsgmyZKVSUdpXmHg08C.jpg",
            "link": "/card/series/900-45/Sozvezdie.html",
            "year": "2024",
            "rating":"7.2",
            "isTV": true,
            "genres": ["НФ и Фэнтези", "Детектив", "Драма"]
        },
        {
            "name": "Бригада",
            "image": "https://image.tmdb.org/t/p/w500//nZBVnI2gWZ4OFnpxU49j3kYavYz.jpg",
            "link": "/card/series/900-02/Brigada.html",
            "year": "2002",
            "rating":"7.8",
            "isTV": true,
            "genres": ["Боевик и Приключения", "Драма", "Криминал"]
        },
        {
            "name": "Задача трёх тел",
            "image": "https://image.tmdb.org/t/p/w500//d4e2b1UiJNgU9V0kBvOxnbVPslE.jpg",
            "link": "/card/series/900-46/Zadacha-tryoh-tel.html",
            "year": "2024",
            "rating":"7.5",
            "isTV": true,
            "genres": ["НФ и Фэнтези", "Детектив", "Драма"]
        },
        {
            "name": "Хало",
            "image": "https://image.tmdb.org/t/p/w500//5SBcW0WyqxZyE7AolxfX1ift532.jpg",
            "link": "/card/series/900-47/Halo.html",
            "year": "2022",
            "rating":"8.3",
            "isTV": true,
            "genres": ["НФ и Фэнтези", "Боевик и Приключения"]
        },
        {
            "name": "Властелины воздуха",
            "image": "https://image.tmdb.org/t/p/w500//mAJJPhPJ0EbyemFho6Wtwibi7FZ.jpg",
            "link": "/card/series/900-48/Vlasteliny-vozduha.html",
            "year": "2024",
            "rating":"7.8",
            "isTV": true,
            "genres": ["Драма", "Война и Политика"]
        },
        {
            "name": "Лунный рыцарь",
            "image": "https://image.tmdb.org/t/p/w500//pygGowaXF87Mfomit3oekliBvt7.jpg",
            "link": "/card/series/900-49/Lunnyj-rycar.html",
            "year": "2022",
            "rating":"7.7",
            "isTV": true,
            "genres": ["Фэнтези", "Детектив", "Боевик и Приключения"]
        },
        {
            "name": "Извне",
            "image": "https://image.tmdb.org/t/p/w500//rGFRCzgScvIC9LCfqkdb9T7NIs0.jpg",
            "link": "/card/series/900-50/Izvne.html",
            "year": "2022",
            "rating":"8.2",
            "isTV": true,
            "genres": ["Детектив", "Драма", "НФ и Фэнтези"]
        },
        {
            "name": "Чернобыль",
            "image": "https://image.tmdb.org/t/p/w500//qhzSVp06AGGcziMoibInZ5PY0Eg.jpg",
            "link": "/card/series/900-51/Chernobyl.html",
            "year": "2019",
            "rating":"8.7",
            "isTV": true,
            "genres": ["Драма", "История"]
        },
        {
            "name": "Ричер",
            "image": "https://image.tmdb.org/t/p/w500//zLqlW0rXmHwOZRhmOjeod14sGiT.jpg",
            "link": "/card/series/900-52/Dzhek-Richer.html",
            "year": "2022",
            "rating":"8.1",
            "isTV": true,
            "genres": ["Боевик и Приключения", "Криминал", "Драма"]
        },
        {
            "name": "Фарго",
            "image": "https://image.tmdb.org/t/p/w500//r8HpRhKl5q0kiNehdjVOmTC7K7p.jpg",
            "link": "/card/series/900-53/Fargo.html",
            "year": "2014",
            "rating":"8.3",
            "isTV": true,
            "genres": ["Драма", "Криминал"]
        },
        {
            "name": "Третий лишний",
            "image": "https://image.tmdb.org/t/p/w500//cahNXUK7bp9RTPItIVyOF2z5m0L.jpg",
            "link": "/card/series/900-54/Tretij-lishnij.html",
            "year": "2024",
            "rating":"7.9",
            "isTV": true,
            "genres": ["Комедия"]
        },
        {
            "name": "«Монарх»: Наследие монстров",
            "image": "https://image.tmdb.org/t/p/w500//kam0gTmqC0h68uLiRxamj38nkPX.jpg",
            "link": "/card/series/900-55/Monarh-Nasledie-monstrov.html",
            "year": "2023",
            "rating":"7.8",
            "isTV": true,
            "genres": ["Фэнтези", "Драма", "Боевик и Приключения"]
        },
        {
            "name": "Пингвин",
            "image": "https://image.tmdb.org/t/p/w500//25dj85s5VtirRWF6rmO8TpZXHJV.jpg",
            "link": "/card/series/900-56/Pingvin.html",
            "year": "2024",
            "rating":"8.5",
            "isTV": true,
            "genres": ["Драма", "Криминал"]
        },
        {
            "name": "Ведьмак",
            "image": "https://image.tmdb.org/t/p/w500//rY2c2LhN07CRKlAbRaDZxN2XjvK.jpg",
            "link": "/card/series/900-57/Vedmak.html",
            "year": "2019",
            "rating":"8.0",
            "isTV": true,
            "genres": ["НФ и Фэнтези", "Драма", "Приключения"]
        },
        {
            "name": "Локи",
            "image": "https://image.tmdb.org/t/p/w500//fNTS8BOMmhYYM4FqLPLuJ6KRQEF.jpg",
            "link": "/card/series/900-58/Loki.html",
            "year": "2019",
            "rating":"8.2",
            "isTV": true,
            "genres": ["НФ и Фэнтези", "Драма"]
        },
        {
            "name": "Тысяча и одна ночь",
            "image": "https://image.tmdb.org/t/p/w500//vR9Dh1zc0yQSAln3bqqCPRndhEB.jpg",
            "link": "/card/series/900-59/Tysyacha-i-odna-noch.html",
            "year": "2024",
            "rating":"4.0",
            "isTV": true,
            "genres": ["НФ и Фэнтези", "Драма"]
        },
        {
            "name": "Зимний король",
            "image": "https://image.tmdb.org/t/p/w500//fYx5q9hPAmbDrWzsYUDhxZJnigC.jpg",
            "link": "/card/series/900-61/Zimnij-korol.html",
            "year": "2023",
            "rating":"6.8",
            "isTV": true,
            "genres": ["Боевик и Приключения", "Драма"]
        },
        {
            "name": "Поколение «Ви»",
            "image": "https://image.tmdb.org/t/p/w500//2AVCQymHu0gj8Jwci2VxEuodZq4.jpg",
            "link": "/card/series/900-62/Pokolenie-Vi.html",
            "year": "2023",
            "rating":"7.9",
            "isTV": true,
            "genres": ["Боевик и Приключения", "Драма", "Фэнтези"]
        },
        {
            "name": "Доисторическая планета",
            "image": "https://image.tmdb.org/t/p/w500//5mj82iMTp8UmnyXFaZbwRGuc81a.jpg",
            "link": "/card/series/900-63/Doistoricheskaya-planeta.html",
            "year": "2022",
            "rating":"8.3",
            "isTV": true,
            "genres": ["Документальный"]
        },
        {
            "name": "Одни из нас",
            "image": "https://image.tmdb.org/t/p/w500//69loIrm9JPpPRE3Akw4yRoitSYn.jpg",
            "link": "/card/series/900-64/Odni-iz-nas.html",
            "year": "2023",
            "rating":"8.6",
            "isTV": true,
            "genres": ["Боевик и Приключения", "Драма", "Триллер"]
        },
        {
            "name": "Захваченный рейс",
            "image": "https://image.tmdb.org/t/p/w500//v4oAWDy33lmKI7lsktThsYhp3zU.jpg",
            "link": "/card/series/900-65/Zahvachennyj-rejs.html",
            "year": "2023",
            "rating":"7.8",
            "isTV": true,
            "genres": ["Драма", "Триллер"]
        },
        {
            "name": "Скрежет металла",
            "image": "https://image.tmdb.org/t/p/w500//82HaUMIagdh5PLflUOVrHn5GsI9.jpg",
            "link": "/card/series/900-66/Skrezhet-metalla.html",
            "year": "2023",
            "rating":"7.9",
            "isTV": true,
            "genres": ["Боевик и Приключения", "Комедия"]
        },
        {
            "name": "Бумажный дом",
            "image": "https://image.tmdb.org/t/p/w500//x9YQ28gwAkAXCSw7n1cAsPbJaTF.jpg",
            "link": "/card/series/900-67/Bumazhnyj-dom.html",
            "year": "2017",
            "rating":"8.2",
            "isTV": true,
            "genres": ["Криминал", "Драма"]
        },
        {
            "name": "Любовь и смерть ",
            "image": "https://image.tmdb.org/t/p/w500//tMm4sHiTkx8kaI71BcG2ELXRKfR.jpg",
            "link": "/card/series/900-68/Lyubov-i-smert.html",
            "year": "2023",
            "rating":"7.9",
            "isTV": true,
            "genres": ["Криминал", "Драма"]
        },
        {
            "name": "Цитадель",
            "image": "https://image.tmdb.org/t/p/w500//hwlI6qEtzFT47FAUMP3xac8qcnz.jpg",
            "link": "/card/series/900-69/Citadel.html",
            "year": "2023",
            "rating":"6.9",
            "isTV": true,
            "genres": ["Криминал", "Драма", "Боевик и Приключения"]
        },
        {
            "name": "Экстраполяции",
            "image": "https://image.tmdb.org/t/p/w500//wzyKhC005b7wuCwfCgcKIIc7DWY.jpg",
            "link": "/card/series/900-70/Ekstrapolyacii.html",
            "year": "2023",
            "rating":"6.0",
            "isTV": true,
            "genres": ["Драма", "Детектив", "Комедия"]
        },
        {
            "name": "Фоллаут",
            "image": "https://image.tmdb.org/t/p/w500//tOrIGVF521WhBsIDwuGQ999ZbjV.jpg",
            "link": "/card/series/900-71/Fallout.html",
            "year": "2024",
            "rating":"8.3",
            "isTV": true,
            "genres": ["НФ и Фэнтези", "Приключения", "Драма"]
        },
        {
            "name": "Связь",
            "image": "https://image.tmdb.org/t/p/w500//u79ZbVgP5F8kugRHOrrAF78PFe1.jpg",
            "link": "/card/series/900-72/Svyaz.html",
            "year": "2023",
            "rating":"6.3",
            "isTV": true,
            "genres": ["Криминал", "Драма", "Комедия"]
        },
        {
            "name": "Настоящий детектив",
            "image": "https://image.tmdb.org/t/p/w500//1p60ehq2diow72QQC8pyppfexky.jpg",
            "link": "/card/series/900-73/Nastoyashij-detektiv.html",
            "year": "2014",
            "rating":"8.3",
            "isTV": true,
            "genres": ["Драма", "Детектив"]
        },
        {
            "name": "Всевидящее око",
            "image": "https://image.tmdb.org/t/p/w500//5axQCuuavbNOAICMa3tduIXQL5T.jpg",
            "link": "/card/series/900-74/Vsevidyashee-oko.html",
            "year": "2023",
            "rating":"6.7",
            "isTV": true,
            "genres": ["Детектив", "Драма", "Триллер"]
        },
        {
            "name": "Сёгун",
            "image": "https://image.tmdb.org/t/p/w500//cOKLRblbdBtcuf4TkAzsyJpZr23.jpg",
            "link": "/card/series/900-75/Syogun.html",
            "year": "2024",
            "rating":"8.5",
            "isTV": true,
            "genres": ["Драма", "Война и Политика"]
        },
        {
            "name": "Карнивал Роу",
            "image": "https://image.tmdb.org/t/p/w500//gdaKPawLiRqT44AqDJCnxBAsy2j.jpg",
            "link": "/card/series/900-76/Karnival-Rou.html",
            "year": "2019",
            "rating":"7.7",
            "isTV": true,
            "genres": ["Криминал", "Драма", "НФ и Фэнтези"]
        },
        {
            "name": "Сквозь снег",
            "image": "https://image.tmdb.org/t/p/w500//mNUE6FC57NcC9iC8QUCtlMEF5n8.jpg",
            "link": "/card/series/900-77/Skvoz-sneg.html",
            "year": "2020",
            "rating":"7.4",
            "isTV": true,
            "genres": ["НФ и Фэнтези", "Драма", "Триллер"]
        },
        {
            "name": "Ты",
            "image": "https://image.tmdb.org/t/p/w500//aSEYa7z10DC6o3NedSZEyJ6SBXv.jpg",
            "link": "/card/series/900-78/Ty.html",
            "year": "2018",
            "rating":"8.0",
            "isTV": true,
            "genres": ["Криминал", "Драма", "Триллер"]
        },
        {
            "name": "Мэйфейрские ведьмы",
            "image": "https://image.tmdb.org/t/p/w500//wTwlZ3W3euIZIWKnPqKjWARJA5v.jpg",
            "link": "/card/series/900-79/Mejfejrskie-vedmy.html",
            "year": "2023",
            "rating":"7.4",
            "isTV": true,
            "genres": ["Драма", "НФ и Фэнтези"]
        },
        {
            "name": "Наклз",
            "image": "https://image.tmdb.org/t/p/w500//zqT1Te9dnI3I8oDnDaLffFPaZ3c.jpg",
            "link": "/card/series/900-80/Naklz.html",
            "year": "2024",
            "rating":"7.4",
            "isTV": true,
            "genres": ["Приключения", "Семейный", "Комедия"]
        },
        {
            "name": "1923",
            "image": "https://image.tmdb.org/t/p/w500//zgZRJZvZn5cpsWAB0zMUdad3iZd.jpg",
            "link": "/card/series/900-81/1923.html",
            "year": "2022",
            "rating":"8.1",
            "isTV": true,
            "genres": ["Драма", "Вестерн"]
        },
        {
            "name": "Властелин колец: Кольца власти",
            "image": "https://image.tmdb.org/t/p/w500//pp5yf6xRMtySYgtVf5YTDYh7fof.jpg",
            "link": "/card/series/900-82/Vlastelin-kolec-Kolca-vlasti.html",
            "year": "2022",
            "rating":"7.3",
            "isTV": true,
            "genres": ["Приключения", "НФ и Фэнтези", "Драма"]
        },
        {
            "name": "Химия смерти",
            "image": "https://image.tmdb.org/t/p/w500//lUTPksMc9PhQCcWtWCmnQQrPC0B.jpg",
            "link": "/card/series/900-83/Himiya-smerti.html",
            "year": "2023",
            "rating":"6.6",
            "isTV": true,
            "genres": ["Криминал"]
        },
        {
            "name": "Викинги: Вальхалла",
            "image": "https://image.tmdb.org/t/p/w500//zOB0Mo1rNUcfpVunce8gJjcvvSV.jpg",
            "link": "/card/series/900-84/Vikingi-Valhalla.html",
            "year": "2022",
            "rating":"7.7",
            "isTV": true,
            "genres": ["Приключения", "Драма", "Война и Политика"]
        },
        {
            "name": "Черное зеркало",
            "image": "https://image.tmdb.org/t/p/w500//rAfh65N51dtzew6r0vKCqnaiSyf.jpg",
            "link": "/card/series/900-85/Chernoe-zerkalo.html",
            "year": "2011",
            "rating":"8.3",
            "isTV": true,
            "genres": ["НФ и Фэнтези", "Драма", "Детектив"]
        },
        {
            "name": "Во все тяжкие",
            "image": "https://image.tmdb.org/t/p/w500//3NA1FOlnjE909OyVT534B7fw5h5.jpg",
            "link": "/card/series/900-86/Vo-vse-tyazhkie.html",
            "year": "2008",
            "rating":"8.9",
            "isTV": true,
            "genres": ["Драма", "Криминал"]
        },
        {
            "name": "Ходячие мертвецы: Выжившие",
            "image": "https://image.tmdb.org/t/p/w500//rhN08H5Yg7xAFfBzeDzVV9GAwDj.jpg",
            "link": "/card/series/900-44/Hodyachie-mertvecy-Vyzhivshie.html",
            "year": "2024",
            "rating":"8.0",
            "isTV": true,
            "genres": ["Боевик и Приключения", "Приключения", "Драма", "НФ и Фэнтези"]
        },
        {
            "name": "Ходячие мертвецы: Дэрил Диксон",
            "image": "https://image.tmdb.org/t/p/w500//kRTaNKcs3RQJCB626y1mGOTHVYU.jpg",
            "link": "/card/series/900-60/Hodyachie-mertvecy-Deril-Dikson.html",
            "year": "2023",
            "rating":"8.1",
            "isTV": true,
            "genres": ["Боевик и Приключения", "Приключения", "Драма", "НФ и Фэнтези"]
        },
        {
            "name": "Ходячие мертвецы: Мертвый город",
            "image": "https://image.tmdb.org/t/p/w500//mx5CPdGPLTsebUGcKA54Gs2i81U.jpg",
            "link": "/card/series/900-87/Hodyachie-mertvecy-Mertvyj-gorod.html",
            "year": "2023",
            "rating":"8.0",
            "isTV": true,
            "genres": ["Боевик и Приключения", "Приключения", "Драма", "НФ и Фэнтези"]
        },
        {
            "name": "Истории ходячих мертвецов",
            "image": "https://image.tmdb.org/t/p/original/rlC90W3krCHQ727fXKYBYLqSmeP.jpg",
            "link": "/card/series/900-88/Istorii-hodyachih-mertvecov.html",
            "year": "2022",
            "rating":"7.2",
            "isTV": true,
            "genres": ["Боевик и Приключения", "Приключения", "Драма", "НФ и Фэнтези"]
        },
        {
            "name": "Ходячие мертвецы: Мир за пределами",
            "image": "https://image.tmdb.org/t/p/original/4DuXNzJrdommCOFBM3re20mM8bd.jpg",
            "link": "/card/series/900-89/Hodyachie-mertvecy-Mir-za-predelami.html",
            "year": "2020",
            "rating":"7.4",
            "isTV": true,
            "genres": ["Боевик и Приключения", "Приключения", "Драма", "НФ и Фэнтези"]
        },
        {
            "name": "Бойтесь ходячих мертвецов",
            "image": "https://image.tmdb.org/t/p/w500//3BWbdYHwSxd3rkHkLip8gFxaPZv.jpg",
            "link": "/card/series/900-90/Bojtes-hodyachih-mertvecov.html",
            "year": "2015",
            "rating":"7.7",
            "isTV": true,
            "genres": ["Боевик и Приключения", "Приключения", "Драма", "НФ и Фэнтези"]
        },
        {
            "name": "Ходячие мертвецы",
            "image": "https://image.tmdb.org/t/p/w500//3metsxLVhlJU0mNj5gVfKIih0EF.jpg",
            "link": "/card/series/900-21/Hodyachie-mertvecy.html",
            "year": "2010",
            "rating":"8.1",
            "isTV": true,
            "genres": ["Боевик и Приключения", "Приключения", "Драма", "НФ и Фэнтези"]
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
            'триллер': 3.0,
            'Война и Политика': 4.2,
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
            'НФ и Фэнтези': 4.2,
            'Детский': 5.0,
            'Биография': 4.0,
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