const combat = (health, damage) => (health < damage ? 0 : health - damage);

// Solution 2:
// const combat = (health, damage) => Math.max(health - damage, 0);

// console.log(combat(100, 5)); // 95
// console.log(combat(10, 30)); // 0; "Health cannot go below 0"
