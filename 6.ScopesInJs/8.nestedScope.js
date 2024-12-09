// function fun() { // fun -> global scope
//     var x = 10; // x -> scope of fun
//     function gun() { // gun -> created in scope of fun
//         var y = 20; // y -> scope of gun
//         console.log(x);
//         console.log(y);
//     }
//     console.log(x);
//     console.log(y);
// }
// fun();

/*
 * parsing phase :

   1> Do you know fun() in global scope -> no => hence function fun() is created in global scope. 
   2> Go inside fun . i.e scope of fun.
   3> we get formal declaration var x = 10. Now ask that is there any x in scope of fun => no => create variable x in scope of 
      fun.
   4> similarly, create gun in scope of fun.
   5> create variable y in scope of gun.
   6> Now last line will call. i.e : fun();

   7> again go to fun() function.
      -> go to var x = 10;
      -> then gun() function decalaration. nothing will happen bec gun() is not called yet.
      -> console.log(x); it will print 10.
      -> console.log(y); Since there is no 'y' decalared in scope of fun(), it will go out of scope of fun. i.e in global scope
      -> Since there is no 'y' declared in global scope and hence will throw error.

*/

function fun() { // fun -> global scope
    var x = 10; // x -> scope of fun
    function gun() { // gun -> created in scope of fun
        var y = 20; // y -> scope of gun
        console.log(x); // no x in scope of gun -> out scope out : fun -> there is x in fun -> print
        console.log(y);
    }
    gun();
    console.log(x);
    console.log(y);
}
fun();

/*
 * parsing phase :

   1> Do you know fun() in global scope -> no => hence function fun() is created in global scope. 
   2> Go inside fun . i.e scope of fun.
   3> we get formal declaration var x = 10. Now ask that is there any x in scope of fun => no => create variable x in scope of 
      fun.
   4> similarly, create gun in scope of fun.
   5> create variable y in scope of gun.
   6> Now last line will call. i.e : fun();

   7> again go to fun() function.
      -> go to var x = 10;
      -> then gun() function decalaration. nothing will happen bec gun() is not called yet.
      -> gun() function called.
      -> go inside gun() function.
      -> we found varible 'y' in scope of gun();
      -> go to console.log(x). Since there is not 'x' in scope of gun(), go one scope out. i.e in scope of fun.
      -> we found 'x' in scope of fun. Make 'x' autoglobals to declare it in scope of gun().
      -> console.log(x); it will print 10.
      -> console.log(y). Since there is already 'y' in scope of gun(). so it will print 20.
      -> then console.log(x) in scope of fun() will print 10.
      -> console.log(y); Since there is no 'y' decalared in scope of fun(), it will go out of scope of fun. i.e in global scope
      -> Since there is no 'y' declared in global scope and hence will throw error.

*/

/*
 * Note : console.log() is not js features. It is runtime features. runtime features is necessary for the execution of js code.
 */
