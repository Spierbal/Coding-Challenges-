const reverseLetter = s => [...s.replace(/[^a-zA-Z]/g, "")].reverse().join("");

//Solution 1b:
//const reverseLetter = s => [...s.replace(/[^a-z]/gi, "")].reverse().join("");

/* function reverseLetter(str) {
  return str.match(/[a-z]/gi).reverse().join("");
} */

/* console.log(reverseLetter("krishan")); //"nahsirk"
console.log(reverseLetter("ultr53o?n")); //"nahsirk"
console.log(reverseLetter("ab23c")); //"nahsirk"
console.log(reverseLetter("krish21an")); //"nahsirk"
 */
