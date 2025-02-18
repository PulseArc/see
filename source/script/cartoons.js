

// Генерация карточек с случайными рейтингами
// Мультфильмы
document.addEventListener('DOMContentLoaded', function () {
    generateRandomCards();
});

function generateRandomCards() {
    var cardData = [{
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
            "name": "Трансформеры: Начало",
            "image": "https://image.tmdb.org/t/p/w500//47mnEdahUv5I28CKuBx5drLRcuK.jpg",
            "link": "#",
            "year": "2024",
            "rating":"7.6"
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
            "name": "Дневник слабака",
            "image": "http://image.tmdb.org/t/p/w500//OR5miI8pm2Shmeoha0zHk97ceK.jpg",
            "link": "#",
            "year": "2021",
            "rating":"6.2"
        },
        {
            "name": "Не бей копытом",
            "image": "http://image.tmdb.org/t/p/w500//3YteNf7HJvJT9IRxpiISoyvRoRR.jpg",
            "link": "#",
            "year": "2004",
            "rating":"6.1"
        },
        {
            "name": "Большое путешествие",
            "image": "http://image.tmdb.org/t/p/w500//82cjRTHAsrNBRWfMJ8VzrvXcYfX.jpg",
            "link": "#",
            "year": "2006",
            "rating":"5.5"
        },
        {
            "name": "Лерой и Стич",
            "image": "http://image.tmdb.org/t/p/w500//mVXTQVYBSdhGuNWzpbF9ULt62jH.jpg",
            "link": "#",
            "year": "2006",
            "rating":"6.6"
        },
        {
            "name": "Базз Лайтер",
            "image": "http://image.tmdb.org/t/p/w500//DQU4vUTMoAlUGJIC5hNfHPVELz.jpg",
            "link": "#",
            "year": "2022",
            "rating":"6.9"
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