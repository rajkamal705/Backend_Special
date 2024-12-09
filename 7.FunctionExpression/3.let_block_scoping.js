var teacher = "sanket"; // global
function fun() { // global
    console.log(teacher); // no error given. Here it will be asked that is there any variable teacher in scope of fun -> yes,
                          // but not yet declared. hence it will give undefined.
    // console.log(content); // throws an error(reference error). This is called as temporal dead zone(TDZ).
    var teacher = "pulkit"; // available in scope of fun at all palces. Even before declare it.
    let content = "js"; // content will be access only post declaration.
    if(content == "js") {
        let hours = "120+"; // only accessible within this block(line 8 to line 10). It will not be accessible outside block.
        console.log(hours);
        console.log(content, hours); // content is available after post declaration even for nested block.
    }
    console.log(teacher, content);
    // console.log(teacher, content, hours); // It will throw an error, bec hours is not accessible here.
}
fun();
console.log(teacher);
// console.log(content); // not accessible here.

/**
 * The difference between fun block and  block scope is that, if something is initialized using var, it will be available 
   throughout the fun. On the other hand if something is initalized using 'let', it will be accessible only post declaraion.
 */

// Note : value is assigned to variable during execution phase.




