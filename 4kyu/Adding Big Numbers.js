function add(a, b) {
  let res = "",
    carry = 0;
  let i = a.length - 1, // index of the last digit in a
    j = b.length - 1; // index of the last digit in b

  while (i >= 0 || j >= 0 || carry) {
    // while there are still digits to process or a carry from the previous iteration
    let sum = carry; // add the carry from the previous iteration
    if (i >= 0) {
      // add the current digit from a
      sum += parseInt(a[i]); // convert the digit from a string to a number
      i--; // move to the next digit in a
    }
    if (j >= 0) {
      sum += parseInt(b[j]);
      j--;
    }
    res = `${sum % 10}${res}`; // add the current digit to the result
    carry = Math.floor(sum / 10); // calculate the carry for the next iteration
  }

  return res;
}

// console.log(add("1", "1")); // "2");
// console.log(add("123", "456")); // "579");
// console.log(add("888", "222")); // "1110");
// console.log(add("1372", "69")); // "1441");
// console.log(add("12", "456")); // "468");
// console.log(add("101", "100")); // "201");
// console.log(add("63829983432984289347293874", "90938498237058927340892374089")); // "91002328220491911630239667963")
