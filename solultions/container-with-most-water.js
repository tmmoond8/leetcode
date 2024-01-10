/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let leftPointer = 0;
  let rightPointer = height.length - 1;

  const left = height[leftPointer];
  const right = height[rightPointer];
  console.log("left", left);
  console.log("right", right);
  const width = rightPointer - leftPointer - 1;
  console.log("width", width);
};

const test = require("../utils/test").test;
test(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
