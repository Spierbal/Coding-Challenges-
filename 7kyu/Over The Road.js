const overTheRoad = (address, n) => n * 2 - address + 1;

/* 
// Solution 1b: more readable version
function overTheRoad(address, n) {
  const totalHouses = n * 2;
  const oppositeHouse = totalHouses - address + 1;
  return oppositeHouse;
} */

// console.log(overTheRoad(1, 3)); // 6
// console.log(overTheRoad(3, 3)); // 4
// console.log(overTheRoad(2, 3)); // 5
// console.log(overTheRoad(3, 5)); // 8
// console.log(overTheRoad(7, 11)); // 16
// console.log(overTheRoad(23633656673, 310027696726)); // 596421736780
