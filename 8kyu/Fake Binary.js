function fakeBin(x) {
  return x
    .split("")
    .map(n => (n < 5 ? "0" : "1"))
    .join("");
}

// console.log(fakeBin("45385593107843568")) //-->  "01011110001100111"
