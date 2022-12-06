const maskify = cc => cc.slice(-4).padStart(cc.length, "#");

// Solution 2:
// const maskify = cc => "#".repeat(Math.max(0, cc.length - 4)) + cc.slice(-4);

// Solution 2b:
// const maskify = cc =>
//   cc.length > 4 ? "#".repeat(cc.length - 4) + cc.slice(-4) : cc;

// solution 3:
// const maskify = cc => cc.slice(0, -4).replace(/[\w]/g, "#") + cc.slice(-4);

// Solution 4:
// const maskify = cc =>
//   cc.slice(0, -4).split("").fill("#").join("") + cc.slice(-4);

// console.log(maskify("4556364607935616")); // --> ############5616
