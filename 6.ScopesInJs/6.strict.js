/*
 -> Strict mode disabled making autoglobals.
 -> In strict mode few of the things are restricted that means not available. ex : autoglobals.
 -> JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript.
 -> There may be some old browser which might not support strict mode. so, don't rely purely on strict mode. browser may not 
    support strict mode in some cases.
 
 * Strict mode makes several changes to normal JavaScript semantics:

   1> Eliminates some JavaScript silent errors by changing them to throw errors.
      -> it means that js sometimes hide errors, but bec of strict mode it will show error.
   2> Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be 
      made to run faster than identical code that's not strict mode.
   3> Prohibits some syntax likely to be defined in future versions of ECMAScript.

 */

/*
 * Strict mode use : 
   -> To invoke strict mode for an entire script, put the exact statement "use strict"; (or 'use strict';) before any other 
      statements.
   
 */

// "use strict";
// const v = "Hi! I'm a strict mode script!";
// console.log(v);

/*
 * strict mode for functions :
   -> Likewise, to invoke strict mode for a function, put the exact statement "use strict"; (or 'use strict';) in the function's 
      body before any other statements.
 */

      // function myStrictFunction() {
      //   // Function-level strict mode syntax
      //   "use strict";
      //   function nested() {
      //     return "And so am I!";
      //   }
      //   return `Hi! I'm a strict mode function! ${nested()}`;
      // }

      // function myNotStrictFunction() {
      //   return "I'm not strict.";
      // }    
      
      // console.log(myStrictFunction());
      // console.log(myNotStrictFunction());

// Strict mode disabled making autoglobals : 

// "use strict"; // we can't create autoglobals for content.
// var teacher = "sanket"; 
// function fun() { 
//     var teacher = "pulkit"; 
//     content = "js"; 
//     console.log(teacher);
//     console.log(content);
// }

// function gun() { 
//     var student = "sarthak"; 
//     console.log(student);
// }

// console.log(content);
// fun();
// gun();
// console.log(teacher);
// console.log(content);

/*
 -> If you will try to delete key which is not deletable, then in strict mode it will throw an error. 
 */

// Duplicate property names used to be considered a SyntaxError in strict mode.
// With the introduction of computed property names, making duplication possible at runtime, this restriction was removed in 2015.

"use strict";
const o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015
console.log(o);