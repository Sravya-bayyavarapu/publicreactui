import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home/home"
import Header from "./components/header";
import Footer from "./components/footer"

const routing = (
  <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));