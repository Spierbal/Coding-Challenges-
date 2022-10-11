const findLongest = str => Math.max(...str.split(" ").map(word => word.length));

// Solution 2:
/* 
function findLongest(str) {
  const word = str.split(" ");
  let longest = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > longest) {
      longest = word[i].length;
    }
  }
  return longest;
}
 */

//console.log(findLongest("The quick white fox jumped around the massive dog")) // --> 7
//console.log(findLongest("Take me to tinseltown with you")) // --> 10
