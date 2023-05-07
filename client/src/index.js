import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "./styles.scss"
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const mountNode = document.getElementById('app');
// const root = createRoot(mountNode)

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );