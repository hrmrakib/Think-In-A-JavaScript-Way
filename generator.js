// What is generator
function* generator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
  
  let iterator = generator();
  
  // console.log(iterator.next());
  // console.log(iterator.next());
  // console.log(iterator.next());
  // console.log(iterator.next());
  // console.log(iterator.next());
  // console.log(iterator.next());
  // console.log(iterator.next());
  
  //////////////////////////////////////////
  // ****** Generator Function Syntax ****** //
  // As Generator Functions
  
  function* myGenerator1() {}
  // or
  function* myGenerator2() {}
  // or
  function* myGenerator3() {}
  
  // As Generator methods
  const myGenerators = function* () {};
  
  // As Generator arrow functions
  // Can't use it arrow functions
  
  // let generator10 = *()=> {}
  
  // Inside class
  // class myClass() {
  //   *myGenerator1() {}
  // }
  
  // Inside Object literal
  const myObj = {
    *myGenerator1() {},
  };
  
  /////////////////////////////////////////
  // ****** Example-1 Make Object Iterable ****** //
  let numbers = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };
  
  // ****** Using Iterator ****** //
  // console.log(Object.entries(numbers)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ], [ 'e', 5 ] ]
  // Object.prototype[Symbol.iterator] = function () {
  //   const entries = Object.entries(this);
  //   let count = entries.length;
  //   let index = 0;
  
  //   return {
  //     next() {
  //       if (count > 0) {
  //         let result = { done: false, value: entries[index][1] };
  //         count--;
  //         index++;
  //         return result;
  //       }
  //       return { done: true };
  //     },
  //   };
  // };
  // for (let i of numbers) {
  //   console.log(i);
  // }
  // console.log([...numbers]);
  
  /////////////////////////////////////////
  
  // ****** Using Generator ****** //
  // Generator is special syntax sugar of Iterator
  
  function* generatorForNumbers(obj) {
    const entries = Object.entries(obj);
    for (let ele of entries) {
      yield ele[1];
    }
  }
  
  const iter = generatorForNumbers(numbers);
  
  // console.log(iter.next());
  // console.log(iter.next());
  // console.log(iter.next());
  // console.log(iter.next());
  // console.log(iter.next());
  
  // for (let i of iter) {
  //   console.log(i);
  // }
  
  console.log(...iter);
  
  // Each function default return value is: "undefined"
  
  function test() {}
  
  console.log(test());
  
  //////////////////////////////////////////////
  // Convert iterator to generator simply - range function (iterator.js file)
  
  function* range(start, end, step) {
    let current = start;
  
    while (current >= end) {
      yield current;
      current += step;
    }
  }
  
  let iterating = range(1, 50, 5);
  console.log(iterating.next());
  
  ////////////////////////////////////
  // ***** Example -2 Generator Control Flow
  
  function* generatorFlow(a, b) {
    let k = yield a + b;
    let m = yield a + b + k;
    yield a + b + k + m;
  }
  
  let genFlow = generatorFlow(2, 2);
  
  console.log(genFlow.next());
  console.log(genFlow.next(6));
  console.log(genFlow.next(10));
  
  //////////////////////////////////////////////
  // ****** async/await - Higher Level Abstraction to Generators
  // ****** async/await & generators
  // async/await create based on generator
  
  const takeOrder = (customer) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`take order from ${customer}`);
      }, 500);
    });
  };
  
  const processOrder = (customer) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`process order for ${customer}`);
      }, 1000);
    });
  };
  
  const completeOrder = (customer) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`complete order for ${customer}`);
      }, 2000);
    });
  };
  
  async function* resolution(customer) {
    yield await takeOrder(customer);
    yield await processOrder(customer);
    yield await completeOrder(customer);
  }
  
  const gen = resolution("Nayem");
  
  // gen.next().then(({ value }) => console.log(value));
  // gen.next().then(({ value }) => console.log(value));
  // gen.next().then(({ value }) => console.log(value));
  
  const promises = [gen.next(), gen.next(), gen.next()];
  
  // es-2018
  (async function () {
    for await (let p of promises) {
      console.log(p);
    }
  })();
  
  ///////////////////////////////////////
  // ES-2018
  // ****** Async Iterators ***** //
  // Symbol.asyncIterator
  // Sumit says - Never use it
  const myAsyncIterable = {
    async *[Symbol.asyncIterator]() {
      yield "hello";
      yield "async";
      yield "iterator";
    },
  };
  
  (async () => {
    for await (let it of myAsyncIterable) {
      console.log(it);
    }
  })();
  