/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 0이 나온 횟수만큼 zeroCount에 기록, 0이면 zeroCount++ 하고, 아니면 바로 append
 */
var moveZeroes = function (nums) {
  const copied = [...nums];
  nums.length = 0;
  let zeroCount = 0;
  for (let i = 0; i < copied.length; i++) {
    const num = copied[i];
    if (num === 0) {
      zeroCount++;
    } else {
      nums.push(num);
    }
  }

  for (let j = 0; j < zeroCount; j++) {
    nums.push(0);
  }
  return nums;
};

const test = require("../utils/test").test;
test(moveZeroes([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]);
test(moveZeroes([0]), [0]);
