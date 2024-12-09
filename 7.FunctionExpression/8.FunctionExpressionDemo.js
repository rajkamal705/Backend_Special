function fun() { // function declaration : If first word of line is starting with keyword function.
    // some implementation
}

let f = function gun() { // named function expression : Storing function in some variable.
    // some implem
}

let a = function() { // anonymous function expression
    // ok some more implem
}

(function x() { 
    // can you stop it ?
    // first word is not a keyword function(here, starting with bracket) -> function expression
    // any function which is not starting with function keyword is function expression.
})

(function () {
    // i am done
    // function expression
})

let y = () => {
    // Arrow function.
    // function expression
}

/**
 * IIFE : Immediately invoked function expression.
  
 * Function expression is of two types : 1 > anonymous function expression 2> named function expression.
 * anonymous function expression has less prioriy than named fun express.
 * named fun express more priority than anonymous.
 */