//Q-7 Write a program to demonstrate the results of comparison operators. Note that both the truth and false condition for each operator must be specified 
/* Types Of comparison Operators: 
== != === !== < > <= >=*/
let operand1 = 8;
let operand2 = -8;
console.log(operand1 == operand2); //false

operand2 =  '8';
console.log(operand1 == operand2); //true
// == only checks for value , not the type 

console.log(operand1 === operand2); //false
// === also check for the same type 

console.log(operand1 !== operand2); //true

console.log(operand1 < operand2); //8 < '8' -> false
console.log(operand1 > operand2); //8 > '8' -> false
console.log(operand1 <= operand2);//8 <= '8' -> true

operand1 = -10; 
console.log(operand1 >= operand2);//-10 >= '8' -> false


// QUESTIONS ON IF-ELSE 
// Q-1 Write a program of traffic control that accepts the traffic light displayed and prints the message. If the traffic light is red print the vehicles must stop.
let light = "red";
if(light == 'red'){
    console.log(`${light} light -> STOP`);
}else if(light == 'yellow') {
    console.log(`${light} light -> GO SLOW`);
}else if(light == 'green'){
    console.log(`${light} light -> GO AHEAD`);
}else {
    console.log("No traffic light");
}

// Q-2 Write a program to print the largest of two numbers , and 4 numbers 

// 2 numbers 
let n1 = 11;
let n2 = -11;
if(n1 > n2) {
    console.log(`${n1} is greater than ${n2}.`);
}else if(n1 == n2){
    console.log(`Both ${n1} and ${n2} are equal.`);
}else {
    console.log(`${n2} is greater than ${n1}.`);
}

// 4 numbers
let n3 = 9;
let n4 = 13;
if(n1>n2 && n1>n3 && n1>n4) {
    console.log(`${n1} is greatest.`);
}else if(n2>n1 && n2>n3 && n2>n4) {
    console.log(`${n2} is greatest.`);
}else if(n3>n1 && n3>n2 && n3>n4) {
    console.log(`${n3} is greatest.`);
}else {
    console.log(`${n4} is greatest.`);
}


// Q-3 Write a program that takes in days of a week and outputs the number of days until the weekend
let day = "Monday";
switch (day) {
    case "Monday" : console.log("5 Days left for the weekend.");
    break;
    case "Tuesday" : console.log("4 Days left for the weekend.");
    break;
    case "Wednesday" : console.log("3 Days left for the weekend.");
    break;
    case "Thursday" : console.log("2 Days left for the weekend.");
    break;
    case "Friday" : console.log("1 Day left for the weekend.");
    break;
    default : console.log("The weekend is here !!");
}

// Q-4 Write a program to print even and odd numbers 
let number = 27;
if(number % 2 == 0) {
    console.log(`${number} is even number`);
}else {
    console.log(`${number} is odd number`);
}

// Q-5 If CP and SP of an item is input through the keyboard , write a program to determine whether the seller has made profit or incurred loss. Also determine how much profit he made or loss he incurred.
let CP = prompt("Enter the cost price of the item");
let SP = prompt("Enter the selling price of the item");
if(CP<SP) {
    console.log(`The seller has made a profit of Rs.${SP-CP}`);
}else if(CP == SP) {
    console.log("Neither profit nor loss");
}else {
    console.log(`The seller has incurred loss of Rs.${CP-SP}`);
}