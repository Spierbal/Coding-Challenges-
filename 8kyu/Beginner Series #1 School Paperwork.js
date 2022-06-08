const paperwork = (n, m) => (n < 0 || m < 0 ? 0 : n * m);

//Solution 2: if... else statement

// function paperwork(n, m) {
//   if (n < 0 || m < 0) {
//     return 0;
//   }
//   return n * m;
// }

// console.log(paperwork(5,-5)) // -->  0
// console.log(paperwork(5,5)) // -->  25
