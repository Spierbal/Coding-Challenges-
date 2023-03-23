function divCon(x, strSum = 0, intSum = 0) {
  x.map(e => (typeof e === "string" ? (strSum += Number(e)) : (intSum += e)));

  return intSum - strSum;
}

// console.log(divCon([9, 3, "7", "3"])); // 2
// console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7])); // 14
// console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])); // 13
