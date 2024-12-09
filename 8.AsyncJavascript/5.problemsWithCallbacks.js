/**
 * PROBLEMS WITH CALLBACK :
   1> Inversion of control : Giving control of your implemented code to other is known as inversion of control.
      -> promises can resolve this issue of inversion of control.
   2> callback hell : readability problem.
 */

//    let arr = [1, 10, 1000, 9, 2, 3, 11];
//    arr.sort(function cmp(a, b) {
//    return a - b;
//    })

//    console.log(arr);

   function doTask(fn, x) {
    // suppose whole implementation is done by team 'A'.
    fn(x * x); // calling my callback function with square of x.
    fn(x * x);
   }

   // now, Team B tries to use it :
   doTask(function exec(num) { // due to callbacks, i am passing control of how exec() should be called to doTask to other..
    console.log("wow, num is : ", num);
   }, 9);