const students=[
    {Name:'Alice',age:21},
    {Name:'Bob',age:25},
    {Name:'Charlie',age:23},
];
let result=students.find(student => student.Name ==='Bob');
console.log(result);