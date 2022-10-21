const longest = words => Math.max(...words.map(word => word.length));

// Solution 2:
// const longest = words =>
//   [...words].reduce((max, word) => Math.max(max, word.length), 0);

// Solution 3:
// const longest = words =>
//   [...words].sort((a, b) => b.length - a.length)[0].length;

// console.log(longest(["simple", "is", "better", "than", "complex"])) // --> 7
