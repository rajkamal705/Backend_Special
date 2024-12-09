/**
 * PROMISES :
   -> Code readibility enhancers.
   -> promises inhance readibility.
   -> It can solve the problem of inversion of control.
   -> In js, promises are special type of objects that get returned immediately when we call them.
   -> Promises act as a placeholder for the data we hope to get back sometime in future.

   ex : let there is a function fetch() which takes url as argument. 
           ex: let x = fetch("http://www.xyz.com").
        -> What this function will do is, it will download the content from that url. 
        -> But downloading is time consuming task. It means we are making time consuming call.
        -> Let assume that fetch() is async in nature coming from runtime. And as we know js is synchronous in nature.
        -> Since fetch() is not native js code, hence js will not wait for it's complete execution and move to execute it's 
           native piece of code.

        -> Assume fetch() is written using promise then, it will immediately return a promise object which will act as a 
           placeholder.
        -> So, this fetch() fun will immediately return promise object inside x. And this promise object is going to act as
           a placeholder for the result.
        -> placeholder is like temporary val.
        -> In these promise objects we can attach the functionality that we want to execute once the future task is done.
        -> Once the future task is done, promises will automatically execute that attached functionality.
 */

 /**
  Q> How we can create a promise?
  Q> How can we consume a promise?

  -> promise means some kind of mutual agreement we make. Promises can break also.

  * so Two situation arises :
  1> may be we fulfill the promise.
  2> may be we don't fullfill the promise.

  */

  /**
   Q> How to create promise?
   ans -> Promise in just a normal js object.
   -> Promise object are native to js. -> this means it is sync in nature.
   -> Creation of promise object is sync in nature.
   -> In js promises are special type of object in js that get returned immediately when we call them.

   ... See documentation of Promise in ecmascript.

   => Any promise object is one of the three mutually exclusive state : fulfilled, rejected and pending.

   * There are 3 states of a promise object
   1> Pending 
   2> FullFilled
   3> Rejected
   
   
   1> Pending : => When we create a new promise object, this is the default state. It represents work in progress.

   Note : The state can migrate from pending to fullfilled or rejected.

   2> Fullfilled : If the operation is completed successfully, In that case the state of promise object will migrate from 
                   pending to fullfilled else it will migrate to rejected.
   3> Rejected state : If operation was not sucessfull, the promise object will migrate from pending to rejected.

   => There is two way to create object in js:
   1> using curly braces having key- value pair inside it.
   ex  : let obj = {x : 10, x : 20};
   2> using 'new' keyword.
   ex : let p = new Promise(fn); -> promise object p is created using promise constructor.


   => we can create promise using Promise() constructor, which takes callback as argument.

   ex : creation of promise :
   
   => new promise(f)
   -> here promise is a constructor and f is callback that this constructor expects


   let p = new Promise(function(resolve, reject) {
      // inside this we can write our time consuming task. 
   })

   -> promise constructor expects a callback function. 
   -> This call back function is also called as executor function.
   -> This callback function takes two parameter. i.e resolve and reject.
   -> This resolve and reject are inbuilt function in js.

   -> The moment resolve function is called, the promise object will go from pending state to resolve state.
   -> The moment reject function is called, the promise object will go from pending state to rejected state.
   -> If you don't call any one among these, the promise will forever stay.

   explaination : 
   -> Whenever in the implementation of executor callback, you call the resolve function, the promise goes to a fullfilled 
      state.
   -> If you call reject function, it goes to a rejected state and if you don't call anything, promise remains in pending
      state.

*/ 

/**
 * Apart from state property, promise has a value property.
 -> Till the time promise is in pending state, value is undefined.
 -> The moment you migrate from pending state to rejected state or fullfilled state, value of promise object can changes.

 -> Whatever we call resolve(x) function with some value x as argument. x can be number, boolean, object etc..
    After calling resolve() function, promise will move to fulfilled state.
    Value gets updated with the arg of resolve(x).

 -> With Whatever argumnet we call resolve(x) or reject(x) will gets assigned to value property.
 */