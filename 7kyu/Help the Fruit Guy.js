// Solution 1: map & replace
function removeRotten(bagOfFruits) {
  return bagOfFruits
    ? bagOfFruits.map(fruit => fruit.replace(/^rotten/, "").toLowerCase())
    : [];
}

/* 
// Solution 2:  map & startsWith & slice
function removeRotten(bagOfFruits) {
  if (!bagOfFruits || bagOfFruits.length === 0) return [];

  return bagOfFruits.map(x =>
    (x.startsWith("rotten") ? x.slice(6) : x).toLowerCase()
  );
} */

/* 
// Solution 3: for...of & startsWith & slice
function removeRotten(bagOfFruits) {
  if (!bagOfFruits || bagOfFruits.length === 0) return [];

  const res = [];

  for (const fruit of bagOfFruits) {
    const cleanFruit = (
      fruit.startsWith("rotten") ? fruit.slice(6) : fruit
    ).toLowerCase();
    res.push(cleanFruit);
  }
  return res;
} */

// console.log(removeRotten(["rottenApple", "banana", "rottenKiwi", "melone", "orange"]));  // --> ["apple","banana","kiwi","melone","orange"]
// console.log(removeRotten([])); // --> []
