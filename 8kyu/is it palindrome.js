// Solution 1:
const isPalindrome = x =>
  x.toLowerCase() === [...x].reverse().join("").toLowerCase();

/* 
//Solution 2:
const isPalindrome = x =>
	x.toLowerCase() === x.split("").reverse().join("").toLowerCase(); */

//Solution 3: regex
// const isPalindrome = x => {
//   cleanedStr = x.toLowerCase().replace(/[^a-z0-9]/g, "");
//   return cleanedStr === [...cleanedStr].reverse().join("");
// };

/* 
// Solution 4: Two-Pointer
function isPalindrome(x) {
  const formattedStr = x.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = formattedStr.length - 1;

  while (left < right) {
    if (formattedStr[left] !== formattedStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
} */

// console.log(isPalindrome("Aba")); // --> true
// console.log(isPalindrome("aba")); // --> true
// console.log(isPalindrome("hello")); // --> false
