// const header = React.createElement(
//   "div",
//   { id: "temp" },
//   React.createElement("div", {}, [
//     React.createElement("h1", {}, "hello world"),
//     React.createElement("h2", {}, "hello world"),
//   ])
// );
import React from "react";
import ReactDOM from "react-dom";

const Title = () => {
  return <h2>Hellu world from element</h2>;
};
const HeadingComponent = () => {
  return (
    <div>
      {Title()}
      <h1>Hello World inside functional component </h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
