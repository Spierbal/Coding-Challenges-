// const nearestSq = n => Math.round(n ** 0.5) ** 2;

//Solution 1b:
const nearestSq = n => Math.round(Math.sqrt(n)) ** 2;

// Solution 1c:
//const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);

console.log(nearestSq(1)); //  1 "nearestSq(1) = 1"
console.log(nearestSq(2)); //  1 "nearestSq(1) = 1"
console.log(nearestSq(10)); //  9 "nearestSq(1) = 9"
console.log(nearestSq(111)); //  121 "nearestSq(1) = 121"
console.log(nearestSq(9999)); //  10000 "nearestSq(1) = 10000
