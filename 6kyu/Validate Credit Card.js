function validate(n) {
  n = n.toString().split("");

  sum = 0;

  for (i = 0; i < n.length; i++) {
    let currentVal = n[i];
    if (n.length % 2 !== 0) {
      if (i % 2 === 1) currentVal *= 2;
      if (currentVal > 9) currentVal -= 9;
    } else {
      if (i % 2 === 0 || i === 0) currentVal *= 2;
      if (currentVal > 9) currentVal -= 9;
    }
    sum += parseInt(currentVal);
  }
  return sum % 10 === 0;
}

// console.log(validate(123)) // --> false
// console.log(validate(1)) // --> false
// console.log(validate(2121)) // --> true
// console.log(validate(1230)) // --> true
// console.log(validate(8675309)) // -->false
