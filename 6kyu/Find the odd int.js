// function findOdd(A) {
//   let counter = 0;

//   for (let i = 0; i < A.length; i++) {
//     let Arr = A[i];
//     for (let j = 0; j < A.length; j++) {
//       if (A[i] === A[j]) counter++;
//     }
//     if (counter % 2 !== 0) return Arr;
//   }
// }

// Shortest Solution:

// const findOdd = arr =>
//   arr.find((item) => arr.filter(el => el === item).length % 2);

// console.log(findOdd([20,1,1,2,2,3,3,3,5,5,4,20,4], 5)); --> 5 appears three times which is odd.
// console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5], -1)) --> -1 appears one time which is odd.
