function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
}

// Solution 2:
// const position = letter => `Position of alphabet: ${letter.charCodeAt() - 96}`

// Solution 3:
/* function position(letter) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] === letter) {
      return `Position of alphabet: ${i + 1}`;
    }
  }
} */

// console.log(position("a")) // --> "Position of alphabet: 1"
// console.log(position("z")) // --> "Position of alphabet: 26"
// console.log(position("e")) // --> "Position of alphabet: 5"
