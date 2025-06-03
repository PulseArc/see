
function generateMovieCards(cardData, containerSelector, contentType, startIndexForContent = 0, hiddenClassName = 'card-container') {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error('Ошибка: Контейнер для карточек не найден по селектору:', containerSelector);
        return;
    }

    // 1. Отфильтровываем только те элементы, которые соответствуют заданному contentType.
    const filteredContent = cardData.filter(item => item.type === contentType);

    // Если контента данного типа не найдено, выходим
    if (filteredContent.length === 0) {
        container.innerHTML = `<p>${contentType} не найдены.</p>`;
        return;
    }

    // 2. Теперь работаем с отфильтрованным массивом `filteredContent`.
    let actualStartIndex = Math.min(startIndexForContent, filteredContent.length - 1);
    if (actualStartIndex < 0) {
        actualStartIndex = 0;
    }

    const endIndex = Math.min(actualStartIndex + 60, filteredContent.length);

    // 3. Берем срез данных из отфильтрованного массива.
    const cardsToGenerate = filteredContent.slice(actualStartIndex, endIndex);

    let cardsHtml = ''; // Строка для сборки HTML

    // 4. Генерируем HTML для каждой карточки в полученном срезе.
    cardsToGenerate.forEach((item, index) => {
        // Определяем, должен ли элемент быть скрыт, используя переданный hiddenClassName.
        const hiddenPart = index >= 12 ? ` ${hiddenClassName} hidden` : ''; // Добавляем пробел в начале

        cardsHtml += `
            <div class="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2${hiddenPart}">
                <div class="card full-card" style="width: 12.35em;">
                    <a href="${item.link}">
                        <img src="${item.image}"
                            class="card-img-top all-flim-img" alt="${item.name}" loading="lazy">
                        <div class="card-rating"><span class="span-rating">${item.rating}</span></div>
                        <div class="card-body">
                            <span class="card-tex">${item.name} <br><span class="year">${item.year}</span></span>
                        </div>
                    </a>
                </div>
            </div>
        `;
    });

    // 5. Вставляем весь собранный HTML в контейнер.
    container.innerHTML = cardsHtml;
}
