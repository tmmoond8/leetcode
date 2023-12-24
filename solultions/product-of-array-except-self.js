/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const d = {};
    const results = []
    for (let i=0; i < nums.length; i++) {
      const num = nums[i];
      d[num] = d[num] ? d[num] + 1 :1;
    }
    for (let i =0; i < nums.length; i++) {
      const num = nums[i];
      results[i] = Object.entries({...d, [num]:  d[num] - 1}).reduce((acc, [key, value]) => {
        acc *= Math.pow(Number(key), value)
        return acc;
      }, 1)
    }
    return results;
};

const test = require("../utils/test").test;
test(productExceptSelf([1,2,3,4]), [24,12,8,6])
test(productExceptSelf([-1,1,0,-3,3]), [0,0,9,0,0])