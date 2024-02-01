var a = 10;

var b = a;
a = 2;

console.log(a);
console.log(b);

////////////////////////////////////////////

let person = {
  name: "nayem",
  age: 25,
};

let pro = person;

pro.name = "sumit";

person.name = "faysal";

person = {};

console.log(pro);
console.log(person);

var language = {
  name: "JavaScript",
  estd: 1995,
};

// immutably (not changing)
var language2 = { ...language };

language.name = "PHP";

console.log(language);
console.log(language2);

/////////////////////////////////

var r = "rakib";

// r.fine = "x";

console.log(r);

////////////////////////////////
// pass by reference / value - interview question
