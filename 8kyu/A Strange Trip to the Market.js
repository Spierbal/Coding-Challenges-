// Solution 1: regex concise
const isLockNessMonster = s => /tree fiddy|3\.50|three fifty/.test(s);

/* 
// Solution 2: some & includes
const isLockNessMonster = s =>
  ["tree fiddy", "3.50", "three fifty"].some(el => s.includes(el));
 */

/* 
// Solution 3: includes
const isLockNessMonster1 = s =>
  s.includes("tree fiddy") || s.includes("3.50") || s.includes("three fifty"); */

/* 
console.log(
  isLockNessMonster(
    "Your girlscout cookies are ready to ship. Your total comes to tree fiddy"
  )
); // true
console.log(
  isLockNessMonster(
    "Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."
  )
); // false
 */
