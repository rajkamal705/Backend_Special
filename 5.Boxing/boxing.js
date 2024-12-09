// 1.toString(); // error
// "abc".toString(); // 'abc'
// undefined.toString(); // error

// Boxing : Boxing says that, primitive js types get converted to non-primitive, if we try to apply boxing.
(1).toString();

/*
Note : 
1> Boxing is wrapping a primitive value in an object.
2> When you treat a primitive type like an object.
3> Auto-boxing is essential bec it enables us to access standard library methods.
   ex : let x = 10;
        console.log(x.toString());
4> We can apply boxing manually as well. called as manual boxing.
   ex : console.log((10).toString());
*/

/*
 Q> Even though string is primitive datatypes, why there is .length() and .toString() fun available ?
 ans -> boxing : When we try to treat primitive as an object, js automatically wrap it inside object.
 */