const otherAngle = (a, b) => 180 - (a + b);

//console.log(otherAngle(60, 30)); // --> 90;

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter() {
    return 2 * Math.PI * this.radius;
  },
};

console.log(shape.diameter());
console.log(shape.perimeter());
