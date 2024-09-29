import Contact from "../Components/Contact";
import "@testing-library/jest-dom"; // imp library which  contains mtds like toBeInTheDocument(), toBe(), toBeNaN(), etc
import { screen, render } from "@testing-library/react";

describe("");
test("Testing whether the component contains heading", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  //assert
  expect(heading).toBeInTheDocument();
});

test("Testing whether theres a button inside the component", () => {
  render(<Contact />);
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
});

test("Testing whether img is in the document", () => {
  render(<Contact />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});

test("Testing whether the text Contact Us is present in the DOM", () => {
  render(<Contact />);
  //assertion
  expect(screen.getByText("Contact Us")).toBeInTheDocument();
});

test("Testing whether exactly 2 input boxes are present in the Contact component", () => {
  render(<Contact />);

  const NumberOfInputBoxes = screen.getAllByRole("textbox");

  expect(NumberOfInputBoxes.length).toBe(2);
});
