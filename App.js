// const header = React.createElement(
//   "div",
//   { id: "temp" },
//   React.createElement("div", {}, [
//     React.createElement("h1", {}, "hello world"),
//     React.createElement("h2", {}, "hello world"),
//   ])
// );

const rajat = React.createElement("div", { id: "temp" }, [
  React.createElement("h1", {}, "Jajsaks"),
  React.createElement("h2", {}, "Hello "),
  React.createElement("h3", {}, "Hi "),
]);

const root = ReactDOM.createRoot(document.getElementById("footer"));
root.render(rajat);
