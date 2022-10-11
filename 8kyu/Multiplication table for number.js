const multiTable = n =>
  [...Array(10)].map((_, i) => `${i + 1} * ${n} = ${(i + 1) * n}`).join("\n");

// Solution 2:
/* const multiTable = n =>
  Array.from(Array(10), (_, i) => `${i + 1} * ${n} = ${(i + 1) * n}`).join(
    "\n"
  ); */

// Solution 3:
/* function multiTable(num) {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${i} * ${num} = ${i * num}\n`;
  }
  return result.slice(0, -1);
} */

// console.log(multiTable(5)); // -->
/* output:
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50  */
