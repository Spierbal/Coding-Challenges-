const countSheeps = arrayOfSheep =>
  arrayOfSheep.filter(element => element === true).length;

// Solution 2:
//const countSheeps = arrayOfSheep => arrayOfSheep.filter(Boolean).length;

// 2nd solution: less optimized
// function countSheeps(arrayOfSheep) {
//   let count = 0;

//   for (i = 0; i < arrayOfSheep.length; i++) {
//     if (arrayOfSheep[i]) count++;
//   }
//   return count;
// }

// console.log(countSheeps([true, true, true, false, false, false, true, true])); // --> 5
