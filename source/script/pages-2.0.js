







// Находим элементы
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search');
  const resultsContainer = document.getElementById('results-container');
  const menuToggle = document.querySelector('#menuToggle input');
  const searchWrapper = document.querySelector('.search-wrapper');
  const clearIcon = document.querySelector('.clear-icon');
  const homeBackgroundImage = document.querySelector('.Home-background-image');

  // Бургер
if (menuToggle && searchWrapper) {
  menuToggle.addEventListener('change', () => {
      if (menuToggle.checked) {
          // Меню открыто
          searchWrapper.classList.add('hidden-by-menu'); // <--- ВОТ ЭТА СТРОКА
          searchWrapper.classList.remove('active'); // Сворачиваем поиск визуально

          
      } else {
          // Меню закрыто
          searchWrapper.classList.remove('hidden-by-menu'); // <--- И ВОТ ЭТА СТРОКА
          searchInput.removeAttribute('disabled'); // Разрешаем ввод
          updateSearchInputState(); // Обновляем состояние на основе mouseover/mouseout
      }
  });
}
// конец

  // Функция для обновления состояния поля ввода
  function updateSearchInputState() {
      if (searchWrapper.classList.contains('active')) {
          searchInput.removeAttribute('disabled'); // Разрешить ввод
      } else {
          searchInput.setAttribute('disabled', 'disabled'); // Запретить ввод
      }
  }

  // Изначальная проверка состояния
  updateSearchInputState();

  // Обработчик события наведения мыши (для разворачивания поля)
  searchWrapper.addEventListener('mouseover', () => {
      searchWrapper.classList.add('active');
      updateSearchInputState();
  });

  // Обработчик события ухода мыши (для сворачивания поля)
  searchWrapper.addEventListener('mouseout', () => {
      searchWrapper.classList.remove('active');
      updateSearchInputState();
  });

  // Обработчик события изменения состояния меню (если это влияет на поиск)
  if (menuToggle && searchWrapper) {
      menuToggle.addEventListener('change', () => {
          // Здесь может быть ваша логика, определяющая, когда поиск активен/неактивен
          // Например, если при открытом меню поиск должен быть неактивен:
          if (menuToggle.checked) {
              searchWrapper.classList.remove('active'); // Сворачиваем поиск
          } else {
              // searchWrapper.classList.add('active'); // Разворачиваем поиск (опционально)
          }
          updateSearchInputState();
      });
  }

  // Проверяем, существуют ли элементы перед тем, как с ними работать
  if (!searchInput || !resultsContainer || !clearIcon) return;

  searchInput.addEventListener('input', () => {
      if (searchInput.disabled) { // Проверяем, заблокировано ли поле
          return; // Ничего не делаем, если поиск неактивен
      }
      const query = searchInput.value.trim(); // Получаем текст из поля поиска

      if (query.length > 0) {
          // Показываем контейнер с результатами, если есть текст
          resultsContainer.style.display = 'block';
          clearIcon.style.display = 'inline'; // Показываем крестик

          // Логика обновления содержимого результатов

          // Прокрутка страницы вверх
          window.scrollTo({
              top: 0, // Начало страницы
              behavior: 'smooth' // Плавная прокрутка
          });

          // Устанавливаем marginTop, если есть результат
          if (homeBackgroundImage) {
              homeBackgroundImage.style.marginTop = '4em';
          }
      } else {
          // Скрываем контейнер, если поле ввода пустое
          resultsContainer.style.display = 'none';
          clearIcon.style.display = 'none'; // Прячем крестик

          // Плавно убираем marginTop, если поиск сброшен
          if (homeBackgroundImage) {
              homeBackgroundImage.style.marginTop = '';
          }
      }
  });

  // Событие клика по крестику
  clearIcon.addEventListener('click', () => {
      if (searchInput.disabled) { // Проверяем, заблокировано ли поле
          return; // Ничего не делаем, если поиск неактивен
      }
      searchInput.value = ''; // Очищаем поле ввода
      resultsContainer.style.display = 'none'; // Скрываем контейнер с результатами
      clearIcon.style.display = 'none'; // Скрываем крестик
      searchInput.blur(); // Убираем фокус, скрывая клавиатуру

      // Плавно возвращаем marginTop, если результаты скрыты
      if (homeBackgroundImage) {
          homeBackgroundImage.style.marginTop = '';
      }
  });

  // Скрывает клавиатуру поиска
  document.addEventListener('touchend', function(event) {
    if (searchInput === document.activeElement && !searchInput.contains(event.target)) {
        searchInput.blur();
    }
});
// Конец

  // Скрытие клавиатуры при нажатии Enter
  searchInput.addEventListener('keypress', (event) => {
      if (searchInput.disabled) { // Проверяем, заблокировано ли поле
          event.preventDefault(); // Предотвращаем ввод, если поиск неактивен
          return;
      }
      if (event.key === 'Enter') {
          event.preventDefault(); // Предотвращаем стандартное поведение формы
          searchInput.blur(); // Убираем фокус с поля, скрывая клавиатуру
      }
  });
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.innerWidth > 1100) {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  } else {
      navbar.classList.remove('scrolled'); // Убираем класс, если ширина меньше 1100px
  }
});






   






document.addEventListener('DOMContentLoaded', function () {
  new Splide('#image-slider', {
    type: 'loop',
    focus: 'center',
    autoWidth: true, 
    gap: '40px', // По умолчанию 40px
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: true,
    pagination: false,
    drag: true,
    perPage: 3,
    autoplay: false,
    breakpoints: {
      5000: {
        gap: '280px', // При ширине экрана до 1200px
        perPage: 3,
      },
      2299.5: {
        gap: '198px', // При ширине экрана до 1200px
        perPage: 3,
      },
      2018.5: {
        gap: '180px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1899.5: {
        gap: '180px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1704.5: {
        gap: '100px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1520.5: {
        gap: '100px', // При ширине экрана до 1200px
        perPage: 3,
      },
      1320.5: {
        gap: '93px', // При ширине экрана до 768px
        perPage: 3, // Можно уменьшить количество слайдов на маленьких экранах
      }
    }
  }).mount();
});





 