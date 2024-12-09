/*
 1> Unary + Operator : The unary + operator converts its operand to Number type.
                       ex: +"10" = 10.

 2> Unary - Operator : The unary - operator converts its operand to Number type and then negates it. 
                       Negating +0 produces -0, and negating -0 produces +0.
                       ex : -"10" = -10.

 3> ToBoolean(argument) :

 -> Argument type   --->   Result

 1> undefined  -->  Return false
 2> Null       -->  Return false
 3> boolean    -->  Return argument
 4> Number     -->  if arg is +0, -0 or NaN, return false, otherwise return true.
 5> String     -->  If String is empty string(""), return false otherwise return true.
 6> symbol     -->  return true.
 7> object     -->  Return true.

 Note : Undefined, null, +0, -0, NaN, ""(empty string), false ->  These are falsy value remaining are truthy value.
        ex : -30, 35, "raj" etc. are truthy value.

4> Logical Not Operator(!) : 
   -> If value is true, return false.
   -> else return true.

 */

// console.log(+"10");
// console.log(-"10");

// console.log(!true);
// console.log(!false);

// let x = 10;
// console.log(!x);

// let y = undefined;
// console.log(!y);

// if(undefined) { 
//    console.log("This should be printed");
// }

/*
 1> Abstract equality comparision (x == y):
 ---------------------------------------------

 a> type of x and y are checked :
    -> If type of (x) == type of (y) then, Return the result of performing Strict Equality Comparison x === y.
 b> If x is null and y is undefined, return true.
 c> If x is undefined and y is null, return true.
 d> If Type(x) is Number and Type(y) is String, return the result of the comparison x == ToNumber(y).
 e> If Type(x) is String and Type(y) is Number, return the result of the comparison ToNumber(x) == y.
 f> If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.
 g> If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).
 h> If Type(x) is either String, Number, or Symbol and Type(y) is Object, return the result of 
    the comparison x == ToPrimitive(y).
 i> If Type(x) is Object and Type(y) is either String, Number, or Symbol, return the result of 
    the comparison ToPrimitive(x) == y.
 j> If none of the above rule is true, Return false.


 2> Strict equality comparision (x === y) :
 ----------------------------------------------
 
 a> If Type(x) is different from Type(y), return false.
 b> If type(x) is number then,
    1> If x is NaN, return false.
    2> If y is NaN, return false.
    3> If x is the same Number value as y, return true.
    4> If x is +0 and y is -0, return true.
    5> If x is -0 and y is +0, return true.
    6> Return false.
 c> If type of x is not number then, Return SameValueNonNumber(x, y).

 3> SameValueNonNumber (x, y) :  Where Neither x nor y are Number values, produces true or false.
 ------------------------------------

 1> Assert: Type(x) is not Number.
 2> Assert: Type(x) is the same as Type(y).
 3> If Type(x) is Undefined, return true.
 4> If Type(x) is Null, return true.
 5> If Type(x) is String, then
    a> If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), 
       return true; otherwise, return false.
 6> If Type(x) is Boolean, then
    a> If x and y are both true or both false, return true; otherwise, return false.
 7> If Type(x) is Symbol, then
    a> If x and y are both the same Symbol value, return true; otherwise, return false.
 8> If x and y are the same Object value, return true. Otherwise, return false.
    here, same object means - same object in value and memory location.

 */


//1> Abstract equality comparision :
// console.log(null == undefined);
// console.log(undefined == null);
// console.log(12 == "12");
// console.log(10 == "15");
// console.log("25" == 25);
// console.log("25" == 30);
// console.log(false == "0");
// console.log(null == false);

//2>  Strict equality comparision :

// console.log(0 === 0);
// console.log(0 === -0);
// console.log(-0 === 0);
// console.log(NaN === NaN);
// console.log("NaN" === NaN);

// let obj = {
//    x: 10,
//    valueOf() {
//       return 100;
//    }
// };

// console.log(99 == obj);
// console.log(100 == obj);

// 3> Same value nonNumber(x, y) :

// console.log(undefined === undefined);
// console.log(null === null);

// console.log("raj kamal" === "raj kamal");
// console.log("raj kamal" === "rajkamal");

// console.log(true === true);
// console.log(false === false);
// console.log(true === false);

let obj1 = {x : 10};
let obj2 = {x : 10};
let obj3 = {y : 10};
console.log(obj1 === obj2); // diff memory location
console.log(obj1 === obj3); // diff memory location.
console.log(obj1 === obj1); // same memory location.

console.log({x : 10} === {x : 10}); // diff memory location

