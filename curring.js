// non-curring
function multiply(a, b, c) {
  return a * b * c;
}
// console.log(multiply(1, 2, 3));

// curring function
function curriedMultiply(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}

// console.log(curriedMultiply(1)(2)(3));

let step1 = curriedMultiply(2);
console.dir(step1);
let step2 = step1(3);
console.dir(step2);
let step3 = step2(3);
console.dir(step3);

// Example -1

function discount(price, disc) {
  return price - price * disc;
}
let customer1 = discount(500, 0.1);
let customer2 = discount(500, 0.1);
let customer3 = discount(500, 0.1);
console.log(customer1);

// curring way:

function discount2(disc) {
  return (price) => {
    return price - price * disc;
  };
}

let tenPercentDiscount = discount2(0.1); // Partial Function
let twentyPercentDiscount = discount2(0.2); // Partial Function

let c1 = tenPercentDiscount(500);
let c2 = tenPercentDiscount(600);
let c3 = twentyPercentDiscount(700);

console.log(c3);

/////////////////////////////////////////
// Curry Converter Function

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1)(2)(3));

////////////////////////////////////////////

// crazy example of curring
function log(date, importance, message) {
  console.log(
    `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} : ${date.getHours()} : ${importance} : ${message}`
  );
}

let curriedLog = _.curry(log);

curriedLog(new Date(), "Warning", "Reload");
curriedLog(new Date())("Error")("Fetching to fail");

let logNow = curriedLog(new Date());

logNow("Info", "Info Message");
logNow("Info2", "Info Message");
logNow("Info3", "Info Message");

/////////////////////////////////////
// Finally Short-cut

function multiplying(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}
const multi = (a) => (b) => (c) => a * b * c;
console.log(multi(1)(2)(2));

/////////////
const list = [
  {
    id: 1,
    name: "Steve",
    email: "steve@example.com",
  },
  {
    id: 2,
    name: "John",
    email: "john@example.com",
  },
  {
    id: 3,
    name: "Pamela",
    email: "pam@example.com",
  },
  {
    id: 4,
    name: "Liz",
    email: "liz@example.com",
  },
];

const filtered = (item, name) => list.filter((item) => item.name !== name);
console.log(filtered(list, "Liz"));
