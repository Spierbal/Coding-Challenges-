function divCon(x) {
  const num = x.filter(el => typeof el === "number").reduce((a, b) => a + b, 0);
  const str = x
    .filter(el => typeof el === "string")
    .reduce((a, b) => +a + +b, 0);

  return num - Number(str);
}

console.log(divCon([9, 3, "7", "3"])); // 2
console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7])); // 1
console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])); // 1
