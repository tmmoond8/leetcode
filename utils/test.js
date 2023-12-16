const test = (result, expected) => {
  const typeCheck = typeof result !== typeof expected;
  const primitiveEqual =
    ["boolean", "number", "string"].includes(typeof result) &&
    result !== expected;
  const jsonEqual = JSON.stringify(result) !== JSON.stringify(expected);

  if (typeCheck || primitiveEqual || jsonEqual) {
    if (typeCheck) {
      console.log("type check");
      console.log(`failed result: ${result}, expected: ${expected}`);
      return;
    }
    if (primitiveEqual) {
      console.log("primitive equal check");
      console.log(`failed result: ${result}, expected: ${expected}`);
      return;
    }

    if (jsonEqual) {
      console.log("json equal check");
      console.log(`failed result: ${result}, expected: ${expected}`);
    }
  }
  console.log("pass");
};

exports.test = test;
