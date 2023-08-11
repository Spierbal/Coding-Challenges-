// Solution 1: Using Map and spread operator
function orderedCount(text) {
  const charCountMap = new Map();

  for (const char of text) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
  }
  return [...charCountMap];
}

/* 
// Solution 2: Using Object
function orderedCount(text) {
  let count = {};
  const result = [];

  for (const char of text) {
    count[char] = count[char] + 1 || 1;
  }

  for (const char of text) {
    if (count[char]) result.push([char, count[char]]);
    count[char] = 0;
  }

  return result;
} */

/* 
// Solution 3: Using Map and Array
function orderedCount(text) {
  const charCountMap = new Map();
  const result = [];

  for (const char of text) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
  }

  for (const [char, count] of charCountMap) {
    result.push([char, count]);
  }

  return result;
} */

// console.log(orderedCount("abracadabra")); // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]]
// console.log(orderedCount("233312")); // [['2', 2], ['3', 3], ['1', 1 ]]]
