import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Pages";
import Admin from "./Authentication/admin";
import { SkeletonTheme } from "react-loading-skeleton";
import Loading from "./connection/loading";
import ContentObjects from "./connection/connection";

function App() {
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

	if (isLoading) return <Loading />;

	const portfolioProps = data;

	console.log("Test---->");

	return (
		<div>
			<SkeletonTheme borderRadius="1rem" baseColor="black" highlightColor="blue">
				<Nav portfolioProps={portfolioProps}>
					<Switch>
						<Route exact path="/admin" render={(props) => <Admin {...props} />} />
						<Route exact path="/" render={(props) => <Home portfolioProps={portfolioProps} {...props} />} />
						<Route render={() => <Redirect to="/" />} />
					</Switch>
				</Nav>
			</SkeletonTheme>
		</div>
	);
}

export default App;
