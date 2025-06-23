function joinWords(separator = ',', ...words) {
  return words.join(separator);
}
console.log(joinWords('-', 'apple', 'banana', 'cherry')); 