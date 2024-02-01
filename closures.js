// import { add, x as number } from "./exports.js";

/*
var a = 10;
// This is an example of closures
const add = function () {
  const b = 20;

  return function () {
    return a;
  };
};

const summer = add();

console.dir(summer);
*/
/*
// data leakage
var a;

function async1() {
  a = 10;

  const func = () => {
    console.log(a);
  };

  setTimeout(func, 3000);
}

async1();

a = 200;
*/

// Job Interview Question is That
// change here: var to let/ let to var
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   });
// }
// console.log(i);

// More Interesting Example:

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add4 = makeAdder(4);

// console.log(add4(5));

// Closure scope chain:

// global scope
const e = 10;

function sum(a) {
  return function (b) {
    return function (c) {
      // outer function scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

// console.log(sum(1)(1)(1)(1));

// We can also write without anonymous functions:

let u = 20;

function adder(v) {
  return function adder2(w) {
    return function adder3(x) {
      return function adder4(y) {
        return v + w + x + y + u;
      };
    };
  };
}

const adder2 = adder(1);
const adder3 = adder2(2);
const adder4 = adder3(4);
const result = adder4(4);

// console.log(result);

// closure

function outer() {
  const outerVar = "i am from outer";

  function inner() {
    console.log(outerVar);
  }
  return inner;
}

// const closure = outer();
// closure();

// Closures can capture variables in block scopes and module scopes as well.

// console.log(number);

// const result2 = add();

// console.log(result2);

// Creating closures in loops: A common mistake

function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (You must be over 17)" },
  ];

  for (let i = 0; i < helpText.length; i++) {
    let item = helpText[i];

    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}

setupHelp();
