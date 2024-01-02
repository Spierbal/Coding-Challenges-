// Solution 1: for loop - more concise
function tribonacci(signature, n) {
  let sequence = [...signature];

  for (let i = 3; i < n; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2] + sequence[i - 3];
    sequence.push(nextNumber);
  }
  return n > 3 ? sequence : sequence.slice(0, n);
}

/* 
// Solution 1b : for loop - more readable (explicit)
function tribonacci(signature, n) {
  if (n === 0) return [];
  if (n <= 3) return signature.slice(0, n);

  let arr = [...signature];

  for (let i = 3; i < n; i++) {
    const nextNumber = arr[i - 1] + arr[i - 2] + arr[i - 3];
    arr.push(nextNumber);
  }
  return arr;
} */

// console.log(tribonacci([1, 1, 1], 10)); // [1,1,1,3,5,9,17,31,57,105]
// console.log(tribonacci([0, 0, 1], 10)); // [0,0,1,1,2,4,7,13,24,44]
// console.log(tribonacci([0, 1, 1], 10)); // [0,1,1,2,4,7,13,24,44,81]
// console.log(tribonacci([1, 0, 0], 10)); // [1,0,0,1,1,2,4,7,13,24]
// console.log(tribonacci([0, 0, 0], 10)); // [0,0,0,0,0,0,0,0,0,0]
// console.log(tribonacci([1, 2, 3], 10)); // [1,2,3,6,11,20,37,68,125,230]
// console.log(tribonacci([3, 2, 1], 10)); // [3,2,1,6,9,16,31,56,103,190]
// console.log(tribonacci([1, 1, 1], 1)); // [1]
// console.log(tribonacci([3, 1], 2)); // [3,1]
// console.log(tribonacci([300, 200, 100], 0)); // []
