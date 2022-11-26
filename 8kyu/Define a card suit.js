// Solution 1:
function defineSuit(card) {
  switch (card[card.length - 1]) {
    case "♣":
      return "clubs";
    case "♦":
      return "diamonds";
    case "♥":
      return "hearts";
    case "♠":
      return "spades";
  }
}

// Solution 1b:
/* function defineSuit(card) {
  if (card.slice(-1) === "♣") return "clubs";
  if (card.slice(-1) === "♦") return "diamonds";
  if (card.slice(-1) === "♥") return "hearts";
  if (card.slice(-1) === "♠") return "spades";
} */

// Solution 2:
/* function defineSuit(card) {
  if (card.includes("♣")) return "clubs";
  if (card.includes("♦")) return "diamonds";
  if (card.includes("♥")) return "hearts";
  if (card.includes("♠")) return "spades";
} */

// Solution 3:
/* function defineSuit(card) {
    const s = {
      '♣': 'clubs',
      '♠': 'spades',
      '♦': 'diamonds',
      '♥': 'hearts',
    };
    return s[card[card.length - 1]];
  }
   */

// console.log(defineSuit("Q♠")); // "spades"
// console.log(defineSuit("3♣")); // "clubs"
// console.log(defineSuit("9♦")); // "diamonds"
// console.log(defineSuit("J♥")); // "hearts"
