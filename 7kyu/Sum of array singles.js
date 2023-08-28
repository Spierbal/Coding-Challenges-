// Solution 1: Set
function repeats(arr) {
  let uniqueSet = new Set();
  let sum = 0;

  for (let num of arr) {
    if (uniqueSet.has(num)) {
      sum -= num;
    } else {
      uniqueSet.add(num);
      sum += num;
    }
  }
  return sum;
}

/* 
// Solution 2: object & Set
function repeats(arr) {
  const freqObj = {};
  const uniqueSet = new Set();

  for (const num of arr) {
    freqObj[num] = freqObj[num] + 1 || 1;
    freqObj[num] === 1 ? uniqueSet.add(num) : uniqueSet.delete(num);
  }
  return [...uniqueSet].reduce((a, b) => a + b, 0);
} */

/* 
// Solution 3: Map
function repeats(arr) {
  const freqMap = new Map();
  let sum = 0;

  for (const num of arr) {
    freqMap.set(num, freqMap.get(num) + 1 || 1);
  }
  for (const [num, count] of freqMap.entries()) {
    if (count === 1) sum += num;
  }
  return sum;
} */

// console.log(repeats([4, 5, 7, 5, 4, 8])); // 15
// console.log(repeats([9, 10, 19, 13, 19, 13])); // 19
// console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])); // 12
// console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13])); // 22
// console.log(repeats([5, 10, 19, 13, 10, 13])); // 24
