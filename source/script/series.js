


// Генерация карточек с случайными рейтингами
// Сериалы

document.addEventListener("DOMContentLoaded", async function() {
    const localCardData = [
        {
            "name": "Уэнздей",
            "image": "https://image.tmdb.org/t/p/w500//rb2MBiP9gAGwtxObuMP9Qro12W3.jpg",
            "link": "/card/series/900-106/Uenzdej.html",
            "year": "2022",
            "rating": "8.4",
            "tmdb_id": 119051,
            "isTV": true
        },
        {
            "name": "Гангстерленд",
            "image": "https://image.tmdb.org/t/p/w500//qSRH45LOLb0BWWiVBHUXGytYFqL.jpg",
            "link": "/card/series/900-91/Gangsterlend.html",
            "year": "2025",
            "rating": "8.5",
            "tmdb_id": 247718,
            "isTV": true
        },
        {
            "name": "Алиса в Пограничье",
            "image": "https://image.tmdb.org/t/p/w500//AhSSceW4LshEU2MKVL3iDHLXZtX.jpg",
            "link": "/card/series/900-92/Alisa-v-Pograniche.html",
            "year": "2020",
            "rating": "8.2",
            "tmdb_id": 110316,
            "isTV": true
        },
        {
            "name": "Джинни и Джорджия",
            "image": "https://image.tmdb.org/t/p/w500//1yGNxmIfzr9UqKGxGoPF4P1AKbH.jpg",
            "link": "/card/series/900-93/Dzhinni-i-Dzhordzhiya.html",
            "year": "2021",
            "rating": "8.1",
            "tmdb_id": 117581,
            "isTV": true
        },
        {
            "name": "Герои",
            "image": "https://image.tmdb.org/t/p/w500//A2VAMFKW5Q4Qgp82XIVIjUhcj9n.jpg",
            "link": "/card/series/900-94/Geroi.html",
            "year": "2006",
            "rating": "7.5",
            "tmdb_id": 1639,
            "isTV": true
        },
        {
            "name": "Видеть",
            "image": "https://image.tmdb.org/t/p/w500//xI8GsMKify2ke4FvcmsoOaOdPIJ.jpg",
            "link": "/card/series/900-95/Videt.html",
            "year": "2019",
            "rating": "8.1",
            "tmdb_id": 80752,
            "isTV": true
        },
        {
            "name": "Отдел нераскрытых дел",
            "image": "https://image.tmdb.org/t/p/w500//jyqEWkBA3bm9YdDwhsM3DbDylfD.jpg",
            "link": "/card/series/900-96/Otdel-neraskrytyh-del.html",
            "year": "2025",
            "rating": "7.9",
            "tmdb_id": 245703,
            "isTV": true
        },
        {
            "name": "Остаться в живых",
            "image": "https://image.tmdb.org/t/p/w500//jR6yfKTUv7HqvyROtoRMuKzlFCb.jpg",
            "link": "/card/series/900-97/Ostatsya-v-zhivyh.html",
            "year": "2004",
            "rating": "7.9",
            "tmdb_id": 4607,
            "isTV": true
        },
        {
            "name": "Два с половиной человека",
            "image": "https://image.tmdb.org/t/p/w500//rfo3OHRPRIDODWWr54sY1bTZLd3.jpg",
            "link": "/card/series/900-98/Dva-s-polovinoj-cheloveka.html",
            "year": "2003",
            "rating": "7.5",
            "tmdb_id": 2691,
            "isTV": true
        },
        {
            "name": "Сотня",
            "image": "https://image.tmdb.org/t/p/w500//tEm3ALRXsoXT9IaCp1dcNFyjtBO.jpg",
            "link": "/card/series/900-99/Sotnya.html",
            "year": "2014",
            "rating": "7.9",
            "tmdb_id": 48866,
            "isTV": true
        },
        {
            "name": "Стрела",
            "image": "https://image.tmdb.org/t/p/w500//8xevzZgfa6ed0vVrZ8kwf71py4w.jpg",
            "link": "/card/series/900-100/Strela.html",
            "year": "2012",
            "rating": "6.8",
            "tmdb_id": 1412,
            "isTV": true
        },
        {
            "name": "Тайны Смолвиля",
            "image": "https://image.tmdb.org/t/p/w500//aRhhgcz1hMHZWp15E8g8oerb8vD.jpg",
            "link": "/card/series/900-101/Tajny-Smolvilya.html",
            "year": "2001",
            "rating": "8.2",
            "tmdb_id": 4604,
            "isTV": true
        },
        {
            "name": "Зачарованные",
            "image": "https://image.tmdb.org/t/p/w500//l66qYuj0h7r6aPfcznkRzVHiFLU.jpg",
            "link": "/card/series/900-102/Zacharovannye.html",
            "year": "1998",
            "rating": "8.2",
            "tmdb_id": 1981,
            "isTV": true
        },
        {
            "name": "Детство Шелдона",
            "image": "https://image.tmdb.org/t/p/w500//9bZR5H7LrEo4i9gYoKvUhvcfr1y.jpg",
            "link": "/card/series/900-103/Detstvo-Sheldona.html",
            "year": "2017",
            "rating": "8.0",
            "tmdb_id": 71728,
            "isTV": true
        },
        {
            "name": "Теория большого взрыва",
            "image": "https://image.tmdb.org/t/p/w500//wgCVpWDwc93wHlck8jEQT08tps0.jpg",
            "link": "/card/series/900-104/Teoriya-bolshogo-vzryva.html",
            "year": "2007",
            "rating": "7.9",
            "tmdb_id": 1418,
            "isTV": true
        },
        {
            "name": "Сваты",
            "image": "https://image.tmdb.org/t/p/w500//7DtVbNXIwMCplhysJFJCANp6pwx.jpg",
            "link": "/card/series/900-105/Svaty.html",
            "year": "2008",
            "rating": "6.2",
            "tmdb_id": 46014,
            "isTV": true
        },
        {
            "name": "911: Служба спасения",
            "image": "https://image.tmdb.org/t/p/w500//9dNWZPjFWdKo5Avr5JEEzLShLMZ.jpg",
            "link": "/card/series/900-01/911-sluzhba-spaseniya.html",
            "year": "2018",
            "rating":"8.2",
            "tmdb_id": 75219,
            "isTV": true
        },
        {
            "name": "Сверхъестественное",
            "image": "https://image.tmdb.org/t/p/w500//hvO99pEfSBxF55clgs8r4mpRzr.jpg",
            "link": "/card/series/900-03/Sverhestestvennoe.html",
            "year": "2005",
            "rating":"8.3",
            "tmdb_id": 1622,
            "isTV": true
        },
        {
            "name": "Корона",
            "image": "https://image.tmdb.org/t/p/w500//iS2m3TYiThK43IC3Ygm4snyA4UM.jpg",
            "link": "/card/series/900-04/Korona.html",
            "year": "2016",
            "rating":"8.2",
            "tmdb_id": 65494,
            "isTV": true
        },
        {
            "name": "Острые козырьки",
            "image": "https://image.tmdb.org/t/p/w500//pVJzfWgb3sHN29hLaiI5jmBN9vx.jpg",
            "link": "/card/series/900-05/Ostrye-kozyrki.html",
            "year": "2013",
            "rating":"8.5",
            "tmdb_id": 60574,
            "isTV": true
        },
        {
            "name": "Гримм",
            "image": "https://image.tmdb.org/t/p/w500//lTmjyJwiMTLsCdzKjkkj2L9VyCd.jpg",
            "link": "/card/series/900-06/Grimm.html",
            "year": "2011",
            "rating":"8.3",
            "tmdb_id": 39351,
            "isTV": true
        },
        {
            "name": "Джентльмены",
            "image": "https://image.tmdb.org/t/p/w500//zRdUl8TxpXD3LTFqH9wiya14ZYS.jpg",
            "link": "/card/series/900-07/Dzhentlmeny.html",
            "year": "2024",
            "rating":"7.9",
            "tmdb_id": 236235,
            "isTV": true
        },
        {
            "name": "Бриджертоны",
            "image": "https://image.tmdb.org/t/p/w500//jMDY8c3HpkM5LmYr1Xiz7a0r0qk.jpg",
            "link": "/card/series/900-08/Bridzhertony.html",
            "year": "2020",
            "rating":"8.1",
            "tmdb_id": 91239,
            "isTV": true
        },
        {
            "name": "Лучше звоните Солу",
            "image": "https://image.tmdb.org/t/p/w500//rTjlrjxCnxiNNVo0PjqUSySoieH.jpg",
            "link": "/card/series/900-09/Luchshe-zvonite-Solu.html",
            "year": "2015",
            "rating":"8.7",
            "tmdb_id": 60059,
            "isTV": true
        },
        {
            "name": "Сто лет одиночества",
            "image": "https://image.tmdb.org/t/p/w500//vYtbH9Q5DaCDqzkB483dmYjfkA3.jpg",
            "link": "/card/series/900-10/Sto-let-odinochestva.html",
            "year": "2024",
            "rating":"8.0",
            "tmdb_id": 207333,
            "isTV": true
        },
        {
            "name": "Люцифер",
            "image": "https://image.tmdb.org/t/p/w500//A7IP83pBzpLCbU7hlchJXsfcF8j.jpg",
            "link": "/card/series/900-11/Lyucifer.html",
            "year": "2016",
            "rating":"8.5",
            "tmdb_id": 63174,
            "isTV": true
        },
        {
            "name": "Декстер: Новая кровь",
            "image": "https://image.tmdb.org/t/p/w500//6Dlx8ck7zRKIxnFNJ1G1tXZ6p9D.jpg",
            "link": "/card/series/900-12/Dekster-Novaya-krov.html",
            "year": "2021",
            "rating":"8.0",
            "tmdb_id": 131927,
            "isTV": true
        },
        {
            "name": "Дневники вампира",
            "image": "https://image.tmdb.org/t/p/w500//y8hcR1R8QmGs8uLHQhIFHgCFWDd.jpg",
            "link": "/card/series/900-13/Dnevniki-vampira.html",
            "year": "2009",
            "rating":"8.3",
            "tmdb_id": 18165,
            "isTV": true
        },
        {
            "name": "Шерлок",
            "image": "https://image.tmdb.org/t/p/w500//kuaBGwju6CParqos7afHNvNEIdD.jpg",
            "link": "/card/series/900-14/Sherlok.html",
            "year": "2010",
            "rating":"8.5",
            "tmdb_id": 19885,
            "isTV": true
        },
        {
            "name": "Тьма",
            "image": "https://image.tmdb.org/t/p/w500//ikhUNN25WVfMN2uvoJLLKYXp8jE.jpg",
            "link": "/card/series/900-15/Tma.html",
            "year": "2017",
            "rating":"8.4",
            "tmdb_id": 70523,
            "isTV": true
        },
        {
            "name": "Игра в кальмара",
            "image": "https://image.tmdb.org/t/p/w500//3vMCgpRa5cdutE56AXqeEkGHtxI.jpg",
            "link": "/card/series/900-16/Igra-v-kalmara.html",
            "year": "2021",
            "rating":"7.9",
            "tmdb_id": 93405,
            "isTV": true
        },
        {
            "name": "Тед Лассо",
            "image": "https://image.tmdb.org/t/p/w500//htV1GTyatTXJB589hjiqUQPegjd.jpg",
            "link": "/card/series/900-17/Ted-Lasso.html",
            "year": "2020",
            "rating":"8.4",
            "tmdb_id": 97546,
            "isTV": true
        },
        {
            "name": "Друзья",
            "image": "https://image.tmdb.org/t/p/w500//zBOs8S3UOHyWLzOl9gF8lknBxlL.jpg",
            "link": "/card/series/900-18/Druzya.html",
            "year": "1994",
            "rating":"8.4",
            "tmdb_id": 1668,
            "isTV": true
        },
        {
            "name": "Хороший доктор",
            "image": "https://image.tmdb.org/t/p/w500//c3WPgJl5OjAMJotI7qPeL1zgcCX.jpg",
            "link": "/card/series/900-19/Horoshij-doktor.html",
            "year": "2017",
            "rating":"8.5",
            "tmdb_id": 71712,
            "isTV": true
        },
        {
            "name": "Волчонок",
            "image": "https://image.tmdb.org/t/p/w500//bq0TmDgpYWrTuJVo8JpeMU3LLb8.jpg",
            "link": "/card/series/900-20/Volchonok.html",
            "year": "2011",
            "rating":"8.5",
            "tmdb_id": 34524,
            "isTV": true
        },
        {
            "name": "Мистер Робот",
            "image": "https://image.tmdb.org/t/p/w500//v0O3GfmruiKwBCFUKc1cEM1PVLF.jpg",
            "link": "/card/series/900-22/Mister-Robot.html",
            "year": "2015",
            "rating":"8.2",
            "tmdb_id": 62560,
            "isTV": true
        },
        {
            "name": "Мандалорец",
            "image": "https://image.tmdb.org/t/p/w500//3JcJfU9wm6sA2R6LQtnsBJsHMmY.jpg",
            "link": "/card/series/900-23/Mandalorec.html",
            "year": "2019",
            "rating":"8.4",
            "tmdb_id": 82856,
            "isTV": true
        },
        {
            "name": "Земля без людей",
            "image": "https://image.tmdb.org/t/p/w500//fRPUaAmxFtfhYPalD7Ru8Cu2MTr.jpg",
            "link": "/card/series/900-24/Zemlya-bez-lyudej.html",
            "year": "2024",
            "rating":"7.2",
            "tmdb_id": 250308,
            "isTV": true
        },
        {
            "name": "Американская история ужасов",
            "image": "https://image.tmdb.org/t/p/w500//gj2dFFgEHdhxqSBpD2oPyo4YmPD.jpg",
            "link": "/card/series/900-25/Amerikanskaya-istoriya-uzhasov.html",
            "year": "2011",
            "rating":"8.1",
            "tmdb_id": 1413,
            "isTV": true
        },
        {
            "name": "День Шакала",
            "image": "https://image.tmdb.org/t/p/w500//uFdIebgylj64d9ze6y1C5jsHUZZ.jpg",
            "link": "/card/series/900-26/Den-Shakala.html",
            "year": "2024",
            "rating":"8.3",
            "tmdb_id": 222766,
            "isTV": true
        },
        {
            "name": "Кросс",
            "image": "https://image.tmdb.org/t/p/w500//vjC4LAf7K6aXCWcp3CdinYsG0aG.jpg",
            "link": "/card/series/900-27/Kross.html",
            "year": "2024",
            "rating":"7.2",
            "tmdb_id": 213306,
            "isTV": true
        },
        {
            "name": "Ганнибал",
            "image": "https://image.tmdb.org/t/p/w500//cy5xnqFR88IG5RrHXxHlpqhLjEG.jpg",
            "link": "/card/series/900-28/Gannibal.html",
            "year": "2013",
            "rating":"8.2",
            "tmdb_id": 40008,
            "isTV": true
        },
        {
            "name": "Магазин светильников",
            "image": "https://image.tmdb.org/t/p/w500//edzQHpnGiwYYf1wRRv91iJETtWX.jpg",
            "link": "/card/series/900-29/Magazin-svetilnikov.html",
            "year": "2024",
            "rating":"8.6",
            "tmdb_id": 226529,
            "isTV": true
        },
        {
            "name": "Сексуальное просвещение",
            "image": "https://image.tmdb.org/t/p/w500//ig9FyX4AMOhJXKQkDmau0xX0DWy.jpg",
            "link": "/card/series/900-30/Seksualnoe-prosveshenie.html",
            "year": "2019",
            "rating":"8.2",
            "tmdb_id": 81356,
            "isTV": true
        },
        {
            "name": "Ловкий Плут",
            "image": "https://image.tmdb.org/t/p/w500//3xhycTWtx8TsQDllkQ4g7s2mGBR.jpg",
            "link": "/card/series/900-31/Lovki-Plut.html",
            "year": "2023",
            "rating":"8.0",
            "tmdb_id": 202208,
            "isTV": true
        },
        {
            "name": "Дорогуша",
            "image": "https://image.tmdb.org/t/p/w500//33DCNqCAtqL408AOYrzJ09NhiN7.jpg",
            "link": "/card/series/900-32/Dorogusha.html",
            "year": "2024",
            "rating":"7.6",
            "tmdb_id": 218347,
            "isTV": true
        },
        {
            "name": "Игра престолов",
            "image": "https://image.tmdb.org/t/p/w500//tbBQW8jpDH7RpAymMGnBluIsdmH.jpg",
            "link": "/card/series/900-33/Igra-prestolov.html",
            "year": "2011",
            "rating":"8.5",
            "tmdb_id": 1399,
            "isTV": true
        },
        {
            "name": "Древние",
            "image": "https://image.tmdb.org/t/p/w500//dsVB3Mqv5sHGGsu1SGuF3fahw0Z.jpg",
            "link": "/card/series/900-34/Drevnie.html",
            "year": "2013",
            "rating":"8.6",
            "tmdb_id": 46896,
            "isTV": true
        },
        {
            "name": "Отбросы",
            "image": "https://image.tmdb.org/t/p/w500//jpSJDe6TTnLL5Es9uZ8Viz6MMYV.jpg",
            "link": "/card/series/900-35/Otbrosy.html",
            "year": "2009",
            "rating":"7.6",
            "tmdb_id": 31295,
            "isTV": true
        },
        {
            "name": "Флэш",
            "image": "https://image.tmdb.org/t/p/w500//q14oRmj0ITMBzqHUdiGwXUIvg7t.jpg",
            "link": "/card/series/900-36/Flesh.html",
            "year": "2014",
            "rating":"7.8",
            "tmdb_id": 60735,
            "isTV": true
        },
        {
            "name": "Дом Дракона",
            "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/emAFaKrAn1mhJ3ZQbM2503a1X2s.jpg",
            "link": "/card/series/900-37/Dom-Drakona.html",
            "year": "2022",
            "rating":"8.4",
            "tmdb_id": 94997,
            "isTV": true
        },
        {
            "name": "Презумпция невиновности",
            "image": "https://image.tmdb.org/t/p/w500//l432WSWtwRw40R3IJuwakO0w6sq.jpg",
            "link": "/card/series/900-38/Prezumpciya-nevinovnosti.html",
            "year": "2024",
            "rating":"8.1",
            "tmdb_id": 156933,
            "isTV": true
        },
        {
            "name": "Обречённые на славу",
            "image": "https://image.tmdb.org/t/p/w500//4NHRDQa5WgX2guZDihQLLtifYs.jpg",
            "link": "/card/series/900-39/Obrechennye-na-slavu.html",
            "year": "2024",
            "rating":"7.5",
            "tmdb_id": 218589,
            "isTV": true
        },
        {
            "name": "Пацаны",
            "image": "https://image.tmdb.org/t/p/w500//3NqlBDpWI83TgQ9nmeFwTVxEmtZ.jpg",
            "link": "/card/series/900-40/Pacany.html",
            "year": "2019",
            "rating":"8.5",
            "tmdb_id": 76479,
            "isTV": true
        },
        {
            "name": "Очень странные дела",
            "image": "https://image.tmdb.org/t/p/w500//uKBjtMZ7yDlJovmqIOBe0ZVGdVM.jpg",
            "link": "/card/series/900-41/Ochen-strannye-dela.html",
            "year": "2016",
            "rating":"8.6",
            "tmdb_id": 66732,
            "isTV": true
        },
        {
            "name": "Шугар",
            "image": "https://image.tmdb.org/t/p/w500//z8rJ8FWiMpWt9ecbsVcxoE3UQxo.jpg",
            "link": "/card/series/900-42/Shugar.html",
            "year": "2024",
            "rating":"7.3",
            "tmdb_id": 203744,
            "isTV": true
        },
        {
            "name": "Охота за убийцей",
            "image": "https://image.tmdb.org/t/p/w500//lcoxNrC8Z00MiUynsqxNtwQDjvA.jpg",
            "link": "/card/series/900-43/Ohota-za-ubijcej.html",
            "year": "2024",
            "rating":"6.9",
            "tmdb_id": 155533,
            "isTV": true
        },
        {
            "name": "Созвездие",
            "image": "https://image.tmdb.org/t/p/w500//pon5QHLxrsgmyZKVSUdpXmHg08C.jpg",
            "link": "/card/series/900-45/Sozvezdie.html",
            "year": "2024",
            "rating":"7.2",
            "tmdb_id": 197125,
            "isTV": true
        },
        {
            "name": "Бригада",
            "image": "https://image.tmdb.org/t/p/w500//nZBVnI2gWZ4OFnpxU49j3kYavYz.jpg",
            "link": "/card/series/900-02/Brigada.html",
            "year": "2002",
            "rating":"7.8",
            "tmdb_id": 30877,
            "isTV": true
        },
        {
            "name": "Задача трёх тел",
            "image": "https://image.tmdb.org/t/p/w500//d4e2b1UiJNgU9V0kBvOxnbVPslE.jpg",
            "link": "/card/series/900-46/Zadacha-tryoh-tel.html",
            "year": "2024",
            "rating":"7.5",
            "tmdb_id": 108545,
            "isTV": true
        },
        {
            "name": "Хало",
            "image": "https://image.tmdb.org/t/p/w500//5SBcW0WyqxZyE7AolxfX1ift532.jpg",
            "link": "/card/series/900-47/Halo.html",
            "year": "2022",
            "rating":"8.3",
            "tmdb_id": 52814,
            "isTV": true
        },
        {
            "name": "Властелины воздуха",
            "image": "https://image.tmdb.org/t/p/w500//mAJJPhPJ0EbyemFho6Wtwibi7FZ.jpg",
            "link": "/card/series/900-48/Vlasteliny-vozduha.html",
            "year": "2024",
            "rating":"7.8",
            "tmdb_id": 46518,
            "isTV": true
        },
        {
            "name": "Лунный рыцарь",
            "image": "https://image.tmdb.org/t/p/w500//pygGowaXF87Mfomit3oekliBvt7.jpg",
            "link": "/card/series/900-49/Lunnyj-rycar.html",
            "year": "2022",
            "rating":"7.7",
            "tmdb_id": 92749,
            "isTV": true
        },
        {
            "name": "Извне",
            "image": "https://image.tmdb.org/t/p/w500//rGFRCzgScvIC9LCfqkdb9T7NIs0.jpg",
            "link": "/card/series/900-50/Izvne.html",
            "year": "2022",
            "rating":"8.2",
            "tmdb_id": 124364,
            "isTV": true
        },
        {
            "name": "Чернобыль",
            "image": "https://image.tmdb.org/t/p/w500//qhzSVp06AGGcziMoibInZ5PY0Eg.jpg",
            "link": "/card/series/900-51/Chernobyl.html",
            "year": "2019",
            "rating":"8.7",
            "tmdb_id": 87108,
            "isTV": true
        },
        {
            "name": "Ричер",
            "image": "https://image.tmdb.org/t/p/w500//zLqlW0rXmHwOZRhmOjeod14sGiT.jpg",
            "link": "/card/series/900-52/Dzhek-Richer.html",
            "year": "2022",
            "rating":"8.1",
            "tmdb_id": 108978,
            "isTV": true
        },
        {
            "name": "Фарго",
            "image": "https://image.tmdb.org/t/p/w500//r8HpRhKl5q0kiNehdjVOmTC7K7p.jpg",
            "link": "/card/series/900-53/Fargo.html",
            "year": "2014",
            "rating":"8.3",
            "tmdb_id": 60622,
            "isTV": true
        },
        {
            "name": "Третий лишний",
            "image": "https://image.tmdb.org/t/p/w500//cahNXUK7bp9RTPItIVyOF2z5m0L.jpg",
            "link": "/card/series/900-54/Tretij-lishnij.html",
            "year": "2024",
            "rating":"7.9",
            "tmdb_id": 201834,
            "isTV": true
        },
        {
            "name": "«Монарх»: Наследие монстров",
            "image": "https://image.tmdb.org/t/p/w500//kam0gTmqC0h68uLiRxamj38nkPX.jpg",
            "link": "/card/series/900-55/Monarh-Nasledie-monstrov.html",
            "year": "2023",
            "rating":"7.8",
            "tmdb_id": 202411,
            "isTV": true
        },
        {
            "name": "Пингвин",
            "image": "https://image.tmdb.org/t/p/w500//25dj85s5VtirRWF6rmO8TpZXHJV.jpg",
            "link": "/card/series/900-56/Pingvin.html",
            "year": "2024",
            "rating":"8.5",
            "tmdb_id": 194764,
            "isTV": true
        },
        {
            "name": "Ведьмак",
            "image": "https://image.tmdb.org/t/p/w500//rY2c2LhN07CRKlAbRaDZxN2XjvK.jpg",
            "link": "/card/series/900-57/Vedmak.html",
            "year": "2019",
            "rating":"8.0",
            "tmdb_id": 71912,
            "isTV": true
        },
        {
            "name": "Локи",
            "image": "https://image.tmdb.org/t/p/w500//fNTS8BOMmhYYM4FqLPLuJ6KRQEF.jpg",
            "link": "/card/series/900-58/Loki.html",
            "year": "2019",
            "rating":"8.2",
            "tmdb_id": 84958,
            "isTV": true
        },
        {
            "name": "Тысяча и одна ночь",
            "image": "https://image.tmdb.org/t/p/w500//vR9Dh1zc0yQSAln3bqqCPRndhEB.jpg",
            "link": "/card/series/900-59/Tysyacha-i-odna-noch.html",
            "year": "2024",
            "rating":"4.0",
            "tmdb_id": 246706,
            "isTV": true
        },
        {
            "name": "Зимний король",
            "image": "https://image.tmdb.org/t/p/w500//fYx5q9hPAmbDrWzsYUDhxZJnigC.jpg",
            "link": "/card/series/900-61/Zimnij-korol.html",
            "year": "2023",
            "rating":"6.8",
            "tmdb_id": 99737,
            "isTV": true
        },
        {
            "name": "Поколение «Ви»",
            "image": "https://image.tmdb.org/t/p/w500//2AVCQymHu0gj8Jwci2VxEuodZq4.jpg",
            "link": "/card/series/900-62/Pokolenie-Vi.html",
            "year": "2023",
            "rating":"7.9",
            "tmdb_id": 205715,
            "isTV": true
        },
        {
            "name": "Доисторическая планета",
            "image": "https://image.tmdb.org/t/p/w500//5mj82iMTp8UmnyXFaZbwRGuc81a.jpg",
            "link": "/card/series/900-63/Doistoricheskaya-planeta.html",
            "year": "2022",
            "rating":"8.3",
            "tmdb_id": 95171,
            "isTV": true
        },
        {
            "name": "Одни из нас",
            "image": "https://image.tmdb.org/t/p/w500//69loIrm9JPpPRE3Akw4yRoitSYn.jpg",
            "link": "/card/series/900-64/Odni-iz-nas.html",
            "year": "2023",
            "rating":"8.6",
            "tmdb_id": 100088,
            "isTV": true
        },
        {
            "name": "Захваченный рейс",
            "image": "https://image.tmdb.org/t/p/w500//v4oAWDy33lmKI7lsktThsYhp3zU.jpg",
            "link": "/card/series/900-65/Zahvachennyj-rejs.html",
            "year": "2023",
            "rating":"7.8",
            "tmdb_id": 198102,
            "isTV": true
        },
        {
            "name": "Скрежет металла",
            "image": "https://image.tmdb.org/t/p/w500//82HaUMIagdh5PLflUOVrHn5GsI9.jpg",
            "link": "/card/series/900-66/Skrezhet-metalla.html",
            "year": "2023",
            "rating":"7.9",
            "tmdb_id": 133748,
            "isTV": true
        },
        {
            "name": "Бумажный дом",
            "image": "https://image.tmdb.org/t/p/w500//x9YQ28gwAkAXCSw7n1cAsPbJaTF.jpg",
            "link": "/card/series/900-67/Bumazhnyj-dom.html",
            "year": "2017",
            "rating":"8.2",
            "tmdb_id": 71446,
            "isTV": true
        },
        {
            "name": "Любовь и смерть",
            "image": "https://image.tmdb.org/t/p/w500//tMm4sHiTkx8kaI71BcG2ELXRKfR.jpg",
            "link": "/card/series/900-68/Lyubov-i-smert.html",
            "year": "2023",
            "rating":"7.9",
            "tmdb_id": 124800,
            "isTV": true
        },
        {
            "name": "Цитадель",
            "image": "https://image.tmdb.org/t/p/w500//hwlI6qEtzFT47FAUMP3xac8qcnz.jpg",
            "link": "/card/series/900-69/Citadel.html",
            "year": "2023",
            "rating":"6.9",
            "tmdb_id": 114922,
            "isTV": true
        },
        {
            "name": "Экстраполяции",
            "image": "https://image.tmdb.org/t/p/w500//wzyKhC005b7wuCwfCgcKIIc7DWY.jpg",
            "link": "/card/series/900-70/Ekstrapolyacii.html",
            "year": "2023",
            "rating":"6.0",
            "tmdb_id": 138169,
            "isTV": true
        },
        {
            "name": "Фоллаут",
            "image": "https://image.tmdb.org/t/p/w500//tOrIGVF521WhBsIDwuGQ999ZbjV.jpg",
            "link": "/card/series/900-71/Fallout.html",
            "year": "2024",
            "rating":"8.3",
            "tmdb_id": 106379,
            "isTV": true
        },
        {
            "name": "Связь",
            "image": "https://image.tmdb.org/t/p/w500//u79ZbVgP5F8kugRHOrrAF78PFe1.jpg",
            "link": "/card/series/900-72/Svyaz.html",
            "year": "2023",
            "rating":"6.3",
            "tmdb_id": 128066,
            "isTV": true
        },
        {
            "name": "Настоящий детектив",
            "image": "https://image.tmdb.org/t/p/w500//1p60ehq2diow72QQC8pyppfexky.jpg",
            "link": "/card/series/900-73/Nastoyashij-detektiv.html",
            "year": "2014",
            "rating":"8.3",
            "tmdb_id": 46648,
            "isTV": true
        },
        {
            "name": "Всевидящее око",
            "image": "https://image.tmdb.org/t/p/w500//5axQCuuavbNOAICMa3tduIXQL5T.jpg",
            "link": "/card/series/900-74/Vsevidyashee-oko.html",
            "year": "2023",
            "rating":"6.7",
            "tmdb_id": 205440,
            "isTV": true
        },
        {
            "name": "Сёгун",
            "image": "https://image.tmdb.org/t/p/w500//cOKLRblbdBtcuf4TkAzsyJpZr23.jpg",
            "link": "/card/series/900-75/Syogun.html",
            "year": "2024",
            "rating":"8.5",
            "tmdb_id": 126308,
            "isTV": true
        },
        {
            "name": "Карнивал Роу",
            "image": "https://image.tmdb.org/t/p/w500//gdaKPawLiRqT44AqDJCnxBAsy2j.jpg",
            "link": "/card/series/900-76/Karnival-Rou.html",
            "year": "2019",
            "rating":"7.7",
            "tmdb_id": 90027,
            "isTV": true
        },
        {
            "name": "Сквозь снег",
            "image": "https://image.tmdb.org/t/p/w500//mNUE6FC57NcC9iC8QUCtlMEF5n8.jpg",
            "link": "/card/series/900-77/Skvoz-sneg.html",
            "year": "2020",
            "rating":"7.4",
            "tmdb_id": 79680,
            "isTV": true
        },
        {
            "name": "Ты",
            "image": "https://image.tmdb.org/t/p/w500//aSEYa7z10DC6o3NedSZEyJ6SBXv.jpg",
            "link": "/card/series/900-78/Ty.html",
            "year": "2018",
            "rating":"8.0",
            "tmdb_id": 78191,
            "isTV": true
        },
        {
            "name": "Мэйфейрские ведьмы",
            "image": "https://image.tmdb.org/t/p/w500//wTwlZ3W3euIZIWKnPqKjWARJA5v.jpg",
            "link": "/card/series/900-79/Mejfejrskie-vedmy.html",
            "year": "2023",
            "rating":"7.4",
            "tmdb_id": 207863,
            "isTV": true
        },
        {
            "name": "Наклз",
            "image": "https://image.tmdb.org/t/p/w500//zqT1Te9dnI3I8oDnDaLffFPaZ3c.jpg",
            "link": "/card/series/900-80/Naklz.html",
            "year": "2024",
            "rating":"7.4",
            "tmdb_id": 158300,
            "isTV": true
        },
        {
            "name": "1923",
            "image": "https://image.tmdb.org/t/p/w500//zgZRJZvZn5cpsWAB0zMUdad3iZd.jpg",
            "link": "/card/series/900-81/1923.html",
            "year": "2022",
            "rating":"8.1",
            "tmdb_id": 157744,
            "isTV": true
        },
        {
            "name": "Властелин колец: Кольца власти",
            "image": "https://image.tmdb.org/t/p/w500//pp5yf6xRMtySYgtVf5YTDYh7fof.jpg",
            "link": "/card/series/900-82/Vlastelin-kolec-Kolca-vlasti.html",
            "year": "2022",
            "rating":"7.3",
            "tmdb_id": 84773,
            "isTV": true
        },
        {
            "name": "Химия смерти",
            "image": "https://image.tmdb.org/t/p/w500//lUTPksMc9PhQCcWtWCmnQQrPC0B.jpg",
            "link": "/card/series/900-83/Himiya-smerti.html",
            "year": "2023",
            "rating":"6.6",
            "tmdb_id": 217180,
            "isTV": true
        },
        {
            "name": "Викинги: Вальхалла",
            "image": "https://image.tmdb.org/t/p/w500//zOB0Mo1rNUcfpVunce8gJjcvvSV.jpg",
            "link": "/card/series/900-84/Vikingi-Valhalla.html",
            "year": "2022",
            "rating":"7.7",
            "tmdb_id": 116135,
            "isTV": true
        },
        {
            "name": "Черное зеркало",
            "image": "https://image.tmdb.org/t/p/w500//rAfh65N51dtzew6r0vKCqnaiSyf.jpg",
            "link": "/card/series/900-85/Chernoe-zerkalo.html",
            "year": "2011",
            "rating":"8.3",
            "tmdb_id": 42009,
            "isTV": true
        },
        {
            "name": "Во все тяжкие",
            "image": "https://image.tmdb.org/t/p/w500//3NA1FOlnjE909OyVT534B7fw5h5.jpg",
            "link": "/card/series/900-86/Vo-vse-tyazhkie.html",
            "year": "2008",
            "rating":"8.9",
            "tmdb_id": 1396,
            "isTV": true
        },
        {
            "name": "Ходячие мертвецы: Выжившие",
            "image": "https://image.tmdb.org/t/p/w500//rhN08H5Yg7xAFfBzeDzVV9GAwDj.jpg",
            "link": "/card/series/900-44/Hodyachie-mertvecy-Vyzhivshie.html",
            "year": "2024",
            "rating":"8.0",
            "tmdb_id": 206586,
            "isTV": true
        },
        {
            "name": "Ходячие мертвецы: Дэрил Диксон",
            "image": "https://image.tmdb.org/t/p/w500//kRTaNKcs3RQJCB626y1mGOTHVYU.jpg",
            "link": "/card/series/900-60/Hodyachie-mertvecy-Deril-Dikson.html",
            "year": "2023",
            "rating":"8.1",
            "tmdb_id": 211684,
            "isTV": true
        },
        {
            "name": "Ходячие мертвецы: Мертвый город",
            "image": "https://image.tmdb.org/t/p/w500//mx5CPdGPLTsebUGcKA54Gs2i81U.jpg",
            "link": "/card/series/900-87/Hodyachie-mertvecy-Mertvyj-gorod.html",
            "year": "2023",
            "rating":"8.0",
            "tmdb_id": 194583,
            "isTV": true
        },
        {
            "name": "Истории ходячих мертвецов",
            "image": "https://image.tmdb.org/t/p/original/rlC90W3krCHQ727fXKYBYLqSmeP.jpg",
            "link": "/card/series/900-88/Istorii-hodyachih-mertvecov.html",
            "year": "2022",
            "rating":"7.2",
            "tmdb_id": 136248,
            "isTV": true
        },
        {
            "name": "Ходячие мертвецы: Мир за пределами",
            "image": "https://image.tmdb.org/t/p/original/4DuXNzJrdommCOFBM3re20mM8bd.jpg",
            "link": "/card/series/900-89/Hodyachie-mertvecy-Mir-za-predelami.html",
            "year": "2020",
            "rating":"7.4",
            "tmdb_id": 94305,
            "isTV": true
        },
        {
            "name": "Бойтесь ходячих мертвецов",
            "image": "https://image.tmdb.org/t/p/w500//3BWbdYHwSxd3rkHkLip8gFxaPZv.jpg",
            "link": "/card/series/900-90/Bojtes-hodyachih-mertvecov.html",
            "year": "2015",
            "rating":"7.7",
            "tmdb_id": 62286,
            "isTV": true
        },
        {
            "name": "Ходячие мертвецы",
            "image": "https://image.tmdb.org/t/p/w500//3metsxLVhlJU0mNj5gVfKIih0EF.jpg",
            "link": "/card/series/900-21/Hodyachie-mertvecy.html",
            "year": "2010",
            "rating":"8.1",
            "tmdb_id": 1402,
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