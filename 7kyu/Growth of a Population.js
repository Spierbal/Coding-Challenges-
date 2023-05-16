// Solution 1: While Loop
function nbYear(p0, percent, aug, p) {
  let years = 0;

  while (p0 < p) {
    p0 += Math.floor((p0 * percent) / 100 + aug);
    years++;
  }
  return years;
}

// Solution 2: For Loop
/* function nbYear(p0, percent, aug, p) {
  let years;

  for (years = 0; p0 < p; years++) {
    p0 += Math.floor((p0 * percent) / 100 + aug);
  }
  return years;
} */

// Solution 3: Recursion
/* function nbYear(p0, percent, aug, p) {
  const newPopulation = Math.floor(p0 + p0 * (percent / 100) + aug);

  if (newPopulation >= p) return 1;

  return nbYear(newPopulation, percent, aug, p) + 1;
} */

// Solution 3b: Recursion
/* function nbYear(p0, percent, aug, p) {
  return p0 < p
    ? nbYear(Math.floor(p0 + (p0 * percent) / 100) + aug, percent, aug, p) + 1
    : 0;
} */

// console.log(nbYear(1500, 5, 100, 5000)); // 15
// console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10
// console.log(nbYear(1500000, 0.25, 1000, 2000000)); // 94
// console.log(nbYear(1000, 2, 50, 1200)); // Output: 3
// console.log(nbYear(1500, 5, 100, 5000)); // Output: 15
// console.log(nbYear(1500000, 2.5, 10000, 2000000)); // Output: 10
