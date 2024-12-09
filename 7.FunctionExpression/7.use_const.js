/**
 * MDN DOCS :
 
 -> The const declaration creates block-scoped constants, much like variables declared using the let keyword. 
 -> The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be    
    redeclared (i.e. through a variable declaration). 
 -> However, if a constant is an object or array its properties or items can be updated or removed.

 */

//  ex 1: 
// const x = 10;
// x = 9; // reassignment of const variable is not allowed and hence will throw an error.
// console.log(x);

// ex 2 :
const obj = {x : 10};
obj.x = 9;
console.log(obj.x); // it will not show an error bec if a constant is an object or array it's properties or items can be updated.

obj.y = 20; // adding new property to an object.
console.log(obj.y);

// obj = {}; // it will throw an error. we can update object with const but we can't create new object.

/**
 * Const doesn't allow reassignment of variable. It allow upadate of object and array only. Update and reassignment is different.
 */

// const z; // uninitialised variable is not allowed in const.

// ex : 3
const x = 10;
x.val = 0; // boxing.
console.log(x);
