function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;

  const len1 = a1.map(str => str.length);
  const len2 = a2.map(str => str.length);

  return Math.max(
    Math.max(...len1) - Math.min(...len2),
    Math.max(...len2) - Math.min(...len1)
  );
}

// Solution 2: for loop
/* function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;

  let min1 = Number.MAX_VALUE;
  let max1 = Number.MIN_VALUE;
  let min2 = Number.MAX_VALUE;
  let max2 = Number.MIN_VALUE;

  // iterate over a1 to find min and max length
  for (let i = 0; i < a1.length; i++) {
    const len = a1[i].length;
    if (len < min1) min1 = len;
    if (len > max1) max1 = len;
  }
  // iterate over a2 to find min and max length
  for (let i = 0; i < a2.length; i++) {
    const len = a2[i].length;
    if (len < min2) min2 = len;
    if (len > max2) max2 = len;
  }
  // return the maximum length difference
  return Math.max(max1 - min2, max2 - min1);
} */
console.log(
  mxdiflg(
    [
      "hoqq",
      "bbllkw",
      "oox",
      "ejjuyyy",
      "plmiis",
      "xxxzgpsssa",
      "xxwwkktt",
      "znnnnfqknaz",
      "qqquuhii",
      "dvvvwz",
    ],
    ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
  )
); // => 13 (Math.max(1, 13) = 13));
