console.log("Hii");
setTimeout(function () {
    console.log("time done")
}, 5000);
console.log("bye");

/**
 * Here, it will not wait for setTimeout function to complete the execution and will print the last line. then setTimeout 
   function is executed. bec setTimeout is not native feature of js.
 */