/**
 * @param {string[]} strs
 * @return {number}
 */
function isSubsequence(str1, str2) {
    let i = 0;
    for (let j = 0; j < str2.length && i < str1.length; j++) {
        if (str1.charAt(i) === str2.charAt(j)) {
            i++;
        }
    }
    return i === str1.length;
}

function findLUSlength(strs) {
    strs.sort((a, b) => b.length - a.length); // Sort the strings by length in descending order
    for (let i = 0; i < strs.length; i++) {
        let j;
        for (j = 0; j < strs.length; j++) {
            if (i === j) {
                continue;
            }
            if (isSubsequence(strs[i], strs[j])) {
                break;
            }
        }
        if (j === strs.length) {
            return strs[i].length;
        }
    }
    return -1;
}
