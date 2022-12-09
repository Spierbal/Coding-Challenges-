const XO = str =>
  (str.match(/x/gi) || []).length === (str.match(/o/gi) || []).length;

// Solution 1b:
/* const XO = str => {
  const x = str.match(/x/gi) || [];
  const o = str.match(/o/gi) || [];
  return x.length === o.length;
}; */

// Solution 2: For Of Loop
/* 
function XO(str) {
  let equal = 0;

  for (let char of str.split("")) {
    if ("x" === char.toLowerCase()) equal += 1;
    if ("o" === char.toLowerCase()) equal -= 1;
  }
  return equal === 0;
} */

// console.log(XO("xo")); // --> true;
// console.log(XO("xoxx")); // --> false;
