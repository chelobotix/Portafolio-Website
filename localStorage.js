/* eslint-disable */
let formContactData = {
  name: '',
  email: '',
  message: '',
};
/* eslint-enable */

const newForm = document.querySelector('form');

newForm.addEventListener('keyup', (event) => {
  if (event.target.id === 'full-name') {
    formContactData.name = event.target.value;
  } else if (event.target.id === 'email') {
    formContactData.email = event.target.value;
  } else if (event.target.id === 'message') {
    formContactData.message = event.target.value;
  }

  localStorage.setItem('formContactData', JSON.stringify(formContactData));
});

window.addEventListener('load', () => {
  const auxLocalStorage = JSON.parse(localStorage.getItem('formContactData'));

  if (JSON.parse(localStorage.getItem('formContactData')) === null) {
    localStorage.setItem('formContactData', JSON.stringify(formContactData));
  } else {
    newForm.elements.full_name.value = auxLocalStorage.name;
    newForm.elements.email.value = auxLocalStorage.email;
    newForm.elements.message.value = auxLocalStorage.message;
  }
});
