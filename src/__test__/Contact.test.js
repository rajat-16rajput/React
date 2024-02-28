import Contact from "../Components/Contact";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
test("Testing whether the component loads successfully", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  //assert
  expect(heading).toBeInTheDocument();
});

test("Testing whether theres a button inside the component", () => {
  render(<Contact></Contact>);
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
});
