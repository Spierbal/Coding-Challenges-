const isPalindrome = x =>
  [...x.toLowerCase()].reverse().join("") === x.toLowerCase();

//solution 2:
// const isPalindrome = x =>
//   x.split("").reverse().join("").toLowerCase() === x.toLowerCase();

// Same as Solution 2:
// const isPalindrome = x =>
// 	x.toLowerCase() === x.split("").reverse().join("").toLowerCase();

// console.log(isPalindrome("Aba")); // --> true
// console.log(isPalindrome("aba")); // --> true
// console.log(isPalindrome("hello")); // --> true
