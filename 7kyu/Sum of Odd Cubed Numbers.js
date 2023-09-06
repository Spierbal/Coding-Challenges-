// Solution 1: every & reduce
function cubeOdd(arr) {
  return arr.every(element => typeof element === "number")
    ? arr.reduce((sum, num) => (num % 2 !== 0 ? sum + num ** 3 : sum), 0)
    : undefined;
}

/* 
// Solution 1b: reduce (more efficient)
function cubeOdd(arr) {
  const sum = arr.reduce((acc, num) => {
    if (typeof num !== "number") {
      return undefined;
    }
    if (num % 2 !== 0) {
      return acc + num ** 3;
    }
    return acc;
  }, 0);
  return isNaN(sum) ? undefined : sum;
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

// console.log(cubeOdd([1, 2, 3, 4])); // 28
// console.log(cubeOdd([-3, -2, 2, 3])); // 0
// console.log(cubeOdd(["a", 12, 9, "z", 42])); // undefined
