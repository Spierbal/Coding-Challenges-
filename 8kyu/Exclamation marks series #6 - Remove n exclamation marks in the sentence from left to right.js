// function remove(s, n) {
//   let res = s;

//   for (let i = 0; i < n; i++) {
//     res = res.replace("!", "");
//   }
//   return res;
// }

// Solution 2: recursion
// const remove = (s, n) => (n ? remove(s.replace("!", ""), n - 1) : s);

// console.log(remove("Hi!", 1)); // "Hi"
// console.log(remove("Hi!!!", 1)); // "Hi!!"
// console.log(remove("!Hi!", 1)); //  "Hi!"
// console.log(remove("!!!Hi !!hi!!! !hi", 1)); // "!!Hi !!hi!!! !hi"
