const order = words => {
  return words
    .split(" ")
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(" ");
};

// const order = words => {
//   return words
//     .split(" ")
//     .reduce((acc, el) => ((acc[el.match(/\d/) - 1] = el), acc), [])
//     .join(" ");
// };

// console.log(order("is2 Thi1s T4est 3a")); //, "Thi1s is2 3a T4est")
// console.log(order("4of Fo1r pe6ople g3ood th5e the2")); //, "Fo1r the2 g3ood 4of th5e pe6ople")
// console.log(order("")); //, "", "empty input should return empty string" ))
