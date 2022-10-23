Array.prototype.reverse = function () {
  const arr = [...this.splice(0)];

  while (arr.length) {
    this.push(arr.pop());
  }
  return this;
};

// Solution 2:
/* Array.prototype.reverse = function () {
  return (
    [...this].forEach((_, i, arr) => (this[i] = arr[arr.length - i - 1])), this
  );
};
 */

// console.log([1, 2, 3, 4].reverse()); // [4,3,2,1]);
