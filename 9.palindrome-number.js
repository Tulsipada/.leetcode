/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;  // Negative can't be palindrome
    
    let original = x;
    let digit, result = 0;

    // Reverse integer using bitwise operators
    while (original) {
        digit = original % 10;             // Get right most digit
        result = (result * 10) + digit;    // Multiply by 10 to create space and add digit
        original = original/10|0;          // Removes right most digit
    }

    return (result === x) ? true : false; 
};
// @lc code=end

