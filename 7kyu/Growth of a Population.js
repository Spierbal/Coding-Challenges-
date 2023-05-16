// Solution 1: While Loop
function nbYear(p0, percent, aug, p) {
  let years = 0;

  while (p0 < p) {
    p0 += (p0 * percent) / 100 + aug;
    years++;
  }
  return years;
}

// Solution 2: For Loop
/* function nbYear(p0, percent, aug, p) {
    let years;
    for (years = 0; p0 < p; years++) p0 = (p0 * percent) / 100 + aug;
    return years;
} */

// Solution 3: Recursion
/* function nbYear(p0, percent, aug, p, years = 0) {
  return p0 < p
    ? nbYear(p0 + p0 * (percent / 100) + aug, percent, aug, p, years + 1)
    : years;
} */

// console.log(nbYear(1500, 5, 100, 5000)); // 15
// console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10
// console.log(nbYear(1500000, 0.25, 1000, 2000000)); // 94
