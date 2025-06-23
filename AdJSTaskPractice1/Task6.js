function index(arr, element) {
    return {
        firstIndex: arr.indexOf(element),
        lastIndex: arr.lastIndexOf(element)
    };
}
const numbers = [1, 2, 3, 2, 4, 2, 5];
const result = index(numbers, 2);
console.log(result);