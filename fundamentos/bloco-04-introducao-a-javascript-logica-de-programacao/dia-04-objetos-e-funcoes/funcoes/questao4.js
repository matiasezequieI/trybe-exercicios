function checkLongestWord(vetor) {
  let longestWord = vetor[0];
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i].length > longestWord.length) {
      longestWord = vetor[i];
    }
  }
  return longestWord;
}

console.log(
  checkLongestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
);
