// Symbol in JS

// let s1 = Symbol.for("z");
// let s2 = Symbol.for("z");

// console.log(s1 == s2);

// // Big use case of Symbol
// let c = Symbol.for("Country");

// let person = {
//   name: "Nayem",
//   [c]: "Bangladesh",
// };

// console.log(person);

// Why do you need Symbol?
// Three reasons come Symbol =>

// 0ne - Symbols are invisible

let obj = {};

obj.name = "JavaScript";
obj.estd = "1995";

obj[Symbol("founder")] = "Brendan Eich";

for (let key in obj) {
  console.log(key);
}

console.log(Object.keys(obj));

// two
let includes = Symbol("this is my own array includes");

Array.prototype[includes] = () => {
  console.log("This is my array includes function");
};

let arr = [1, 2, 3];

arr[includes](2);
