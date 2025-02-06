// Лайки дизлайки
$(document).ready(function() {
    $(".full-smile-rate-warp").click(function() {
        let countElement = $(this).find(".full-smile-rate");
        
        if (!countElement.hasClass("clicked")) { 
            let currentCount = parseInt(countElement.text());
            countElement.text(currentCount + 1);
            countElement.addClass("clicked"); // Блокируем повторный клик
            $(this).addClass("clicked");
        }
    });

    $(".Like, .Dislike").click(function() {
        let targetId = $(this).attr("data-target");
        let targetElement = $("#" + targetId);

        if (targetElement.length && !targetElement.hasClass("clicked") && !$(this).hasClass("clicked")) {
            let currentCount = parseInt(targetElement.text());
            targetElement.text(currentCount + 1);
            
            // Блокируем повторное нажатие
            targetElement.addClass("clicked");
            $(this).addClass("clicked");
        }
    });
});
// Конец


// Находим элементы
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search'); // Поле ввода
  const resultsContainer = document.getElementById('results-container'); // Контейнер результатов
  const menuToggle = document.querySelector('#menuCheckbox'); // Чекбокс меню
  const searchWrapper = document.querySelector('.search-wrapper'); // Внешний контейнер
  const clearIcon = document.querySelector('.clear-icon'); // Крестик для очистки
  const phoneVersion = document.querySelector('.Phone-version'); // Блок, которому меняем margin

  searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim(); // Получаем текст из поля поиска
      
      if (query.length > 0) {
          // Показываем контейнер с результатами, если есть текст
          resultsContainer.style.display = 'block';
          clearIcon.style.display = 'inline'; // Показываем крестик
          
          // Логика обновления содержимого результатов
          const updateContainer = document.getElementById('update');
          updateContainer.innerHTML = `<p>Результаты для: "${query}"</p>`;
          
          // Прокрутка страницы вверх
          window.scrollTo({
              top: 0, // Начало страницы
              behavior: 'smooth' // Плавная прокрутка
          });

          // Добавляем margin-top: 12vh к .Phone-version
          if (phoneVersion) {
              phoneVersion.style.marginTop = '8vh';
          }
      } else {
          // Скрываем контейнер, если поле ввода пустое
          resultsContainer.style.display = 'none';
          clearIcon.style.display = 'none'; // Прячем крестик

          // Убираем margin-top, если поиск сброшен
          if (phoneVersion) {
              phoneVersion.style.marginTop = '';
          }
      }
  });

  // Событие клика по крестику
clearIcon.addEventListener('click', () => {
    searchInput.value = ''; // Очищаем поле ввода
    resultsContainer.style.display = 'none'; // Скрываем контейнер с результатами
    clearIcon.style.display = 'none'; // Скрываем крестик
    searchInput.blur(); // Убираем фокус, скрывая клавиатуру
  });
  
  // Скрытие клавиатуры при нажатии Enter
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Предотвращаем стандартное поведение формы
      searchInput.blur(); // Убираем фокус с поля, скрывая клавиатуру
    }
  });

  // Событие переключения меню
  menuToggle.addEventListener('change', () => {
      if (menuToggle.checked) {
          searchWrapper.classList.add('hidden'); // Применяем класс для скрытия
      } else {
          searchWrapper.classList.remove('hidden'); // Убираем класс для показа
      }
  });
});






document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector('.navbar');
  const navbarPlaceholder = document.querySelector('.navbar-placeholder');
  const navbarHeight = navbar.offsetHeight;

  window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
          navbar.classList.add('scrolled');
          navbarPlaceholder.style.display = 'block'; // Показываем фиктивный элемент
          navbarPlaceholder.style.height = `${navbarHeight}px`; // Устанавливаем высоту фиктивного элемента
      } else {
          navbar.classList.remove('scrolled');
          navbarPlaceholder.style.display = 'none'; // Скрываем фиктивный элемент
      }
  });
});



// ссылки и блоб на фильмы

document.addEventListener('DOMContentLoaded', () => {
  // Массив байтов (пример)
  const videoData = new Uint8Array([/* заполните массив реальными данными */]);

  // Создаем Blob и URL
  const videoBlob = new Blob([videoData], { type: 'video/mp4' });
  const videoURL = URL.createObjectURL(videoBlob);

  // Получаем элементы
  const videoSource = document.getElementById('full-video-source');
  const videoElement = document.getElementById('full-video');
  const playButton = document.getElementById('play-video-btn');

  // Обновляем источник видео
  videoSource.src = videoURL;

  // Инициализируем Video.js плеер для контейнера с id 'full-video'
  const player = videojs('full-video');

  // Обработчик клика по кнопке для воспроизведения видео
  playButton.addEventListener('click', () => {
    // Пытаемся воспроизвести видео после клика
    player.play().catch((error) => {
      console.error('Ошибка при воспроизведении видео:', error);
    });
  });
});
    
// конец







