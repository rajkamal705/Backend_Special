// two ways to write same program to understand use of 'var'

// way 1 :
function fun(x) {
    let i; // var i;
    if(x % 2 == 0) {
        i = 0;
    } else {
        i = 1;
    }
}
 // way 2 :
function gun(x) {
    if(x % 2 == 0) {
        var i = 0;
    } else {
        var i = 1;
    }
    console.log(i);
}

gun(10);