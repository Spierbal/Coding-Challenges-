function pigIt(str) {
  return str
    .split(" ")
    .map(w => (w.match(/\w/) ? `${w.slice(1)}${w.slice(0, 1)}ay` : w))
    .join(" ");
}
//Solution 2:
// const pigIt = str => str.replace(/(\w)(\w*)/g, "$2$1ay");

// console.log(pigIt("Pig latin is cool")); // --> "igPay atinlay siay oolcay"
