let formContactData = {};

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
  //localStorage.removeItem('formContactData');
  if (JSON.parse(localStorage.getItem('formContactData')) === null) {
    formContactData = {
      name: '',
      email: '',
      message: '',
    };
    localStorage.setItem('formContactData', JSON.stringify(formContactData));
  } else {
    const auxLocalStorage = JSON.parse(localStorage.getItem('formContactData'));
    newForm.elements.full_name.value = auxLocalStorage.name;
    newForm.elements.email.value = auxLocalStorage.email;
    newForm.elements.message.value = auxLocalStorage.message;
  }
});
