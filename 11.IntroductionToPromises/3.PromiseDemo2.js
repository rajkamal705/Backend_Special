/* PART 1: */

// implementation of getRandomInt() :
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/*
function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
      setTimeout(function () {
        let num = getRandomInt(10);
        if (num % 2 == 0) {
          // if random num is even, we fullfill
          resolve(num, 10, 20);
        } else {
          // it doesn't matter, how many value we pass as arg. It will always consider first arg (or 1st value) num as Promise result value.
          // if random num is odd, we reject
          reject(num);
        }
      }, 10000);
    });
  }
  
  let y = createPromiseWithTimeout();
  console.log(y);

*/

/**
 * The immediately returned promise object will be in pending state.
 * Then after complete the timer of setTimeout(), it will return that promise is in fulfilled or rejected state.
 */

/* PART 2: */

// function createPromiseWithTimeout() {
//     return new Promise(function executor(resolve, reject) {
//       setTimeout(function () {
//         let num = getRandomInt(8);
//         if (num % 2 == 0) {
//           // if random num is even, we fullfill
//           console.log("fulfilling");
//           return num;
//         } else {
//           // if random num is odd, we reject
//           console.log("rejecting");
//           return num;
//         }
//       }, 10000);
//     });
//   }

//   let y = createPromiseWithTimeout();
//   console.log(y);

/**
   1> It will return a promise object of pending state.
   2> After 10 sec, it will print either fulfilling or rejecting based on the random num generated.
   3> But the state of promise is still pending bec, the state of promise will only change if you call the resolve() or 
      reject() function.
    -> The return num here is just normal return to break the flow of code. It will not effect the state of promise.
*/

/* PART 3: */
// function createPromiseWithTimeout() {
//     return new Promise(function executor(resolve, reject) {
//       setTimeout(function () {
//         let num = getRandomInt(8);
//         if (num % 2 == 0) {
//           // if random num is even, we fullfill
//           console.log("fulfilling");
//           resolve(num);
//           console.log("completed resolving");
//           return num;
//         } else {
//           // if random num is odd, we reject
//           console.log("rejecting");
//           reject(num);
//           console.log("completed rejecting");
//           return num;
//         }
//       }, 10000);
//     });
//   }

//   let y = createPromiseWithTimeout();
//   console.log(y);

/**
 * Promise object of pending state will be printed.
 * After 10s timer completed, either print fulfilling or rejecting based on the random number generated.
 * If num is even, it will print- "fulfilling" -> Then resolve(num) is called -> This resolve is just trigering your promise 
   object to make sure that your code is in fulfilled state.
   Then normal js code will run -> print : "completed resolving".
  -> same thing will work for reject() as well.
 */

function createPromiseWithTimeout() {
  return new Promise(function executor(resolve, reject) {
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        // if random num is even, we fullfill
        console.log("fulfilling");
        resolve(num);
        console.log("completed resolving");
        resolve(10);
        console.log("resolving again");
        return num;
      } else {
        // if random num is odd, we reject
        console.log("rejecting");
        reject(num);
        console.log("completed rejecting");
        reject(11);
        console.log("rejecting again");
        return num;
      }
    }, 10000);
  });
}

let y = createPromiseWithTimeout();
console.log(y);

/**
 * Once you call resolve() or reject() (or Once you change the state of your promise object), your promise object can never be
   updated. You can't change the value again.
 * calling resolve() and reject() again and again is just a waste. It will not show any effect on promise object.
 */
