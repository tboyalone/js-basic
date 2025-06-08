// This function finds the minimum and maximum values in an array of numbers.
// It returns an object with properties `min` and `max`.
// This function takes an array of numbers and returns an object containing the minimum and maximum values.
// It returns null for both min and max if the array is empty.
function minMax(arr) {
    if (arr.length === 0) {
        return { min: null, max: null };
    }
    
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return { min, max };
}

// Example usage:
console.log(minMax([3, 1, 4, 1, 5, 9, 2, 6])); // Output: { min: 1, max: 9 }   
console.log(minMax([-10, -20, -30, -5])); // Output: { min: -30, max: -5 }
console.log(minMax([])); // Output: { min: null, max: null }