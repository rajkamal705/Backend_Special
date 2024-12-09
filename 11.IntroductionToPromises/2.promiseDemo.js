/* Write all the code in browser console to understand better. */

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// console.log(getRandomInt(5));

/* PART 2: */

// function createPromiseWithLoop() {
//   return new Promise(function executor(resolve, reject) {

//     for (let i = 0; i < 10000000000; i++) {
//       // some task
//     }

//     let num = getRandomInt(8);
//     if (num % 2 == 0) {
//       // if random num is even, we fullfill
//       resolve(num);
//     } else {
//       // if random num is odd, we reject
//       reject(num);
//     }

//   });
// }

// let x = createPromiseWithLoop();
// console.log(x);

/* PART 3: */

function createPromiseWithTimeout() {
  return new Promise(function executor(resolve, reject) {
    setTimeout(function () {
      let num = getRandomInt(8);
      if (num % 2 == 0) {
        // if random num is even, we fullfill
        resolve(num);
      } else {
        // if random num is odd, we reject
        reject(num);
      }
    }, 10000);
  });
}

let y = createPromiseWithTimeout();
console.log(y);
console.log("Hii");

/**
 * The moment we see runtime, we set a timer of 10sec in runtime.
 * But, since there is no blocking piece of code(like in prev code, there was for loop as blocking piece of code), it will 
   immediately return promise object.
 * Here, it will not wait for setTimeout() to complete it's timer.
 1> first it will return promise object immediately.
 2> print "Hii"
 3> and timer of 10sec is still running -> we can do other task in these 10 sec.
 4> After 10sec, random number will be generated and it will return fulfilled or rejected as per num is generated using
    getRandomInt();
 */
