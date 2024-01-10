/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sPoint = 0;
  let tPoint = 0;

  while (tPoint < t.length) {
    const sc = s[sPoint];
    const tc = t[tPoint];

    if (sc === tc) {
      sPoint++;
      tPoint++;

      if (sPoint === s.length) {
        return true;
      }

      continue;
    }

    if (sc !== tc) {
      tPoint++;
    }
  }

  return false;
};

const test = require("../utils/test").test;
test(isSubsequence("abc", "ahbgdc"), true);
test(isSubsequence("axc", "ahbgdc"), false);
