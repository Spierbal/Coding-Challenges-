function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const consecutive = arr[i + 1];
    if (arr[i] + 1 !== consecutive) return consecutive;
  }
  return null;
}

// Solution 2: 21 steps
const firstNonConsecutive = arr =>
  [...arr.filter(n => !arr.includes(n - 1)), null][1];

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // --> 6

// 18 steps
const firstNonConsecutive = arr => {
  return arr
    .slice(1)
    .filter((a, i) => a != arr[i] + 1)
    .concat(null)[0];
};

// Great 13 steps
function firstNonConsecutive(arr) {
  const index = arr.findIndex((e, i) => arr[i + 1] - e !== 1) + 1;
  return index === -1 || index === arr.length ? null : arr[index];
}

// 18 steps
function firstNonConsecutive(arr) {
  return arr.reduce(
    (a, i, ind) =>
      ind === 0 || i === arr[ind - 1] + 1 || a !== null ? a : (a = i),
    null
  );
}

// 16 steps
const firstNonConsecutive = arr => {
  let num = arr.find((e, i, a) => (i > 0 ? e - 1 !== a[i - 1] : false));
  return num === 0 ? 0 : num || null;
};

// 19 steps
const firstNonConsecutive = a =>
  (a = a.filter((e, i) => e != a[0] + i)[0]) === undefined ? null : a;

// 19 steps
function firstNonConsecutive(arr) {
  const result = arr.filter((el, i) => el - 1 != arr[i - 1])[1];

  return result == undefined ? null : result;
}

// 19 steps
firstNonConsecutive = arr =>
  (arr = arr.filter((t, i) => t != arr[0] + i)[0]) == undefined ? null : arr;

firstNonConsecutive = a =>
  (a = a.filter((e, i) => e - a[i - 1] !== 1)[1]) === undefined ? null : a;
