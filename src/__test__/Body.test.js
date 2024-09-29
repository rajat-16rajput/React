import { screen, render } from "@testing-library/react";
import Body from "../Components/Body";
test("Testing whether Home text is present", () => {
  render(<Body></Body>);
  const btn = screen.getAllByRole("button");
  expect(btn.length).not.toBe(1);
});
