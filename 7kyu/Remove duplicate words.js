const removeDuplicateWords = s => [...new Set(s.split(" "))].join(" ");

// Solution 2: filter with indexOf
/* const removeDuplicateWords = s => {
  return s
    .split(" ")
    .filter((word, idx, arr) => arr.indexOf(word) === idx)
    .join(" ");
}; */

// Solution 3: for loop with includes
/* const removeDuplicateWords = s => {
  let words = s.split(" ");
  let uniqueWords = [];

  for (let i = 0; i < words.length; i++) {
    if (!uniqueWords.includes(words[i])) uniqueWords.push(words[i]);
  }
  return uniqueWords.join(" ");
}; */

// Solution 4: forEach with includes
/* function removeDuplicateWords(s) {
  let uniqueWords = [];
  s.split(" ").forEach(current => {
    if (!uniqueWords.includes(current)) uniqueWords.push(current);
  });
  return uniqueWords.join(" ");
} */

// console.log(
//   removeDuplicateWords("alpha beta beta gamma gamma delta alpha delta")
// ); // , 'alpha beta gamma delta'
