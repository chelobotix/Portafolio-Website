const recentWorksObj = {
  name: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on Rails', 'css', 'Javascript', 'html'],
  imageURL_desktop: 'images/works-dsk.png',
  imageURL_mobile: 'images/work-mobile.png',
};

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

if (window.matchMedia('(max-width: 767px)').matches) {
  placeholder.src = recentWorksObj.imageURL_mobile;
} else {
  placeholder.src = recentWorksObj.imageURL_desktop;
}

h4.textContent = recentWorksObj.name;
button.textContent = 'See Projects';
button.type = 'button';

let aux = '';
for (let i = 0; i < 4; i += 1) {
  aux += `<div><li>${recentWorksObj.technologies[i]}</li></div>`;
}
ul.innerHTML = aux;
buttonDiv.appendChild(button);

for (let i = 0; i < 6; i += 1) {
  const articleAux = article.cloneNode();
  const cardContainer1Aux = cardContainer1.cloneNode(true);

  cardContainer1Aux.appendChild(h4.cloneNode(true));
  cardContainer1Aux.appendChild(ul.cloneNode(true));
  cardContainer1Aux.appendChild(buttonDiv.cloneNode(true));
  articleAux.appendChild(placeholder.cloneNode(true));
  articleAux.appendChild(cardContainer1Aux);
  cardRow.appendChild(articleAux);
}

sectionWorks.appendChild(cardRow);
