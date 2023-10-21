import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { App } from "./components/App";

const mainRoot = document.getElementById("root");

const root = ReactDOM.createRoot(mainRoot);

root.render(<App />);
