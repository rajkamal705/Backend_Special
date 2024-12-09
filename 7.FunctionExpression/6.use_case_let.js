// Use case of let:
/**
 * use 1 : For running loop.
 * use 2 : When we don't want it access outside the block. ex: swap of two number.
 */

// ex 1:
function fun() {
    for(var i = 0; i < 10; i++) { // use let instead
        // do something
    }
    console.log(i); // even though there is no use case of 'i' other than for loop, it's accessible outside the loop. 
}
fun();

// ex 2: 
function process(x, y) {
    if(x > y) {
        // swap:
        // var temp = x; // even though this temp has no use outside the block, it is accessible outside the block bec of 'var'.
        let temp = x;
        x = y;
        y = temp;
    }
    return  y-x; 
}
fun();

/**
 * 
 */