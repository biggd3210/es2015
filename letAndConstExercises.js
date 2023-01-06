/*
ES% global constants 

var PI = 3.14;
PI = 42; // stop me from doing this!

now rewrite into ES2015
*/

const PI = 3.14;
PI = 42;

/* Quiz

What is the difference between var and let?

var is function scope and let is block scope. They can both be reassigned but only var can be redeclared. They are both able to be mutated as well. Var can be hoisted while let cannot.

What is the difference between var and const?

var is function scoped, const is block scope. Const cannot be reassigned or redeclared while var can be. They can both be mutated. Var can be hoisted while const is not. 

What is the difference between let and const?

Let and const are both block scoped. Neither are hoisted. Neigther can be redeclared though let can be reassigned. They can both be mutated. 

What is hoisting? 

Hoisting is when all vars are declared at the beginning of a script though may not be assigned until further into the code. 

*/