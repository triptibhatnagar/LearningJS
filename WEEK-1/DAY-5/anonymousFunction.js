// anonymous function - a function without a name

// eg-1 : calculate sum 
const calc_Sum = function (a,b) {
    return a+b;
}
console.log(calc_Sum(3,4));

// eg-2 : check for even and odd
const evenOdd = function () {
    let n = prompt("Enter a number");
    if(n%2 == 0) {
        console.log(`${n} is even number`);
    }else {
        console.log(`${n} is odd number`);
    }
}
evenOdd();

// anonymous self invoking function
(function () {
    console.log("This is a self invoking anonymous function.");
});