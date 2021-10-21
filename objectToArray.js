function objectToArray(obj) {
var arr = [];
for(var key in obj){
   var val = obj[key];
   arr.push([key,val]);
}
return arr;
}

console.log(objectToArray({
  D: 1,
  B: 2,
  C: 3
}));



