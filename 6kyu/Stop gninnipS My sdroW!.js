function spinWords(str) {
  return str
    .split(" ")
    .map(word => (word.length >= 5 ? word.split("").reverse().join("") : word))
    .join(" ");
}
//console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw")
// Note: words with 5 or more letter are only reversed
