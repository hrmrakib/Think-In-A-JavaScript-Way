let arr = ["Liked", "Loved", "Hated"];

let iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// for (let opt of arr) {
//   console.log(opt);
// }

// let lang = "JavaScript";
// for (let l of lang) {
//   console.log(l);
// }

// Array, String are iterable
// Object, Number are not iterable

//////////////////////////////////
let obj = { a: "Liked", b: "Loved", c: "Hated" };

for (let opt in obj) {
  console.log(opt);
}

////////////////////////////////
// Change Global Behavior

String.prototype[Symbol.iterator] = function () {
  let count = this.length;
  return {
    next() {
      if (count > 0) {
        count--;
        return { done: false, value: "Me" };
      }
      return { done: true };
    },
  };
};

console.log(..."hi");

/////////////////////////////////////

// Own / Custom Iterator
function range(start, end, step) {
  let current = start;
  return {
    [Symbol.iterator]: function () {
      return {
        next() {
          let result;
          if (current <= end) {
            result = {
              done: false,
              value: current,
            };
            current += step;
            return result;
          }
          return {
            done: true,
          };
        },
      };
    },
  };
}

console.log([...range(2, 100, 10)]);
