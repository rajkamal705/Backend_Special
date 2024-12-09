/*
 * Higher Order function : There are function which take other function as argument. This is called higher order function.
 */

function f(x, fn) {
    // x -> num, fn -> function
    console.log(x); // it will print x
    console.log(fn); // it will print the function fn.
    fn(); // this will call exec() function and print the text inside.

}

f(10, function exec() {
    console.log("I am an expression passed to a hof");
});

let arr = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3]; // unsorted array
arr.sort(); // it sort the given array
console.log(arr);
/*
 * Expectation : This might arrange elements in increasing order.
 * the default implementation of arr.sort() in js will sort array in lexicographical order(dictionary order).
 * 0 -> A
 * 1 -> B
 * 2 -> C
 * 3 -> D
 * 4 -> E
 * 5 -> F
 * 6 -> G
 * 7 -> H
 * 8 -> I
 * 9 -> J
 * ....
 * [B, BA, J, BAA, BAAA, BB, BC, BD, BE, C, D] ->  If we arrange it according to dictionary, then we get as :
 * [B, BA, BAA, BAAAA, BB, BC, BD ...]
 */

let b = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3];
// sort b in increasing order.
// sort() is a higher order function means it will take other fun as argument.
b.sort(function (a, b) {
    // sort function takes a comparator function as argument.
    // It make sure that instead of comparing two value lexicographically, it start comparing two value numerically. 
    // if you are taking arg 'a' and 'b' then on what parameter you are comparing it.

    return a - b; 
    // If a < b -> a-b will be negative. If comparator fun gives -ve, then 'a' is placed before 'b' and hence a will be printed first.
    // it a > b -> a-b will be positive. If comparator fun gives +ve, then 'b' is placed before 'a' and hence 'b' will be printed first.

}); // higher order function.

console.log(b); // every thing will be printed in increasing order.

let c = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3];
c.sort(function cmp(a, b) { 
    return a < b;
});

console.log(c); // it will not print in increasing order. why?
/*
 -> bec (a < b) will give boolean value. i.e either true or false. 
 -> true -> 1, false -> 0. It will always be either 0 or 1. It will never be -ve. that's why it will not sort.
 */

 /**
  * Sorting means arranging elements in some order. This is nothing but a permuntations.
  * Arranging elements in some permuntations is of n factorial(n!) time complexity. -> worst case.
  */

