/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
 const dictionary = new Set(words);
 const answer = [];
 for (let word of words) {
   const length = word.length;
   const dp = Array(length + 1).fill(false);
   dp[0] = true;
   for (let i = 1; i <= length; ++i) {
     for (let j = (i == length ? 1 : 0); !dp[i] && j < i; ++j) {
       dp[i] = dp[j] && dictionary.has(word.substring(j, i));
     }
   }
   if (dp[length]) {
     answer.push(word);
   }
 }
 return answer;
};