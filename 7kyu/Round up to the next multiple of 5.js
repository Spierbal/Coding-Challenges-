const roundToNext5 = n => Math.ceil(n / 5) * 5;

// Solution 2:
/* function roundToNext5(n) {
  while (n % 5) n++;
  return n;
} */

// Solution 2b:
/* function roundToNext5(n) {
    for (let i = 0; (i = n % 5); i++) n++;
    return n;
  } */

/* console.log(roundToNext5([0])); // 0
console.log(roundToNext5([2])); // 5
console.log(roundToNext5([3])); // 5
console.log(roundToNext5([12])); // 15
console.log(roundToNext5([21])); // 25
console.log(roundToNext5([30])); // 30
console.log(roundToNext5([-2])); // 0
console.log(roundToNext5([-5])); // -5
 */
