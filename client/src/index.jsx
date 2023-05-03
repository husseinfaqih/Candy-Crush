import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CartProvider from "./store/Context";

import AppWrapper from "./AppWrapper";
import App from "./App";

ReactDOM.render(
  <CartProvider>
    <AppWrapper>
      <App />
    </AppWrapper>
  </CartProvider>,
  document.getElementById("root")
);
