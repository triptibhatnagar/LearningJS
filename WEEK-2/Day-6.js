//four numbers
function getGreatestOutOf4() {
    let Num1 = prompt("Enter first positive integer");
    let Num2 = prompt("Enter second positive integer");
    let Num3 = prompt("Enter third positive integer");
    let Num4 = prompt("Enter fourth positive integer");

    if(Num1>Num2 && Num1>Num3 && Num1>Num4) {
        console.log(`${Num1} is greatest`);
    }else if(Num2>Num1 && Num2>Num3 && Num2>Num4) {
        console.log(`${Num2} is greatest`);
    }else if(Num3>Num1 && Num3>Num1 && Num3>Num4){
        console.log(`${Num3} is greatest`);
    }else if(Num4>Num1 && Num4>Num2 && Num4>Num3){
        console.log(`${Num4} is greatest`);
    }else if(Num1 == Num2 || Num1 == Num3 || Num1 == Num4 || Num2 == Num3 || Num2 == Num4 || Num3 == Num4){
        console.log("Error!! You have entered same numbers\nEnter the numbers again.");
        getGreatestOutOf4();
    }  
}
getGreatestOutOf4();

// Q-3 Write a program that takes in days of a week and outputs the number of days until the weekend
function week (day) {
    switch (day) {
        case "Monday" : console.log("5 Days left for the weekend");
        break;
        case "Tuesday" : console.log("4 Days left for the weekend");
        break;
        case "Wednesday" : console.log("3 Days left for the weekend");
        break;
        case "Thursday" : console.log("2 Days left for the weekend");
        break;
        case "Friday" : console.log("1 Day left for the weekend");
        break;
        default : console.log("The weekend is here !!");
    }
}
week("Saturday");

// Q-4 Write a program to print even and odd numbers.
function evenAndOdd(num) {
    if(num % 2 == 0) {
        return(`${num} is even number.`);
    }else {
        return(`${num} is odd number.`);
    }
}
console.log(evenAndOdd(10));

// Q-5 If CP and SP of an item is input through the keyboard , write a program to determine whether the seller has made profit or incurred loss. Also determine how much profit he made or loss he incurred.
let CP = prompt("Enter cost price");
let SP = prompt("Enter selling price");
function profitOrLoss() {
    if(CP<SP) {
        return(`The seller has made a profit of Rs.${SP-CP}`);
    }else if(CP == SP) {
        return("Neither profit nor loss");
    }else {
        return(`The seller has incurred loss of Rs.${CP-SP}`);
    }
}
console.log(profitOrLoss());


// Q-6 Take positive integer input and tell if it is three digit number or not.
let posInt = prompt("Enter a positive integer to check whether it's 3-digit or not");
function threeDigitNum() {
    if(posInt>=100 && posInt<=999) {
        return(`${posInt} is a 3-digit positive integer.`);
    }else {
        return(`${posInt} is not a 3-digit positive integer.`);
    }
}
console.log(threeDigitNum());

// Q-7 Take positive integer input and tell if it is divisible by 5 and 3.
let Num = prompt("Enter a number to check whether it's divisible by 3 and 5");
function divBy3_5() {
    if(Num%3 == 0 && Num%5 == 0) {
        return(`${Num} is divisible by 3 and 5.`);
    }else{
        return(`${Num} is not divisible by both 3 and 5.`);
    }
}
console.log(divBy3_5());

// Q-8 Take positive integer input and tell if it is divisible by 5 or 3 but not divisible by 15
let inp = prompt("Enter a positive integer to check its divisibilty by 3,5,15");
function checkDivBy3_5_15() {
    if(inp%3 == 0 && inp%15 != 0){
        return(`${inp} is divisible by 3 but not divisible by 15.`);
    }else if(inp%5 == 0 && inp%15 != 0){
        return(`${inp} is divisible by 5 but not divisible by 15.`);
    }else if(inp%15 == 0) {
        return(`${inp} is divisible by 3, 5 and 15.`);
    }else{
        return(`${inp} is not divisible by 3, 5 and 15.`);
    }
}
console.log(checkDivBy3_5_15());

// Q-9 Take positive integer input and tell if it is divisible by 5 or 3.
let inpNum = prompt("Enter a number to check whether it's divisible by 3 or 5");
function divBy3Or5() {
    if(inpNum%3 == 0 && inpNum%5 == 0) {
        console.log(`${inpNum} is divisible by both 3 and 5.`);
    }else if(inpNum%5 == 0) {
        console.log(`${inpNum} is divisible by 5.`);
    }else if(inpNum%3 == 0) {
        console.log(`${inpNum} is divisible by 3.`);
    }else {
        console.log(`${inpNum} is not divisible by 3 or 5`);
    }
}
divBy3Or5();

// Q-10 Take 3 positive integers input and print the greatest of them.
function getGreatestOutOf3() {
    let Num1 = prompt("Enter first positive integer");
    let Num2 = prompt("Enter second positive integer");
    let Num3 = prompt("Enter third positive integer");

    if(Num1>Num2 && Num1>Num3) {
        console.log(`${Num1} is greatest`);
    }else if(Num2>Num1 && Num2>Num3) {
        console.log(`${Num2} is greatest`);
    }else if(Num3>Num1 && Num3>Num1){
        console.log(`${Num3} is greatest`);
    }else if(Num1 == Num2 || Num2 == Num3 || Num1 == Num3){
        console.log("ERROR! Don't enter the same numbers again");
        getGreatestOutOf3();
    }  
}
getGreatestOutOf3();

// Q-11 Any year is input through the keyboard. Write a program to determine whether the year is a leap year or not.
let year = prompt("Enter any year");
function leapYrOrNot() {
    if(year>1000 && year<9999 && year%4 == 0) {
        return(year,"is a leap year containing 366 days");
    }else if((year>1000 && year<9999 && year%4 != 0)){
        return(year," is not a leap year");
    }else {
        return("ERROR! Invalid Year");
    }
}
console.log(leapYrOrNot());