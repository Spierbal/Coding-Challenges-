// Solution 1: for of loop with destructuring assignment
// function twoOldestAges(ages) {
//   let [oldestAge, secondOldestAge] = [-Infinity, -Infinity];

//   for (const age of ages) {
//     if (age > oldestAge) {
//       [oldestAge, secondOldestAge] = [age, oldestAge];
//     } else if (age > secondOldestAge) secondOldestAge = age;
//   }
//   return [secondOldestAge, oldestAge];
// }

/* 
// Solution 2: sort & slice
const twoOldestAges = ages => [...ages].sort((a, b) => a - b).slice(-2); */

/* 
// Solution 3: Math.max & spread operator & filter
const twoOldestAges = ages => {
  const max = Math.max(...ages);
  const secondMax = Math.max(...ages.filter(age => age !== max));
  return [secondMax, max];
}; */

// console.log(twoOldestAges([1, 5, 87, 45, 8, 8])); // [45, 87];
// console.log(twoOldestAges([6, 5, 83, 5, 3, 18])); // [18, 83];
