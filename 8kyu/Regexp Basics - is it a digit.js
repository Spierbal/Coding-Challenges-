String.prototype.digit = function () {
  return /^\d$/g.test(this);
};

/* console.log("".digit()); // false
console.log("7".digit()); // true
console.log("a5".digit()); // false
console.log("14".digit()); // false
 */
