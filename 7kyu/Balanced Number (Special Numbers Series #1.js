function balancedNum(number) {
  let numStr = String(number);
  let length = numStr.length;

  if (length <= 2) return "Balanced";

  const middle = Math.floor(length / 2) - (length % 2 === 0 ? 1 : 0);

  let left = numStr.slice(0, middle);
  let right = numStr.slice(-middle);

  let leftSum = left.split("").reduce((acc, curr) => acc + Number(curr), 0);
  let rightSum = right.split("").reduce((acc, curr) => acc + Number(curr), 0);

  return leftSum === rightSum ? "Balanced" : "Not Balanced";
}

// Check for balanced number
console.log(balancedNum(7)); // "Balanced"
console.log(balancedNum(959)); // "Balanced"
console.log(balancedNum(13)); // "Balanced"
console.log(balancedNum(432)); // "Not Balanced"
console.log(balancedNum(424)); // "Balanced
// Check for Larger number
console.log(balancedNum(1024)); // "Not Balanced"
console.log(balancedNum(66545)); // "Not Balanced"
console.log(balancedNum(295591)); // "Not Balanced"
console.log(balancedNum(1230987)); // "Not Balanced"
console.log(balancedNum(56239814)); // "Balanced"
