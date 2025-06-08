// This code defines a function to calculate the factorial of a number using recursion.
// The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
// The factorial of 0 is defined to be 1.
// The function checks if the input is 0 or 1, in which case it returns 1.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
//usage examples
console.log(factorial(6)); // Output: 720 (6! = 6 * 5 * 4 * 3 * 2 * 1)
// Compare this snippet from factorialCal.js:
console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
