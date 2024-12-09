// console.log("hi");
// console.lo("hello");
// console.log("bye");

/*
 => There is no syntax error in first code.
 -> console is actully an object which is trying to access log function.
 -> since, there is no formal declaration. so, during parsing phase(1st phase), it read the whole code and will not show error.
 -> during execution phase it will print first line and in second line it found that there is no lo() fun available that
    console is trying to access. so it will show error during execution phase.
 */

// console.log("hi");
// console..log("hello");
// console.log("bye");

/*
 * Here, During parsing it will show syntax error and will throw error before going to execution phase.
 * parsing phase also check syntatical error. and hence showing error bec of console..log() fun.
 */

// console.log("hi");
// console.system.log("hello");
// console.log("bye");

/* it will no show error as like first case. */
/* Note : js always works in two phase: 1> parsing 2> Execution. */

console.log("hi");
console.log("bye");
console.log(10..toString()); 
// here 10 is primitive and hence, this double dot is valid js syntax and hence will not show error. This is the concept of 
// boxing. Boxing converts primitive to non primitive.
// console.log(10...toString()); // 3 dot is not valid syntax and hence will show error.

// console.log((5).toString(2)); 
// To apply boxing either wrap primitive value inside bracket () or use double dot instead.

/*
 * console is an object, and applying boxing on object has no meaning. bec the main work of boxing is to read primitive as 
   non primitive. But there is no meaning of converting non primitive to non primitive and hence console..log("hello") will
   throw error.
 */
// console.log(5..toString(2)); // double dot is used to apply boxing.

// go on google to know more about. stackoverflow
// read about tokenizer.

let s = "abc#def#ghi#jkl";
console.log(s.split("#"));


