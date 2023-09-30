// Solution 1: Math.max & Math.ceil
const growingPlant = (upSpeed, downSpeed, desiredHeight) =>
  Math.max(1, Math.ceil((desiredHeight - downSpeed) / (upSpeed - downSpeed)));

/* 
// Solution 2: Math.ceil
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  return upSpeed >= desiredHeight
    ? 1
    : Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1;
} */

/* 
// Solution 3: while loop
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let currentHeight = 0;
  let days = 0;

  while (currentHeight < desiredHeight) {
    // During the day
    currentHeight += upSpeed;
    days++;

    if (currentHeight >= desiredHeight) {
      // The plant has reached the desired height
      return days;
    }
    // During the night
    currentHeight -= downSpeed;
  }
  return days;
} */

// console.log(growingPlant(100, 10, 910)); // 10
// console.log(growingPlant(10, 9, 4)); // 1
