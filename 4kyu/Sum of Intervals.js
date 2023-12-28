function sumIntervals(intervals) {
  intervals.sort((a, b) => a[1] - b[1]); // sort by endpoints

  let result = 0,
    current = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const next = intervals[i];

    if (current[1] >= next[0]) {
      current[1] = Math.max(current[1], next[1]); // overlapping
    } else {
      // non-overlapping
      result += current[1] - current[0];
      current = next;
    }
  }
  // Add the length of last interval
  return result + current[1] - current[0];
}

/* 
// non-overlapping intervals
console.log(sumIntervals([[1, 5]])); // 4
console.log(
  sumIntervals([
    [1, 5],
    [6, 10],
  ])
); // 8  (5-1) + (10-6) = 4 + 4 = 8
 */

/* 
// overlapping intervals
console.log(
  sumIntervals([
    [1, 5],
    [1, 5],
  ])
); // 4 (5-1) = 4

console.log(
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ])
); // 7 (4-1) + (10-7) = 3 + 4 = 7
 */
