//**Use parseInt to parses a string and returns integer:

const stringToNumber = (str) => parseInt(str);

//**Use Number() function to convert string to number:

//const stringToNumber = (str) => Number(str);

//**Not my solution (mdn) & it uses regex!
// const stringToNumber = val =>{
//   if(/^[-+]?(\d+|Infinity)$/.test(val)){
//   return Number(val)
//   }else{
//     return NaN
//   }
// }
