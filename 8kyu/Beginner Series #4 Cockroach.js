const cockroachSpeed = s => Math.floor((s * 100000) / 3600);

//const cockroachSpeed = s => Math.floor(s / 0.036); // note: 0.036 (3600 / 100000)
//const cockroachSpeed = s => Math.floor(s * 27.7777778); // note: 27.7777778 (100000 / 3600)

//Solution 2:
// function cockroachSpeed(s) {
//   const secsInHour = 3600;
//   const cmInKM = 100000;
//   const speed = Math.floor((s * cmInKM) / secsInHour);
//   return speed;
// }

//console.log(cockroachSpeed(1.08)) // --> 30
