/* This is just a learning project. This JS file just delete all fields aftes successfuly submitting the form. */

const btn = document.getElementById('submit');
const form = document.getElementById('survey-form');
const inputs = document.querySelectorAll('input');
const options = document.querySelectorAll('option');
const textarea = document.getElementById('form-textarea');
const inputsradio = document.querySelectorAll('input[type=radio]');
const inputscheckbox = document.querySelectorAll('input[type=checkbox]');

btn.addEventListener('click', event => {
  if (form.checkValidity()) {
    event.preventDefault();
    inputs.forEach(input => (input.value = ''));
    textarea.value = '';
    inputsradio.forEach(radio => (radio.checked = null));
    inputscheckbox.forEach(radio => (radio.checked = null));
    options[0].selected = 'selected';
  }
});
