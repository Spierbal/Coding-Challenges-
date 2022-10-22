const reverseNumber = n =>
  Math.sign(n) * String(Math.abs(n)).split("").reverse().join("");

/* const reverseNumber = n =>
  (n >= 0 ? 1 : -1) * String(Math.abs(n)).split("").reverse().join("");
 */

/*   function reverseNumber(n) {
    return n <= 0
      ? String(Math.abs(n)).split("").reverse().join("") * -1
      : Number(String(n).split("").reverse().join(""));
  }
 */
