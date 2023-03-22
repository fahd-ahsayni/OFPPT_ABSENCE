import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";

import { ThemeProvider } from "@material-tailwind/react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./config/store";

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
