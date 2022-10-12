const findLongest = str => Math.max(...str.split(" ").map(word => word.length));

// Solution 2:
/* const findLongest = str =>
  str.split(" ").reduce((max, word) => Math.max(max, word.length), 0);
 */
// Solution 3:
/* function findLongest(str) {
  const arr = str.split(" ");
  let longest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}
 */

//console.log(findLongest("The quick white fox jumped around the massive dog")) // --> 7
//console.log(findLongest("Take me to tinseltown with you")) // --> 10
