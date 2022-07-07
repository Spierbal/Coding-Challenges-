const repeatStr = (n, s) => s.repeat(n);

//Solution 2:
//const repeatStr = (n, s) => [...Array(n)].map(i => s).join("");

// 3rd solution:
//const repeatStr = (n, s) => Array(n).fill(s).join("");

// for Loop solution:
// function repeatStr (n, s) {
//   let str = ""

//   for (let i = 0; i< n; i++){
//     str+=s;
//   }
//   return str;
// }

//console.log(repeatStr(3, "ha")) // --> "hahaha"
//console.log(repeatStr(6, "I")) // --> // "IIIIII"
