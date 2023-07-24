const sortGiftCode = code => [...code].sort().join("");

/* 
// Solution 1b:
const sortGiftCode = code => code.split("").sort().join("");
 */

// console.log(sortGiftCode("abcdef")); //, 'abcdef');
// console.log(sortGiftCode("pqksuvy")); //, 'kpqsuvy');
// console.log(sortGiftCode("zyxwvutsrqponmlkjihgfedcba")); //, 'abcdefghijklmnopqrstuvwxyz');
