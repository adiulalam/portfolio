import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
	const { logout } = useAuth0();

	return (
		<div>
			<button
				class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
				onClick={() => logout({ returnTo: window.location.origin })}
			>
				Log Out
			</button>
			<br></br>
		</div>
	);
};

export default LogoutButton;
