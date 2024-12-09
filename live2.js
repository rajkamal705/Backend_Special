/*

 1> ToPrimitive(input, preferred type) :
 ---------------------------------------

 a> primitive : number, string, boolean etc.
 b> non-primitive : object.

 Note : ToPimitive converts its input argument to a non-object type.
 
 1> If type of input is not object, then return input.
 2> If type of input is object. Then, 
    a> If PreferredType is not present, let hint be "default".
    b> Else if PreferredType is hint String, let hint be "string".
    c> Else PreferredType is hint Number, let hint be "number".
    d> 
    e> 
    f> If hint is "default", set hint to "number".
    g> Return OrdinaryToPrimitive(input, hint). // passing input as object.


2> OrdinaryToPrimitive(O, hint) :
------------------------------------
1> Assert: Type(O) is Object.
2> Assert: Type(hint) is String and its value is either "string" or "number". i.e either "raj" or "705"
3> If hint is "string", then
   let methodNames[] = ["toString", "valueOf"] 
4> else 
   let methodNames[] = ["valueOf", "toString"] 
5> Run for each loop on array methodNames[] :
   for(String name : methodNames) {
    a> let method = Get(obj, name);
    b> If method is callable, then
       1> Let result = Call(method, O) -> storing result in result varible.
       2> If Type(result) is not Object, return result.
   }

6> throw a Type error exception.

 */

// let obj = {};
// console.log(obj.toString());
// console.log(typeof(obj.toString()));

// Note : every object has a toString() fun already defined inside.
// by default gives [object, object].

// let obj = {
//     toString() {
//         return "let's learn js";
//     }
// }
// console.log(obj.toString());

// Note : by default valueOf() fun return the same object.
// let obj = {x : 10};
// console.log(obj.valueOf());

// override
// let obj = {
//     x: 10,
//     valueOf() {
//         return 10;
//     }
// }
// console.log(obj.valueOf());


// let obj1 = {
//     x : 9, 
//     y : 8
// }
// console.log(100 - obj1);

// let obj2 = {
//     x : 7,
//     valueOf() {
//         return 99;
//     }
// }
// console.log(100 - obj2);

// let obj3 = {
//     x : 8, 
//     toString() {
//         return "88";
//     }
// }
// console.log(90 - obj3);

// let obj4 = {
//     x : 7, 
//     toString() {
//         return {};
//     }
// }

// console.log(100 - obj4); 
// type error exception.

/*

* The Addition Operator : 
  The addition operator either performs string concatenation or numeric addition.

  1> lref = left Operand
     rref = right Operand

     lval = GetValue(lref)
     rval = GetValue(rref)

  2> Try to convert both the operand to ToPrimitive() :
     lprim = ToPrimitive(lval)
     rprim = ToPrimitive(rval)
  3> If Type(lprim) is String or Type(rprim) is String, then convert lprim and rprim to ToString() and then concate them.
     a> Let lstr = ToString(lprim).
     b> Let rstr = ToString(rprim).
     c> Return the string-concatenation of lstr and rstr.
  4> If none of them is String. i.e lprim and rprim none is string then, 
     convert both into ToNumber and perform '+' operation.
     a> Let lnum = ToNumber(lprim).
     b> Let rnum = ToNumber(rprim).
     c> Return the result of applying the addition operation to lnum and rnum. i.e return lnum + rnum.

 */

let obj = {};
console.log("18" + obj);
console.log(18 + obj);

console.log("18" - obj);
console.log(18 - obj);



     

