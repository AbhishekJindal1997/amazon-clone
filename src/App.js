import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from "./checkout";
function App() {
  const [sidebar, setSidebar] = useState(false);
  const showsidebar = () => setSidebar(!sidebar);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          <Route path="/" exact>
            <Header sidebar={sidebar} showsidebar={showsidebar} />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
