import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/about";
import FormPage from "./pages/Form";

export default function App() {
  return (
    <Router>
      <div>
        <p className="text-red-400">Hello</p>
        <nav>
          <ul>
            <li>
              <Link to="/react">Home</Link>
            </li>
            <li>
              <Link to="/react/about">About</Link>
            </li>
            <li>
              <Link to="/react/form">Form</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/react/about">
            <About />
          </Route>
          <Route path="/react/form">
            <FormPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
