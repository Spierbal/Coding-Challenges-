const countSheep = n =>
  [...Array(n)].map((_, i) => `${i + 1} sheep...`).join("");

// Solution 2:
// const countSheep = n =>
//   Array.from(Array(n), (_, i) => `${i + 1} sheep...`).join("");

// Solution 3: less optimized
/* function countSheep(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
} */

// console.log(countSheep(2)) // --> "1 sheep...2 sheep..."
// console.log(countSheep(5)); // --> "1 sheep...2 sheep...3 sheep..."
