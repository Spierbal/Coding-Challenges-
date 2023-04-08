function nextBigger(n) {
  const arr = [...String(n)].map(Number);

  let i = arr.length - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) i--;

  if (i < 0) return -1;

  let j = arr.length - 1;
  while (j > i && arr[j] <= arr[i]) j--;

  [arr[i], arr[j]] = [arr[j], arr[i]];
  let res = [...arr]
    .slice(0, i + 1)
    .concat(arr.slice(i + 1).reverse())
    .join("");

  return Number(res);
}

// console.log(nextBigger(12)); // 21
// console.log(nextBigger(513)); // 531
// console.log(nextBigger(2017)); // 2071
// console.log(nextBigger(414)); // 441
// console.log(nextBigger(144)); //414
// console.log(nextBigger(298765422000)); //400022256789
