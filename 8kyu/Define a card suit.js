function defineSuit(card) {
  if (card[1] === "♣") return "clubs";
  if (card[1] === "♦") return "diamonds";
  if (card[1] === "♥") return "hearts";
  if (card[1] === "♠") return "spades";
}

// Solution 1b:
/* function defineSuit(card) {
  switch (card[1]) {
    case "♣":
      return "clubs";
    case "♦":
      return "diamonds";
    case "♥":
      return "hearts";
    case "♠":
      return "spades";
  }
} */

// 2
// function defineSuit(card) {
//   if (card.includes("♣")) return "clubs";
//   if (card.includes("♦")) return "diamonds";
//   if (card.includes("J♥")) return "hearts";
//   if (card.includes("Q♠")) return "spades";
// }

// console.log(defineSuit("Q♠")); // "spades"
// console.log(defineSuit("3♣")); // "clubs"
// console.log(defineSuit("9♦")); // "diamonds"
// console.log(defineSuit("J♥")); // "hearts"
