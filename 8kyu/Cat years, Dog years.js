function humanYearsCatYearsDogYears(humanYears) {
  let dogYears = 0;
  let catYears = 0;

  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  }
  if (humanYears === 2) {
    catYears = 15 + 9;
    dogYears = 15 + 9;
  }
  if (humanYears > 2) {
    catYears = 24 + (humanYears - 2) * 4;
    dogYears = 24 + (humanYears - 2) * 5;
  }
  return [humanYears, catYears, dogYears];
}

//Solution 2:
// const humanYearsCatYearsDogYears = h => {
//   if (h === 1) return [1, 15, 15];
//   if (h === 2) return [2, 24, 24];
//   return [h, 24 + (h - 2) * 4, 24 + (h - 2) * 5];
// };

// Solution 3:
// const humanYearsCatYearsDogYears = h => {
//   switch (h) {
//     case 1:
//       return [1, 15, 15];
//     case 2:
//       return [2, 24, 24];
//   }
//   return [h, 24 + (h - 2) * 4, 24 + (h - 2) * 5];
// };

//Solution 4:
// const humanYearsCatYearsDogYears = h => {
//   const c = h === 1 ? 15 : h === 2 ? 24 : 24 + (h - 2) * 4;
//   const d = h === 1 ? 15 : h === 2 ? 24 : 24 + (h - 2) * 5;
//   return [h, c, d];
// };

// console.log(humanYearsCatYearsDogYears(1)); // --> [1, 15, 15]
// console.log(humanYearsCatYearsDogYears(3)) // --> [3, 28, 29]
// console.log(humanYearsCatYearsDogYears(4)) // --> [3, 32, 34]
