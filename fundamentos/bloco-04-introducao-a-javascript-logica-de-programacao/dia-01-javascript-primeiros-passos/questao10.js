const custoProduto = 10;
const custoVenda = 20;

let valorCustoTotal = custoProduto + (custoProduto / 100) * 20; // incide um imposto de 20%.
let lucro = custoVenda - valorCustoTotal;

if (lucro > 0) {
  console.log(`lucro de ${lucro * 1000} ao vender 1000 unidades`);
} else if (lucro < 0) {
  console.log(
    `voce tera um prejuizo de ${lucro * -1 * 1000} ao vender 1000 unidades`
  );
} else {
  console.log('sem lucro ou prejuizo ao vender este produto');
}
