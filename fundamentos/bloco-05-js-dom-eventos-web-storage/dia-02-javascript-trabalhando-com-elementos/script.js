let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1);

let main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

let section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

let p = document.createElement('p');
p.innerText = 'Olá, mundo';
section.appendChild(p);

let leftSection = document.createElement('section');
leftSection.className = 'left-content';
main.appendChild(leftSection);

let rightSection = document.createElement('section');
rightSection.className = 'right-content';
main.appendChild(rightSection);

let img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
leftSection.appendChild(img);

let ul = document.createElement('ul');
rightSection.appendChild(ul);
let numeros = [
  'um',
  'dois',
  'três',
  'quatro',
  'cinco',
  'seis',
  'sete',
  'oito',
  'nove',
  'dez',
];

for (let i = 0; i <= numeros.length; i++) {
  let li = document.createElement('li');
  li.innerText = numeros[i];
  ul.appendChild(li);
}

for (let i = 1; i <= 3; i++) {
  let h3 = document.createElement('h3');
  h3.innerText = `Trybe - ${i}`;
  main.appendChild(h3);
}

h1.className = 'title';

let h3 = document.getElementsByTagName('h3');
for (let i = 0; i < h3.length; i++) {
  h3[i].className = 'description';
}

main.removeChild(leftSection);
