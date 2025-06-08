// This function takes an array of numbers and returns their sum.
// It throws a TypeError if the input is not an array or if the array contains non-numeric values.  
// Description: This function takes an array of numbers and returns their sum.
function arraySum(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    return arr.reduce((sum, num) => {
        if (typeof num !== 'number') {
            throw new TypeError('Array must contain only numbers');
        }
        return sum + num;
    }, 0);
}
// Example usage:
console.log(arraySum([1, 2, 3, 4])); // Output: 10 
console.log(arraySum([-1, -2, -3, -4])); // Output: -10
console.log(arraySum([1.5, 2.5, 3.5])); // Output: 7.5  
console.log(arraySum([])); // Output: 0
console.log(arraySum([1, 2, 3])); // Throws TypeError: Array must contain only numbers