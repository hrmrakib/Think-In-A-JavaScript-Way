var A = 440;

console.log(a);

var a;
a = 30;
// let
let y;

console.log(y);

// let y;

// sayHello();

// var sayHello = function () {
//   t = "hoisted";
//   console.log(t);
//   var t;
// };

/**
 * let vs var confused
 */
// use : var then let
var LANGUAGE = "Java";
var language = "JavaScript";

function getLanguage() {
  if (!language) {
    let language = LANGUAGE;
  }
  return language;
}

console.log(`I like ${getLanguage()}`);

// function hoisting

function hang() {
  lang = "NodeJS"; // this is not hoisted in global
  var lang; // this is hoisted in the scope
  console.log(lang);
}
hang();

// console.log(lang);

// function expression /arrow
// let func; // hoisting top

// func();
// // here set -> undefined
// (func = undefined),
//   (func = function () {
//     console.log("hello, programmer");
//   });

// const funcs = function () {
//   console.log("hi");
// };
