function notModulus(a, b) {
    if (b > a) {
        return 0;
    } else {
        var p = a / b;
        return (a - Math.floor(p) * b);
    }
    
}

console.log(notModulus(10, 3));
console.log(notModulus(10, 4));
console.log(notModulus(10, 5));
console.log(notModulus(10, 6));
console.log(notModulus(10, 7));
console.log(notModulus(10, 8));
console.log(notModulus(10, 9));
console.log(notModulus(10, 10));
console.log(notModulus(10, 11));
