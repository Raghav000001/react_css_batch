import React from "https://esm.sh/react@19.0.0-beta-04b058868c-20240508/?dev";
import ReactDOMClient from "https://esm.sh/react-dom@19.0.0-beta-04b058868c-20240508/client/?dev";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

// const heading = React.createElement(
//   "h1",
//   { id: "heading", class: "first_heading" },
//   "hello world"
// );
// console.log(heading);

const nestedElement = React.createElement("div",{},
    [
    React.createElement("h1",{id:"first child"},"first child"),
     React.createElement("h1",{id:"second child"},"second child")
    ]
)

// jsx
// const heading = (<div> 
//     <h2> h2</h2>
//     <h2> h2</h2>
//      </div>)
// root.render(heading);


root.render(nestedElement);