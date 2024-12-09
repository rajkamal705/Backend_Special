/**
 * Every browser has different runtime environment.
 * SetInterval() function will behave different in different runtime environment.
 * It behave as number on chrome, but it may behave as object on other environment.
 */

let count = 0;
let y = setInterval(function exec() {
    count++;
    console.log(count);
    if(count > 15) {
        clearInterval(y);
    }
}, 2000);

/**
 * It will print up to 16 bec, it makes the count++, then check that 16 is greater than 15 or not.
 */