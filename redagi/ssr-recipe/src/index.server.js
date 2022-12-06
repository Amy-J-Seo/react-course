import React from "react";
import ReactDOMServer from "react-dom/server";

const html = ReactDOMServer.renderToString(
  <div>Hello server side rendering</div>
);

console.log(html);
