// Solution 1: while loop with Math operations
function seven(m) {
  let counter = 0;

  while (m > 99) {
    // Remove last digit and subtract 2 times the last digit
    m = Math.floor(m / 10) - 2 * (m % 10);
    counter++;
  }
  return [m, counter];
}

/* 
// Solution 1b: while loop
function seven(m) {
  let counter = 0;

  while (String(m).length > 2) {
    m = String(m).slice(0, -1) - 2 * String(m).slice(-1);
    counter++;
  }
  return [m, counter];
} */

/* 
// Solution 2: for loop
function seven(m) {
  let counter = 0;

  for (; m > 99; counter++) {
    m = Math.floor(m / 10) - 2 * (m % 10);
  }
  return [m, counter];
} */

// console.log(seven(1021)); // [10, 2])
// console.log(seven(1603)); // [7, 2])
// console.log(seven(371)); // [35, 1])
// console.log(seven(483)); // [42, 1])
