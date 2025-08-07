/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse = 0;
    let num = x;
    while(num>0){
        let rem = num % 10;
        reverse = (reverse * 10) + rem;
        num = Math.floor(num/10);
    }
    return x === reverse
};