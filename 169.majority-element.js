/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
let majority = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === majority) {
      count++;
    } else if (count > 0) {
      count--;
    } else {
      majority = nums[i];
      count = 1;
    }
  }

  return majority;

};
// @lc code=end

