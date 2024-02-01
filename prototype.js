// let personMethods = {
//   eat() {
//     console.log("Person is eating");
//   },
//   sleep() {
//     console.log("Person is sleeping");
//   },
//   play() {
//     console.log("Person is playing");
//   },
// };

// function Person(name, age) {
//   let person = Object.create(Person.prototype);
//   //   console.log(person);

//   person.name = name;
//   person.age = age;

//   return person;
// }

function PersonWithNew(name, age) {
  //   let this = Object.create(PersonWithNew.prototype);

  this.name = name;
  this.age = age;

  //   return this;
}

// Person.prototype = {
//   eat() {
//     console.log("Person is eating");
//   },
//   sleep() {
//     console.log("Person is sleeping");
//   },
//   play() {
//     console.log("Person is playing");
//   },
// };

// const nayem = Person("Nayem", 26);
// const sumit = Person("Sumit", 40);

const nayem = new PersonWithNew("Nayem", 26);
const sumit = new PersonWithNew("Sumit", 40);

////////////////////////////////////

// const programmer = {
//   name: "Nayem",
//   age: 26,
//   country: "Bangladesh",
// };

// const engineer = Object.create(programmer);

// console.log(engineer);

//////////////////////////////////////

// function test() {
//   function x() {
//     console.log("object");
//   }
//   return x;
// }
// console.dir(test);

///////////////////////////////////
// introduction class

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     console.log("Person is eating");
//   }
//   sleep() {
//     console.log("Person is sleeping");
//   }
//   play() {
//     console.log(`${this.name} is playing`);
//   }
// }

// const p1 = new Person("Rakib", 22);
// p1.play();

///////////////////////////////////////
// Example Array().prototype

// let persons = [];

let persons = new Array();

persons.push("Rakib");

console.dir(Array);
