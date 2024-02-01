// Scopes refers to the area where an item is visiable and accessible to other data.
// Several types of scopes are:

// 1. Global Scope
var global = "I am global scope variable";

function func() {
  console.log(global);
}
// func();
// console.log(global);

// 2. Function Scope

function funcScope() {
  var funcScopeVar = "I am function scope variable";
  console.log(funcScopeVar);
}
// funcScope();
// console.log(funcScopeVar);

// 3. Block Scope
if (true) {
  let blockScope = "I am block scope variable";
  //   console.log(blockScope);
}
// console.log(blockScope);

// 4. Lexical Scope (Closures)

function outer() {
  let privateData = "I am private variable";
  function inner() {
    console.log(privateData);
  }
  return inner;
}
let outerFunc = outer();
outerFunc();

// 5. Module Scope (ES6 and Beyond)
// import { moduleVar } from "./moduleScope";

// console.log(moduleVar);
