import IMask from 'imask';




const form = document.querySelector('.form__form'),
      validateFields = form.querySelectorAll('.form__input:not(textarea)'),
      mailField = form.querySelector('#mail'),
      nameField = form.querySelector('#name'),
      phoneField = form.querySelector('#phone'),
      mailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
      phoneReg = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/,
      nameReg = /^(\w+\S+)$/,
      defaultErrorText = 'Поле не должно быть пустым',
      mailErrorText = 'Введите корректный e-mail адрес',
      phoneErrorText = 'Введите корректный номер телефона';



// Phone mask

var maskOptions = {
  mask: '+{7}(000)000-00-00'
};

var mask = IMask(phoneField, maskOptions);



// Validation functions

let removeValidation = function () {
  const errors = form.querySelectorAll('.error-block');

  for (let i = 0; i < errors.length; i++) {

    let parent = errors[i].parentElement;

    parent.classList.remove('error');
    errors[i].remove();

  }
};



let generateError = function (text) {

  let error = document.createElement('div');

  error.className = 'error-block';
  error.style.color = 'red';
  error.innerHTML = text;

  return error

};



let checkFieldsAll = function () {

  let errorClass, errorElement

  for (let i = 0; i < validateFields.length; i++) {

    errorClass = validateFields[i].parentElement;
    errorElement = errorClass.querySelectorAll('.error-block');

  }

  if(!errorClass.classList.contains('error') && !errorElement.length ) {
    form.classList.add('validate')
  }else{
    form.classList.remove('validate')
  }
};




let checkFieldsPresence = function () {

  for (let i = 0; i < validateFields.length; i++) {

    if (!validateFields[i].value) {

      validateFields[i].parentElement.classList.add('error');
      let error = generateError(defaultErrorText);
      validateFields[i].parentElement.appendChild(error);

    }
  }
};



let checkFields = function (reg, field, generateText) {

  let value = field.value,
      child = field.parentElement.querySelector('.error-block');

  if(!reg.test(value)){
    field.parentElement.classList.add('error');

    let error = generateError(generateText);

    (child) ? child.textContent = generateText : field.parentElement.appendChild(error);

  }else{
    let error = field.parentElement.querySelector('.error-block');
    if(error){
      let parent = error.parentElement;
      parent.classList.remove('error');
      error.remove();
    }
  }
};



form.addEventListener('submit', function (e) {

  e.preventDefault();

  removeValidation();

  checkFieldsPresence();

  checkFields(
    nameReg,
    nameField,
    defaultErrorText
  );

  checkFields(
    mailReg,
    mailField,
    mailErrorText
  );

  checkFields(
    phoneReg,
    phoneField,
    phoneErrorText
  );

  checkFieldsAll();

  if(form.classList.contains('validate')){

    var modalWindow = document.getElementById('jsModal');

    modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open';
  }

});


for (let i = 0; i < validateFields.length; i++){
  validateFields[i].addEventListener('input', function (e) {

    e.preventDefault();

    let currentElement = this.id,
        generateText = '', reg;

    switch (currentElement){
      case 'mail':

        generateText = mailErrorText;
        reg = mailReg;

        break;

      case 'phone':

        generateText = phoneErrorText;
        reg = phoneReg;

        break;

      case 'name':

        generateText = defaultErrorText;
        reg = nameReg;

        break;

      default:

        generateText = defaultErrorText;

    }


    checkFields(
      reg,
      this,
      generateText
    );

  });
}


