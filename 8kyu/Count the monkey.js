//Solution:
const monkeyCount = n => [...Array(n)].map((_, x) => x + 1);

// Solution 2:
// const monkeyCount = n =>
//   Array(n)
//     .fill()
//     .map((_, i) => i + 1);

// Solution 3: Less Optimized
// function monkeyCount(n) {
//     let arr = [];
//     for(let i = 1; i <= n; i++) arr.push(i);
//
//     return arr;
//   }

//console.log(monkeyCount(5)) --> [1, 2, 3, 4, 5]
