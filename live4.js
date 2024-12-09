/*
 1> ToString(argument) :
 -> The abstract operation ToString converts argument to a value of type String.

-> argument-type   --->   result

 1> undefined   --> return "undefined" (note that undefined is enclosed in double quotes means string of undefined).
 2> null        --> return "null"
 3> boolean     --> if arg is true, return "true" else return "false".
 4> number      --> Return NumberToString(argument). // see ecmascript.
 5> string      --> return argument (means return the same argument).
 6> Symbol      --> Throw a type error exception.
 7> Object      --> a> let primval = ToPrimitive(arg, hint String).
                    b> Return ToString(primval).

 */ 

// Few Corner Cases :

// case 1 :
console.log("" + 0); // 0 -> "0".
console.log("" + (-0)); // -0 -> "0".

// case 2 :
console.log("" + []); // empty array gets converted to empty string.
console.log("" + {}); // empty object gets converted to string [object, object].
console.log("" + [1, 2, 3]); // remove square bracket and concate with empty string.
console.log("" + [null, undefined]); // ignore square bracket, null and undefined and concated with comma(,).
console.log("" + [1, 2, null, 4]); // same as prev.

// case 3: ToNumber:
console.log(0 - "010"); // "010" is in decimal form i.e = 10.
console.log(0 - 010); // 010 is in octal form. (Normal num followed by 0 -> octal form).
console.log(0 - "0xb"); // hexadecimal 
console.log(0 - 0xb); 
console.log(0 - []); // ignore bracket or taken bracket as 0.
console.log(1 - []); 
console.log([] - 1); // empty array become 0.
console.log([""] - 1); // empty array with single element of string string type becomes 0.
console.log(["0"] - 1);

console.log([6] - 1); // array get converted in to 6.

// Note: (==) does coercion but (===) doesn't.
let obj = {x:10, y:20};
let num = 10;
console.log("my roll number is " + 52);
console.log(`my object is ${num}`); // num is converted in to string "10" and replaced with placeholder.
console.log(`my object is ${obj}`); // obj is getting converted into string -> the default toString will give [object, object].
console.log("my object is " + obj); // to string will we called and return [object, object] as string.

console.log(1 < 2 < 3); // (1 < 2) = true => 1 < 3 = true.
console.log(3 > 2 > 1); // (3 > 2) = true => 1 > 1 = false.

// explicit conversion :
console.log(Boolean("")); // empty string is falsy value.
console.log(String(123)); // 123 of type string will be printed. i.e "123".

// NaN :

console.log(Number("123")); // 123
console.log(Number("abcd")); //NaN
console.log(Number("0xa")); // 10 -> hexadecimal to number

// let x = 123;
// console.log(x == NaN);
// console.log(isNaN(x));
// console.log(isNaN("sanket")); 
// isNaN convert incoming input to a number.
// console.log(Number.isNaN("sanket"));
 // Number.isNaN() don't do any type conversion.

console.log("new concept :")

// let x = NaN; 
// check for 12, +0, -0 etc.
// if(typeof(x) == 'number' && x != NaN) {
//     console.log(true);
// }

// let x = "abc"; 
// check for {}, {x : 10}, undefined
// if(typeof(x) == 'number' && x != NaN) {
//     console.log(true);
// }

// negativeZero.js

let x = -0;
console.log(x === 0); 
// for x = 0 or x = -0, it will give true.
// how to check x is +0 or -0 -> using function Object.is().

console.log(Object.is(x, -0));
console.log(Object.is(x, +0));

// * Math.sign(x) function -> to check the sign of particular number.

console.log(Math.sign(-3));
console.log(Math.sign(2));
console.log(Math.sign(-0));
console.log(Math.sign(+0));
console.log(x < 0); // -0 < 0 => false.



  

