const productCardSwiper = new Swiper(".product__swiper-bottom", {
  spaceBetween: 38,
  slidesPerView: 4,
  direction: 'horizontal',
  freeMode: true,
  // watchSlidesProgress: true,
  breakpoints: {
    300: {direction: 'horizontal', spaceBetween: 38, slidesPerView: 2},
    450: {direction: 'horizontal', spaceBetween: 38, slidesPerView: 3},
    580: {direction: 'vertical', spaceBetween: 18, slidesPerView: 4},
    992: {direction: 'horizontal', spaceBetween: 38}
  },
});

const productCardSwiper2 = new Swiper(".product__swiper-top", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 1,
  centeredSlides: true,
  allowTouchMove: false,
  thumbs: {
    swiper: productCardSwiper,
  },
});

const swiperInit = () => {
  productCardSwiper();
  productCardSwiper2();
}

export default swiperInit;
