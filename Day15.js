import React, { Fragment } from "react";
import "./index.css"

import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
   <Router>
    <main>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

    <Route path="/" component={Home} />
    </main>
</Router>
  );
}

const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <FakeText />
  </Fragment>
  );