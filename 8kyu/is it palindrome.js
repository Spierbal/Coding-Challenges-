const isPalindrome = x =>
  [...x.toLowerCase()].reverse().join("") === x.toLowerCase();

// Solution 1b:
// const isPalindrome = x =>
//   x.toLowerCase() === [...x].reverse().join("").toLowerCase();

//solution 2:
// const isPalindrome = x =>
//   x.split("").reverse().join("").toLowerCase() === x.toLowerCase();

//Solution 2b:
// const isPalindrome = x =>
// 	x.toLowerCase() === x.split("").reverse().join("").toLowerCase();

// console.log(isPalindrome("Aba")); // --> true
// console.log(isPalindrome("aba")); // --> true
// console.log(isPalindrome("hello")); // --> false
