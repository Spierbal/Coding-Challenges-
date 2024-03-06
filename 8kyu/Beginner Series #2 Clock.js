// Solution 1: concise
const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;

/* 
// Solution 2: readable
function past(h, m, s) {
  const hoursInMilliseconds = h * 60 * 60 * 1000;
  const minutesToMilliseconds = m * 60 * 1000;
  const secondsToMilliseconds = s * 1000;
  return hoursToMilliseconds + minutesToMilliseconds + secondsToMilliseconds;
} */

// console.log(past(0, 1, 1)); // 61000
// console.log(past(1, 1, 1)); // 3661000
