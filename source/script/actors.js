// actors.js

const DEFAULT_IMG = '../../../source/images/logo/actor.jpg';

export function showActors(data) {
    console.log('actors.js: Получены данные. Пытаемся обновить список актеров.');
    const actorsContainer = document.getElementById('actors-container');
    console.log('actors.js: Найден элемент #actors-container:', !!actorsContainer);

    if (!actorsContainer) {
        console.error('actors.js: Элемент #actors-container не найден!');
        return;
    }

    actorsContainer.innerHTML = '';
    const actors = data.credits?.cast || [];

    if (actors.length === 0) {
        actorsContainer.innerHTML = '<p style="font-family: sans-serif;">Актеры не найдены</p>';
        return;
    }

    const actorsToShow = actors.slice(0, 6); // Показывать до 6 актеров
    console.log('actors.js: Отображаем', actorsToShow.length, 'актеров.');

    actorsToShow.forEach(actor => {
        actorsContainer.innerHTML += `
            <div class="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <div class="actor-cards-container">
                    <div class="actor-card-wrapper">
                        <div class="actor-card">
                            <img src="${actor.profile_path ? 'https://image.tmdb.org/t/p/w500' + actor.profile_path : DEFAULT_IMG}" class="actor-photo" alt="${actor.name}">
                            <div class="actor-name-overlay">
                                <h5 class="actor-name">${actor.name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}