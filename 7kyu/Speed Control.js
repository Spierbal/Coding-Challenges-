function gps(s, x) {
  if (x.length <= 1) return 0;

  let arr = [];

  for (let i = 1; i < x.length; i++) {
    const distance = x[i] - x[i - 1];
    const avgSpeed = (3600 * distance) / s;
    arr.push(avgSpeed);
  }
  const maxAvgSpeed = Math.floor(Math.max(...arr));
  return maxAvgSpeed;
}

// console.log(gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61])); //41
// console.log(gps(17, [0.0, 0.02, 0.44, 0.66, 0.88, 1.1, 1.32, 1.54, 1.76])); //88
// console.log(gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61]));
// console.log(gps(19, [0.0])); // 0
// console.log(gps(19, [])); //0
