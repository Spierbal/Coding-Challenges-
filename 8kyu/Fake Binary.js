const fakeBin = x =>
  x
    .split("")
    .map(n => (Number(n) >= 5 ? "1" : "0"))
    .join("");
