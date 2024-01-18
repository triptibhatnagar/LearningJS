// function - block of code which performs a specific task and can be invoked whenever needed

// inbuilt functions
console.log("hello");
console.log("abc".toUpperCase());

// user-defined functions
// Eg-1
function myFunction () {
    console.log("Welcome !!");
    console.log("Let's Learn JavaScript Functions today.");
}
myFunction();

// Eg-2
function printMsg(msg) {
    console.log(msg);// parameter -> input
}
printMsg("Jai Shri Ram");// argument -> value passed

// Eg-3
function prod(a,b) {
    return a*b ;
}
console.log(prod(3,9));

// Eg-4
function sum(x,y) {
    console.log("Before return");
    return x+y;// return value
    console.log("After return");// the code after return statement will never be executed
}
console.log(sum(10,5));