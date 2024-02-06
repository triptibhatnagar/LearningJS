// Creating object in JS 

let person = {
    firstName : "Tony",
    lastName : "Stark"
}
// To print the whole object 
console.log(person);

// To access object's properties
console.log(person.firstName); // dot notation
console.log(person["lastName"]); // array notation

// To modify the value of property 
person.firstName = "Hulk";
console.log(person);

// To define a new property 
person.age = 90;
console.log(person);

// To know whether a property is defined or not -> using 'in' keyword - returns boolean
console.log('address' in person);
console.log('firstName' in person);

// Iterating over properties
for(let key in person) {
    console.log(key+" : "+person[key]);
}
// dot notation don't work in loop