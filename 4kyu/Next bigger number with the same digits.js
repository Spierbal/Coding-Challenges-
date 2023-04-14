function nextBigger(n) {
  // Convert the number to an array of digits
  const digits = [...String(n)].map(Number);

  // Find the first digit from the right that is smaller than the digit after it
  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) i--;

  // If no such digit is found, return -1
  if (i < 0) return -1;

  // Find the smallest digit from the right that is bigger than the digit at i
  let j = digits.length - 1;
  while (j > i && digits[j] <= digits[i]) j--;

  // Swap the two digits
  [digits[i], digits[j]] = [digits[j], digits[i]];

  // Reverse the digits after i
  for (let k = i + 1, l = digits.length - 1; k < l; k++, l--) {
    [digits[k], digits[l]] = [digits[l], digits[k]];
  }

  // Convert the array of digits back to a number and return it
  return Number(digits.join(""));
}

// Solution 1b: replace for loop with while loop
function nextBigger(n) {
  const digits = [...String(n)].map(Number);

  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) i--;

  if (i < 0) return -1;

  let j = digits.length - 1;
  while (digits[j] <= digits[i]) j--;

  [digits[i], digits[j]] = [digits[j], digits[i]];

  let k = i + 1;
  let l = digits.length - 1;
  while (k < l) {
    [digits[k], digits[l]] = [digits[l], digits[k]];
    k++;
    l--;
  }
  return Number(digits.join(""));
}

// console.log(nextBigger(12)); // 21
// console.log(nextBigger(513)); // 531
// console.log(nextBigger(2017)); // 2071
// console.log(nextBigger(414)); // 441
// console.log(nextBigger(144)); //414
// console.log(nextBigger(298765422000)); //400022256789
