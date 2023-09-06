if (document.querySelector('.product-card-modal__form')) {

  // инициализация и настройки плагина Inputmask
  var modalSelector = document.getElementById("product-card-modal-Phone");
  var im = new Inputmask("+7(999) 999-99-99");
  im.mask(modalSelector);

  // инициализация и настройки плагина JustValidate
  const modalValidator = new window.JustValidate('#product-card-modal-form');

modalValidator
  .addField('#product-card-modal-Name', [
    {
      rule: 'required',
      errorMessage: 'Поле обязательно для заполнения',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя должно содержать минимум 2 символа',
    },
    {
      rule: 'maxLength',
      value: 15,
      rrorMessage: 'Имя не может быть больше 15 символов',
    },
  ])
  .addField('#product-card-modal-Phone', [
    {
      rule: 'required',
      errorMessage: 'Введите номер телефона'
    },
    {
      validator: (value) => {
        const tel = modalSelector.inputmask.unmaskedvalue()
        return Boolean(Number(tel) && tel.length === 10)
      },
      errorMessage: 'Введите номер полностью'
    },
  ])
  .addField('#product-card-modal-checkbox', [
    {
      rule: 'required',
      errorMessage: 'Вы должны принять соглашение',
    },
  ])
    .onSuccess( () => {
      // очистка полей ввода формы
      document.getElementById('product-card-modal-Name').value = '';
      document.getElementById('product-card-modal-Phone').value = '';


      // таймаут открытия модального окна
      setTimeout( () => {
        document.body.classList.add('scroll-false');
        document.querySelector('.modals__overlay').classList.add('modals__overlay--active');
        document.querySelector('.product-card-modal').classList.remove('product-card-modal--active');
        document.querySelector('.product-card-modal-thanks').classList.add('product-card-modal-thanks--active');
      }, 500);
    }
  );

    // закрытие модального окна при клике по кнопке закрыть
  document.querySelector('#modal-thanks-close').addEventListener('click', () => {
    document.body.classList.remove('scroll-false');
    document.querySelector('.modals__overlay').classList.remove('modals__overlay--active');
    document.querySelector('.product-card-modal-thanks').classList.remove('product-card-modal-thanks--active');

    // сброс стилей полей ввода
    document.getElementById('product-card-modal-Name').classList.remove('just-validate-success-field');
    document.getElementById('product-card-modal-Phone').classList.remove('just-validate-success-field');
  })

  // закрытие модального окна при клике по оверлею
  document.querySelector('.modals__overlay').addEventListener('click', (e) => {
    if (e.target == document.querySelector('.modals__overlay')) {
      document.body.classList.remove('scroll-false');
      document.querySelector('.modals__overlay').classList.remove('modals__overlay--active');
      document.querySelector('.product-card-modal-thanks').classList.remove('product-card-modal-thanks--active');

          // сброс стилей полей ввода
    document.getElementById('product-card-modal-Name').classList.remove('just-validate-success-field');
    document.getElementById('product-card-modal-Phone').classList.remove('just-validate-success-field');
    };
  });
}
