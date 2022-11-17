function rot13(message) {
  const alpha =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(/[a-z]/gi, char => alpha[alpha.indexOf(char) + 13]);
}

// Solution 1b:
// function rot13(message) {
//   let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   let rot13Alpha = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

//   return message.replace(/[a-z]/gi, char => rot13Alpha[alpha.indexOf(char)]);
// }

// Solution 2:
/* const rot13 = message =>
  message.replace(/[a-z]/gi, char =>
    String.fromCharCode(
      char.charCodeAt(0) + (char.toLowerCase() <= "m" ? 13 : -13)
    )
  ); */

// console.log(rot13("test")); // --> "grfg"
