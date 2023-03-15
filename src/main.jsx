import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";

import { ThemeProvider } from "@material-tailwind/react";

import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./config/reducer";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducer);

const element = document.getElementById("root");
const root = createRoot(element);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
