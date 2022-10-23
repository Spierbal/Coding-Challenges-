Array.prototype.reverse = function () {
  const arr = [...this.splice(0)];

  while (arr.length) {
    this.push(arr.pop());
  }
  return this;
};

console.log([1, 2, 3, 4].reverse()); // [4,3,2,1]);
