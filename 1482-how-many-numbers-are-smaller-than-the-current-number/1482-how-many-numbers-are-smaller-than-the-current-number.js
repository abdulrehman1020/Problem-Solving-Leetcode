/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const sortedNums = [...nums].sort((a, b) => a - b); 
  const result = [];
  for(let i = 0; i<nums.length; i++){
    const index = sortedNums.indexOf(nums[i]);
    result.push(index);
  } 
  return result;
};