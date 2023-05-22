/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
  const count = {};
  let maxCount = 0;
  let mostFrequent = -1;

  for (const num of nums) {
    if (num % 2 === 0) {
      if (count[num]) {
        count[num]++;
      } else {
        count[num] = 1;
      }
      if (count[num] > maxCount) {
        maxCount = count[num];
        mostFrequent = num;
      } else if (count[num] === maxCount && num < mostFrequent) {
        mostFrequent = num;
      }
    }
  }

  return mostFrequent;
};