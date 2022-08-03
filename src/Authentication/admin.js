import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout";
import Profile from "./profile";

const Admin = () => {
	const { getAccessTokenSilently, loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();

	// eslint-disable-next-line
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
		// eslint-disable-next-line
	}, [isLoading, getAccessTokenSilently]);

	// console.log("token---->", userToken);

	return (
		isAuthenticated && (
			// <div style={{ "background-color": "white" }}>
			// <LogoutButton />
			//   <img src={user.picture} alt={user.name} />
			//   <h2>{user.name}</h2>
			//   <p>{user.email}</p>
			//   {/* <p>{token}</p> */}
			// </div>
			<div>
				<LogoutButton />
				<Profile />
			</div>
		)
	);
};

export default Admin;
