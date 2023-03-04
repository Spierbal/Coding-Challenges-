const validateCode = code => /^[123]/g.test(code);

// Solution 1b:
// const validateCode = code => /^[1-3]/g.test(code);

// Solution 2:
// const validateCode = code => Array.isArray(code.toString().match(/^[123]/g));

// Solution 3:
//const validateCode = code => (String(code).match(/^[1-3]/) || []).length > 0;

// const validateCode = code => code.toString()[0].match(/^[123]/) !== null;

/* console.log(validateCode(123)); // true
console.log(validateCode(248)); // true
console.log(validateCode(8)); // false
console.log(validateCode(321)); // true
console.log(validateCode(9453)); // false */
