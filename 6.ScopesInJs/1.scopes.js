/*
 -> Scopes : Scopes is all about visibility or boundary of access of any variable and functions. 
 -> Everything(variable or function) inside your code will be used in one of the following two ways :
    1> Either it will be getting some value assingned to it. 'or'
    2> Some value will be received from it.
 -> Js is neither purely compiled nor purely interpreted. 

 1> compiled lang : If there will be error in any line, then code will not be executed and will throw compilation error.
                  -> In process of compilation, your whole code is read atleast once, and then star the execution.
 2> Interpreted lang: If there is error in any line, then it will show error for that very line and remaining will be executed.
                      -> In interpreted lang, there is no parsing and started executing the code line by line.

 ** js code executed in 2 phase :
    Phase1 : parsing
    phase2 : execution.

    1> Parsing phase : scope resolution phase : js reads the whole code in 1st go and try to get the scope of all the 
                                                variables in the code.

 ** Types of Scopes in js :
   1> global scope : global scoped variable will be accessible to everywhere in the code.
   2> function scope : if variable is initialised inside function, then it will be available for that fun only.
   3> block scope scope : Varible intialised will be available for that block only.
   4> Module scope: 

 */

