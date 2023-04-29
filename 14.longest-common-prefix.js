/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // Get first string of the array
    let result = strs[0];

    // Starting with the second element, we start iterating over the array
    for (let i = 1; i < strs.length; i++) {
        // While current string not start from our substring (result)
        while (!strs[i].startsWith(result)) {
            // Remove the last letter of the string
            const arr = result.split('');
            arr.pop();
            result = arr.join('');
        }
    }

    return result;
};
// @lc code=end

