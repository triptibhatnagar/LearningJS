let i = 2;//initialisation
do{
    //code to be executed
    console.log("helloJS");
    i++;//updation
}while(i<=10);//stopping condition

//sum of 1 to n numbers using do-while
let j = 1;
let n = prompt("Enter a number n");
let sum = 0;
do{
    sum += j;
    j++;
}while(j <= n);
console.log("The sum of 1 to ",n,"numbers is : ",sum);