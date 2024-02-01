// Asynchronous

// ******** Synchronous Task ********
// const processOrder = (customer) => {
//   console.log(`processing order for customer 1`);

//   let now = new Date().getTime();

//   while (now + 3000 >= new Date().getTime());

//   console.log(`order processing for customer 1`);
// };

// console.log(`take a order for customer1`);
// processOrder();
// console.log(`completed order for customer 1`);

// ******** Asynchronous Task ********
// const processOrder = (customer) => {
//   console.log(`processing order for customer 1`);

//   setTimeout(function () {
//     console.log(`completed order for customer 1`);
//   }, 2000);
//   console.log(`order processing for customer 1`);
// };

// console.log(`take a order for customer1`);
// processOrder();

///////////////////////////////////////

const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "8.00 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("meeting already scheduled"));
  }
});

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calender);
};

// meeting
//   .then(addToCalender)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

async function myMeeting() {
  try {
    const meetingDetails = await meeting;
    const calendar = await addToCalender(meetingDetails);
    console.log(calendar);
  } catch {
    console.log(`something wrong`);
  }
}

myMeeting();
