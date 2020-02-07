import React from "react";
import "./App.css";
import Home from "./app/home/home";
import Nav from "./app/nav/nav";
import Work from "./app/work/work";
//page router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/work" component={Work} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
