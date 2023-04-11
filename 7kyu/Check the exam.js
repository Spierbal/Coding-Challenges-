const checkExam = (correctAnswers, studentAnswers) => {
  const score = studentAnswers.reduce((total, answer, i) => {
    if (!answer) return total;
    if (answer === correctAnswers[i]) return total + 4;
    if (answer !== correctAnswers[i]) return total - 1;
  }, 0);

  return score < 0 ? 0 : score;
};

// Solution 2:
/* function checkExam(correctAnswers, studentAnswers) {
  let score = 0;
  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] === studentAnswers[i]) {
      score += 4;
    } else if (studentAnswers[i] === "") {
      score += 0;
    } else {
      score -= 1;
    }
  }
  return score < 0 ? 0 : score;
} */

// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // 6
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); // 7
// console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // 16
// console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); // 0
