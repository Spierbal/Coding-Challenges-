const preFizz = n => [...Array(n)].map((_, i) => i + 1);

// const preFizz = n => Array.from({ length: n }, (_, i) => i + 1);

// Solution 3:
// function preFizz(n) {
//     let arr = [];
//     for(let i = 1; i <= n; i++) {
//       arr.push(i);
//     }
//     return arr;
//   }

// console.log(preFizz(4)) // --> [1,2,3,4];
