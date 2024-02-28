import { sum } from "../Components/Sum";

test("This is a test function for the sum of two elements", () => {
  const result = sum(5, 7);
  expect(result).toBe(12);
});
