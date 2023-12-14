// Solution 1: Set & for of loop
function repeats(arr) {
  const uniqueNums = new Set();
  let sum = 0;

  for (let num of arr) {
    if (uniqueNums.has(num)) {
      sum -= num;
    } else {
      uniqueNums.add(num);
      sum += num;
    }
  }
  return sum;
}

/* 
// Solution 2: Map & for of loop
function repeats(arr) {
  const freqMap = new Map();
  let sum = 0;

  for (const num of arr) {
    freqMap.set(num, freqMap.get(num) + 1 || 1);
  }
  for (const [num, count] of freqMap) {
    if (count === 1) sum += num;
  }
  return sum;
}
 */
/* 
// Solution 3: object & for of loop
function repeats(arr) {
  const count = {};
  let sum = 0;

  for (const num of arr) {
    count[num] = count[num] + 1 || 1;
    count[num] === 1 ? (sum += num) : (sum -= num);
  }
  return sum;
} */

// console.log(repeats([4, 5, 7, 5, 4, 8])); // 15 (sum of 7 and 8 since these are not repeated)
// console.log(repeats([9, 10, 19, 13, 19, 13])); // 19 (sum of 9 and 10 since these are not repeated)
// console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])); // 12 (sum of 4 and 8 since these are not repeated)
// console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13])); // 22 (sum of 5 and 17 since these are not repeated)
// console.log(repeats([5, 10, 19, 13, 10, 13])); // 24 (sum of 5 and 19 since these are not repeated)
