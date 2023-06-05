function highAndLow(numbers) {
  const n = numbers.split(" ");
  return `${Math.max(...n)} ${Math.min(...n)}`;
}
/* 
//Solution 2:
const highAndLow = numbers =>
  `${Math.max(...numbers.split(" "))} ${Math.min(...numbers.split(" "))}`;
 */
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // --> 42 -9
