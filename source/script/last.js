document.addEventListener('DOMContentLoaded', function () {
    generateLastCards();
});

function generateLastCards() {
    var cardData = [
        {
            "name": "Башня Бога",
            "image": "http://image.tmdb.org/t/p/w500//m4FQUNPbxonuv4kcFm1YgyRgl2C.jpg",
            "link": "/see/card/anime/100-01/Башня Бога.html",
            "year": "2020",
            "rating":"8.3"
        },
        {
            "name": "Древние",
            "image": "https://image.tmdb.org/t/p/w500//dsVB3Mqv5sHGGsu1SGuF3fahw0Z.jpg",
            "link": "/see/card/series/900-34/Drevnie.html",
            "year": "2013",
            "rating":"8.6"
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
            "name": "Кунг-фу Панда 4",
            "image": "https://images.kinorium.com/movie/poster/9805987/w1500_51633606.jpg",
            "link": "/see/card/cartoons/500-65/Kung-fu-Panda-4.html",
            "year": "2024",
            "rating":"7.1"
        },
        {
            "name": "Эверест",
            "image": "https://image.tmdb.org/t/p/w500//2tHCLXq7BbH2i9YjLNDMvohxpj3.jpg",
            "link": "/see/card/cartoons/500-67/Everest.html",
            "year": "2019",
            "rating":"7.5"
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
            "name": "Хало",
            "image": "https://image.tmdb.org/t/p/w500//5SBcW0WyqxZyE7AolxfX1ift532.jpg",
            "link": "#",
            "year": "2022",
            "rating":"7.1"
        },
        {
            "name": "Деревенские против пришельцев",
            "image": "https://image.tmdb.org/t/p/w500//qELcpKCX0HMszrWyq25GS2DTK3o.jpg",
            "link": "#",
            "year": "2024",
            "rating":"5.3"
        },
        {
            "name": "Призрачный гонщик 2",
            "image": "https://image.tmdb.org/t/p/w500//pmjeSQ4NocblwnqFDxk7zXggSQ7.jpg",
            "link": "#",
            "year": "2012",
            "rating":"5.0"
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
            "name": "Почему он",
            "image": "https://image.tmdb.org/t/p/w500//q0wK2bXSLulAre276C6M4ZS8Kfo.jpg",
            "link": "#",
            "year": "2016",
            "rating":"6.4"
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
        
        // Добавьте остальные карточки сюда
    ];

    var cardContainer = $('#Last-container'); // Получаем контейнер для карточек

    // Очищаем контейнер перед добавлением новых карточек
    cardContainer.html("");

    // Берём последние 15 карточек
    var lastCards = cardData.slice(-15);

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