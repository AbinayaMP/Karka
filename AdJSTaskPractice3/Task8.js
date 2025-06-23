const products=[
    {id:101,Name:'Laptop'},
    {id:102,Name:'Phone'},
    {id:103,Name:'Tablet'}
];
let result=products.find(product=>product.id ===102);
console.log(result)