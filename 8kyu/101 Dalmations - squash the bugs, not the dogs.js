function howManyDalmatians(n) {
  let dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!",
  ];

  let respond =
    n <= 10 ? dogs[0] : n <= 50 ? dogs[1] : n === 101 ? dogs[3] : dogs[2];

  return respond;
}

// console.log(howManyDalmatians(8)); // --> "Hardly any";
// console.log(howManyDalmatians(26)); // --> "More than a handful!"
// console.log(howManyDalmatians(80)); // --> "Woah that's a lot of dogs!";
// console.log(howManyDalmatians(101)); // --> "101 DALMATIANS!!!";
