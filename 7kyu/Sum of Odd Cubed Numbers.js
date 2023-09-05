// function cubeOdd(arr) {
//   return arr
//     .filter(e => e % 2 !== 0)
//     .reduce((a, b) => (typeof b === "number" ? a + b ** 3 : undefined), 0);
// }

function cubeOdd(arr) {
  const sum = arr.reduce((a, b) => {
    return typeof b === "number" && b % 2 !== 0 ? a + b ** 3 : a;
  }, 0);
  return sum;
}

// function cubeOdd(arr) {
//   let sum = 0;
//   for (const element of arr) {
//     if (isNaN(element)) {
//       return undefined;
//     }
//     sum += element % 2 !== 0 ? element ** 3 : 0;
//   }
//   return sum;
// }

/* 
// Solution 2: for loop
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
