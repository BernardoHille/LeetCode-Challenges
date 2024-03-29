/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function(nums) {
    let countingSort = () => {
        // Create the counting hash map.
        let counts = {};
        // Find the minimum and maximum values in the array.
        let minVal = Math.min(...nums); 
        let maxVal = Math.max(...nums); 

        // Update element's count in the hash map.
        nums.forEach(val => { 
            if (counts[val] == undefined) {
                counts[val] = 0;
            }
            counts[val] += 1 
        });
        
        let index = 0;
        // Place each element in its correct position in the array.
        for (let val = minVal; val <= maxVal; val += 1) {
            // Append all 'val's together if they exist.
            while (counts[val] > 0) {
                nums[index] = val;
                index += 1;
                counts[val] -= 1;
            }
        }
    }
    
    countingSort(nums);
    return nums;
};