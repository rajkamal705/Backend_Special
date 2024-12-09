x = Promise.resolve("foo");

  x.then(function p1(string) {
      new Promise((resolve, reject) => {
        setTimeout(() => {
            string += "bar";
            resolve(string);
          }, 10000);
      })
  })

  y = x.then(function p2(string) {
    setTimeout(() => {
      string += "baz";
      console.log(string); // foobarbazz
    }, 1);
    return string;
  })

  y.then(function p3(string) {
    console.log(string); // foobar.
  });

/**
 -> resolved promise with a value "foo" and state is fulfilled and onfullfillment: [p1].
    There is no rejection handler. onrejection[] -> empty.

    {
        value : "foo",
        state : fulfilled,
        onFulFillment: [p1],
        onReject: []
    }

 -> Another new Promise whose value is undefined, state is pending and onfulfillment: [p2].
    {
        value : undefined, 
        state : pending,
        onFulFillment: [p2]
    }

-> The second .then() is going to return other promise object-> whose value is undefined, state is pending and
   onFulFillment: [p3].
   ex :
   {
    value: undefined,
    state : pending, 
    onFulFillment: [p3]
   }
 */
