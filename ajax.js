// XMLHttpRequest - XHR
// All modern browsers have a built-in XMLHttpRequest object to request data from a server. The XMLHttpRequest object can be used to request data from a web server. The XMLHttpRequest object is a developers dream, because you can:  1) update a web page without reloading the page, 2) request data from a server - after the page has loaded, 3) receive data from a server  - after the page has loaded 4) send data to a server - in the background.

let getButton = document.getElementById("get");
let sendButton = document.getElementById("send");

const sendRequest = function (method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);

    xhr.onload = function () {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = function () {
      reject("Something was wrong!");
    };
  });
  return promise;
};

const getData = function () {
  sendRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/todos/1",
    JSON.stringify({
      title: "Goat",
      body: "Nicia",
      userId: 1,
    })
  )
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((err) => {
      console.log(err);
    });
};

const sendData = function () {
  sendRequest("POST", "https://jsonplaceholder.typicode.com/posts").then(
    (responseData) => {
      console.log(responseData);
    }
  );
};

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);
