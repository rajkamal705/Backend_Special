const f = function fun() {
    console.log("how much fun???")
}
f(); // no error 
fun(); // error: fun is not defined.
// function expression get a scope of corresponding variable in which it is assigned. here f.
// this fun is only accessible using f. This is bound to variable f.
// It is only accessile using f.