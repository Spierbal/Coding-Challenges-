const filterString = value => Number(value.replace(/\D/g, ""));

// console.log(filterString("123")); //, 123, `For the input "123"`
// console.log(filterString("a1b2c3")); //, 123, `For the input "a1b2c3"`
// console.log(filterString("aa1bb2cc3dd")); //, 123, `For the input "aa1bb2cc3dd"`
// console.log(filterString("6092z")); //, 123, `For the input "aa1bb2cc3dd"`
