/**
 => Node: 
 -> node is not a language. It is not even a framework.

 Q> what is node?
 -> node is a runtime environment(just like browser) for js.
 -> Initially js was made to run on browser only. And a lot of features of js comes from browser only.
    Ex: By default js are single threaded. but browser allow js to run asynchrounously.
 -> What browser render: html. so, browser gives more features to js like dom etc. to manipulate html.
 
 -> Since, js was running only in browser, so it was having very limited use.
 -> So, a new runtime environment node is introduced to run js outside the browser. since, it is running outside the browser, so 
    it doesn't mean to manipulate html.
 -> Node allow js to run directly on terminal, it means js will directly able to interact with our operating system.
 -> So, operating system features will be accessible to js when we run js using node environment.
    like, it will give access to your file system stored in hard-drive. It means we can change the file, read the file, create the file etc.
 -> you get access to process system.
 -> It opens streams features. Ex: standard input, standard output.
 -> now you will be able to do all those things, which your other language was doing.
 -> we can create desktop app now or mobile app also using react native.
 -> node js is open source.
 -> now we are open to write server side logic.
 -> express is framework for js to write server side application.
 -> They tried to maintain a lot of things consistent for node environment by keeping the important concept of native js like event queue,
    microtask queue, promises etc.
 -> Here also we have event queue, here also we have microtask queue, event loop, promises...all these theory of browser side are kept consistent here.

 -> coding js somewhere is just a file. now where we run this file is the main thing. we can run on browser or we can run on node.
 -> Deno is another runtime environment for js.

 */

 /**
  * document globals : provided by browser runtime to access and manipulate html.
  * In browser there is repl console. Repl : Read, execute, print and loop. Repl console immediately evaluate the value provided to it.
  * node also provide repl console. open terminal and just enter node.
  
 -> Package: It is a folder which contains a package.json file.
  
  => Globals: globals provided by node.
  1> process: The process object provides information about, and control over, the current Node.js process.
  2> __dirname: This global show you the current directory. This global is not always accessible.
  3> module: Using module global we can expose the details to the outer world. using module.export{}
     syntax: module.exports = {
        linear: linearSearch,
        binary: binarySearch
     }

     -> here, we are exporting linearSearch() fun using module.exports{}
     -> in the same way, exporting binarySearch() fun also.

     => Module has two types: 1> Common js module 2> Es module : In Es module we can use import instead of require().

  4> require: require global helps in consume the module that is exported.
     const searching = require('./searching.js')

  */

// console.log(document); it will give error bec there is no document defined in node
// console.log(process); 
// console.log(__dirname); // This global show you the current directory, but this global is not always accessible(Q> find when it will not be accessble?).
/**
 * When using ES Modules (ECMAScript Modules): __dirname is a feature of CommonJS modules and is not directly available in
   ES Modules. If your project uses "type": "module" in package.json or you're using .mjs files, __dirname will be undefined. 
   To get the equivalent functionality in ES Modules, you need to construct it using import.meta.url, path, and url modules.
 */
console.log(module);

/**
 * module global is an object, having property like exports:{} using which we can expose the usecase of one file to other.
 */


