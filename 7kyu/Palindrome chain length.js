// Solution 1: while loop
function palindromeChainLength(n) {
  const isPalindrome = num => num === Number([...String(n)].reverse().join(""));

  let steps = 0;

  while (!isPalindrome(n)) {
    n += Number([...String(n)].reverse().join(""));
    steps++;
  }

  return steps;
}

/* 
// Solution 1b: for loop
function palindromeChainLength(n) {
  const isPalindrome = num =>
    String(num) === String(n).split("").reverse().join("");

  let steps = 0;

  while (!isPalindrome(n)) {
    n += Number(String(n).split("").reverse().join(""));
    steps++;
  }

  return steps;
}  */

// console.log(palindromeChainLength(87)); //, 4
// console.log(palindromeChainLength(89)); //, 24
// console.log(palindromeChainLength(10)); //, 1

// console.log(palindromeChainLength(1)); //,  0);
// console.log(palindromeChainLength(88)); //, 0);
