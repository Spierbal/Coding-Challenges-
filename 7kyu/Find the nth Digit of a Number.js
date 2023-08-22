// Solution 1: array indexing
function findDigit(num, nth) {
  if (nth <= 0) return -1;

  const numStr = String(Math.abs(num));
  const index = numStr.length - nth;

  return index >= 0 ? Number(numStr[index]) : 0;
}

/* 
// Solution 2: charAt instead of array indexing
function findDigit(num, nth) {
  // Check if nth is not positive
  if (nth <= 0) return -1;

  // Convert negative num to positive and convert to string
  const numStr = String(Math.abs(num));
  // Get index of nth digit from end (from right)
  const index = numStr.length - nth;

  // Return the digit at the calculated index
  return nth <= numStr.length ? Number(numStr.charAt(index)) : 0;
} */

// console.log(findDigit(5673, 4)); // 5
// console.log(findDigit(129, 2)); // 2
// console.log(findDigit(-2825, 3)); // 8
// console.log(findDigit(-456, 4)); // 0
// console.log(findDigit(0, 20)); // 0)
// console.log(findDigit(65, 0)); // -1
// console.log(findDigit(24, -8)); // -1
