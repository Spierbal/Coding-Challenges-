const getNumberFromString = s => Number(s.match(/\d/g, "").join(""));

// Solution 1b:
// const getNumberFromString = s => Number(s.replace(/\D/g, ""));

/* console.log(getNumberFromString("1")); // --> 1
console.log(getNumberFromString("123")); // --> 123
console.log(getNumberFromString("this is number: 7")); // --> 7
console.log(getNumberFromString("hell5o wor6ld")); // 56 -->
 */
