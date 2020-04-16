import getMinSquaredNumber from "./getMinSquaredNumber.js";

it("should get sum of number", () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});

it("should get emty arr", () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});
it("should get string", () => {
  const result = getMinSquaredNumber('12');
  expect(result).toEqual(null);
});
