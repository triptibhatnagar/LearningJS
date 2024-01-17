//conditional statements

//if statement
let age = prompt("Enter you age");
if(age >= 18){
    console.log("You are eligible to Vote");
}
if(age < 18){
    console.log("You are not eligible to Vote");
}

//if-else statement
if(age >= 18) {
    console.log("You are eligible to Vote");
}else {
    console.log("You are not eligible to Vote");
}

//to find a number whether it is odd or even
let n = prompt("Enter a number");
if(n%2 == 0) {
    console.log("Even number");
}else{
    console.log("Odd number");
}
//else-if statement
let mode = prompt("Enter the desired mode");
let color;
if(mode === "dark"){
    color = "black";
}else if(mode === "blue"){
    color = "blue";
}else if(mode === "green"){
    color = "green";
}else {
    color = "white";
}
console.log(`The color for ${mode} mode is ${color}.`);