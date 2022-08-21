function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const consecutive = arr[i + 1];
    if (arr[i] + 1 !== consecutive) return consecutive;
  }
  return null;
}
