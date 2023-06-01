class SequenceSum1 {
  static showSequence(count) {
    if (count < 0) return `${count}<0`;
    if (count === 0) return "0=0";

    const series = [...Array(count + 1)].map((_, i) => i);
    const sum = series.reduce((a, b) => a + b);

    return `${series.join("+")} = ${sum}`;
  }
}

class SequenceSum2 {
  static showSequence(count) {
    let sum = 0;
    let series = "";

    if (count < 0) return `${count}<0`;
    if (count === 0) return "0=0";

    for (let i = 0; i <= count; i++) {
      sum += i;
      series += i;

      if (i < count) {
        series += "+";
      }
    }

    return `${series} = ${sum}`;
  }
}

console.log(SequenceSum.showSequence(6)); // "0+1+2+3+4+5+6 = 21"
