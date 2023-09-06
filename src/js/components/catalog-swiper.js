// init Swiper:
const catalogSwiper = new Swiper('.catalog-swiper', {
  spaceBetween: 32,
  slidesPerView: 3,
  slidesPerGroup: 3,
  watchSlidesProgress: true,

  grid: {
    fill: 'row',
    rows: 3,
  },

  pagination: {
    el: '.catalog__pagination',
    clickable: true,

    // adding numbers to the bullets
    // добавление цифр в булеты
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  // Optional parameters
  // опциональные параметры
  direction: 'horizontal',
  loop: false,

  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 16,
    },
    568: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 16,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 32,
    },
  }
});

export default catalogSwiper;

