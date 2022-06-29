function checkHighestValuePosition(vetor) {
  let highestValuePosition = vetor[0];
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > highestValuePosition) {
      highestValuePosition = i;
    }
  }
  return highestValuePosition;
}

console.log(checkHighestValuePosition([2, 3, 6, 7, 10, 1]));
