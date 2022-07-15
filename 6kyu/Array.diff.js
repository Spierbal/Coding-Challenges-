const arrayDiff = (a, b) => a.filter(x => !b.includes(x));

//Solution 2:
//const arrayDiff = (a, b) => a.filter(x => b.indexOf(x) === -1);

// Solution 3:
// function arrayDiff(a, b) {
//   const res = [];

//   for (let i = 0; i < a.length; i++) {
//     if (b.indexOf(a[i]) === -1) {
//       res.push(a[i]);
//     }
//   }
//   return res;
// }

console.log(arrayDiff([1, 2], [1])); // --> [2]
console.log(arrayDiff([1, 2, 2], [1])); // --> [2,2]
console.log(arrayDiff([1, 2, 3], [1, 2])); // --> [3]
