const spEng = sentence => sentence.toLowerCase().includes("english");

// Solution 2:
// const spEng = sentence => /english/i.test(sentence);

// Solution 3:
// const spEng = sentence => sentence.toLowerCase().indexOf("english") !== -1;

// console.log(spEng("english")); // true
// console.log(spEng("egnlish")); // false
