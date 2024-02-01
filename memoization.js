const add = (a) => a + 10;

// Two concept use memoization (Higher-Order Function, Closure)
function memo(func) {
  let cache = {};

  return function (x) {
    console.log(cache);
    if (cache[x]) {
      console.log("result from cache");
      return cache[x];
    } else {
      console.log("new result");
      const result = func(x);
      cache[x] = result;
      return result;
    }
  };
}

const calculate = memo(add);

console.log(calculate(3));
console.log(calculate(2));
console.log(calculate(3));
/////////////////////////////////
// another way
const add2 = (...a) => {
  return a.reduce((acc, current) => acc + current);
};

// Two concept use memoization (Higher-Order Function, Closure)
function memo2(func) {
  let cache = {};

  return function (...x) {
    console.log(cache);
    const key = JSON.stringify(x);
    console.log(key);

    if (cache[key]) {
      return cache[key];
    } else {
      const result = func(...x);
      cache[key] = result;
      return result;
    }
  };
}

const calculate2 = memo2(add2);

console.log(calculate2(3, 6));
console.log(calculate2(2, 8));
console.log(calculate2(3, 9));
