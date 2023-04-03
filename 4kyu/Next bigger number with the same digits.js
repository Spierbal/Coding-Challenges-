function nextBigger(n) {
  const sortedNum = n => [...String(n)].sort((a, b) => b - a);
  const max = Number(sortedNum(n).join(""));
  for (let i = n + 1; i <= max; i++) {
    if (max === Number(sortedNum(i).join(""))) return i;
  }
  return -1;
}

console.log(nextBigger(12)); // 531
console.log(nextBigger(513)); // 531
console.log(nextBigger(2017)); // 2071
console.log(nextBigger(414)); // 441
console.log(nextBigger(144)); //414
