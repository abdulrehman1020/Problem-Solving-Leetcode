/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const frequency = new Map()
    nums.forEach(item =>{
        frequency.set(item, (frequency.get(item) || 0) + 1);
    })
    const threshold = nums.length/2
    for (const [num, count] of frequency) {
        if (count > threshold) {
            return num; 
        }
    }
};