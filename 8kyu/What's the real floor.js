const getRealFloor = n => (n <= 0 ? n : n >= 13 ? n - 2 : n - 1);

// Long solution:
/* function getRealFloor(n) {
  if (n >= 13) return n - 2;
  if (n > 0) return n - 1;
  if (n <= 0) return n;
}
 */

// console.log(getRealFloor(0)); // 0
// console.log(getRealFloor(15)); // 13
// console.log(getRealFloor(-3)); // -3
