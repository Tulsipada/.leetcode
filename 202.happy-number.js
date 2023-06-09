/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// var isHappy = function(n, sum = 0, n2 = 10) {
//     if(n === 1) return true;
//     if(n2 === 0) return false;
//     for(let c of n+'') sum += +c * +c;
//     return isHappy(sum, 0, n2 - 1);
// };
// console.log(isHappy(000000000100))
var isHappy = function(n) {
    const set = new Set()
    let sum = n

    while (sum !== 1) {
        let newSum = 0
        sum.toString().split('').forEach(v => newSum += v * v)
        
        if (set.has(newSum)) return false
        set.add(newSum)
        sum = newSum
    } 

    return true 
};
// @lc code=end

/**https://leetcode.com/problems/happy-number/solutions/2661129/javascript-original-fun-solution-most-succinct-explanation/?orderBy=most_votes&languageTags=javascript */