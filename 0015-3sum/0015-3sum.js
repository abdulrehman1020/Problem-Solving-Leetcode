/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = new Set();
    let n = nums.length
    nums.sort((a, b) => a - b);
    for(let i=0; i<n; i++){
        let j= i+1;
        let k= n-1;
        while(j<k){
            let sum = nums[i]+nums[j]+nums[k];
            if(sum==0){
                ans.add(`${nums[i]},${nums[j]},${nums[k]}`)
                j++;
                k--;
            }else if(sum<0){
                j++;
            }else{
                k--;
            }
        }
    }
   return Array.from(ans, s => s.split(',').map(Number));
};