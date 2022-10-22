const reverseNumber = n =>
  Math.sign(n) * [...`${Math.abs(n)}`].reverse().join("");

/* const reverseNumber = n =>
  (n >= 0 ? 1 : -1) * String(Math.abs(n)).split("").reverse().join("");
 */

/*   function reverseNumber(n) {
    return n <= 0
      ? String(Math.abs(n)).split("").reverse().join("") * -1
      : Number(String(n).split("").reverse().join(""));
  }
 */

// console.log(reverseNumber(123)); // --> 321
// console.log(reverseNumber(-456)); // --> -654
// console.log(reverseNumber(1000)); // 1
