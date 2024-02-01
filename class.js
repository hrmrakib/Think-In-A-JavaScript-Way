// class Person {
//   // parent class
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     console.log(`${this.name} is eating`);
//   }
// }

// // Inheritance with "extends" key-word
// class Cricketer extends Person {
//   // sub class
//   constructor(name, age, type, country) {
//     super(name, age);
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.country = country;
//   }

//   play() {
//     console.log(`${this.name} is playing`);
//   }
// }
// const p1 = new Cricketer("A", 21);

// p1.play();

////////////////////////////////////
// getter & setter

// class Programmer {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     console.log(`${this.name} is eating`);
//   }

//   // getter
//   get getName() {
//     return this.name;
//   }

//   // setter
//   set setName(name) {
//     this.name = name;
//   }
// }

// let nayem = new Programmer("Nayem", 26);
// console.log(nayem.setName);

// nayem.setName = "Sumit";

// console.log(nayem.name);

///////////////////////////////////

// es6-class: static

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   read() {
//     console.log(`${this.name} is reading`);
//   }

//   static isEqualAge() {
//     console.log("18");
//   }
// }
// Student.isEqualAge();

/////////////////////////////////////

// Polymorphism - is  simple

class Man {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  play() {
    console.log(`${this.name} is playing`);
  }
}

class Player extends Man {
  constructor(name, age, type, country) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
  }
  // polymorphism
  play() {
    super.play();
    console.log(`${this.name} is playing cricket`);
  }
}

let player = new Player("windso", 27);
player.play();
