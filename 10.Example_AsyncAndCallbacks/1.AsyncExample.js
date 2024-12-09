console.log("hello world");
setTimeout(function exec() {
    console.log("Timer done");
}, 0);
console.log("End");

/**
 * How code will work :
   1> print "hello world".
   2> setTimeout() function called -> Timer of 0 ms started in runtime.
   3> print "end" -> sync piece of code(native to js).
   4> Timer of 0 ms will immediately will complete it's execution and hence callback function exec() will sent to event queue.
   5> Now, event loop will check that is there any function left in call stack or is there any global piece of code left.
   4> If no, then exec() function waiting in event queue will be pushed in call stack.
   5> print "Timer done". and funtion exec() will erase out from call stack.
 */