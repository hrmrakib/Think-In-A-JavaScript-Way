// ******* implicit binding *******
var obj = {
  name: "Nayem",
  age: 27,
  printPlayerName: function () {
    console.log(this.name);
  },
};

// exception: Only work for normal function, will not work arrow function
// otherwise `this` will be window object
obj.printPlayerName();

////////////////////////////////
let printPlayerNameFunction = function (obj) {
  obj.printPlayerName = function () {
    console.log(this.name);
  };
};

let nayem = {
  name: "Nayem",
  age: 28,
};
let sumit = {
  name: "Sumit",
  age: 36,
};

printPlayerNameFunction(nayem);
printPlayerNameFunction(sumit);

nayem.printPlayerName();
sumit.printPlayerName();

////////////////////////////////

let Person = function (name, age) {
  console.log(name);

  return {
    name: name,
    age: age,
    displayName: function () {
      console.log(this.name);
    },
    father: {
      name: "Mr. Rafiqul",
      displayName: function () {
        console.log(this.name);
      },
    },
  };
};
let sakib = Person("Sakib", 23);
sakib.displayName();
sakib.father.displayName();

// ******* explicit binding *******

let printName = function (v1, v2, v3) {
  console.log(this.name, v1, v2, v3);
};

let faysal = {
  name: "Faysal",
  age: 20,
};

let v1 = "Handsome";
let v2 = "Talent";
let v3 = "Pious";

let v = [v1, v2, v3];
// call take parameters: single value (not array)
// printName.call(faysal, v1, v2,v3);

// apply take parameters: [array]
// printName.apply(faysal, v);

// bind like call but store it
let newFunc = printName.bind(faysal, v1, v2, v3);
newFunc();

// ******* new binding *******

function Pilot(name, age) {
  // JS creates automatically like it (object)
  // let this = Object.create(null)
  this.name = name;
  this.age = age;

  // and return that `this` obj
  // return this
}

let p1 = new Pilot("Fayem Al Sazid", 35);
console.log(p1.name);

// ******* window binding *******

let showName = () => {
  console.log(this.name);
};

let siyem = {
  name: "Siyem",
};

showName();

console.log(window === this);
