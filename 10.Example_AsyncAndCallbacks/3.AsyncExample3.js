console.log("hello world");
for(i = 0; i < 3; i++) {
    setTimeout(function exec() {
        console.log("Timer done");
    }, 10);
}

for(let i = 0; i < 10000000000; i++) {
    // some piece of code.
}
console.log("End");

/**
 * Process of exec of code :
   1> print "hello world".
   2> Now, Three times loop will run and hence three(3) callback function of timer of 10 ms will be invoked in runtime.
   3> After timer completed, function will be sent in event Queue one by one.
   4> Now, Wait for complete execution of for loop.
   5> print "End".
   6> Now event loop will check that is there any function left in call stack -> no
      -> Is there any global code left for execution -> no
   7> Now, function waiting in event queue will be pushed to call stack one by one and complete it's execution.
 */

 /**
  * Console.log() is sync in nature provided by runtime.
  * Console.log(), is not js native part of code. This feature is provided by runtime and handle by runtime.
  * Q> How runtime handle this?
   -> let's assume that node is also a runtime.
   -> In vs code, js run in node runtime.
   -> How, console.log() will behave depends on runtime. If runtime give sync api, it will behave as sync else it will behave as
      asynchrounous.
  */
