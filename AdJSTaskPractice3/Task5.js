const cart=[
    {item:'apple',price:1.5},
    {item:'banana',price:2.0},
    {item:'orange',price:1.25}
];
function total(cart) {
  return cart.reduce(function(total, product) {
    return total + product.price;
  }, 0);
}

console.log(total(cart));
