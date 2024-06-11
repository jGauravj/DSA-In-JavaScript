// Fibonacci Number
// [0, 1, 1, 2, 3, 5, 8, 13 .....n]
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

var fib = function (n) {
  const arr = [0, 1];

  for (let i = 2; i <= n; i++){
    if (n <= 1) return n;
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
}

fib(8);