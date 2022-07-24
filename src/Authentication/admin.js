import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import Profile from "./profile"
require("dotenv").config();

const Admin = () => {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN_NAME}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      // redirectUri={window.location.origin}
      redirectUri="http://localhost:3000/#/admin"
      audience="hasura"
    >
      <Profile />
    </Auth0Provider>
  );
};

export default Admin;
