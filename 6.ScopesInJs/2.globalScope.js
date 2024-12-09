// let name = "sanket";
// function fun() {
//     console.log(name);
// }
// fun();
// console.log(name);

/*
 -> 'let' and 'var' decide a lot of things in scope of variable declaration.
 */

 console.log(name);
//  let name = "sanket"; 
 var name = "sanket";
 function fun() {
    console.log(name);
 }
 fun();
 console.log(name);

 /*
  -> Function() creates a scope.
     It creates a range of visibility.
     It creates a context of execution.
  -> When you create a function, you create a scope.

  3> Block scope : The scope created with a pair of curly braces.
                   Block scope only used let and const keyword for variable declaration.(not var).

  Note : The var is only available for declaring variable in function scope and global scope.
  */

//global : bec of var
//   {
//    var x = 1;
//   }
//   console.log(x);

 //   block scope bec of let and const.
//   {
//    const y = 5;
//    let z = 1;
//   }
//   console.log(z);

// var :
var a = 1;
if(a == 1) {
   var a = 2;
   console.log(a);
}
console.log(a);

// let :
let b = 1;
if(b == 1) {
   let b = 2;
   console.log(b);
}
console.log(b);

  

