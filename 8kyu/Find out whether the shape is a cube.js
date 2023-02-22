function cubeChecker(volume, side) {
  return volume === side * side * side && volume > 0;
}

// Solution 1b:
// function cubeChecker(volume, side) {
//   return volume === side ** 3 && volume > 0
// }

// Solution 1c:
// function cubeChecker(volume, side) {
// return volume === Math.pow(side, 3) && volume > 0;
// }

// Solution 2:
// const cubeChecker = (volume, side) =>
//   volume > 0 ? volume === side * side * side : false;

// console.log(cubeChecker(56.3, 1)); // false;
// console.log(cubeChecker(-1, 2)); // false
// console.log(cubeChecker(8, 3)); // false
// console.log(cubeChecker(8, 2)); // true
// console.log(cubeChecker(-8, -2)); // false
// console.log(cubeChecker(125, -5)); // false);
