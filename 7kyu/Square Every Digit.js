function squareDigits(num) {
  return Number(
    String(num)
      .split("")
      .map(x => x ** 2)
      .join("")
  );
}

// console.log(squareDigits(3212)) // => 9414
// console.log(squareDigits(2112)) // => 4114

// function squareDigits(num){
//     return +String(num).split("").map(x => x**2).join("")
//   }

// function squareDigits(num){
//     return +String(num).split("").map(x => Math.pow(x, 2)).join("")
//   }
