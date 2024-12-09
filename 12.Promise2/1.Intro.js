/**
 * To create promise object, we use promise constructor.
 -> Promise has two properties :
 1> value property
 2> state property

 -> When we create a new promise:
 1> The default value is undefined. and,
 2> The default state in pending.


 => At the time when constructor create a new promise object, it also generate a pair of function called as resolve & reject.
 -> Using resolve() and reject() fun we can change the state of the promise object.
 -> using resolve() and reject() multiple times is invalid or waste, bec it will not change the value of promise object.
 -> Generally, the executor callback wraps some async/sync operation.
 -> The executor is called synchronously. That means, the moment you create a new promise object, the whole executor will be
    executed. It will not be like, Promise object will be created first then executor callback will be executed later, Instead
    Once the executor callbacks will be executed completely, then you will have access of promise object.

    let p = new Promise(function exec(resolve, reject) {
        // some piece of code

        -> case 1:
        -> If we have blocking piece of sync code here, like for loop - run for 10 min. Then for next 10 min, we will not
           have access to promise object.

        -> case 2:
        -> If we have async code here, like a timer of 10 min. Since, This is runtime feature (non blocking piece of code) and 
           hence it will set a timer of 10 min in runtime.
           Then remaining sync code of executor callbacks will be executed and then we will have access to our promise object
           immediately.

    })

 -> For more details about promise, please follow MDN docs. 

 */

/**
 * CONSUMING A PROMISE:
 
 -> Let there is a fun fetch which returns a promise.
 -> let p = fetch("-----") -> assume this returns a promise.
 -> we can attach the functionality that we need to execute once the promise is fulfilled or rejectd.

 -> p.then(fulfillment handler, rejection handler);
 -> The above 2 function passed as arg are handler function, that we have to implement ourselves.

 */

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
    }, 10000);
    console.log("exiting the executor callbacks in the promise constructor");
  });
}

console.log("starting....");
const p = createPromiseWithTimeout();
console.log("we are now waiting for the promise to complete");
console.log("my promise object is like ...", p);

p.then(
  function fulfillHandler(value) {
    console.log("Inside fulfill handler with value", value);
    console.log("promise after fulfillment is : ", p);
  },

  function rejectionHandler(value) {
    console.log("Inside rejection handler with value", value);
    console.log("Promise after rejection is ", p);
  }
);

/**
  Part 1:
  -------
  => When ever we run a js code:

  1> we have a callstack in memory.
  2> There is event loop which continuously check callstack is empty or not and global piece of code left or not.
  3> There is a callback queue.
  4> There is runtime in background to set timer.
  5> Apart from callback queue, there is microtask queue or job queue.
  6> Whenever you create a promise object : There a value property of Promise object. and
                                            There is a state property, which define state of promise object.

  7> Apart from this, every promise object is able to manage two things:
     1> onfulfillment: [f, g]
     2> onRejection: [h, k]

     -> these are two array.
     -> inside these array, there are multiple function.
  
  8> Using .then(), we will be able to attach fulfillment handlers.
     We can have multiple fulfillment handlers.
  
  9> This function is exepected to be executed once the promise is either resolve or reject (or we can say, when it changes it's state).


  
  Part: 2
  ---------

  => What happens in the memory, when we run the above code ?

  1> Print: "starting".
  2> call createFunctionWithTimeout():
  -> When we call a function, It push into call stack.
  3> In memory a new promise object will be created having : state = pending.
                                                             value = undefined.
                                                             [] = empty array.

  4> print: "Entering the executor callbacks in the promise constructor".
  5> setTimeout() -> set a timer of 10 sec in runtime.
  6> Print : "Exiting the executor callback in the promise constructor".
  7> executor callbacks executed completely -> remove from callstack -> Promise object in pending state will be returned to p.
  8> Timer is still running in runtime.
  9> print: "we are now waiting for the promise to complete".
  10> print" "my promise object is like", promise object in pending state.
  11> p.then() register handler functions for your promise object.
    -> That is, when the promise will be fulfilled or rejected, then what fun we need to execute will be register here.
    -> Here, we are not executing the fun, just registering the fun.
    -> Function will be executed only, when the promise object changes it's state.
    -> Inside promise object, empty array intialised on registering these fun as:
       1> onFulfillment[f, g];
       2> onRejection[h, k];

  12> Timer is still going on -> After timer completed -> setTimeout() fun is sent to callback queue.
  13> Now event loop check that is callstack empty -> yes,
      Is there any global piece of code left -> no
      Now, send setTimeout() fun from callback queue to callstack.
  14> start execution of setTimeout() :
      generate random num = let 6 -> even 
      resolve(num).

      Now, inside Promise object: state = fulfilled
                                  value = 6.

  15> Now, onFulfillment[] array having some function registered, will be executed one by one.
    -> All Fulfillment inside p.then() will starts it's execution.
    -> print: "Inside fulfill handler with value", random num
    -> print: "promise after fulfillment is", new promise object(p).

  NOte : 1> whenever we use .then(), it registers a set of fun.
         2> if you add multiple p.then(), then multiple handlers can be registered inside onFulfillment[] and onRejection[].
                                              
  */
