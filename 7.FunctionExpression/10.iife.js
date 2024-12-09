/**
 * iife : Immediately invoked function expression.
 * define and called immediately.
 */

(function x() {
    console.log("hii");
});
// here we just defined function not invoked yet.

// iife
(function x() {
    console.log("hii");
})();
// here function invoked. It will print 'hii' in output.

// iife
(function x(y) {
    console.log("hii", y);
})("sanket");
// here function invoked by passing sanket as parameter and hence will print: Hii sanket.

/**
 * Use of iife :
   -> iife is used at the time of naming clossion.
   -> ex : suppose there is 5k line of code at production level. Some new developer come and want to add function name which is
           already exist, so either they have to read whole code bases or use iife.
 */

function x() {
    console.log("wow");
}
x();
// it will print wow even though there is other fun of same name.

// another use case of iife:

function f() {
    return 1;
}

function g() {
    return 2;
}

var i = 10;

// if(i % 2 == 0) {
//     var res = f();
// } else {
//     var res = g();
// }

// iife : with named fun expression.
var res = (function evaluate(i) {
    if(i%2 == 0) return f();
    else return g();
})(i);
console.log(res);