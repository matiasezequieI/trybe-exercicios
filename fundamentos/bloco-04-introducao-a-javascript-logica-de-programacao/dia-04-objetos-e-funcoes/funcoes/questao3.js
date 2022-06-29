function checkLowestValuePositions(vetor) {
  let lowestValuePosition = vetor[0];
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] < lowestValuePosition) {
      lowestValuePosition = i;
    }
  }
  return lowestValuePosition;
}

console.log(checkLowestValuePositions([2, 4, 6, 7, 10, 0, -3]));
