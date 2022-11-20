const spEng = sentence => sentence.toLowerCase().includes("english");

// Solution 2:
// const spEng = sentence => /english/i.test(sentence);

// console.log(spEng("english")); // true
// console.log(spEng("egnlish")); // false
