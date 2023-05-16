function findNextSquare1(sq) {
  const root = Math.sqrt(sq);
  if (root % 1 !== 0) return -1;
  return (root + 1) ** 2;
}

// Solution 1b: Formula
/* function findNextSquare(sq) {
  const root = Math.sqrt(sq);
  if (root !== Math.floor(root)) return -1;
  return (root + 1) * (root + 1);
} */

// Solution 1c: Formula (More concise)
/* const findNextSquare = n => (Math.sqrt(n) % 1 ? -1 : (Math.sqrt(n) + 1) ** 2); */

// Solution 2: Recursion
/* function findNextSquare(sq) {
  const root = Math.sqrt(sq);
  if (root % 1 !== 0) return -1; // Return -1 if sq is not a perfect square
  const nextSq = Math.pow(root + 1, 2);
  return nextSq === sq ? findNextSquare(nextSq + 1) : nextSq;
} */

// console.log(findNextSquare(121)) // 144, "Wrong output for 121"
// console.log(findNextSquare(121)) // 144, "Wrong output for 121"
// console.log(findNextSquare(121)) // 144, "Wrong output for 121"
// console.log(findNextSquare(625)) // 676, "Wrong output for 625"
// console.log(findNextSquare(319225)) // 320356, "Wrong output for 319225";
// console.log(findNextSquare(15241383936)) // 15241630849, "Wrong output for 15241383936"
// console.log(findNextSquare(155)) // -1, "Wrong output for 155"
// console.log(findNextSquare(342786627)) // -1, "Wrong output for 342786627"
