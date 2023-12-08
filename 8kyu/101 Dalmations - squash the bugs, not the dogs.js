// Solution 1: if/else
function howManyDalmatians(n) {
  if (n <= 10) return "Hardly any";
  else if (n <= 50) return "More than a handful!";
  else if (n === 101) return "101 DALMATIANS!!!";
  else return "Woah that's a lot of dogs!";
}

/* 
// Solution 2: ternary
function howManyDalmatians3(n) {
  return n <= 10
    ? "Hardly any"
    : n <= 50
    ? "More than a handful!"
    : n === 101
    ? "101 DALMATIANS!!!"
    : "Woah that's a lot of dogs!";
} */

/* 
// Solution 3: switch
function howManyDalmatians(n) {
  switch (true) {
    case n <= 10:
      return "Hardly any";
    case n <= 50:
      return "More than a handful!";
    case n === 101:
      return "101 DALMATIANS!!!";
    default:
      return "Woah that's a lot of dogs!";
  }
} */

// console.log(howManyDalmatians(8)); // --> "Hardly any";
// console.log(howManyDalmatians(26)); // --> "More than a handful!"
// console.log(howManyDalmatians(80)); // --> "Woah that's a lot of dogs!";
// console.log(howManyDalmatians(101)); // --> "101 DALMATIANS!!!";
