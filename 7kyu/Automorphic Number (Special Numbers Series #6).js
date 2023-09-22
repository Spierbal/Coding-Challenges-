// Solution 1: String conversion & endsWith
function automorphic(n) {
  const square = n ** 2;
  const numStr = String(n);
  const squareStr = String(square);

  return squareStr.endsWith(numStr) ? "Automorphic" : "Not!!";
}

/* 
// Solution 2: String Conversion & slice
function automorphic(n) {
  const square = n ** 2;
  const numStr = String(n);
  const squareStr = String(square);
  const suffix = squareStr.slice(-numStr.length);
  return suffix === numStr ? "Automorphic" : "Not!!";
} */

// console.log(automorphic(1)); // "Automorphic"
// console.log(automorphic(3)); // "Not!!"
// console.log(automorphic(6)); // "Automorphic"
// console.log(automorphic(9)); // "Not!!");
// console.log(automorphic(25)); // "Automorphic"
// console.log(automorphic(53)); // "Not!!");
// console.log(automorphic(76)); // "Automorphic"
// console.log(automorphic(95)); // "Not!!");
// console.log(automorphic(625)); // "Automorphic"
// console.log(automorphic(225)); // "Not!!"
