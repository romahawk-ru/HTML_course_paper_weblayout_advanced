const burgerMenu = document.getElementById('header-nav');
const burgerSubMenu = document.getElementById('sub-nav-menu');
const burgerOpenBtn = document.getElementById('burger-on');
const burgerCloseBtn = document.getElementById('burger-off');

burgerOpenBtn.addEventListener('click', () => {
  burgerMenu.classList.add('burger-active');
  burgerSubMenu.classList.add('top-content__list-active');
});

burgerCloseBtn.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-active');
  burgerSubMenu.classList.remove('top-content__list-active');
})
