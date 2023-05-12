// Solution 1: Map
function mostFrequentItemCount2(collection) {
  const count = new Map();
  for (const item of collection) {
    count.set(item, (count.get(item) || 0) + 1);
  }
  return Math.max(...count.values());
}

// Solution 2: Reduce()
/* function mostFrequentItemCount1(collection) {
  const count = collection.reduce((acc, item) => {
    acc[item] = acc[item] + 1 || 1;
    return acc;
  }, {});
  return Math.max(...Object.values(count)); // 2
} */

// Solution 3: forEach()
/* function mostFrequentItemCount3(collection) {
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

// Solution 4: for loop
function mostFrequentItemCount4(collection) {
  const count = {};
  let maxCount = 0;

  for (let i = 0; i < collection.length; i++) {
    const item = collection[i];
    count[item] = (count[item] || 0) + 1;
    if (count[item] > maxCount) {
      maxCount = count[item];
    }
  }
  return maxCount;
}

console.log(mostFrequentItemCount([3, -1, -1])); // 2
