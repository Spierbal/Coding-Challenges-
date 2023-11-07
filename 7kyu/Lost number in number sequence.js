// Solution 1: Gauss' Formula & reduce
const findDeletedNumber = (arr, mixArr) =>
  (arr.length * (arr.length + 1)) / 2 - mixArr.reduce((a, b) => a + b, 0);

// Solution 2: reduce
/* const findDeletedNumber = (arr, mixArr) =>
  arr.reduce((a, b) => a + b) - mixArr.reduce((a, b) => a + b); */

// Solution 3: for loop
/*  
function findDeletedNumber(arr, mixArr) {
  let originalSum = 0;
  let mixedSum = 0;

  for (let i = 0; i < arr.length; i++) {
    originalSum += arr[i];
  }
  for (let i = 0; i < mixArr.length; i++) {
    mixedSum += mixArr[i];
  }
  return originalSum - mixedSum;
} */

/* 
// Solution 4: Hash Map
const findDeletedNumber = (arr, mixArr) => {
  const numMap = {};

  for (const num of mixArr) {
    numMap[num] = true;
  }

  for (const num of arr) {
    if (!numMap[num]) {
      return num;
    }
  }

  return 0;
}; */

// console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5])); // 2, 'Deletion'
// console.log(findDeletedNumber([1, 2, 3, 4, 5, 6, 7], [3, 1, 5, 6, 2, 4])); // 7, 'Deletion'
// console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5, 2])); // 0, ' No Deletion'
