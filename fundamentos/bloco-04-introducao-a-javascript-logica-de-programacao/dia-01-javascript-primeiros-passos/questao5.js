const a = 60;
const b = 60;
const c = 60;

if (a < 0 || b < 0 || c < 0) {
  console.log('algum dos valores é invalido');
} else if (a + b + c == 180) {
  console.log(true);
} else {
  console.log(false);
}
