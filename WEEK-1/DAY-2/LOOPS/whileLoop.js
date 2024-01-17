let i = 10;
while(i<=20) {
    console.log("Hello");
    i++;
}

//sum of 1 to n numbers using while loop
let j = 1;
let sum = 0;
let n = prompt("Enter a number n");
while(j <= n){
    sum += j;
    j++;
}
console.log("The sum of 1 to ",n,"numbers is : ",sum);