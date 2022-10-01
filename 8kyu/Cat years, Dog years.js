function humanYearsCatYearsDogYears(humanYears) {
  let dogYears = 0;
  let catYears = 0;

  if (humanYears === 1) {
    catYears += 15;
    dogYears += 15;
  } else if (humanYears === 2) {
    catYears += 9;
    dogYears += 9;
  } else if (humanYears > 2) {
    catYears += 4;
    dogYears += 5;
  }
  return [humanYears, catYears, dogYears];
}

// Solution 2:
// const humanYearsCatYearsDogYears = (humanYears) => {
//   switch(humanYears){
//     case 1: return [1, 15, 15];
//     case 2: return [2, 24, 24];
//   }
//   return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ]
// }

//Solution 3:
// const humanYearsCatYearsDogYears = h => {
//   if (h == 1) return [1, 15, 15];
//   if (h == 2) return [2, 24, 24];
//   return [h, (h - 2) * 4 + 24, (h - 2) * 5 + 24];
// };

//Solution 4:
// const humanYearsCatYearsDogYears = h => {
//   const c = h === 1 ? 15 : h === 2 ? 24 : 24 + (h - 2) * 4;
//   const d = h === 1 ? 15 : h === 2 ? 24 : 24 + (h - 2) * 5;
//   return [h, c, d];
// };

// console.log(humanYearsCatYearsDogYears(1)); // --> [1, 15, 15]
// console.log(humanYearsCatYearsDogYears(2)) // --> [2, 24, 24]
