// Solution 1: reduce();
function alphabetWar(fight) {
  const power = { w: 4, p: 3, b: 2, s: 1, m: -4, q: -3, d: -2, z: -1 };

  const score = [...fight].reduce((acc, char) => acc + (power[char] || 0), 0);

  if (score > 0) return "Left side wins!";
  if (score < 0) return "Right side wins!";

  return "Let's fight again!";
}

// Solution 2: for loop
/* 
function alphabetWar(fight) {
  let power = { w: 4, p: 3, b: 2, s: 1, m: -4, q: -3, d: -2, z: -1 };

  let score = 0;

  for (let i = 0; i < fight.length; i++) {
    const char = fight[i];

    if (power[char]) score += power[char];
  }

  if (score < 0) return "Right side wins!";
  if (score > 0) return "Left side wins!";

  return "Let's fight again!";
} */

// console.log(alphabetWar("z")); // , "Right side wins!" );
// console.log(alphabetWar("zdqmwpbs")); // , "Let's fight again!" );
// console.log(alphabetWar("zzzzs")); //, "Right side wins!" );
// console.log(alphabetWar("wwwwww")); //, "Left side wins!" );
