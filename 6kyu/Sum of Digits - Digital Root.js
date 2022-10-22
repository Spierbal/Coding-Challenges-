function digitalRoot(n) {
  if (String(n).length === 1) return n;

  return digitalRoot([...String(n)].reduce((a, b) => a + Number(b), 0));
}

// Solution 2b:
/* function digitalRoot(n) {
    if (n < 10) return n;
    
    return digitalRoot(Array.from(String(n)).reduce((a, b) => a + +b, 0));
}
*/

// Solution 2c
/* const digital_root = n =>
  `${n}`.length < 10
    ? n
    : digital_root(`${n}`.split("").reduce((a, b) => a + +b, 0));
 */

// Solution 3:
// const digitalRoot = n => ((n - 1) % 9) + 1;

// console.log(digitalRoot(456)); //6 --> 4 + 5 + 6 = 15 --> 1 + 5 = 6

//[...Array(0,0,0,0]
//[0,0,0,0

let arr = Array.from(Array(5), (_, i) => 2 + i);
console.log(arr); // [2, 3, 4, 5, 6]
