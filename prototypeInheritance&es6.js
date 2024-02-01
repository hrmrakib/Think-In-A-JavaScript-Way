function Person(name, age) {
  //parent class
  this.name = name;
  this.age = age;

  //   this.eat = function () {
  //     console.log(`${this.name} is eating`);
  //   };  //insert into- Person.prototype
}
function Cricketer(name, age, type, country) {
  // sub class (Cricketer)
  Person.call(this); // es6-class: super(name, age)
  this.name = name;
  this.age = age;
  this.type = type;
  this.country = country;
}

Person.prototype = {
  eat: function () {
    console.log(`${this.name} is eating`);
  },
};

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;

const p1 = new Person("A", 21);
const p2 = new Person("B", 21);

console.log(p1);
console.log(p2);

// Prototype Inheritance convert into class (class.js)
/////////////////////////////////////////
var f = function Person2() {};

Object.prototype.Rakib = function () {
  console.log("i am rakib");
};

var ob = {};
ob.Rakib();
