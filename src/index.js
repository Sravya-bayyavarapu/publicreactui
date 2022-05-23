import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home/home"
import MckHeader from "./components/header";
import MckFooter from "./components/footer"

const routing = (
  <Router>
    <div class="position-relative">
      <MckHeader />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <MckFooter />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));