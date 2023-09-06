// init Swiper:
const swiper = new Swiper('.hero__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 4800,
  },

  pagination: {
    el: '.swiper-pagination',
    bulletActiveClass: 'active',

    renderBullet: function (index, className) {
      return `<button class="bullet ${className}">
        <svg class="progress-bar" viewBox="-1 -1 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
          <circle cx="16" cy="16" r="15.9155" class="progress-bar__progress js-progress-bar" />
        </svg>
      </button>`
    }
  },

  on: {
    afterInit(test) {
      const firstBullet = test.pagination.bullets[0];
      const bulletsImages = document.querySelectorAll('.js-progress-bar');

      firstBullet.classList.remove('active');
      setTimeout(() => {
        firstBullet.classList.add('active');
      }, 10);

      bulletsImages.forEach((image) => {
        image.addEventListener('transitionend', () => {
          swiper.slideNext();
        });
      });
    }
  }

});

export default swiper;


