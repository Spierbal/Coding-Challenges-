function checkAlive(health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}

// Short solution:
const checkAlive = health => health > 0;

// console.log(checkAlive(5)); // --> true;
// console.log(checkAlive(0)); // --> false;
