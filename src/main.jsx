import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SearchContextProvider } from "./context/searchContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
 <BrowserRouter>
  <SearchContextProvider>
   <React.StrictMode>
    <App />
   </React.StrictMode>
   ,
  </SearchContextProvider>
 </BrowserRouter>
);
