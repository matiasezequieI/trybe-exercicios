function verificaPalindrome(string) {
  let invertedString = string.split('').reverse().join('');
  if (string !== invertedString) {
    return false;
  } else {
    return true;
  }
}
