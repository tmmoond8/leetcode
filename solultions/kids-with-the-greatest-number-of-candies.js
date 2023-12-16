/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const greaterNumber = candies.reduce((acc, n) => Math.max(acc, n), 0);
  function mapper(candyNumber) {
    return candyNumber + extraCandies >= greaterNumber;
  }
  return candies.map(mapper);
};

const test = require("../utils/test").test;
test(kidsWithCandies([2, 3, 5, 1, 3], 3), [true, true, true, false, true]);
test(kidsWithCandies([12, 1, 12], 10), [true, false, true]);
// test("abc", "ab");
