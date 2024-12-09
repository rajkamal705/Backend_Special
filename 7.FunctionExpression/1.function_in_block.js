{
    function fun() { // fun is created in block scope.
        return "123";
    }
}
console.log(fun);
/*
 * Note : If we are not using any strict mode, and function is created inside block, then it will be accessible outside the 
          block.
 */