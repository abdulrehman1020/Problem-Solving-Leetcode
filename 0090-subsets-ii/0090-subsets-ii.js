/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var solve = (nums, ans, output, i) =>{
    if(i>=nums.length){
        ans.push([...output]);
        return
    }
    output.push(nums[i])
    solve(nums, ans, output, i+1)
    output.pop()

    while(i+1 < nums.length && nums[i] == nums[i+1]){
        i++
    }

    solve(nums, ans, output, i+1)
}

var subsetsWithDup = function(nums) {
    const ans = [];
    const output = [];
    nums.sort((a,b)=> a-b)
    solve(nums, ans, output, 0)
    return ans;
};