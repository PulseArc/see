


// Генерация карточек с случайными рейтингами
// Мультфильмы
document.addEventListener('DOMContentLoaded', function () {
    generateRandomCards();
});

function generateRandomCards() {
    var cardData = [
        {
            "name": "911 служба спасения",
            "image": "http://image.tmdb.org/t/p/w500//9dNWZPjFWdKo5Avr5JEEzLShLMZ.jpg",
            "link": "/see/card/series/900-01/911-sluzhba-spaseniya.html",
            "year": "2018",
            "rating":"8.2"
        },
        {
            "name": "Сверхъестественное",
            "image": "http://image.tmdb.org/t/p/w500//hvO99pEfSBxF55clgs8r4mpRzr.jpg",
            "link": "/see/card/series/900-03/Sverhestestvennoe.html",
            "year": "2005",
            "rating":"8.3"
        },
        {
            "name": "Корона",
            "image": "http://image.tmdb.org/t/p/w500//iS2m3TYiThK43IC3Ygm4snyA4UM.jpg",
            "link": "/see/card/series/900-04/Korona.html",
            "year": "2016",
            "rating":"8.2"
        },
        {
            "name": "Острые козырьки",
            "image": "http://image.tmdb.org/t/p/w500//pVJzfWgb3sHN29hLaiI5jmBN9vx.jpg",
            "link": "/see/card/series/900-05/Ostrye-kozyrki.html",
            "year": "2013",
            "rating":"8.5"
        },
        {
            "name": "Гримм",
            "image": "http://image.tmdb.org/t/p/w500//lTmjyJwiMTLsCdzKjkkj2L9VyCd.jpg",
            "link": "/see/card/series/900-06/Grimm.html",
            "year": "2011",
            "rating":"8.3"
        },
        {
            "name": "Джентльмены",
            "image": "https://image.tmdb.org/t/p/w500//zRdUl8TxpXD3LTFqH9wiya14ZYS.jpg",
            "link": "/see/card/series/900-07/Dzhentlmeny.html",
            "year": "2024",
            "rating":"7.9"
        },
        {
            "name": "Бриджертоны",
            "image": "https://image.tmdb.org/t/p/w500//jMDY8c3HpkM5LmYr1Xiz7a0r0qk.jpg",
            "link": "/see/card/series/900-08/Bridzhertony.html",
            "year": "2020",
            "rating":"8.1"
        },
        {
            "name": "Лучше звоните Солу",
            "image": "https://image.tmdb.org/t/p/w500//rTjlrjxCnxiNNVo0PjqUSySoieH.jpg",
            "link": "/see/card/series/900-09/Luchshe-zvonite-Solu.html",
            "year": "2015",
            "rating":"8.7"
        },
        {
            "name": "Сто лет одиночества",
            "image": "https://image.tmdb.org/t/p/w500//vYtbH9Q5DaCDqzkB483dmYjfkA3.jpg",
            "link": "/see/card/series/900-10/Sto-let-odinochestva.html",
            "year": "2024",
            "rating":"8.0"
        },
        {
            "name": "Люцифер",
            "image": "https://image.tmdb.org/t/p/w500//A7IP83pBzpLCbU7hlchJXsfcF8j.jpg",
            "link": "/see/card/series/900-11/Lyucifer.html",
            "year": "2016",
            "rating":"8.5"
        },
        {
            "name": "Декстер: Новая кровь",
            "image": "https://image.tmdb.org/t/p/w500//6Dlx8ck7zRKIxnFNJ1G1tXZ6p9D.jpg",
            "link": "/see/card/series/900-12/Dekster-Novaya-krov.html",
            "year": "2021",
            "rating":"8.0"
        },
        {
            "name": "Дневники вампира",
            "image": "https://image.tmdb.org/t/p/w500//y8hcR1R8QmGs8uLHQhIFHgCFWDd.jpg",
            "link": "/see/card/series/900-13/Dnevniki-vampira.html",
            "year": "2009",
            "rating":"8.3"
        },
        {
            "name": "Шерлок",
            "image": "https://image.tmdb.org/t/p/w500//kuaBGwju6CParqos7afHNvNEIdD.jpg",
            "link": "/see/card/series/900-14/Sherlok.html",
            "year": "2010",
            "rating":"8.5"
        },
        {
            "name": "Тьма",
            "image": "https://image.tmdb.org/t/p/w500//ikhUNN25WVfMN2uvoJLLKYXp8jE.jpg",
            "link": "/see/card/series/900-15/Tma.html",
            "year": "2017",
            "rating":"8.4"
        },
        {
            "name": "Игра в кальмара",
            "image": "https://image.tmdb.org/t/p/w500//3vMCgpRa5cdutE56AXqeEkGHtxI.jpg",
            "link": "/see/card/series/900-16/Igra-v-kalmara.html",
            "year": "2021",
            "rating":"7.9"
        },
        {
            "name": "Тед Лассо",
            "image": "https://image.tmdb.org/t/p/w500//htV1GTyatTXJB589hjiqUQPegjd.jpg",
            "link": "/see/card/series/900-17/Ted-Lasso.html",
            "year": "2020",
            "rating":"8.4"
        },
        {
            "name": "Друзья",
            "image": "https://image.tmdb.org/t/p/w500//zBOs8S3UOHyWLzOl9gF8lknBxlL.jpg",
            "link": "/see/card/series/900-18/Druzya.html",
            "year": "1994",
            "rating":"8.4"
        },
        {
            "name": "Хороший доктор",
            "image": "https://image.tmdb.org/t/p/w500//c3WPgJl5OjAMJotI7qPeL1zgcCX.jpg",
            "link": "/see/card/series/900-19/Horoshij-doktor.html",
            "year": "2017",
            "rating":"8.5"
        },
        {
            "name": "Волчонок",
            "image": "https://image.tmdb.org/t/p/w500//bq0TmDgpYWrTuJVo8JpeMU3LLb8.jpg",
            "link": "/see/card/series/900-20/Volchonok.html",
            "year": "2011",
            "rating":"8.5"
        },
        {
            "name": "Ходячие мертвецы",
            "image": "https://image.tmdb.org/t/p/w500//3metsxLVhlJU0mNj5gVfKIih0EF.jpg",
            "link": "/see/card/series/900-21/Hodyachie-mertvecy.html",
            "year": "2010",
            "rating":"8.1"
        },
        {
            "name": "Мистер Робот",
            "image": "https://image.tmdb.org/t/p/w500//v0O3GfmruiKwBCFUKc1cEM1PVLF.jpg",
            "link": "/see/card/series/900-22/Mister-Robot.html",
            "year": "2015",
            "rating":"8.2"
        },
        {
            "name": "Мандалорец",
            "image": "https://image.tmdb.org/t/p/w500//3JcJfU9wm6sA2R6LQtnsBJsHMmY.jpg",
            "link": "/see/card/series/900-23/Mandalorec.html",
            "year": "2019",
            "rating":"8.4"
        },
        {
            "name": "Земля без людей",
            "image": "https://image.tmdb.org/t/p/w500//fRPUaAmxFtfhYPalD7Ru8Cu2MTr.jpg",
            "link": "/see/card/series/900-24/Zemlya-bez-lyudej.html",
            "year": "2024",
            "rating":"7.2"
        },
        {
            "name": "Американская история ужасов",
            "image": "https://image.tmdb.org/t/p/w500//gj2dFFgEHdhxqSBpD2oPyo4YmPD.jpg",
            "link": "/see/card/series/900-25/Amerikanskaya-istoriya-uzhasov.html",
            "year": "2011",
            "rating":"8.1"
        },
        {
            "name": "День Шакала",
            "image": "https://image.tmdb.org/t/p/w500//uFdIebgylj64d9ze6y1C5jsHUZZ.jpg",
            "link": "/see/card/series/900-26/Den-Shakala.html",
            "year": "2024",
            "rating":"8.3"
        },
        {
            "name": "Кросс",
            "image": "https://image.tmdb.org/t/p/w500//vjC4LAf7K6aXCWcp3CdinYsG0aG.jpg",
            "link": "/see/card/series/900-27/Kross.html",
            "year": "2024",
            "rating":"7.2"
        },
        {
            "name": "Ганнибал",
            "image": "https://image.tmdb.org/t/p/w500//cy5xnqFR88IG5RrHXxHlpqhLjEG.jpg",
            "link": "/see/card/series/900-28/Gannibal.html",
            "year": "2013",
            "rating":"8.2"
        },
        {
            "name": "Магазин светильников",
            "image": "https://image.tmdb.org/t/p/w500//edzQHpnGiwYYf1wRRv91iJETtWX.jpg",
            "link": "/see/card/series/900-29/Magazin-svetilnikov.html",
            "year": "2024",
            "rating":"8.6"
        },
        {
            "name": "Сексуальное просвещение",
            "image": "https://image.tmdb.org/t/p/w500//ig9FyX4AMOhJXKQkDmau0xX0DWy.jpg",
            "link": "/see/card/series/900-30/Seksualnoe-prosveshenie.html",
            "year": "2019",
            "rating":"8.2"
        },
        {
            "name": "Ловкий Плут",
            "image": "https://image.tmdb.org/t/p/w500//3xhycTWtx8TsQDllkQ4g7s2mGBR.jpg",
            "link": "/see/card/series/900-31/Lovki-Plut.html",
            "year": "2023",
            "rating":"8.0"
        },
        {
            "name": "Дорогуша",
            "image": "https://image.tmdb.org/t/p/w500//33DCNqCAtqL408AOYrzJ09NhiN7.jpg",
            "link": "/see/card/series/900-32/Dorogusha.html",
            "year": "2024",
            "rating":"7.6"
        },
        {
            "name": "Игра престолов",
            "image": "https://image.tmdb.org/t/p/w500//tbBQW8jpDH7RpAymMGnBluIsdmH.jpg",
            "link": "/see/card/series/900-33/Igra-prestolov.html",
            "year": "2011",
            "rating":"8.5"
        },
        {
            "name": "Древние",
            "image": "https://image.tmdb.org/t/p/w500//dsVB3Mqv5sHGGsu1SGuF3fahw0Z.jpg",
            "link": "/see/card/series/900-34/Drevnie.html",
            "year": "2013",
            "rating":"8.6"
        },
        {
            "name": "Отбросы",
            "image": "https://image.tmdb.org/t/p/w500//jpSJDe6TTnLL5Es9uZ8Viz6MMYV.jpg",
            "link": "/see/card/series/900-35/Otbrosy.html",
            "year": "2009",
            "rating":"7.6"
        },
        {
            "name": "Флэш",
            "image": "https://image.tmdb.org/t/p/w500//q14oRmj0ITMBzqHUdiGwXUIvg7t.jpg",
            "link": "/see/card/series/900-36/Flesh.html",
            "year": "2014",
            "rating":"7.8"
        },
        {
            "name": "Дом Дракона",
            "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/emAFaKrAn1mhJ3ZQbM2503a1X2s.jpg",
            "link": "/see/card/series/900-37/Dom-Drakona.html",
            "year": "2022",
            "rating":"8.4"
        },
        {
            "name": "Презумпция невиновности",
            "image": "https://image.tmdb.org/t/p/w500//l432WSWtwRw40R3IJuwakO0w6sq.jpg",
            "link": "/see/card/series/900-38/Prezumpciya-nevinovnosti.html",
            "year": "2024",
            "rating":"8.1"
        },
        {
            "name": "Обречённые на славу",
            "image": "https://image.tmdb.org/t/p/w500//4NHRDQa5WgX2guZDihQLLtifYs.jpg",
            "link": "/see/card/series/900-39/Obrechennye-na-slavu.html",
            "year": "2024",
            "rating":"7.5"
        },
        {
            "name": "Пацаны",
            "image": "http://image.tmdb.org/t/p/w500//3NqlBDpWI83TgQ9nmeFwTVxEmtZ.jpg",
            "link": "/see/card/series/900-40/Pacany.html",
            "year": "2019",
            "rating":"8.5"
        },
        {
            "name": "Очень странные дела",
            "image": "https://image.tmdb.org/t/p/w500//uKBjtMZ7yDlJovmqIOBe0ZVGdVM.jpg",
            "link": "/see/card/series/900-41/Ochen-strannye-dela.html",
            "year": "2016",
            "rating":"8.6"
        },
        {
            "name": "Шугар",
            "image": "https://image.tmdb.org/t/p/w500//z8rJ8FWiMpWt9ecbsVcxoE3UQxo.jpg",
            "link": "/see/card/series/900-42/Shugar.html",
            "year": "2024",
            "rating":"7.3"
        },
        {
            "name": "Охота за убийцей",
            "image": "https://image.tmdb.org/t/p/w500//lcoxNrC8Z00MiUynsqxNtwQDjvA.jpg",
            "link": "/see/card/series/900-43/Ohota-za-ubijcej.html",
            "year": "2024",
            "rating":"6.9"
        },
        {
            "name": "Ходячие мертвецы: Выжившие",
            "image": "https://image.tmdb.org/t/p/w500//rhN08H5Yg7xAFfBzeDzVV9GAwDj.jpg",
            "link": "/see/card/series/900-44/Hodyachie-mertvecy-Vyzhivshie.html",
            "year": "2024",
            "rating":"8.0"
        },
        {
            "name": "Созвездие",
            "image": "https://image.tmdb.org/t/p/w500//pon5QHLxrsgmyZKVSUdpXmHg08C.jpg",
            "link": "/see/card/series/900-45/Sozvezdie.html",
            "year": "2024",
            "rating":"7.2"
        },
        {
            "name": "Бригада",
            "image": "http://image.tmdb.org/t/p/w500//nZBVnI2gWZ4OFnpxU49j3kYavYz.jpg",
            "link": "/see/card/series/900-02/Brigada.html",
            "year": "2002",
            "rating":"7.8"
        },
        {
            "name": "Задача трёх тел",
            "image": "https://image.tmdb.org/t/p/w500//d4e2b1UiJNgU9V0kBvOxnbVPslE.jpg",
            "link": "/see/card/series/900-46/Zadacha-tryoh-tel.html",
            "year": "2024",
            "rating":"7.5"
        },
        {
            "name": "Хало",
            "image": "https://image.tmdb.org/t/p/w500//5SBcW0WyqxZyE7AolxfX1ift532.jpg",
            "link": "/see/card/series/900-47/Halo.html",
            "year": "2022",
            "rating":"8.3"
        },
        {
            "name": "Властелины воздуха",
            "image": "http://image.tmdb.org/t/p/w500//mAJJPhPJ0EbyemFho6Wtwibi7FZ.jpg",
            "link": "/see/card/series/900-48/Vlasteliny-vozduha.html",
            "year": "2024",
            "rating":"7.8"
        },
        {
            "name": "Лунный рыцарь",
            "image": "http://image.tmdb.org/t/p/w500//pygGowaXF87Mfomit3oekliBvt7.jpg",
            "link": "/see/card/series/900-49/Lunnyj-rycar.html",
            "year": "2022",
            "rating":"7.7"
        },
        {
            "name": "Извне",
            "image": "https://image.tmdb.org/t/p/w500//rGFRCzgScvIC9LCfqkdb9T7NIs0.jpg",
            "link": "/see/card/series/900-50/Izvne.html",
            "year": "2022",
            "rating":"8.2"
        },
        {
            "name": "Чернобыль",
            "image": "https://image.tmdb.org/t/p/w500//qhzSVp06AGGcziMoibInZ5PY0Eg.jpg",
            "link": "/see/card/series/900-51/Chernobyl.html",
            "year": "2019",
            "rating":"8.7"
        },
        {
            "name": "Ричер",
            "image": "http://image.tmdb.org/t/p/w500//zLqlW0rXmHwOZRhmOjeod14sGiT.jpg",
            "link": "/see/card/series/900-52/Dzhek-Richer.html",
            "year": "2022",
            "rating":"8.1"
        },
        {
            "name": "Фарго",
            "image": "http://image.tmdb.org/t/p/w500//r8HpRhKl5q0kiNehdjVOmTC7K7p.jpg",
            "link": "/see/card/series/900-53/Fargo.html",
            "year": "2014",
            "rating":"8.3"
        },
        {
            "name": "Третий лишний",
            "image": "https://image.tmdb.org/t/p/w500//cahNXUK7bp9RTPItIVyOF2z5m0L.jpg",
            "link": "/see/card/series/900-54/Tretij-lishnij.html",
            "year": "2024",
            "rating":"7.9"
        },
        {
            "name": "«Монарх»: Наследие монстров",
            "image": "https://image.tmdb.org/t/p/w500//kam0gTmqC0h68uLiRxamj38nkPX.jpg",
            "link": "/see/card/series/900-55/Monarh-Nasledie-monstrov.html",
            "year": "2023",
            "rating":"7.8"
        },
        {
            "name": "Пингвин",
            "image": "https://image.tmdb.org/t/p/w500//25dj85s5VtirRWF6rmO8TpZXHJV.jpg",
            "link": "/see/card/series/900-56/Pingvin.html",
            "year": "2024",
            "rating":"8.5"
        },
        {
            "name": "Ведьмак",
            "image": "https://image.tmdb.org/t/p/w500//rY2c2LhN07CRKlAbRaDZxN2XjvK.jpg",
            "link": "/see/card/series/900-57/Vedmak.html",
            "year": "2019",
            "rating":"8.0"
        },
        {
            "name": "Локи",
            "image": "https://image.tmdb.org/t/p/w500//fNTS8BOMmhYYM4FqLPLuJ6KRQEF.jpg",
            "link": "/see/card/series/900-58/Loki.html",
            "year": "2019",
            "rating":"8.2"
        },
        {
            "name": "Тысяча и одна ночь",
            "image": "https://image.tmdb.org/t/p/w500//vR9Dh1zc0yQSAln3bqqCPRndhEB.jpg",
            "link": "/see/card/series/900-59/Tysyacha-i-odna-noch.html",
            "year": "2024",
            "rating":"4.0"
        },
        {
            "name": "Ходячие мертвецы: Дэрил Диксон",
            "image": "https://image.tmdb.org/t/p/w500//kRTaNKcs3RQJCB626y1mGOTHVYU.jpg",
            "link": "/see/card/series/900-60/Hodyachie-mertvecy-Deril-Dikson.html",
            "year": "2023",
            "rating":"8.1"
        },
        {
            "name": "Зимний король",
            "image": "https://image.tmdb.org/t/p/w500//fYx5q9hPAmbDrWzsYUDhxZJnigC.jpg",
            "link": "/see/card/series/900-61/Zimnij-korol.html",
            "year": "2023",
            "rating":"6.8"
        },
        {
            "name": "Поколение «Ви»",
            "image": "https://image.tmdb.org/t/p/w500//2AVCQymHu0gj8Jwci2VxEuodZq4.jpg",
            "link": "/see/card/series/900-62/Pokolenie-Vi.html",
            "year": "2023",
            "rating":"7.9"
        },
        {
            "name": "Доисторическая планета",
            "image": "https://image.tmdb.org/t/p/w500//5mj82iMTp8UmnyXFaZbwRGuc81a.jpg",
            "link": "/see/card/series/900-63/Doistoricheskaya-planeta.html",
            "year": "2022",
            "rating":"8.3"
        },
        {
            "name": "Одни из нас",
            "image": "https://image.tmdb.org/t/p/w500//69loIrm9JPpPRE3Akw4yRoitSYn.jpg",
            "link": "/see/card/series/900-64/Odni-iz-nas.html",
            "year": "2023",
            "rating":"8.6"
        },
        {
            "name": "Захваченный рейс",
            "image": "https://image.tmdb.org/t/p/w500//v4oAWDy33lmKI7lsktThsYhp3zU.jpg",
            "link": "/see/card/series/900-65/Zahvachennyj-rejs.html",
            "year": "2023",
            "rating":"7.8"
        },
        {
            "name": "Скрежет металла",
            "image": "https://image.tmdb.org/t/p/w500//82HaUMIagdh5PLflUOVrHn5GsI9.jpg",
            "link": "/see/card/series/900-66/Skrezhet-metalla.html",
            "year": "2023",
            "rating":"7.9"
        },
        {
            "name": "Бумажный дом",
            "image": "https://image.tmdb.org/t/p/w500//x9YQ28gwAkAXCSw7n1cAsPbJaTF.jpg",
            "link": "/see/card/series/900-67/Bumazhnyj-dom.html",
            "year": "2017",
            "rating":"8.2"
        },
        {
            "name": "Любовь и смерть ",
            "image": "https://image.tmdb.org/t/p/w500//tMm4sHiTkx8kaI71BcG2ELXRKfR.jpg",
            "link": "/see/card/series/900-68/Lyubov-i-smert.html",
            "year": "2023",
            "rating":"7.9"
        },
        {
            "name": "Цитадель",
            "image": "https://image.tmdb.org/t/p/w500//hwlI6qEtzFT47FAUMP3xac8qcnz.jpg",
            "link": "/see/card/series/900-69/Citadel.html",
            "year": "2023",
            "rating":"6.9"
        },
        {
            "name": "Экстраполяции",
            "image": "https://image.tmdb.org/t/p/w500//wzyKhC005b7wuCwfCgcKIIc7DWY.jpg",
            "link": "/see/card/series/900-70/Ekstrapolyacii.html",
            "year": "2023",
            "rating":"6.0"
        },
        {
            "name": "Фоллаут",
            "image": "https://image.tmdb.org/t/p/w500//tOrIGVF521WhBsIDwuGQ999ZbjV.jpg",
            "link": "/see/card/series/900-71/Fallout.html",
            "year": "2024",
            "rating":"8.3"
        },
        {
            "name": "Связь",
            "image": "https://image.tmdb.org/t/p/w500//u79ZbVgP5F8kugRHOrrAF78PFe1.jpg",
            "link": "/see/card/series/900-72/Svyaz.html",
            "year": "2023",
            "rating":"6.3"
        },
        {
            "name": "Настоящий детектив",
            "image": "http://image.tmdb.org/t/p/w500//1p60ehq2diow72QQC8pyppfexky.jpg",
            "link": "/see/card/series/900-73/Nastoyashij-detektiv.html",
            "year": "2014",
            "rating":"8.3"
        },
        {
            "name": "Всевидящее око",
            "image": "https://image.tmdb.org/t/p/w500//5axQCuuavbNOAICMa3tduIXQL5T.jpg",
            "link": "/see/card/series/900-74/Vsevidyashee-oko.html",
            "year": "2023",
            "rating":"6.7"
        },
        {
            "name": "Сёгун",
            "image": "https://image.tmdb.org/t/p/w500//cOKLRblbdBtcuf4TkAzsyJpZr23.jpg",
            "link": "/see/card/series/900-75/Syogun.html",
            "year": "2024",
            "rating":"8.5"
        },
        {
            "name": "Карнивал Роу",
            "image": "https://image.tmdb.org/t/p/w500//gdaKPawLiRqT44AqDJCnxBAsy2j.jpg",
            "link": "/see/card/series/900-76/Karnival-Rou.html",
            "year": "2019",
            "rating":"7.7"
        },
        {
            "name": "Сквозь снег",
            "image": "https://image.tmdb.org/t/p/w500//mNUE6FC57NcC9iC8QUCtlMEF5n8.jpg",
            "link": "/see/card/series/900-77/Skvoz-sneg.html",
            "year": "2020",
            "rating":"7.4"
        },
        {
            "name": "Ты",
            "image": "https://image.tmdb.org/t/p/w500//aSEYa7z10DC6o3NedSZEyJ6SBXv.jpg",
            "link": "/see/card/series/900-78/Ty.html",
            "year": "2018",
            "rating":"8.0"
        },
        {
            "name": "Мэйфейрские ведьмы",
            "image": "http://image.tmdb.org/t/p/w500//wTwlZ3W3euIZIWKnPqKjWARJA5v.jpg",
            "link": "/see/card/series/900-79/Mejfejrskie-vedmy.html",
            "year": "2023",
            "rating":"7.4"
        },
        {
            "name": "Наклз",
            "image": "https://image.tmdb.org/t/p/w500//zqT1Te9dnI3I8oDnDaLffFPaZ3c.jpg",
            "link": "/see/card/series/900-80/Naklz.html",
            "year": "2024",
            "rating":"7.4"
        },
        {
            "name": "1923",
            "image": "https://image.tmdb.org/t/p/w500//zgZRJZvZn5cpsWAB0zMUdad3iZd.jpg",
            "link": "/see/card/series/900-81/1923.html",
            "year": "2022",
            "rating":"8.1"
        },
        {
            "name": "Властелин колец: Кольца власти",
            "image": "http://image.tmdb.org/t/p/w500//pp5yf6xRMtySYgtVf5YTDYh7fof.jpg",
            "link": "/see/card/series/900-82/Vlastelin-kolec-Kolca-vlasti.html",
            "year": "2022",
            "rating":"7.3"
        },
        {
            "name": "Химия смерти",
            "image": "https://image.tmdb.org/t/p/w500//lUTPksMc9PhQCcWtWCmnQQrPC0B.jpg",
            "link": "/see/card/series/900-83/Himiya-smerti.html",
            "year": "2023",
            "rating":"6.6"
        },
        {
            "name": "Викинги: Вальхалла",
            "image": "https://image.tmdb.org/t/p/w500//zOB0Mo1rNUcfpVunce8gJjcvvSV.jpg",
            "link": "/see/card/series/900-84/Vikingi-Valhalla.html",
            "year": "2022",
            "rating":"7.7"
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