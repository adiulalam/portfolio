import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from "./login";
import LogoutButton from "./logout";

const Profile = () => {
  const {
    getAccessTokenSilently,
    loginWithRedirect,
    user,
    isAuthenticated,
    isLoading,
  } = useAuth0();

  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    (async function login() {
      if (!isLoading && !user && !isAuthenticated) {
        await loginWithRedirect();
      } else {
        try {
          const token = await getAccessTokenSilently({
            audience: "hasura",
          });
          setUserToken(token);
          // console.log("token---->", token);
        } catch (e) {
          console.error(e);
        }
      }
    })();
  }, [isLoading, getAccessTokenSilently]);

  console.log("token---->", user);

  return (
    isAuthenticated && (
      <div style={{ "background-color": "white" }}>
        <LogoutButton />
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {/* <p>{token}</p> */}
      </div>
    )
  );
};

export default Profile;
