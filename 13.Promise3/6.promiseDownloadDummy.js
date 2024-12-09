function download(url) {
    console.log("started downloading content from ", url);
    return new Promise(function exec(resolve, reject) {
        setTimeout(function p() {
            console.log("completed downloading data in 5sec");
            const content = "abcdef";
            resolve(content);
            // resolve(content);
        }, 5000);
    })
}

x = download("www.xyz.com");
x.then(
    function fulFillHandler(value) {
        console.log("content downloaded is : 1 ", value);
    }
);

x.then(
    function fulFillHandler(value) {
        console.log("content downloaded is : 2 ", value);
    }
);

/**
 * Here, we are not giving access of our callbacks to third party function.
 * Even on calling resolve() again and again, it is going to print only once.
 * Even though it will not call once, we can see the promise in pending state.
 * We are not giving control of our call back fun to third party.
 * This is how promises control problem of inversion of control.
 */