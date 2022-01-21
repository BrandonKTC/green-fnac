import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css"
import ListItem from "../src/components/ListItem"

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/list" element={<ListItem />}/> 
    </Routes>
  </BrowserRouter>,
  rootElement
);