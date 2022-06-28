let centerContent = document.getElementsByTagName('p')[1];
centerContent.innerText =
  'Atuando no mercado de desenvolvimento como um desenvolvedor Web';

let mainContent = document.getElementsByClassName('main-content')[0];
mainContent.style.backgroundColor = 'rgb(76,164,109';

let middleSquare = document.getElementsByClassName('center-content')[0];
middleSquare.style.backgroundColor = 'white';

let title = document.getElementsByTagName('h1')[0];
title.innerText = 'Exercício 5.1 - JavaScript';

let firstParagraph = document.getElementsByTagName('p')[0];
firstParagraph.innerHTML = firstParagraph.innerHTML.toUpperCase();

let allParagraphs = document.getElementsByTagName('p');
for (let p of allParagraphs) {
  console.log(p.innerText);
}
