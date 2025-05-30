// кнопки со счётчиком
function fn(a) {
  var n = 0;
  while (a >= 1000) {
    a /= 1000;
    n++;
  }
  return +a.toFixed(1) + (["", "K", "M", "B", "T"][n] || "");
}

$(document).ready(function () {
  $(".full-smile-rate").each(function () {
    let value = parseInt($(this).attr("data-value"), 10);
    if (!isNaN(value)) {
      $(this).text(fn(value));
    }
  });

  $(".full-smile-rate-warp").click(function () {
    let countElement = $(this).find(".full-smile-rate");
    let icon = $(this).find(".reaction-icon");

    if (countElement.length && icon.length) {
      let currentCount = parseInt(countElement.attr("data-value"), 10); // Берём актуальное значение

      if (isNaN(currentCount)) {
        currentCount = 0; 
      }

      if ($(this).hasClass("clicked")) {
        return;
      }

      $(this).addClass("clicked");

      if (countElement.hasClass("clicked")) {
        let newCount = currentCount - 1;
        countElement.attr("data-value", newCount); // Обновляем data-value
        countElement.text(fn(newCount));
        countElement.removeClass("clicked");
      } else {
        icon.addClass("shake");

        setTimeout(() => {
          icon.removeClass("shake");
          icon.css({ transition: "transform 0.3s ease-in-out", transform: "scale(1.3)" });

          setTimeout(() => {
            icon.css("transform", "scale(1)");
          }, 300);
        }, 300);

        countElement.css({ transition: "transform 0.3s ease-in-out", transform: "scale(1.5)", opacity: "0" });

        setTimeout(() => {
          let newCount = currentCount + 1;
          countElement.attr("data-value", newCount); // Обновляем data-value
          countElement.text(fn(newCount));
          countElement.css({ transform: "scale(1)", opacity: "1" });
        }, 300);

        countElement.addClass("clicked");
      }

      setTimeout(() => {
        $(this).removeClass("clicked");
      }, 600);
    }
  });
});

// конец

// Кнопка лайк дизлайк
document.querySelectorAll('.kQnZoL').forEach(button => {
  button.addEventListener('click', function() {
    // Проверяем, если кнопка уже активна
    if (this.classList.contains('active')) {
      // Если кнопка уже активна, то снимаем с нее класс active
      this.classList.remove('active');
    } else {
      // Если кнопка не активна, то делаем ее активной
      this.classList.add('active');
      
      // Получаем соседние кнопки (лайк и дизлайк)
      const otherButton = this.closest('.Button-Border-Radius').classList.contains('Like') 
        ? document.querySelector('.Dislike .kQnZoL') 
        : document.querySelector('.Like .kQnZoL');
        
      // Снимаем активность с другой кнопки
      otherButton.classList.remove('active');
    }
  });
});
// конец



// Находим элементы
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search'); // Поле ввода
  const resultsContainer = document.getElementById('results-container'); // Контейнер результатов
  const menuToggle = document.querySelector('#menuToggle input');
  const searchWrapper = document.querySelector('.search-wrapper'); // Внешний контейнер
  const clearIcon = document.querySelector('.clear-icon'); // Крестик для очистки
  const phoneVersion = document.querySelector('.Phone-version'); // Блок Phone-version
  const hero = document.querySelector('.hero'); // Блок hero


// Бургер
if (menuToggle && searchWrapper) {
  menuToggle.addEventListener('change', () => {
      if (menuToggle.checked) {
          // Меню открыто
          searchWrapper.classList.add('hidden-by-menu'); // <--- ВОТ ЭТА СТРОКА
          searchWrapper.classList.remove('active'); // Сворачиваем поиск визуально

          // ЭТИ ДЕЙСТВИЯ JS ВСЕ ЕЩЕ ВАЖНЫ ДЛЯ КОРРЕКТНОГО ПОВЕДЕНИЯ КЛАВИАТУРЫ
          searchInput.setAttribute('disabled', 'disabled'); // Полностью отключаем поле ввода
          searchInput.blur(); // Убираем фокус, скрывая клавиатуру
          searchInput.value = ''; // Очищаем поле
          resultsContainer.style.display = 'none'; // Скрываем результаты
          clearIcon.style.display = 'none'; // Скрываем крестик
          if (homeBackgroundImage) {
              homeBackgroundImage.style.marginTop = '';
          }
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
          if (phoneVersion) {
              phoneVersion.style.marginTop = '4em';
          }

          // Устанавливаем marginTop для hero, если есть результат
          if (hero) {
              hero.style.marginTop = '-1em';
          }
      } else {
          // Скрываем контейнер, если поле ввода пустое
          resultsContainer.style.display = 'none';
          clearIcon.style.display = 'none'; // Прячем крестик

          // Плавно убираем marginTop, если поиск сброшен
          if (phoneVersion) {
              phoneVersion.style.marginTop = '';
          }

          // Плавно убираем marginTop для hero, если поиск сброшен
          if (hero) {
              hero.style.marginTop = '';
          }
      }
  });

  // Событие клика по крестику
  clearIcon.addEventListener('click', () => {
      searchInput.value = ''; // Очищаем поле ввода
      resultsContainer.style.display = 'none'; // Скрываем контейнер с результатами
      clearIcon.style.display = 'none'; // Скрываем крестик
      searchInput.blur(); // Убираем фокус, скрывая клавиатуру

      // Плавно возвращаем marginTop, если результаты скрыты
      if (phoneVersion) {
          phoneVersion.style.marginTop = '';
      }

      // Плавно возвращаем marginTop для hero, если результаты скрыты
      if (hero) {
          hero.style.marginTop = '';
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
      if (event.key === 'Enter') {
          event.preventDefault(); // Предотвращаем стандартное поведение формы
          searchInput.blur(); // Убираем фокус с поля, скрывая клавиатуру
      }
  });

  // Событие переключения меню
  if (menuToggle && searchWrapper) {
      menuToggle.addEventListener('change', () => {
          if (menuToggle.checked) {
              searchWrapper.classList.add('hidden'); // Применяем класс для скрытия
          } else {
              searchWrapper.classList.remove('hidden'); // Убираем класс для показа
          }
      });
  }
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




// ссылки и блоб на фильмы

document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('play-video-btn');
  const iframe = document.querySelector('.video-js');
  
  if (!iframe) {
    console.error('Видео iframe не найден');
    return;
  }

  playButton.addEventListener('click', () => {
    const src = iframe.getAttribute('src');
    iframe.setAttribute('src', src + '?autoplay=1');
  });
});

    
// конец







