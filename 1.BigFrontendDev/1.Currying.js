/**
 => Currying: 
 -> Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
 -> Currying doesn't call a function. It just transforms it.
 */

/**
  => Example 1:
  -> we will create a helper function curry(f) that performs for a two argument function. In other words,
     f(a, b) translates into a function that runs as f(a)(b);

  */

// function curry(f) {
//     return function(a) {
//         return function(b) {
//             return f(a, b);
//         }
//     }
// }

// function sum(a, b) {
//     return a + b;
// }

// let curriedSum = curry(sum);
// console.log(curriedSum(1)(4));

/**
 -> More advanced implementations of currying, such as _.curry from lodash library, return a wrapper that allows a function
    to be called both normally and partially:
 */

// Lodash:
const _ = require("lodash");
// 1> It will concat array
// const nums = [1, 2, 3, 4, 5, 6];
// const newArr = _.concat(nums, [7, 8]);
// console.log(newArr);

// 2> It will print difference of array.
// const nums = [1, 2, 3, 4, 5, 6];
// const newArr = _.difference(nums, [5, 6]);
// console.log(newArr);

// 3> It will drop(or remove) two elements from beginning index of array
// const nums = [1, 2, 3, 4, 5, 6];
// const newArr = _.drop(nums, 2);
// console.log(newArr);

// 4> It will drop two element fron right side of array.
// const nums = [1, 2, 3, 4, 5, 6];
// const newArr = _.dropRight(nums, [5, 6]);
// console.log(newArr);

// 5> It will implement curry in on function
// function sum(a, b) {
//     return a+b;
// }
// let curriedSum = _.curry(sum);
// console.log(curriedSum(1, 2));
// console.log(curriedSum(2)(3));

// 6> Real life example:
// function sendAutoEmail(to) {
//    return function (subject) {
//       return function (body) {
//          console.log(`sending email to ${to} with subject: ${subject} and final message is ${body}`);
//       }
//    }
// }

// let step1 = sendAutoEmail("raj@gmail.com");
// let step2 = step1("random subject email");
// step2("This is final body for testing");

// sendAutoEmail("raj@gmail.com")("this is random subject messsage")("this is final message body for this email");

/**
 * 1> call() 2> apply() 3> bind() 
 */

// 1> Call():
// Purpose: Invokes a function immediately with a specified this value and arguments passed individually.

// Example 1: 
// const person = { name: "Raj Kamal" };
// function greet(city, job) {
//    console.log(`Hello, my name is ${this.name}. I live in ${city} and I am a ${job}.`);
// }
// greet.call("patna", "sde");

// Example 2: 
// function greet(greeting, punctuation) {
//    console.log(greeting + ", " + this.name + punctuation);
// }
// const person = {name: "Raj"};
// greet.call(person, "Hello", "!");

/**
 * Note : 
 * First argument = what this should refer to (person).
 * Next arguments = normal function arguments.
 */

// 2> apply(): 
// Purpose: Similar to call(), but arguments are passed as an array. Useful when you already have arguments in an array.

// function greet(greeting, punctuation) {
//    console.log(greeting + ", " + this.name + punctuation);
// }

// const person = {name: "Raj"};
// greet.apply(person, ["Hello", "!!!"]);

/**
 * Note: 
 * First argument = this value.
 * Second argument = array of arguments.
 */

// 3> bind(): 
// Returns a new function with this permanently set.
// Unlike call/apply, it does not execute immediately.

// function greet(greeting, punctuation) {
//    console.log(greeting + ", " + this.name + punctuation);
// }

// const person = {name: "Raj"};
// const boundGreet = greet.bind(person, "Hey");
// boundGreet("?");


// Example: 
// let numbers = [1, 5, 10, 3];
// console.log(Math.max.apply(null, numbers));

/**
 * Clear concept of currying:
 */

// Example 1:
// function curryAdd(a) {
//    return function(b) {
//       return function(c) {
//          return a + b + c;
//       }
//    }
// }

// console.log(curryAdd(2)(3)(4));

// Example 2:
// function add(a, b, c) {
//   return a + b + c;
// }

// function curryAdd(fn) {
//    return function(a) {
//       return function(b) {
//          return function(c) {
//             return fn(a, b, c);
//          }
//       }
//    }
// }

// console.log(curryAdd(add)(2)(3)(4));

/**
 * Note:
 -> curryAdd is just a higher-order function.
 -> The actual computation (add) is passed in as an argument.
 -> The closure ensures that fn, a, b stay remembered until the final call.
 */

// Example 3:





