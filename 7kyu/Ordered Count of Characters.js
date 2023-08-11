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
  let charCount = {};
  const result = [];

  for (const char of text) {
    charCount[char] = charCount[char] + 1 || 1;
  }

  for (const char of text) {
    if (charCount[char]) result.push([char, charCount[char]]);
    charCount[char] = 0;
  }

  return result;
} */

/* 
// Solution 3: Using reduce() and Map (most efficient)
function orderedCount(text) {
  return [
    ...[...text]
      .reduce((charMap, char) => {
        charMap.set(char, (charMap.get(char) || 0) + 1);
        return charMap;
      }, new Map())
      .entries(),
  ];
} */

// console.log(orderedCount("abracadabra")); // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]]
// console.log(orderedCount("233312")); // [['2', 2], ['3', 3], ['1', 1 ]]]
