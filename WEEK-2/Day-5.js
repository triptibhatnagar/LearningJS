// Q-1 :- Store two integers in two variables x and y. Print the sum of the two.
function calcSum(x,y) {
    sum = x+y;
    return sum;
}
console.log("Sum :",calcSum(20,7));

// Q-2 :- Store two integers in two variables x and y. Print the product of the two.
function calcProduct (x,y) {
    return x*y;
}
console.log("Product :",calcProduct(20,7));

// Q-3 :- Calculate the average of 5 subjects. 
function calcAvg(math,eng,phy,chem,evs) {
    return (math+eng+phy+chem+evs)/5;
}
console.log("Average :",calcAvg(89,67,78,90,56));

// Q-4 :- Calculate the area of circle , square, rectangle , triangle
// area of circle 
const PI = 3.14;
function areaOfCircle(r) {
    return PI*r**2;
}
console.log("Area of circle :",areaOfCircle(5));

// area of square
function areaOfSquare(side) {
    return side*side;
}
console.log("Area of square :",areaOfSquare(7.2));

// area of rectangle
function areaOfRect(l,b) {
    return l*b;
}
console.log("Area of rectangle :",areaOfRect(4,6.2));

// area of triangle
function areaOfTriangle(b,h) {
    return 0.5*b*h;
}
console.log("Area of triangle :",areaOfTriangle(2.5,3));

// Q-5 :- Calculate the simple interest 
function calcSI(p,r,t) {
    return (p*r*t)/100;
}
console.log("Simple Interest :",calcSI(10000,2.5,10));

// Q-6 :- Calculate the circumference of circle 
function calcCircumf(r) {
    return 2*PI*r;
}
console.log("Circumference of circle :",calcCircumf(4.2));

// Q-7 :- Write a program to perform all the arithmetic operations [except increment and decrement operators] of JS of any two numbers stored in the variables num1 and num2. Also, print the results to the console. 
let num1 = 9;
let num2 = 2.7;
function arithmOp() {
    let sum = num1+num2;
    console.log(`Addition : ${num1}+${num2} = ${sum}`);

    let diff = num1-num2;
    console.log(`Subtraction : ${num1}-${num2} = ${diff}`);

    let prod = num1*num2;
    console.log(`Multiplication : ${num1}*${num2} = ${prod}`);

    let div = (num1/num2).toFixed(2);//toFixed() is used to get only 2 rounded off decimal places;
    console.log(`Division : ${num1}/${num2} = ${div}`);

    let rem = (num1%num2).toFixed(2);
    console.log(`Modulus : ${num1}%${num2} = ${rem}`);

    let power = (num1**num2).toFixed(2);
    console.log(`Exponential : ${num1}**${num2} = ${power}`);
}
arithmOp();

//Q-7 Write a program to demonstrate the results of comparison operators. Note that both the truth and false condition for each operator must be specified.   == != === !== < > <= >=
let operand1 = "8.8";
let operand2 = 8.8;

function equalTo() {
    return operand1 == operand2;
}
console.log(`${operand1} == ${operand2} `,equalTo());

function notEqualTo() {
    return operand1 != operand2;
}
console.log(`${operand1} != ${operand2} `,notEqualTo());

function equalToAndType() {
    return operand1 === operand2;
}
console.log(`${operand1} === ${operand2} `,equalToAndType());

function notEqualToAndType() {
    return operand1 !== operand2;
}
console.log(`${operand1} !== ${operand2} `,notEqualToAndType());

function lessThan() {
    return operand1 < operand2;
}
console.log(`${operand1} < ${operand2} `,lessThan());

function greaterThan() {
    return operand1 > operand2;
}
console.log(`${operand1} > ${operand2} `,greaterThan());

function lessThanOrEqualTo() {
    return operand1 <= operand2;
}
console.log(`${operand1} <= ${operand2} `,lessThanOrEqualTo());

function greaterThanOrEqualTo() {
    return operand1 >= operand2;
}
console.log(`${operand1} >= ${operand2} `,greaterThanOrEqualTo());

// Q-1 Write a program of traffic control that accepts the traffic light displayed and prints the message. If the traffic light is red print the vehicles must stop.
function traffLight(light) {
    if(light == 'red'){
        console.log(`${light} light -> STOP`);
    }else if(light == 'yellow') {
        console.log(`${light} light -> GO SLOW`);
    }else if(light == 'green'){
        console.log(`${light} light -> GO AHEAD`);
    }else {
        console.log("No traffic light");
    }
}
traffLight("red");

// Q-2 Write a program to print the largest of two numbers , and 4 numbers 

// for 2 numbers 
function getGreater(a,b) {
    if(a > b) {
        console.log(`${a} is greater than ${b}`);
    }else if(a == b){
        console.log(`Both numbers i.e. ${a} are equal`);
    }else {
        console.log(`${b} is greater than ${a}`);
    }
}
getGreater(54,54);