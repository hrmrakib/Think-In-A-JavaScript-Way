// ******** Promise Task ********

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

// const addToCalender = (meetingDetails) => {
//   return new Promise((resolve, reject) => {
//     const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//     resolve(calender);
//   });
// };

// as like above it
const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calender);
};

meeting
  .then(addToCalender)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });

////////////////////////////////

const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2 resolved");
  }, 2000);
});

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));

// it prints all result at the same time
Promise.all([promise1, promise2]).then((res) => {
  console.log(res);
});

// it races between or among the promise and return first result
Promise.race([promise1, promise2]).then((res) => {
  console.log(res);
});
