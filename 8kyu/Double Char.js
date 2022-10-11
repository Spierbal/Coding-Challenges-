const doubleChar = str => [...str].map(x => x + x).join("");

//Solution 2:
//const doubleChar = str => Array.from(str).map(x => x + x).join("")

//Solution: 3
/* function doubleChar(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i].repeat(2);
  }
  return result;
}
 */

// console.log(doubleChar("abcd")); // --> "aabbccdd"
