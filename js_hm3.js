function pow(x, y) {
  var result = x;
  for (let i = 1; i < y; i++) {
    var result = result * x;
  };
  return result;
}

console.log(pow(5, 5));

