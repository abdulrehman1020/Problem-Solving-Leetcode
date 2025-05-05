/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums = nums.sort((a, b) => a - b);
    
    let [left, right, result] = [0, nums.length - 1, []]

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            result.push(mid);
            let adjLeft = mid - 1
            while (adjLeft >= left && nums[adjLeft] === target) {
                result.push(adjLeft)
                adjLeft--
            }
            
            let adjRight = mid + 1
            while (adjRight <= right && nums[adjRight] === target) {
                result.push(adjRight)
                adjRight++
            }
            break;
        }
    }

    return result.sort((a, b) => a - b);
};