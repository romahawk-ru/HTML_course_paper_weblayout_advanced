// инициализация кастомного Select
const regionSelect = () => {
  const element = document.querySelector('.top-content__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
    shouldSort: false,
    position: 'bottom'
  });

  let ariaLabel = element.getAttribute('aria-label');
  element.closest('.choices').setAttribute('aria-label', ariaLabel);
}

export default regionSelect();
// инициализация кастомного Select
