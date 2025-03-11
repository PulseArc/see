

// Генерация карточек с случайными рейтингами
// Мультфильмы
document.addEventListener('DOMContentLoaded', function () {
    generateRandomCards();
});

function generateRandomCards() {
    var cardData = [{
            "name": "Кот в сапогах",
            "image": "https://image.tmdb.org/t/p/w500//4iuuvaCYNswlhG5f73JqX976a9d.jpg",
            "link": "/see/card/cartoons/500-01/Kot-v-sapogah.html",
            "year": "2011",
            "rating":"6.6"
        },
        {
            "name": "Мадагаскар",
            "image": "https://image.tmdb.org/t/p/w500//vwPFZT7tS8b9zDSN0PdvOzeGlfW.jpg",
            "link": "/see/card/cartoons/500-02/Madagaskar.html",
            "year": "2005",
            "rating":"6.9"
        },
        {
            "name": "Союз зверей",
            "image": "https://image.tmdb.org/t/p/w500//cg9KYCRLvRaKRjkuZF41Oef3Rbq.jpg",
            "link": "/see/card/cartoons/500-03/Soyuz-zverej.html",
            "year": "2010",
            "rating":"5.6"
        },
        {
            "name": "Рапунцель: Запутанная история",
            "image": "http://image.tmdb.org/t/p/w500//i6hhWWRMglTJR2Oi5xsN0JV6tNq.jpg",
            "link": "/see/card/cartoons/500-04/Rapuncel-Zaputannaya-istoriya.html",
            "year": "2010",
            "rating":"7.6"
        },
        {
            "name": "Том и Джерри: Робин Гуд и мышь-весельчак",
            "image": "https://image.tmdb.org/t/p/w500//2lDUlkOne47joTE4yNmIG71qZ0m.jpg",
            "link": "/see/card/cartoons/500-05/Tom-i-Dzherri-Robin-Gud-i-mysh-veselchak.html",
            "year": "2012",
            "rating":"6.5"
        },
        {
            "name": "Рио",
            "image": "https://image.tmdb.org/t/p/w500//oQZEFIeucAsuNFxkt7cUww8bh6s.jpg",
            "link": "/see/card/cartoons/500-06/Rio.html",
            "year": "2011",
            "rating":"6.7"
        },
        {
            "name": "Тайна красной планеты",
            "image": "https://image.tmdb.org/t/p/w500//mD4BnU0MTon8bhuJPCrc82IXLtp.jpg",
            "link": "/see/card/cartoons/500-07/Tajna-krasnoj-planety.html",
            "year": "2011",
            "rating":"6.0"
        },
        {
            "name": "Рататуй",
            "image": "https://image.tmdb.org/t/p/w500//6u4JvZBiw1Uv6BgTlWNsFSSHlMn.jpg",
            "link": "/see/card/cartoons/500-08/Ratatuj.html",
            "year": "2007",
            "rating":"7.8"
        },
        {
            "name": "Храбрая сердцем",
            "image": "https://image.tmdb.org/t/p/w500//5A52Y3scfxXTwBKVdgEVmoa8i0q.jpg",
            "link": "/see/card/cartoons/500-09/Hrabraya-serdcem.html",
            "year": "2012",
            "rating":"7.0"
        },
        {
            "name": "В гости к Робинсонам",
            "image": "https://image.tmdb.org/t/p/w500//gx7TFtVxPZPHeuYuXdPgPGnboRU.jpg",
            "link": "/see/card/cartoons/500-10/V-gosti-k-Robinsonam.html",
            "year": "2007",
            "rating":"6.9"
        },
        {
            "name": "Дорога на Эльдорадо",
            "image": "http://image.tmdb.org/t/p/w500//kbXR4E6xhi6MFcyEvz1VKQaRhc9.jpg",
            "link": "/see/card/cartoons/500-11/Doroga-na-Eldorado.html",
            "year": "2000",
            "rating":"7.2"
        },
        {
            "name": "Тачки",
            "image": "https://image.tmdb.org/t/p/w500//wnnv9vLO4jBhXF1Vw2Ss8uhjJPC.jpg",
            "link": "/see/card/cartoons/500-12/Tachki.html",
            "year": "2006",
            "rating":"7.0"
        },
        {
            "name": "Франкенвини",
            "image": "https://image.tmdb.org/t/p/w500//pzqDbpshw50ulrSM5Sdc2AY70tq.jpg",
            "link": "/see/card/cartoons/500-13/Frankenvini.html",
            "year": "2012",
            "rating":"7.0"
        },
        {
            "name": "Мегамозг",
            "image": "http://image.tmdb.org/t/p/w500//wmbjH9s0mu5gv1WX3v8n9IwbbHq.jpg",
            "link": "/see/card/cartoons/500-14/Megamozg.html",
            "year": "2010",
            "rating":"7.0"
        },
        {
            "name": "ВАЛЛ·И",
            "image": "https://image.tmdb.org/t/p/w500//i4qDsHTfrTD2EkPa7tT53cJYZkL.jpg",
            "link": "/see/card/cartoons/500-15/VALL·I.html",
            "year": "2008",
            "rating":"8.1"
        },
        {
            "name": "Фантазия",
            "image": "https://image.tmdb.org/t/p/w500//gCevkcGOmqowkB6jJaYUVZdHCVN.jpg",
            "link": "/see/card/cartoons/500-16/Fantaziya.html",
            "year": "1940",
            "rating":"7.4"
        },
        {
            "name": "Аладдин",
            "image": "https://image.tmdb.org/t/p/w500//92GjkHUHMn9HIZqihuradZNZNLb.jpg",
            "link": "/see/card/cartoons/500-17/Aladdin.html",
            "year": "1992",
            "rating":"7.7"
        },
        {
            "name": "Семейка Крудс",
            "image": "https://image.tmdb.org/t/p/w500//bYF0aegBQBHfc1Lva7mChj4cPLM.jpg",
            "link": "/see/card/cartoons/500-18/Semejka-Kruds.html",
            "year": "2013",
            "rating":"6.9"
        },
        {
            "name": "Красавица и чудовище",
            "image": "https://image.tmdb.org/t/p/w500//A9AtXMWX0V4IZ2ygBi9Cr85tQD1.jpg",
            "link": "/see/card/cartoons/500-19/Krasavica-i-chudovishe.html",
            "year": "1991",
            "rating":"7.7"
        },
        {
            "name": "Самолёты",
            "image": "https://image.tmdb.org/t/p/w500//1OjNMu0THjx5iXXH43a6nAF7wqm.jpg",
            "link": "/see/card/cartoons/500-20/Samolety.html",
            "year": "2013",
            "rating":"5.9"
        },
        {
            "name": "Эпик",
            "image": "https://image.tmdb.org/t/p/w500//vO3UVVzfpRN5PgxyyzCnFBfbRS2.jpg",
            "link": "/see/card/cartoons/500-21/Epik.html",
            "year": "2013",
            "rating":"6.5"
        },
        {
            "name": "Корпорация Монстров",
            "image": "https://image.tmdb.org/t/p/w500//zXIusESsQ7ZXP9MFwbvcTTZ3XWF.jpg",
            "link": "/see/card/cartoons/500-22/Korporaciya-Monstrov.html",
            "year": "2001",
            "rating":"7.8"
        },
        {
            "name": "Секретная служба Санта-Клауса",
            "image": "https://image.tmdb.org/t/p/w500//bHMGBqaYrdXgzVRfxn9ukN2PpN8.jpg",
            "link": "/see/card/cartoons/500-23/Sekretnaya-sluzhba-Santa-Klausa.html",
            "year": "2011",
            "rating":"6.8"
        },
        {
            "name": "В поисках Немо",
            "image": "https://image.tmdb.org/t/p/w500//wwUYKw29xtFLk5PIZV9iDAs6zlW.jpg",
            "link": "/see/card/cartoons/500-24/V-poiskah-Nemo.html",
            "year": "2003",
            "rating":"7.8"
        },
        {
            "name": "Индюки: Назад в будущее",
            "image": "https://image.tmdb.org/t/p/w500//h1iOcJ6qEgFBQ76jACsALLboHQb.jpg",
            "link": "/see/card/cartoons/500-25/Indyuki-Nazad-v-budushee.html",
            "year": "2013",
            "rating":"5.9"
        },
        {
            "name": "Ральф",
            "image": "https://image.tmdb.org/t/p/w500//uqWBFXy0lhoz32qy9PsfAjgKMge.jpg",
            "link": "/see/card/cartoons/500-26/Ralf.html",
            "year": "2012",
            "rating":"7.3"
        },
        {
            "name": "Турбо",
            "image": "https://image.tmdb.org/t/p/w500//inTKQni4YW8syrfgnXHwzmNeSo4.jpg",
            "link": "/see/card/cartoons/500-27/Turbo.html",
            "year": "2013",
            "rating":"6.2"
        },
        {
            "name": "Трансформеры: Начало",
            "image": "https://image.tmdb.org/t/p/w500//47mnEdahUv5I28CKuBx5drLRcuK.jpg",
            "link": "/see/card/cartoons/500-28/Transformery-Nachalo.html",
            "year": "2024",
            "rating":"8.1"
        },
        {
            "name": "Кошмар перед Рождеством",
            "image": "https://image.tmdb.org/t/p/w500//xvqFn90FxKTJflG4n0spZY7vySu.jpg",
            "link": "/see/card/cartoons/500-29/Koshmar-pered-Rozhdestvom.html",
            "year": "1993",
            "rating":"7.8"
        },
        {
            "name": "Утиные истории: Заветная лампа",
            "image": "https://image.tmdb.org/t/p/w500//2yY39ALrHQb8ZTRwUW9yiL3x7ft.jpg",
            "link": "/see/card/cartoons/500-30/Utinye-istorii-Zavetnaya-lampa.html",
            "year": "1990",
            "rating":"6.7"
        },
        {
            "name": "История игрушек 3",
            "image": "https://image.tmdb.org/t/p/w500//2IWIk34c9fMv7xJQ5ur4Z3O1Hh9.jpg",
            "link": "/see/card/cartoons/500-31/Istoriya-igrushek-3.html",
            "year": "2010",
            "rating":"7.8"
        },
        {
            "name": "Лоракс",
            "image": "https://image.tmdb.org/t/p/w500//pCq2zMcfyC0METerLKJahBmlR0v.jpg",
            "link": "/see/card/cartoons/500-32/Loraks.html",
            "year": "2012",
            "rating":"6.5"
        },
        {
            "name": "Астерикс и тайное зелье",
            "image": "https://image.tmdb.org/t/p/w200//tjhaD88iWGGEFmUX38KZ4GsCXRJ.jpg",
            "link": "/see/card/cartoons/500-33/Asteriks-i-tajnoe-zele.html",
            "year": "2018",
            "rating":"6.9"
        },
        {
            "name": "Пушистое превращение",
            "image": "https://image.tmdb.org/t/p/w500//uR70IF8Xiw3fnM2j5KBmDKyyP2o.jpg",
            "link": "/see/card/cartoons/500-34/Pushistoe-prevrashenie.html",
            "year": "2024",
            "rating":"5.1"
        },
        {
            "name": "Шаг за шагом",
            "image": "https://image.tmdb.org/t/p/w200//9xSjP8B0iZHRzvrtKcYDkaalomS.jpg",
            "link": "/see/card/cartoons/500-35/Shag-za-shagom.html",
            "year": "2024",
            "rating":"7.5"
        },
        {
            "name": "Вперёд",
            "image": "https://image.tmdb.org/t/p/w500//6Pvojxr83EZNisODJbXmLfmOya8.jpg",
            "link": "/see/card/cartoons/500-36/Vperyod.html",
            "year": "2020",
            "rating":"7.7"
        },
        {
            "name": "Пингвины Мадагаскара",
            "image": "http://image.tmdb.org/t/p/w500//uovMwhOMMF31sO9TxGvqjIGvdm8.jpg",
            "link": "/see/card/cartoons/500-37/Pingviny-Madagaskara.html",
            "year": "2014",
            "rating":"6.5"
        },
        {
            "name": "Хранитель Луны",
            "image": "https://image.tmdb.org/t/p/w500//yCEBDLJrRDiB5yCEarmRI75xkYM.jpg",
            "link": "/see/card/cartoons/500-38/Hranitel-Luny.html",
            "year": "2015",
            "rating":"7.3"
        },
        {
            "name": "Пришельцы в доме",
            "image": "https://image.tmdb.org/t/p/w500//baugoi8UiAMReW62C3Mx5fk7PSP.jpg",
            "link": "/see/card/cartoons/500-39/Prishelcy-v-dome.html",
            "year": "2018",
            "rating":"6.4"
        },
        
        {
            "name": "Король Лев",
            "image": "https://image.tmdb.org/t/p/w500//j8tdiuhbF9p5mnAeA1YOUvz82xY.jpg",
            "link": "/see/card/cartoons/500-40/Korol-Lev.html",
            "year": "1994",
            "rating":"8.3"
        },
        {
            "name": "Кокоша – маленький дракон",
            "image": "https://image.tmdb.org/t/p/w500//whaEzMfeeegBeD6URtATboFmNwf.jpg",
            "link": "/see/card/cartoons/500-41/Kokosha–malenkij-drakon.html",
            "year": "2014",
            "rating":"5.2"
        },
        {
            "name": "Риверданс: Волшебное приключение",
            "image": "https://image.tmdb.org/t/p/w500//i6TRDlVuuEXMyLSlIkDd8YhBN0r.jpg",
            "link": "/see/card/cartoons/500-42/Riverdans-Volshebnoe-priklyuchenie.html",
            "year": "2021",
            "rating":"6.0"
        },
        {
            "name": "Тайная жизнь домашних животных",
            "image": "https://image.tmdb.org/t/p/w500//qmfuTRM3vQkXty85zqY7xfdQQjQ.jpg",
            "link": "/see/card/cartoons/500-43/Tajnaya-zhizn-domashnih-zhivotnyh.html",
            "year": "2016",
            "rating":"6.3"
        },
        {
            "name": "Элементарно",
            "image": "https://image.tmdb.org/t/p/w500//88xo5uF03kEgFWXRQJerXRdONBE.jpg",
            "link": "/see/card/cartoons/500-44/Elementarno.html",
            "year": "2023",
            "rating":"7.6"
        },
        {
            "name": "Холодное сердце",
            "image": "https://image.tmdb.org/t/p/w500//5LYjyQT4IP7oM5ibawHXyDzT2Pp.jpg",
            "link": "/see/card/cartoons/500-45/Holodnoe-serdce.html",
            "year": "2013",
            "rating":"7.2"
        },
        {
            "name": "Тайна Коко",
            "image": "https://image.tmdb.org/t/p/w500//jvYsGaUqN8ymH696kRfVJjJ3GIl.jpg",
            "link": "/see/card/cartoons/500-46/Tajna-Koko.html",
            "year": "2017",
            "rating":"8.2"
        },
        {
            "name": "Шрэк",
            "image": "https://image.tmdb.org/t/p/w500//5OPCH713UIEeWuvRZpVkkzrZ3Hd.jpg",
            "link": "/see/card/cartoons/500-47/Shrek.html",
            "year": "2001",
            "rating":"7.7"
        },
        {
            "name": "Райя и последний дракон",
            "image": "https://image.tmdb.org/t/p/w500//c8srjTN6PXUxeqmVI0T2ffK3iwC.jpg",
            "link": "/see/card/cartoons/500-48/Rajya-i-poslednij-drakon.html",
            "year": "2021",
            "rating":"7.8"
        },
        {
            "name": "Крутые бобры",
            "image": "http://image.tmdb.org/t/p/w500//9KYUA9tZrVNVXk2LTaYNMqGpHUj.jpg",
            "link": "/see/card/cartoons/500-49/Krutye-bobry.html",
            "year": "1997",
            "rating":"6.9"
        },
        {
            "name": "Головоломка",
            "image": "https://image.tmdb.org/t/p/w500//8wukxopBFO2Vrf50jlLpbrfj4OB.jpg",
            "link": "/see/card/cartoons/500-50/Golovolomka.html",
            "year": "2015",
            "rating":"7.9"
        },
        {
            "name": "Монстры на каникулах",
            "image": "https://image.tmdb.org/t/p/w500//dLrppCn6TF99oObWrnU87Y7CMyX.jpg",
            "link": "/see/card/cartoons/500-51/Monstry-na-kanikulah.html",
            "year": "2012",
            "rating":"7.0"
        },
        {
            "name": "Зверополис",
            "image": "https://image.tmdb.org/t/p/w500//qNZT8HwPWFv8Dc5rEE0O3FFODha.jpg",
            "link": "/see/card/cartoons/500-52/Zveropolis.html",
            "year": "2016",
            "rating":"7.7"
        },
        {
            "name": "Паранорман, или Как приручить зомби",
            "image": "https://image.tmdb.org/t/p/w500//yDbJ3Ui5jrCjDqI3bJfccjJU3fm.jpg",
            "link": "/see/card/cartoons/500-53/Paranorman,-ili-Kak-priruchit-zombi.html",
            "year": "2012",
            "rating":"7.0"
        },
        {
            "name": "Дикий робот",
            "image": "http://image.tmdb.org/t/p/w500//sDTumQBxhIyYbZ9acsTtoLfb5ZG.jpg",
            "link": "/see/card/cartoons/500-54/Dikij-robot.html",
            "year": "2024",
            "rating":"8.3"
        },
        {
            "name": "Как приручить дракона",
            "image": "https://image.tmdb.org/t/p/w500//cMUmeDM2QRlSOAK9onB8PhXtdZJ.jpg",
            "link": "/see/card/cartoons/500-55/Kak-priruchit-drakona.html",
            "year": "2010",
            "rating":"7.8"
        },
        {
            "name": "Суперсемейка",
            "image": "https://image.tmdb.org/t/p/w500//nVJGGWCs8CQ41G4fzJoTttfCgpQ.jpg",
            "link": "/see/card/cartoons/500-56/Supersemejka.html",
            "year": "2004",
            "rating":"7.7"
        },
        {
            "name": "Кот в сапогах 2: Последнее желание",
            "image": "https://image.tmdb.org/t/p/w500//z2gOE3Z4mNLAcw0dQ1BlGoWLrH7.jpg",
            "link": "/see/card/cartoons/500-57/Kot-v-sapogah-2-Poslednee-zhelanie.html",
            "year": "2022",
            "rating":"8.2"
        },
        {
            "name": "Удача",
            "image": "https://image.tmdb.org/t/p/w500//1tNajPL9FmFbM0msgFF1DMVdpcs.jpg",
            "link": "/see/card/cartoons/500-58/Udacha.html",
            "year": "2022",
            "rating":"7.8"
        },
        {
            "name": "Моана",
            "image": "https://images.kinorium.com/movie/poster/772898/w1500_51627721.jpg",
            "link": "/see/card/cartoons/500-59/Moana.html",
            "year": "2016",
            "rating":"7.6"
        },
        {
            "name": "Человек-паук: Паутина вселенных",
            "image": "https://image.tmdb.org/t/p/w500//hsGAxOqbH0UNpIJPMsVRA6dFf85.jpg",
            "link": "/see/card/cartoons/500-60/Chelovek-pauk-Pautina-vselennyh.html",
            "year": "2023",
            "rating":"8.3"
        },
        {
            "name": "Миньоны",
            "image": "https://image.tmdb.org/t/p/w500//4JubqgkLoGziLg77xCJATs8c0Ay.jpg",
            "link": "/see/card/cartoons/500-61/Minony.html",
            "year": "2015",
            "rating":"6.4"
        },
        {
            "name": "Суперпитомцы",
            "image": "https://image.tmdb.org/t/p/w500//75jSDcQtHrcVoSflDolT7PC5v82.jpg",
            "link": "/see/card/cartoons/500-62/Superpitomcy.html",
            "year": "2022",
            "rating":"7.2"
        },
        {
            "name": "Хранители снов",
            "image": "https://image.tmdb.org/t/p/w500//338JxTywTCKqel7RsGgMIqmYooJ.jpg",
            "link": "/see/card/cartoons/500-63/Hraniteli-snov.html",
            "year": "2012",
            "rating":"7.4"
        },
        {
            "name": "Angry Birds в кино 2",
            "image": "https://image.tmdb.org/t/p/w500//6lKxPyArJPJxveyKjp6ihQKH3Ge.jpg",
            "link": "/see/card/cartoons/500-64/Angry-Birds-v-kino-2.html",
            "year": "2019",
            "rating":"7.1"
        },
        {
            "name": "Кунг-фу Панда 4",
            "image": "https://images.kinorium.com/movie/poster/9805987/w1500_51633606.jpg",
            "link": "/see/card/cartoons/500-65/Kung-fu-Panda-4.html",
            "year": "2024",
            "rating":"7.1"
        },
        {
            "name": "Душа",
            "image": "https://image.tmdb.org/t/p/w500//jZkksyMZdTYw7fIVKyA95nFEPnt.jpg",
            "link": "/see/card/cartoons/500-66/Dusha.html",
            "year": "2020",
            "rating":"8.1"
        },
        {
            "name": "Эверест",
            "image": "https://image.tmdb.org/t/p/w500//2tHCLXq7BbH2i9YjLNDMvohxpj3.jpg",
            "link": "/see/card/cartoons/500-67/Everest.html",
            "year": "2019",
            "rating":"7.5"
        },
        {
            "name": "Дневник слабака",
            "image": "http://image.tmdb.org/t/p/w500//OR5miI8pm2Shmeoha0zHk97ceK.jpg",
            "link": "/see/card/cartoons/500-68/Dnevnik-slabaka.html",
            "year": "2021",
            "rating":"6.2"
        },
        {
            "name": "Не бей копытом",
            "image": "http://image.tmdb.org/t/p/w500//3YteNf7HJvJT9IRxpiISoyvRoRR.jpg",
            "link": "/see/card/cartoons/500-69/Ne-bej-kopytom.html",
            "year": "2004",
            "rating":"6.1"
        },
        {
            "name": "Большое путешествие",
            "image": "http://image.tmdb.org/t/p/w500//82cjRTHAsrNBRWfMJ8VzrvXcYfX.jpg",
            "link": "/see/card/cartoons/500-70/Bolshoe-puteshestvie.html",
            "year": "2006",
            "rating":"5.5"
        },
        {
            "name": "Лерой и Стич",
            "image": "http://image.tmdb.org/t/p/w500//mVXTQVYBSdhGuNWzpbF9ULt62jH.jpg",
            "link": "/see/card/cartoons/500-71/Leroj-i-Stich.html",
            "year": "2006",
            "rating":"6.6"
        },
        {
            "name": "Базз Лайтер",
            "image": "http://image.tmdb.org/t/p/w500//DQU4vUTMoAlUGJIC5hNfHPVELz.jpg",
            "link": "/see/card/cartoons/500-72/Bazz-Lajter.html",
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