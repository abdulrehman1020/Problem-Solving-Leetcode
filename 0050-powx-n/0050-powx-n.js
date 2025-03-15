/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) { return 1; }
    if (x === 0) { return 0; }
    
    const isNegative = n < 0;
    n = Math.abs(n);
    let result = 1;
    let base = x;
    
    while (n > 0) {
        if (n % 2 === 1) {
            result *= base;
        }
        base *= base;
        n = Math.floor(n/2);
        if (Math.abs(result) < Number.MIN_SAFE_INTEGER && isNegative) { 
            return 0;
        }
    }
    result = isNegative ? 1 / result : result;
    return Math.abs(result) < Number.MIN_VALUE ? 0 : result;    
};