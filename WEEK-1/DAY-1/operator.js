// arithmetic operators
let a = 5;
let b = 2;
console.log("Two Operands : ",a," and ",b);
console.log("Addition Result: ",a+b);
console.log("Subtraction Result: ",a-b);
console.log("Multiplication Result: ",a*b);
console.log("Division Result: ",a/b);
console.log("Modulus Result: ",a%b);
console.log("Exponentiation Result: ",a**b);
console.log("Post Increment : ",a++);
console.log("Pre Increment: ",++a);
console.log("Post Decrement : ",b--);
console.log("Pre Decrement: ",--b);

// assignment operators
let x = 6;
let y = 4;
x += 10;
console.log(x);//6+10 = 16

x -= 3;
console.log(x);//16-3 = 13

x *= 2;
console.log(x);//13*2 =26

x /= 13;
console.log(x);//26/13 = 2

y **= 2;
console.log(y);

// comparison operators
let p = 27;
let q = 9;
console.log(p ,"and" ,q)
console.log("p == q :",p == q);
console.log("p != q :",p != q);
console.log("p < q :",p < q);
console.log("p > q :",p > q);
console.log("p >= q :",p >= q);
console.log("p <= q :",p <= q);

p = "9";
console.log("p == q :",p == q);
console.log("p === q :",p === q);
console.log("p !== q :", p!==q);

// logical operators
let u = 7;
let v = 5;
let cond1 = u > v;
let cond2 = u === 8;
console.log(cond1 && cond2);

console.log(u < v || u === 6);

console.log(!(u === 7));