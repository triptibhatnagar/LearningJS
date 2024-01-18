// function to calculate the no. of vowels in the user entered string

function countVowels(str) {
    let count = 0;
    // using for-of loop
    for(const char of str) {
        if(char === "a" || char === "e" || char ===  "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(`The number of vowels in "${str}" is ${count}`);
    return count;
}

countVowels(prompt("Enter a string"));