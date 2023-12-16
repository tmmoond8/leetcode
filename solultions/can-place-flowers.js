/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (n === 0) {
      return true;
    }
    const beforeCheck = i - 1 < 0 || flowerbed[i - 1] === 0;
    const nextCheck = i + 1 >= flowerbed.length || flowerbed[i + 1] === 0;
    if (beforeCheck && nextCheck && flowerbed[i] === 0) {
      flowerbed[i] = 1;
      n--;
    }
  }

  return n === 0;
};

const test = require("../utils/test").test;

test(canPlaceFlowers([1, 0, 0, 0, 1], 1), true);
test(canPlaceFlowers([1, 0, 0, 0, 1], 2), false);
test(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2), false);
test(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2), true);
