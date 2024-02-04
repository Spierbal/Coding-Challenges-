// Solution 1: ternary operator
function uefaEuro2016(teams, scores) {
  const result =
    scores[0] === scores[1]
      ? "teams played draw."
      : `${teams[scores[0] > scores[1] ? 0 : 1]} won!`;
  return `At match ${teams[0]} - ${teams[1]}, ${result}`;
}

/* 
// Solution 2: destructuring assignment
function uefaEuro2016(teams, scores) {
  const [team1, team2] = teams;
  const [score1, score2] = scores;
  const winner = score1 > score2 ? team1 : team2;

  return `At match ${team1} - ${team2}, ${
    score1 === score2 ? "teams played draw." : `${winner} won!`
  }`;
} */

/* 
// Solution 3: nested ternary operators
function uefaEuro2016(teams, scores) {
  const result =
    scores[0] > scores[1]
      ? `${teams[0]} won`
      : scores[0] < scores[1]
      ? `${teams[1]} won`
      : "teams played draw";
  return `At match ${teams[0]} - ${teams[1]}, ${result}!`;
}
 */

// console.log(uefaEuro2016(["Germany", "Ukraine"], [2, 0])); //, "At match Germany - Ukraine, Germany won!"
// console.log(uefaEuro2016(["Belgium", "Italy"], [0, 2])); //, "At match Belgium - Italy, Italy won!"
// console.log(uefaEuro2016(["Portugal", "Iceland"], [1, 1])); //, "At match Portugal - Iceland, teams played draw."
