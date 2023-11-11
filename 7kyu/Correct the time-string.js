// Solution 1: Manual calculation
function timeCorrect1(timestring) {
  if (!timestring) return timestring;

  const [hrs, mins, secs] = timestring.split(":").map(Number);

  let hours = Number(hrs);
  let minutes = Number(mins);
  let seconds = Number(secs);

  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) return null;

  minutes += Math.floor(seconds / 60);
  seconds %= 60;

  hours += Math.floor(minutes / 60);
  minutes %= 60;

  hours %= 24;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}

/* 
// Solution 2: Date object with UTC
function timeCorrect(timestring) {
  if (!timestring) return timestring;

  const [hours, minutes, seconds] = timestring.split(":").map(Number);

  if ([hours, minutes, seconds].some(isNaN)) return null;

  const date = new Date(0);
  date.setUTCHours(hours, minutes, seconds);

  const adjustedHours = date.getUTCHours();
  const adjustedMinutes = date.getUTCMinutes();
  const adjustedSeconds = date.getUTCSeconds();

  return `${String(adjustedHours).padStart(2, "0")}:${String(
    adjustedMinutes
  ).padStart(2, "0")}:${String(adjustedSeconds).padStart(2, "0")}`;
}
 */

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
