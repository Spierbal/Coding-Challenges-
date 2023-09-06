// Solution 1: reduce (more efficient)
function cubeOdd(arr) {
  const sumOdd = arr.reduce((sum, num) => {
    if (typeof num !== "number") {
      return undefined;
    }
    if (num % 2 !== 0) {
      return sum + num ** 3;
    }
    return sum;
  }, 0);
  return isNaN(sumOdd) ? undefined : sumOdd;
}

/* 
// Solution 2: every & reduce
function cubeOdd(arr) {
  const areAllNumbers = arr.every(element => typeof element === "number");
  if (!areAllNumbers) return undefined;

  return arr.reduce((sum, num) => (num % 2 !== 0 ? sum + num ** 3 : sum), 0);
} */

/* 
// Solution 3: for loop
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
// console.log(cubeOdd(["a", "12", "9", "z", "42"])); // undefined
