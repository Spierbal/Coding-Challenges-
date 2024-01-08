function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin) sharkSpeed /= 2;

  const pontoonTime = pontoonDistance / youSpeed;
  const sharkTime = sharkDistance / sharkSpeed;

  return pontoonTime < sharkTime ? "Alive!" : "Shark Bait!";
}

// console.log(shark(12, 50, 4, 8, true)); // "Alive!"
// console.log(shark(7, 55, 4, 16, true)); // "Alive!"
// console.log(shark(24, 0, 4, 8, true)); // "Shark Bait!"
