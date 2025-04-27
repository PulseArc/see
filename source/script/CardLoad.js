document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    const prioritySelector = '.slider'; // Пример: классы для приоритетных областей
    const contentImages = Array.from(images).filter(img => !img.closest(prioritySelector));

    const loadingQueue = [];
    const maxConcurrentLoads = 5;
    let currentlyLoading = 0;

    // 1. Предупредительная загрузка приоритетных изображений
    const priorityImages = Array.from(images).filter(img => img.closest(prioritySelector));
    priorityImages.forEach(img => {
      const preloadImage = new Image();
      preloadImage.src = img.dataset.src;
      preloadImage.onload = () => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      };
    });

    // 2. Функция для добавления в очередь
    function enqueueImage(img) {
      if (img.dataset.queued) return;
      loadingQueue.push(img);
      img.dataset.queued = 'true';
      processQueue();
    }

    // 3. Функция для обработки очереди
    function processQueue() {
      while (loadingQueue.length > 0 && currentlyLoading < maxConcurrentLoads) {
        currentlyLoading++;
        const img = loadingQueue.shift();
        img.onload = () => {
          currentlyLoading--;
          processQueue();
        };
        img.onerror = () => {
          currentlyLoading--;
          processQueue();
        };
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
    }

    // 4. Отложенная загрузка с проверкой видимости
    function loadVisibleImages() {
      contentImages.forEach(img => {
        if (img.dataset.src && isElementInViewport(img)) {
          enqueueImage(img);
        }
      });
    }

    // Функция проверки видимости
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) + 200 &&
        rect.bottom >= -200 &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right >= 0
      );
    }

    // 5. Запуск и обработка событий
    window.addEventListener('load', loadVisibleImages);
    window.addEventListener('scroll', loadVisibleImages);
    window.addEventListener('resize', loadVisibleImages);
    let lazyLoadThrottleTimeout;
    window.addEventListener('scroll', function() {
      if (lazyLoadThrottleTimeout) {
        clearTimeout(lazyLoadThrottleTimeout);
      }
      lazyLoadThrottleTimeout = setTimeout(function() {
        loadVisibleImages();
      }, 20);
    });

    // Дополнительная проверка после загрузки (на всякий случай)
    window.onload = () => {
      images.forEach(img => {
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
      });
    };
  });