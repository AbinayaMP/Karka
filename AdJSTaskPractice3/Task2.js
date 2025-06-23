let arr=[[1,2,3],[4,5],[6,7,8,9]];
let flat=arr.reduce(function(a,b){
    return a.concat(b);
});
console.log(JSON.stringify(flat));