import { Difference } from "../Components/Difference";

test("This function will test the difference between numbers", () => {
  const result = Difference(10, 5);
  expect(result).toBe(5);
});
