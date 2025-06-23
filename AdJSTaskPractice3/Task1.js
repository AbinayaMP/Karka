let arr = ['apple', 'banana', 'cherry', 'date'];
let longest = arr.reduce(function(a, b) {
  if (a.length > b.length) {
    return a;
  } else {
    return b;
  }
});
console.log(longest);