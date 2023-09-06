if (document.querySelector('.contacts__form')) {

  // инициализация и настройки плагина Inputmask
  var selector = document.getElementById("input-phone");
  var im = new Inputmask("+7(999) 999-99-99");
  im.mask(selector);

  // инициализация и настройки плагина JustValidate
  const validator = new window.JustValidate('#contacts-form');

validator
  .addField('#input-name', [
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
  .addField('#input-mail', [
    {
      rule: 'required',
      errorMessage: 'Поле обязательно для заполнения',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат!',
    },
  ])
  .addField('#input-phone', [
    {
      rule: 'required',
      errorMessage: 'Введите номер телефона'
    },
    {
      validator: (value) => {
        const tel = selector.inputmask.unmaskedvalue()
        return Boolean(Number(tel) && tel.length === 10)
      },
      errorMessage: 'Введите номер полностью'
    },
  ])
  .addField('#contacts-checkbox', [
    {
      rule: 'required',
      errorMessage: 'Вы должны принять соглашение',
    },
  ])
    .onSuccess( () => {
      // очистка полей ввода формы
      document.getElementById('input-name').value = '';
      document.getElementById('input-phone').value = '';
      document.getElementById('input-mail').value = '';
      document.getElementById('contacts-checkbox').checked = false;
      // таймаут открытия модального окна
      setTimeout( () => {
        document.body.classList.add('scroll-false');
        document.querySelector('.home-overlay').classList.add('home-overlay--active');
        document.querySelector('.home-modal').classList.add('home-modal--active');
      }, 500);
    }
  );

    // закрытие модального окна при клике по кнопке закрыть
  document.querySelector('.home-modal__close').addEventListener('click', () => {
    document.body.classList.remove('scroll-false');
    document.querySelector('.home-overlay').classList.remove('home-overlay--active');
    document.querySelector('.home-modal').classList.remove('home-modal--active');

    // сброс стилей полей ввода
    document.getElementById('input-name').classList.remove('just-validate-success-field');
    document.getElementById('input-phone').classList.remove('just-validate-success-field');
    document.getElementById('input-mail').classList.remove('just-validate-success-field');
  })

  // закрытие модального окна при клике по оверлею
  document.querySelector('.home-overlay').addEventListener('click', (e) => {
    if (e.target == document.querySelector('.home-overlay')) {
      document.body.classList.remove('scroll-false');
      document.querySelector('.home-overlay').classList.remove('home-overlay--active');
      document.querySelector('.home-modal').classList.remove('home-modal--active');

          // сброс стилей полей ввода
    document.getElementById('input-name').classList.remove('just-validate-success-field');
    document.getElementById('input-phone').classList.remove('just-validate-success-field');
    document.getElementById('input-mail').classList.remove('just-validate-success-field');
    };
  });
}
