const reverseSeq = n => [...Array(n)].map((_, i) => n - i);

//Solution 2:
//const reverseSeq = n => Array.from({ length: n }, (_, i) => n - i);

// Solution 2:
// const reverseSeq = n => {
//   let reverse = [];
//   for (let i = n; i > 0; i--) {
//     reverse.push(i);
//   }
//   return reverse;
// };

// console.log(reverseSeq(5)) // --> [5, 4, 3, 2, 1]
