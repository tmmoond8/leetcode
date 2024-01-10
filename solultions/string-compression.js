/**
 * @param {character[]} chars
 * @return {number}
 * chars 배열을 돌면서 연속적으로 나오는 문자와 반복해서 나온 횟수를 count에 저장.
 * 현재 문자가 이전 문자와 같다면 count++
 * 현재 문자가 이전 문자와 다르면, 현재까지 문자와 횟수를 추가
 * 이전문자는 현재 문자로 대체하고, count 1초기화
 * 배열이 끝나면 이전 문자가 남아있을텐데 마져 붙이기
 */
var compress = function (chars) {
  const originChars = [...chars];
  chars.length = 0;
  let prevChar = null;
  let count = 0;

  for (let i = 0; i < originChars.length; i++) {
    const c = originChars[i];
    if (c === prevChar) {
      count++;
      continue;
    }
    if (c !== prevChar && prevChar) {
      chars.push(prevChar);
      if (count !== 1) {
        chars.push(...count.toString().split(""));
      }
    }
    prevChar = c;
    count = 1;
  }

  if (prevChar) {
    chars.push(prevChar);
    if (count !== 1) {
      chars.push(...count.toString().split(""));
    }
  }

  return chars.length;
};

const test = require("../utils/test").test;
test(compress(["a", "a", "b", "b", "c", "c", "c"]), 6);
test(compress(["a"]), 1);
test(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]),
  4
);
