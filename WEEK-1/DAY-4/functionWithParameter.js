// eg-1
function getAlert (str) {
    alert(str);
}
getAlert("With Parameter");

// eg-2
function sum(a,b) {
    return a+b;
}
console.log(sum(3,4));

// rest parameter
function prod (...args) {
    let prod = 1;
    for(let arg of args) {
        prod *= arg;
    }
    return prod;
}
let x = prod(1,2,3,4,5,6,7,8,9,10);
console.log(prod(x));