/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var solve = (nums, output, ans, i) =>{
   //base case
   if(i>=nums.length){
    ans.push([...output])
    return
   }
   //exclude
   solve(nums, output, ans, i+1)
   //include
   output.push(nums[i])
   solve(nums, output, ans, i+1)
   output.pop()
} 
var subsets = function(nums) {
    const ans = []
    const output = []
    solve(nums, output, ans, 0)
    return ans;
};