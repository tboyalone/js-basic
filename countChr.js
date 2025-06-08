// Function to count the number of characters in a string
// Description: This function takes a string as input and returns the number of characters in it.
// It throws a TypeError if the input is not a string.
function countChr(str){
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
    }  
    return count;
}
// Example usage:
console.log(countChr("Hello World")); // Output: 11
console.log(countChr("Hello")); // Output: 5
console.log(countChr("This is my name."));