/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // Step 1: Count the frequency of each element
    const frequencyMap = new Map();
    for (const num of nums) {
        if (frequencyMap.has(num)) {
            frequencyMap.set(num, frequencyMap.get(num) + 1);
        } else {
            frequencyMap.set(num, 1);
        }
    }

    // Step 2: Convert the map to an array of [key, value] pairs
    const frequencyArray = Array.from(frequencyMap);

    // Step 3: Sort the array based on frequency in descending order
    frequencyArray.sort((a, b) => b[1] - a[1]);

    // Step 4: Extract the top k elements
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(frequencyArray[i][0]);
    }

    return result;
};