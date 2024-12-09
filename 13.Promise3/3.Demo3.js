console.log("start of the file");

setTimeout(function timer1() {
    console.log("timer 1 is done");
}, 0);

for(let i = 0; i < 10000000000; i++) {
    //something
}

// function f() {
//     return new Promise(function exec(res, rej) {
//         res("sanket promise");
//     });
// } 
// equivalent code is written below in short.

// sort hand property for resolve promise.
let x = Promise.resolve("Sanket's promise");

x.then(
    function processPromise(value) {
        console.log("whose promise : ", value);
    }
);

setTimeout(function timer2() {
    console.log("timer 2 is done");
}, 0);
console.log("end of the file");

/**
 -> print : start of the file.
 -> timer of 0sec in runtime.
 -> wait for complete execution of loop.
 -> During execution of loop, timer1 is done and send to callback queue.
 -> Promise object is created with value = "Sanket's promise" and state = fulfilled.
 -> .then() will register function processPromise() in onfulfillment[processPromise()] array. NOt immediately executed.
 -> Since, promise is resolved that is in fulfilled state -> send to microtask queue. Not executed bec, global piece of code left.
 -> Event loop will check is call stack empty : yes. Is there any global piece of code left: yes.
 -> timer2 of 0sec in runtime.
 -> print : end of the file.
 -> Timer 0 is done. Send to callback queue.

 -> Event loop checks callstack-> empty and global piece of code left-> NO
 -> ProcessPromise() is send to call stack : execute -> print : whose promise sanket promise -> erase from call stack.
 -> timer1 and timer2 is send to callstack one by one.
 -> print: timer1 is done. 
 -> print: timer2 is done. 
 */

