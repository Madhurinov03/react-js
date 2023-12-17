const h1Element = React.createElement("h1", {}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1Element);

//nested react
const parentNode = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "childNode" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ])
);
console.log(parentNode);
root.render(parentNode);
