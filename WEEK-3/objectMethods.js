// Object Methods in JS
let car = {
    brand : 'Porsche',
    color : 'grey'
}

// Way-1 -> by anonymous function 
car.sayHello = function () {
    console.log("Hello!");
}
car.sayHello();

// Way-2 -> by simple function and assigning it to a variable
function start() {
    console.log("Headlights On!");
}
car.lightOn = start;
car.lightOn();

// Way-3 -> defining method inside the object 
let student = {
    identity : "Rahul",
    rollNo : 56,
    university : "XYZ",
    greetUs : function() {
        console.log("Hello Everyone, I'm Rahul Kumar.\nNice to meet you.");
    }
}
student.greetUs();

// Way-4 -> defining method inside the object 
const shoes = {
    color : "white",
    brand : "sparx",
    newShoes() {
        console.log("Here are the new shoes!!");
    }
}
shoes.newShoes();