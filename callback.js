// ******** Callback Task ********
const takeOrder = (customer, callback) => {
  console.log(`take order for ${customer}`);
  callback(customer);
};

const processOrder = (customer, callback) => {
  console.log(`processing order for ${customer}`);

  setTimeout(() => {
    console.log(`cooking completed`);
    console.log(`order processed for ${customer}`);
    callback(customer);
  }, 2500);
};

const completeOrder = (customer) => {
  console.log(`completed order for ${customer}`);
};

// the disadvantage is nested callback for managing problem next
// it called "callback hale"
takeOrder("customer1", (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
  });
});
