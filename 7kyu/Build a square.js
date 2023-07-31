// const generateShape = n => [...Array(n)].map(() => "+".repeat(n)).join("\n");

/* 
// Solution 1b: 
const generateShape = n =>
  Array.from({ length: n }, () => "+".repeat(n)).join("\n");
 */

/* 
// Solution 1c:
const generateShape = n => Array(n).fill("+".repeat(n)).join("\n");  
*/

/* 
// Solution 2: for loop
const generateShape = n => {
  let str = "";

  for (let i = 0; i < n; i++) {
    str += "+".repeat(n); // Repeat "+" n times and add to str
    if (i !== n - 1) str += "\n"; // Add new line if not the last line
  }
  return str;
}; */

// console.log(generateShape(8));
/*  
"++++++++
++++++++
++++++++
++++++++
++++++++
++++++++
++++++++
++++++++" */
