const mango = (quantity, price) =>
  (quantity - Math.floor(quantity / 3)) * price;

const mango = (quantity, price) =>
  (quantity - Math.floor(quantity / 3)) * price;

console.log(mango(2, 3)); // 6
console.log(mango(3, 3)); // 6
console.log(mango(5, 3)); // 6
console.log(mango(9, 5)); // 30
