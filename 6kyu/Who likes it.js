function likes(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

// Solution 2:
/* function likes(names) {
  if (names.length === 0) return "no one likes this";
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;

  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}
 */
// Solution 3:
/* function likes(names) {
  return names.length === 0
    ? "no one likes this"
    : names.length === 1
    ? `${names[0]} likes this`
    : names.length === 2
    ? `${names[0]} and ${names[1]} like this`
    : names.length === 3
    ? `${names[0]}, ${names[1]} and ${names[2]} like this`
    : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
} */

// console.log(likes(["Jacob", "Alex"])); // --> 'Jacob and Alex like this'
// console.log(likes(["Alex", "Jacob", "Mark", "Max", "Jim", "Ana"])); // 'Alex, Jacob and 2 others like this';
