function sameCase(a, b) {
  if (
    a.toLowerCase() === a.toUpperCase() ||
    b.toLowerCase() === b.toUpperCase()
  )
    return -1;
  if (
    (a === a.toLowerCase() && b === b.toLowerCase()) ||
    (a === a.toUpperCase() && b === b.toUpperCase())
  )
    return 1;
  else return 0;
}

/* console.log(sameCase("C", "B")); // 1
console.log(sameCase("b", "a")); // 1
console.log(sameCase("d", "d")); // 1
console.log(sameCase("A", "s")); // 0
console.log(sameCase("c", "B")); // 0
console.log(sameCase("b", "Z")); // 0
console.log(sameCase("\t", "Z")); // -1
console.log(sameCase("H", ":")); // -1
 */
