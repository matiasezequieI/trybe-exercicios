const sum = (...arrayOfNumbers) =>
  arrayOfNumbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum(5, 5, 5));
