// loop --> initialisation , stopping condition , updation
for(let i=1 ; i<=5 ; i++) {
    console.log("HelloJS");
}

//sum of 1 to n numbers
let n = prompt("Enter a number n");
let sum = 0;
for(let i=1 ; i<=n ; i++) {
    sum += i;
}
console.log("The sum of 1 to ",n,"numbers is : ",sum);

//product of 1 to m numbers
let m = prompt("Enter a number m");
let prod = 1;
for(let i=1 ; i<=m ; i++) {
    prod *= i;
}
console.log("The product of 1 to ",m,"numbers is : ",prod);