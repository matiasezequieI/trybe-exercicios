let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let resultado = 0;

for (let i = 0; i < numbers.length; i++) {
  soma += numbers[i];
}

resultado = soma / numbers.length;
if (resultado > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}
