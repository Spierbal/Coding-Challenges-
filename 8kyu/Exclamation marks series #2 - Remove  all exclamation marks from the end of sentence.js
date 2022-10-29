const remove = str => str.replace(/!*$/g, "");

// Solution 2:
/* function remove(str) {
  while (str[str.length - 1] === "!") {
    str = str.slice(0, -1);
  }
  return str;
} */

// console.log(remove("Hi!")); // --> "Hi"
// console.log(remove("Hi!!!")); // --> "Hi"
// console.log(remove("!Hi!")); // --> "!Hi"
