function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype = {
  eat: function () {
    console.log(this.name, "eating .....");
  },
};

function Developer(name, age, type, company) {
  this.name = name;
  this.age = age;
  this.type = type;
  this.company = company;
}

let d1 = new Developer("Rakib", 220, "Full-Stack", "Ratine");

console.dir(d1);
d1.eat();
