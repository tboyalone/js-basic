// This function filters an array based on a predicate function.
// It returns a new array containing only the elements that satisfy the predicate.
// It throws a TypeError if the first argument is not an array or if the second argument is not a function.
// Description: This function filters an array based on a predicate function.
function filterArray(arr, predicate) {
  if (!Array.isArray(arr)) {
    throw new TypeError('First argument must be an array');
  }
  if (typeof predicate !== 'function') {
    throw new TypeError('Second argument must be a function');
  }
  
  return arr.filter(predicate);
}

// Example usage:
console.log(filterArray([1, 2, 3, 4, 5], x => x > 2)); // Output: [3, 4, 5] 
console.log(filterArray(['apple', 'banana', 'cherry'], fruit => fruit.startsWith('b'))); // Output: ['banana']
console.log(filterArray([10, 20, 30, 40], num => num % 20 === 0)); // Output: [20, 40]
console.log(filterArray([], x => x > 0)); // Output: []
console.log(filterArray([1, 2, 3], 'not a function')); // Throws TypeError: Second argument must be a function  