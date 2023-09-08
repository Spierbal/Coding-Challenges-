function inviteMoreWomen(L) {
  return L.map(e => e);
}
console.log(inviteMoreWomen([1, -1, 1])); //true

console.log(inviteMoreWomen([1, 1, 1])); //true

console.log(inviteMoreWomen([-1, -1, -1])); //false

console.log(inviteMoreWomen([1, -1])); //false
