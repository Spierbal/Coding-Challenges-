function isVow(a) {
  return a.map(x =>
    ["a", "e", "i", "o", "u"].includes((v = String.fromCharCode(x))) ? v : x
  );
}

// Solution 1b:
// const isVow = (a) => a.map(x => "aeiou".includes(v = String.fromCharCode(x)) ? v: x)

// Solution 2:
/* function isVow(a) {
  for (let i = 0; i < a.length; i++) {
    let char = String.fromCharCode(a[i]);
    if ("aeiou".includes(char)) a[i] = char;
  }
  return a;
}
 */

// console.log(isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106])); // --> [ 118, 'u', 120, 121, 'u', 98, 122, 'a', 120, 106 ]
