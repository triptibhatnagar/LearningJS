// Q-1 Print "Alpha Intern" 5 times using a loop
console.log("Print \"Alpha Intern\" 5 times :-");
function print() {
    for(let i=0; i<5; i++) {
        console.log("Alpha Intern");
    }
}
print();

// Q-2 Print number from 1 to 100 using loop
console.log("Numbers from 1 to 100 :-");
function num1_100() {
    let i = 0;
    while(i<100){
        console.log(i+1);
        i++;
    }
}
num1_100();

// Q-3 Print all even numbers from 1 to 100 using loop 
console.log("Even numbers from 1 to 100 :-");
function printEvenNum() {
    let i = 1;
    do{
        if(i%2 == 0){
            console.log(i);
        }
        i++;
    }while(i<=100);
}
printEvenNum();

// Q-4 Print the table of 19 using loop
console.log("Table of 19 :-");
function table_19() {
    for(let i=1; i<=10; i++) {
        console.log(`19 * ${i} = ${19*i}`);
    }
}
table_19();

// Q-5 Print all numbers from 1 to 100 that are divisible by 3
console.log("Numbers from 1 to 10 that are divisible by 3 :-");
function divBy3() {
    for(let i=1; i<=100; i++) {
        if(i%3 == 0) {
            console.log(i);
        }
    }
}
divBy3();

// Q-6 Write a program to check whether a number is prime or not 
function isPrimeOrNot(num) {
    if(num < 2) {
        return "Not a Prime Number";
    }
    for(let i = 2 ; i< num/2 ; i++) { //the iteration is done till half ,because after half the number ,there is only one factor left i.e. the number itself 
        if(num % i === 0) {
            return "Not a Prime Number";
        }
    }
    return "Prime Number";
}
console.log(isPrimeOrNot(19));