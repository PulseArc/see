const data = [
    {
        "name": "Дом Дракона",
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
        "name": "Люди Икс ’97",
        "image": "https://image.tmdb.org/t/p/w500//dboSanhToCuyjNHYvJLCRc39Koe.jpg",
        "link": "#",
        "year": "2024",
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
    }
    
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
                <div class="card" style="width: 12rem;">
                    <img src="${val.image}" class="card-img-top sirials-watch-img" style="width: 226px; height: 127px;" alt="${val.name}">
                    <div class="card-rating" bis_skin_checked="1"><span class="span-rating">${val.rating}</span></div>
                    <div class="card-body">
                        <a href="${val.link}" class="card-tex">${val.name}<br>${val.year}</a>
                    </div>
                </div>
            `;
        }
    });

    $('#update').html(output);
});