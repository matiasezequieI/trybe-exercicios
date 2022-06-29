function somaTodosOsNumeros(num) {
  let total = 0;
  if (num < 0) {
    return 'numero nao natural';
  } else {
    for (let i = 1; i <= num; i++) {
      total += i;
    }
  }
  return total;
}

console.log(somaTodosOsNumeros(5));
