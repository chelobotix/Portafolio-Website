const recent_works_obj = {
  name: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on Rails', 'css', 'Javascript', 'html'],
  imageURL_desktop: 'images/works-dsk.png',
  imageURL_mobile: 'images/work-mobile.png'
}

// Heading Section
const section_works = document.querySelector('.section_works');
const recent_works_div = document.createElement('div');
const h2 = document.createElement('h2');
const img = document.createElement('img');

recent_works_div.classList.add('recent_works_div');
h2.textContent = "My Recent Works"
recent_works_div.appendChild(h2);
section_works.appendChild(recent_works_div);

// Card Section
const card_row = document.createElement('div');
const article = document.createElement('article');
const placeholder = document.createElement('img')
const card_container1 = document.createElement('div');
const h4 = document.createElement('h4');
const ul = document.createElement('ul');
const button_div = document.createElement('div');
const button = document.createElement('button');

card_row.classList.add('card_row');
placeholder.classList.add('placeholder');
card_container1.classList.add('card_container1');
button_div.classList.add('div_button');
button.classList.add('btn_see_projects');
button.classList.add('btn_effects');

if (window.matchMedia("(max-width: 767px)").matches) {
  placeholder.src = recent_works_obj.imageURL_mobile
} else {
  placeholder.src = recent_works_obj.imageURL_desktop
}

h4.textContent = recent_works_obj.name
button.textContent = "See Projects"
button.type = "button"

aux = ""
for (let i = 0; i < 4; i++) {
  aux += "<div><li>" + recent_works_obj.technologies[i] + "</li></div>"
}
ul.innerHTML = aux
button_div.appendChild(button)

for (let i = 0; i < 6; i++) {
  articleAux = article.cloneNode()
  card_container1Aux = card_container1.cloneNode(true)

  card_container1Aux.appendChild(h4.cloneNode(true))
  card_container1Aux.appendChild(ul.cloneNode(true))
  card_container1Aux.appendChild(button_div.cloneNode(true))
  articleAux.appendChild(placeholder.cloneNode(true))
  articleAux.appendChild(card_container1Aux)
  card_row.appendChild(articleAux)
}

section_works.appendChild(card_row);













