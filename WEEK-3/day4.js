// HOF 
// returning a function
const sayHello = function(name) {
    return function(line) {
        console.log(`Hello ${name}, ${line}`);
    }
}
const mesg = sayHello("Tripti");
mesg("Let's Learn JavaScript");

// passing an argument 
function favCar(car) {
    car();
}
  favCar(function(){
    console.log('Porsche');
});


// callback,settimeout,setinterval 

function sum(a,b) {
    console.log(a+b);
}
function calculator(a,b,sumCallback) {
    sumCallback(a,b);
}
calculator(2,7,sum);

function hello() {
    console.log("hello Js");
}
setTimeout(hello,2000);

function sayHi() {
    console.log("Hi Everyone");
}
setInterval(sayHi,5000);//after every 5s


// foreach , map , reduce , filter 
let colors = ["red","blue","green","yellow"];
colors.forEach(colors => {
    console.log(colors);
});

let num = [1,3,5,2];
let cube = num.map(num => num*num*num);
console.log(cube);

let number = [1,2,3,4,5];
let getSum = number.reduce((accumulator,currentVal) => accumulator+currentVal);
console.log(getSum);

let ages = [12,34,56,6,27];
let voteOrNot = ages.filter(ages => ages>=18);
console.log(voteOrNot);