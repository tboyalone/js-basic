
function multiply(a, b) {
    if (a === '0' || b === '0') return '0';
    
    let result = '0';
    
    for (let i = b.length - 1; i >= 0; i--) {
        let carry = 0;
        let currentProduct = '';
        
        for (let j = a.length - 1; j >= 0; j--) {
            const product = (parseInt(b[i]) * parseInt(a[j])) + carry;
            currentProduct = (product % 10) + currentProduct;
            carry = Math.floor(product / 10);
        }
        
        if (carry > 0) {
            currentProduct = carry + currentProduct;
        }
        
        currentProduct += '0'.repeat(b.length - 1 - i);
        result = add(result, currentProduct);
    }
    
    return result;
}

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
    
    
    while(sum.length > 1 && sum[0] === '0'){
      sum = sum.substring(1)
    }
    
    return sum
    
  }

  

  // Example usage:console.log(multiply('123', '456')); // Output: '56088'
console.log(multiply('123456789', '987654321')); // Output: '121932631112635269'
console.log(multiply('0', '987654321')); // Output: '0'