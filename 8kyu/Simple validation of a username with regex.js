// Solution 1: regex (concise)
const validateUsr = username => /^[a-z0-9_]{4,16}$/.test(username);

// Solution 1b
//const validateUsr = username => /^[a-z\d_]{4,16}$/.test(username);

/* 
// Solution 1b: 
function validateUsr(username) {
  if (username.length < 4 || username.length > 16) return false;
  return /^[a-z0-9_]+$/.test(username);
} */

console.log(validateUsr("asddsa")); // true;
console.log(validateUsr("a")); // false;
console.log(validateUsr("Hass")); // false;
console.log(validateUsr("Hasd_12assssssasasasasasaasasasasas")); // false;
console.log(validateUsr("")); // false;
console.log(validateUsr("____")); // true;
console.log(validateUsr("012")); // false;
console.log(validateUsr("p1pp1")); // true;
console.log(validateUsr("asd43 34")); // false;
console.log(validateUsr("asd43_34")); // true;
console.log(validateUsr("abcd")); // true;
