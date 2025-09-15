// description.js

function createKeywordSpans(keywords) {
    return keywords.map(keyword => `<span>${keyword.name}</span>`).join('');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = date.toLocaleDateString('ru-RU', options);
    if (formattedDate.endsWith(' г.')) {
        formattedDate = formattedDate.slice(0, -3);
    }
    return formattedDate;
}

export function showMovieDescription(data) {
    console.log('description.js: Получены данные. Пытаемся обновить описание.');
    try {
        // Проверка наличия элементов
        const descriptionContainer = document.getElementById('description-container');
        console.log('description.js: Найден элемент #description-container:', !!descriptionContainer);

        const productionContainer = document.getElementById('production-container');
        console.log('description.js: Найден элемент #production-container:', !!productionContainer);

        const keywordsContainer = document.getElementById('keywords-container');
        console.log('description.js: Найден элемент #keywords-container:', !!keywordsContainer);

        if (descriptionContainer) {
            descriptionContainer.innerHTML = data.overview ? `<p>${data.overview}</p>` : '<p style="font-family: sans-serif;color: rgb(218, 215, 215);">Без Описания</p>';
        }

        if (productionContainer) {
            if (data.production_companies && data.production_companies.length > 0) {
                productionContainer.innerHTML = data.production_companies.map(company => `<span>${company.name}</span>`).join('');
            } else {
                productionContainer.innerHTML = '<p style="font-family: sans-serif;color: rgb(218, 215, 215);">Производство не указано</p>';
            }
        }

        if (keywordsContainer) {
            const keywords = (data.keywords?.keywords || data.keywords?.results) || [];
            if (keywords.length > 0) {
                keywordsContainer.innerHTML = createKeywordSpans(keywords);
            } else {
                keywordsContainer.innerHTML = '<p style="font-family: sans-serif;color: rgb(218, 215, 215);">Ключевые слова не доступны для этого фильма</p>';
            }
        }

        const releaseDateContainer = document.querySelector('#column div:nth-child(1) p:nth-child(2)');
        if (releaseDateContainer) {
            releaseDateContainer.textContent = data.release_date ? formatDate(data.release_date) : data.first_air_date ? formatDate(data.first_air_date) : 'Не указано';
        }

        const budgetContainer = document.querySelector('#column div:nth-child(2) p:nth-child(2)');
        if (budgetContainer) {
            budgetContainer.textContent = data.budget ? `$ ${data.budget.toLocaleString()}` : '$ 0';
        }

        const countriesContainer = document.querySelector('#column div:nth-child(3) p:nth-child(2)');
        if (countriesContainer) {
            countriesContainer.textContent = data.production_countries && data.production_countries.length > 0 ? data.production_countries.map(country => country.name).join(', ') : 'Не указано';
        }

    } catch (error) {
        console.error('description.js: Произошла ошибка при загрузке данных:', error);
    }
}