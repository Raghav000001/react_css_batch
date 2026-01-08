import React from "react";
import ReactDOMClient from "react-dom/client"


const root = ReactDOMClient.createRoot(document.getElementById("root"))
const element = React.createElement("h1",{},"hello world")


root.render(element)