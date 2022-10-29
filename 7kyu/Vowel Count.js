// Solution 1:
const getCount2 = str => (str.match(/[aeiou]/g) || []).length;

// Solution 2:
// const getCount = str =>
//   str.split("").reduce((total, item) => total + "aeiou".includes(item), 0);

// Solution 3:
// const getCount = str => str.split("").filter(el => "aeiou".includes(el)).length;

// Solution 4:
/* function getCount(str) {
  let vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  
  for (const char of str) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
} */

// console.log(getCount("pyc")); // --> 0
// console.log(getCount("pear tree")) // --> 4
// console.log(getCount("o a kak ushakov lil vo kashu kakao")); // --> 13
