/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let n = nums.length;
  let totalSum = (n * (n+1)) / 2;
  for(num of nums){
    totalSum -= num;
  }
  return totalSum;
};
 