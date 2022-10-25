function mostFrequentItemCount(collection) {
  const count = {};
  let max = 0;

  for (const item of collection) {
    count[item] = count[item] + 1 || 1;
  }
  for (const item in count) {
    max = count[item];
  }
  return max;
}

// Solution 2:
/* function mostFrequentItemCount(collection) {
  const count = {};
  let max = 0;

  collection.forEach(n => {
    count[n] ? count[n]++ : (count[n] = 1);
  });
  for (const key in count) {
    max = count[key];
  }
  return max;
} */

// Solution 3:
/* function mostFrequentItemCount(collection) {
  if (!collection.length) return 0;

  let counts = {};
  for (const item of collection) {
    counts[item] = (counts[item] || 0) + 1;
  }
  return Math.max(...Object.values(counts));
} */

// console.log(mostFrequentItemCount([3, -1, -1])); // 2
