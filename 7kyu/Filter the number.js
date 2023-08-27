// Solution 1: filter, isNaN, join
const filterString = value =>
  Number([...value].filter(char => !isNaN(char)).join(""));

/* 
// Solution 2: regex (replace)
const filterString = value => Number(value.replace(/\D/g, ""));
 */

/* 
// Solution 3: regex (match)
const filterString = value => Number(value.match(/\d/g).join(""));
 */

/* 
// Solution 4: for loop
function filterString(value) {
  let numStr = "";

  for (let i = 0; i < value.length; i++) {
    if (!isNaN(value[i])) numStr += value[i];
  }
  return Number(numStr);
} */

// console.log(filterString("123")); //, 123, `For the input "123"`
// console.log(filterString("a1b2c3")); //, 123, `For the input "a1b2c3"`
// console.log(filterString("aa1bb2cc3dd")); //, 123, `For the input "aa1bb2cc3dd"`
// console.log(filterString("6092z")); //, 123, `For the input "aa1bb2cc3dd"`
