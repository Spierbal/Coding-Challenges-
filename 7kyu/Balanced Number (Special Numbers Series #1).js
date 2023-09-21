function balancedNum(number) {
  const numStr = String(number);
  const length = numStr.length;

  if (length <= 2) return "Balanced";

  const middle = Math.floor(length / 2) - (length % 2 === 0);

  const leftPart = numStr.slice(0, middle);
  const rightPart = numStr.slice(-middle);

  const sum = str => [...str].reduce((acc, num) => acc + Number(num), 0);

  return sum(leftPart) === sum(rightPart) ? "Balanced" : "Not Balanced";
}

/* 
// Solution 2: for loop
function balancedNum(number) {
  const numStr = String(number);
  const middle = Math.floor(numStr.length / 2) - (numStr.length % 2 === 0);
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < middle; i++) {
    leftSum += Number(numStr[i]);
    rightSum += Number(numStr[numStr.length - i - 1]);
  }
  return leftSum === rightSum ? "Balanced" : "Not Balanced";
} */

/* 
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
console.log(balancedNum(56239814)); // "Balanced" */
