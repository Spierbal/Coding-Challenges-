const websites = Array(1000).fill("codewars");

// Solution 2:
//const websites =  Array.from({length: 1000}, () => ("codewars"))

// Solution 3:
// const websites = [...new Array(1000)].map(() => "codewars")

// Solution 4:
/* const websites = [];
while (websites.length < 1000) websites.push("codewars"); */

// Solution 5:
/* const websites = [];
for (let i = 0; i < 1000; i++) websites.push("codewars"); */

// console.log(websites); // "codewars" 1000 times
