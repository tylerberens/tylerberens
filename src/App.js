import React from "react";
import "./App.css";
import Home from "./app/home/home";
import Nav from "./app/nav/nav";
import Work from "./app/work/work";
import Blog from "./app/blog/blog";
import Resume from "./app/resume/resume";
import Footer from "./app/footer/footer";
import ScrollToTop from "./app/components/scrollTop";
//page router
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <ScrollToTop basename='/' />
      <div className="App">
        <div id="scroll-container">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/work" component={Work} />
            <Route path="/blog" component={Blog} />
            <Route path="/resume" component={Resume} />
          </Switch>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
