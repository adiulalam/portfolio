import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Pages";
import Admin from "./Authentication/admin";
import { SkeletonTheme } from "react-loading-skeleton";
import PacmanLoader from "react-spinners/PacmanLoader";
import CircleLoader from "react-spinners/CircleLoader";
import BarLoader from "react-spinners/BarLoader";
import MoonLoader from "react-spinners/MoonLoader";
import ContentObjects from "./connection/connection";

function App() {
  const [randNum, setRandNum] = useState(null);
  useEffect(() => {
    setRandNum(Math.floor(Math.random() * 4));
  }, []);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const result = await ContentObjects();
      setData(result);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading)
    return (
      (document.body.style.background = "#000000"),
      (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {randNum === 0 ? (
            <PacmanLoader speedMultiplier="2" color="#ffffff" size="80px" />
          ) : randNum === 1 ? (
            <CircleLoader color="#ffffff" size="200px" />
          ) : randNum === 2 ? (
            <BarLoader color="#ffffff" height="10px" width="300px" />
          ) : (
            <MoonLoader color="#ffffff" size="80px" />
          )}
        </div>
      )
    );

  const portfolioProps = data;

  return (
    <div>
      <SkeletonTheme
        borderRadius="1rem"
        baseColor="black"
        highlightColor="blue"
      >
        <Nav portfolioProps={portfolioProps}>
          <Switch>
          <Route exact path="/admin" render={(props) => <Admin {...props} />} />
          <Route
            exact
            path="/"
            render={(props) => (
              <Home portfolioProps={portfolioProps} {...props} />
            )}
          />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Nav>
      </SkeletonTheme>
    </div>
  );
}

export default App;
