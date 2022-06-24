let maiorNumeroPrimo = 0;

for (let numeroAtual = 2; numeroAtual <= 50; numeroAtual += 1) {
  let ehPrimo = true;
  for (let divisor = 2; divisor < numeroAtual; divisor += 1) {
    if (numeroAtual % divisor === 0) {
      ehPrimo = false;
    }
  }
  if (ehPrimo) {
    maiorNumeroPrimo = numeroAtual;
  }
}

console.log(maiorNumeroPrimo);
