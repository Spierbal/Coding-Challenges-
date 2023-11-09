function timeCorrect(timestring) {
  if (timestring === null || timestring === "") return timestring;

  const times = timestring.split(":");
  if (times.length !== 3) return null;

  let [hours, minutes, seconds] = times.map(Number);
  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) return null;

  if (hours < 0 || hours > 23) hours = 0;
  if (minutes < 0 || minutes > 59) minutes = 0;
  if (seconds < 0 || seconds > 59) seconds = 0;

  const adjustedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return adjustedTime;
}

// console.log(timeCorrect(null)); // null
// console.log(timeCorrect("")); // ""
// console.log(timeCorrect("001122")); // null
// console.log(timeCorrect("00;11;22")); // null
// console.log(timeCorrect("0a:1c:22")); // null
// console.log(timeCorrect("09:10:01")); // "09:10:01"
// console.log(timeCorrect("11:70:10")); // "12:10:10"
// console.log(timeCorrect("19:99:09")); // "20:39:09"
// console.log(timeCorrect("19:99:99")); // "20:40:39"
// console.log(timeCorrect("24:01:01")); // "00:01:01"
// console.log(timeCorrect("52:01:01")); // "04:01:01"
