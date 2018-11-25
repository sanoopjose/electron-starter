import React from "react";
import ReactDOM from "react-dom";
import "index.scss";
let Home = () => {
  return <webview
    src='https://app.meetnotes.co/'
    autosize='true'
    allowpopups='true'
    webpreferences="contextIsolation=yes, nativeWindowOpen=yes" />
}
ReactDOM.render(
  <Home />,
  document.getElementById("root")
);
