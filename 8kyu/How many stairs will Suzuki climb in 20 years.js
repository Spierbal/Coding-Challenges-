function stairsIn20(s) {
  return (
    s
      .reduce((array, day) => array.concat(...day), [])
      .reduce((total, stairs) => total + stairs, 0) * 20
  );
}
