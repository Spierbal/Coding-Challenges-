function duplicateCount(text) {
  return (
    [...text.toLowerCase()]
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}

// Solution 2:
/* const duplicateCount = text =>
  [...new Set([...text.toLowerCase()].filter((e, i) => text.indexOf(e) !== i))]
    .length; */

// Solution 3:
/* function duplicateCount(text) {
  const arr = [...text.toLowerCase()];

  let result = [];

  for (let i = 0; i <= arr.length; i++) {
    if (arr.slice(i + 1).includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return [...new Set(result)].length;
}
 */

// console.log(duplicateCount("abcde")) // --> 0
// console.log(duplicateCount("aabbbcd")) // ---> 2
// console.log(duplicateCount("indivisibility")) // --> 1
// console.log(duplicateCount("Indivisibility")) // --> 2
