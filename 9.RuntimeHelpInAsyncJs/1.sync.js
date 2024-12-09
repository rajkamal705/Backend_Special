/**
 * Async Programming with js :
   1> js is sync in nature (not async in nature).
   2> js is single threaded.

   -> the above property is valid only if we execute valid ecmascript code viz given by the standards.
 */

 console.log("we are starting");
 for(let i = 0; i < 10000000000; i++) {
    // some task
 }
 console.log("Done");

 /**
  * here js execute 1st statement and wait until for loop executed completely. then execute last line. i.e Done.
  * This shows that js in sync in nature.
  * If it was async in nature, then it could execute 1st statment, then could execute last statement(without waiting for 
    execution of for loop). then for loop execution ended.
  */

  /**
   * NOTE : Javascript and runtime of js make javascript powerful. 
   * Now a days, We can run js on browser. Actually browser is runtime which provides a lot of feature to js which is not native
     to js.
   * Using js we can modify HTML, CSS etc. This feature is not native to js. These are provided by browser.
   */

  /**
   * Since, for loop is native feature of javascript(available in ecmadocs), Hence it will wait for complete execution for
     loop and then only next line will get executed.

   * But setTimeout is not native feature of js, hence it will not wait for it, and next line will get executed.
   */