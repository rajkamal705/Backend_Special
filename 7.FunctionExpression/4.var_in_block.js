function fun() {
    var i = 5; // 'i' has scope inside fun everywhere. It will igonre while loop for scope resolution.
    while(i < 10) {
        var x = i; // x is in the scope of fun. It will ignore while loop during scope resolution.
        i++;
    }
    console.log(x);
}
fun();

let i = 1;
console.log(y);
while(i < 5) { // while loop will be ignored during scope resolution for variable.
    var y = 10;
    i++;
}
console.log(y);

/**
 * redeclaration is not allowed with let, but it is allowed with var.
 */

// let x = 9;
// let x = 10;

var x = 5;
var x = 10;


