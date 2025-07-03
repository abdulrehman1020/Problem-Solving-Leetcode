/**
 * @param {number} n
 * @return {number}
 */
function tribonacci(n) {
    const dp = [0, 1, 1];
    if (n < 3) return dp[n];
    while (n-- > 2) {
        dp.push(dp.reduce((a, b) => a + b));
        dp.shift();
    }
    return dp.at(-1);
}