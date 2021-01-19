import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "../config/routes";

import "../styles/main.scss";

const App = () => (
  <Router>
    {routes.map((route, i) => (
      <Route key={i} {...route} />
    ))}
  </Router>
);

export default App;
