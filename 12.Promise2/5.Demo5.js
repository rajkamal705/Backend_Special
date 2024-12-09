function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
  return new Promise(function executor(resolve, reject) {
    console.log("Entering the executor callaback in the promise constructor");
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        // if random num is even, we fullfill
        resolve(num);
      } else {
        // if random num is odd, we reject
        reject(num);
      }
    }, 1000);
    console.log("exiting the executor callbacks in the promise constructor");
  });
}

console.log("starting....");
const p = createPromiseWithTimeout();
console.log("we are now waiting for the promise to complete");
console.log("my promise object is like ...", p);
console.log("Going to register my 1st handler");

p.then(
  function fulfillHandler(value) {
    console.log("Inside fulfill handler-1 with value", value);
    console.log("promise after fulfillment is : ", p);
    setTimeout(function t() {
      console.log("ended 0sec timer");
    }, 0);

    console.log("exiting the fulfill handler - 1");
  },

  function rejectionHandler(value) {
    console.log("Inside rejection handler-1 with value", value);
    console.log("Promise after rejection is ", p);

    setTimeout(function t() {
      console.log("ended 0sec timer");
    }, 0);

    console.log("exiting the rejection handler - 1");
  }
);

console.log("going to register my 2nd set of handler");

p.then(
  function fulfillHandler(value) {
    console.log("Inside fulfill handler-2 with value", value);
    console.log("promise after fulfillment is : ", p);
  },

  function rejectionHandler(value) {
    console.log("Inside rejection handler-2 with value", value);
    console.log("Promise after rejection is ", p);
  }
);

console.log("ending...");

setTimeout(function () {
    console.log("global timer of 0 sec");
}, 1000);

// set timer of 0sec and see the difference.