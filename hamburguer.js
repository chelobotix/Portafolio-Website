const btnClose = document.querySelector('#btn-close');
const divHamburguer = document.querySelector('.hamburguer');
const iconHamburguer = document.querySelector('#hamburguer-icon');
const hamburguerLink = document.querySelectorAll('.hamburguer-link');
const body = document.querySelector('body');

btnClose.addEventListener('click', () => {
  divHamburguer.classList.add('run-out');
  divHamburguer.classList.remove('run');
  body.classList.remove('no-scroll');
});

iconHamburguer.addEventListener('click', () => {
  divHamburguer.classList.add('run');
  divHamburguer.classList.remove('run-out');
  body.classList.add('no-scroll');
});

for (let i = 0; i < hamburguerLink.length; i += 1) {
  hamburguerLink[i].addEventListener('click', () => {
    divHamburguer.classList.add('run-out');
    divHamburguer.classList.remove('run');
    body.classList.remove('no-scroll');
  });
}
