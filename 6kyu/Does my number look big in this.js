// Solution 1: for of loop
function narcissistic(value) {
  const numStr = String(value);
  const power = numStr.length;
  let sum = 0;

  for (const num of numStr) {
    sum += Number(num) ** power;
  }
  return sum === value;
}

/* 
// Solution 1b: for loop
function narcissistic(value) {
  const numStr = String(value);
  const power = numStr.length;
  let sum = 0;

  for (let i = 0; i < power; i++) {
    sum += Math.pow(Number(numStr[i]), power);
  }
  return sum === value;
}  */

/* 
// Solution 3: reduce
function narcissistic(value) {
    const power = String(value).length;
    return (
      value === [...String(value)].reduce((sum, num) => sum + num ** power, 0)
    );
  } */

// console.log(narcissistic(7)); // true
// console.log(narcissistic(153)); // true
// console.log(narcissistic(122)); // false
// console.log(narcissistic(487)); // false
