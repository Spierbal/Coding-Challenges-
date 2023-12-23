// Solution 1:
function solution(list) {
  let result = "";

  for (let i = 0; i < list.length; i++) {
    let start = list[i];

    while (list[i + 1] - list[i] === 1) i++;

    let end = list[i];

    if (end - start >= 2) result += `${start}-${end},`;
    else if (end - start === 1) result += `${start},${end},`;
    else result += `${start},`;
  }

  return result.slice(0, -1);
}

/* 
// Solution 2: Modular Approach 
function solution1(list) {
  let result = "";

  for (let i = 0; i < list.length; i++) {
    let start = list[i];

    while (list[i + 1] - list[i] === 1) i++;

    let end = list[i];

    result += `${getRange(start, end)},`;
  }

  return result.slice(0, -1);
}

function getRange(start, end) {
  if (start === end) return `${start}`;
  else if (end - start === 1) return `${start},${end}`;
  else return `${start}-${end}`;
} */

/* 
console.log(
  solution([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ])
); // "-6,-3-1,3-5,7-11,14,15,17-20"
console.log(solution([-3, -2, -1, 2, 10, 15, 16, 18, 19, 20])); // "-6,-3-1,3-5,7-11,14,15,17-20"
 */
