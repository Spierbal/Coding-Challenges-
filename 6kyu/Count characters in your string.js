function count(str) {
  const counts = {};

  for (const char of str) {
    counts[char] = counts[char] + 1 || 1;
  }
  return counts;
}

// Solution 2:
// function count(str) {
//   const counts = {};
//   str.split("").forEach(s => {
//     counts[s] ? counts[s]++ : (counts[s] = 1);
//   });
//   return counts;
// }

// Solution 3:
// function count(str) {
//   return str.split("").reduce((counts, char) => {
//     counts[char] = (counts[char] || 0) + 1;
//     return counts;
//   }, {});
// }

// console.log(count("aba")); // --> { a: 2, b: 1 }
