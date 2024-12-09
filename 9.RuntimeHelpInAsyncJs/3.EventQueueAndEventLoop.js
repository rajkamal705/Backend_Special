// native js code:
function timeConsumingByLoop() {
    console.log("loop starts");
    for(let i = 0; i < 10000000000; i++) {
        // some task
    }
    console.log("loop end");
}

function timeConsumingByRunTimeFeature() {
    console.log("starting timer");
    setTimeout(function exec() { // runtime features.
        console.log("complete the timer");
    }, 5000);
}

console.log("hii");

timeConsumingByLoop();
timeConsumingByRunTimeFeature();
timeConsumingByLoop();

console.log("bye");

/**
 * PROCESS OF EXECUTION : 
  -> When js runs a code, there are lot of things going to happen in memory. There is call stack, There is heap memory and 
     There are some set of queues(fifo) that are given to js by runtime.

  1> timeConsumingByLoop() is going to execute native js piece of code.
     since we are making function call, so in call stack a new entry will be made as "timeConsumingByLoop".
     -> print 'loop start' and wait for complete execution of loop. (native js code).
     -> js known piece of code is sync in nature and hence loop is waiting for it's complete execution.
     -> Now print 'loop end'. Since one function is completely done, erase out from call stack.

  2> Now, timeConsumingByRunTimeFeature() function is called.
    -> making function call on timeConsumingByRunTimeFeature(), so it will created in call stack.
    -> Go inside fun. It will print 'starting timer', and went to execute setTimeout funtion. 
    -> since setTimeout is not native feature of js(not available in ecmascript), This feature is given by runtime.
    -> what js will do is, It is going to notify the runtime that hey runtime, i got a instructor to start a timer, so can 
       you please start a timer of 5 sec. 
       just after notifying runtime, js comeback to it's native js code.
       behind the scene a timer is running in runtime (separate to js). It's will not break the flow of normal(or native) js code.
       Function call of timeConsumingByRunTimeFeature() is ended.
       Erase out from call stack.

  3> Another funtion call of timeConsumingByLoop().
     -> created in call stack.
     -> Timer is still running behind the scene.
     -> print "loop start"
     -> Waiting for complete execution of for loop.
     -> loop execution completed.
     -> print "loop end".
     -> function call ended. erase out from call stack.

  4> print "bye"
  5> Timer running behind the scene in runtime ended.
  6> print "completed the timer".
 */

  /**
   * very important : 
     -> We will never pause synchronous piece of code execution in any situation.
     -> Js gives more priority to sync js code.

     ex : suppose for loop will complete it's execution in 10 sec. And setTimeout timer is set as 5sec.
     -> So, just after completion of 5sec, can we pause the execution of loop and print the callback timer first -> Not at all.
     -> we can't pause sync js code in any situation.
     -> Js gives more priority to sync code(or native feature of js) instead of runtime features.

     Q> What will happen then ?
     ans -> Js will say that hey runtime, the timer is done, but i will not stop my execution for you. What you can do is, 
            you can send your callbacks inside event queue and wait for my execution to be completed.
         -> After my execution completed, you can print your content inside timer function.
   */

  /**
   * Apart from event queue, there is event loop as well. This event loop is like infinite loop. 
   -> What this event loop does is, It keeps on checking that the call stack is empty or not and no global code is left.
   -> event loop -> Infinite number of times check.

   => Whatever number of call backs in event queue, It will not execute immediately. It will only execute if call stack is
      empty and there is no global piece of code is left to execute.

   PROCESS :
   Event loop checks that : 
   1> Is call stack empty- yes. 
   2> Is there any global piece of code - no (all executed).
   3> Now It will pick one callback function from event queue and push it to the call stack.
   4> Now stack starts it's execution.
   5> If there is more callbacks in event queue, They will keep on waiting.
   6> After complete execution of call back function, It will erase out from call stack. And 2nd callback fun will be pushed
      in the call stack. 
      This process will continue until event queue is empty.

   */

   /**
    * Note : Event loop is an infinite loop which keeps on checking that is call stack empty or not(or global piece of code is 
             done or not).
    */