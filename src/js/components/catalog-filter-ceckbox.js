if (document.getElementById('catalog')) {
  const filterTitle = document.querySelectorAll('.filter__wrapper-title');

  filterTitle.forEach((el) => {
    el.addEventListener('click', (e) => {
      let dataName = e.currentTarget.getAttribute('data-name');
      document.querySelector(`[data-filter="${dataName}"]`).classList.toggle('filter__menu-active');
    });
  });
};
