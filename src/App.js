import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
