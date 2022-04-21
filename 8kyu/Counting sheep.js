function countSheeps(arrayOfSheep) {
  let count = 0;

  for (i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) {
      count++;
    }
  }
  return count;
}

// 2nd solution:
