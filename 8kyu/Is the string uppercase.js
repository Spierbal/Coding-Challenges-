String.prototype.isUpperCase = function () {
  return String(this) === this.toUpperCase();
};

// console.log('HELLO I AM DONALD'.isUpperCase()) // --> true;
// console.log('hello I AM DONALD'.isUpperCase()) // --> false;
