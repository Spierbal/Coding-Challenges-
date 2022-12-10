function removeSmallest(numbers) {
  const result = [...numbers];
  const minIndex = numbers.indexOf(Math.min(...numbers));
  result.splice(minIndex, 1);

  return result;
}

/* console.log(removeSmallest([1, 2, 3, 4, 5])); // --> [2, 3, 4, 5]
console.log(removeSmallest([2, 2, 1, 2, 1])); // --> [2, 2, 2, 1]
console.log(removeSmallest([])); // --> [];
 */
