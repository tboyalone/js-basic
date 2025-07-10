
var sum = function(number){
	return p(number, number);
}
var memo = [];
var p = function (n, m){
	if (m == 0 ) { return 0;};
	if (n == 0) { return 1};
	if (n < 0) { return 0};
	if (memo[n] == undefined) memo[n] = [];
	var result = memo[n][m];
	if (typeof result != 'number') {
		result = p(n-m, m) + p(n, m-1);
		memo[n][m] = result;
	};
	return result;
}
console.log(sum(10));
console.log(p(10, 10));

//-----------------------------------------------
// This function calculates the number of ways to sum up to a number using integers from 1 to n.
// It uses memoization to optimize the recursive calls.
// The function `sum` is the main entry point, and it calls the recursive function `split`.
// It returns the total number of unique combinations that sum to the given number.
// The memoization array `cache` is used to store previously computed results to avoid redundant calculations.
// The function is designed to handle cases where the number can be split into parts of varying sizes.
// The function is efficient and can handle larger numbers due to the memoization technique.

var memo = [];

function sum(n, m = n) {
    if (n == 0) return 1;
    if (n < 0 || m == 0) return 0;
    if (memo[n] && memo[n][m]) return memo[n][m];
    let total = sum(n, m - 1) + sum(n - m, m);
    if (!memo[n]) {
        memo[n] = [];
    }
    memo[n][m] = total;
    return total;
}

function sum(num) {
  let cache = [];
  function split(num, add){
    if(num < 1 || add < 1) return 0;
    if(num == 1 || add == 1) return 1;
    if(num < add) {
      if(cache[num] == undefined){ cache[num] = [];}
      if(!cache[num][num]){
        cache[num][num] = split(num, num);
      }  
      return cache[num][num];
    }
    if(num == add){
      if(cache[num] == undefined){ cache[num] = [];}
      if(!cache[num][add - 1]){
        cache[num][add - 1] = split(num, add - 1)
      }
      return cache[num][add - 1] + 1;
    }
    if(num > add){
      if(cache[num] == undefined){ cache[num] = [];}
      if(!cache[num][add - 1]){
        cache[num][add - 1] = split(num, add - 1);
      }
      if(cache[num - add] == undefined){ cache[num - add] = [];}
      if(!cache[num - add][add]){
        cache[num - add][add] = split((num - add), add)
      }
      return cache[num][add - 1] + cache[num - add][add]
    } 
  }
  return split(num, num);
}

console.log(sum(10)); // Outputs the number of ways to sum to 10 using integers from 1 to 10
console.log(sum(20)); // Outputs the number of ways to sum to 20 using integers


function sum(num){
  if(num<0){return 0;}
  var arr=[];
  for(let i=0;i<=num+1;i++){
      arr[i]=0;
  }
  arr[0]=1;
  console.log(arr);
  for(let i=1;i<=num;i++){
      for(let j=i;j<=num;j++){
          arr[j]+=arr[j-i];
      }
  }
  return arr[num];
}
console.log(sum(10)); // Outputs the number of ways to sum to 10 using integers from 1 to 10
console.log(sum(20)); // Outputs the number of ways to sum to 20 using integers

function sum (num) {
  var mem = [1], p = function (n) {
    var k, i, acc = 0;
    
    if (mem[n]) return mem[n];
    else if (n < 0) return 0;

    // P(n) = Σ (-1)k+1[P(n - k(3k-1)/2) + P(n - k(3k+1)/2)]
    for (k = 1, i = 1; k <= n - k + 1; k++, i *= -1) {
      acc += i * (p(n - k * (3 * k - 1) / 2) + p(n - k * (3 * k + 1) / 2));
    }
    mem[n] = acc; return mem[n];
  };
  
  return p(num);
}

console.log(sum(10)); // Outputs the number of ways to sum to 10 using integers from 1 to 10
console.log(sum(20)); // Outputs the number of ways to sum to 20 using integers

const sum = n => {
  if (n <= 0) return 0;
  const a = Array.from(Array(n + 1).keys()).slice(1);
  const x = [1].concat(Array.from(Array(n)).fill(0));
  const y = Array.from(Array(n + 1)).fill(0);

  for (let i = 0, l = a.length; i < l; i++) {
    for (let j = 0; j <= n; j++)
      for (let k = 0; j + k <= n; k += a[i])
        y[j + k] += x[j];
    for (let j = 0; j <= n; j++) 
      x[j] = y[j], y[j] = 0;
  }

  return x[n];
}

function sum(num) {
  const partitions = Array(num + 1).fill(0);
  partitions[0] = 1;

  for (let i = 1; i <= num; i++) {
    for (let j = i; j <= num; j++) {
      partitions[j] += partitions[j - i];
    }
  }

  return partitions.pop();
}
console.log(sum(10)); // Outputs the number of ways to sum to 10 using integers from 1 to 10
console.log(sum(20)); // Outputs the number of ways to sum to 20 using integers

function sum(num) {
  const a = Array(num + 1);
  for (let i = 1; i <= num; ++i) {
    a[i] = Array(i + 1);
    let t = 0;
    for (let j = 1; j <= i; ++j) {
      t += i > j ? a[i - j][Math.min(j, i - j)] : 1;
      a[i][j] = t;
    }
  }
  return a[num][num];
}
console.log(sum(10)); // Outputs the number of ways to sum to 10 using integers from 1 to 10
console.log(sum(20)); // Outputs the number of ways to sum to 20 using integers

// The partitions of a sum can be expressed as
//   sum-x + (all the partitions of x), for integer values of x from 1 -> sum-1
// In this way we've broken down the problem until we reach a base case, where
//   sum === 1, which has only one partition (itself)
// So that we don't duplicate partitions (e.g. 3 = 2+1 = 1+2), we make sure all the
//   elements of our partitions are expressed in descending order (2+1 is valid, 1+2 is not)
// Use a recursive function to break a large number down into smaller numbers and add these
//   partitions up to find the result.
// Since this recursive break down will likely lead to repeated function calls with the same
//   parameters, we'll probably want to use some dynamic programming to improve efficiency.
//      
// Optimizations:
//    When we're about to partition a target sum with a max partition of 1, we know
//      the partitions will ALWAYS be ALL ones, so we return early and add to the
//      partition count
//    We iterate each loop with a maximum value of Math.min(target, max). This way we
//      don't needlessly iterate over cases where our max is technically 4, but we're
//      looking for a target sum of 2, so anything greater than 2 will definitely
//      overshoot our target sum and therefore never lead to a possible partition
//    We memoize each function call combination, as they are often repeated, and thus
//      we don't need to re-calculate them.
//
//  1353101 = sum(50) loop count (no optimizations)
//   434881 = sum(50) loop count returning on i = 1
//   377750 = sum(50) loop count w/ above & limiting loop to Math.min(target, max)
//     4198 = sum(50) loop count w/ above &  and memoization

function sum(num) {
  const memo = {};
  
  function sumRecursive(target, max) {
    let partitions = 0;
    for (let i = Math.min(target, max); i > 0; i--) {
      if (i === target || i === 1)
        partitions++;
      else
        partitions += memo[`${target-i}-${i}`] || sumRecursive(target-i, i);
    }
    
    memo[`${target}-${max}`] = partitions;
    return partitions;
  }
  
  return sumRecursive(num, num);
}
// Best Practices16Clever0
 // 0ForkCompare with your solutionLink
// ThisIsUndefined, DominikReszczynski, walter_white, user5104253, Niklaus_mikaelson
const sum = (num) => {
  const dp = [1, ...new Array(num).fill(0)];
  
  for (let i = 1; i <= num; i++) {
    for (let j = i; j <= num; j++) {
      dp[j] += dp[j - i];
    }
  }

  return dp[num];
};