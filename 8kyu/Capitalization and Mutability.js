// Solution 1: slice()
const capitalizeWord = word => word[0].toUpperCase() + word.slice(1);

/* 
// Solution 2: charAt()
const capitalizeWord = word => word.charAt(0).toUpperCase() + word.slice(1);  */

/* 
// Solution 3: replace() (regex)
const capitalizeWord = word => word.replace(/^\w/, char => char.toUpperCase());  */

// console.log(capitalizeWord("word")); // --> "Word"
// console.log(capitalizeWord("glassWear")); // --> "Glasswear"
