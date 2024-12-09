"use strict";
{
    function fun() {
        return "123";
    }
    console.log(fun); // available inside scope.
}
console.log(fun);

/*
 * NOTE : If we are using strict mode and we are creating fun inside block, It will just accessible inside block.
          There is no scope of fun outside the block.
 */