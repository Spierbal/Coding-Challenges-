// Solution 1: map and Math.max
function gps(s, x) {
  if (x.length <= 1) return 0;
  const speeds = x.slice(1).map((curr, i) => (3600 * (curr - x[i])) / s);

  return Math.floor(Math.max(...speeds));
}

/*  
// Solution 2: for loop
function gps(s, x) {
  if (x.length <= 1) return 0;

  let maxSpeed = 0;

  for (let i = 1; i < x.length; i++) {
    const speed = (3600 * (x[i] - x[i - 1])) / s;
    if (speed > maxSpeed) maxSpeed = speed;
  }
  return Math.floor(maxSpeed);
} 
 */

/* 
// Solution 2: for loop and Math.max
function gps(s, x) {
  if (x.length <= 1) return 0;

  let speeds = [];

  for (let i = 1; i < x.length; i++) {
    const distance = x[i] - x[i - 1];
    const avgSpeed = (3600 * distance) / s;
    speeds.push(avgSpeed);
  }
  const maxSpeed = Math.floor(Math.max(...speeds));
  return maxSpeed;
} 
*/

/* 
// Solution 3: reduce
function gps(s, x) {
  if (x.length <= 1) return 0;

  return Math.floor(
    x.slice(1).reduce((max, distance, i) => {
      const speed = (3600 * (distance - x[i])) / s;
      return speed > max ? speed : max;
    }, 0)
  );
}
 */

// console.log(gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61])); //41
// console.log(gps(17, [0.0, 0.02, 0.44, 0.66, 0.88, 1.1, 1.32, 1.54, 1.76])); //88
// console.log(gps(19, [0.0])); // 0
// console.log(gps(19, [])); //0
