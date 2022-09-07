const expressionMatter = (a, b, c) =
  Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));


// function expressionMatter(a, b, c) {
//   const values = [a + b + c, a * b * c, a * (b + c), (a + b) * c];
//   return Math.max(...values);
// }


// function expressionMatter(a, b, c) {
//   const values1 = a + b + c;
//   const values2 = a * b * c;
//   const values3 = a * (b + c);
//   const values4 = (a + b) * c;

//   return Math.max(values1, values2, values3, values4);
// }
