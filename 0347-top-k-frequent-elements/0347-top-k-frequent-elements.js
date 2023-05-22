/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  // Create a frequency map to store the number of occurrences of each element.
  const frequencyMap = new Map();
  for (const num of nums) {
    if (!frequencyMap.has(num)) {
      frequencyMap.set(num, 1);
    } else {
      frequencyMap.set(num, frequencyMap.get(num) + 1);
    }
  }

  // Create an array of arrays to store the key-frequency pairs.
  const pairs = [];
  for (const [key, value] of frequencyMap.entries()) {
    pairs.push([key, value]);
  }

  // Sort the pairs by frequency in descending order.
  pairs.sort((a, b) => b[1] - a[1]);

  // Get the first k pairs.
  const results = pairs.slice(0, k);

  // Return the results.
  return results.map(pair => pair[0]);
};