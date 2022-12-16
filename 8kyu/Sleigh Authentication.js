function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!";
};

// Solution 2
/* class Sleigh {
  authenticate(name, password) {
    return name === "Santa Claus" && password === "Ho Ho Ho!";
  }
} */

const sleigh = new Sleigh();
// console.log(sleigh.authenticate("Santa Claus", "Ho Ho Ho!")); // --> true
// console.log(sleigh.authenticate("Santa", "Ho Ho Ho!")); // --> false
