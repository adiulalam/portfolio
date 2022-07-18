import React, { useContext, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Nav from './components/Nav';
import { PortfolioContext } from './context/portfolio';
import Home from './Home';
// import Content from "./content";
const { conn } = require('./connection/connection');
require('isomorphic-fetch');

const getContentQuery = `
  query getContent {
    portfolio_content {
      profilePic
      backgroundImage
      fullName
      career
      resume
      education
      location
      email
      linkedin
      github
      description
      shortAboutMe {
        base
        loop
      }
      projects(order_by: { projectdate: desc }) {
        title
        description
        time
        application
        details
        technologies
        media {
          type
          src
          thumbnail
        }
      }
    }
  }
`;

function App() {
  const { setPortfolioContent } = useContext(PortfolioContext);

  useEffect(async () => {
    const { portfolio_content } = await conn({ query: getContentQuery });
    setPortfolioContent(portfolio_content?.[0]);
  }, []);

  return (
    <Home />
    // <div>
    //   <Nav>

    //     <Switch>
    //       <Route exact path="/" render={(props) => <Home {...props} />} />
    //       <Route render={() => <Redirect to="/" />} />
    //     </Switch>
    //   </Nav>
    // </div>
  );
}

export default App;
