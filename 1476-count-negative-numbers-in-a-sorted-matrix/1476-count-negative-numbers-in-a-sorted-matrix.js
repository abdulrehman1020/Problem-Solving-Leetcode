/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let n = grid.length;
    let x = 0, i = grid[0].length - 1;
    let total = 0;
    while(i >= 0 && x < n) {
        if(grid[x][i] < 0) {
            total += n - x;
            i--;
        } else {
            x++;
        }
    }
    return total;
};