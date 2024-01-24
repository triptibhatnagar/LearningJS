// Q-1 :- Store two integers in two variables x and y. Print the sum of the two.
let x = 20;
let y = 7;
console.log(`The sum of ${x} and ${y} is ${x+y}.`);

// Q-2 :- Store two integers in two variables x and y. Print the product of the two.
console.log(`The product of ${x} and ${y} is ${x*y}.`);

// Q-3 :- Calculate the average of 5 subjects. 
let math = 89;
let eng = 67;
let phy = 78;
let chem = 90;
let evs = 56;
let calcAvg = (math+eng+phy+chem+evs)/5;
console.log(`The average of 5 subjects is ${calcAvg}.`);

// Q-4 :- Calculate the area of circle , square, rectangle , triangle
let radius = 5;
const PI = 3.14;
let areaOfCircle = PI*(radius**2);
console.log(`The area of circle having radius ${radius}m is ${areaOfCircle} sq. m units.`);

let side = 7.2;
let areaOfSquare = side*side;
console.log(`The area of square having side ${side}m is ${areaOfSquare} sq. m units.`);

let l = 4;
let b = 6.2;
let areaOfRect = l*b;
console.log(`The area of rectangle having length ${l}m and breadth ${b}m is ${areaOfRect} sq. m units.`);

let base = 2.5;
let height = 3;
let areaOfTriangle = (0.5)*base*height;
console.log(`The area of triangle having base ${base}m and height ${height}m is ${areaOfTriangle} sq. m units.`);

// Q-5 :- Calculate the simple interest 
let p = 10000;
let r = 2.5;
let t = 10; 
let si = (p*r*t)/100;
console.log(`The simple interest for prinicipal amount ${p} , rate of interest ${r} and time period ${t} is ${si}.`);

// Q-6 :- Calculate the circumference of circle 
let rad = 4.2;
let circumference = 2*PI*rad;
console.log(`The circumference of circle having radius ${rad}m is ${circumference}m`);

// Q-7 :- Write a program to perform all the arithmetic operations [except increment and decrement operators] of JS of any two numbers stored in the variables num1 and num2. Also, print the results to the console. 
let num1 = 27;
let num2 = 10;
console.log(`Addition : ${num1} + ${num2} = ${num1+num2}`);
console.log(`Subtraction : ${num1} - ${num2} = ${num1-num2}`);
console.log(`Multiplication : ${num1} * ${num2} = ${num1*num2}`);
console.log(`Division : ${num1} / ${num2} = ${num1/num2}`);
console.log(`Modulus : ${num1} % ${num2} = ${num1%num2}`);
console.log(`Exponential : ${num1} ** ${num2} = ${num1**num2}`);