import Contact from "../Components/Contact";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
test("Testing whether the heading inside the component loads successfully", () => {
  render(<Contact></Contact>);
  const heading = screen.getByRole("heading");
  //assert
  expect(heading).toBeInTheDocument();
});

test("Testing whether there's a button inside the component", () => {
  render(<Contact></Contact>);
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
});

test("Testing whether input box is in the document", () => {
  //Rendering the component inside JS dom to test
  render(<Contact />);

  //Fetching the element by role from the js dom
  const textbox = screen.getByRole("textbox");
  console.log(textbox?.length);
  //Assertion - Expecting the fetched element to be inside the dom
  expect(textbox).toBeInTheDocument();
});

test("Testing whether there is a label inside the component", () => {
  render(<Contact />);

  const label = screen.getByLabelText("Name");
  expect(label).toBeInTheDocument();
});
