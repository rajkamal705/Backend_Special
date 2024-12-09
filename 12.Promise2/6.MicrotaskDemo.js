function createPromise() {
  return new Promise(function (resolve, reject) {
    console.log("resolving the promise");
    resolve("done");
  });
}

setTimeout(function process() {
  console.log("timer completed");
}, 0);

let p = createPromise();

p.then(
  function fulfillHandler1(value) {
    console.log("we fulfilled-1 with a value", value);
  },

  function rejectHandler() {
    // write something.
  }
);

p.then(
  function fulfillHandler2(value) {
    console.log("we fulfilled-2 with a value", value);
  },

  function rejectHandler() {
    // write something.
  }
);

p.then(
  function fulfillHandler3(value) {
    console.log("we fulfilled-3 with a value", value);
  },

  function rejectHandler() {
    // write something.
  }
);

for(let i = 0; i < 10000000000; i++) {}

console.log("ending...");

/**
 -> When your promise is resolved or rejected, the handlers present inside the onfulfillment[] array and onrejection[] array, 
    They are not immediately resolved.
 -> It doesn't matter, whether your promise is containing some sync piece of code 'or' async piece of code, these handlers
    are never immediately executed.
 -> Once the state of promise changes, then these handlers go inside microtask queue. 
    suppose promise changes it's state from pending to fulfilled state, then all the handlers of onfulfillment[] array will
    be pushed inside microtask queue.
 -> Now event loop will continuouly checks that is the call stack empty 'or' is there any global piece of code left.
 -> If callstack is empty or there is no global piece of code left for execution, then it will take the callbacks from 
    micortask queue and send to call stack for execution.
 */

/**
 * How code execution works?
 1> we created a function.
 2> we set a timer of 0sec in runtime.
 3> call createPromise() -> we created a promise -> print, resolving the promise -> then immediately resolve the promise with 
    value "done".
 4> using .then(), we register our handlers to promise -> It will not immediately executed.
 5> Since global piece of code left, whatever number of callbacks we have in onFullFillment[] or onRejection[] array, All 
    these callbacks will wait in microtask queue. 
 6> Once event loop confirm that the callstack is empty and there is no global piece of code left, then it will bring 
    callbacks from microtask queue one by one and pushed to the callstack to make it's complete execution.

 7> Since there was a timer of 0sec in runtime which immediately gets completed and callback fun is pushed to callbacks queue.

 8> Now there was two choice :  1> Callback queue 2> microtask queue.
    The question is which will execute first ?

 9> Event loop is going to prefer microtask queue over callback queue.

 NOte : At any point of time if event loop has a choice to pick from a microtask queue or callbacks queue then it always give
        preference to microtask queue.
 */
