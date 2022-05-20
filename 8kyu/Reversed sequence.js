const reverseSeq = n => {
  let reverse = [];
  for (let i = n; i > 0; i--) {
    reverse.push(i);
  }
  return reverse;
};

// console.log(reverseSeq(n=5))
