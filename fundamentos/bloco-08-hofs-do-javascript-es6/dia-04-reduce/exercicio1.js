const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

// 1 - Dada uma matriz, transforme em um array.

const flatten = () =>
  arrays.reduce(
    (previousValue, currentValue) => currentValue.concat(currentValue),
    []
  );
console.log(flatten());
