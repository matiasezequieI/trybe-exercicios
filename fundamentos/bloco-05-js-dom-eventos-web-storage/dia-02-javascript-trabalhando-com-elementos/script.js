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
