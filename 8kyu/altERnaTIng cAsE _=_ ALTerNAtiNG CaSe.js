String.prototype.toAlternatingCase = function () {
  return this.replace(/[A-z]/g, char =>
    /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()
  );
};
