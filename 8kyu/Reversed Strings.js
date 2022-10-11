const solution = str => str.split("").reverse().join("");

// Solution 2:
/* function solution(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
} */

// console.log(solution("world")); // --> "dlrow"
const text = "Hey, Devs!";
text.charAt(1); // Returns character at a specified position
text.charCodeAt(1); // Returns the Unicode of a character at a specified position

text.fromCharCode(89, 43, 90, 61); // Returns a string from the specific sequence of UTF-16 units
text.indexOf("H"); // Returns the position of the first occurrence of the specified text
text.lastIndexOf("e"); // Returns the position of the last occurrence of the specified text
text.search(regex); // Executes a search for a matching text and returns its position

text.match(regex); // Retrieves the matches of a string and returns it as a new string
text.concat("!"); // Concatenates two or more strings into one
text.replace("Hey", "Yo"); // Find and replace specified text in a string

text.slice(1, 3); // Extracts a section of a string and returns it as a new string
text.split(","); // Splits a string in an array of strings based on a given character
text.substr(1, 2); // Extracts a substring in a specified range of characters
text.substring(1, 2); // Similar to slice() but can't accept negative indices

text.toLowerCase(); // Converts strings to lowercase
text.toUpperCase(); // Converts strings to uppercase

text.valueOf(); // Returns the primative value of a string object
