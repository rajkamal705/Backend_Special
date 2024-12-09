/*
 * syntax : "use strict"
 -> It disabled making autoglobals. 
 */


// "use strict";
var teacher = "sanket"; 
function fun() { 
    var teacher = "pulkit"; 
    content = "js"; 
    console.log(teacher);
    console.log(content);
}

function gun() { 
    var student = "sarthak"; 
    console.log(student);
}

// console.log(content);
fun();
gun();
console.log(teacher);
console.log(content);