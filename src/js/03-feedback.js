// console.log(localStorage);

// localStorage.setItem('my-data', JSON.stringify({ name: 'Mango, age: 2' }));

// const savedData = localStorage.getItem('my-data');
// console.log('saveData', savedData);

// const parseData = JSON.parse(savedData);
// console.log('parseData', parseData);
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('input', e => {
  // console.log(e.target.name);
  // console.log(e.target.value);

 JSON.stringify(formData)[e.target.name] = e.target.value;
  console.log(formData);
});

populateTextarea();

// - Останавливаем поведение по умолчанию
// - Убираем сообщение из хранилища
// - Очищаем форму

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('sell form');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// - Получаем значение поля
// - Сохраняем его в хранилище
// - Можно добавить throttle

// function onInput(evt) {
//   const email = evt.target.value;

//   localStorage.setItem(STORAGE_KEY, email);
//   console.log('email', email);
// }

function onTextareaInput(evt) {
  const message = evt.target.value;

  localStorage.setItem(STORAGE_KEY, message);
  console.log('message', message);
}

// - Получаем значение из хранилища
// - Если там что то было обновляем дом

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
}
