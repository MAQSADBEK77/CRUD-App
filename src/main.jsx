import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserReducer from "./UserReducer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastContainer position="top-right" />
    <App />
  </Provider>
);
