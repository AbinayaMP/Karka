let a=['apple','banana','apple','orange','banana','apple'];
let count = a.reduce(function(acc, fruit) {
  if (acc[fruit]) {
    acc[fruit] += 1;
  } else {
    acc[fruit] = 1;
  }
  return acc;
}, {});

console.log(count);