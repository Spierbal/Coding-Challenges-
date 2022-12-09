String.prototype.toJadenCase = function () {
  return this.split` `.map(w => w[0].toUpperCase() + w.slice(1)).join` `;
};

// Solution 2:
// function capitalize(str) {
//   return str.replace(/(^|\s)[a-z]/g, x => x.toUpperCase());
// }

// Solution 3: For Of Loop
/* String.prototype.toJadenCase = function () {
  let words = [];
  for (let word of this.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
};
 */

// Solution 4: For Loop
/* String.prototype.toJadenCase = function () {
  let result = [];
  let word = this.split(" ");
  for (let i = 0; i < word.length; i++) {
    result.push(word[i][0].toUpperCase() + word[i].slice(1));
  }
  return result.join(" ");
};  */

// console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
