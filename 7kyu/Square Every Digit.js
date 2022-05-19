function squareDigits(num) {
  return Number(
    String(num)
      .split("")
      .map(x => x ** 2)
      .join("")
  );
}

// function squareDigits(num){
//     return +String(num).split("").map(x => x**2).join("")
//   }

// function squareDigits(num){
//     return +String(num).split("").map(x => Math.pow(x, 2)).join("")
//   }
