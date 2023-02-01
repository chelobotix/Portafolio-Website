const recentWorksObj = [
  {
    id: 'project1',
    name: 'Protoje Munich Reggae Concert',
    technologies: ['Html', 'Css', 'Javascript'],
    description: 'A fictitious Concert web page to demonstrate my skills in Html, Css and DOM manipulation with Javascript',
    imageURL_desktop: 'images/capstoneProtojeConcert.jpg',
    imageURL_mobile: 'images/capstoneProtojeConcert.jpg',
    liveDemo: 'https://chelobotix.github.io/Capstone-project-Protoje-concert/',
    repository: 'https://github.com/chelobotix/Capstone-project-Protoje-concert',
  },
  {
    id: 'project2',
    name: 'Awesome Books',
    technologies: ['Html', 'Css', 'Javascript', 'SPA'],
    description: 'A SPA web app to add Books developed in Javaascript using modules',
    imageURL_desktop: 'images/awesomeBook.jpg',
    imageURL_mobile: 'images/awesomeBook.jpg',
    liveDemo: 'https://chelobotix.github.io/Awesome_Book/',
    repository: 'https://github.com/chelobotix/Awesome_Book',
  },
  {
    id: 'project3',
    name: 'To Do List',
    technologies: ['Html', 'Css', 'Javascript', 'WebPack 5'],
    description: 'To Do List it\'s a Task manager app with CRUD implemetation',
    imageURL_desktop: 'images/toDoList.jpg',
    imageURL_mobile: 'images/toDoList.jpg',
    liveDemo: 'https://chelobotix.github.io/To-Do-List-Barrenechea/dist/',
    repository: 'https://github.com/chelobotix/To-Do-List-Barrenechea',
  },
  {
    id: 'project4',
    name: 'Keeping track of hundreds of components',
    technologies: ['Ruby on Rails', 'css', 'Javascript', 'html'],
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint doloremque ducimus reiciendis dignissimos asperiores quis maiores atque, impedit delectus id laboriosam repellendus sit sed placeat, velit tenetur! Enim, saepe aliquid praesentium possimus facere qui corrupti velit maxime dolorum reprehenderit ullam minus, assumenda repudiandae aspernatur cupiditate cum esse commodi nam perspiciatis!',
    imageURL_desktop: 'images/works-dsk.png',
    imageURL_mobile: 'images/work-mobile.png',
    liveDemo: 'https://chelobotix.github.io/Portafolio-Website/',
    repository: 'https://github.com/chelobotix/Portafolio-Website',
  },
  {
    id: 'project5',
    name: 'Keeping track of hundreds of components',
    technologies: ['Ruby on Rails', 'css', 'Javascript', 'html'],
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint doloremque ducimus reiciendis dignissimos asperiores quis maiores atque, impedit delectus id laboriosam repellendus sit sed placeat, velit tenetur! Enim, saepe aliquid praesentium possimus facere qui corrupti velit maxime dolorum reprehenderit ullam minus, assumenda repudiandae aspernatur cupiditate cum esse commodi nam perspiciatis!',
    imageURL_desktop: 'images/works-dsk.png',
    imageURL_mobile: 'images/work-mobile.png',
    liveDemo: 'https://chelobotix.github.io/Portafolio-Website/',
    repository: 'https://github.com/chelobotix/Portafolio-Website',
  },
  {
    id: 'project6',
    name: 'Keeping track of hundreds of components',
    technologies: ['Ruby on Rails', 'css', 'Javascript', 'html'],
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint doloremque ducimus reiciendis dignissimos asperiores quis maiores atque, impedit delectus id laboriosam repellendus sit sed placeat, velit tenetur! Enim, saepe aliquid praesentium possimus facere qui corrupti velit maxime dolorum reprehenderit ullam minus, assumenda repudiandae aspernatur cupiditate cum esse commodi nam perspiciatis!',
    imageURL_desktop: 'images/works-dsk.png',
    imageURL_mobile: 'images/work-mobile.png',
    liveDemo: 'https://chelobotix.github.io/Portafolio-Website/',
    repository: 'https://github.com/chelobotix/Portafolio-Website',
  },
];

// Heading Section
const sectionWorks = document.querySelector('.section_works');
const recentWorksDiv = document.createElement('div');
const h2 = document.createElement('h2');

recentWorksDiv.classList.add('recent_works_div');
h2.textContent = 'My Recent Works';
recentWorksDiv.appendChild(h2);
sectionWorks.appendChild(recentWorksDiv);

// Card Section
const cardRow = document.createElement('div');
for (let i = 0; i < recentWorksObj.length; i += 1) {
  const article = document.createElement('article');
  const placeholder = document.createElement('img');
  const cardContainer1 = document.createElement('div');
  const h4 = document.createElement('h4');
  const ul = document.createElement('ul');
  const buttonDiv = document.createElement('div');
  const button = document.createElement('button');

  cardRow.classList.add('card_row');
  placeholder.classList.add('placeholder');
  cardContainer1.classList.add('card_container1');
  buttonDiv.classList.add('div_button');
  button.classList.add('btn_see_projects');
  button.classList.add('btn_effects');
  button.id = recentWorksObj[i].id;

  if (window.matchMedia('(max-width: 767px)').matches) {
    placeholder.src = recentWorksObj[i].imageURL_mobile;
  } else {
    placeholder.src = recentWorksObj[i].imageURL_desktop;
  }

  h4.textContent = recentWorksObj.name;
  button.textContent = 'See Projects';
  button.type = 'button';

  let aux = '';
  for (let j = 0; j < recentWorksObj[i].technologies.length; j += 1) {
    aux += `<div><li>${recentWorksObj[i].technologies[j]}</li></div>`;
  }
  ul.innerHTML = aux;
  buttonDiv.appendChild(button);
  cardContainer1.appendChild(h4);
  cardContainer1.appendChild(ul);
  cardContainer1.appendChild(buttonDiv);
  article.appendChild(placeholder);
  article.appendChild(cardContainer1);
  cardRow.appendChild(article);
}
sectionWorks.appendChild(cardRow);

// Modal

const btnSeeProjects = document.querySelectorAll('.btn_see_projects');
const btnClose2 = document.querySelector('.close');
const blur = document.querySelector('.blur');
const bodyTag = document.querySelector('body');
const ulModal = document.querySelector('ul.modal-project');

function createModal(index) {
  const imgModal = document.querySelector('img.modal-project');
  const h3Modal = document.querySelector('h3.modal-project');
  const btn1Modal = document.querySelectorAll('.modal-btn1');
  const btn2Modal = document.querySelectorAll('.modal-btn2');
  const pModal = document.querySelector('p.modal-project');

  if (window.matchMedia('(max-width: 767px)').matches) {
    imgModal.src = recentWorksObj[index].imageURL_mobile;
  } else {
    imgModal.src = recentWorksObj[index].imageURL_desktop;
  }

  h3Modal.textContent = recentWorksObj[index].name;

  btn1Modal.forEach((btn) => {
    btn.addEventListener('click', () => {
      window.open(recentWorksObj[index].liveDemo, '_blank');
    });
  });

  btn2Modal.forEach((btn) => {
    btn.addEventListener('click', () => {
      window.open(recentWorksObj[index].repository, '_blank');
    });
  });

  recentWorksObj[index].technologies.forEach((tech) => {
    const newLi = document.createElement('li');
    newLi.textContent = tech;
    ulModal.appendChild(newLi);
    newLi.classList.add('liModal');
  });
  if (window.matchMedia('(max-width: 767px)').matches) {
    ulModal.removeChild(ulModal.lastChild);
    btnClose2.innerHTML = '&nbsp;';
  } else {
    btnClose2.textContent = 'X';
  }

  pModal.textContent = recentWorksObj[index].description;
}

function showModal() {
  blur.classList.remove('invisible');
  bodyTag.style.overflow = 'hidden';
}

btnSeeProjects.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    createModal(index);
    showModal();
  });
});

btnClose2.addEventListener('click', () => {
  blur.classList.add('invisible');
  bodyTag.style.overflow = 'auto';
  ulModal.innerHTML = '';
});
