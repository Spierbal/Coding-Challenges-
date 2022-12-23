const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin);

console.log(validatePIN("1")); // --> false
console.log(validatePIN("12")); // --> false
console.log(validatePIN("123")); // --> false
console.log(validatePIN("12345")); // --> false
console.log(validatePIN("1234")); // --> true
console.log(validatePIN("123456")); // --> true
