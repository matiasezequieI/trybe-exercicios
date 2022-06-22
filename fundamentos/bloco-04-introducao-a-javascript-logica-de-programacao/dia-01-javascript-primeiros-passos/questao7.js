const porcentagem = 70;
let nota;

if (porcentagem < 0 || porcentagem > 100) {
  console.log('nota invalida');
} else if (porcentagem >= 90) {
  nota = 'A';
  console.log(nota);
} else if (porcentagem >= 80) {
  nota = 'B';
  console.log(nota);
} else if (porcentagem >= 70) {
  nota = 'C';
  console.log(nota);
} else if (porcentagem >= 60) {
  nota = 'D';
  console.log(nota);
} else if (porcentagem >= 50) {
  nota = 'E';
  console.log(nota);
} else {
  nota = 'F';
  console.log(nota);
}
