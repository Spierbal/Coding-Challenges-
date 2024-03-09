// Solution 1: Math.floor() (concise)
const cockroachSpeed = s => Math.floor((s * 100000) / 3600);

/* 
//Solution 2: Readable
function cockroachSpeed(s) {
  const KmToCm = 100000; // 1 km = 1000 m * 100 cm = 100000 cm
  const HourToSec = 3600; // 1 hour = 60 minutes * 60 seconds = 3600 seconds
  return Math.floor((s * KmToCm) / HourToSec);
} */

// Solution 3: ParseInt()
// const cockroachSpeed = s => parseInt((s * 100000) / 3600);

// console.log(cockroachSpeed(1.08)); // --> 30
// console.log(cockroachSpeed(1.09)); // --> 30
// console.log(cockroachSpeed(0)); // --> 0
