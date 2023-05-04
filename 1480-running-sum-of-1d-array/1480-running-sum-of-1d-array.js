/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    const result = [];
    let currentSum = 0;

    for (let num of nums) {
        currentSum += num;
        result.push(currentSum);
    }

    return result;
};