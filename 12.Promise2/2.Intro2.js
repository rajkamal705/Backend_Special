/*
NOte:  Use browser console to learn about these concept.

-> Timer Id for setTimeout() fun
*/

// let x = setTimeout(function () {
//     console.log("hii");
// }, 3000);
// console.log(x);

function createPromise() {
    return new Promise(function exec(resolve, reject) {
        let x = setTimeout(function giveValue() {
            return 2;
        }, 3000);
        // here x is timer id.
        // timer id of setTimeout will be immediately return to 'x' before starting the timer.Then after, timer of 3 sec will be set at runtime.

        if(x % 2 === 0) {
            resolve("successfull");
        } else {
            reject("rejected");
        }
    });
}

let y = createPromise();
console.log(y);
