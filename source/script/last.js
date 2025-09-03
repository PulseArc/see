document.addEventListener('DOMContentLoaded', function () {
    generateLastCards();
});

function generateLastCards() {
    var cardData = [
        {
            "name": "Миллион способов потерять голову",
            "image": "https://image.tmdb.org/t/p/w500//oza59UpAODrr1xSvtoNudWShuut.jpg",
            "link": "/card/movies/800-116/Million-sposobov-poteryat-golovu.html",
            "year": "2014",
            "rating": "6.0"
        },
        {
            "name": "Мой пингвин",
            "image": "https://image.tmdb.org/t/p/w500//n5yjFZLh6sx04B6YKynae1myD2X.jpg",
            "link": "/card/movies/800-129/Moj-pingvin.html",
            "year": "2024",
            "rating": "7.5"
        },
        {
            "name": "Бегущий по лезвию 2049",
            "image": "https://image.tmdb.org/t/p/w500//kAq1RFHqtZrBvKve7GOGdgUU399.jpg",
            "link": "/card/movies/800-16/Begushij-po-lezviyu-2049.html",
            "year": "2017",
            "rating": "7.6",
            "genres": ["Фантастика", "Драма"]
        },
        {
            "name": "Топ Ган: Мэверик",
            "image": "https://image.tmdb.org/t/p/w500//niNo4qTtIule2vvMFW05amvMtOB.jpg",
            "link": "/card/movies/800-10/Top-Gan-Meverik.html",
            "year": "2022",
            "rating": "8.2"
        },
        {
            "name": "Особняк с привидениями",
            "image": "https://image.tmdb.org/t/p/w500//pE0LqHpxaQvKZCuNR2EikRNO39e.jpg",
            "link": "/card/movies/800-294/Osobnyak-s-privideniyami.html",
            "year": "2023",
            "rating": "6.5"
        },
        {
            "name": "Джобс: Империя соблазна",
            "image": "https://image.tmdb.org/t/p/w500//vPuWVOBvMsnpdIT8Qb2suLhIFSi.jpg",
            "link": "/card/movies/800-42/Dzhobs-Imperiya-soblazna.html",
            "year": "2013",
            "rating": "6.1"
        },
        {
            "name": "Тайна красной планеты",
            "image": "https://image.tmdb.org/t/p/w500//mD4BnU0MTon8bhuJPCrc82IXLtp.jpg",
            "link": "/card/cartoons/500-07/Tajna-krasnoj-planety.html",
            "year": "2011",
            "rating": "6.0"
        },
        {
            "name": "Игра на понижение",
            "image": "https://image.tmdb.org/t/p/w500//i46ouFO2WBqJ1xIoTQgrD8Criol.jpg",
            "link": "/card/movies/800-333/Igra-na-ponizhenie.html",
            "year": "2015",
            "rating": "7.4"
        },
        {
            "name": "Отель «Гранд Будапешт»",
            "image": "https://image.tmdb.org/t/p/w500//5qFxj03eBrkI0bUiGIonb4e0AI4.jpg",
            "link": "/card/movies/800-308/Otel-Grand-Budapesht.html",
            "year": "2014",
            "rating": "8.0"
        },
        {
            "name": "Паранорман, или Как приручить зомби",
            "image": "https://image.tmdb.org/t/p/w500//yDbJ3Ui5jrCjDqI3bJfccjJU3fm.jpg",
            "link": "/card/cartoons/500-53/Paranorman,-ili-Kak-priruchit-zombi.html#",
            "year": "2012",
            "rating": "7.0"
        },
        {
            "name": "М3ГАН",
            "image": "https://image.tmdb.org/t/p/w500//cIgp2ZLstyKzak6e8zVlJGdBSZZ.jpg",
            "link": "/card/movies/800-427/M3GAN.html",
            "year": "2022",
            "rating": "7.1",
            "type": "movie"
        },
        {
            "name": "Мой сосед - монстр",
            "image": "https://image.tmdb.org/t/p/w500//ipj9b6KZMr6yFidQBf7xxuWnKQi.jpg",
            "link": "/card/movies/800-98/Moj-sosed-monstr.html",
            "year": "2024",
            "rating": "6.7"
        },
        {
            "name": "Ford против Ferrari",
            "image": "https://image.tmdb.org/t/p/w500//579BjDiFrK9VK8EnKZzYwtGGXCg.jpg",
            "link": "/card/movies/800-25/Ford-protiv-Ferrari.html",
            "year": "2019",
            "rating": "8.0"
        },
        {
            "name": "Воображаемые Друзья",
            "image": "https://image.tmdb.org/t/p/original/oJEpa5RRvw9xm7UbDsT9dFUbd3W.jpg",
            "link": "/card/movies/800-389/Voobrazhaemye-Druzya.html",
            "year": "2024",
            "rating": "7.1",
            "type": "movie"
        },
        {
            "name": "Всё могу",
            "image": "https://image.tmdb.org/t/p/w500//gkEDDnkAoD8XbWWel61iTzHYpSa.jpg",
            "link": "/card/movies/800-350/Vsyo-mogu.html",
            "year": "2015",
            "rating": "5.9",
            "type": "movie"
        },
        {
            "name": "Соседи: На тропе войны",
            "image": "https://image.tmdb.org/t/p/w500//jLQxIV4y8GSknnbO9wsT645UaBg.jpg",
            "link": "/card/movies/800-364/Sosedi-Na-trope-vojny.html",
            "year": "2014",
            "rating": "6.2",
            "type": "movie"
        },
        {
            "name": "Не звезди!",
            "image": "https://image.tmdb.org/t/p/w500//tAkZCkfPlb1R7ltLODoSZ3ybbXH.jpg",
            "link": "/card/movies/800-326/Ne-zvezdi.html",
            "year": "2022",
            "rating": "5.0"
        },
        {
            "name": "Король Ричард",
            "image": "https://image.tmdb.org/t/p/w500//JHb7M3mwxWGLHHtfTu08Ys6aVz.jpg",
            "link": "/card/movies/800-305/Korol-Richard.html",
            "year": "2021",
            "rating": "7.6"
        },

        // Добавьте остальные карточки сюда
    ];

    var cardContainer = $('#Last-container'); // Получаем контейнер для карточек

    // Очищаем контейнер перед добавлением новых карточек
    cardContainer.html("");

    // Берём последние 15 карточек
    var lastCards = cardData.slice(-18);

    // Добавляем карточки в контейнер
    lastCards.forEach(function (val) {
        var cardHTML = `
        <li class="splide__slide">
            <div class="card card-media" style="width: 12rem" data-rating="${val.rating}">
                <a href="${val.link}">
                    <img src="${val.image}" class="card-img-top img-9x16 mt-2" alt="${val.name}">
                    <div class="card-rating-trand" bis_skin_checked="1">
                        <span class="span-rating">${val.rating}</span>
                    </div>
                    ${val.isTV ? '<div class="card-TV card-TV-trends" bis_skin_checked="1">TV</div>' : ''}
                    <div class="card-body">
                        <span class="card-tex">${val.name}<br><span class="year">${val.year}</span></span>
                    </div>
                </a>
            </div>
        </li>
        `;

        cardContainer.append(cardHTML);
    });

    // Инициализируем Splide после добавления карточек
    new Splide('#Last', {
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