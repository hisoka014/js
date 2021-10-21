function getAbsSum(arr) {
   var result = 0;
   for (var i = 1; i < arr.length; i++) {
      result += Math.abs(arr[i] - arr[i - 1]);
   }
   return result;
}

console.log(getAbsSum([2, -1, 4, 8, 10]))

