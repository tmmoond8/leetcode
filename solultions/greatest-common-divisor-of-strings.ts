function gcdOfStrings(str1, str2) {
  let S = str1;
  let L = str2;
  let max = 0;
  let maxString = "";

  if (str2.length < str1.length) {
    S = str2;
    L = str1;
  }

  for (let i = 0; i < S.length; i++) {
    for (let j = i; j < S.length; j++) {
      let tmp = {
        str: "",
        max: 0,
      };
      let k = 0;

      if (S[j] === L[k]) {
        tmp.max++;
        tmp.str += S[j];
        if (tmp.max > max) {
          max = tmp.max;
          maxString = tmp.str;
        }
      } else {
        tmp.max = 0;
        tmp.str = "";
      }

      for (let k = 0; k < L.length; k++) {}
    }
  }

  return maxString;
}

gcdOfStrings("ABCABC", "ABC");
