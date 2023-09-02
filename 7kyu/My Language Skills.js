function myLanguages(results) {
  return Object.keys(results)
    .filter(languages => results[languages] >= 60)
    .sort((a, b) => results[b] - results[a]);
}

/* 
// Solution 2: for in loop
function myLanguages(results) {
  const languages = [];
  for (const language in results) {
    if (results[language] >= 60) {
      languages.push(language);
    }
  }
  return languages.sort((a, b) => results[b] - results[a]);
} */

// console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 })); // ["Ruby", "Python"])
// console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 })); // ["Dutch", "Greek", "Hindi"])
// console.log(myLanguages({ "C++": 50, ASM: 10, Haskell: 20 })); // [])
