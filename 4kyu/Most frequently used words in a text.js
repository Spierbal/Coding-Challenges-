// Solution 1: Map & for...of loop
function topThreeWords(text) {
  const words = text.toLowerCase().match(/\w+('\w]+)?/g) || []; // extract words from text

  const count = new Map();

  for (const word of words) count.set(word, (count.get(word) || 0) + 1); // increment count else set to 1

  const sortedWords = [...count].sort((a, b) => b[1] - a[1]); // sort by count

  return sortedWords.slice(0, 3).map(x => x[0]); // return top 3 words
}

/* 
// Solution 2: Object & for...of loop
function topThreeWords(text) {
  const words = text.toLowerCase().match(/\w+('\w+)?/g) || []; 

  const count = {};

  for (const word of words) count[word] = (count[word] || 0) + 1;

  const sortedWords = Object.entries(count).sort((a, b) => b[1] - a[1]); 

  return sortedWords.slice(0, 3).map(x => x[0]); 
} */

// console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e")); // ['e','d','a']
// console.log(topThreeWords("a a c b b")); // ['a','b','c']
// console.log(
//   topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// ); // ['e','ddd','aa']
// console.log(topThreeWords("  //wont won't won't ")); // ["won't", "wont"]
// console.log(topThreeWords("  , e   .. ")); // ["e"]
// console.log(topThreeWords("  ...  ")); // []
// console.log(topThreeWords("  '  ")); // []
// console.log(
//   topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.`)
// ); // ['a','of','on']
