/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const chunks = s.trim().replace(/ +/g, ' ').split(' ');
  chunks.reverse();

  return chunks.join(' ').trim()
};


const test = require("../utils/test").test;
test(reverseWords('  hello world  '), 'world hello' )
test(reverseWords('a good   example'), 'example good a' )