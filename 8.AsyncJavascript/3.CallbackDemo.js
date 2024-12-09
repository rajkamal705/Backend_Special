setTimeout(function exec() {
    console.log("running after 4000 millisec")
}, 4000);
/* 
 => The function passed as argument is called callback function.
 -> function exec() is passed as argument.
 -> here setTimeOut is hof, and exec() function is callback function.
 -> after 4000 milli sec(or 4 sec), it will print: "running after 4000 millisec".
 */