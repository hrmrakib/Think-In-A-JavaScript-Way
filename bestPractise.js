// meaningful name of variable

// bad
let daysll = 30;

let ok;

if (daysll < 30) {
  ok = true;
}

// good
const max_allowed_login_expiration_days = 30;

let daySinceLastLogin = 30;

const isUserLoggedIn = daySinceLastLogin < max_allowed_login_expiration_days;

///////////////////////////////
// bad
let nameValue;
let theProduct;

// good
// let name;
// let product;

//////////////////////////////////

const products = ["T-Shirt", "Shoes", "Watches", "Bags"];
// bad
products.forEach((i) => {
  // some code
  console.log(i);
});

// good
products.forEach((product) => {
  // some code
  console.log(product);
});

/////////////////////////////////
// bad
var product = {
  productId: 1,
  productName: "T-Shirt",
  productPrice: 500,
  productUnits: 42,
};

// good
// const product = {
//   id: 1,
//   name: "T-Shirt",
//   price: 500,
//   units: 42,
// };

/////////////////////////////////

//////// ***** Function Naming ***** ///////
// bad
function email(user) {
  // code
}

// good
function sendEmailToUser(user) {
  // code
}

// **** function arguments - avoid
// bad
function getProducts(fields, fromDate, toDate) {
  // code
}

// good
// function getProducts({ fields, fromDate, toDate }) {
//   // code
// }

// **** use default arguments, not conditionals
// bad
// function createShape(type) {
//   const shapeType = type || "circle";
// }

// good
// function createShape(type = "circle") {
//   //   code ....
// }

// **** No need to send flag as parameters
// bad
function createFile(name, isPublic) {
  if (isPublic) {
    fs.create(`./public/${name}`);
  } else {
    fs.create(name);
  }
}

// good
// function createFile(name) {
//   fs.create(name);
// }

function createPublicFile(name) {
  fs.create(`./public/${name}`);
}

////////////////////////////////////

// It's not good to multiple task within one function

// bad
function notifyUsers() {
  users.forEach((user) => {
    const userRecord = database.lookup(user);
    if (userRecord.isVerified()) {
      notify(user);
    }
  });
}

// good
function notifyVerifiedUsers(users) {
  users.filter(isUserVerified).forEach(notify);
}

function isUserVerified(user) {
  const userRecord = database.lookup(user);
  return userRecord.isVerified();
}

///////////////////////////////////////////////
// Type Checking

// Always check "strong type checking" (===)

console.log(1 == "1");
console.log(1 === "1");

console.log(0 == false);
console.log(0 === false);

// full example
const value = "100";

if (value == "100") {
  console.log(value);
}
if (value == 100) {
  console.log(value);
}

if (value === "100") {
  console.log(value);
}
if (value === 100) {
  console.log(value);
}

//////////////////////////////////
////// **** Default Object Value ****/
// default object value set করার জন্য "Object.assign" use করুন

// bad
// const shapeConfig = {
//   type: "circle",
//   width: 150,
//   height: null,
// };

// function createShape(config) {
//   config.type = config.type || "circle";
//   config.width = config.width || 300;
//   config.height = config.height || "300";
// }
// createShape(shapeConfig);

// good
const shapeConfig = {
  type: "circle",
  width: 150,
};

function createShape(config) {
  config = Object.assign(
    {
      type: "circle",
      width: 300,
      height: 300,
    },
    config
  );
}

createShape(shapeConfig);

// global prototype pollute না করাই ভাল

// bad
Array.prototype.myFunc = function myFunc() {
  // implementation
};

// Good
class MyArray extends Array {
  myFunc() {
    // implementation
  }
}

//////////////////////////////////
////// **** Conditional Shorthand ***** ///////

// bad
if (isValid === true) {
  // do something
}
if (isValid === false) {
  // do something
}

// Good
if (isValid) {
  // do something
}
if (!isValid) {
  // do something
}

//////////////////////////////////////////
/////**** Method Chaining ****/////

// Bad
class Product {
  constructor(name) {
    this.name = name;
  }
  setUnits(units) {
    this.units = units;
  }
  setPrice(price) {
    this.price = price;
  }
  save() {
    console.log(this.name, this.units, this.price);
  }
}
const product = new Product("Bag");

product.setPrice(800);
product.setUnits(5);
product.save();

// Good
class Product {
  constructor(name) {
    this.name = name;
    return this;
  }
  setUnits(units) {
    this.units = units;
    return this;
  }
  setPrice(price) {
    this.price = price;
    return this;
  }
  save() {
    console.log(this.name, this.units, this.price);
  }
}

const product2 = new Product("Watch").setUnits(2).setPrice(2200).save();

//////////////////////////////////////////
/////**** Avoid eval() ****/////

eval("alert('Dangerous it')");

//////////////////////////////////////////
/////**** Curly Braces ****/////

// Bad
// (1)
if (something) a = true;

// (2)
if (something) a = false;
otherFunctionCall();

// Good
// (1)
if (something) {
  a = true;
}

// (2)
if (something) {
  a = false;
  otherFunctionCall();
}

//////////////////////////////////////////
/////**** Prototype Method ****/////
// Add methods on the .prototype when writing constructors

// bad
function Player(name, age) {
  this.name = name;
  this.age = age;

  this.play = function () {
    console.log(`${this.name} is playing`);
  };
  // this function exists inside every instance without calling
}

let fahad = new Player("Fahad", 24);
let jibon = new Player("Jibon", 24);

console.log(fahad);
console.log(jibon);

// good
function Player(name, age) {
  this.name = name;
  this.age = age;
}

Player.prototype.play = function () {
  console.log(`${this.name} is playing`);
};

let sakib = new Player("Sakib", 25);
let maruf = new Player("Maruf", 21);

//////////////////////////////////////////
/////**** For Loop ****/////
// Declare variables outside of the for statement

// Bad
for (let i = 0; i < arr.length; i++) {
  let container = document.getElementById("container");
  container.innerHTML += "My number: " + i;
  console.log(i);
}

// Good
let container = document.getElementById("container");
let len = arr.length;
for (let i = 0; i < len; i++) {
  container.innerHTML += "number: " + i;
  console.log(i);
}

//////////////////////////////////////////
/////**** Use let, const ****/////

//////////////////////////////////////////
/////**** Usage "var" ****/////

// Bad
var a1 = "string or something";
var a2 = "string or something";
var a3 = "string or something";

// Good
// Omit the 'var' keyword and use commas instead
var b1 = "string or something",
  b2 = "string or something",
  b3 = "string or something";

//////////////////////////////////////////
/////**** Use Semicolon ****/////

// Bad
var am = "The dog is singing";
function dogSing() {
  return "Dog melody sing";
}

// Good
var am = "The dog is singing";
function dogSing2() {
  return "Dog melody sing";
}

//////////////////////////////////////////
/////**** Use IIFE ****/////

(function having() {
  return {
    name: "nayem",
  };
})();

//////////////////////////////////////////
/////**** Module Pattern ****/////
// Avoid using module

// Bad
// var current = null;
// function init() {
//   // do something
// }
// function change() {
//   // do something
// }
// function verify() {
//   // do something
// }

// Good

const module = (function () {
  var current = null;
  function init() {
    // do something
  }
  function change() {
    // do something
  }
  function verify() {
    // do something
  }

  return { init, change, bortman: current };
})();

module.init();

//////////////////////////////////////////
/////**** Script source tag ****/////

// avoid language property
