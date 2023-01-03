import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "This line is coming from the parcel"
);

const heading2 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
