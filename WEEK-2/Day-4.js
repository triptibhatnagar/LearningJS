// Q-1 Print "Alpha Intern" 5 times using a loop

//do-while loop
let i = 1;
do {
    console.log("Alpha Intern");
    i++;
}while(i<=5);


// Q-2 Print number from 1 to 100 using loop 

//for loop
console.log("Numbers from 1 to 100 :-");
for(let counter = 1; counter<=100; counter++) {
    console.log(counter);
}

// Q-3 Print all even numbers from 1 to 100 using loop 
console.log("Even Numbers from 1 to 100 :-");

//while loop
let counter = 1;
while(counter <= 100) {
    if(counter % 2 === 0) {
        console.log(counter);
    }
    counter++;
}

// Q-4 Print the table of 19 using loop
console.log("Table of 19 :-");
for(let i = 1; i<=10; i++) {
    console.log(`19 * ${i} = ${19*i}`);
}


// Q-5 Print all numbers from 1 to 100 that are divisible by 3
console.log("Numbers from 1 to 100 that are divisible by 3 :-");
for(let i = 1; i<=100 ; i++) {
    if(i%3 === 0){
        console.log(i);
    }
}


// Q-6 Write a program to check whether a number is prime or not 

// using function
let num = prompt("Enter a number to check whether it's prime or not");
function isPrimeOrNot() {
    if(num < 2) {
        return "Not a Prime Number";
    }
    for(let i = 2 ; i< num/2 ; i++) { //the iteration is done till half ,because after half the number ,there is only one factor left i.e. the number itself 
        if(num % i === 0) {
            return "Not a Prime Number";
        }
    }
    return "a Prime Number";
}
console.log(num,"is",isPrimeOrNot());