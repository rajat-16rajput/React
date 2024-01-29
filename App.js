import React from "react";
import ReactDOM from "react-dom";

// ● Create a Nested header Element using React.createElement(h1,h2,h3 inside a
//   div with class “title”)
//   ○ Create the same element using JSX
//   ○ Create a functional component of the same with JSX
//   ○ Pass attributes into the tag in JSX
//   ○ Composition of Component(Add a component inside another)
//   ○ {TitleComponent} vs {<TitleComponent/>} vs
//   {<TitleComponent></TitleComponent>} in JSX

// const answer = React.createElement("div", {}, [
//   React.createElement("h1", {}, "H1 space"),
//   React.createElement("h2", {}, "H2 space"),
//   React.createElement("h2", {}, "H3 space"),
// ]);

const headerElement = (
  <div>
    <h1>H1 space</h1>
    <h2>H2 space</h2>
    <h3>H3 space</h3>
  </div>
);

const Temp = () => {
  return <h2>HE MAn</h2>;
};

const FunctionalComponent = () => {
  return (
    <>
      <Temp></Temp>
      {headerElement}
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent />);
