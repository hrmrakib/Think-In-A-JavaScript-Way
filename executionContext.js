// 1. Execution Context - How JavaScript runs on our code

// Global Execution Context:

var globalVar = 10;

function globalFunction() {
  console.log(`Hello from global function`);
}

console.log(globalVar);
globalFunction();
console.log(window.globalVar);

// 2. Function Execution Context:

function outer() {
  var outerVar = 20;

  function inner() {
    var innerVar = 30;
    console.log(outerVar + innerVar);
  }

  inner();
}

let inner = outer();
inner();
