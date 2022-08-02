import React, { createContext, useEffect, useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { Redirect, Route, Switch } from "react-router-dom";
import Admin from "./Authentication/admin";
import Nav from "./components/Nav";
import Home from "./components/Pages";
import ContentObjects from "./connection/connection";
import Loading from "./connection/loading";

export const portfolioContext = createContext();

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

	return (
		<div>
			<SkeletonTheme borderRadius="1rem" baseColor="black" highlightColor="blue">
				<portfolioContext.Provider value={portfolioProps}>
					<Switch>
						<Route exact path="/admin" render={(props) => <Admin portfolioProps={portfolioProps} {...props} />} />
						<Nav portfolioProps={portfolioProps}>
							<Route exact path="/" render={(props) => <Home {...props} />} />
							<Route render={() => <Redirect to="/" />} />
						</Nav>
					</Switch>
				</portfolioContext.Provider>
			</SkeletonTheme>
		</div>
	);
}

export default App;
