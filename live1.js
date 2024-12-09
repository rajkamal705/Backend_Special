/*

console.log(2 + 3);
console.log(2 + NaN); 
console.log(2 + "3");
console.log(1 - "1");

Note: The addition operator (+) either performs string concatenation or numeric addition.


This is happening due to coercion or type conversion.

Coercion : 1> explicit : manually done by us.
           2> implicit : The lang based on certain rules done it automatically.

-> Abstract Operations : work internally and automatically(hidden to users).
-> Some of the abstract operations are : 1> ToPrimitive()
                                         2> ToBoolean()
                                         3> ToNumber()
                                         4> ToInteger()
                                            etc...

*/   

/*
1> ToNumber(arg) : The abstract operations ToNumber converts arg to a value of type number.

argument type vs result:
1> undefined  ---> return NaN
2> Null       ---> return +0.
3> Boolean    ---> if arg is true return 1 else return 0.
4> Number     ---> return arg(no conversion)
5> String     ---> next page
6> Symbol     ---> Throw a type error exception
7> object     ---> 1> let primval = ToPrimitive(arg, hint as Number)
                   2> Return ToNumber(primval) -> converting primval to ToNumber().


2> The subtraction operator(-) :

Note : The subtraction operator try to convert both the operands into ToNumber().

-> Let two variable is given lval and rval.
-> lref = left operand and rref = right operand.

let lval = getValue(lref).
let rval = getValue(rref).

let lnum = ToNumber(lval).
let rnum = ToNumber(rval).

 */

console.log(10 - null); // 10-0 = 10
console.log(10 - undefined); // 10-NaN
console.log(2-9);

console.log(1 - "453"); // 1 - 453 = -452.
console.log(1 - "7raj05"); // 1 - NaN = NaN

// H.w 
console.log(1 - "0xa"); // ans = -9 -> why?



