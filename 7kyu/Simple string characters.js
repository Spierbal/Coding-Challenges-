// Solution 1: for loop & charCodeAt()
function solve(s) {
  const counts = [0, 0, 0, 0];

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) counts[0]++; // A-Z
    else if (charCode >= 97 && charCode <= 122) counts[1]++; // a-z
    else if (charCode >= 48 && charCode <= 57) counts[2]++; // 0-9
    else counts[3]++; // Special character
  }
  return counts;
}

/* 
// Solution 2: reduce & charCodeAt()
function solve(s) {
  return [...s].reduce(
    (counts, char) => {
      const charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) counts[0]++; // A-Z
      else if (charCode >= 97 && charCode <= 122) counts[1]++; // a-z
      else if (charCode >= 48 && charCode <= 57) counts[2]++; // 0-9
      else counts[3]++; // Special character
      return counts;
    },
    [0, 0, 0, 0]
    );
  } */

/* 
  // Solution 3: regex & match()
  function solve(s) {
    const uppercaseCount = (s.match(/[A-Z]/g) || []).length;
    const lowercaseCount = (s.match(/[a-z]/g) || []).length;
    const numCount = (s.match(/\d/g) || []).length;
    const specialCharCount = (s.match(/[^A-Za-z0-9]/g) || []).length;
    return [uppercaseCount, lowercaseCount, numCount, specialCharCount];
  } */

/* 
  // Solution 4: for of loop & regex
  function solve(s) {
    let uppercaseCount = 0;
    let lowercaseCount = 0;
    let numCount = 0;
    let specialCharCount = 0;
  
    for (const char of s) {
      if (/[A-Z]/.test(char)) uppercaseCount++;
      else if (/[a-z]/.test(char)) lowercaseCount++;
      else if (/\d/.test(char)) numCount++;
      else specialCharCount++;
    }
    return [uppercaseCount, lowercaseCount, numCount, specialCharCount];
  } */

// console.log(solve("")); // [0,0,0,0]);
// console.log(solve("aAbBcC")); // [3,3,0,0]);
// console.log(solve("Codewars@codewars123.com")); // [1,18,3,2]);
// console.log(solve("bgA5<1d-tOwUZTS8yQ")); // [7,6,3,2]);
// console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H")); // [9,9,6,9]);
// console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD")); // [15,8,6,9]);
// console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe")); // [10,7,3,6])
// console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft")); // [7,13,4,10]);
