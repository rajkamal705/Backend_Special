function blocking_for_loop() {
    for(let i = 0; i < 10000000000; i++) {
        // something.
    }
}
console.log("start of the file");

setTimeout(function timer1() {
    console.log("timer1 is done");
}, 0);

blocking_for_loop();

let x = Promise.resolve("sanket promise-1");
x.then(
    function processPromise(value) {
        console.log("whose promise ? : ", value);
        blocking_for_loop();
    }
)

let y = Promise.resolve("sanket promise-2");
y.then(
    function processPromise(value) {
        console.log("whose promise ? : ", value);
        setTimeout(function () {
            console.log("okk done");
        }, 0);
    }
)

let z = Promise.resolve("sanket promise-3");
z.then(
    function processPromise(value) {
        console.log("whose promise ? : ", value);
    }
)

setTimeout(function timer2() {
    console.log("timer2 is done");
}, 0);

console.log("end of the file");


/**
 -> blocking_for_loop.
 -> print : start of the file.
 -> set timer1 of 0ms in runtime.
 -> blocking_for_loop() called. 
 -> During the execution of blocking_for_loop(), timer1 is done and sent to callback queue.
 -> promise resolved successfully and stored in x, with value = "sanket-promise-1" and state = fulfilled. onfulfilled[] and
    onrejection[] array is still empty.
 -> x.then() function will register processPromise() fun in onfulfillment[] array.
 -> Since it is resolved promise, pushed inside microtask queue as pp1.

 -> Another resolved promise is created and stored in y, with value= "sanket promise-2" and state = fulfilled. 
    onfulfillment[] and onrejection[] array is empty now.
 -> y.then() fun will register processPromise() callbacks in onfulfillment[] array.
 -> Since it is resolved promise, pushed inside microtask queue as pp2

 Note: event loop is still checking: is call stack empty-> yes, is there any global piece of code left -> yes.

 -> Another resolved promise is created and stored in z, with value= "sanket promise-3" and state = fulfilled. 
    onfulfillment[] and onrejection[] array is empty now.
 -> z.then() fun will register processPromise() callbacks in onfulfillment[] array.
 -> Since it is resolved promise, pushed inside microtask queue as pp3

 _____________________
|pp1 | pp2 | pp3          => microtask queue.
|____|_____|__________

 -> timer2 of 0ms started in runtime.
 -> print: end of file.
 -> While printing the "end of file" -> timer2 is done -> pushed to callback queue.
 -> Everything in global piece of code is done.

 -> NOw event loop will check is call stack empty -> yes. Is there any callbacks in microtask queue -> yes -> pushed to 
    callstack. 
    print: whose Promise sanket promise-1.
    and start blocking for loop for 5sec.
 -> Now event loop will check, is call stack empty -> No -> so every thing will be in waiting state.
 -> suppose blocking piece of code completed it's execution after 5sec. erase from call stack.
 -> Nothing left in pp1 so erase from call-stack.

 -> Now, call-stack is empty and no global piece of code left. Pushed pp2 in call-stack.
 -> print : whose Promise sanket promise-2.
 -> Now start a timer3 of 0sec in runtime.
 -> Now pp2 is done -> erase from callstack.
 -> timer3 is done -> register in callback queue.

 -> Now call-stack is empty and no global piece of code left for execution.
 -> push pp3 in call-stack.
 -> print: whose promise: sanket promise 3.
 -> erase from call-stack.

 -> Now event loop will check that is call-stack empty -> yes, is there any global piece of code left -> no.
 -> Now bring timer1 in call-stack.
 -> print: timer-1 is done.
 -> erase from callstack.

 -> same for timer2 and timer3
 -> print: timer-2 is done.
 -> print: okk done.

 */