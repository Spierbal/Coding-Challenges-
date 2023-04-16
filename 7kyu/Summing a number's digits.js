// const sumDigits = number =>
//   [...String(Math.abs(number))].reduce((a, b) => a + +b, 0);

// Solution 1b
/* const sumDigits = n =>
  String(Math.abs(n))
    .split("")
    .reduce((a, b) => a + +b, 0);
 */

// Solution 1c:
/* const sumDigits = num =>
  Array.from(String(Math.abs(num)), Number).reduce((a, b) => a + b, 0); */

// Solution 1d: Most readable
/* function sumDigits(number) {
  const absoluteNumber = Math.abs(number); // -32 => 32
  const digitsArray = Array.from(String(absoluteNumber), Number); // [3, 2]
  const sum = digitsArray.reduce((sum, cur) => sum + cur, 0); // 5

  return sum;
}
 */

// console.log(sumDigits(10)); // 1
// console.log(sumDigits(99)); // 18
// console.log(sumDigits(-32)); // 5
