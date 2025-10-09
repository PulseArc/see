// Импортируй или подключи placeholder-16x9.js, чтобы был доступен PLACEHOLDER_BASE16X9

// Глобальное хранилище загруженных изображений
const loadedImages = new Map();

document.addEventListener("DOMContentLoaded", () => {
  console.log('=== НАЧАЛО ИНИЦИАЛИЗАЦИИ LAZY LOAD ===');
  
  // СНАЧАЛА сохраняем все оригинальные src в data-атрибуты ДО инициализации Splide
  const images = document.querySelectorAll(".sirials-watch-img");
  console.log('Найдено изображений:', images.length);
  
  images.forEach((img, index) => {
    console.log(`Изображение ${index}:`);
    console.log('  - Оригинальный src:', img.src);
    
    // Сохраняем оригинальный src в data-атрибут
    if (!img.dataset.originalSrc) {
      img.dataset.originalSrc = img.src;
      console.log('  - Сохранён в data-original-src:', img.dataset.originalSrc);
    }
    // Ставим placeholder
    img.src = PLACEHOLDER_BASE16X9;
    console.log('  - Установлен placeholder');
  });

  // Функция загрузки изображения
  function loadImage(img) {
    const originalSrc = img.dataset.originalSrc;
    
    if (!originalSrc) {
      console.error('❌ Нет data-original-src для изображения');
      return;
    }

    console.log('🔍 loadImage для:', originalSrc);

    // Если изображение уже загружено в глобальное хранилище
    if (loadedImages.has(originalSrc)) {
      console.log('✅ Изображение уже в кэше, устанавливаем сразу');
      img.src = originalSrc;
      img.classList.add("loaded");
      return;
    }

    // Если уже идёт загрузка этого URL
    if (img.dataset.loading === 'true') {
      console.log('⚠️ Уже идёт загрузка, пропускаем');
      return;
    }

    console.log('🔄 Начинаем загрузку:', originalSrc);
    img.dataset.loading = 'true';

    const realImage = new Image();
    realImage.src = originalSrc;

    realImage.onload = () => {
      console.log('✅ Изображение загружено:', originalSrc);
      
      // Сохраняем в глобальный кэш
      loadedImages.set(originalSrc, true);
      
      // Обновляем ВСЕ изображения с таким же src (включая клоны)
      document.querySelectorAll('.sirials-watch-img').forEach(element => {
        if (element.dataset.originalSrc === originalSrc) {
          console.log('  ↳ Обновляем элемент');
          element.src = originalSrc;
          element.classList.add("loaded");
          element.dataset.loaded = 'true';
          element.dataset.loading = 'false';
        }
      });
    };

    realImage.onerror = () => {
      console.error('❌ Ошибка загрузки:', originalSrc);
      img.dataset.loading = 'false';
    };
  }

  // Загружаем видимые изображения
  console.log('=== ЗАГРУЗКА ОРИГИНАЛЬНЫХ ИЗОБРАЖЕНИЙ ===');
  images.forEach((img, index) => {
    console.log(`Загружаем изображение ${index}`);
    loadImage(img);
  });
});

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
        searchWrapper.classList.add('hidden-by-menu');
        searchWrapper.classList.remove('active');
      } else {
        searchWrapper.classList.remove('hidden-by-menu');
        searchInput.removeAttribute('disabled');
        updateSearchInputState();
      }
    });
  }

  function updateSearchInputState() {
    if (searchWrapper.classList.contains('active')) {
      searchInput.removeAttribute('disabled');
    } else {
      searchInput.setAttribute('disabled', 'disabled');
    }
  }

  updateSearchInputState();

  searchWrapper.addEventListener('mouseover', () => {
    searchWrapper.classList.add('active');
    updateSearchInputState();
  });

  searchWrapper.addEventListener('mouseout', () => {
    searchWrapper.classList.remove('active');
    updateSearchInputState();
  });

  if (menuToggle && searchWrapper) {
    menuToggle.addEventListener('change', () => {
      if (menuToggle.checked) {
        searchWrapper.classList.remove('active');
      }
      updateSearchInputState();
    });
  }

  if (!searchInput || !resultsContainer || !clearIcon) return;

  searchInput.addEventListener('input', () => {
    if (searchInput.disabled) {
      return;
    }
    const query = searchInput.value.trim();

    if (query.length > 0) {
      resultsContainer.style.display = 'block';
      clearIcon.style.display = 'inline';

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      if (homeBackgroundImage) {
        homeBackgroundImage.style.marginTop = '4em';
      }
    } else {
      resultsContainer.style.display = 'none';
      clearIcon.style.display = 'none';

      if (homeBackgroundImage) {
        homeBackgroundImage.style.marginTop = '';
      }
    }
  });

  clearIcon.addEventListener('click', () => {
    if (searchInput.disabled) {
      return;
    }
    searchInput.value = '';
    resultsContainer.style.display = 'none';
    clearIcon.style.display = 'none';
    searchInput.blur();

    if (homeBackgroundImage) {
      homeBackgroundImage.style.marginTop = '';
    }
  });

  document.addEventListener('touchend', function(event) {
    if (searchInput === document.activeElement && !searchInput.contains(event.target)) {
      searchInput.blur();
    }
  });

  searchInput.addEventListener('keypress', (event) => {
    if (searchInput.disabled) {
      event.preventDefault();
      return;
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      searchInput.blur();
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
    navbar.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('#image-slider', {
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
    autoplay: false,
    breakpoints: {
      5000: {
        gap: '280px',
        perPage: 3,
      },
      2299.5: {
        gap: '198px',
        perPage: 3,
      },
      2018.5: {
        gap: '180px',
        perPage: 3,
      },
      1899.5: {
        gap: '180px',
        perPage: 3,
      },
      1704.5: {
        gap: '100px',
        perPage: 3,
      },
      1520.5: {
        gap: '100px',
        perPage: 3,
      },
      1320.5: {
        gap: '93px',
        perPage: 3,
      }
    }
  });

  // КРИТИЧНО: Обработка клонов после монтирования Splide
  splide.on('mounted', function() {
    console.log('🎠 Splide смонтирован, обновляем клоны');
    
    // Небольшая задержка для гарантии создания клонов
    setTimeout(() => {
      document.querySelectorAll('.sirials-watch-img').forEach(img => {
        const originalSrc = img.dataset.originalSrc;
        
        // Если изображение уже загружено в кэш - устанавливаем сразу
        if (originalSrc && loadedImages.has(originalSrc)) {
          console.log('✅ Клон: устанавливаем из кэша', originalSrc);
          img.src = originalSrc;
          img.classList.add('loaded');
        }
      });
    }, 50);
  });

  splide.mount();
});