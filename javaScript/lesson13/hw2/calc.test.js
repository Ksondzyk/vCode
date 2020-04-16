import { calc } from "./calculator";

it("should get emty arr", () => {
  const result = calc([]);
  expect(result).toEqual(null);
});

it("should get square numbers", () => {
  const result = calc("1 + 2");
  expect(result).toEqual("1 + 2 = 3");
});

it("should get square numbers", () => {
  const result = calc("2 - 1");
  expect(result).toEqual("2 - 1 = 1");
});

it("should get square numbers", () => {
  const result = calc("2 * 2");
  expect(result).toEqual("2 * 2 = 4");
});

it("should get square numbers", () => {
  const result = calc("4 / 2");
  expect(result).toEqual("4 / 2 = 2");
});
