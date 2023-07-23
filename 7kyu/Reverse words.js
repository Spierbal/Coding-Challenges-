const reverseWords = s =>
  s
    .split(" ")
    .map(w => w.split("").reverse().join(""))
    .join(" ");

//Solution 1b:
/* const reverseWords = str =>
  str.split` `.map(w => [...w].reverse().join``).join` `; */

//Solution 1c:
/* const reverseWords = str =>
  str.split``.reverse().join``.split` `.reverse().join` `; */

// Solution 1d:
/*   function reverseWords(str) {
  return str
    .split(" ")
    .map(w => w.split("").reverse().join(""))
    .join(" ");
} */

console.log(reverseWords("This is an example!")); //"sihT si na !elpmaxe"
