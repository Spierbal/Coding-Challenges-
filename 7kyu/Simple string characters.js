function solve(s) {
  let uppercaseCount = 0;
  let lowercaseCount = 0;
  let numCount = 0;
  let specialCount = 0;

  const specialRegex = /[^A-Za-z0-9]/;

  for (const char of s) {
    if (/[A-Z]/.test(char)) uppercaseCount++;
    else if (/[a-z]/.test(char)) lowercaseCount++;
    else if (/\d/.test(char)) numCount++;
    else if (/\W/.test(char)) specialCount++;
  }
  return [uppercaseCount, lowercaseCount, numCount, specialCount];
}

// console.log(solve("")); // [0,0,0,0]);
// console.log(solve("aAbBcC")); // [3,3,0,0]);
// console.log(solve("Codewars@codewars123.com")); // [1,18,3,2]);
// console.log(solve("bgA5<1d-tOwUZTS8yQ")); // [7,6,3,2]);
// console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H")); // [9,9,6,9]);
// console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD")); // [15,8,6,9]);
// console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe")); // [10,7,3,6])
// console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft")); // [7,13,4,10]);
