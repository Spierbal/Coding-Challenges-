const array = arr => arr.split(",").slice(1, -1).join(" ") || null;

// Solution 1b:
/* function array(arr) {
  let arr = arr.split(",");

  return arr.length < 3 ? null : arr.slice(1, -1).join(" ");
} */

// console.log(array("1,2,3,4,5")); // --> "2 3 4"
// console.log(array("")); // null
// console.log(array("1")); // null
// console.log(array("1,2")); // null
