// Solution 1: Map
function mostFrequentItemCount(collection) {
  if (!collection.length) return 0;

  let count = new Map();

  for (let item of collection) {
    count.set(item, count.get(item) + 1 || 1);
  }
  return Math.max(...count.values());
}

// Solution 2: Reduce()
/* function mostFrequentItemCount(collection) {
  if (!collection.length) return 0;
  const count = collection.reduce((acc, item) => {
    acc[item] = acc[item] + 1 || 1;
    return acc;
  }, {});
  return Math.max(...Object.values(count));
} */

// Solution 3: forEach()
/* function mostFrequentItemCount(collection) {
  const count = {};
  let max = 0;

  collection.forEach(n => {
    count[n] = count[n] + 1 || 1;
    max = Math.max(count[n], max);
  });
  return max;
} */

// Solution 4: for loop
/* function mostFrequentItemCount(collection) {
  const count = {};
  let maxCount = 0;

  for (let i = 0; i < collection.length; i++) {
    const item = collection[i];
    count[item] = count[item] + 1 || 1;
    if (count[item] > maxCount) maxCount = count[item];
  }
  return maxCount;
} */

// console.log(mostFrequentItemCount([3, -1, -1])); // 2 (there are two occurrences of -1)
// console.log(
//   mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])
// ); // 5 (there are 5 occurrences of -1)
