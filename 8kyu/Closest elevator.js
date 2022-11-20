const elevator = (left, right, call) =>
  Math.abs(call - left) < Math.abs(call - right) ? "left" : "right";

console.log(elevator(0, 1, 0)); // 'left'
console.log(elevator(0, 1, 1)); // 'right'
console.log(elevator(0, 1, 2)); // 'right'
console.log(elevator(0, 0, 0)); // 'right'
console.log(elevator(0, 2, 1)); // 'right'
console.log(elevator(0, 0, 1)); // 'right'
console.log(elevator(2, 1, 0)); // 'right'
console.log(elevator(1, 2, 0)); // 'left'
console.log(elevator(0, 2, 1)); // 'right'
console.log(elevator(2, 0, 1)); // 'right'
