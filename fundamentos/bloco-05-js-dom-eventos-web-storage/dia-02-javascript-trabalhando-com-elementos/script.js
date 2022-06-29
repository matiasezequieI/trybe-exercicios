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
