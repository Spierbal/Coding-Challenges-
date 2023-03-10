const uniqueInOrder = iterable =>
  [...iterable].filter((e, i, arr) => e !== arr[i + 1]);

const uniqueInOrder = iterable =>
  Array.from(iterable).filter((e, i, arr) => e !== arr[i + 1]);

console.log(uniqueInOrder("AAAABBBCCDAABBB")); //, ['A','B','C','D','A','B'])
console.log(uniqueInOrder("ABBCcAD")); //, ['A','B','C','D','A','B'])
console.log(uniqueInOrder([1, 2, 2, 3, 3])); //, [1,2,3])
