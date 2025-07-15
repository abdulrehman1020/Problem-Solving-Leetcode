/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
  let arr = [];

  let sort = nums.sort((a,b)=>a-b)

  while (nums.length > 0) {
    let Alice = sort.shift();
    let Bob = sort.shift();
    arr.push(Bob, Alice);
  }
  
  return arr;
};