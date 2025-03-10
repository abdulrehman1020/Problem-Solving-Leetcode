/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let clean = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reverse = clean.split('').reverse().join('');
    return clean === reverse;
};