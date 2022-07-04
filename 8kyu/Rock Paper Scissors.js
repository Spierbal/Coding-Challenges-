const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  if (p1 === "rock" && p2 === "scissors") return "Player 1 won!";
  if (p1 === "scissors" && p2 === "paper") return "Player 1 won!";
  if (p1 === "paper" && p2 === "rock") return "Player 1 won!";
  return "Player 2 won!";
};

// Solution 2:
// const rps = (p1, p2) => {
//   switch (p1 + p2) {
//     case "rockscissors":
//     case "scissorspaper":
//     case "paperrock":
//       return "Player 1 won!";
//     case "scissorsrock":
//     case "paperscissors":
//     case "rockpaper":
//       return "Player 2 won!";
//     case "paperpaper":
//     case "scissorsscissors":
//     case "rockrock":
//       return "Draw!";
//   }
// };

//console.log(rps("rock", "scissors")) // ---> Player 1 won!
//console.log(rps("paper", "scissors")) // --> Player 2 won!
// console.log(rps("rock", "rock")) // ---> draw!
