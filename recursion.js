function sum(n) {
  if (n === 0) {
    return 0;
  } else {
    return sum(n - 1) + n;
  }
}

// console.log(sum(8932));

// 8931 maximum number then warning: Maximum call stack size exceeded

// sum(3)
// => sum(2) + 3
// => sum(1) + 2
// => sum(0) + 1
// => 0 + 1 + 2 + 3

// Solved it

// 1 + 2 + 3 + 4 + ..... + n
// (n(n+1)) / 2
var n = 100;

console.log((n * (n + 1)) / 2);
