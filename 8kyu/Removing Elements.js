const removeEveryOther = arr => arr.filter((_, index) => index % 2 === 0);

//const removeEveryOther = arr => arr.filter((_, i) => (i + 1) % 2 !== 0);
//const removeEveryOther = arr => arr.filter((_, i) => (i + 2) % 2 === 0);

// Solution 2: for...in loop
// function removeEveryOther(arr) {
//   let r = [];

//   for (let i in arr) {
//     if (i % 2 === 0) r.push(arr[i]);
//   }
//   return r;
// }

// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])) // --> [ 'Hello', 'Hello Again' ]

//console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // --> [ 1, 3, 5, 7, 9 ]
