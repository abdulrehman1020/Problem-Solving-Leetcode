/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let res = 0;

    for (let i = 1; i < points.length; i++) {
        res += Math.max(
            Math.abs(points[i][0] - points[i - 1][0]),
            Math.abs(points[i][1] - points[i - 1][1])
        );
    }

    return res;  
};