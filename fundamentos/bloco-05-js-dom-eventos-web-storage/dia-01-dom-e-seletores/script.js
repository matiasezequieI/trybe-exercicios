function changeText() {
  let centerContent = document.getElementsByTagName('p')[1];
  centerContent.innerText =
    'Atuando no mercado de desenvolvimento como um desenvolvedor Web';
}

function changeColorToTrybe() {
  let mainContent = document.getElementsByClassName('main-content')[0];
  mainContent.style.backgroundColor = 'rgb(76,164,109';
}

function changeColorToWhite() {
  let middleSquare = document.getElementsByClassName('center-content')[0];
  middleSquare.style.backgroundColor = 'white';
}

function titleCorrect() {
  let title = document.getElementsByTagName('h1')[0];
  title.innerText = 'Exercício 5.1 - JavaScript';
}

function contentToUpperCase() {
  let firstParagraph = document.getElementsByTagName('p')[0];
  firstParagraph.innerHTML = firstParagraph.innerHTML.toUpperCase();
}

function printAllParagraphs() {
  let allParagraphs = document.getElementsByTagName('p');
  for (let p of allParagraphs) {
    console.log(p.innerText);
  }
}

changeText();
changeColorToTrybe();
changeColorToWhite();
titleCorrect();
contentToUpperCase();
printAllParagraphs();
