function reverseWords(str) {
  return str
    .split(" ")
    .map(w => w.split("").reverse().join(""))
    .join(" ");
}

// Shorter solution
const reverseWords = str =>
  str.split` `.map(w => w.split``.reverse().join``).join` `;

//console.log(reverseWords("This is an example!")); //"sihT si na !elpmaxe"
