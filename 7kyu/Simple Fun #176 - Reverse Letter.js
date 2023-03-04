const reverseLetter = s => [...s.replace(/[^a-zA-Z]/g, "")].reverse().join("");

//Solution 1b:
// const reverseLetter = s => [...s.replace(/[^a-z]/g, "")].reverse().join("");

// Solution 1c:
// const reverseLetter = str => str.match(/[a-z]/gi).reverse().join("");

// console.log(reverseLetter("krishan")); //"nahsirk"
// console.log(reverseLetter("ultr53o?n")); //"nortlu"
// console.log(reverseLetter("ab23c")); //"cba"
// console.log(reverseLetter("krish21an")); //"nahsirk"
