/*
 * @lc app=leetcode id=2652 lang=javascript
 *
 * [2652] Sum Multiples
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let result = 0;
    for (let i = 3; i <= n; i++) {
        
        if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
            result = result + i
        }
        
        
    }
    return result
};
// @lc code=end

