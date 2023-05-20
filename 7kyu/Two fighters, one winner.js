class Fighter {
  constructor(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
  }
}

// Solution 1: Ternary Operator
function declareWinner(fighter1, fighter2, firstAttacker) {
  const f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  const f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);

  return f1 < f2 ? fighter2.name : f2 < f1 ? fighter1.name : firstAttacker;
}

/* // Solution 2: (more readable)
function declareWinner(fighter1, fighter2, firstAttacker) {
  const f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  const f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);

  if (f1 < f2) return fighter2.name;
  if (f2 < f1) return fighter1.name;

  return firstAttacker;
}
 */

/* 
console.log(
  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")
); // "Lew" f1 = Math.ceil(10 / 4) = 3; f2 = Math.ceil(5 / 2) = 3; f1 = f2; return firstAttacker; "Lew"

console.log(
  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")
); // "Harry" f1 = Math.ceil(10 / 4) = 3; f2 = Math.ceil(5 / 2) = 3; f1 = f2; return firstAttacker; "Harry"

console.log(
  declareWinner(
    new Fighter("Harald", 20, 5),
    new Fighter("Harry", 5, 4),
    "Harry"
  )
); // "Harald" "Harry": f1 = Math.ceil(20 / 4) = 5; f2 = Math.ceil(5 / 5) = 1; f1 > f2; return fighter1.name; "Harald"

 */
