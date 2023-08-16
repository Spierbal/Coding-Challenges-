const reverseSeq = n => Array.from({ length: n }, (_, i) => n - i);

/* 
// Solution 2: spread operator & map()
const reverseSeq = n => [...Array(n)].map((_, i) => n - i);
 */

/* 
// Solution 3: for loop
const reverseSeq = n => {
  let reversed = [];
  for (let i = n; i > 0; i--) {
    reversed.push(i);
  }
  return reversed;
}; */

// console.log(reverseSeq(5)) // --> [5, 4, 3, 2, 1]
