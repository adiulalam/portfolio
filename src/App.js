import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Pages";

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
