const lowercaseCount = str => str.replace(/[^a-z]/g, "").length;

// Solution 2
// const lowercaseCount = str => (str.match(/[a-z]/g) || []).length;

/* console.log(lowercaseCount("abc")); //  3
console.log(lowercaseCount("abcABC123")); //  3
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~")); //  3
console.log(lowercaseCount("")); //  0
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~")); //  0
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz")); //  26 */
