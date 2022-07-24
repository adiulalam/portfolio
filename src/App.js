import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Pages";
import Admin from "./Authentication/admin";
// import ContentObjects from "./content";
import { SkeletonTheme } from "react-loading-skeleton";
import ContentObjects from "./content";

function App() {
  return (
    <div>
      <SkeletonTheme
        borderRadius="1rem"
        baseColor="black"
        highlightColor="blue"
      >
        <Nav>
          <Switch>
            <Route
              exact
              path="/admin"
              render={(props) => <Admin {...props} />}
            />
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Nav>
      </SkeletonTheme>
    </div>
  );
}

export default App;
