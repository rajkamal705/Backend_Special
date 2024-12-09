console.log("hello world");
setTimeout(function exec() {
    console.log("Timer done");

    setTimeout(function exec() {
        console.log("woww, another timer");
    }, 10);

}, 0);

for(let i = 0; i < 1000; i++) {
    // some piece of code.
}
console.log("End");