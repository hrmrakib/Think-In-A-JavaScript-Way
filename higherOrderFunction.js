// Higher Order Function

// function my() {
//   return function () {
//     console.log(`I am inside a function`);
//   };
// }
// my()();

///////////////////////////////
let arr = [1, 2, 3, 4];

// example 1- Without Higher Order Function
// function double(arr) {
//   let x = [];
//   for (let i = 0; i < arr.length; i++) {
//     x.push(arr[i] * 2);
//   }
//   return x;
// }
// console.log(double(arr));

// example 1- Higher Order Function
// let duble = arr.map((val) => val * 2);
// console.log(duble);

///////////////////////////////////
let mathNumber = [
  {
    name: "Maruf",
    number: 87,
  },
  {
    name: "Faysal",
    number: 69,
  },
  {
    name: "Siyem",
    number: 91,
  },
  {
    name: "Nayem",
    number: 79,
  },
];

// example 2- Without Higher Order Function
// let moreThanEighty = [];
// for (let i = 0; i < mathNumber.length; i++) {
//   if (mathNumber[i].number >= 80) {
//     moreThanEighty.push(mathNumber[i].name);
//   }
// }
// console.log(moreThanEighty);

// example 2- With Higher Order Function
// let filtered = mathNumber.filter((number) => number.number >= 80);
// console.log(filtered);

////////////////////////////////////

// example 3 array.map() built in by us
const languages = ["JavaScript", "Python", "PHP", "C++"];

function myMap(arr, fn) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]));
  }
  return newArray;
}

const myArr = myMap(languages, function (language) {
  return language.length;
});

console.log(myArr);
