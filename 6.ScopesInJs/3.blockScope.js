/*
 * Block scope : The scope created with a pair of curly braces.
                ->Block scope only used 'let' and 'const' keyword for variable declaration.(not var).
 */

// {
//     var x = 10;
// }
// console.log(x);

// if(true) {
//     var x = 10;
// }
// console.log(x);

// if(false) {
//     var x = 10;
// }
// console.log(x);

// let is used for block scope variable declaration.
{
    let x = 10;
}
console.log(x);