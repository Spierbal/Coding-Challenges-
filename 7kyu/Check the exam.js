function checkExam(array1, array2) {
  const score = responses.reduce((total, response, index) => {
    if (!response) return total;
    if (response === answers[index]) return total + 4;
    if (response !== answers[index]) return total - 1;

    return total;
  }, 0);

  return score > 0 ? score : 0;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); // 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // 16
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); // 0
