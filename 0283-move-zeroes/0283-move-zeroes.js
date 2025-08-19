/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let p1 = 0;
    let p2 = 0;
    while(p2<nums.length){
    if(nums[p2] != 0){
         if (p1 !== p2) {
                [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
            }
         p1++;
    }
    p2++;
    }
};