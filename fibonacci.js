
// This is a simple recursive function to calculate the nth Fibonacci number
// It uses recursion to find the Fibonacci number at position n.
// It returns the nth Fibonacci number, where the sequence starts with 0 and 1.
// The Fibonacci sequence is defined as:
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
// Example usage:
console.log(fibonacci(0)); // Output: 0 (the 0th Fibonacci number is 0)
console.log(fibonacci(6)); // Output: 8 (the 6th Fibonacci number is 8)
// Compare this snippet from fibonacci.js:
console.log(fibonacci(6)); // Output: 8 (the 6th Fibonacci number is 8)
