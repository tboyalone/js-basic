// Description: This function takes a string as input and returns the string reversed.
// It throws a TypeError if the input is not a string
function reverseStr(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  return str.split('').reverse().join('');
}   

// Example usage:
console.log(reverseStr("Hello")); // Output: "olleH"
console.log(reverseStr('hello')); // 'olleh'
console.log(reverseStr('World!'));// 'dlrow'