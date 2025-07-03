/**
 * @param {number} n
 * @return {boolean}
 */

var solve = (n, p) =>{
    let result = 2 ** p
    if(result == n) return true;
    if(result > n) return false;
    return solve(n, p+1)
}

var isPowerOfTwo = function(n) {
   return solve(n, 0)
};