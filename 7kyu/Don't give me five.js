// Solution 1: reduce & regex
function dontGiveMeFive(start, end) {
  return [...Array(end - start + 1)].reduce((count, _, idx) => {
    return count + !/5/.test(idx + start);
  }, 0);
}

/* 
// Solution 2: map & regex
const dontGiveMeFive = (s, e) =>
  [...Array(e - s + 1)].map((_, i) => s + i).filter(e => !/5/.test(e)).length;  */

// Solution 3: for loop & regex
/* function dontGiveMeFive(start, end) {
  let counter = 0;

  for (let i = start; i <= end; i++) {
    if (String(i).includes("5")) counter = counter;
    else counter++;
  }
  return counter;
} */

// console.log(dontGiveMeFive(4, 17)); // --> 12; (count the numbers & exclude 5 & 15)
// console.log(dontGiveMeFive(1, 9)); // --> 8; (count the numbers & exclude 5 & 15)
