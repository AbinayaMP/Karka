const people=[
    {Name:'Alice',age:21},
    {Name:'Bob',age:25},
    {Name:'Charlie',age:21},
    {Name:'David',age:25},
    {Name:'Eve',age:22}
]
const grouped = people.reduce(function(acc, curr) {
  const key = curr.age;
  acc[key] = acc[key] || [];
  acc[key].push(curr);
  return acc;
}, {});

console.log(grouped);