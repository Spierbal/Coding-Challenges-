function positiveSum(arr) {
  let sum = 0;

  arr.forEach(item => {
    if (item > 0) {
      sum += item;
    }
  });
  return sum;
}
// 2nd solution
// function positiveSum(arr) {
//   return arr.filter(el => el > 0).reduce((a, b) => a + b, 0)
// }
// 3rd solution
// function positiveSum(arr) {

//   let sum = 0;

//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0){
//       sum += arr[i];
//     }
//   }
//    return sum;
// }
