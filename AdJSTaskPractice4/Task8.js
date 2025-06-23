const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const result = [...new Set([...arr1, ...arr2])];
console.log(result);