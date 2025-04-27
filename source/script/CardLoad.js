document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]'); // Выбираем все изображения с data-src
    const slider = document.querySelector('.slider'); // Получаем элемент слайдера
  
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.onload = () => {
            positionCardRating();
            observer.unobserve(img);
          };
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
      });
    }, {
      rootMargin: '0px 0px 200px 0px',
      threshold: 0
    });
  
    images.forEach(img => {
      // Проверяем, находится ли изображение внутри слайдера
      if (!img.closest('.slider')) {
        imageObserver.observe(img); // Если нет, применяем lazy loading
      } else {
        // Если изображение в слайдере, загружаем его сразу
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
    });
  
    function positionCardRating() {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        const image = card.querySelector('.card-img-top');
        const rating = card.querySelector('.card-rating');
        const ratingTrand = card.querySelector('.card-rating-trand');
  
        if (image) {
          const imageRect = {
            width: image.offsetWidth,
            height: image.offsetHeight,
            top: image.offsetTop,
            left: image.offsetLeft
          };
  
          const cardRect = {
            width: card.offsetWidth,
            height: card.offsetHeight,
            top: card.offsetTop,
            left: card.offsetLeft
          };
  
          const bottom = cardRect.height - imageRect.height - imageRect.top + 8;
          const right = cardRect.width - imageRect.width - imageRect.left + 8;
  
          if (rating) {
            rating.style.position = 'absolute';
            rating.style.bottom = bottom + 'px';
            rating.style.right = right + 'px';
          }
  
          if (ratingTrand) {
            ratingTrand.style.position = 'absolute';
            ratingTrand.style.bottom = bottom + 'px';
            ratingTrand.style.right = (right + 10) + 'px';
          }
        }
      });
    }
  });