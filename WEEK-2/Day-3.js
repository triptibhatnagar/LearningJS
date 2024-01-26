// Q-6 Take positive integer input and tell if it is three digit number or not 
let posInt = prompt("Enter a positive integer to check whether it's a three-digit number or not :-");

if(posInt>=100 && posInt<=999) {
    document.write(`${posInt} is a 3-digit number.`);
    document.write('<br>');
}else {
    document.write(`${posInt} is not a 3-digit number.`);
    document.write('<br>');
}


// Q-7 Take positive integer input and tell if it is divisible by 5 and 3.
let inputNum = prompt("Enter a positive integer to check its divisibiltiy by 5 and 3 :-");

if(inputNum%3 == 0 && inputNum%5 == 0) {
    console.log(inputNum,"is divisible by 3 and 5.");
}else{
    console.log(inputNum,"is not divisible by 3 and 5.");
}


// Q-8 Take positive integer input and tell if it is divisible by 5 or 3 but not divisible by 15
let Num = prompt("Enter a positive integer to check its divisibilty by 3,5,15 :-");

if(Num%3 == 0 && Num%15 != 0){
    console.log(Num,"is divisible by 3 but not divisible by 15.");
}else if(Num%5 == 0 && Num%15 != 0){
    console.log(Num,"is divisible by 5 but not divisible by 15.");
}else if(Num%15 == 0) {
    console.log(Num,"is divisible by 3, 5 and 15.");
}else{
    console.log(Num,"is not divisible by 3, 5 and 15.");
}


// Q-9 Take positive integer input and tell if it is divisible by 5 or 3.
let inpNum = prompt("Enter a positive integer to check its divisibilty by 3 or 5 :-");

if(inpNum%3 == 0) {
    console.log(inpNum,"is divisible by 3.");
}else if(inpNum%5 == 0) {
    console.log(inpNum,"is divisible by 5.");
}else {
    console.log(inpNum,"is not divisible by 3 or 5.");
}

// Q-10 Take 3 positive integers input and print the greatest of them.
let Num1 = prompt("Enter first positive integer");
let Num2 = prompt("Enter second positive integer");
let Num3 = prompt("Enter third positive integer");

if(Num1>Num2 && Num1>Num3) {
    console.log(`${Num1} is greatest`);
}else if(Num2>Num1 && Num2>Num3) {
    console.log(`${Num2} is greatest`);
}else if(Num3>Num1 && Num3>Num1){
    console.log(`${Num3} is greatest`);
}else if(Num1 == Num2){
    console.log("Both number1 and number2 i.e.",Num1,"are greater than",Num3);
}else if(Num2 == Num3){
    console.log("Both number2 and number3 i.e.",Num2,"are greater than",Num1);
}else if(Num1 == Num3){
    console.log("Both number1 and number3 i.e.",Num1,"are greater than",Num2);
}else {
    console.log("All are equal");
}


// Q-11 Any year is input through the keyboard. Write a program to determine whether the year is a leap year or not.
let year = prompt("Enter a year");

if(year>1000 && year<9999 && year%4 == 0) {
    document.write(year,"is a leap year containing 366 days");
}else if((year>1000 && year<9999 && year%4 != 0)){
    document.write(year," is not a leap year");
}else {
    document.write("Invalid year");
}