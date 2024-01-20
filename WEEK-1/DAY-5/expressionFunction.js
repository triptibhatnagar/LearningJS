// eg-1 : calculate product
const calcProd = function (x,y,z) {
    return x*y*z;
}
console.log(calcProd(3,6,2));

// eg-2 : temperature conversion 
const tempConversion = function (tempInCelsius,tempInFahrenheit) {
    if(tempInFahrenheit == undefined) {
        tempInFahrenheit = (tempInCelsius)*(9/5) + 32;
        return tempInFahrenheit;
    }
    if(tempInCelsius == undefined) {
        tempInCelsius = (tempInFahrenheit-32)*(5/9);
        return tempInCelsius;
    }
}

console.log(tempConversion(undefined,212));
console.log(tempConversion(100));