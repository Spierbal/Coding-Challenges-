function persistence(num) {
  let counter = 0;

  let res = String(num);

  while (res.length > 1) {
    counter++;
    res = res.split("").reduce((a, b) => String(a * b));
  }
  return counter;
}

// Solution 1b:
// function persistence(num) {
//   let counter = 0;

//   while (num > 9) {
//     counter++;
//     num = [...String(num)].reduce((a, b) => a * b);
//   }

//   return counter;
// }

// // solution 2: recursion
// function persistence(num, cnt = 0) {
// //   let res = [...String(num)];
//   return num < 9
//     ? cnt
//     : persistence(
//         [...String(num)].reduce((a, b) => a * b),
//     ++cnt
//       );
// }

// Solution 3
// function persistence(num) {
//   for (i = 0; num > 9; i++) {
//     num = num = [...String(num)].reduce((a, b) => a * b);
//   }
//   return i;
// }

// console.log(persistence(39)); // 3
// console.log(persistence(4)); // 0
// console.log(persistence(25)); // 2
// console.log(persistence(999)); // 4
