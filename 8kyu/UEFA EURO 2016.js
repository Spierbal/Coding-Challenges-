// Solution 1: if statement
function uefaEuro2016(t, s) {
  if (s[0] > s[1]) return `At match ${t[0]} - ${t[1]}, ${t[0]} won!`;
  if (s[0] < s[1]) return `At match ${t[0]} - ${t[1]}, ${t[1]} won!`;

  return `At match ${t[0]} - ${t[1]}, teams played draw.`;
}

/* 
// Solution 2: ternary operator
function uefaEuro2016(teams, scores) {
  const result =
    scores[0] === scores[1]
      ? "teams played draw."
      : `${teams[scores[0] > scores[1] ? 0 : 1]} won!`;
  return `At match ${teams.join(" - ")}, ${result}`;
} */

/* 
// Solution 2: double ternary operator
function uefaEuro2016(teams, scores) {
  const result =
    scores[0] > scores[1]
      ? `${teams[0]} won`
      : scores[0] < scores[1]
      ? `${teams[1]} won`
      : "teams played draw";
  return `At match ${teams[0]} - ${teams[1]}, ${result}!`;
} */

// console.log(uefaEuro2016(["Germany", "Ukraine"], [2, 0])); //, "At match Germany - Ukraine, Germany won!"
// console.log(uefaEuro2016(["Belgium", "Italy"], [0, 2])); //, "At match Belgium - Italy, Italy won!"
// console.log(uefaEuro2016(["Portugal", "Iceland"], [1, 1])); //, "At match Portugal - Iceland, teams played draw."
