  const modalOverlay = document.querySelector('.modals__overlay');

  if(document.querySelector('.product-card-modal')) {
    const modalWindow = document.querySelector('.product-card-modal');
    const modalWindowOpenBtn = document.querySelector('.product__btn');
    const modalWindowCloseBtn = document.querySelector('.product-card-modal__close');

    modalWindowOpenBtn.addEventListener('click', () => {
      document.body.classList.add('scroll-false');
      modalOverlay.classList.add('modals__overlay--active');
      modalWindow.classList.add('product-card-modal--active');
    })

    modalWindowCloseBtn.addEventListener('click', () => {
      document.body.classList.remove('scroll-false');
      modalOverlay.classList.remove('modals__overlay--active');
      modalWindow.classList.remove('product-card-modal--active');
    })
  }


if(document.querySelector('.product__swiper-top')) {

  const productCardSlider = document.querySelector('.product__swiper-top');
  const productCardModalSlider = document.querySelector('.product-card-modal-slider');
  const sliderModalClose = document.getElementById('modal-slider-close');

  productCardSlider.addEventListener('click', () => {
    document.body.classList.add('scroll-false');
    modalOverlay.classList.add('modals__overlay--active');
    productCardModalSlider.classList.add('product-card-modal-slider--active');
    modalWindow.classList.remove('product-card-modal--active');
  })

  sliderModalClose.addEventListener('click', () => {
    document.body.classList.remove('scroll-false');
    modalOverlay.classList.remove('modals__overlay--active');
    productCardModalSlider.classList.remove('product-card-modal-slider--active');
  })




  const productCardBigSwiper = new Swiper(".product-card-modal-slider__swiper-bottom", {
    spaceBetween: 38,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // 568: {slidesPerView: 1},
      // 992: {slidesPerView: 2},
      // 1280: {slidesPerView: 3},
      300: {centeredSlides: true, slidesPerView: 1},
      650: {slidesPerView: 2},
      980: {slidesPerView: 3},
      1360: {slidesPerView: 4},
    },
  });

  const productCardBigSwiper2 = new Swiper(".product-card-modal-slider__swiper-top", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 1,
    centeredSlides: true,
    allowTouchMove: false,
    thumbs: {
      swiper: productCardBigSwiper,
    },
  });

  const swiperBigInit = () => {
    productCardBigSwiper();
    productCardBigSwiper2();
  }
}
