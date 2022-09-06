function expressionMatter(a, b, c) {
  const add = a + b + c;
  const cross = a * b * c;
  return Math.max(add, cross, (a + b) * c, a * (b + c));
}
