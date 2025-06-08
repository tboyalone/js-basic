// Function to convert each word in a string to title case
// where the first letter of each word is capitalized and the rest are lowercase.   
function eachWordProper(str) {
  return str.split(' ').map(word => {
    if (word.length > 0) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    return word;
  }).join(' ');
}

// Function to convert each word in a string to title case
// where the first letter of each word is capitalized and the rest are lowercase.   

const toTitleCase = str => str.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase());

// Example usage:
console.log(toTitleCase("hello world")); // Output: "Hello World"
console.log(eachWordProper("heLLo worLd")); // Output: "Hello World"
console.log(eachWordProper("this is my name.")); // Output: "This Is My Name."