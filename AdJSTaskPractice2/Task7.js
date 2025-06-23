function sum(...numbers) {
    let total = numbers.reduce((acc, num) => acc + num, 0);
    console.log(total);
}
sum(1, 2, 3, 4, 5); 