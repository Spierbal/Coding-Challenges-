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

// console.log(countSheep(2)) --> 1 sheep...2 sheep...

//"1 sheep...2 sheep...3 sheep...4 sheep...5 sheep...6 sheep...7 sheep...8 sheep..."
//"1 sheep...2 sheep...3 sheep...4 sheep...5 sheep...6 sheep...7 sheep...8 sheep..."
