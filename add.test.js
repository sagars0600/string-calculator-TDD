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
