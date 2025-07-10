function evenOrOdd(number) {
    return (number%2 == 0) ? "Even":"Odd";
  }
// Example usage:
console.log(evenOrOdd(4)); // Output: "Even"   
console.log(evenOrOdd(7)); // Output: "Odd"
console.log(evenOrOdd(0)); // Output: "Even"

function getMiddle(str){
    let mid = Math.floor(str.length / 2);
    return str.length % 2 === 0 ? str.slice(mid - 1, mid + 1) : str.slice(mid, mid + 1);
}

// Example usage:
console.log(getMiddle("test")); // Output: "es"
console.log(getMiddle("testing")); // Output: "ti"
console.log(getMiddle("middle")); // Output: "dd"
console.log(getMiddle("A")); // Output: "A"

function opposite(number) {
    return -number;
}

console.log(opposite(1)); // Output: -1
console.log(opposite(-1)); // Output: 1

function accum(s) {
    return s.split('').map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join('-');
  }

// Example usage:
console.log(accum("abcd")); // Output: "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // Output: "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

function countSheep(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`;
    }
    return result;
}
// Example usage:
console.log(countSheep(3)); // Output: "1 sheep...2 sheep...3 sheep..."

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}
// Example usage:
console.log(removeExclamationMarks("Hello World!")); // Output: "Hello World"
console.log(removeExclamationMarks("!Hello!")); // Output: "Hello"

function isSquare(n) {
    const output = n.isInteger(Math.sqrt(n));
    console.log(output);  
    return Math.sqrt(n) % 1 === 0;
}
// Example usage:
console.log(isSquare(4)); // Output: true
console.log(isSquare(25)); // Output: true
console.log(isSquare(26)); // Output: false

function disEmVowel(){
    return str.replace(/[aeiou]/gi, '');
}
// Example usage:
console.log(disEmVowel("Hello World")); // Output: "Hll Wrld"
console.log(disEmVowel("This is a test")); // Output: "Ths s  tst"


function highAndLow(numbers){
    return `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`;
}
// Example usage:
console.log(highAndLow("1 2 3 4 5")); // Output: "5 1"
console.log(highAndLow("1 9 3 4 -5")); // Output: "9 -5" 


function XO(str) {
  var ohs = 0;
  var exes = 0;

  for(let i = 0; i < str.length; i++){
    if (str[i].toLowerCase() == 'o'){ ohs++; };
    if (str[i].toLowerCase() == 'x'){ exes++;};
  }
  // if (ohs == 0 && exes == 0) {
  //   return "true"; // If there are no 'o' or 'x', consider it balanced
  // }
  console(ohs === exes);
  return (ohs == exes || ohs == 0 && exes == 0) ? "true":"false";
}

//   return (ohs != exes) ? "false":"true";
// Example usage:
console.log(XO("xo")); // Output: "true"
console.log(XO("xxOo")); // Output: "true"
console.log(XO("xxxm")); // Output: "false"
console.log(XO("Oo")); // Output: "false"
console.log(XO("aaabbm")); // Output: "false"


function squareDigits(num){
  // Convert the number to a string to iterate over each digit
  return Number(num.toString().split('').map(digit => {
      // Convert each digit back to a number, square it, and convert it back to a string
      return (Number(digit) ** 2).toString();
  }).join('')); // Join the array of squared digits into a single string
}

console.log(squareDigits(9119)); // Output: "811181"
console.log(squareDigits(1234)); // Output: "14916"
console.log(squareDigits(0)); // Output: "0"

function findShort(s) {
  console.log(Math.min(...s.split(" ").map (s => s.length))); // Find the minimum length of words in the string
    // or use reduce to find the shortest word length
    // return s.split(' ').reduce((shortest, word) => Math.min(shortest, word.length), Infinity);
    // or use a for loop to iterate through the words and find the shortest length
  // Split the string into words, map each word to its length, and find the minimum length
    return s.split(' ')
            .reduce((shortest, word) => Math.min(shortest, word.length), Infinity);
}   
// Example usage:
console.log(findShort("The quick brown fox jumps over the lazy dog")); // Output: 3
console.log(findShort("Hello World")); // Output: 5
console.log(findShort("This is a test sentence")); // Output: 1

function dnaStrand(dna) {
    // Create a mapping of DNA bases to their complements
    const complement = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    };
    
    // Split the input string into an array of characters, map each character to its complement, and join them back into a string
    return dna.split('').map(base => complement[base]).join('');
}
// Example usage:
console.log(dnaStrand("AAAA")); // Output: "TTTT"
console.log(dnaStrand("ATTGC")); // Output: "TAACG" 

function decendingOrder(n){
  return Number(String(n).split('').sort().reverse().join(''));
}

// Example usage:
console.log(decendingOrder(42145)); // Output: 54421    
console.log(decendingOrder(145263)); // Output: 654321
console.log(decendingOrder(123456789)); // Output: 987654321

function positiveSum(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
          sum += arr[i];
      }
  }
  return sum;
}

console.log(positiveSum([1,2,3,4,5])); // Output: 15
console.log(positiveSum([-1,-2,-3,-4,-5])); // Output: 0
console.log(positiveSum([1,-2,3,4,-5])); // Output: 8
console.log(positiveSum([])); // Output: 0

function isIsogram(str) {
  const lowercaseStr = str.toLowerCase();
  const uniqueChars = new Set();
  
  for (let i = 0; i < lowercaseStr.length; i++) {
      const char = lowercaseStr[i];
      
      if (uniqueChars.has(char)) {
          return false;
      }
      
      uniqueChars.add(char);
  }
  
  return true;
}

// Example usage:
console.log(isIsogram("Dermatoglyphics")); // Output: true
console.log(isIsogram("aba")); // Output: false
console.log(isIsogram("moOse")); // Output: false
console.log(isIsogram("isogram")); // Output: true

function isIsogram2(str){
return new Set(str.toUpperCase()).size == str.length;
}

// Example usage:
console.log(isIsogram2("Dermatoglyphics")); // Output: true
console.log(isIsogram2("aba")); // Output: false
console.log(isIsogram2("moOse")); // Output: false
console.log(isIsogram2("isogram")); // Output: true

function filter_list(l) {
  // Return a new list containing only the integers from the input list
  return l.filter(item => Number.isInteger(item));
}
// Example usage:
console.log(filter_list([1, 2, 'a', 'b'])); // Output: [1, 2]
console.log(filter_list([1, 'a', 'b', 0, 15])); // Output: [1, 0, 15]
console.log(filter_list([1, 2, 'aasf', '1', '123', 123])); // Output: [1, 2, 123]

function findSmallestInt(arr) {
  // Return the smallest integer in the array
  return Math.min(...arr);
}

// Example usage:
console.log(findSmallestInt([34, 15, 88, 2])); // Output: 2
console.log(findSmallestInt([34, -345, -1, 100])); // Output: -345
console.log(findSmallestInt([34, 15, 88, 2, -5])); // Output: -5

function nbYear(p0, percent, aug, p) {
  let years = 0;
  while (p0 < p) {
      p0 += Math.floor(p0 * percent / 100) + aug;
      years++;
  }
  return years;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000)); 
console.log(nbYear(1500000, 0.25, 1000, 2000000));

function repeatStr(n, s) {
  let str = "";
  for (let i = 0; i < n; i++) {
      str += s;
  }
  return str;
}

// Example usage:
console.log(repeatStr(3, "hello")); // Output: "hellohellohello"
console.log(repeatStr(5, "world")); // Output: "worldworldworldworld

function isTriangle(a,b,c){
  if(a+b>c && a+c>b && b+c>a){
      return true;
  }else{
      return false;
  }
}
//Usage examples:
console.log(isTriangle(3, 4, 5)); // Output: true
console.log(isTriangle(1, 2, 3)); // Output: false
console.log(isTriangle(2, 2, 2)); // Output: true
console.log(isTriangle(5, 10, 25)); // Output: false

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  if (Math.sqrt(sq) % 1 === 0){
    return ((Math.floor(Math.sqrt(sq)))+1)**2;
  } else {
    return -1;
  }
}
// Example usage:
console.log(findNextSquare(121)); // Output: 144
console.log(findNextSquare(625)); // Output: 676
console.log(findNextSquare(114)); // Output: -1

function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, '#');
}
// Example usage:
console.log(maskify("1234567890")); // Output: "######7890"
console.log(maskify("1234")); // Output: "1234"
console.log(maskify("1234567890123456")); // Output: "############3456"
console.log(maskify("")); // Output: ""

function rowSumOddNumbers(n) {
  // The sum of the first n odd numbers is n^2
  return n * n * n;
}

// Example usage:
console.log(rowSumOddNumbers(1)); // Output: 1
console.log(rowSumOddNumbers(2)); // Output: 8
console.log(rowSumOddNumbers(3)); // Output: 27
console.log(rowSumOddNumbers(4)); // Output: 64

function divisors(integer) {
  let count = [];
  for (let i = 2; i <= integer-1; i++) {
      if (integer % i === 0) {
          count.push(i);
      }
  }
  return count.length > 0 ? count : `${integer} is prime`;
}

console.log(divisors(24));
console.log(divisors(36));
console.log(divisors(48));
console.log(divisors(13));

function removeStr(str) {
  // Remove all non-alphabetic characters from the string
  return str.replace(/[^a-zA-Z]/g, '');
}

// Example usage:
console.log(removeStr("Hello, World!")); // Output: "HelloWorld"
console.log(removeStr("123abc!@#")); // Output: "abc"
console.log(removeStr("No special chars!")); // Output: "Nospcialchars"

function divideStrings(a,b) {
  // Check if both inputs are strings
if (typeof a !== 'string' || typeof b !== 'string') {
throw new Error('Both inputs must be strings');
}

// Convert strings to numbers and perform division
const numA = parseFloat(a);
const numB = parseFloat(b);

// Check for division by zero
if (numB === 0) {
throw new Error('Division by zero is not allowed');
}
let result = [];
result.push((Math.floor(numA / numB)).toString());
result.push((numA % numB).toString());
return result;
} 

// Example usage:
console.log(divideStrings("10", "3")); // Output: [3, 1]
console.log(divideStrings("20", "4")); // Output: [5, 0]

function basicOp(operation, value1, value2){
  //Code
  switch(operation){
    case '+' : 
    return value1 + value2;
    case '-' : 
    return value1 - value2;
    case '*' : 
    return value1 * value2;
    case '/' : 
    return value1 / value2;
    default: 
  return 0;
      }
}
// Example usage:
console.log(basicOp('+', 5, 3)); // Output: 8
console.log(basicOp('-', 5, 3)); // Output: 2
console.log(basicOp('*', 5, 3)); // Output: 15
console.log(basicOp('/', 6, 3)); // Output: 2

function checkWord(board, word) {
  const rows = board.length;
  const cols = board[0].length;

  function dfs(r, c, index) {
      if (index === word.length) return true; // Found the word
      if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[index]) return false; // Out of bounds or character mismatch

      const temp = board[r][c]; // Save the current character
      board[r][c] = '#'; // Mark as visited

      // Explore all 4 directions
      const found = dfs(r + 1, c, index + 1) ||
                    dfs(r - 1, c, index + 1) ||
                    dfs(r, c + 1, index + 1) ||
                    dfs(r, c - 1, index + 1);

      board[r][c] = temp; // Restore the character
      return found;
  }

  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (board[r][c] === word[0] && dfs(r, c, 0)) {
              return true;
          }
      }
  }
  return false;
}

// Example usage:
const board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']];
const word = 'ABCCED';
console.log(checkWord(board, word)); // Output: true
// Example usage with a different word
const word2 = 'ABCCED'; // Output: false
console.log(checkWord(board, word2)); // Output: false
// Example usage with a different word
const word3 = 'ABCCED'; // Output: false
console.log(checkWord(board, word3)); // Output: false
// Example usage with a different word
const word4 = 'ABCCED'; // Output: false
console.log(checkWord(board, word4)); // Output: false

function add(a, b) {
  let sum = ''
  let c = 0
   a = a.split('').reverse()
   b = b.split('').reverse()
  const max = Math.max(a.length , b.length)
  
  for(let i = 0 ; i < max ;i++){
    const digitA = i < a.length ? parseInt(a[i]) : 0
    const digitB = i < b.length ? parseInt(b[i]) : 0
    
    const Sum = digitA + digitB + c
    sum = (Sum % 10) + sum
    c = Math.floor(Sum / 10)
  }
  if(c > 0){
    sum = c + sum
  }
  // Remove leading zeros from the sum
  // while (sum.length > 1 && sum[0] === '0') {
  //   sum = sum.substring(1);
  while(sum.length > 1 && sum[0] === '0'){
    sum = sum.substring(1)
  }
  return sum
}
// Example usage:
console.log(add('123', '456')); // Output: '579'
console.log(add('999', '1')); // Output: '1000'
console.log(add('0', '0')); // Output: '0'
