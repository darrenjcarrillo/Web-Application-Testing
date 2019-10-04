import React from "react";
import { render, fireEvent } from "@testing-library/React";

import Dashboard, { addValue } from "./Dashboard";
import App from "../App";

test("renders without crashing", () => {
  render(<Dashboard />);
});

// test("addValue  1 points to the current score", () => {
//   let actual;
//   let expected;

//   actual = addValue(1);
//   expected = 0;

//   expect(actual).toBe(expected);
//   expect(actual).not.toBe(4);
// });

test(" I have Baseball inside app", () => {
  const { getByText } = render(<App />);

  // assert that the "lions" header is on the DOM
  getByText("Baseball");
});

// fireEvent(
//   getByText(container, "Submit"),
//   new MouseEvent("click", {
//     bubbles: true,
//     cancelable: true
//   })
// );

// const rightClick = { button: 2 };
// fireEvent.click(getByText("Submit"), rightClick);

fireEvent("This is fireEvent", () => {
  const { rightClick } = render(<Dashboard />);

  rightClick("ball");
});
