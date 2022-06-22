class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce((a, b) => Math.min(a, b));
  }
}
// let obj = new SmallestIntegerFinder();
// console.log(obj.findSmallestInt([78,56,232,12,8])); --> 8
