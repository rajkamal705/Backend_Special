// function fun() {
//     var y = 10;
// }
// console.log(y);

// function gun() {
//     console.log(y);
//     // let y = 10;
//     var y = 20;
// }
// gun();

// function hun() {
//     console.log(z);
//     var z = 10;
// }
// console.log(z);
// hun();

/*
 * initialising variale with 'let' will be accessible only below that scope.
 * initilising variable with 'var' will be accessible throughout the function. 
 */

// 2nd part :

/*
 => parsing phase :

 * parsing : js reads the whole code in first go and starts allocating the variable not value.
 * There is scope manager in js which tells js that you are in new scope.
  
 * formal declaration : let teacher = "riya".
 * not formal : teacher = "raj". 
  
 */

// var teacher = "snaket"; // global
// function fun() { // global
//     var teacher = "pulkit"; // in scope of fun()
//     console.log(teacher);
// }

// function gun() { // global 
//     var student = "sarthak"; // declare student in scope of gun().
//     console.log(student);
// }
// fun();
// gun();
// console.log(teacher);

// After parsing phase all the variables allocated to corresponding scope.

/*
 => execution phase :

 */

var teacher = "sanket"; // global
function fun() { // global
    var teacher = "pulkit"; // in scope of fun()
    content = "js"; // it will use autoglobal to declate itself during execution phase.
    // This mechanism of autoglobals only works when you are trying to assing value to a variable which is not formally declare.
    console.log(teacher);
}

function gun() { // global 
    var student = "sarthak"; // declare student in scope of gun().
    console.log(student);
}
console.log(content);
fun();
gun();
console.log(teacher);
// console.log(content);


