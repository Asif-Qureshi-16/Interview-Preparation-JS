//What is the output of the following

// console.log("Value of Age is " + age);

// var age = 30;

// console.log("Value of Age is " + age);

//Output: Value of Age is undefined
//        Value of Age is 30

//Explanation: The first line will give undefined because of the hoisting.
// Whenever we declare a variable it will move on the top of the code but the value will be undefined 
// until the line where we initialize the value of age

// What is the output of the following

// age=100;

// console.log("Value of Age is "+ age);

// let age=30;

//Output: Error Cannot access the undefined variable 

// Explanation:Because here we are using let keyword and whenever we are using let and const the variable 
// will be hoisted but will remain in deaad zone known as Temporal Dead Zone which mean if we are trying to 
// access without initializing the variable and to avoid TDZ it is good practice to define the variable before using it.    


//What will be the output

myfunc();

var myfunc=function(){
    console.log("Hello First");
    
} 
myfunc()

function myfunc(){
    console.log("Hello Second");
    
}

myfunc()

// Output: Hello Second
        // Hello First
        // Hello First

// Explaination:
// The first call to myfunc() runs the function declaration, so it logs Hello Second.
// After myfunc is redefined as a function expression, the next two calls log Hello First.
// This happens because the function declaration is hoisted, but the function expression overrides it once assigned.