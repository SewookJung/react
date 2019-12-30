import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../Screens/About";
import Contact from "../Screens/Contact";
import Home from "../Screens/Home";
import Header from "../Components/Header";

function reactRouter() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default reactRouter;
