const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  mpg * fuelLeft >= distanceToPump;

// solution 2:
// const zeroFuelw = (distanceToPump, mpg, fuelLeft) =>
//   distanceToPump / mpg <= fuelLeft;

// console.log(zeroFuel(50, 25, 2)) --> true
// console.log(zeroFuel(100, 50, 1)) --> false
