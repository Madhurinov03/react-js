import React from "react";
import ReactDOM from "react-dom/client";
// const heading  = React.createElement(
//   "h1",
//   {id:"heading"},
//   "This is normal React"
// );
// console.log(heading);
//React Element using JSX
// const  jsxheading = <h1>This is React using JSX</h1>
// console.log(jsxheading);

//React Functional Component 1
const Title=()=>(
  <h1 className="head">React Title</h1>
);
//React Functional Component 2
const HeadingComponent=() =>(
  <div id="container"> 
  <Title/>
<h1 className="heading">This is React Functional Component</h1>
</div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

