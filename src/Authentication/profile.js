import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./login";
import LogoutButton from "./logout";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return <LoginButton />;
  }

  return (
    isAuthenticated && (
      <div>
        <LogoutButton />
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
