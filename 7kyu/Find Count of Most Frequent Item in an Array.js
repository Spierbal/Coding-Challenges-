// Solution 1: Map Object
function mostFrequentItemCount(collection) {
  if (!collection.length) return 0;

  const count = new Map();

  for (const item of collection) {
    count.set(item, (count.get(item) || 0) + 1);
  }
  return Math.max(...count.values());
}

/* 
// Solution 2: Object and for of loop
function mostFrequentItemCount(collection) {
  if (!collection.length) return 0;
  const count = {};

  for (let item of collection) {
    count[item] = count[item] + 1 || 1;
  }
  return Math.max(...Object.values(count));
} */

/* 
// Solution 3: Reduce()
function mostFrequentItemCount(collection) {
  if (!collection.length) return 0;

  const count = collection.reduce((acc, item) => {
    acc[item] = acc[item] + 1 || 1;
    return acc;
  }, {});
  return Math.max(...Object.values(count));
}  */

/* 
// Solution 4: Object & forEach()
function mostFrequentItemCount(collection) {
  if (!collection.length) return 0;

  const count = {};

  collection.forEach(item => {
    count[item] = count[item] + 1 || 1;
  });
  return Math.max(...Object.values(count));
} 
 */

// console.log(mostFrequentItemCount([3, -1, -1])); // 2 (there are two occurrences of -1)
// console.log(mostFrequentItemCount([3, -1, -1, -1, 3, -1, 3, -1, 9, 3])); // 5 (there are 5 occurrences of -1)
