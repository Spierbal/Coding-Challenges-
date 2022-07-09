const enough = (cap, on, wait) => (cap > on + wait ? 0 : on + wait - cap);

// Solution2:
// function enough(cap, on, wait) {
//     if (cap > on + wait) return 0;
//     return on + wait - cap;
//   }

//console.log(enough(10, 5, 5)); // --> 0
//console.log(enough(100, 60, 50)); //--> 10
