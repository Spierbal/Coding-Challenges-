const dontGiveMeFive = (s, e) =>
  [...Array(e - s + 1)]
    .map((_, i) => i + s)
    .filter(e => !String(e).includes("5")).length;

// Solution 1b:
/*c = (s, e) =>
  [...Array(e - s + 1)].map((_, i) => s + i).filter(e => !/5/.test(e)).length; */

// Solution 2
/* const dontGiveMeFive = (s, e) =>
  [...Array(e - s + 1)].reduce((pre, _, idx) => pre + !/5/.test(idx + s), 0); */

// Solution 3:
/* function dontGiveMeFive(start, end) {
  let counter = 0;

  for (let i = start; i <= end; i++) {
    if (String(i).includes("5")) counter = counter;
    else counter++;
  }
  return counter;
} */

// Solution 3b:
/* function dontGiveMeFive(start, end) {
  let counter = 0;

  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) counter++;
  }
  return counter;
} */

// console.log(dontGiveMeFive(4, 17)); // --> 12;
// console.log(dontGiveMeFive(1, 9)); // --> 8;
