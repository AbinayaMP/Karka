const employees=[
    {id:1,Name:'Alice',position:'Manager'},
    {id:2,Name:'Bob',position:'Engineer'},
    {id:3,Name:'Charlie',position:'Technician'}
];
let result=employees.find(employees =>employees.id===2);
console.log(result)