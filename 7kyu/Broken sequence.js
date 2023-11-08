// Solution 1: for loop + Set
function findMissingNumber(sequence) {
  if (sequence === "") return 0;

  const numArr = sequence.split(" ").map(Number);
  if (numArr.some(isNaN)) return 1;

  const numSet = new Set(numArr);
  for (let i = 1; i <= numArr.length; i++) {
    if (!numSet.has(i)) return i;
  }
  return 0;
}

/* 
// Solution 1b: for loop + includes
function findMissingNumber(sequence) {
  const numArr = sequence.split(" ").map(Number);
  if (numArr.some(isNaN)) return 1;

  const maxNum = Math.max(...numArr);
  for (let i = 1; i <= maxNum; i++) {
    if (!numArr.includes(i)) return i;
  }
  return 0;
} */

// console.log(findMissingNumber("1 2 3 5")); // 4 ("It must work for missing middle terms")
// console.log(findMissingNumber("1 3")); // 2 ("It must work for missing middle terms")
// console.log(findMissingNumber("1 5")); // 2 ("It must work for missing more than one number")
// console.log(findMissingNumber("")); // 0 ("It must return 0 for an empty sequence")
// console.log(findMissingNumber("1 2 3 4 5")); // 0 ("It must return 0 if no number is missing")
// console.log(findMissingNumber("2 3 4 5")); // 1 ("It must return 1 for a sequence missing the first element")
// console.log(findMissingNumber("2 6 4 5 3")); // 1 ("It must work for a shuffled input")
// console.log(findMissingNumber("2 1 4 3 a")); // 1 ("It must return 1 for an invalid sequence")