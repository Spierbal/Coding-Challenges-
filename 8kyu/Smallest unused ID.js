function nextId(ids) {
  for (let i = 0; i <= ids.length; i++) {
    if (!ids.includes(i)) return i;
  }
}

// Solution 1b:
/* function nextId(ids) {
  for (let i = 0; i <= ids.length; i++) {
    if (ids.indexOf(i) == -1) return i;
  }
} */

// Solution 1c:
/* function nextId(ids) {
  let id = 0;
  while (ids.includes(id)) id++;
  return id;
} */

// Solution 2:
/* function nextId(ids) {
  let usedId = new Set(ids);

  for (let i = 0; i <= ids.length; i++) {
    if (!usedId.has(i)) return i;
  }
} */

// console.log(nextId([0, 1, 2, 3, 5]));
