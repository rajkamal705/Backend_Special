function fetchData(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("started downloading from", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("download completed");
            resolve(data);
        }, 7000);
    });
}

console.log("start..");
let promiseObj = fetchData("abcdefghi");
promiseObj.then(
    function A(value) {
        console.log("value is", value);
    }
);

console.log("end..");

/**
 -> There is call-stack, event loop, callbacks queue, microtask queue and runtime(for timer).
 -> print - start.
 -> call fetchData().
 -> create a new promise object -> call executor callback to create a new promise object.
 -> print: started downloading from abcdefghi. 
 -> start timer of 7sec in runtime.
 -> executor fun completed. so, a new promise object is created with value = undefined, state = pending, and onfulfillment[]
    and onrejection[] array is empty.
 -> promiseObj.then() => .then() will help in registering the fulfillment handler or rejection handler.
 -> Since there is only one function as callback in .then(), so this function will act as fulfillment handler.
    Here only fulfill handler is registered. There is no rejection handler registered in onrejection[] array.
    Register function A() in onfulfillment[] array as onfulfillment[A()].
 -> Behind the scene timer is running.
 -> print: end.
 -> When timer ended -> processDownloading() callback will be pushed to callback queue.
 -> Here event loop will check that, is callstack empty: yes, is there any global piece of code left: No, is there any callbacks
    in microtask queue : NO -> Then it will take function from callback queue and send to callstack for execution.
 -> it will create data = "dummy data".
 -> print: download completed.
 -> Then resolve(data) will make the state of promise from pending to fulfilled with value = dummy data.
 -> Now, fun A() from onfulfillment[A()] array will be send to microtask queue.

    Note: once the promise object changes it's state from pending to fulfilled or rejected, then only we will be able to send
          callbacks from onfulfillment[] 'or' onRejection[] array to microtask queue. 
 -> Is anything left in processDownloading() fun : No.
 -> erase from callstack.

 -> Is call stack empty : yes, is there any global piece of code left : No.
 -> Is there any callback in microtask queue: yes -> send fun A() to callstack.
 -> print: value is dummydata.
 
 */