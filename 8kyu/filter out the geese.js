// Solution 1: Set
function gooseFilter(birds) {
  const geese = new Set([
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ]);
  return birds.filter(bird => !geese.has(bird));
}

/* 
// Solution 2: filter
function gooseFilter(birds) {
  const geese = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];

  return birds.filter(bird => !geese.includes(bird));
} */

/* 
// Solution 3: for of
function gooseFilter(birds) {
  const geese = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];

  const result = [];

  for (const bird of birds) {
    if (!geese.includes(bird)) {
      result.push(bird);
    }
  }
  return result;
} */
/* 
console.log(
  gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])
); //--> [] */

/* 
console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
); // --> ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
 */
