const add = require("./add");

//test1
test("should return 0 for an empty string", () => {
  const result = add("");
  console.log(`Test result for empty string: ${result}`);
  expect(add("")).toBe(0);
});

//test 2
test("should return the number for a single number", () => {
  const result = add("1");
  console.log(`Test result for single number "1": ${result}`);
  expect(result).toBe(1);
});

//test 3
test("should return the sum for two numbers", () => {
  const result = add("1,2");
  console.log(`Test result for two numbers "1,2": ${result}`);
  expect(result).toBe(3);
});

//test 4
test("should return the sum for multiple numbers", () => {
  const result = add("1,2,3");
  console.log(`Test result for multiple numbers "1,2,3": ${result}`);
  expect(result).toBe(6);
});

//test 5
test("should handle new lines between numbers", () => {
  const result = add("1\n2,3");
  console.log(`Test result for new lines "1\n2,3": ${result}`);
  expect(result).toBe(6);
});

//test 6
test("should support different delimiters", () => {
  const result = add("//;\n1;2");
  console.log(`Test result for custom delimiter "//;\\n1;2": ${result}`);
  expect(result).toBe(3);
});

//test 7
test("should throw an exception for negative numbers", () => {
  try {
    add("1,-2,3");
  } catch (e) {
    console.log(`Test result for negative numbers "1,-2,3": ${e.message}`);
    expect(e.message).toBe("Negative numbers not allowed: -2");
  }
});

//test 8
test("should ignore numbers larger than 1000", () => {
  const result = add("2,1001");
  console.log(`Test result for ignoring large numbers "2,1001": ${result}`);
  expect(result).toBe(2);
});
