const squareDigits = num => Number([...String(num)].map(x => x ** 2).join(""));

/* 
// Solution 2:
const squareDigits = num => +[...String(num)].map(x => Math.pow(x, 2)).join("");
*/

/* 
// Solution 3:
const squareDigits = n =>
  +Array.from(String(n))
    .map(x => x**2)
    .join("");
 */

/* 
// Solution 4:
const squareDigits = num =>
  Number(String(num).split("").map(x => x ** 2).join(""));
 */

// console.log(squareDigits(3212)) // => 9414
// console.log(squareDigits(2112)) // => 4114
