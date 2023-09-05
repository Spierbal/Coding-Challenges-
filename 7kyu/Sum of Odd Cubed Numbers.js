// Solution 1: filter & reduce
function cubeOdd(arr) {
  return arr
    .filter(e => e % 2 !== 0)
    .reduce((a, b) => (typeof b === "number" ? a + b ** 3 : undefined), 0);
}

/* 
// Solution 1b: reduce (more efficient)
function cubeOdd(arr) {
  return arr.reduce((acc, curr) => {
    if (typeof curr !== "number") {
      return undefined;
    }
    const cubed = curr ** 3;
    if (cubed ** 3 % 2 !== 0) {
      return acc + cubed;
    }
    return acc;
  }, 0);
} */

/* 
// Solution 2: for loop & typeof
function cubeOdd(arr) {
  let sum = 0;

  for (const element of arr) {
    if (typeof element !== "number") {
      return undefined;
    }
    const cubed = element ** 3;
    if (cubed % 2 !== 0) {
      sum += cubed;
    }
  }
  return sum;
} */

console.log(cubeOdd([1, 2, 3, 4])); // 28
console.log(cubeOdd([-3, -2, 2, 3])); // 0
console.log(cubeOdd(["a", 12, 9, "z", 42])); // undefined
