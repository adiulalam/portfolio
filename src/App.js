import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Pages";
import Admin from "./Authentication/admin";
// import ContentObjects from "./content";
import { SkeletonTheme } from "react-loading-skeleton";
import ContentObjects from "./content";
import { conn } from "./connection/connection";
import PortfolioObject from "./Home";
import axios from "axios";

import {endpoint, headers, graphqlQuery} from "./graphql/graphql";

function App() {
  
  const [data, setData] = useState([]);

  const ContentObjects = async () => {
    const response = await axios({
      url: endpoint,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });

    if (response?.data) {

      const result = response.data.data.portfolio_content[0]
      console.log(result);
      setData(result);

      return result;
    } else {
      console.log(response.errors);
    }
  };

  useEffect(() => {
    ContentObjects();
}, []);

  // ContentObjects();
  // const k = ContentObjects();

  console.log("kkkkkkkkkkk->", data);

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
