function factorial(i, total) {
  if (!total) {
    total = 1;
  }
  if (i === 1) {
    return total;
  }
  return factorial(i - 1, i * total);
}

console.log(factorial(3));
