function Fibonacci(num) {
  let i = 1,
    j = 0;
  for (n = 0; n < num; ++n) {
    [i, j] = [j, i + j];
  }
  return j;
}
for (j = 0; j < 79; ++j) {
  console.log(Fibonacci(j));
}
