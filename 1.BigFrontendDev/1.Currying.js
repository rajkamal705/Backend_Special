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

/**
 * 1> call() 2> apply() 3> bind() 
 */



