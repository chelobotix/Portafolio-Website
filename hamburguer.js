const btnClose = document.querySelector('#btn-close');
const divHamburguer = document.querySelector('.hamburguer');
const iconHamburguer = document.querySelector('#hamburguer-icon');
const hamburguerLink = document.querySelectorAll('.hamburguer-link');

btnClose.addEventListener('click', () => {
  divHamburguer.classList.add('invisible');
  divHamburguer.classList.remove('visible');
});

iconHamburguer.addEventListener('click', () => {
  divHamburguer.classList.add('visible');
  divHamburguer.classList.remove('invisible');
});

for (let i = 0; i < hamburguerLink.length; i += 1) {
  hamburguerLink[i].addEventListener('click', () => {
    divHamburguer.classList.add('invisible');
    divHamburguer.classList.remove('visible');
  });
}
