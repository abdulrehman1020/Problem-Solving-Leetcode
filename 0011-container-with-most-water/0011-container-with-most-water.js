/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let ans=0;
    while(left<right){
        let width = right-left;
        let length = Math.min(height[left], height[right])
        let area = width * length;
        ans = Math.max(ans, area);
        if(height[left]<height[right]){
            left++;
        }else{
            right--;
        }
    }
    return ans;
};