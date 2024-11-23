const data = [
    {
        "name": "Чужой: Ромул",
        "image": "source/images/чужой-ромул.jpg",
        "link": "#",
        "year": "2024"
    },
    {
        "name": "Чужой: Ромул",
        "image": "source/images/чужой-ромул.jpg",
        "link": "#",
        "year": "2024"
    },
    {
        "name": "Чужой: Ромул",
        "image": "source/images/чужой-ромул.jpg",
        "link": "#",
        "year": "2024"
    },
    {
        "name": "Чужой: Ромул",
        "image": "source/images/чужой-ромул.jpg",
        "link": "#",
        "year": "2024"
    },
    {
        "name": "Чужой: Ромул",
        "image": "source/images/чужой-ромул.jpg",
        "link": "#",
        "year": "2024"
    },
    {
        "name": "Чужой: Ромул",
        "image": "source/images/чужой-ромул.jpg",
        "link": "#",
        "year": "2024"
    },
    {
        "name": "Чужой: Ромул",
        "image": "source/images/чужой-ромул.jpg",
        "link": "#",
        "year": "2024"
    },
    {
        "name": "Джокер: Безумие на двоих",
        "image": "source/images/Джокер-безумие.png",
        "link": "#",
        "year": "2024"
    },
    {
        "name": "Пролетая над гнездом кукушки",
        "image": "https://image.tmdb.org/t/p/w200//zu8ytydlKyIpTeYfNs2VHvj9XCx.jpg",
        "link": "#",
        "year": "1975"
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
                    <div class="card-body">
                        <a href="${val.link}" class="card-tex">${val.name}<br>${val.year}</a>
                    </div>
                </div>
            `;
        }
    });

    $('#update').html(output);
});