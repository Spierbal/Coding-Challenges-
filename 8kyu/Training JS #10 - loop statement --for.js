function pickIt(arr) {
  let odd = [],
    even = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
  }
  return [odd, even];
}

// console.log(pickIt([1, 2, 3])); // [[1, 3], [2]];
// console.log(pickIt([10, 20, 5])); // [[5], [10, 20]];
