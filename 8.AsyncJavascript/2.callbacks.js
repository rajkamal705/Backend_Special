/**
 * here, f -> hof
 * x -> number
 * fn - function as arg
 */

function f(x, fn) {
    for(let i = 0; i < x; i++) {
        console.log(i);
    }
    fn(); // this will call exec() function and print the text inside it.

}

f(10, function exec() {
    // function passes as argument while calling higher order function is called as callback function.
    console.log("I am also get executed.");
});