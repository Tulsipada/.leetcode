/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(arr) {
    for(let i=arr.length-1; i>=0; i--){
    if (arr[i]<9) {
        arr[i] ++ 
        console.log(arr[i])
        return arr
    }
    arr[i] = 0
    }
    arr.unshift(1);
    return arr;
};
console.log(plusOne([1,8,9]))

// @lc code=end

