function fun(fn) {
    console.log("welcome to fun");
    fn();
}

// fun(function() {
//     console.log("wow so much fun");
// })

// passing named fun expression instead of anonymous just to increase the readibility of code.
fun(function askingAboutFun() {
    console.log("wow so much fun");
    console.trace();
    // once remove the name askingAboutFun and then see the result : It will not show the funtion name and it will be hard to 
    // check the code base for develper at production level.
})

/**
 * Because of named function expression, readibility of code increases.
 * Another use : open MDN and see example of arguments.callee -> find factorial example.
 * For recursive cases, named function expression are also helpful.
 * 3rd Use : console.trace() helps in tracing the call stack during recursion. 
 */