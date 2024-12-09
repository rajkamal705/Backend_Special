// var teacher = "sanket"; // teacher -> global scope -> sanket
// function ask(question) { // ask -> global scope, question -> in scope of ask().
//     console.log(teacher, question);
// }

// function fun() { // fun -> global.
//     var teacher = "pulkit"; // teacher -> in scope of fun. -> pulkit
//     ask("why?");
// }
// fun();

/*
 * During parsing phase if there is no formal declaration in fun, noting to do.
 */

// var fun = '123';
// function fun() {
//     return 'fun2';
// }
// console.log(fun);
// console.log(fun()); it will show error.

var fun;
function fun() {
    return 'fun2';
}
console.log(fun());