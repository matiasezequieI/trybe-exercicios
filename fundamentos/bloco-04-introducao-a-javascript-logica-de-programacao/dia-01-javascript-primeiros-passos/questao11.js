const salarioBruto = 2000;
let salarioBase;
let INSS;
let IR;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
  INSS = (salarioBruto * 8) / 100;
} else if (salarioBruto <= 2594.92) {
  INSS = (salarioBruto * 9) / 100;
} else if (salarioBruto <= 5189.82) {
  INSS = (salarioBruto * 11) / 100;
} else {
  INSS = 570.78;
}

salarioBase = salarioBruto - INSS;

if (salarioBase <= 1903.98) {
  IR = 0;
} else if (salarioBase <= 2826.65) {
  IR = (salarioBase * 7.5) / 100 - 142.8;
} else if (salarioBase <= 3751.05) {
  IR = (salarioBase * 15) / 100 - 354.8;
} else if (salarioBase <= 4664.68) {
  IR = (salarioBase * 22.5) / 100 - 636.13;
} else {
  IR = (salarioBase * 27.5) / 100 - 869.36;
}

salarioLiquido = salarioBase - IR;

console.log(`salario liquido é ${salarioLiquido}`);
