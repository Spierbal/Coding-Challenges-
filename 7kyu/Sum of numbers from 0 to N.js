// Solution 1: map, join, and gauss' formula
class SequenceSum {
  static showSequence(count) {
    if (count < 0) return `${count}<0`;
    if (count === 0) return "0=0";

    const sequence = [...Array(count + 1)].map((_, i) => i).join("+");
    const sum = (count * (count + 1)) / 2;

    return `${sequence} = ${sum}`;
  }
}

/* 
// Solution 2: for loop
class SequenceSum {
  static showSequence(count) {
    if (count < 0) return `${count}<0`;
    if (count === 0) return "0=0";

    let sum = 0;
    let sequence = "";

    for (let i = 0; i <= count; i++) {
      sum += i;
      sequence += i;

      // add + after each number
      if (i < count) sequence += "+";
    }
    return `${sequence} = ${sum}`;
  }
} */

// console.log(SequenceSum.showSequence(6)); // "0+1+2+3+4+5+6 = 21"
