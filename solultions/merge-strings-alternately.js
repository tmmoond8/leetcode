/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

function mergeAlternately(word1, word2) {
  let result = "";
  const minLength = Math.min(word1.length, word2.length);

  for (let i = 0; i < minLength; i++) {
    result += word1[i] + word2[i];
  }
  result += word1.substr(minLength) + word2.substr(minLength);

  return result;
}
