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
  if (nth <= 0) return -1; // nth is not positive

  const numStr = String(Math.abs(num)); // convert to string
  const index = numStr.length - nth; // get index of nth digit from end

  return index >= 0 ? Number(numStr.charAt(index)) : 0; // return digit or 0 if index is out of range
} */

console.log(findDigit(5673, 4)); // 5
console.log(findDigit(129, 2)); // 2
console.log(findDigit(-2825, 3)); // 8
console.log(findDigit(-456, 4)); // 0
console.log(findDigit(0, 20)); // 0)
console.log(findDigit(65, 0)); // -1
console.log(findDigit(24, -8)); // -1
