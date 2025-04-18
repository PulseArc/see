const data = [
    {
        "name": "Прибытие",
        "image": "http://image.tmdb.org/t/p/w500//3K1byNV0CfChvJFNbe2ZAkiro4U.jpg",
        "link": "/see/card/movies/800-04/Pribytie.html",
        "year": "2016",
        "rating":"7.6"
    },
    {
        "name": "В первый раз",
        "image": "http://image.tmdb.org/t/p/w500//cnbNuaNbwblc0K6OC0h2nrVdqbi.jpg",
        "link": "/see/card/movies/800-05/V-pervyj-raz.html",
        "year": "2012",
        "rating":"7.0"
    },
    {
        "name": "Паразиты",
        "image": "http://image.tmdb.org/t/p/w500//zg3lUyLTnpbS5N29G6B3a63O7uP.jpg",
        "link": "/see/card/movies/800-06/Parazity.html",
        "year": "2019",
        "rating":"8.5"
    },
    {
        "name": "Идеальные незнакомцы",
        "image": "http://image.tmdb.org/t/p/w500//x6KjNrGkNUkhHcmml1vHR0989a9.jpg",
        "link": "/see/card/movies/800-07/Idealnye-neznakomcy.html",
        "year": "2016",
        "rating":"7.9"
    },
    {
        "name": "Остров проклятых",
        "image": "http://image.tmdb.org/t/p/w500//3UVMyefkUBiktshtKIEnNXvOFKH.jpg",
        "link": "/see/card/movies/800-08/Ostrov-proklyatyh.html",
        "year": "2010",
        "rating":"8.2"
    },
    {
        "name": "Логан",
        "image": "http://image.tmdb.org/t/p/w500//6FSoZ8mtEwPAO3k670G3yRaBpTK.jpg",
        "link": "/see/card/movies/800-09/Logan.html",
        "year": "2017",
        "rating":"7.8"
    },
    {
        "name": "Кит",
        "image": "http://image.tmdb.org/t/p/w500//bUA6X03vffX3qCy3diF91PFo428.jpg",
        "link": "/see/card/movies/800-11/Kit.html",
        "year": "2022",
        "rating":"7.8"
    },
    {
        "name": "Кто там",
        "image": "https://image.tmdb.org/t/p/original/awc6lTA5fYlkNsAAAZYZrGZ5yoq.jpg",
        "link": "/see/card/movies/800-13/Kto-tam.html",
        "year": "2015",
        "rating":"5.4"
    },
    {
        "name": "Круэлла",
        "image": "http://image.tmdb.org/t/p/w500//hUfyYGP9Xf6cHF9y44JXJV3NxZM.jpg",
        "link": "/see/card/movies/800-15/Kruella.html",
        "year": "2021",
        "rating":"8.0"
    },
    {
        "name": "Зомби по имени Шон",
        "image": "http://image.tmdb.org/t/p/w500//hACq0LdC5WNjPb1jzTZzuj1R4qx.jpg",
        "link": "/see/card/movies/800-18/Zombi-po-imeni-Shon.html",
        "year": "2004",
        "rating":"7.5"
    },
    {
        "name": "Выживший",
        "image": "http://image.tmdb.org/t/p/w500//gvWniVnehAkIAfy40VlcFy3vOef.jpg",
        "link": "/see/card/movies/800-19/Vyzhivshij.html",
        "year": "2015",
        "rating":"7.5"
    },
    {
        "name": "Гнев человеческий",
        "image": "http://image.tmdb.org/t/p/w500//nRE9zOfzdp4uQMeDOgCvMf6izNh.jpg",
        "link": "/see/card/movies/800-21/Gnev-chelovecheskij.html",
        "year": "2021",
        "rating":"7.6"
    },
    {
        "name": "Одержимость",
        "image": "http://image.tmdb.org/t/p/w500//nq3mYsTXx6086nFXxzDReQI0J1S.jpg",
        "link": "/see/card/movies/800-23/Oderzhimost.html",
        "year": "2014",
        "rating":"8.4"
    },
    {
        "name": "Зелёная книга",
        "image": "http://image.tmdb.org/t/p/w500//aEeTnDzcnGRD5IjSFwVXjusKpu0.jpg",
        "link": "/see/card/movies/800-24/Zelyonaya-kniga.html",
        "year": "2018",
        "rating":"8.2"
    },
    {
        "name": "Ford против Ferrari",
        "image": "http://image.tmdb.org/t/p/w500//579BjDiFrK9VK8EnKZzYwtGGXCg.jpg",
        "link": "/see/card/movies/800-25/Ford-protiv-Ferrari.html",
        "year": "2019",
        "rating":"8.0"
    },
    {
        "name": "Эмилия Перес",
        "image": "https://image.tmdb.org/t/p/w500//6KvGEOCUBsgTUPkl1oWhH0Y3ePy.jpg",
        "link": "/see/card/movies/800-03/Emilia-Perez.html",
        "year": "2024",
        "rating":"7.8"
    },
    {
        "name": "Спуск в бездну",
        "image": "https://image.tmdb.org/t/p/w500//bSb3ynYHWJbXSSMRhblzrsgt1lO.jpg",
        "link": "/see/card/movies/800-57/Spusk-v-bezdnu.html",
        "year": "2023",
        "rating":"5.7"
    },
    {
        "name": "Город тайн: Исчезнувшая",
        "image": "https://image.tmdb.org/t/p/w500//ez9LtVmvfbWjX9Spx4DrNEFVErx.jpg",
        "link": "/see/card/movies/800-58/Gorod-tajn-Ischeznuvshaya.html",
        "year": "2024",
        "rating":"6.5"
    },
    {
        "name": "Город тайн",
        "image": "http://image.tmdb.org/t/p/w500//phG9MqZdBuzyB2G8wTgGKEQZgNH.jpg",
        "link": "/see/card/movies/800-181/Gorod-tajn.html",
        "year": "2021",
        "rating":"6.8"
    },
    {
        "name": "Хитмен. Последнее дело",
        "image": "https://image.tmdb.org/t/p/w500//3TM9MzC1f6F3BwpPJhdv3hXWQRX.jpg",
        "link": "/see/card/movies/800-59/Hitmen-Poslednee-delo.html",
        "year": "2024",
        "rating":"6.9"
    },
    {
        "name": "Хитмэн: Агент 47",
        "image": "https://image.tmdb.org/t/p/original/AsLFRe7eORaNBO5yEVjLGYt4nxj.jpg",
        "link": "/see/card/movies/800-182/Hitmen-Agent-47.html",
        "year": "2015",
        "rating":"5.9"
    },
    {
        "name": "Хитмэн",
        "image": "https://image.tmdb.org/t/p/original/iHSpeT9cXOFDzXCWtkxxo8ZzREE.jpg",
        "link": "/see/card/movies/800-183/Hitmen.html",
        "year": "2007",
        "rating":"6.1"
    },
    {
        "name": "Непробиваемые",
        "image": "https://image.tmdb.org/t/p/w500//z497zVpHuGDQT4lBcHZcYdf6eDT.jpg",
        "link": "/see/card/movies/800-60/Neprobivaemye.html",
        "year": "2024",
        "rating":"5.6"
    },
    {
        "name": "Однажды в Ла-Рое",
        "image": "https://image.tmdb.org/t/p/w500//8VQr2REac6qlshcQGBsmq5s4SiU.jpg",
        "link": "/see/card/movies/800-61/Odnazhdy-v-La-Roe.html",
        "year": "2024",
        "rating":"6.8"
    },
    {
        "name": "Охотники за привидениями: Леденящий ужас",
        "image": "https://image.tmdb.org/t/p/w500//ltG6ypHUyPv3y4e4ZOxRumYwikV.jpg",
        "link": "/see/card/movies/800-62/Ohotniki-za-privideniyami-Ledenyashij-uzhas.html",
        "year": "2024",
        "rating":"6.5"
    },
    {
        "name": "Охотники за привидениями: Наследники",
        "image": "http://image.tmdb.org/t/p/w500//wqXTMwkoBVrQ94FSBDAIwhK2ONa.jpg",
        "link": "/see/card/movies/800-184/Ohotniki-za-privideniyami-Nasledniki.html",
        "year": "2021",
        "rating":"7.3"
    },
    {
        "name": "Охотники за привидениями",
        "image": "http://image.tmdb.org/t/p/w500//xXcZFa1vXZ7JJAdFmmDL3IAURBS.jpg",
        "link": "/see/card/movies/800-185/Ohotniki-za-privideniyami2016.html",
        "year": "2016",
        "rating":"5.3"
    },
    {
        "name": "Охотники за привидениями 2",
        "image": "http://image.tmdb.org/t/p/w500//sNVd1heRFJFlwgOZEvQpLOsNusG.jpg",
        "link": "/see/card/movies/800-186/Ohotniki-za-privideniyami-2.html",
        "year": "1989",
        "rating":"6.6"
    },
    {
        "name": "Охотники за привидениями",
        "image": "http://image.tmdb.org/t/p/w500//4T0fzZK0hQkEkM0FIVTkgMRYzBn.jpg",
        "link": "/see/card/movies/800-187/Ohotniki-za-privideniyami1984.html",
        "year": "1984",
        "rating":"7.5"
    },
    {
        "name": "Дюна: Часть вторая",
        "image": "http://image.tmdb.org/t/p/w500//3aLghRkuJc9cs770fxo4a6YWht3.jpg",
        "link": "/see/card/movies/800-20/Dyuna-Chast-vtoraya.html",
        "year": "2024",
        "rating":"8.1"
    },
    {
        "name": "Дюна",
        "image": "https://image.tmdb.org/t/p/w500//3hbXNclcHaj5KiF6kK41GBMjyFr.jpg",
        "link": "/see/card/movies/800-63/Dyuna.html",
        "year": "2021",
        "rating":"7.8"
    },
    {
        "name": "Вуди Вудпекер в летнем лагере",
        "image": "https://image.tmdb.org/t/p/w500//oAF42DFZA430eEzRmEcrpB0D3rp.jpg",
        "link": "/see/card/movies/800-65/Vudi-Vudpeker-otpravlyaetsya-v-lager.html",
        "year": "2024",
        "rating":"6.5"
    },
    {
        "name": "Вуди Вудпекер",
        "image": "http://image.tmdb.org/t/p/w500//9F4ccwQlDToaG83IMlxb4w6ftN0.jpg",
        "link": "/see/card/movies/800-188/Vudi-Vudpeker.html",
        "year": "2017",
        "rating":"6.6"
    },
    {
        "name": "Возвращение грозной семейки",
        "image": "https://image.tmdb.org/t/p/w500//o1SGF0txwzZxBJbOsvIgbBtRk3A.jpg",
        "link": "/see/card/movies/800-66/Vozvrashenie-grozno-semejki.html",
        "year": "2024",
        "rating":"7.0"
    },
    
    {
        "name": "След киллера",
        "image": "https://image.tmdb.org/t/p/original/uGTulIuR0NlI2CQzTRHHEuJJejp.jpg",
        "link": "/see/card/movies/800-67/Sled-killera.html",
        "year": "2024",
        "rating":"5.7"
    },
    {
        "name": "Боб Марли: Одна любовь",
        "image": "https://image.tmdb.org/t/p/w500//79G6T8JSmUrIsypQVzsa5VjfOXU.jpg",
        "link": "/see/card/movies/800-68/Bob-Marli-Odna-lyubov.html",
        "year": "2024",
        "rating":"6.7"
    },
    {
        "name": "Джокер: Безумие на двоих",
        "image": "https://image.tmdb.org/t/p/w500//sqHQhhjsfZ0UAu67RiIaUkabZZD.jpg",
        "link": "/see/card/movies/800-69/Dzhoker-Bezumie-na-dvoih.html",
        "year": "2024",
        "rating":"5.5"
    },
    {
        "name": "Джокер",
        "image": "http://image.tmdb.org/t/p/w500//5itx9nz3gXWgoD2I1UdaqOrphYm.jpg",
        "link": "/see/card/movies/800-189/Dzhoker.html",
        "year": "2019",
        "rating":"8.1"
    },
    {
        "name": "Дыши!",
        "image": "https://image.tmdb.org/t/p/w500//4pRonl4LTHFw567HyX0iYolyaWS.jpg",
        "link": "/see/card/movies/800-70/Dyshi!.html",
        "year": "2024",
        "rating":"5.4"
    },
    {
        "name": "Жуть",
        "image": "https://image.tmdb.org/t/p/w500//krCt93RSbZMmiPIw2k1r9zzfzTb.jpg",
        "link": "/see/card/movies/800-71/Zhut.html",
        "year": "2024",
        "rating":"6.6"
    },
    {
        "name": "Чёрный чай",
        "image": "https://image.tmdb.org/t/p/w500//v6HmHzoOJVwFmdKDKpdfnnsRk39.jpg",
        "link": "/see/card/movies/800-72/Chyornyj-chaj.html",
        "year": "2024",
        "rating":"5.9"
    },
    {
        "name": "Ученик. Восхождение Трампа",
        "image": "https://image.tmdb.org/t/p/w500//1rXbP2AdiJzbqL6CKxdZMeFuE4O.jpg",
        "link": "/see/card/movies/800-73/Uchenik-Voshozhdenie-Trampa.html",
        "year": "2024",
        "rating":"6.9"
    },
    {
        "name": "Профессионал",
        "image": "https://image.tmdb.org/t/p/w500//uBAgrWuglga1Vo7oUlFL0KFORcN.jpg",
        "link": "/see/card/movies/800-74/Professional.html",
        "year": "2024",
        "rating":"5.9"
    },
    {
        "name": "Кошмарные каникулы",
        "image": "https://image.tmdb.org/t/p/w500//ud6dvc0s6YapooFkUNQPuZ4eg5u.jpg",
        "link": "/see/card/movies/800-75/Koshmarnye-kanikuly.html",
        "year": "2024",
        "rating":"6.5"
    },
    {
        "name": "Подземелья и драконы: Честь среди воров",
        "image": "http://image.tmdb.org/t/p/w500//nAbRIxxRJfCP2U9tpVJU1zWb6Ni.jpg",
        "link": "/see/card/movies/800-76/Podzemelya-i-drakony-Chest-sredi-vorov.html",
        "year": "2023",
        "rating":"7.3"
    },
    {
        "name": "Мегалополис",
        "image": "https://image.tmdb.org/t/p/w500//epglGr4yDHGaZVf8faMm7ilcHDu.jpg",
        "link": "/see/card/movies/800-77/Megalopolis.html",
        "year": "2024",
        "rating":"5.3"
    },
    {
        "name": "Выгон",
        "image": "https://image.tmdb.org/t/p/w500//z9GAjN21PQPDp0eRB4Ct6vIZaPF.jpg",
        "link": "/see/card/movies/800-78/Vygon.html",
        "year": "2024",
        "rating":"6.8"
    },
    {
        "name": "Элиас",
        "image": "https://image.tmdb.org/t/p/w500//saPG6ZSORtOdCbl7S4dinNkpmA6.jpg",
        "link": "/see/card/movies/800-79/Elias.html",
        "year": "2024",
        "rating":"6.2"
    },
    {
        "name": "Граф Монте-Кристо",
        "image": "https://image.tmdb.org/t/p/w500//bv7XaMz155UTyQSOy2CHllMrAf9.jpg",
        "link": "/see/card/movies/800-80/Graf-Monte-Kristo.html",
        "year": "2024",
        "rating":"7.7"
    },
    {
        "name": "Граф Монте-Кристо",
        "image": "https://image.tmdb.org/t/p/original/7O2N253Np012Fm8NGQTe5alTiwy.jpg",
        "link": "/see/card/movies/800-190/Graf-Monte-Kristo2002.html",
        "year": "2002",
        "rating":"7.7"
    },
    {
        "name": "Уровни",
        "image": "https://image.tmdb.org/t/p/w500//yq39ChrCDlqrurYuaC8WM0vC1cx.jpg",
        "link": "/see/card/movies/800-81/Urovni.html",
        "year": "2024",
        "rating":"5.7"
    },
    {
        "name": "Второй акт",
        "image": "https://image.tmdb.org/t/p/w500//8pAaShqpLUYTeik67jjN2IPaz3O.jpg",
        "link": "/see/card/movies/800-82/Vtoroj-akt.html",
        "year": "2024",
        "rating":"6.1"
    },
    {
        "name": "Оппенгеймер",
        "image": "http://image.tmdb.org/t/p/w500//8OQzw8keE6sDNH25sOqPRTxhFTO.jpg",
        "link": "/see/card/movies/800-83/Oppengejmer.html",
        "year": "2023",
        "rating":"8.1"
    },
    {
        "name": "Трансформеры: Начало",
        "image": "https://image.tmdb.org/t/p/w500//47mnEdahUv5I28CKuBx5drLRcuK.jpg",
        "link": "/see/card/cartoons/500-28/Transformery-Nachalo.html",
        "year": "2024",
        "rating":"8.1"
    },
    {
        "name": "Ковбои против пришельцев",
        "image": "http://image.tmdb.org/t/p/w500//iRzfV0jFnUqOjJNIvRu9M3G8Rxv.jpg",
        "link": "/see/card/movies/800-84/Kovboi-protiv-prishelcev.html",
        "year": "2011",
        "rating":"5.6"
    },
    {
        "name": "Стрим",
        "image": "https://image.tmdb.org/t/p/w500//7GVqDiiTUBzyJ2wYpPIO2tWpsYx.jpg",
        "link": "/see/card/movies/800-85/Strim.html",
        "year": "2024",
        "rating":"5.5"
    },
    {
        "name": "Меган: К вашим услугам ",
        "image": "https://image.tmdb.org/t/p/w200//oGoQ5W5Zxo55hbqCu1PsqEmQJIX.jpg",
        "link": "/see/card/movies/800-86/Megan-K-vashim-uslugam.html",
        "year": "2024",
        "rating":"6.7"
    },
    
    {
        "name": "Псы войны",
        "image": "https://image.tmdb.org/t/p/w500//yhGps0BKzV9AiD2u03Iwc52BW4p.jpg",
        "link": "/see/card/movies/800-87/Psy-vojny.html",
        "year": "2024",
        "rating":"6.3"
    },
    {
        "name": "Призрачный гонщик 2",
        "image": "https://image.tmdb.org/t/p/w500//pmjeSQ4NocblwnqFDxk7zXggSQ7.jpg",
        "link": "/see/card/movies/800-88/Prizrachnyj-gonshik-2.html",
        "year": "2012",
        "rating":"5.0"
    },
    {
        "name": "Призрачный гонщик",
        "image": "http://image.tmdb.org/t/p/w500//4ULbCH7RO1bkCCsBEI9gAOm9cWp.jpg",
        "link": "/see/card/movies/800-191/Prizrachnyj-gonshik.html",
        "year": "2007",
        "rating":"5.6"
    },
    {
        "name": "Время",
        "image": "https://image.tmdb.org/t/p/w500//m0rqyzs7IbNaXuJvLTubCG40F92.jpg",
        "link": "/see/card/movies/800-90/Vremya.html",
        "year": "2021",
        "rating":"6.3"
    },
    {
        "name": "Стекло",
        "image": "http://image.tmdb.org/t/p/w500//vICN2wjUMQrrpChnPCzJ1W2LPa1.jpg",
        "link": "/see/card/movies/800-192/Steklo.html",
        "year": "2019",
        "rating":"6.7"
    },
    {
        "name": "Сплит",
        "image": "https://image.tmdb.org/t/p/w500//xrVZF8DJNTPiILFygj8sg4tmauV.jpg",
        "link": "/see/card/movies/800-91/Split.html",
        "year": "2017",
        "rating":"7.3"
    },
    {
        "name": "Неуязвимый",
        "image": "http://image.tmdb.org/t/p/w500//jz968bMurZtNJr1kGNdnqVgqmrJ.jpg",
        "link": "/see/card/movies/800-193/Neuyazvimyj.html",
        "year": "2000",
        "rating":"7.1"
    },
    {
        "name": "Время жить",
        "image": "https://image.tmdb.org/t/p/w500//3PeStsMSHG3sNPpJ9NT1ZGMsi3P.jpg",
        "link": "/see/card/movies/800-93/Vremya-zhit.html",
        "year": "2024",
        "rating":"7.3"
    },
    {
        "name": "Оно 2",
        "image": "http://image.tmdb.org/t/p/w500//rjM13nwgzt80xAUKXVp9mzRYyHp.jpg",
        "link": "/see/card/movies/800-194/Ono-2.html",
        "year": "2019",
        "rating":"6.8"
    },
    {
        "name": "Оно",
        "image": "https://image.tmdb.org/t/p/w500//wEHpeWhH3zGYJbqz3OtUJ4tMMM6.jpg",
        "link": "/see/card/movies/800-94/Ono.html",
        "year": "2017",
        "rating":"7.2"
    },
    {
        "name": "Образцовый самец 2",
        "image": "https://image.tmdb.org/t/p/w500//hSAbrO3FYcvzyBiUHXLflIbSIGZ.jpg",
        "link": "/see/card/movies/800-95/Obrazcovyj-samec-2.html",
        "year": "2016",
        "rating":"4.9"
    },
    {
        "name": "Образцовый самец",
        "image": "http://image.tmdb.org/t/p/w500//7PPWHLcJF7pjuYjorUX8HzmsESu.jpg",
        "link": "/see/card/movies/800-195/Obrazcovyj-samec.html",
        "year": "2001",
        "rating":"6.2"
    },
    {
        "name": "Улыбка 2",
        "image": "https://image.tmdb.org/t/p/w500//xceYC3jmhyZVzBpZVaiJWIoVWa2.jpg",
        "link": "/see/card/movies/800-96/Ulybka-2.html",
        "year": "2024",
        "rating":"6.9"
    },
    {
        "name": "Улыбка",
        "image": "http://image.tmdb.org/t/p/w500//fiBVwImRr5MerRBfyFHeyOHKtCH.jpg",
        "link": "/see/card/movies/800-196/Ulybka.html",
        "year": "2022",
        "rating":"6.7"
    },
    {
        "name": "Грань будущего",
        "image": "https://image.tmdb.org/t/p/w500//98Ll6igWXdjHiKuZtCacTzRGyNX.jpg",
        "link": "/see/card/movies/800-97/Gran-budushego.html",
        "year": "2014",
        "rating":"7.6"
    },
    {
        "name": "Мой сосед - монстр",
        "image": "https://image.tmdb.org/t/p/w500//ipj9b6KZMr6yFidQBf7xxuWnKQi.jpg",
        "link": "/see/card/movies/800-98/Moj-sosed-monstr.html",
        "year": "2024",
        "rating":"6.7"
    },
    {
        "name": "Вышка",
        "image": "https://image.tmdb.org/t/p/w500//8xukbVG9JJfnpcdIEYPijVVOfhH.jpg",
        "link": "/see/card/movies/800-99/Vyshka.html",
        "year": "2022",
        "rating":"7.1"
    },
    {
        "name": "Пол: Секретный материальчик",
        "image": "https://image.tmdb.org/t/p/w500//h5JcoPVADhTh5jSn4QKjvM4tKlK.jpg",
        "link": "/see/card/movies/800-100/Pol-Sekretnyj-materialchik.html",
        "year": "2011",
        "rating":"6.7"
    },
    {
        "name": "Один дома",
        "image": "http://image.tmdb.org/t/p/w500//nkXZwR8k46VDdjdcOctVgZC3MJ5.jpg",
        "link": "/see/card/movies/800-197/Odin-doma2021.html",
        "year": "2021",
        "rating":"4.9"
    },
    {
        "name": "Один дома 5: Праздничное ограбление",
        "image": "http://image.tmdb.org/t/p/w500//6bZdqzK3le84IVUIJCppYMG7UeA.jpg",
        "link": "/see/card/movies/800-198/Odin-doma-5-Prazdnichnoe-ograblenie.html",
        "year": "2012",
        "rating":"5.2"
    },
    {
        "name": "Один дома 4",
        "image": "http://image.tmdb.org/t/p/w500//t5qYSUiF0mlRc7LXBNbCoY7lsJO.jpg",
        "link": "/see/card/movies/800-199/Odin-doma-4.html",
        "year": "2002",
        "rating":"4.5"
    },
    {
        "name": "Один дома 3",
        "image": "http://image.tmdb.org/t/p/w500//pkejadStkq8fMaZtKb3EqBWOJz.jpg",
        "link": "/see/card/movies/800-200/Odin-doma-3.html",
        "year": "1997",
        "rating":"5.3"
    },
    {
        "name": "Один дома 2: Затерянный в Нью-Йорке",
        "image": "http://image.tmdb.org/t/p/w500//tOpSeLYsZLL4h1N9tHcqRm1Y5t2.jpg",
        "link": "/see/card/movies/800-201/Odin-doma-2-Zateryannyj-v-Nyu-Jorke.html",
        "year": "1992",
        "rating":"6.8"
    },
    {
        "name": "Один дома",
        "image": "https://image.tmdb.org/t/p/w500//yeS4fjFnTm6jBRiU6zSzFZ8t9W5.jpg",
        "link": "/see/card/movies/800-101/Odin-doma.html",
        "year": "1990",
        "rating":"7.4"
    },
    {
        "name": "Проводник смерти",
        "image": "https://image.tmdb.org/t/p/w500//yn1aTogxzXyHIXs0ZvUAmalujLo.jpg",
        "link": "/see/card/movies/800-102/Provodnik-smerti.html",
        "year": "2024",
        "rating":"5.5"
    },
    {
        "name": "Паранормальное явление: Ближайшая родня",
        "image": "https://image.tmdb.org/t/p/original/bXAVveHiLotZbWdg3PKGhAzxYKP.jpg",
        "link": "/see/card/movies/800-202/Paranormalnoe-yavlenie-Blizhajshaya-rodnya.html",
        "year": "2021",
        "rating":"6.1"
    },
    {
        "name": "Паранормальное явление 5: Призраки в 3D",
        "image": "http://image.tmdb.org/t/p/w500//ozKoD30eG6kacH5SjcRD1wLnBOj.jpg",
        "link": "/see/card/movies/800-203/Paranormalnoe-yavlenie-5-Prizraki-v-3D.html",
        "year": "2015",
        "rating":"5.3"
    },
    {
        "name": "Паранормальное явление: Метка Дьявола",
        "image": "https://image.tmdb.org/t/p/w500//1rrHvalz3i96FfmHTcIMcwZ6qGC.jpg",
        "link": "/see/card/movies/800-103/Paranormalnoe-yavlenie-Metka-Dyavola.html",
        "year": "2014",
        "rating":"5.4"
    },
    {
        "name": "Паранормальное явление 4",
        "image": "http://image.tmdb.org/t/p/w500//xQukmfHfOZCuG0pxHARMk1xJZMs.jpg",
        "link": "/see/card/movies/800-204/Paranormalnoe-yavlenie-4.html",
        "year": "2012",
        "rating":"5.4"
    },
    {
        "name": "Паранормальное явление 3",
        "image": "http://image.tmdb.org/t/p/w500//nbOOPSsezzvHWuWSEw1j3Ypa67e.jpg",
        "link": "/see/card/movies/800-205/Paranormalnoe-yavlenie-3.html",
        "year": "2011",
        "rating":"5.9"
    },
    {
        "name": "Паранормальное явление 2",
        "image": "http://image.tmdb.org/t/p/w500//cq35G7cR4NAn9nAndBBbHlKNexE.jpg",
        "link": "/see/card/movies/800-206/Paranormalnoe-yavlenie-2.html",
        "year": "2010",
        "rating":"5.8"
    },
    {
        "name": "Паранормальное явление",
        "image": "http://image.tmdb.org/t/p/w500//4PpnPcmAGqpZWpFX5imX0WmWTfZ.jpg",
        "link": "/see/card/movies/800-207/Paranormalnoe-yavlenie.html",
        "year": "2007",
        "rating":"6.0"
    },
    {
        "name": "Ужасающий 3",
        "image": "https://image.tmdb.org/t/p/w500//5jbCnDREJeciL3KR7ZWdSotEgzG.jpg",
        "link": "/see/card/movies/800-104/Uzhasayushij-3.html",
        "year": "2024",
        "rating":"6.9"
    },
    {
        "name": "Ужасающий 2",
        "image": "http://image.tmdb.org/t/p/w500//huYBDlUpa2IwZW8MOceKN9j3Auk.jpg",
        "link": "/see/card/movies/800-208/Uzhasayushij-2.html",
        "year": "2022",
        "rating":"6.7"
    },
    {
        "name": "Ужасающий",
        "image": "http://image.tmdb.org/t/p/w500//knJUVRPou9y254Oa9ckdzK6XPpC.jpg",
        "link": "/see/card/movies/800-209/Uzhasayushij.html",
        "year": "2018",
        "rating":"6.3"
    },
    {
        "name": "Полтора шпиона",
        "image": "https://image.tmdb.org/t/p/w500//z0myyIDZRsGiksfS8hlN3p3NNwc.jpg",
        "link": "/see/card/movies/800-105/Poltora-shpiona.html",
        "year": "2016",
        "rating":"6.4"
    },
    {
        "name": "Ловушка",
        "image": "https://image.tmdb.org/t/p/w500//3VmHv2WVdDFpD8xtoV2wfjtS5rl.jpg",
        "link": "/see/card/movies/800-106/Lovushka.html",
        "year": "2024",
        "rating":"6.3"
    },
    {
        "name": "Робот по имени Чаппи",
        "image": "https://image.tmdb.org/t/p/w500//gEYz6t7RqsseZrJgjD0wR77p3T7.jpg",
        "link": "/see/card/movies/800-107/Robot-po-imeni-Chappi.html",
        "year": "2015",
        "rating":"6.8"
    },
    {
        "name": "Субстанция",
        "image": "https://image.tmdb.org/t/p/w500//x3yhBGbTqlAjxM450BANUNCHpOO.jpg",
        "link": "/see/card/movies/800-108/Substanciya.html",
        "year": "2024",
        "rating":"7.1"
    },
    {
        "name": "Простушка",
        "image": "https://image.tmdb.org/t/p/w500//tTBQSoiv9w9M5mf9qVGfkFDaSF5.jpg",
        "link": "/see/card/movies/800-109/Prostushka.html",
        "year": "2015",
        "rating":"6.8"
    },
    {
        "name": "Затерянное место",
        "image": "https://image.tmdb.org/t/p/w500//qVukhgesgdhVIlRZpsTO6wLVcWI.jpg",
        "link": "/see/card/movies/800-110/Zateryannoe-mesto.html",
        "year": "2024",
        "rating":"6.2"
    },
    {
        "name": "Мачо и ботан 2",
        "image": "http://image.tmdb.org/t/p/w500//iwtNmSFyePLX9CdZ4iXy5kw6wCq.jpg",
        "link": "/see/card/movies/800-210/Macho-i-botan-2.html",
        "year": "2014",
        "rating":"6.8"
    },
    {
        "name": "Мачо и ботан",
        "image": "https://image.tmdb.org/t/p/w500//xjNJi44FDx0xSmUPxpmKIXa8zoY.jpg",
        "link": "/see/card/movies/800-111/Macho-i-botan.html",
        "year": "2012",
        "rating":"6.9"
    },
    {
        "name": "Одинокие волки",
        "image": "https://image.tmdb.org/t/p/w500//54U26SA33pxxJ2lf5mRxWeqRTLu.jpg",
        "link": "/see/card/movies/800-112/Odinokie-volki.html",
        "year": "2024",
        "rating":"6.5"
    },
    {
        "name": "Хэнкок",
        "image": "https://image.tmdb.org/t/p/w500//zH9RhVlpMBzGp9VM7jVmlnZpRuR.jpg",
        "link": "/see/card/movies/800-113/Henkok.html",
        "year": "2008",
        "rating":"6.3"
    },
    {
        "name": "Подай знак",
        "image": "https://image.tmdb.org/t/p/w500//7bIXHZLZoBvo5EbeIdAnL2wCCla.jpg",
        "link": "/see/card/movies/800-114/Podaj-znak.html",
        "year": "2024",
        "rating":"6.7"
    },
    {
        "name": "Я – Четвертый",
        "image": "https://image.tmdb.org/t/p/w500//iCTi4zBFmqKQb0Q8D8FZ3i5hFyx.jpg",
        "link": "/see/card/movies/800-115/Ya–Chetvertyj.html",
        "year": "2011",
        "rating":"6.2"
    },
    {
        "name": "Миллион способов потерять голову",
        "image": "https://image.tmdb.org/t/p/w500//oza59UpAODrr1xSvtoNudWShuut.jpg",
        "link": "/see/card/movies/800-116/Million-sposobov-poteryat-golovu.html",
        "year": "2014",
        "rating":"6.0"
    },
    {
        "name": "Озеро Каддо",
        "image": "https://image.tmdb.org/t/p/w500//tk7g8DWPfak1MNtwX5RY7rcbpO1.jpg",
        "link": "/see/card/movies/800-117/Ozero-Kaddo.html",
        "year": "2024",
        "rating":"7.3"
    },
    {
        "name": "Интерстеллар",
        "image": "https://image.tmdb.org/t/p/w500//vReLRjDV9XPhiOSEW7QWow4DXwf.jpg",
        "link": "/see/card/movies/800-118/Interstellar.html",
        "year": "2014",
        "rating":"8.5"
    },
    {
        "name": "За гранью З/Л/А",
        "image": "https://image.tmdb.org/t/p/w500//jaxQj8lnTMuPkVB2Rp7pkr0M1Ki.jpg",
        "link": "/see/card/movies/800-119/Za-granyu-ZLA.html",
        "year": "2024",
        "rating":"6.7"
    },
    {
        "name": "Zомбилэнд: Контрольный выстрел",
        "image": "http://image.tmdb.org/t/p/w500//ociepR7KE1ixlSps5LZb51rkZwa.jpg",
        "link": "/see/card/movies/800-211/Zombilend-Kontrolnyj-vystrel.html",
        "year": "2019",
        "rating":"6.9"
    },
    {
        "name": "Добро пожаловать в Zомбилэнд",
        "image": "https://image.tmdb.org/t/p/w500//kKImcJWO19FWRwcVf1jJMJ7Q72S.jpg",
        "link": "/see/card/movies/800-120/Dobro-pozhalovat-v-Zombilend.html",
        "year": "2009",
        "rating":"7.3"
    },
    {
        "name": "Битлджус Битлджус",
        "image": "https://image.tmdb.org/t/p/w500//cC27Z2eQJXjII2Bw7D4BDCsTCr1.jpg",
        "link": "/see/card/movies/800-122/Bitldzhus-Bitldzhus.html",
        "year": "2024",
        "rating":"7.0"
    },
    {
        "name": "Битлджюс",
        "image": "http://image.tmdb.org/t/p/w500//vV40BJbN1NVYkOXVdkQt4qi1PmQ.jpg",
        "link": "/see/card/movies/800-212/Bitldzhyus.html",
        "year": "1988",
        "rating":"7.4"
    },
    {
        "name": "Игра в имитацию",
        "image": "https://image.tmdb.org/t/p/w500//iM1C3NYISOzLbWEo8HcUDBASprh.jpg",
        "link": "/see/card/movies/800-123/Igra-v-imitaciyu.html",
        "year": "2014",
        "rating":"8.0"
    },
    {
        "name": "Ворон",
        "image": "https://image.tmdb.org/t/p/w500//msAYTWaQXWGoeChpp5EUGzpMpVb.jpg",
        "link": "/see/card/movies/800-124/Voron.html",
        "year": "2024",
        "rating":"5.8"
    },
    {
        "name": "Ворон",
        "image": "http://image.tmdb.org/t/p/w500//a5ZZ2XfFkcpik8M56lDznqrsyTp.jpg",
        "link": "/see/card/movies/800-213/Voron1994.html",
        "year": "1994",
        "rating":"7.5"
    },
    {
        "name": "Хроника",
        "image": "https://image.tmdb.org/t/p/w500//8gik6OwbWuhUAKctvGRHUgYZJOm.jpg",
        "link": "/see/card/movies/800-125/Hronika.html",
        "year": "2012",
        "rating":"6.8"
    },
    {
        "name": "Грань времени",
        "image": "https://image.tmdb.org/t/p/original/wgm4gdJwb7iSYX0uBsRAZmHQmPm.jpg",
        "link": "/see/card/movies/800-126/Gran-vremeni.html",
        "year": "2020",
        "rating":"6.3"
    },
    {
        "name": "Не говори никому",
        "image": "https://image.tmdb.org/t/p/original/r0xn6drfJXKWetJj58hYEySaQ3N.jpg",
        "link": "/see/card/movies/800-127/Ne-govori-nikomu.html",
        "year": "2024",
        "rating":"7.2"
    },
    {
        "name": "Мой пингвин",
        "image": "https://image.tmdb.org/t/p/w500//n5yjFZLh6sx04B6YKynae1myD2X.jpg",
        "link": "/see/card/movies/800-129/Moj-pingvin.html",
        "year": "2024",
        "rating":"7.5"
    },
    {
        "name": "Гарри Поттер 20 лет спустя: возвращение в Хогвартс",
        "image": "http://image.tmdb.org/t/p/w500//pMlCpcBKTB7h4nhazWl26wgngvf.jpg",
        "link": "/see/card/movies/800-214/Garri-Potter-20-let-spustya-vozvrashenie-v-Hogvarts.html",
        "year": "2022",
        "rating":"7.3"
    },
    {
        "name": "Гарри Поттер и Дары Смерти: Часть II",
        "image": "http://image.tmdb.org/t/p/w500//cSxvq15AOeJ2jNdVRXJvAoZU8T6.jpg",
        "link": "/see/card/movies/800-215/Garri-Potter-i-Dary-Smerti-Chast-II.html",
        "year": "2011",
        "rating":"8.1"
    },
    {
        "name": "Гарри Поттер и Дары Смерти: Часть I",
        "image": "http://image.tmdb.org/t/p/w500//nUJc0DOO0lh8pjLkmMtPObA2NKf.jpg",
        "link": "/see/card/movies/800-216/Garri-Potter-i-Dary-Smerti-Chast-I.html",
        "year": "2010",
        "rating":"7.7"
    },
    {
        "name": "Гарри Поттер и Принц-полукровка",
        "image": "http://image.tmdb.org/t/p/w500//zhMOIXezutmTCeP1AvPZHakGCYs.jpg",
        "link": "/see/card/movies/800-217/Garri-Potter-i-Princ-polukrovka.html",
        "year": "2009",
        "rating":"7.7"
    },
    {
        "name": "Гарри Поттер и Орден Феникса",
        "image": "http://image.tmdb.org/t/p/w500//lBuFOlXNY3YYIkXInGqcd7aJoAY.jpg",
        "link": "/see/card/movies/800-218/Garri-Potter-i-Orden-Feniksa.html",
        "year": "2007",
        "rating":"7.7"
    },
    {
        "name": "Гарри Поттер и Кубок огня",
        "image": "http://image.tmdb.org/t/p/w500//wWlSRexsjrdTWBYY84s671dYde5.jpg",
        "link": "/see/card/movies/800-219/Garri-Potter-i-Kubok-ognya.html",
        "year": "2005",
        "rating":"7.8"
    },
    {
        "name": "Гарри Поттер и узник Азкабана",
        "image": "http://image.tmdb.org/t/p/w500//dd3dM7g6x8TIBBKr22oHM8wZxv8.jpg",
        "link": "/see/card/movies/800-220/Garri-Potter-i-uznik-Azkabana.html",
        "year": "2004",
        "rating":"8.0"
    },
    {
        "name": "Гарри Поттер и Тайная комната",
        "image": "https://image.tmdb.org/t/p/w500//33Wj3LSyoAqtqkeh7YXcVMvTQzc.jpg",
        "link": "/see/card/movies/800-92/Garri-Potter-i-Tajnaya-komnata.html",
        "year": "2002",
        "rating":"7.7"
    },
    {
        "name": "Гарри Поттер и философский камень",
        "image": "https://image.tmdb.org/t/p/w500//Z2CbhtMtbVaBEvhqBKMNB0p0ko.jpg",
        "link": "/see/card/movies/800-130/Garri-Potter-i-filosofskij-kamen.html",
        "year": "2001",
        "rating":"7.9"
    },
    {
        "name": "Хоббит: Битва пяти воинств",
        "image": "http://image.tmdb.org/t/p/w500//19fnHQ9g3Sy87rHKtw3wqhkBGOh.jpg",
        "link": "/see/card/movies/800-221/Hobbit-Bitva-pyati-voinstv.html",
        "year": "2014",
        "rating":"7.3"
    },
    {
        "name": "Хоббит: Пустошь Смауга",
        "image": "http://image.tmdb.org/t/p/w500//ccbf6gnYwB2tMaU9EAgxCi88NEe.jpg",
        "link": "/see/card/movies/800-222/Hobbit-Pustosh-Smauga.html",
        "year": "2013",
        "rating":"7.6"
    },
    {
        "name": "Хоббит: Нежданное путешествие",
        "image": "http://image.tmdb.org/t/p/w500//zTnup9V8UJEG4jWULQQpyKB6Tq0.jpg",
        "link": "/see/card/movies/800-223/Hobbit-Nezhdannoe-puteshestvie.html",
        "year": "2012",
        "rating":"7.4"
    },
    {
        "name": "Властелин колец: Возвращение короля",
        "image": "https://image.tmdb.org/t/p/w500//x6NqCWwU1SrQnvfdmVPAuATyUgD.jpg",
        "link": "/see/card/movies/800-43/Vlastelin-kolec-Vozvrashenie-korolya.html",
        "year": "2003",
        "rating":"8.5"
    },
    {
        "name": "Властелин колец: Две крепости",
        "image": "http://image.tmdb.org/t/p/w500//fl7QZlAoZ4MLcxvgOaBjeUxlpQt.jpg",
        "link": "/see/card/movies/800-224/Vlastelin-kolec-Dve-kreposti.html",
        "year": "2002",
        "rating":"8.4"
    },
    {
        "name": "Властелин колец: Братство кольца",
        "image": "http://image.tmdb.org/t/p/w500//dfoCSXJIamlzlpDCRxXVY5R9GSX.jpg",
        "link": "/see/card/movies/800-225/Vlastelin-kolec-Bratstvo-kolca.html",
        "year": "2001",
        "rating":"8.4"
    },
    {
        "name": "Перси Джексон и Море чудовищ",
        "image": "http://image.tmdb.org/t/p/w500//1cJWgzakpefE5TnEvVHtUfSJ8Zd.jpg",
        "link": "/see/card/movies/800-226/Persi-Dzhekson-i-More-chudovish.html",
        "year": "2013",
        "rating":"6.0"
    },
    {
        "name": "Перси Джексон и похититель молний",
        "image": "https://image.tmdb.org/t/p/w500//xQazS5kqxp9Wpsll3KYs5z4Prqh.jpg",
        "link": "/see/card/movies/800-128/Persi-Dzhekson-i-pohititel-molnij.html",
        "year": "2010",
        "rating":"6.2"
    },
    {
        "name": "Чужой: Ромул",
        "image": "https://image.tmdb.org/t/p/w500//A2CU4WbCZlkYbz9gEFIpchlIGpq.jpg",
        "link": "/see/card/movies/800-131/Chuzhoj-Romul.html",
        "year": "2024",
        "rating":"7.2"
    },
    {
        "name": "Чужой: Завет",
        "image": "http://image.tmdb.org/t/p/w500//5ff1DVsSL7CP5zIjr8ayHaaHScP.jpg",
        "link": "/see/card/movies/800-227/Chuzhoj-Zavet.html",
        "year": "2017",
        "rating":"6.2"
    },
    {
        "name": "Прометей",
        "image": "http://image.tmdb.org/t/p/w500//kE9dT4e44v1hiVM0GBjWEFczCFc.jpg",
        "link": "/see/card/movies/800-121/Prometej.html",
        "year": "2012",
        "rating":"6.6"
    },
    {
        "name": "Чужие против Хищника: Реквием",
        "image": "http://image.tmdb.org/t/p/w500//A7vfsc9IcLgi63KaBFeOvio0yRY.jpg",
        "link": "/see/card/movies/800-228/Chuzhie-protiv-Hishnika-Rekviem.html",
        "year": "2007",
        "rating":"5.2"
    },
    {
        "name": "Чужой против Хищника",
        "image": "http://image.tmdb.org/t/p/w500//uIhgEqmO1Zd9uNJkJzoyvPcgHfA.jpg",
        "link": "/see/card/movies/800-229/Chuzhoj-protiv-Hishnika.html",
        "year": "2004",
        "rating":"5.9"
    },
    {
        "name": "Чужой: Воскрешение",
        "image": "http://image.tmdb.org/t/p/w500//pkiOQmiRtm0JbvBPtbz4PjrZQM3.jpg",
        "link": "/see/card/movies/800-230/Chuzhoj-Voskreshenie.html",
        "year": "1997",
        "rating":"6.2"
    },
    {
        "name": "Чужой 3",
        "image": "http://image.tmdb.org/t/p/w500//x49NIbvqwWZ2apQXAa3009FyEzi.jpg",
        "link": "/see/card/movies/800-231/Chuzhoj-3.html",
        "year": "1992",
        "rating":"6.4"
    },
    {
        "name": "Чужие",
        "image": "http://image.tmdb.org/t/p/w500//sSCmIDZ2EO1oLa8QMq6dL8kNFKq.jpg",
        "link": "/see/card/movies/800-232/Chuzhie.html",
        "year": "1986",
        "rating":"8.0"
    },
    {
        "name": "Чужой",
        "image": "http://image.tmdb.org/t/p/w500//6EXQpftMDnbEFu75fmRGGF6CuOT.jpg",
        "link": "/see/card/movies/800-233/Chuzhoj1979.html",
        "year": "1979",
        "rating":"8.2"
    },
    {
        "name": "128 ударов сердца в минуту",
        "image": "https://image.tmdb.org/t/p/w500//jdKfkrUTl2JknNAeTOnz8We15bX.jpg",
        "link": "/see/card/movies/800-132/128-udarov-serdca-v-minutu.html",
        "year": "2015",
        "rating":"6.8"
    },
    {
        "name": "Дэдпул и Росомаха",
        "image": "https://image.tmdb.org/t/p/w500//8uOIWsrHvBTeZP4LSf25NomvLb6.jpg",
        "link": "/see/card/movies/800-133/Dedpul-i-Rosomaha.html",
        "year": "2024",
        "rating":"7.6"
    },
    {
        "name": "Дэдпул 2",
        "image": "http://image.tmdb.org/t/p/w500//6ieUmjpY7bMMZqIdFxHKUEwfwSB.jpg",
        "link": "/see/card/movies/800-234/Dedpul-2.html",
        "year": "2018",
        "rating":"7.5"
    },
    {
        "name": "Дэдпул",
        "image": "http://image.tmdb.org/t/p/w500//r5PYZGOiIQuGpaZas9TTplNZ5Ox.jpg",
        "link": "/see/card/movies/800-235/Dedpul.html",
        "year": "2016",
        "rating":"7.6"
    },
    {
        "name": "Бойфренд из будущего",
        "image": "https://image.tmdb.org/t/p/w500//xWk8ukJ6dhRvlrboG3qgNWNtLJ1.jpg",
        "link": "/see/card/movies/800-134/Bojfrend-iz-budushego.html",
        "year": "2013",
        "rating":"7.9"
    },
    {
        "name": "После. Навсегда",
        "image": "http://image.tmdb.org/t/p/w500//p5NuTOVdJsje6qOjsLStoaXsoGy.jpg",
        "link": "/see/card/movies/800-143/Posle-Navsegda.html",
        "year": "2023",
        "rating":"6.9"
    },
    {
        "name": "После. Долго и счастливо",
        "image": "http://image.tmdb.org/t/p/w500//7SAIQcQfPgimB7BHef9DANUQZkY.jpg",
        "link": "/see/card/movies/800-142/Posle-Dolgo-i-schastlivo.html",
        "year": "2022",
        "rating":"6.8"
    },
    {
        "name": "После. Глава 3",
        "image": "http://image.tmdb.org/t/p/w500//eRmylmc17IIxKKQrGcQt1723APP.jpg",
        "link": "/see/card/movies/800-141/Posle-Glava-3.html",
        "year": "2021",
        "rating":"7.0"
    },
    {
        "name": "После. Глава 2",
        "image": "http://image.tmdb.org/t/p/w500//kWkFxHdXhKBM3NmncrX8JYhVXEe.jpg",
        "link": "/see/card/movies/800-140/Posle-Glava-2.html",
        "year": "2020",
        "rating":"7.2"
    },
    {
        "name": "После",
        "image": "https://image.tmdb.org/t/p/w500//7Prt3Le9H0EeRYVltAXFJqwDIig.jpg",
        "link": "/see/card/movies/800-135/Posle.html",
        "year": "2019",
        "rating":"7.1"
    },
    {
        "name": "Ребел-Ридж",
        "image": "https://image.tmdb.org/t/p/w500//8rnSpfoXiizlIGFEIRed7h8inrP.jpg",
        "link": "/see/card/movies/800-136/Rebel-Ridzh.html",
        "year": "2024",
        "rating":"7.0"
    },
    {
        "name": "Ты водишь!",
        "image": "https://image.tmdb.org/t/p/w500//4GTpZgK5ijNGzJSB6tXjz8Xz7t2.jpg",
        "link": "/see/card/movies/800-137/Ty-vodish!.html",
        "year": "2018",
        "rating":"6.7"
    },
    {
        "name": "Место под соснами",
        "image": "https://image.tmdb.org/t/p/w500//8y4tBbEUVdD3uGjqos21EAOAxc5.jpg",
        "link": "/see/card/movies/800-138/Mesto-pod-sosnami.html",
        "year": "2013",
        "rating":"7.0"
    },
    {
        "name": "Чаща",
        "image": "https://image.tmdb.org/t/p/w500//ihzZSZZ2eFmbxscbnqy3e5YOvtp.jpg",
        "link": "/see/card/movies/800-139/Chasha.html",
        "year": "2024",
        "rating":"6.4"
    },
    // Мультфиьльмы
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
        "link": "/see/card/cartoons/500-53/Paranorman,-ili-Kak-priruchit-zombi.html#",
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
        "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jo20xWDab4qDXgq8eiPyQ2dCASC.jpg",
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
        "image": "http://image.tmdb.org/t/p/w500//7RK9GHFArnQusZERwYwIaMZwRll.jpg",
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
    {
        "name": "Рик и Морти",
        "image": "http://image.tmdb.org/t/p/w500//wdzk1wPGOnO8dCnaQozSpe1oH9l.jpg",
        "link": "/see/card/cartoons/500-73/Rik-i-Morti.html",
        "year": "2013",
        "rating":"8.7"
    },
    {
        "name": "Время приключений",
        "image": "http://image.tmdb.org/t/p/w500//kMXB29thNci4oHVbH2bP18XSIav.jpg",
        "link": "/see/card/cartoons/500-74/Vremya-priklyuchenij.html",
        "year": "2010",
        "rating":"8.5"
    },
    {
        "name": "Симпсоны",
        "image": "http://image.tmdb.org/t/p/w500//171yRAHGCziNjtO53sEil1PH64v.jpg",
        "link": "/see/card/cartoons/500-75/Simpsony.html",
        "year": "1989",
        "rating":"8.0"
    },
    {
        "name": "Южный Парк",
        "image": "http://image.tmdb.org/t/p/w500//nfttp2lquST92j4ItAYdmtdoj5t.jpg",
        "link": "/see/card/cartoons/500-76/Yuzhnyj-Park.html",
        "year": "1997",
        "rating":"8.4"
    },
    {
        "name": "Гриффины",
        "image": "http://image.tmdb.org/t/p/w500//seS4Uv5EvezwCS4aVfiBcvB4q4y.jpg",
        "link": "/see/card/cartoons/500-77/Griffiny.html",
        "year": "1999",
        "rating":"7.4"
    },
    {
        "name": "Футурама",
        "image": "http://image.tmdb.org/t/p/w500//407xqcHFS2O3NsqBo2XpprCjKSc.jpg",
        "link": "/see/card/cartoons/500-78/Futurama.html",
        "year": "1999",
        "rating":"8.4"
    },

    // конец
    
    // Сериалы
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
    // Мультфильмы
    {
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
        "name": "Корпорация Монстров",
        "image": "https://image.tmdb.org/t/p/w500//zXIusESsQ7ZXP9MFwbvcTTZ3XWF.jpg",
        "link": "/see/card/cartoons/500-22/Korporaciya-Monstrov.html",
        "year": "2001",
        "rating":"7.8"
    },
    {
        "name": "Миссия: Красный",
        "image": "https://image.tmdb.org/t/p/w500//6T36kuDbXCGRistIewSwKyTmijt.jpg",
        "link": "/see/card/movies/800-26/Missiya-Krasnyj.html",
        "year": "2024",
        "rating":"7.1"
    },
    {
        "name": "Братья Гримм",
        "image": "https://image.tmdb.org/t/p/w500//aADABzbuqnVWjXIu2jO5M1IkEIR.jpg",
        "link": "/see/card/movies/800-27/Bratya-Grimm.html",
        "year": "2005",
        "rating":"5.8"
    },
    {
        "name": "Посвященный",
        "image": "https://image.tmdb.org/t/p/w500//aXXEcHZsZ2lXUxPLaadnXeZVz5c.jpg",
        "link": "/see/card/movies/800-29/Posvyashennyj.html",
        "year": "2014",
        "rating":"6.6"
    },
    {
        "name": "И гаснет свет",
        "image": "https://image.tmdb.org/t/p/w500//f5njPYl9eQdwf0xUwJuQ7no6ET.jpg",
        "link": "/see/card/movies/800-30/I-gasnet-svet.html",
        "year": "2016",
        "rating":"6.4"
    },
    {
        "name": "Комната желаний",
        "image": "https://image.tmdb.org/t/p/w500//de2V6MaJzGRclg1pQaSG2v3i0yW.jpg",
        "link": "/see/card/movies/800-39/Komnata-zhelanij.html",
        "year": "2019",
        "rating":"6.4"
    },
    {
        "name": "Дорогой Санта",
        "image": "https://image.tmdb.org/t/p/w500//v4LzYnQ1VGb0Q191Eb0NDSxdEKy.jpg",
        "link": "/see/card/movies/800-51/Dorogoj-Santa.html",
        "year": "2024",
        "rating":"6.3"
    },
    {
        "name": "Вивариум",
        "image": "https://image.tmdb.org/t/p/w500//6z5otnH68jltjyC6748irDsC7B3.jpg",
        "link": "/see/card/movies/800-37/Vivarium.html",
        "year": "2019",
        "rating":"6.1"
    },
    {
        "name": "Марсианин",
        "image": "https://image.tmdb.org/t/p/w500//6U19srkH4wI6taluviXbVaIpsau.jpg",
        "link": "/see/card/movies/800-47/Marsianin.html",
        "year": "2015",
        "rating":"7.7"
    },
    {
        "name": "Наполеон",
        "image": "https://image.tmdb.org/t/p/w500//z7E0ZtNnRheOZThX2QtSu3RmtXP.jpg",
        "link": "/see/card/movies/800-89/Napoleon.html",
        "year": "2023",
        "rating":"6.4"
    },
    {
        "name": "Другой человек",
        "image": "https://image.tmdb.org/t/p/w500//dX5CQBzWX6ePHj8WvHWideMYw5D.jpg",
        "link": "/see/card/movies/800-64/Drugoj-chelovek.html",
        "year": "2024",
        "rating":"7.1"
    },
    {
        "name": "Топ Ган: Мэверик",
        "image": "http://image.tmdb.org/t/p/w500//niNo4qTtIule2vvMFW05amvMtOB.jpg",
        "link": "/see/card/movies/800-10/Top-Gan-Meverik.html",
        "year": "2022",
        "rating":"8.2"
    },
    {
        "name": "Лучший стрелок",
        "image": "http://image.tmdb.org/t/p/w500//8khU38Bv9ovTAP9M7lHqFA5ezAU.jpg",
        "link": "/see/card/movies/800-144/Luchshij-strelok.html",
        "year": "1986",
        "rating":"7.1"
    },
    {
        "name": "Собачья жизнь 2",
        "image": "http://image.tmdb.org/t/p/w500//nTIYb1c3JcqFRo9V1RIzflsJTmj.jpg",
        "link": "/see/card/movies/800-151/Sobachya-zhizn-2.html",
        "year": "2019",
        "rating":"8.1"
    },
    {
        "name": "Собачья жизнь",
        "image": "http://image.tmdb.org/t/p/w500//iTSNCcbjehovQf26YcW2uTRKBhH.jpg",
        "link": "/see/card/movies/800-152/Sobachya-zhizn.html",
        "year": "2017",
        "rating":"7.6"
    },
    {
        "name": "Миссия невыполнима: Смертельная...",
        "image": "http://image.tmdb.org/t/p/w500//qncL23TGeAqmqmbBxJl4R6nYToJ.jpg",
        "link": "/see/card/movies/800-12/Missiya-nevypolnima-Smertelnaya....html",
        "year": "2023",
        "rating":"7.5"
    },
    {
        "name": "Миссия невыполнима: Последствия",
        "image": "http://image.tmdb.org/t/p/w500//2hDzCRhXWm5ry2nFs9HQBIon1DJ.jpg",
        "link": "/see/card/movies/800-145/Missiya-nevypolnima-Posledstviya.html",
        "year": "2018",
        "rating":"7.4"
    },
    {
        "name": "Миссия невыполнима: Племя изгоев",
        "image": "http://image.tmdb.org/t/p/w500//fTZcCAdMtMQllBRabszq6tZwhxS.jpg",
        "link": "/see/card/movies/800-146/Missiya-nevypolnima-Plemya-izgoev.html",
        "year": "2015",
        "rating":"7.2"
    },
    {
        "name": "Миссия невыполнима: Протокол Фантом",
        "image": "http://image.tmdb.org/t/p/w500//neKiBzXzI6yuN8Fn8beoLcYASsE.jpg",
        "link": "/see/card/movies/800-147/Missiya-nevypolnima-Protokol-Fantom.html",
        "year": "2011",
        "rating":"7.1"
    },
    {
        "name": "Миссия невыполнима 3",
        "image": "http://image.tmdb.org/t/p/w500//1QgOjoYLproxIWRZxhZx9pXsmuY.jpg",
        "link": "/see/card/movies/800-148/Missiya-nevypolnima-3.html",
        "year": "2006",
        "rating":"6.7"
    },
    {
        "name": "Миссия невыполнима 2",
        "image": "http://image.tmdb.org/t/p/w500//er6j9Gh6cX2na9B0wXMcPAD2tbl.jpg",
        "link": "/see/card/movies/800-149/Missiya-nevypolnima-2.html",
        "year": "2000",
        "rating":"6.1"
    },
    {
        "name": "Миссия невыполнима",
        "image": "http://image.tmdb.org/t/p/w500//1qnh1n1tVRq7JY8MYbvaZgfRfq2.jpg",
        "link": "/see/card/movies/800-150/Missiya-nevypolnima.html",
        "year": "1996",
        "rating":"7.0"
    },
    {
        "name": "Стражи Галактики. Часть 3",
        "image": "http://image.tmdb.org/t/p/w500//5rHLzqZvw85tnhy8qpnAsN8Q7xO.jpg",
        "link": "/see/card/movies/800-153/Strazhi-Galaktiki-Chast-3.html",
        "year": "2023",
        "rating":"7.9"
    },
    {
        "name": "Стражи Галактики. Часть 2",
        "image": "http://image.tmdb.org/t/p/w500//miAFwzWPkv7l8VPwgH2sV5oQQKx.jpg",
        "link": "/see/card/movies/800-154/Strazhi-Galaktiki-Chast-2.html",
        "year": "2017",
        "rating":"7.6"
    },
    {
        "name": "Стражи Галактики",
        "image": "http://image.tmdb.org/t/p/w500//s8jpilArz8J5X07O4IB7ahMwgQP.jpg",
        "link": "/see/card/movies/800-14/Strazhi-Galaktiki.html",
        "year": "2014",
        "rating":"7.9"
    },
    {
        "name": "Достать ножи: Стеклянная луковица",
        "image": "http://image.tmdb.org/t/p/w500//14PudL6hCEhqwPDbxoBt2RHK5cC.jpg",
        "link": "/see/card/movies/800-155/Dostat-nozhi-Steklyannaya-lukovica.html",
        "year": "2022",
        "rating":"7.1"
    },
    {
        "name": "Достать ножи",
        "image": "http://image.tmdb.org/t/p/w500//mGfb75tcFWxuT8esS1isHrNFE90.jpg",
        "link": "/see/card/movies/800-17/Dostat-nozhi.html",
        "year": "2019",
        "rating":"7.8"
    },
    {
        "name": "Бегущий по лезвию 2049",
        "image": "http://image.tmdb.org/t/p/w500//kAq1RFHqtZrBvKve7GOGdgUU399.jpg",
        "link": "/see/card/movies/800-16/Begushij-po-lezviyu-2049.html",
        "year": "2017",
        "rating":"7.6"
    },
    {
        "name": "Бегущий по лезвию",
        "image": "http://image.tmdb.org/t/p/w500//dFzA82XdkobzdOjrYLMIfApzCVC.jpg",
        "link": "/see/card/movies/800-156/Begushij-po-lezviyu.html",
        "year": "1982",
        "rating":"7.9"
    },
    {
        "name": "Джон Уик 4",
        "image": "http://image.tmdb.org/t/p/w500//o29otcx30U3EkqNVGC2feJVz5yr.jpg",
        "link": "/see/card/movies/800-22/Dzhon-Uik-4.html",
        "year": "2023",
        "rating":"7.7"
    },
    {
        "name": "Джон Уик 3",
        "image": "http://image.tmdb.org/t/p/w500//2RDx4bMYF5TbTdTBoOwDLDgIej.jpg",
        "link": "/see/card/movies/800-157/Dzhon-Uik-3.html",
        "year": "2019",
        "rating":"7.4"
    },
    {
        "name": "Джон Уик 2",
        "image": "http://image.tmdb.org/t/p/w500//60dPOD22s6TS2SfQiiOGOePBg8N.jpg",
        "link": "/see/card/movies/800-158/Dzhon-Uik-2.html",
        "year": "2017",
        "rating":"7.3"
    },
    {
        "name": "Джон Уик",
        "image": "http://image.tmdb.org/t/p/w500//2hfeF2566IKZ30c1BAay0N2lxBr.jpg",
        "link": "/see/card/card/movies/800-159/Dzhon-Uik.html",
        "year": "2014",
        "rating":"7.4"
    },
    {
        "name": "Новые мутанты",
        "image": "http://image.tmdb.org/t/p/w500//2lyCa61EoF44vcQPXQfJzNvKT2D.jpg",
        "link": "/see/card/movies/800-160/Novye-mutanty.html",
        "year": "2020",
        "rating":"6.1"
    },
    {
        "name": "Люди Икс: Тёмный Феникс",
        "image": "http://image.tmdb.org/t/p/w500//927lqua6AHPW4mUflU26yV3APKZ.jpg",
        "link": "/see/card/movies/800-161/Lyudi-Iks-Tyomnyj-Feniks.html",
        "year": "2019",
        "rating":"6.0"
    },
    {
        "name": "Люди Икс: Апокалипсис",
        "image": "http://image.tmdb.org/t/p/w500//aJ0WyuZpyRjTpz1DT1jcwgReXnP.jpg",
        "link": "/see/card/movies/800-162/Lyudi-Iks-Apokalipsis.html",
        "year": "2016",
        "rating":"6.5"
    },
    {
        "name": "Люди Икс: Дни минувшего будущего",
        "image": "https://image.tmdb.org/t/p/w500//9IdeGyzRZH66RgNq9zSZDwPPllg.jpg",
        "link": "/see/card/movies/800-28/Lyudi-Iks-Dni-minuvshego-budushego.html",
        "year": "2014",
        "rating":"7.5"
    },
    {
        "name": "Росомаха: Бессмертный",
        "image": "http://image.tmdb.org/t/p/w500//ol7Qyzx31q6HG9zGOvqiPIUIk3f.jpg",
        "link": "/see/card/movies/800-163/Rosomaha-Bessmertnyj.html",
        "year": "2013",
        "rating":"6.4"
    },
    {
        "name": "Люди Икс: Первый класс",
        "image": "http://image.tmdb.org/t/p/w500//6vkQtWNHqq3uzcS0PH2mER7Gzjd.jpg",
        "link": "/see/card/movies/800-164/Lyudi-Iks-Pervyj-klass.html",
        "year": "2011",
        "rating":"7.3"
    },
    {
        "name": "Люди Икс: Начало. Росомаха",
        "image": "http://image.tmdb.org/t/p/w500//nuOayxoKOCT6jog60i4A0iEfVk0.jpg",
        "link": "/see/card/movies/800-165/Lyudi-Iks-Nachalo-Rosomaha.html",
        "year": "2009",
        "rating":"6.3"
    },
    {
        "name": "Люди Икс: Последняя битва",
        "image": "http://image.tmdb.org/t/p/w500//jD5bK5jxDprc1StAhHXMAgaEBMY.jpg",
        "link": "/see/card/movies/800-166/Lyudi-Iks-Poslednyaya-bitva.html",
        "year": "2006",
        "rating":"6.4"
    },
    {
        "name": "Люди Икс 2",
        "image": "http://image.tmdb.org/t/p/w500//qkQ3KZ0wF7pyPWMzL5TxnEKKDiJ.jpg",
        "link": "/see/card/movies/800-167/Lyudi-Iks-2.html",
        "year": "2003",
        "rating":"7.0"
    },
    {
        "name": "Люди Икс",
        "image": "http://image.tmdb.org/t/p/w500//wBqh8PMSOoUmSCyilXR8IRnjhwN.jpg",
        "link": "/see/card/movies/800-168/Lyudi-Iks.html",
        "year": "2000",
        "rating":"7.0"
    },
    {
        "name": "Дом у дороги",
        "image": "https://image.tmdb.org/t/p/w500//z8AWDW9BaZ1oQohej87TdACGszm.jpg",
        "link": "/see/card/movies/800-31/Dom-u-dorogi.html",
        "year": "2024",
        "rating":"6.9"
    },
    {
        "name": "Придорожная закусочная",
        "image": "http://image.tmdb.org/t/p/w500//2vYF1J7QeM1On7thBAL2RnVibHk.jpg",
        "link": "/see/card/card/movies/800-169/Pridorozhnaya-zakusochnaya.html",
        "year": "1989",
        "rating":"6.7"
    },
    {
        "name": "King’s Man: Начало",
        "image": "http://image.tmdb.org/t/p/w500//9NyzS42sc9mvNLyPJtYqTqpkEoY.jpg",
        "link": "/see/card/movies/800-170/King’s-Man-Nachalo.html",
        "year": "2021",
        "rating":"6.7"
    },
    {
        "name": "Kingsman: Золотое кольцо",
        "image": "http://image.tmdb.org/t/p/w500//vVQXYV7x6gpk9oVFbzsBxkIxdqT.jpg",
        "link": "/see/card/movies/800-171/Kingsman-Zolotoe-kolco.html",
        "year": "2017",
        "rating":"7.0"
    },
    {
        "name": "Kingsman: Секретная служба",
        "image": "https://image.tmdb.org/t/p/w500//1br1GunwmrGaD9H3eyRPjLx1HY4.jpg",
        "link": "/see/card/movies/800-32/Kingsman-Sekretnaya-sluzhba.html",
        "year": "2015",
        "rating":"7.6"
    },
    {
        "name": "Побег из Шоушенка",
        "image": "https://image.tmdb.org/t/p/w500//yvmKPlTIi0xdcFQIFcQKQJcI63W.jpg",
        "link": "/see/card/movies/800-33/Pobeg-iz-Shoushenka.html",
        "year": "1994",
        "rating":"8.7"
    },
    {
        "name": "Счастливого нового дня смерти",
        "image": "http://image.tmdb.org/t/p/w500//ZstlucYRCRfkZ74O2LUfbbNbyb.jpg",
        "link": "/see/card/movies/800-172/Schastlivogo-novogo-dnya-smerti.html",
        "year": "2019",
        "rating":"6.3"
    },
    {
        "name": "Счастливого дня смерти",
        "image": "https://image.tmdb.org/t/p/w500//gxOqCjZ3YGxZpkKchQbHX3DeQ3V.jpg",
        "link": "/see/card/movies/800-34/Schastlivogo-dnya-smerti.html",
        "year": "2017",
        "rating":"6.7"
    },
    {
        "name": "Геошторм",
        "image": "https://image.tmdb.org/t/p/w500//8kMSc2UVFCXScIvhkSuSiROySbS.jpg",
        "link": "/see/card/movies/800-36/Geoshtorm.html",
        "year": "2017",
        "rating":"6.1"
    },
    {
        "name": "Тёмный рыцарь: Возрождение легенды",
        "image": "http://image.tmdb.org/t/p/w500//2NaeRiOuxkpWv8s0uBzSlp7SuCn.jpg",
        "link": "/see/card/movies/800-173/Tyomnyj-rycar-Vozrozhdenie-legendy.html",
        "year": "2012",
        "rating":"7.8"
    },
    {
        "name": "Тёмный рыцарь",
        "image": "https://image.tmdb.org/t/p/w500//dxWaYQtgpLbycqUpHzkqqYkT5I3.jpg",
        "link": "/see/card/movies/800-38/Tyomnyj-rycar.html",
        "year": "2008",
        "rating":"8.5"
    },
    {
        "name": "Бэтмен: Начало",
        "image": "http://image.tmdb.org/t/p/w500//fIfmG3EaIy3eqebyq7hXjl1ymQW.jpg",
        "link": "/see/card/movies/800-174/Betmen-Nachalo.html",
        "year": "2005",
        "rating":"7.7"
    },
    {
        "name": "Реальные упыри",
        "image": "https://image.tmdb.org/t/p/w500//tmUHOe07a84zgwMeWCpwnAqUwU4.jpg",
        "link": "/see/card/movies/800-40/Realnye-upyri.html",
        "year": "2014",
        "rating":"7.6"
    },
    {
        "name": "Крёстный отец 3",
        "image": "http://image.tmdb.org/t/p/w500//b0kAYDl4NApOfzNWdlYzmXwujYU.jpg",
        "link": "/see/card/movies/800-175/Kryostnyj-otec-3.html",
        "year": "1990",
        "rating":"7.4"
    },
    {
        "name": "Крёстный отец 2",
        "image": "http://image.tmdb.org/t/p/w500//tOLQ3iRDfbwhVaw3QjDzIOS7zcu.jpg",
        "link": "/see/card/movies/800-176/Kryostnyj-otec-2.html",
        "year": "1974",
        "rating":"8.6"
    },
    {
        "name": "Крёстный отец",
        "image": "http://image.tmdb.org/t/p/w500//hoowzozsn0XQGtgH8nyivAMZfPN.jpg",
        "link": "/see/card/movies/800-41/Kryostnyj-otec.html",
        "year": "1972",
        "rating":"8.7"
    },
    {
        "name": "Джобс: Империя соблазна",
        "image": "https://image.tmdb.org/t/p/w500//vPuWVOBvMsnpdIT8Qb2suLhIFSi.jpg",
        "link": "/see/card/movies/800-42/Dzhobs-Imperiya-soblazna.html",
        "year": "2013",
        "rating":"6.1"
    },
    {
        "name": "Скотт Пилигрим против всех",
        "image": "https://image.tmdb.org/t/p/w500//bLJEFAh6tILVS1PS5mCRlA9HVsR.jpg",
        "link": "/see/card/movies/800-44/Skott-Piligrim-protiv-vseh.html",
        "year": "2010",
        "rating":"7.5"
    },
    {
        "name": "Спасти рядового Райана",
        "image": "https://image.tmdb.org/t/p/w500//vhIwsqsMmdv6uwup4V6HJSMcQxI.jpg",
        "link": "/see/card/movies/800-45/Spasti-ryadovogo-Rajana.html",
        "year": "1998",
        "rating":"8.2"
    },
    {
        "name": "Пассажиры",
        "image": "https://image.tmdb.org/t/p/w500//RY7YPqLRkgK5KiIq3kFQhCUJnB.jpg",
        "link": "/see/card/movies/800-46/Passazhiry.html",
        "year": "2016",
        "rating":"7.0"
    },
    
    {
        "name": "Список Шиндлера",
        "image": "https://image.tmdb.org/t/p/w500//4K8fGGcJP2EoGDucILnaJcOJhZl.jpg",
        "link": "/see/card/movies/800-48/Spisok-Shindlera.html",
        "year": "1993",
        "rating":"8.6"
    },
    {
        "name": "5-я волна",
        "image": "https://image.tmdb.org/t/p/w500//5ngef6vRYcn55NixtJAfK2JTDxY.jpg",
        "link": "/see/card/movies/800-49/5-aya-volna.html",
        "year": "2016",
        "rating":"5.9"
    },
    {
        "name": "Бойцовский клуб",
        "image": "https://image.tmdb.org/t/p/w500//66RvLrRJTm4J8l3uHXWF09AICol.jpg",
        "link": "/see/card/movies/800-50/Bojcovskij-klub.html",
        "year": "1999",
        "rating":"8.4"
    },
    {
        "name": "Ущелье",
        "image": "http://image.tmdb.org/t/p/w500//yiUINsMKnemBFcUHqpv94yJolWH.jpg",
        "link": "/see/card/movies/800-02/Ushele.html",
        "year": "2025",
        "rating":"7.7"
    },
    {
        "name": "Назад в будущее 3",
        "image": "http://image.tmdb.org/t/p/w500//xLRedXsCU3jDALWiQYNv1ZUbH5T.jpg",
        "link": "/see/card/movies/800-177/Nazad-v-budushee-3.html",
        "year": "1990",
        "rating":"7.5"
    },
    {
        "name": "Назад в будущее 2",
        "image": "http://image.tmdb.org/t/p/w500//ieHWlIrxpTpdmvqjgxxq0lXsgYc.jpg",
        "link": "/see/card/movies/800-178/Nazad-v-budushee-2.html",
        "year": "1989",
        "rating":"7.8"
    },
    {
        "name": "Назад в будущее",
        "image": "https://image.tmdb.org/t/p/w500//9a07nfvCoAAyUMfY0yQqsOjlb2C.jpg",
        "link": "/see/card/movies/800-52/Nazad-v-budushee.html",
        "year": "1985",
        "rating":"8.3"
    },
    {
        "name": "Щелкунчики",
        "image": "https://image.tmdb.org/t/p/w500//iAoS1l0nRLKl4d97mbKF4pUFZhn.jpg",
        "link": "/see/card/movies/800-53/Shelkunchiki.html",
        "year": "2024",
        "rating":"5.9"
    },
    {
        "name": "Гладиатор 2",
        "image": "http://image.tmdb.org/t/p/w500//6N7F1Ga9m0CTHziA2Fs7BQczaKZ.jpg",
        "link": "/see/card/movies/800-179/Gladiator-2.html",
        "year": "2024",
        "rating":"6.8"
    },
    {
        "name": "Гладиатор",
        "image": "https://image.tmdb.org/t/p/w500//1wjNqlfsuHNTXTpCt2ZOV2iPxaf.jpg",
        "link": "/see/card/movies/800-54/Gladiator.html",
        "year": "2000",
        "rating":"8.2"
    },
    {
        "name": "Почему он?",
        "image": "https://image.tmdb.org/t/p/w500//q0wK2bXSLulAre276C6M4ZS8Kfo.jpg",
        "link": "/see/card/movies/800-55/Pochemu-on.html",
        "year": "2016",
        "rating":"6.4"
    },
    {
        "name": "Аватар: Путь воды",
        "image": "http://image.tmdb.org/t/p/w500//yFNn7uWudLLWDJqfj3fwh5CcUdR.jpg",
        "link": "/see/card/movies/800-180/Avatar-Put-vody.html",
        "year": "2022",
        "rating":"7.6"
    },
    {
        "name": "Аватар",
        "image": "https://image.tmdb.org/t/p/w200//lUKcrcO3wEPhNnzGq06JIX7GIEb.jpg",
        "link": "/see/card/movies/800-56/Avatar.html",
        "year": "2009",
        "rating":"7.6"
    },
    {
        "name": "21 мост",
        "image": "http://image.tmdb.org/t/p/w500//lWDDukaPvDzIRYxgUuGFIH5YfyM.jpg",
        "link": "/see/card/movies/800-01/21-Most.html",
        "year": "2019",
        "rating":"6.8"
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
        "name": "Магазин светильников",
        "image": "https://image.tmdb.org/t/p/w500//edzQHpnGiwYYf1wRRv91iJETtWX.jpg",
        "link": "/see/card/series/900-29/Magazin-svetilnikov.html",
        "year": "2024",
        "rating":"8.6"
    },

    // Аниме
    {
        "name": "Башня Бога",
        "image": "http://image.tmdb.org/t/p/w500//m4FQUNPbxonuv4kcFm1YgyRgl2C.jpg",
        "link": "/see/card/anime/100-01/Bashnya-Boga.html",
        "year": "2020",
        "rating":"8.3"
    },
    {
        "name": "Поднятие уровня в одиночку",
        "image": "http://image.tmdb.org/t/p/w500//orLdJQCcC1Lq13xt62P2xJycyAL.jpg",
        "link": "/see/card/anime/100-02/Podnyatie-urovnya-v-odinochku.html",
        "year": "2024",
        "rating":"8.5"
    },
    {
        "name": "Наруто: Ураганные хроники",
        "image": "http://image.tmdb.org/t/p/w500//dIRmrc4XwLJWc3eTCe7KaOYJdKX.jpg",
        "link": "/see/card/anime/100-03/Naruto-Uragannye-hroniki.html",
        "year": "2007",
        "rating":"8.5"
    },
    {
        "name": "Блич",
        "image": "http://image.tmdb.org/t/p/w500//nqOO3OmDpTsSgVLUZn2T1Dr2mcV.jpg",
        "link": "/see/card/anime/100-04/Blich.html",
        "year": "2004",
        "rating":"8.4"
    },
    {
        "name": "Ванпанчмен",
        "image": "http://image.tmdb.org/t/p/w500//nhq66gOdiAp5mnNbVsxAonliffa.jpg",
        "link": "/see/card/anime/100-05/Vanpanchmen.html",
        "year": "2015",
        "rating":"8.5"
    },
    {
        "name": "Восхождение в тени!",
        "image": "http://image.tmdb.org/t/p/w500//eRwEUoIPJ6hNUalD848Ud4F77gZ.jpg",
        "link": "/see/card/anime/100-06/Voshozhdenie-v-teni.html",
        "year": "2022",
        "rating":"8.1"
    },
    {
        "name": "Магическая битва",
        "image": "http://image.tmdb.org/t/p/w500//rcHnYQHyFRpl9uOltPQILx8Cnla.jpg",
        "link": "/see/card/anime/100-07/Magicheskaya-bitva.html",
        "year": "2020",
        "rating":"8.6"
    },
    {
        "name": "Баскетбол Куроко",
        "image": "http://image.tmdb.org/t/p/w500//ftT1qtT6yWO5rfs237a466N8QRr.jpg",
        "link": "/see/card/anime/100-08/Basketbol-Kuroko.html",
        "year": "2012",
        "rating":"8.5"
    },
    {
        "name": "Дорохедоро",
        "image": "http://image.tmdb.org/t/p/w500//lzngNiuEmUYj7oKB5ZWrJggUXFL.jpg",
        "link": "/see/card/anime/100-09/Dorohedoro.html",
        "year": "2020",
        "rating":"8.3"
    },
    {
        "name": "Человек-бензопила",
        "image": "http://image.tmdb.org/t/p/w500//92Ds0hOHObvZBekqneimrGpxyXh.jpg",
        "link": "/see/card/anime/100-10/Chelovek-benzopila.html",
        "year": "2022",
        "rating":"8.6"
    },
    {
        "name": "Дороро",
        "image": "http://image.tmdb.org/t/p/w500//oudk6QIrLLtMlmVBBQoheNzcqeI.jpg",
        "link": "/see/card/anime/100-11/Dororo.html",
        "year": "2019",
        "rating":"8.6"
    },
    {
        "name": "Чёрный клевер",
        "image": "http://image.tmdb.org/t/p/w500//vcsAzsoSJEHgJZ29EkxXWSEVbDN.jpg",
        "link": "/see/card/anime/100-12/Chyornyj-klever.html",
        "year": "2017",
        "rating":"8.5"
    },
    {
        "name": "Магия и мускулы",
        "image": "http://image.tmdb.org/t/p/w500//vp3oSq3XUSDeSjv4fvSVlT4mleC.jpg",
        "link": "/see/card/anime/100-13/Magiya-i-muskuly.html",
        "year": "2023",
        "rating":"8.3"
    },
    {
        "name": "Школа-тюрьма",
        "image": "http://image.tmdb.org/t/p/w500//50eY9B9JtWcG0KuY5SS1X7E9wQb.jpg",
        "link": "/see/card/anime/100-14/Shkola-tyurma.html",
        "year": "2015",
        "rating":"8.1"
    },
    {
        "name": "Шарлотта",
        "image": "http://image.tmdb.org/t/p/w500//rMOGHPGfuywDViL9Oc0tA29oxtA.jpg",
        "link": "/see/card/anime/100-15/Sharlotta.html",
        "year": "2015",
        "rating":"8.3"
    },
    {
        "name": "Семья шпиона",
        "image": "http://image.tmdb.org/t/p/w500//xMqGSPjjnc4awD4R8JrRTW0IGOt.jpg",
        "link": "/see/card/anime/100-16/Semya-shpiona.html",
        "year": "2022",
        "rating":"8.6"
    },
    {
        "name": "Борьба в прямом эфире",
        "image": "http://image.tmdb.org/t/p/w500//fJw0XoP3t1VNhKLqanyxVOMxjwX.jpg",
        "link": "/see/card/anime/100-17/Borba-v-pryamom-efire.html",
        "year": "2024",
        "rating":"8.3"
    },
    {
        "name": "Врата Штейна 0",
        "image": "http://image.tmdb.org/t/p/w500//qpd4qivQAVnJ7Zz6QFCE9km5Jiu.jpg",
        "link": "/see/card/anime/100-18/Vrata-Shtejna-0.html",
        "year": "2018",
        "rating":"8.0"
    },
    {
        "name": "Ох, уж этот экстрасенс Сайки Кусуо!",
        "image": "http://image.tmdb.org/t/p/w500//hqOIldYJTq8eI1APi4tx4rZuiHe.jpg",
        "link": "/see/card/anime/100-19/Oh,-uzh-etot-ekstrasens-Sajki-Kusuo.html",
        "year": "2016",
        "rating":"8.3"
    },
    {
        "name": "Ван-Пис",
        "image": "http://image.tmdb.org/t/p/w500//osRT8GsND3PfhvevsS5DK9px0LI.jpg",
        "link": "/see/card/anime/100-20/Van-Pis.html",
        "year": "1999",
        "rating":"8.7"
    },
    {
        "name": "Добро пожаловать в N.H.K.",
        "image": "http://image.tmdb.org/t/p/w500//5iXnyp9zQb3tNTSOXn0rAJOlxu0.jpg",
        "link": "/see/card/anime/100-21/Dobro-pozhalovat-v-N.H.K..html",
        "year": "2006",
        "rating":"8.5"
    },
    {
        "name": "Атака титанов",
        "image": "http://image.tmdb.org/t/p/w500//p5nYJj1N5pVMUixtyIJtfkw1FEr.jpg",
        "link": "/see/card/anime/100-22/Ataka-titanov.html",
        "year": "2013",
        "rating":"8.7"
    },
    {
        "name": "Драконий жемчуг супер",
        "image": "http://image.tmdb.org/t/p/w500//9gzkpjs6N7Xxo1CnnJqhFtmYCez.jpg",
        "link": "/see/card/anime/100-23/Drakonij-zhemchug-super.html",
        "year": "2015",
        "rating":"8.2"
    },
    {
        "name": "Волейбол!!",
        "image": "http://image.tmdb.org/t/p/w500//5lrJDEQjwCJPLdlfhBmJ8mfpnpX.jpg",
        "link": "/see/card/anime/100-24/Volejbol.html",
        "year": "2014",
        "rating":"8.6"
    },
    {
        "name": "Мартовский лев",
        "image": "http://image.tmdb.org/t/p/w500//ufgAYwzv6N2JrOWwyAkoGKMlMbo.jpg",
        "link": "/see/card/anime/100-25/Martovskij-lev.html",
        "year": "2016",
        "rating":"7.9"
    },
    {
        "name": "Истребитель демонов",
        "image": "http://image.tmdb.org/t/p/w500//zg3GrU3jAoTGxmlGGhkfNYMOHlb.jpg",
        "link": "/see/card/anime/100-26/Istrebitel-demonov.html",
        "year": "2019",
        "rating":"8.7"
    },
    {
        "name": "Баки",
        "image": "http://image.tmdb.org/t/p/w500//6n3DLulcCLbHbkQiC9KBHUbZfGr.jpg",
        "link": "/see/card/anime/100-27/Baki.html",
        "year": "2001",
        "rating":"8.1"
    },
    {
        "name": "Нана",
        "image": "http://image.tmdb.org/t/p/w500//5XyTQaZcWgn1iqSuxsh5FRzuJjB.jpg",
        "link": "/see/card/anime/100-28/Nana.html",
        "year": "2006",
        "rating":"8.4"
    },
    {
        "name": "Моя геройская академия",
        "image": "http://image.tmdb.org/t/p/w500//aqOnGXW5eCQpfyx74Lu3GTt0AXU.jpg",
        "link": "/see/card/anime/100-29/Moya-gerojskaya-akademiya.html",
        "year": "2016",
        "rating":"8.6"
    },
    {
        "name": "Страстное Сердце: Дикий Бомбардир",
        "image": "http://image.tmdb.org/t/p/w500//b0yW5cQX97QfhXeJU9kbQ4UYj9V.jpg",
        "link": "/see/card/anime/100-30/Strastnoe-Serdce-Dikij-Bombardir.html",
        "year": "2002",
        "rating":"7.9"
    },
    {
        "name": "Дарованный",
        "image": "http://image.tmdb.org/t/p/w500//gIZtv9fPZMsITHu2PSGiFnEQqHq.jpg",
        "link": "/see/card/anime/100-31/Darovannyj.html",
        "year": "2019",
        "rating":"8.6"
    },
    {
        "name": "Летнее время",
        "image": "http://image.tmdb.org/t/p/w500//gyf39hodpr1qJzUXGFuGNlxysdi.jpg",
        "link": "/see/card/anime/100-32/Letnee-vremya.html",
        "year": "2022",
        "rating":"8.2"
    },
    {
        "name": "Стальной Алхимик: Братство",
        "image": "http://image.tmdb.org/t/p/w500//n2M0BslYmciTcxHc0SpwSljujUG.jpg",
        "link": "/see/card/anime/100-33/Stalnoj-Alhimik-Bratstvo.html",
        "year": "2009",
        "rating":"8.7"
    },
    {
        "name": "Юри на льду",
        "image": "http://image.tmdb.org/t/p/w500//uwHOl8SLvGcbumIlpHgFAqVCEb2.jpg",
        "link": "/see/card/anime/100-34/Yuri-na-ldu.html",
        "year": "2016",
        "rating":"8.6"
    },
    {
        "name": "Семь смертных грехов",
        "image": "http://image.tmdb.org/t/p/w500//rRZdyqqRAn1h45oNpA69NehQLcI.jpg",
        "link": "/see/card/anime/100-35/Sem-smertnyh-grehov.html",
        "year": "2014",
        "rating":"8.4"
    },
    {
        "name": "Пес и Пускающая в ход ножницы",
        "image": "http://image.tmdb.org/t/p/w500//aOa03hyMhuQlDLmPOovMsAphYH0.jpg",
        "link": "/see/card/anime/100-36/Pes-i-Puskayushaya-v-hod-nozhnicy.html",
        "year": "2013",
        "rating":"6.4"
    },
    {
        "name": "Призрак в доспехах: Синдром одиночки",
        "image": "http://image.tmdb.org/t/p/w500//wG7iZsxxFd6PPdYHndpDIMTPdaC.jpg",
        "link": "/see/card/anime/100-37/Prizrak-v-dospehah-Sindrom-odinochki.html",
        "year": "2002",
        "rating":"8.2"
    },
    {
        "name": "Токийский Гуль",
        "image": "http://image.tmdb.org/t/p/w500//cB9pdS49LbAryFtJpPQYwfFXbJd.jpg",
        "link": "/see/card/anime/100-38/Tokijskij-Gul.html",
        "year": "2014",
        "rating":"8.3"
    },
    {
        "name": "Мастера меча онлайн",
        "image": "http://image.tmdb.org/t/p/w500//htNohqrYEwuz4fCa9ATVF90s58S.jpg",
        "link": "/see/card/anime/100-39/Mastera-mecha-onlajn.html",
        "year": "2012",
        "rating":"8.2"
    },
    {
        "name": "Убийца Акаме!",
        "image": "http://image.tmdb.org/t/p/w500//3Jtt3UgwtjJHRFDWZBFwaOji9F.jpg",
        "link": "/see/card/anime/100-40/Ubijca-Akame!.html",
        "year": "2014",
        "rating":"8.3"
    },
    {
        "name": "Синие Мибуро",
        "image": "http://image.tmdb.org/t/p/w500//rADnozoUIkrJKBD1CMBPnOBWoqh.jpg",
        "link": "/see/card/anime/100-41/Sinie-Miburo.html",
        "year": "2024",
        "rating":"8.4"
    },
    {
        "name": "Тетрадь смерти",
        "image": "http://image.tmdb.org/t/p/w500//jtyBJAqZUUKL1WjyiUTngiviRqI.jpg",
        "link": "/see/card/anime/100-42/Tetrad-smerti.html",
        "year": "2006",
        "rating":"8.6"
    },
    {
        "name": "Унесённые призраками",
        "image": "http://image.tmdb.org/t/p/w500//xV3zYcOA6xFjYwizIMDDkl2MGT7.jpg",
        "link": "/see/card/anime/100-43/Unesyonnye-prizrakami.html",
        "year": "2001",
        "rating":"8.5"
    },
    {
        "name": "ПЛУТОН",
        "image": "http://image.tmdb.org/t/p/w500//uO5kzuKlkISDBzW8QXchk65haRp.jpg",
        "link": "/see/card/anime/100-44/PLUTON.html",
        "year": "2023",
        "rating":"7.9"
    },
    {
        "name": "Ходячий замок",
        "image": "http://image.tmdb.org/t/p/w500//oQvAlVSjYsJZPg9raiQRYE0aVrv.jpg",
        "link": "/see/card/anime/100-45/Hodyachij-zamok.html",
        "year": "2004",
        "rating":"8.4"
    },
    {
        "name": "Перерождение: Монстр",
        "image": "http://image.tmdb.org/t/p/w500//cxV7wPMW3Xeuu27rV9MJrZm4I7y.jpg",
        "link": "/see/card/anime/100-46/Pererozhdenie-Monstr.html",
        "year": "2024",
        "rating":"8.2"
    },
    {
        "name": "Звёзды Айкацу!",
        "image": "http://image.tmdb.org/t/p/w500//fiWqW5wYF702dpQWwSeRwKOyXqZ.jpg",
        "link": "/see/card/anime/100-47/Zvyozdy-Ajkacu!.html",
        "year": "2016",
        "rating":"6.8"
    },
    {
        "name": "Хоримия",
        "image": "http://image.tmdb.org/t/p/w500//2ZOfEetRHnqCBzvubdYU3ytwcq.jpg",
        "link": "/see/card/anime/100-48/Horimiya.html",
        "year": "2021",
        "rating":"8.6"
    },
    {
        "name": "Обещанный Неверленд",
        "image": "http://image.tmdb.org/t/p/w500//eY2WprrRHCCD2J00PjNJ1Itodlr.jpg",
        "link": "/see/card/anime/100-49/Obeshannyj-Neverlend.html",
        "year": "2019",
        "rating":"8.4"
    },
    {
        "name": "Твоё имя",
        "image": "http://image.tmdb.org/t/p/w500//iH2WDCYLIUjc7oPWRT7Kxgxza6k.jpg",
        "link": "/see/card/anime/100-50/Tvoe-imya.html",
        "year": "2016",
        "rating":"8.5"
    },
    {
        "name": "О моём перерождении в слизь",
        "image": "http://image.tmdb.org/t/p/w500//dyvUkf3bFFd0tC2yJCJ6rUgeZRO.jpg",
        "link": "/see/card/anime/100-51/O-moyom-pererozhdenii-v-sliz.html",
        "year": "2018",
        "rating":"8.5"
    },
    {
        "name": "Могила светлячков",
        "image": "http://image.tmdb.org/t/p/w500//nJYXr0RAznczy5tCZtYcjoYMjEg.jpg",
        "link": "/see/card/anime/100-52/Mogila-svetlyachkov.html",
        "year": "1988",
        "rating":"8.5"
    },
    {
        "name": "Мононокэ",
        "image": "http://image.tmdb.org/t/p/w500//g2Hm6h1tQU0w0A1wH7gwB4tH7e7.jpg",
        "link": "/see/card/anime/100-53/Mononoke.html",
        "year": "2007",
        "rating":"7.9"
    },
    {
        "name": "Форма голоса",
        "image": "http://image.tmdb.org/t/p/w500//c0Gv8xTSEmIcQPxbhINKvkbJO8s.jpg",
        "link": "/see/card/anime/100-54/Forma-golosa.html",
        "year": "2016",
        "rating":"8.4"
    },
    {
        "name": "Реинкарнация безработного",
        "image": "http://image.tmdb.org/t/p/w500//bC2DRV5S6BDtW0DmAqN3g3xtLoP.jpg",
        "link": "/see/card/anime/100-55/Reinkarnaciya-bezrabotnogo.html",
        "year": "2021",
        "rating":"8.5"
    },
    {
        "name": "Банановая рыба",
        "image": "http://image.tmdb.org/t/p/w500//3GiB5Ybbhzt0ePRR2zgld9R56DB.jpg",
        "link": "/see/card/anime/100-56/Bananovaya-ryba.html",
        "year": "2018",
        "rating":"8.6"
    },
    {
        "name": "Принцесса Мононоке",
        "image": "http://image.tmdb.org/t/p/w500//dZE9oUyp14UEoPk5QV7emBu0Ix3.jpg",
        "link": "/see/card/anime/100-57/Princessa-Mononoke.html",
        "year": "1997",
        "rating":"8.3"
    },
    {
        "name": "Рок-Шоу!!",
        "image": "http://image.tmdb.org/t/p/w500//cDhy72poqVcnevY3BOGlE76bdca.jpg",
        "link": "/see/card/anime/100-58/Rok-Shou!!.html",
        "year": "2020",
        "rating":"6.0"
    },
    {
        "name": "Мой сосед Тоторо",
        "image": "http://image.tmdb.org/t/p/w500//ynClhtTAYG8N7FfU7EYK0T131rj.jpg",
        "link": "/see/card/anime/100-59/Moj-sosed-Totoro.html",
        "year": "1988",
        "rating":"8.1"
    },
    {
        "name": "Хост-клуб Оранской школы",
        "image": "http://image.tmdb.org/t/p/w500//rd6QqoO7mOqrfOWiSEa6XL9Jqlv.jpg",
        "link": "/see/card/anime/100-60/Host-klub-Oranskoj-shkoly.html",
        "year": "2006",
        "rating":"8.2"
    },
    {
        "name": "Аватар: Легенда об Аанге",
        "image": "http://image.tmdb.org/t/p/w500//pbTLpt8c7YUT4Vr6DE2ai3HY6U7.jpg",
        "link": "/see/card/anime/100-61/Avatar-Legenda-ob-Aange.html",
        "year": "2005",
        "rating":"8.7"
    },
    {
        "name": "Адский рай",
        "image": "http://image.tmdb.org/t/p/w500//75OaIA4S8ZKFVNmKnTCgAcNqwlC.jpg",
        "link": "/see/card/anime/100-62/Adskij-raj.html",
        "year": "2023",
        "rating":"8.2"
    },
    {
        "name": "Дитя погоды",
        "image": "http://image.tmdb.org/t/p/w500//unkWKrTb4SdHAEb78AD4BJvXbwh.jpg",
        "link": "/see/card/anime/100-63/Ditya pogody.html",
        "year": "2019",
        "rating":"8.0"
    },
    {
        "name": "Доктор Стоун",
        "image": "http://image.tmdb.org/t/p/w500//uJQCHiHAo7hoDyRPZ792ctjSZ71.jpg",
        "link": "/see/card/anime/100-64/Doktor-Stoun.html",
        "year": "2019",
        "rating":"8.5"
    },
    {
        "name": "Паприка",
        "image": "http://image.tmdb.org/t/p/w500//75lTLdVBlpWocSO8nWJqddyedCH.jpg",
        "link": "/see/card/anime/100-65/Paprika.html",
        "year": "2006",
        "rating":"7.8"
    },
    {
        "name": "Бродяга Кэнсин",
        "image": "http://image.tmdb.org/t/p/w500//eNs5hTCeZtZCy6rTTsH4sMOrKGZ.jpg",
        "link": "/see/card/anime/100-66/Brodyaga-Kensin.html",
        "year": "2023",
        "rating":"8.4"
    },
    {
        "name": "Король шаманов",
        "image": "http://image.tmdb.org/t/p/w500//conBjZLX8KBc18vdQjSNegZytln.jpg",
        "link": "/see/card/anime/100-67/Korol-shamanov.html",
        "year": "2001",
        "rating":"8.5"
    },
    {
        "name": "5 сантиметров в секунду",
        "image": "http://image.tmdb.org/t/p/w500//ef5Kpp8knIaWCsuKHKE41cQpuPl.jpg",
        "link": "/see/card/anime/100-68/5-santimetrov-v-sekundu.html",
        "year": "2007",
        "rating":"7.3"
    },
    {
        "name": "Путешествие Кино",
        "image": "http://image.tmdb.org/t/p/w500//HMCWRefv371GcIo1HsU0rkC7xx.jpg",
        "link": "/see/card/anime/100-69/Puteshestvie-Kino.html",
        "year": "2003",
        "rating":"7.7"
    },
    {
        "name": "Синий Экзорцист",
        "image": "http://image.tmdb.org/t/p/w500//g2RmOH0cDET7pptUrLnzVM6w8DJ.jpg",
        "link": "/see/card/anime/100-70/Sinij-Ekzorcist.html",
        "year": "2011",
        "rating":"7.9"
    },
    {
        "name": "Судьба: Начало",
        "image": "http://image.tmdb.org/t/p/w500//lkV0BOHMvdxHrfTWQfaFiKfKpRV.jpg",
        "link": "/see/card/anime/100-71/Sudba-Nachalo.html",
        "year": "2011",
        "rating":"8.0"
    },
    {
        "name": "Хвост Феи",
        "image": "http://image.tmdb.org/t/p/w500//q5GiuJHgJJwwk14ufs0ToxFkKt6.jpg",
        "link": "/see/card/anime/100-72/Hvost-Fei.html",
        "year": "2009",
        "rating":"7.9"
    },
    // Конец
    
];

let typingTimer;  // Таймер для отслеживания задержки
const typingInterval = 400;  // Интервал задержки в миллисекундах

$('#search').keyup(function () {
    clearTimeout(typingTimer);  // Очищаем предыдущий таймер

    var searchField = $('#search').val().trim().replace(/\s+/g, '').toLowerCase(); // Убираем пробелы и приводим к нижнему регистру

    // Если поле пустое, очищаем результаты
    if (searchField === "") {
        $('#update').html("");
        return;
    }

    const updateContainer = document.getElementById('update');
    
    // Отображаем полосу загрузки
    if (updateContainer) {
        updateContainer.innerHTML = `
            <div class="loading-bar-container">
                <div class="loading-bar"></div>
            </div>
        `;
    }

    // Устанавливаем новый таймер
    typingTimer = setTimeout(function () {
        var myExp = new RegExp(searchField, "i");
        var output = '';
        var resultCount = 0;

        $.each(data, function (key, val) {
            var nameWithoutSpaces = val.name.replace(/\s+/g, '').toLowerCase(); // Убираем пробелы и приводим к нижнему регистру

            if (nameWithoutSpaces.search(searchField) != -1) {
                resultCount++;

                if (resultCount > 12) return false;

                output += `
                <div class="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <div class="card full-card cards-from-search">
                        <a href="${val.link}">
                            <img src="${val.image}" class="card-img-top all-flim-img" alt="${val.name}">
                            <div class="card-rating"><span class="span-rating">${val.rating}</span></div>
                            <div class="card-body">
                                <span class="card-tex">${val.name}<br><span class="year">${val.year}</span></span>
                            </div>
                        </a>
                    </div>
                </div>
                `;
            }
        });

        // Если ничего не найдено, показываем сообщение
        if (output === '') {
            output = '<p class="no-results">По вашему запросу ничего не найдено.</p>';
        }

        // Заменяем полосу загрузки на результаты поиска
        if (updateContainer) {
            updateContainer.innerHTML = output;
        }
    }, typingInterval);  // Задержка 400 миллисекунд
});
