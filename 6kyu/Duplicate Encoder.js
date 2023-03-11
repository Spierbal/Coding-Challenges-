const duplicateEncode = word => {
  return [...word.toLowerCase()]
    .map((e, _, arr) => {
      return arr.indexOf(e) !== arr.lastIndexOf(e) ? ")" : "(";
    })
    .join("");
};

// const duplicateEncode = word => {
//   return word
//     .toLowerCase()
//     .replace(/./g, e => (word.indexOf(e) == word.lastIndexOf(e) ? "(" : ")"));
// };

// console.log(duplicateEncode("din")); // "(((");
// console.log(duplicateEncode("recede")); // "()()()");
// console.log(duplicateEncode("Success")); // ")())())", "should ignore case");
// console.log(duplicateEncode("(( @")); // "))((");
