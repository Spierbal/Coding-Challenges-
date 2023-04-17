const pillars = (numPill, dist, width) =>
  numPill > 1 ? (numPill - 2) * width + (numPill - 1) * dist * 100 : 0;

// Solution 1b:
/* function pillars(numPill, dist, width) {
  if (numPill === 1) return 0;
  const totalWidth = (numPill - 2) * width;
  const totalDistance = (numPill - 1) * dist * 100;

  return totalWidth + totalDistance;
} */

// console.log(pillars(1, 10, 10)); //  0
// console.log(pillars(2, 20, 25)); // 2000
// console.log(pillars(11, 15, 30)); // 15270
