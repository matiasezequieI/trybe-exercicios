const longestWord = (string) => {
  const splitString = string.split(' ');
  let result = splitString[0];

  for (const word of splitString) {
    if (word.length > result.length) {
      result = word;
    }
  }
  return result;
};

console.log(
  longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')
);
