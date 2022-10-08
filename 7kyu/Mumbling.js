const accum = s =>
  [...s].map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join("-");

// Solution 2:
/* const accum = s => {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
} */

// console.log(accum("ZpglnRxqenU")); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu")
