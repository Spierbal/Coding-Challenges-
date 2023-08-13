// Solution 1: Using Map and spread operator
function orderedCount(text) {
  const charFreq = new Map();

  for (const char of text) {
    charFreq.set(char, charFreq.get(char) + 1 || 1);
  }
  return [...charFreq];
}

/* 
// More readable solution 1b: Using Map and spread operator
function orderedCount(text) {
  const charFreq = new Map();

  for (const char of text) {
    const currentCount = (charFreq.get(char) || 0) + 1;
    charFreq.set(char, currentCount);
  }
  return [...charFreq.entries()];
}  */

/* 
// Solution 2: Using Object
function orderedCount(text) {
  const charFreq = {};
  const result = [];

  for (const char of text) {
    charFreq[char] = charFreq[char] + 1 || 1;
  }
  for (const char of text) {
    if (charFreq[char]) result.push([char, charFreq[char]]);
    charFreq[char] = 0;
  }
  return result;
} */

/* 
// Solution 3: Using reduce() and Map (most efficient)
function orderedCount(text) {
  return [
    ...[...text].reduce((charMap, char) => {
      charMap.set(char, charMap.get(char) + 1 || 1);
      return charMap;
    }, new Map()),
  ];
} */

/* 
// Solution 4: Using Object and Set
function orderedCount(text) {
  const charFreq = {};

  for (const char of text) {
    charFreq[char] = charFreq[char] + 1 || 1;
  }

  return [...new Set(text)].map(char => [char, charFreq[char]]);
} */

/* 
// Solution 5: Using Map and Set
function orderedCount(text) {
  const charFreq = new Map();

  for (const char of text) {
    charFreq.set(char, (charFreq.get(char) || 0) + 1);
  }

  return [...new Set(text)].map(char => [char, charFreq.get(char)]);
} */

// console.log(orderedCount("abracadabra")); // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]]
// console.log(orderedCount("233312")); // [['2', 2], ['3', 3], ['1', 1 ]]
