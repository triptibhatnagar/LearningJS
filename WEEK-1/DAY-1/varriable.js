//automatically,let,const,var

age = 24;
console.log(age);
console.log(typeof age);

price = 99.9;
console.log(price);
console.log(typeof price);

fullName = "Tony Stark";
console.log(fullName);
console.log(typeof fullName);

x = null;
console.log(x);
console.log(typeof x);

y = undefined;
console.log(y);
console.log(typeof y);

isFollower = true;
console.log(isFollower);
console.log(typeof isFollower);


let firstName = "Tripti";
console.log(firstName);

let year = 2024;
console.log(year);
// let can be updated but cant be redeclared - block scope
year = 2020;
console.log(year);

// let need not to be initialized
let z;
z=10;
console.log(z);


// var can be updated and redeclared - global scope
var month = 1;
console.log(month);
var month = 2;
console.log(month);
month = 12;
console.log(month);

// const cant be updated and redeclared - block scope
const PI = 3.14;
const root2 = 1.414;
const e = 2.71;
// e=2.72; --> this will show error

// const always initialized
/* const a;
 a=100;
 console.log(a); --> error occurs */