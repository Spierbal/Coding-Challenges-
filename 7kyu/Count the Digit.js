// Solution 1: for loop
function nbDig(n, d) {
  let count = 0;

  for (let i = 0; i <= n; i++) {
    const square = String(i * i);
    count += square.split(String(d)).length - 1;
  }

  return count;
}

/* 
// Solution 2: map
function nbDig(n, d) {
  return (
    [...Array(n + 1)]
      .map((_, i) => i * i)
      .join("")
      .split(d).length - 1
  );
}
 */

/* 
// Solution 3: forEach
function nbDig(n, d) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    let squareDigits = [...String(i * i)];

    squareDigits.forEach(digits => {
      if (digits === String(d)) count++;
    });
  }

  return count;
} */

/* 
// Solution 4: map, reduce & Array.from 
function nbDig(n, digit) {
  const squares = Array.from({ length: n + 1 }, (_, i) => String(i * i));

  const digitCounts = squares.map(square => {
    return square.split(String(digit)).length - 1;
  });

  return digitCounts.reduce((total, count) => total + count, 0);
} */

console.log(nbDig(5750, 0)); // 4700 (0 occurs 4700 times in the squares of numbers from 0 to 5750)
console.log(nbDig(11011, 2)); //  9481 (2 occurs 9481 times in the squares of numbers from 0 to 11011)
console.log(nbDig(12224, 8)); // 7733 (8 occurs 7733 times in the squares of numbers from 0 to 12224)
console.log(nbDig(11549, 1)); // 11905 (1 occurs 11905 times in the squares of numbers from 0 to 11549)
