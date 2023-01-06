const form = document.getElementById('contact-form');
const { email } = form.elements;
const errMsg = document.getElementById('errMsg');

function hasLowerCase(str) {
  const regex = /^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z0-9_.]+$/;
  return regex.test(str);
}
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!hasLowerCase(email.value)) {
    errMsg.innerHTML = 'The Email content should be in lowercase.<br>The form was not send.';
  } else {
    form.submit();
  }
});
