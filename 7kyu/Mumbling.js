const accum = s =>
  [...s].map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join("-");

// Solution 2:
/* const accum = s => {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
} */

// Solution 2:
const accum = s =>
  Array.from(
    { length: s },
    (c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)
  ).join("-");

// console.log(accum("ZpglnRxqenU")); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu")

//const countBy = (x, n) => Array.from({ length: n }, (_, i) => x + i * x);
