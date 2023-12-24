

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const vowelStack = [];
  for (let i=0; i < s.length; i++) {
      if (vowels.includes(s[i])) {
          vowelStack.push(s[i])
      }
  }  
  const result = [];
  for (let i=0; i < s.length; i++) {
      if (vowels.includes(s[i])) {
          result.push(vowelStack.pop())
      } else {
        result.push(s[i])
      }
  }  
  return result.join('');
};


const test = require("../utils/test").test;
test(reverseVowels('hello'), 'holle' )