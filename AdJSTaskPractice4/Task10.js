function product(products) {
  const totalPrice = products.reduce((sum, { price }) => sum + price, 0);
  const averagePrice = totalPrice / products.length;
  const result = products
    .filter(({ price }) => price > averagePrice)
    .map(({ name }) => name);

  return result;
}
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 700 }
];
console.log(product(products)); 