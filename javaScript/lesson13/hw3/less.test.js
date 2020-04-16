import { squareArray, checkSum, increaseEvenEl, reverseArray } from "./index";
// lesson 6 task2
it("should get number to square", () => {
  const result = squareArray([1, 2, 3, 4]);
  expect(result).toEqual([1, 4, 9, 16]);
});

it("should get emty string", () => {
  const result = squareArray("");
  expect(result).toEqual(null);
});

it("should get number 12", () => {
  const result = squareArray(12);
  expect(result).toEqual(null);
});

// lesson 6 hw3

it("should get sum > 100", () => {
  const result = checkSum([1, 4, 44, 67]);
  expect(result).toEqual(true);
});

it("should get sum < 100", () => {
  const result = checkSum([1, 4, 44]);
  expect(result).toEqual(false);
});

it("should get arguments it's not arr", () => {
  const result = checkSum("12");
  expect(result).toEqual(null);
});

// lesson 6 hw4

it("should get increment even numbers of array by delta", () => {
  const result = increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20);
  expect(result).toEqual([22, 5, 26, 28, 11, 9, 24]);
});
it("should get first arguments string", () => {
  const result = increaseEvenEl("12,12", 20);
  expect(result).toEqual(null);
});
it("should get first arguments object", () => {
  const result = increaseEvenEl({ age: "26" }, 20);
  expect(result).toEqual(null);
});

// lesson 6 hw5
it("should get first arguments object", () => {
  const result = reverseArray([1, 5, 6, 8, 9]);
  expect(result).toEqual([9, 8, 6, 5, 1]);
});
it("should get first arguments object", () => {
  const result = reverseArray({ age: "26" });
  expect(result).toEqual(null);
});
it("should get first arguments string", () => {
  const result = reverseArray("age 26");
  expect(result).toEqual(null);
});
