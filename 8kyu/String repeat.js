// solution 1:
//shortest solution and most optimized:
const repeatStr = (n, s) => s.repeat(n);

// 2nd solution:
//const repeatStr = (n, s) => Array(n).fill(s).join("");

// for Loop solution:
// function repeatStr (n, s) {
//   let str = ""
  
//   for (let i = 0; i< n; i++){
//     str+=s;
//   }
//   return str;
// }


//console.log(repeatStr(3, "ha"))

//Write a function called repeatStr which repeats the given string exactly n times.
// Examples:
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
