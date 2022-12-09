const findOdd = arr =>
  arr.find(item => arr.filter(el => el === item).length % 2);

// Solution 2:
function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    if (A.filter(item => item === A[i]).length % 2 !== 0) {
      return A[i];
    }
  }
}

// Solution 2b: For Of Loop
function findOdd(A) {
  for (let int of A) {
    if (A.filter(el => el === int).length % 2) {
      return int;
    }
  }
}

// console.log(findOdd([1,1,2])); // --> return 2, because it occurs 1 time(odd)
// console.log(findOdd([0, 1, 0, 1, 0])); // --> returns 0, because it occurs 3 times(which is odd)
