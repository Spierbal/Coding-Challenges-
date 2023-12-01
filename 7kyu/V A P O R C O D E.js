// Solution 1: split(), join()
const vaporcode = str =>
  str.split(" ").join("").toUpperCase().split("").join("  ");

/* 
// Solution 2: replace
const vaporcode = str =>
  str.replace(/ /g, "").toUpperCase().split("").join("  "); */

/*   
// Solution 3: for of loop
function vaporcode(string) {
  let str = "";

  for (const char of string) {
    if (char !== " ") str += `${char.toUpperCase()}  `;
  }
  return str.trimEnd();
}
 */

// console.log(vaporcode("Lets go to the movies")); // "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S");
// console.log(vaporcode("Why isnt my code working")); //"W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G");
