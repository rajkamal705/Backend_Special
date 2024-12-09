/**
 -> The .then() function returns a new promise object. It immediately returns a new promise object.
 */

function download(url) {
  console.log("started downloading content from ", url);
  return new Promise(function exec(resolve, reject) {
    setTimeout(function p() {
      console.log("completed downloading data in 5sec");
      const content = "abcdef";
      resolve(content);
      // resolve(content);
    }, 5000);
  });
}

x = download("www.xyz.com");
x.then(
    function fulFillHandler(value) {
       console.log("content downloaded is ", value);
    //    return "new Promise string";
    }, 

    function rejectHandler1(value) {
        console.log("rejected with", value);
    }
)

.then(
    function newFulFillHandler(value) {
       console.log("value from chained then promise ", value);
});

/**
 -> Whatever you return from fulfill handler1, that value is going to be the fulfilled value for my chained promise.
 -> use browser console to understand better.

 -> If you not return "new Promise String", The value will be undefined.
 -> comment and check the result.
 */
