import ReactDOM from "react-dom/client";
import "../src/assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
