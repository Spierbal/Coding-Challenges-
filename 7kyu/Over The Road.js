const overTheRoad = (address, n) => n * 2 - address + 1;

/* 
// Solution 1b: more readable version
function overTheRoad(address, n) {
  // Calculate the total number of houses on both sides of the road
  const totalHouses = n * 2;
  
  // Calculate the corresponding house number on the opposite side of the road
  const oppositeHouse = totalHouses - address + 1;

  return oppositeHouse;
} */

// console.log(overTheRoad(1, 1)); // 6
// console.log(overTheRoad(3, 3)); // 4
// console.log(overTheRoad(2, 3)); // 5
// console.log(overTheRoad(3, 5)); // 8
// console.log(overTheRoad(7, 11)); // 16
// console.log(overTheRoad(23633656673, 310027696726)); // 596421736780

/* 
n = 1

1| |2

n = 2

1| |4
3| |2

n = 3

1| |6
3| |4
5| |2

if, n = 3, address = 1 (3 * 2 - 1 + 1 = 6)
if, n = 3, address = 3 (3 * 2 - 3 + 1 = 4)
if, n = 3, address = 5 (3 * 2 - 5 + 1 = 2)

*/
