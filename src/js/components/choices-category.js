// инициализация кастомного Select
const categorySelect = () => {
  const element = document.querySelector('.form-wrap__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
    shouldSort: false,
    position: 'bottom',
  });

  let ariaLabel = element.getAttribute('aria-label');
  element.closest('.choices').setAttribute('aria-label', ariaLabel);
}

export default categorySelect();
// инициализация кастомного Select
