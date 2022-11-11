const countBits = n => n.toString(2).split``.filter(x => x === "1").length;

// Solution 2:
// const countBits = n => n.toString(2).split``.reduce((a, b) => a + Number(b), 0);

// Solution 2b:
/* const countBits = n =>
  n.toString(2).split``.reduce((a, b) => (b === "1" ? ++a : a), 0); */

// Solution 3:
// const countBits = n => n.toString(2).replace(/[0]/g, "").length;

// Solution 4:
// const countBits = n => n.toString(2).split(0).join``.length

// console.log(countBits(1234)); // --> 2
