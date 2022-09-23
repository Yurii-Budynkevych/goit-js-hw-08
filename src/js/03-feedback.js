import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  textArea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};
const STORAGE_KEY = 'message';
let formData = {};
const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));
populate();
function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function onInput(evt) {
  if (savedMessage) {
    formData = savedMessage;
  }
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function populate() {
  if (savedMessage.email) {
    refs.email.value = savedMessage.email;
  }
  if (savedMessage.message) {
    refs.textArea.value = savedMessage.message;
  }
  return;
}
