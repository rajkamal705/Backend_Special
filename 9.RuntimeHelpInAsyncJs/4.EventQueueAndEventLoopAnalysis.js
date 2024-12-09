function timeConsumingByLoop() {
    console.log("loop starts");
    for(let i = 0; i < 10000000000; i++) {
        // some task
    }
    console.log("loop end");
}

function timeConsumingByRunTimeFeature0() {
    console.log("starting timer 0");
    setTimeout(function exec0() {
        console.log("complete the timer-0");
        for(let i = 0; i < 10000000000; i++) {
            // some task
        }
    }, 5000); // 5 sec timer
}

function timeConsumingByRunTimeFeature1() {
    console.log("starting timer 1");
    setTimeout(function exec1() {
        console.log("complete the timer-1");
    }, 0); // 0 sec timer
}

function timeConsumingByRunTimeFeature2() {
    console.log("starting timer 2");
    setTimeout(function exec2() {
        console.log("complete the timer-2");
    }, 200); // 200 ms timer
}

console.log("hii");

timeConsumingByLoop();
timeConsumingByRunTimeFeature0();
timeConsumingByRunTimeFeature1();
timeConsumingByRunTimeFeature2();
timeConsumingByLoop();

console.log("bye");

/**
 * There will be a call stack, There will be an event queue, there will be an event loop and there is one runtime feature.
 * After completing execution of all the native piece of js code, that is there is no function left in call stack and all the
   global piece of code executed. 
 * so, currently there are 3 invoked timer running in runtime.
 * currently, There are three(3) functions in event queue waiting for complete execution of synchronous js code. i.e exec0,
   exec1 and exec2.
 * Since exec1 has timer = 0 ms, so, It will complete it's execution very early and hence, it will send first in event queue and 
   then first in call stack as well.
 * similary, exec2 will be sent in event queue at 2nd number and then exec0 at third number as per timer. and same order will be
   followed while sending in call stack as well.

 */