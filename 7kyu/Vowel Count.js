// Solution 1: .match() and .length
function getCount(str) {
  const vowelRegex = /[aeiou]/g;
  return (str.match(vowelRegex) || []).length;
}

/* 
// Solution 1b: More concise 
const getCount = str => (str.match(/[aeiou]/g) || []).length; */

/*
// Solution 2: .split() and .filter()
const getCount = str => str.split("").filter(el => "aeiou".includes(el)).length; */

/* 
// Solution 3: .reduce() 
const getCount = str =>
  str.split("").reduce((count, char) => count + "aeiou".includes(char), 0); */

/* 
// Solution 4: for of loop
function getCount(str) {
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
// console.log(getCount("pear tree")); // --> 4
// console.log(getCount("o a kak ushakov lil vo kashu kakao")); // --> 13
