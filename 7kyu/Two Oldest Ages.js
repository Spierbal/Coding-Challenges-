const twoOldestAges = ages => [...ages].sort((a, b) => a - b).slice(-2);

/* 
// Solution 2: Math.max & spread operator & filter
const twoOldestAges = ages => {
  const max = Math.max(...ages);
  const secondMax = Math.max(...ages.filter(age => age !== max));
  return [secondMax, max];
}; */

/* 
// Solution 3: for loop (most efficient)
function twoOldestAges(ages) {
  let oldestAge = -Infinity;
  let secondOldestAge = -Infinity;

  for (const age of ages) {
    if (age > oldestAge) {
      secondOldestAge = oldestAge;
      oldestAge = age;
    } else if (age > secondOldestAge) {
      secondOldestAge = age;
    }
  }
  return [secondOldestAge, oldestAge];
} */

// console.log(twoOldestAges([1, 5, 87, 45, 8, 8])); // [45, 87];
// console.log(twoOldestAges([6, 5, 83, 5, 3, 18])); // [18, 83];
