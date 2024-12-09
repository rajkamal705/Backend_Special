console.log("hello world");
setTimeout(function exec() {
    console.log("Timer done");
}, 0);

for(let i = 0; i < 10000000000; i++) {
    // some piece of code.
}
console.log("End");

/**
 * Sync piece of code is non blocking . Exec() function can't block the normal(or native) js code even though there is timer of 
   very long time.

 * Process of execution of above code :
   1> print "hello world".
   2> setTimeout() fun called -> Timer of 0 ms invoked in runtime. Just after timer complete, exec() function has been sent
      to event queue.
   3> Now, it will wait for complete execution of for loop.
   4> Now print "End".
   5> Now, event loop will check that, is there any function in call stack -> no
      Is there any global code left for execution -> no
      then, exec() function will be removed from event queue and sent to call stack.
      -> print "Timer done".
      -> erase exec() from call stack.
 */

 /* 
  => Note : Only native js code can break the flow of code, ex : for loop.
     async code can't break the flow of normal js code.
  */