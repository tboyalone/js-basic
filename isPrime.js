// This function checks if a number is prime
// It returns true if the number is prime, otherwise false.// The function checks divisibility from 2 to the square root of the number.
// It uses a loop to check if the number is divisible by any number in that range.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Example usage:
console.log(isPrime(2)); // Output: true (2 is prime)
console.log(isPrime(4)); // Output: false (4 is not prime)
console.log(isPrime(17)); // Output: true (17 is prime) 
console.log(isPrime(18)); // Output: false (18 is not prime)
console.log(isPrime(64)); // Output: false (64 is not prime)
console.log(isPrime(97)); // Output: true (97 is prime)