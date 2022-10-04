const saleHotdogs = n => n * (n < 5 ? 100 : n < 10 ? 95 : 90);

//solution 2
/* function saleHotdogs(n) {
  if (n < 5) return n * 100;
  if (n < 10) return n * 95;
  if (n >= 10) return n * 90;
} */

// console.log(saleHotdogs(4)); // --> 400;
