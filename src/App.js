import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Pages";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Nav>
    </div>
  );
}

export default App;
