function getDivisorsCnt(n) {
  let counter = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) counter++;
  }
  return counter;
}

// Solution 1b:
/* function getDivisorsCnt(n) {
  let count = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count.push(i);
  }
  return count.length;
} */

// Solution 3
/* const getDivisorsCnt = n =>
  [...Array(n + 1)].filter((_, i) => n % i === 0).length; */

// Solution 4
/* const getDivisorsCnt = n =>
  [...Array(Math.floor(n / 2))].filter((_, i) => n % (i + 1) === 0).length + 1; */

/* console.log(getDivisorsCnt(1)); // --> 1
console.log(getDivisorsCnt(10)); // --> 4 (1,2,5,10)
console.log(getDivisorsCnt(11)); // --> 2 (1, 11)
console.log(getDivisorsCnt(54)); // --> 8 (1, 2, 3, 6, 9, 18, 27, 54)
 */
